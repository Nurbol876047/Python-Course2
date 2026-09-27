import logging
import shutil
import subprocess
import time
import uuid
from pathlib import Path

logger = logging.getLogger("voice_assistant.avatar")

BASE_DIR = Path(__file__).resolve().parent.parent
SADTALKER_DIR = BASE_DIR / "models" / "SadTalker"
SADTALKER_PYTHON = SADTALKER_DIR / ".venv" / "bin" / "python3"
CHECKPOINTS_DIR = SADTALKER_DIR / "checkpoints"
SOURCE_IMAGE = BASE_DIR / "static" / "avatar.jpg"

VIDEO_DIR = BASE_DIR / "media" / "video"
VIDEO_DIR.mkdir(parents=True, exist_ok=True)

GENERATION_TIMEOUT_SECONDS = 600


class AvatarError(Exception):
    pass


def is_available() -> bool:
    return (
        SADTALKER_PYTHON.exists()
        and SOURCE_IMAGE.exists()
        and (CHECKPOINTS_DIR / "SadTalker_V0.0.2_256.safetensors").exists()
    )


def _reencode_to_h264_aac(src: Path, dst: Path) -> None:
    proc = subprocess.run(
        [
            "ffmpeg", "-y", "-i", str(src),
            "-c:v", "libx264", "-pix_fmt", "yuv420p",
            "-c:a", "aac", "-b:a", "128k",
            "-movflags", "+faststart",
            str(dst),
        ],
        capture_output=True,
    )
    if proc.returncode != 0 or not dst.exists():
        logger.error("ffmpeg қайта кодтау қатесі: %s", proc.stderr.decode(errors="ignore")[-1000:])
        raise AvatarError("Видеоны қайта кодтау сәтсіз аяқталды")


def generate_talking_video(audio_path: Path) -> Path:
    """audio_path — дайын wav файл (Piper TTS шығысы). Қайтарады: дайын mp4 (H.264+AAC) жолы."""
    if not is_available():
        raise AvatarError("SadTalker қолжетімсіз (орнатылмаған, GPU жоқ немесе фото жоқ)")

    work_dir = VIDEO_DIR / f"work_{uuid.uuid4().hex}"
    work_dir.mkdir(parents=True, exist_ok=True)

    cmd = [
        str(SADTALKER_PYTHON), "inference.py",
        "--driven_audio", str(audio_path.resolve()),
        "--source_image", str(SOURCE_IMAGE.resolve()),
        "--checkpoint_dir", "checkpoints",
        "--result_dir", str(work_dir.resolve()),
        "--preprocess", "full",
        "--enhancer", "gfpgan",
        "--size", "256",
        "--still",
    ]

    started = time.time()
    logger.info("SadTalker генерациясы басталды")
    try:
        proc = subprocess.run(
            cmd,
            cwd=str(SADTALKER_DIR),
            capture_output=True,
            text=True,
            timeout=GENERATION_TIMEOUT_SECONDS,
        )
    except subprocess.TimeoutExpired as exc:
        shutil.rmtree(work_dir, ignore_errors=True)
        raise AvatarError("Видео генерациясы уақыты бітті (тым ұзақ)") from exc

    elapsed = time.time() - started
    if proc.returncode != 0:
        logger.error("SadTalker қатесі (returncode=%s):\n%s", proc.returncode, proc.stderr[-3000:])
        shutil.rmtree(work_dir, ignore_errors=True)
        raise AvatarError("Видео генерациясы сәтсіз аяқталды")

    logger.info("SadTalker генерациясы аяқталды (%.1f сек)", elapsed)

    mp4_files = sorted(work_dir.glob("*.mp4"), key=lambda p: p.stat().st_mtime)
    if not mp4_files:
        shutil.rmtree(work_dir, ignore_errors=True)
        raise AvatarError("SadTalker mp4 файлын жасамады")

    raw_video = mp4_files[-1]
    final_path = VIDEO_DIR / f"{uuid.uuid4().hex}.mp4"
    _reencode_to_h264_aac(raw_video, final_path)

    shutil.rmtree(work_dir, ignore_errors=True)
    return final_path


def cleanup_old_videos(max_age_seconds: int = 3600) -> None:
    cutoff = time.time() - max_age_seconds
    for path in VIDEO_DIR.glob("*.mp4"):
        try:
            if path.stat().st_mtime < cutoff:
                path.unlink()
        except OSError:
            pass
