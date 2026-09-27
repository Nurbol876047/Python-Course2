# Дауыстық көмекші (Python оқу платформасы)

Python бойынша оқу платформасының дауыстық көмекші бөлімі: FastAPI бэкенді
статикалық фронтендті (таза HTML/CSS/JS) раздайды. Толық цикл: дауысты тану
(STT) → Gemini арқылы жауап → жауапты дауыспен айту (TTS) → мұғалім фотосын
ерін қимылымен «сөйлету». Ерін анимациясы фронтендте, Web Audio API арқылы
ойнап тұрған дауыс деңгейіне қарай дайын спрайттарды (жабық/жартылай/ашық
ауыз) ауыстыру жолымен жасалады — әр жауапқа GPU-мен видео генерациялау
керек емес (SadTalker тек `static/idle.mp4` дайындауға, бір рет қолданылады,
төмендегі бөлімді қараңыз). Тек ускорение/кэш/лимиттер (Этап 6) әлі
қосылмаған.

## Құрылым

```
voice-assistant/
├── backend/
│   ├── main.py       # FastAPI: статиканы раздайды, /api/* эндпоинттер
│   ├── config.py     # .env файлынан баптауларды жүктейді
│   ├── stt.py         # faster-whisper: дауысты мәтінге айналдыру
│   ├── gemini.py      # Gemini API: JSON жауап (speech/display)
│   ├── tts.py          # Piper TTS: мәтінді дауысқа айналдыру
│   ├── avatar.py        # SadTalker: idle.mp4 дайындауға арналған көмекші (жауап видеосын жасамайды)
│   └── db.py          # SQLite: сөйлесу тарихы (messages кестесі)
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js         # MediaRecorder, STT/Gemini/TTS шақыру + Web Audio арқылы ерін анимациясы
├── scripts/
│   ├── make_idle.py           # static/idle.mp4 жасайтын скрипт
│   └── make_mouth_sprites.py  # static/mouth/{closed,mid,open}.png + rect.json жасайтын скрипт
├── static/
│   ├── avatar.jpg     # мұғалім фотосы (өзіңіз қосасыз)
│   ├── idle.mp4        # "үнсіз күту" видеосы (make_idle.py жасайды)
│   └── mouth/           # ерін спрайттары + rect.json (make_mouth_sprites.py жасайды)
├── models/
│   ├── piper/          # Piper дауыс модельдері (.onnx, .onnx.json)
│   └── SadTalker/       # SadTalker репозиторийі + өз .venv-і + checkpoints
├── media/
│   ├── audio/           # Piper шығарған уақытша wav файлдар (1 сағаттан кейін өшеді)
│   └── video/            # SadTalker шығарған уақытша mp4 файлдар
├── .env.example
├── requirements.txt
└── voice_assistant.db   # SQLite файлы (алғашқы сұраныста автоматты жасалады)
```

## Талаптар

- Python 3.11+
- `ffmpeg` жүйеде орнатылған болуы керек (`ffmpeg -version` тексеріңіз)
- Gemini API кілті: https://aistudio.google.com/apikey
- **SadTalker (Этап 5) үшін:** NVIDIA GPU (кемінде 4 ГБ VRAM), диск —
  шамамен 5 ГБ бос орын (PyTorch + checkpoints). GPU жоқ болса немесе
  генерация сәтсіз болса, жүйе автоматты түрде тек аудио қайтарады —
  бұл қате емес, қорғаныс механизмі.

## Орнату (негізгі бэкенд)

```bash
cd voice-assistant
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
```

`.env` файлын ашып, нақты `GEMINI_API_KEY` мәнін қойыңыз:

```
GEMINI_API_KEY=сенің_кілтің
GEMINI_MODEL=gemini-3.8-flash
WHISPER_MODEL=small
WHISPER_LANG=kk
PIPER_VOICE=kk_KZ-issai-high
PIPER_SPEAKER=4
```

- `WHISPER_MODEL` — `tiny`, `base`, `small`, `medium`. Бірінші іске
  қосқанда Hugging Face-тен автоматты жүктеледі (`small` ≈ 500 МБ).
- `WHISPER_LANG` — тану тілі: `kk` немесе `ru`.
- `GEMINI_MODEL` — актуалды атын Google AI Studio-дан тексеріңіз.
- `PIPER_VOICE` / `PIPER_SPEAKER` — төмендегі «Piper дауыс файлдары»
  бөлімін қараңыз.

