import logging
from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from backend import db
from backend.config import settings
from backend.llm import LLMError, ask_llm
from backend.stt import STTError, transcribe
from backend.video_library import VIDEO_LIBRARY, validate_video_files

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s: %(message)s")

BASE_DIR = Path(__file__).resolve().parent.parent
STATIC_DIR = BASE_DIR / "static"

# Продакшенде (Render) осы бэкенд бүкіл сайтты (3 модульді басты бет,
# /python-omirde, /voice-assistant) де раздайды — Next.js static export
# нәтижесі (`npm run build`, repo түбіріндегі out/). Ол жоқ болса
# (мыс. локалды `uvicorn backend.main:app` тек ассистентті тексеру үшін
# іске қосылғанда), өз алдына frontend/ қалдырады.
NEXT_EXPORT_DIR = BASE_DIR.parent / "out"
FRONTEND_DIR = NEXT_EXPORT_DIR if NEXT_EXPORT_DIR.is_dir() else BASE_DIR / "frontend"


@asynccontextmanager
async def lifespan(app: FastAPI):
    db.init_db()
    validate_video_files()  # VIDEO_LIBRARY-дегі әр жазбаға файл бар-жоғын тексереміз
    yield


from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Python дауыстық көмекші", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # В продакшене лучше указать точный URL вашего Next.js сайта
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.middleware("http")
async def no_cache_frontend(request, call_next):
    # index.html/app.js/style.css браузерде ескіріп қалмас үшін — код
    # өзгерсе, пайдаланушы бетті жаңартқанда бірден жаңа нұсқасын көреді.
    # /static (видео, аватар) файлдары үлкен әрі өзгермейді,
    # сол себепті оларға бұл ереже қолданылмайды.
    response = await call_next(request)
    if not request.url.path.startswith(("/static/", "/api/")):
        response.headers["Cache-Control"] = "no-store, no-cache, must-revalidate"
    return response


class AskRequest(BaseModel):
    text: str
    session_id: str


@app.get("/api/health")
def health_check():
    return {"status": "ok", "gemini_model": settings.gemini_model}


@app.post("/api/stt")
async def speech_to_text(audio: UploadFile = File(...)):
    raw_audio = await audio.read()
    try:
        text = transcribe(raw_audio, filename=audio.filename or "recording.webm")
    except STTError as exc:
        raise HTTPException(status_code=422, detail={"code": exc.code, "message": exc.message})
    return {"text": text}


@app.post("/api/ask")
def ask(payload: AskRequest):
    question = payload.text.strip()
    if not question:
        raise HTTPException(
            status_code=422,
            detail={"code": "empty_question", "message": "Сұрақ мәтіні бос болмауы керек."},
        )

    history = db.get_history(payload.session_id, limit=10)
    db.add_message(payload.session_id, "user", question)

    try:
        answer = ask_llm(question, history)
    except LLMError as exc:
        raise HTTPException(status_code=502, detail={"code": "llm_error", "message": str(exc)})

    db.add_message(payload.session_id, "assistant", answer.display)
    video = VIDEO_LIBRARY.get(answer.video_key) if answer.video_key else None
    return {
        "speech": answer.speech,
        "display": answer.display,
        "video_url": video["url"] if video else None,
    }


app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")
app.mount("/", StaticFiles(directory=FRONTEND_DIR, html=True), name="frontend")
