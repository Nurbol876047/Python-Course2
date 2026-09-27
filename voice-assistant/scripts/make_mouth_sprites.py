"""static/mouth/{closed,mid,open}.png және rect.json жасайды: жеңіл (GPU-сыз)
ерін анимациясы үшін ауыз аймағының үш күйі (аудио дауыс деңгейіне қарай
фронтендте ауыстырылады, backend/main.py:/api/talk ешбір видео генерацияламайды).

Қолданылуы:
    python3 scripts/make_mouth_sprites.py
"""
import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

BASE_DIR = Path(__file__).resolve().parent.parent
STATIC_DIR = BASE_DIR / "static"
MOUTH_DIR = STATIC_DIR / "mouth"

# static/avatar.jpg (1084x1600, портрет) үшін қолмен калибрленген тіктөртбұрыш.
# Фотоны ауыстырсаңыз, осы фракцияларды қайта тексеріңіз.
RECT_FRAC = (0.395, 0.325, 0.625, 0.415)  # x0, y0, x1, y1 — сурет өлшемінің үлесі
SEAM_FRAC = 0.44  # ерін жігінің (үстіңгі/астыңғы ерін түйісетін сызық) кесіндідегі орны
FEATHER = 22  # шеттерін фотоға сіңіру үшін жұмсарту радиусы (px)


def feather_mask(size: tuple[int, int]) -> Image.Image:
    w, h = size
    mask = Image.new("L", (w, h), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((FEATHER, FEATHER, w - FEATHER, h - FEATHER), fill=255)
    return mask.filter(ImageFilter.GaussianBlur(FEATHER))


def _smoothstep(t: np.ndarray) -> np.ndarray:
    t = np.clip(t, 0.0, 1.0)
    return t * t * (3 - 2 * t)


# Ауыздың толық ашылатын аймағы + ернін бұрыштарына қарай жұмсақ тарылу
# (бұрыштар ашық кезде де жабық қалады — тіктөртбұрыш емес, бадам пішінді саңылау).
X_TAPER_FRAC = (0.18, 0.32, 0.60, 0.75)
MOUTH_INTERIOR_RGB = (55, 20, 18)


def make_open_variant(crop: Image.Image, seam_y: int, drop_px: int, margin: int, darken: float) -> Image.Image:
    """Ерін жігі маңайын тегіс 2D ресемплингпен созып, жақ ашылғандай көрініс жасайды.

    Қатаң тіктөртбұрыш кесу орнына тегіс (smoothstep) ресемплинг қолданылады:
    жіңішке қараңғы ерін жігі осы аймақта "созылып" табиғи саңылау сияқты
    көрінеді, ал көлденеңінен бадам пішінді тарылу ернін бұрыштарын
    өзгеріссіз қалдырады (нақты ауыз солай ашылады).
    """
    w, h = crop.size
    arr = np.asarray(crop, dtype=np.float32)
    out_h = h + drop_px

    x0, x1, x2, x3 = (f * w for f in X_TAPER_FRAC)
    x = np.arange(w, dtype=np.float32)
    rising = _smoothstep((x - x0) / (x1 - x0))
    falling = _smoothstep((x3 - x) / (x3 - x2))
    horiz = np.minimum(rising, falling)  # (w,) — 0 бұрыштарда, 1 ортасында

    y_out = np.arange(out_h, dtype=np.float32)
    vert = _smoothstep((y_out - (seam_y - margin)) / (2 * margin))  # (out_h,)

    local = vert[:, None] * horiz[None, :]  # (out_h, w) — ашылу дәрежесі 0..1
    y_in = np.clip(y_out[:, None] - drop_px * local, 0, h - 1)

    y0i = np.floor(y_in).astype(np.int32)
    y1i = np.clip(y0i + 1, 0, h - 1)
    frac = (y_in - y0i)[..., None]
    x_idx = np.broadcast_to(np.arange(w, dtype=np.int32), (out_h, w))
    out = arr[y0i, x_idx] * (1 - frac) + arr[y1i, x_idx] * frac  # (out_h, w, 4)

    # Қараюдың шыңы тек өту жолағының маңайында (vert-тің өзінде), ал оның
    # мөлшері horiz арқылы көлденеңінен масштабталады — әйтпесе бұрыштарда
    # (horiz жартылай мәнде) қараю төменге дейін тұрақты жолақ болып қалады.
    vert_peak = 4 * vert * (1 - vert)  # (out_h,) — тек y бойынша, бұрышқа тәуелсіз
    blend = (darken * vert_peak[:, None] * horiz[None, :])[..., None]
    target = np.array([*MOUTH_INTERIOR_RGB, 255], dtype=np.float32)
    out = out * (1 - blend) + target * blend

    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), mode="RGBA")


def main() -> None:
    src = STATIC_DIR / "avatar.jpg"
    if not src.exists():
        print(f"Қате: {src} табылмады.")
        sys.exit(1)

    im = Image.open(src).convert("RGB")
    w, h = im.size
    x0 = int(RECT_FRAC[0] * w)
    y0 = int(RECT_FRAC[1] * h)
    x1 = int(RECT_FRAC[2] * w)
    y1 = int(RECT_FRAC[3] * h)

    crop = im.crop((x0, y0, x1, y1)).convert("RGBA")
    cw, ch = crop.size
    seam_y = int(ch * SEAM_FRAC)

    variants = {
        "closed": crop,
        "mid": make_open_variant(crop, seam_y, drop_px=10, margin=10, darken=0.35),
        "open": make_open_variant(crop, seam_y, drop_px=20, margin=14, darken=0.55),
    }

    MOUTH_DIR.mkdir(parents=True, exist_ok=True)
    sizes = {}
    for name, sprite in variants.items():
        sprite = sprite.convert("RGBA")
        sprite.putalpha(feather_mask(sprite.size))
        out_path = MOUTH_DIR / f"{name}.png"
        sprite.save(out_path)
        sizes[name] = {"width": sprite.width, "height": sprite.height}
        print(f"Жасалды: {out_path} ({sprite.width}x{sprite.height})")

    rect_data = {
        "image_width": w,
        "image_height": h,
        "anchor_x": x0,
        "anchor_y": y0,
        "variants": sizes,
    }
    (MOUTH_DIR / "rect.json").write_text(json.dumps(rect_data, ensure_ascii=False, indent=2))
    print(f"Жасалды: {MOUTH_DIR / 'rect.json'}")


if __name__ == "__main__":
    main()