Мұғалім фотосын `static/avatar.jpg` жолына қойыңыз (JPEG, портрет,
бет анық көрінетін болсын — SadTalker осы фотоны анимациялайды).

**Маңызды:** `.env` файлын өзгерткен сайын серверді толық қайта іске
қосу керек (`--reload` тек `.py` файлдарының өзгеруін бақылайды).

## Piper дауыс файлдары (Этап 4)

Дауыс модельдерін қолмен жүктеп алу қажет (`piper-tts` пакеті арқылы да
болады):

```bash
mkdir -p models/piper && cd models/piper

# Қазақша (көп спикерлі, high quality; спикерлер: 0,1 — ер, 2,3,4,5 — әйел)
curl -sL "https://huggingface.co/rhasspy/piper-voices/resolve/main/kk/kk_KZ/issai/high/kk_KZ-issai-high.onnx?download=true" -o kk_KZ-issai-high.onnx
curl -sL "https://huggingface.co/rhasspy/piper-voices/resolve/main/kk/kk_KZ/issai/high/kk_KZ-issai-high.onnx.json?download=true" -o kk_KZ-issai-high.onnx.json

# Орысша (Ирина, әйел дауысы, medium quality)
curl -sL "https://huggingface.co/rhasspy/piper-voices/resolve/main/ru/ru_RU/irina/medium/ru_RU-irina-medium.onnx?download=true" -o ru_RU-irina-medium.onnx
curl -sL "https://huggingface.co/rhasspy/piper-voices/resolve/main/ru/ru_RU/irina/medium/ru_RU-irina-medium.onnx.json?download=true" -o ru_RU-irina-medium.onnx.json
```

Толық тізім: https://github.com/rhasspy/piper/blob/master/VOICES.md
(іздеу: `kk_KZ`, `ru_RU`). `.env`-де `PIPER_VOICE` мәнін таңдалған дауыс
атына өзгертіңіз (мыс. орысшаға ауысу үшін `PIPER_VOICE=ru_RU-irina-medium`,
`PIPER_SPEAKER=0`, себебі ол бір спикерлі модель).

## SadTalker орнату (Этап 5)

SadTalker өз алдына бөлек `.venv`-де орнатылады (ескі numpy/scipy
пиндері негізгі бэкендпен — faster-whisper/google-genai — қайшы келеді):

```bash
cd voice-assistant/models
git clone https://github.com/OpenTalker/SadTalker.git SadTalker
cd SadTalker

python3 -m venv .venv
source .venv/bin/activate

# GPU драйверіңізге сай CUDA нұсқасын таңдаңыз (мыс. cu121, cu124)
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu121

pip install -r requirements.txt
# Ескерту: basicsr 1.4.2 ескі torchvision импортын қолданады
# (`torchvision.transforms.functional_tensor`), ол жаңа torchvision-да жоқ.
# Егер қате шықса, .venv/lib/.../basicsr/data/degradations.py файлындағы
#   from torchvision.transforms.functional_tensor import rgb_to_grayscale
# жолын мынаған ауыстырыңыз:
#   from torchvision.transforms.functional import rgb_to_grayscale

mkdir -p checkpoints gfpgan/weights

wget -nc https://github.com/OpenTalker/SadTalker/releases/download/v0.0.2-rc/mapping_00109-model.pth.tar -O checkpoints/mapping_00109-model.pth.tar
wget -nc https://github.com/OpenTalker/SadTalker/releases/download/v0.0.2-rc/mapping_00229-model.pth.tar -O checkpoints/mapping_00229-model.pth.tar
wget -nc https://github.com/OpenTalker/SadTalker/releases/download/v0.0.2-rc/SadTalker_V0.0.2_256.safetensors -O checkpoints/SadTalker_V0.0.2_256.safetensors

wget -nc https://github.com/xinntao/facexlib/releases/download/v0.1.0/alignment_WFLW_4HG.pth -O gfpgan/weights/alignment_WFLW_4HG.pth
wget -nc https://github.com/xinntao/facexlib/releases/download/v0.1.0/detection_Resnet50_Final.pth -O gfpgan/weights/detection_Resnet50_Final.pth
wget -nc https://github.com/TencentARC/GFPGAN/releases/download/v1.3.0/GFPGANv1.4.pth -O gfpgan/weights/GFPGANv1.4.pth
wget -nc https://github.com/xinntao/facexlib/releases/download/v0.2.2/parsing_parsenet.pth -O gfpgan/weights/parsing_parsenet.pth
```

