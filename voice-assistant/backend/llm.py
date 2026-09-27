import logging

from openai import APIConnectionError, APIError, OpenAI, RateLimitError
from pydantic import BaseModel

from backend.config import settings
from backend.video_library import VIDEO_LIBRARY, keyword_fallback_video_key, video_catalog_prompt

logger = logging.getLogger("voice_assistant.llm")

SYSTEM_INSTRUCTION = (
    "Сен — Python бағдарламалау тілі бойынша достық әрі қолдаушы мұғалімсің. "
    "Пайдаланушы сұрақты қай тілде қойса, сол тілде жауап бер. Түсінікті "
    "тілмен, күнделікті өмірден мысалдар келтіре отырып түсіндір. Тек "
    "Python және бағдарламалау тақырыбындағы сұрақтарға жауап бер; бөгде "
    "тақырып туралы сұраса, сыпайы түрде Python тақырыбына қайта бағытта. "
    "Бұл көмекші ТЕК Python тақырыбында жұмыс істейді: сұрақта нақты зат "
    "есім аталмай, тек есімдік қолданылса («оны үйрену қиын ба?», "
    '"это сложно?", "как его учить?", "үйрену калай оны" сияқты, тіпті '
    "грамматикасы бұзылған болса да) — әдепкі бойынша сол есімдік Python "
    "тілін білдіреді деп қабылда, басқа тақырыпты ойлап табуға тырыспа.\n\n"
    "Жауапты міндетті түрде мына өрістері бар JSON түрінде қайтар:\n"
    '- "speech": дауыспен айтуға арналған қысқа мәтін (2-5 сөйлем), '
    "кодсыз, markdown-сыз, дауыс дұрыс оқи алмайтын таңбаларсыз;\n"
    '- "display": экранға шығатын толық жауап. Қарапайым абзацтармен '
    "жаз. Тек код үзінділері үшін ғана ```python``` код блогын "
    "қолдан. Тақырып белгілерін (#, ##, ###), жуан/курсив жазуды "
    "(**, *), тізім маркерлерін (-, *, 1.) және кез келген басқа "
    "markdown белгілерін мүлдем қолданба — тек жай мәтін абзацтары "
    "мен код блоктары ғана болсын;\n"
    '- "video_key": төменде берілген каталогтан таңдалған кілт немесе '
    "сәйкес видео болмаса null." + video_catalog_prompt()
)


class AssistantAnswer(BaseModel):
    speech: str
    display: str
    video_key: str | None = None


class LLMError(Exception):
    pass


def _client() -> OpenAI:
    if not settings.openai_api_key:
        raise LLMError("OPENAI_API_KEY орнатылмаған")
    return OpenAI(api_key=settings.openai_api_key)


def ask_llm(question: str, history: list[dict]) -> AssistantAnswer:
    client = _client()

    messages = [{"role": "system", "content": SYSTEM_INSTRUCTION}]
    for item in history:
        role = "assistant" if item["role"] == "assistant" else "user"
        messages.append({"role": role, "content": item["text"]})
    messages.append({"role": "user", "content": question})

    try:
        response = client.chat.completions.parse(
            model=settings.openai_model,
            messages=messages,
            response_format=AssistantAnswer,
            temperature=0.4,
        )
    except RateLimitError as exc:
        logger.warning("OpenAI квотасы/лимиті таусылды: %s", exc)
        raise LLMError("OpenAI уақытша қолжетімсіз, қайта көріңіз") from exc
    except (APIConnectionError, APIError) as exc:
        logger.warning("OpenAI сұранысы сәтсіз аяқталды: %s", exc)
        raise LLMError("OpenAI уақытша қолжетімсіз, қайта көріңіз") from exc
    except Exception as exc:
        logger.exception("OpenAI сұранысы сәтсіз аяқталды")
        raise LLMError("OpenAI API-ге сұраныс сәтсіз аяқталды") from exc

    answer = response.choices[0].message.parsed
    if answer is None:
        refusal = response.choices[0].message.refusal
        logger.error("OpenAI жауабын талдау мүмкін болмады: %s", refusal)
        raise LLMError("OpenAI жауабын өңдеу мүмкін болмады")

    if answer.video_key is not None and answer.video_key not in VIDEO_LIBRARY:
        logger.warning("Белгісіз video_key моделден келді: %s", answer.video_key)
        answer.video_key = None

    # Сақтандырғыш: модель video_key таңдамай қалса да, сұрақ мәтінінде
    # тақырыпқа тікелей сәйкес келетін сөздер табылса, видеоны бәрібір
    # қосамыз — TTS дауысы мен ерін анимациясы орнына кездейсоқ көрінбеу үшін.
    if answer.video_key is None:
        fallback_key = keyword_fallback_video_key(question)
        if fallback_key is not None:
            logger.info("video_key сақтандырғыш бойынша анықталды: %s", fallback_key)
            answer.video_key = fallback_key

    return answer
