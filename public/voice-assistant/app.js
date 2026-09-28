const teacherMedia = document.getElementById("teacherMedia");
const teacherState = document.getElementById("teacherState");
const chatInputForm = document.getElementById("chatInputForm");
const chatTextInput = document.getElementById("chatTextInput");
const chatLog = document.getElementById("chatLog");
const specialVideo = document.getElementById("specialVideo");

const STATES = {
  idle: { label: "Көмекке дайын", mediaClass: null },
  thinking: { label: "Ойлануда...", mediaClass: "is-thinking" },
  speaking: { label: "Бейне көрсетілуде...", mediaClass: "is-speaking" },
};

let sessionId = sessionStorage.getItem("va_session_id");
if (!sessionId) {
  sessionId = crypto.randomUUID();
  sessionStorage.setItem("va_session_id", sessionId);
}

function setState(state) {
  teacherState.textContent = state.label;
  teacherMedia.classList.remove("is-thinking", "is-speaking");
  if (state.mediaClass) {
    teacherMedia.classList.add(state.mediaClass);
  }
}

function addMessage(author, text, role) {
  const message = document.createElement("div");
  message.className = `chat-message chat-message--${role}`;

  const authorEl = document.createElement("div");
  authorEl.className = "chat-message__author";
  authorEl.textContent = author;

  const bubbleEl = document.createElement("div");
  bubbleEl.className = "chat-message__bubble";
  bubbleEl.appendChild(document.createElement("p")).textContent = text;

  message.appendChild(authorEl);
  message.appendChild(bubbleEl);
  chatLog.appendChild(message);
  chatLog.scrollTop = chatLog.scrollHeight;
  return message;
}

function showSystemMessage(text) {
  addMessage("Жүйе", text, "system");
}

// Сұрақ қай тілде қойылса да, ол қай тақырыпқа қатысты екенін сервердегі
// LLM өзі шешеді (backend/video_library.py каталогы бойынша). Чат мәтінмен
// жауап бермейді — тек сәйкес видео табылса, сол ойнатылады.
async function askAssistant(questionText) {
  setState(STATES.thinking);
  try {
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: questionText, session_id: sessionId }),
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => null);
      const message = errorBody?.detail?.message || "Сұрауды өңдеу мүмкін болмады.";
      showSystemMessage(message);
      setState(STATES.idle);
      return;
    }

    const data = await response.json();

    if (data.video_url) {
      setState(STATES.speaking);
      await playSpecialVideo(data.video_url);
      setState(STATES.idle);
    } else {
      showSystemMessage("Бұл сұраққа арналған дайын бейне әзірше жоқ. Python тіліне қатысты басқа сұрақ қойып көріңіз.");
      setState(STATES.idle);
    }
  } catch (err) {
    showSystemMessage("Серверге қосылу мүмкін болмады. Қайта көріңіз.");
    setState(STATES.idle);
  }
}

// Тақырыпқа сәйкес дайын бейнені фото орнына ойнатады. Дыбысы бейненің
// өзінде бар — қосымша TTS дауысы да, фото/ерін анимациясы да қолданылмайды.
function playSpecialVideo(src) {
  return new Promise((resolve) => {
    const finish = () => {
      specialVideo.classList.remove("is-visible");
      specialVideo.removeEventListener("ended", finish);
      specialVideo.removeEventListener("error", finish);
      resolve();
    };

    specialVideo.addEventListener("ended", finish, { once: true });
    specialVideo.addEventListener("error", finish, { once: true });
    specialVideo.src = src;
    specialVideo.currentTime = 0;
    specialVideo.classList.add("is-visible");
    specialVideo.play().catch(finish);
  });
}

chatInputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = chatTextInput.value.trim();
  if (!text) return;

  chatTextInput.value = "";
  addMessage("Сіз", text, "user");
  askAssistant(text);
});