Жалпы жүктеу көлемі ≈ 1.9 ГБ (256px модель; 512px нұсқасын 4 ГБ
VRAM-мен қолданбаған дұрыс — есте жоқ болады).

`backend/avatar.py` осы `.venv`-дегі Python-ды subprocess арқылы шақырады
(`models/SadTalker/.venv/bin/python3 inference.py ...`), негізгі бэкендпен
тікелей байланыспайды. Егер `models/SadTalker/.venv` немесе checkpoint
файлдары жоқ болса, `avatar.is_available()` `False` қайтарады және жүйе
автоматты түрде тек аудиомен шектеледі (бұзылмайды).

### Idle видео жасау

```bash
cd voice-assistant
source .venv/bin/activate
python3 scripts/make_idle.py
```

Бұл `static/idle.mp4` файлын жасайды (SadTalker арқылы, фото + 5.5 сек
тыныш аудио) — көмекші үнсіз тұрғанда осы видео циклмен ойналады
(жанама моргау/жеңіл қимыл). Файл болмаса, фронт статикалық фотоға
қайтады (бұзылмайды).

### Ерін спрайттарын жасау

```bash
python3 scripts/make_mouth_sprites.py
```

Бұл `static/avatar.jpg`-тан ауыз аймағын тауып, `static/mouth/{closed,mid,open}.png`
және `rect.json` жасайды (PIL/numpy ғана, GPU керек емес, бірнеше секунд
кетеді). Жауап кезінде фронтенд осы үш суретті дауыс деңгейіне қарай
ауыстырады (`app.js`:`speakWithMouth`) — SadTalker-ге қарағанда әлдеқайда
жеңіл, бірақ фотореалистік емес, жеңіл-желпі анимация ғана. Фотоны
ауыстырсаңыз, скриптегі `RECT_FRAC`/`SEAM_FRAC` мәндерін қайта калибрлеп,
скриптті қайта іске қосыңыз.

## Іске қосу

```bash
uvicorn backend.main:app --reload --port 8422
```

Бірінші старт кезінде Whisper және Piper модельдері жүктеліп жатқанда
сервер бірнеше секундқа "тоқтап тұрғандай" көрінуі мүмкін — логтардан
"дайын" деген жазуларды күтіңіз.

Браузерде ашыңыз: **http://localhost:8422**

## Тексеру

1. Басты бет: мұғалім карточкасы (фото немесе idle видео), диалог
   таспасы, микрофон түймесі, мәтін өрісі.
2. `http://localhost:8422/api/health` — `{"status": "ok", ...}`.
3. **Мәтінмен сұрақ:** сұрақ жазып, «Жіберу». Күй «Ойлануда...» →
   жауап диалогта → «Жауап беруде...» кезінде дауыс ойналады да, ерін
   спрайттары дауыс деңгейіне қарай ауысады → «Көмекке дайын»-ға қайтады.
4. **Дауыспен сұрақ:** микрофонды басу → сөйлеу → қайта басу (тоқтату).
   Танылған мәтін диалогта, содан кейін автоматты жауап + дауыс/ерін анимациясы.
5. **Ерін анимациясы:** `static/mouth/rect.json` жүктелмесе немесе Web Audio
   API қолжетімсіз болса (сирек), ерін қозғалмайды, бірақ дауыс бәрібір
   ойналады — қате шықпайды.
6. **Қателерді тексеру:** микрофонды басып дереу тоқтату (тым қысқа
   жазба), Gemini уақытша қолжетімсіз болу, TTS сәтсіздігі — барлығында
   түсінікті хабарлама және жүйе жұмысын жалғастырады.
7. Терезе енін тарылтып, мобильді көріністі тексеріңіз.

## Белгілі шектеулер

- Gemini серверлері кейде уақытша жүктелген болады (503) — бэкенд 3 рет
  қайталап көреді, содан кейін ғана қате хабарламасы шығады.
- Ерін анимациясы дауыс деңгейіне негізделген жеңіл эффект (3 спрайт
  ауыстыру) — SadTalker сияқты нақты фонема/ерін пішінін қайталамайды,
  бірақ GPU-сыз, кідіріссіз және шексіз ұзақ жұмыс істейді.

## Келесі кезең (Этап 6)

- Кэш (хэш → аудио файл), сұраныс лимиті, «Тоқтату»/«Қайталау» түймелері,
  файлға логтау.
