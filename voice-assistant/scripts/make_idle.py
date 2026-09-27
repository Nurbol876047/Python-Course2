"""static/idle.mp4 жасайды: мұғалім фотосынан + қысқа тыныш аудиодан
SadTalker арқылы табиғи "күту" анимациясы (көз ілтіп, жеңіл қимылдар).

Қолданылуы:
    source .venv/bin/activate
    python3 scripts/make_idle.py
"""
import subprocess
import sys
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
STATIC_DIR = BASE_DIR / "static"
SILENT_AUDIO_DURATION = 5.5

sys.path.insert(0, str(BASE_DIR))


def make_silent_audio(path: Path) -> None:
    proc = subprocess.run(
        [
            "ffmpeg", "-y", "-f", "lavfi", "-i", "anullsrc=r=22050:cl=mono",
            "-t", str(SILENT_AUDIO_DURATION), str(path),
        ],
        capture_output=True,
    )
    if proc.returncode != 0:
        print("ffmpeg қатесі:", proc.stderr.decode(errors="ignore")[-500:])
        sys.exit(1)


def main() -> None:
    from backend import avatar

    source_image = STATIC_DIR / "avatar.jpg"
    if not source_image.exists():
        print(f"Қате: {source_image} табылмады. Алдымен мұғалім фотосын қосыңыз.")
        sys.exit(1)

    if not avatar.is_available():
        print("Қате: SadTalker қолжетімсіз (checkpoints/.venv тексеріңіз).")
        sys.exit(1)

    silent_audio = STATIC_DIR / "_silent.wav"
    print("Тыныш аудио жасалуда...")
    make_silent_audio(silent_audio)

    print("SadTalker арқылы idle видео жасалуда (бірнеше минут кетуі мүмкін)...")
    video_path = avatar.generate_talking_video(silent_audio)

    idle_path = STATIC_DIR / "idle.mp4"
    video_path.replace(idle_path)
    silent_audio.unlink(missing_ok=True)
    print(f"Дайын: {idle_path}")


if __name__ == "__main__":
    main()
