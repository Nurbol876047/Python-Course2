import logging
import time
import uuid
import wave
from functools import lru_cache
from pathlib import Path

from piper import PiperVoice, SynthesisConfig

from backend.config import settings

logger = logging.getLogger("voice_assistant.tts")

BASE_DIR = Path(__file__).resolve().parent.parent
MODELS_DIR = BASE_DIR / "models" / "piper"
AUDIO_DIR = BASE_DIR / "media" / "audio"
AUDIO_DIR.mkdir(parents=True, exist_ok=True)

MAX_AUDIO_AGE_SECONDS = 3600


class TTSError(Exception):
    pass


@lru_cache(maxsize=1)
def get_voice() -> PiperVoice:
    model_path = MODELS_DIR / f"{settings.piper_voice}.onnx"
    config_path = MODELS_DIR / f"{settings.piper_voice}.onnx.json"
    if not model_path.exists():
        raise TTSError(f"Piper дауыс файлы табылмады: {model_path}")
    logger.info("Piper дауысы жүктелуде: %s", settings.piper_voice)
    voice = PiperVoice.load(model_path, config_path)
    logger.info("Piper дауысы дайын")
    return voice


def _cleanup_old_files() -> None:
    cutoff = time.time() - MAX_AUDIO_AGE_SECONDS
    for wav_path in AUDIO_DIR.glob("*.wav"):
        try:
            if wav_path.stat().st_mtime < cutoff:
                wav_path.unlink()
        except OSError:
            pass


def synthesize(text: str) -> Path:
    text = text.strip()
    if not text:
        raise TTSError("Айтуға арналған мәтін бос болды")

    _cleanup_old_files()

    voice = get_voice()
    syn_config = SynthesisConfig(
        speaker_id=settings.piper_speaker,
        length_scale=settings.piper_length_scale,
    )

    out_path = AUDIO_DIR / f"{uuid.uuid4().hex}.wav"
    try:
        with wave.open(str(out_path), "wb") as wav_file:
            voice.synthesize_wav(text, wav_file, syn_config=syn_config)
    except Exception as exc:
        out_path.unlink(missing_ok=True)
        logger.exception("Piper синтезі сәтсіз аяқталды")
        raise TTSError("Дауысты синтездеу сәтсіз аяқталды") from exc

    return out_path
