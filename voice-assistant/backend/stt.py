import logging
import shutil
import subprocess
import tempfile
from functools import lru_cache
from pathlib import Path

from faster_whisper import WhisperModel

from backend.config import settings

logger = logging.getLogger("voice_assistant.stt")

MIN_AUDIO_BYTES = 2000


class STTError(Exception):
    def __init__(self, code: str, message: str):
        self.code = code
        self.message = message
        super().__init__(message)


@lru_cache(maxsize=1)
def get_model() -> WhisperModel:
    logger.info("Whisper моделі жүктелуде: %s", settings.whisper_model)
    model = WhisperModel(settings.whisper_model, device="cpu", compute_type="int8")
    logger.info("Whisper моделі дайын")
    return model


def _convert_to_wav(raw_audio: bytes, tmp_dir: Path) -> Path:
    src_path = tmp_dir / "input.webm"
    wav_path = tmp_dir / "output.wav"
    src_path.write_bytes(raw_audio)

    result = subprocess.run(
        [
            "ffmpeg", "-y", "-i", str(src_path),
            "-ac", "1", "-ar", "16000",
            str(wav_path),
        ],
        capture_output=True,
    )
    if result.returncode != 0 or not wav_path.exists():
        logger.error("ffmpeg қатесі: %s", result.stderr.decode(errors="ignore")[-500:])
        raise STTError("conversion_failed", "Аудио файлды өңдеу мүмкін болмады.")
    return wav_path


def transcribe(raw_audio: bytes) -> str:
    if not raw_audio or len(raw_audio) < MIN_AUDIO_BYTES:
        raise STTError("empty_audio", "Жазба тым қысқа немесе бос болды. Қайта сөйлеп көріңіз.")

    tmp_dir = Path(tempfile.mkdtemp(prefix="stt_"))
    try:
        wav_path = _convert_to_wav(raw_audio, tmp_dir)
        model = get_model()
        segments, _info = model.transcribe(str(wav_path), language=settings.whisper_lang)
        text = " ".join(segment.text.strip() for segment in segments).strip()
    finally:
        shutil.rmtree(tmp_dir, ignore_errors=True)

    if not text:
        raise STTError("not_recognized", "Сөз танылмады. Анығырақ сөйлеп, қайта көріңіз.")

    return text
