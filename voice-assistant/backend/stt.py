import logging

from openai import APIConnectionError, APIError, OpenAI, RateLimitError

from backend.config import settings

logger = logging.getLogger("voice_assistant.stt")


class STTError(Exception):
    def __init__(self, code: str, message: str):
        self.code = code
        self.message = message
        super().__init__(message)


def _client() -> OpenAI:
    if not settings.openai_api_key:
        raise STTError("no_api_key", "OPENAI_API_KEY орнатылмаған")
    return OpenAI(api_key=settings.openai_api_key)


def transcribe(audio_bytes: bytes, filename: str = "recording.webm") -> str:
    client = _client()
    try:
        result = client.audio.transcriptions.create(
            model="whisper-1",
            file=(filename, audio_bytes),
        )
    except RateLimitError as exc:
        logger.warning("OpenAI STT квотасы/лимиті таусылды: %s", exc)
        raise STTError("rate_limit", "OpenAI уақытша қолжетімсіз, қайта көріңіз") from exc
    except (APIConnectionError, APIError) as exc:
        logger.warning("OpenAI STT сұранысы сәтсіз аяқталды: %s", exc)
        raise STTError("api_error", "Дауысты тану уақытша қолжетімсіз, қайта көріңіз") from exc
    except Exception as exc:
        logger.exception("OpenAI STT сұранысы сәтсіз аяқталды")
        raise STTError("unknown", "Дауысты тану мүмкін болмады") from exc

    text = (result.text or "").strip()
    if not text:
        raise STTError("empty", "Дауыс танылмады, қайта көріңіз.")
    return text
