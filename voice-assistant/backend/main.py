import logging
from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel

from backend import db
from backend.config import settings
from backend.llm import LLMError, ask_llm
from backend.video_library import VIDEO_LIBRARY, validate_video_files

logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(name)s: %(message)s")

BASE_DIR = Path(__file__).resolve().parent.parent
FRONTEND_DIR = BASE_DIR / "frontend"
STATIC_DIR = BASE_DIR / "static"


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
    # /static (видео, аватар) и /media файлдары үлкен әрі өзгермейді,
    # сол себепті оларға бұл ереже қолданылмайды.
    response = await call_next(request)
    if not request.url.path.startswith(("/static/", "/media/", "/api/")):
        response.headers["Cache-Control"] = "no-store, no-cache, must-revalidate"
    return response


class AskRequest(BaseModel):
    text: str
    session_id: str


@app.get("/api/health")
def health_check():
    return {"status": "ok", "gemini_model": settings.gemini_model}


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


app.mount("/media", StaticFiles(directory=BASE_DIR / "media"), name="media")
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")
app.mount("/", StaticFiles(directory=FRONTEND_DIR, html=True), name="frontend")
