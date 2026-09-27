import os
from dataclasses import dataclass
from pathlib import Path

from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR / ".env")


def _gemini_api_keys() -> tuple[str, ...]:
    keys = [
        os.getenv("GEMINI_API_KEY", ""),
        os.getenv("GEMINI_API_KEY_2", ""),
        os.getenv("GEMINI_API_KEY_3", ""),
    ]
    return tuple(key for key in keys if key)


@dataclass
class Settings:
    openai_api_key: str = os.getenv("OPENAI_API_KEY", "")
    openai_model: str = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
    gemini_api_keys: tuple[str, ...] = _gemini_api_keys()
    gemini_model: str = os.getenv("GEMINI_MODEL", "gemini-3.8-flash")
    whisper_model: str = os.getenv("WHISPER_MODEL", "small")
    whisper_lang: str = os.getenv("WHISPER_LANG", "kk")
    piper_voice: str = os.getenv("PIPER_VOICE", "kk_KZ-issai-high")
    piper_speaker: int = int(os.getenv("PIPER_SPEAKER", "4"))
    piper_length_scale: float = float(os.getenv("PIPER_LENGTH_SCALE", "1.15"))


settings = Settings()
