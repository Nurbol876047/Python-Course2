import json
import logging
import time

from google import genai
from google.genai import errors as genai_errors
from google.genai import types
from pydantic import BaseModel

from backend.config import settings

logger = logging.getLogger("voice_assistant.gemini")

SYSTEM_INSTRUCTION = (
    "Сен — Python бағдарламалау тілі бойынша достық әрі қолдаушы мұғалімсің. "
    "Пайдаланушы сұрақты қай тілде қойса, сол тілде жауап бер. Түсінікті "
    "тілмен, күнделікті өмірден мысалдар келтіре отырып түсіндір. Тек "
    "Python және бағдарламалау тақырыбындағы сұрақтарға жауап бер; бөгде "
    "тақырып туралы сұраса, сыпайы түрде Python тақырыбына қайта бағытта.\n\n"
    "Жауапты міндетті түрде мына екі өрісі бар JSON түрінде қайтар:\n"
    '- "speech": дауыспен айтуға арналған қысқа мәтін (2-5 сөйлем), '
    "кодсыз, markdown-сыз, дауыс дұрыс оқи алмайтын таңбаларсыз;\n"
    '- "display": экранға шығатын толық жауап. Қарапайым абзацтармен '
    "жаз. Тек код үзінділері үшін ғана ```python``` код блогын "
    "қолдан. Тақырып белгілерін (#, ##, ###), жуан/курсив жазуды "
    "(**, *), тізім маркерлерін (-, *, 1.) және кез келген басқа "
    "markdown белгілерін мүлдем қолданба — тек жай мәтін абзацтары "
    "мен код блоктары ғана болсын."
)


class GeminiAnswer(BaseModel):
    speech: str
    display: str


class GeminiError(Exception):
    pass


def _get_clients() -> list[genai.Client]:
    if not settings.gemini_api_keys:
        raise GeminiError("GEMINI_API_KEY орнатылмаған")
    return [genai.Client(api_key=key) for key in settings.gemini_api_keys]


def _parse_response(response) -> GeminiAnswer:
    if response.parsed is not None:
        return response.parsed

    try:
        data = json.loads(response.text)
        return GeminiAnswer(**data)
    except Exception as exc:
        logger.error("Gemini жауабын талдау мүмкін болмады: %s", (response.text or "")[:300])
        raise GeminiError("Gemini жауабын өңдеу мүмкін болмады") from exc


def ask_gemini(question: str, history: list[dict]) -> GeminiAnswer:
    clients = _get_clients()

    contents = []
    for item in history:
        role = "model" if item["role"] == "assistant" else "user"
        contents.append(types.Content(role=role, parts=[types.Part(text=item["text"])]))
    contents.append(types.Content(role="user", parts=[types.Part(text=question)]))

    attempts_per_key = 2
    last_exc: Exception | None = None
    for key_index, client in enumerate(clients, start=1):
        for attempt in range(1, attempts_per_key + 1):
            try:
                response = client.models.generate_content(
                    model=settings.gemini_model,
                    contents=contents,
                    config=types.GenerateContentConfig(
                        system_instruction=SYSTEM_INSTRUCTION,
                        response_mime_type="application/json",
                        response_schema=GeminiAnswer,
                        temperature=0.4,
                    ),
                )
                return _parse_response(response)
            except genai_errors.ServerError as exc:
                last_exc = exc
                logger.warning(
                    "Gemini уақытша қолжетімсіз (кілт %s/%s, әрекет %s/%s): %s",
                    key_index, len(clients), attempt, attempts_per_key, exc,
                )
                if attempt < attempts_per_key:
                    time.sleep(1.5 * attempt)
            except genai_errors.ClientError as exc:
                last_exc = exc
                if exc.code == 429:
                    logger.warning(
                        "Gemini квотасы таусылды (кілт %s/%s): келесі кілтке ауысу",
                        key_index, len(clients),
                    )
                    break
                logger.exception("Gemini сұранысы сәтсіз аяқталды")
                raise GeminiError("Gemini API-ге сұраныс сәтсіз аяқталды") from exc
            except Exception as exc:
                logger.exception("Gemini сұранысы сәтсіз аяқталды")
                raise GeminiError("Gemini API-ге сұраныс сәтсіз аяқталды") from exc

    raise GeminiError("Gemini уақытша қолжетімсіз, қайта көріңіз") from last_exc
