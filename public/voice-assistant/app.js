const micButton = document.getElementById("micButton");
const micTimer = document.getElementById("micTimer");
const teacherMedia = document.getElementById("teacherMedia");
const teacherState = document.getElementById("teacherState");
const chatInputForm = document.getElementById("chatInputForm");
const chatTextInput = document.getElementById("chatTextInput");
const chatLog = document.getElementById("chatLog");
const chatHint = document.getElementById("chatHint");
const specialVideo = document.getElementById("specialVideo");

const MAX_RECORD_SECONDS = 60;

const STATES = {
  idle: { label: "Көмекке дайын", mediaClass: null },
  listening: { label: "Тыңдап тұрмын...", mediaClass: "is-listening" },
  recognizing: { label: "Танылуда...", mediaClass: "is-thinking" },
  thinking: { label: "Ойлануда...", mediaClass: "is-thinking" },
  speaking: { label: "Бейне көрсетілуде...", mediaClass: "is-speaking" },
};

let sessionId = sessionStorage.getItem("va_session_id");
if (!sessionId) {
  sessionId = crypto.randomUUID();
  sessionStorage.setItem("va_session_id", sessionId);
}

let mediaRecorder = null;
let audioChunks = [];
let recordTimerInterval = null;
let recordSeconds = 0;

function setState(state) {
  teacherState.textContent = state.label;
  teacherMedia.classList.remove("is-listening", "is-thinking", "is-speaking");
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

function formatSeconds(total) {
  const m = String(Math.floor(total / 60)).padStart(2, "0");
  const s = String(total % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function startTimer() {
  recordSeconds = 0;
  micTimer.hidden = false;
  micTimer.textContent = formatSeconds(recordSeconds);
  recordTimerInterval = setInterval(() => {
    recordSeconds += 1;
    micTimer.textContent = formatSeconds(recordSeconds);
    if (recordSeconds >= MAX_RECORD_SECONDS) {
      stopRecording();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(recordTimerInterval);
  micTimer.hidden = true;
}

// Сұрақ қай тілде қойылса да, ол қай тақырыпқа қатысты екенін сервердегі
// LLM өзі шешеді (backend/video_library.py каталогы бойынша). Чат мәтінмен
// жауап бермейді — тек сәйкес видео табылса, сол ойнатылады.
async function askAssistant(questionText) {
  setState(STATES.thinking);
  try {
    const response = await fetch("https://python-course3.onrender.com/api/ask", {
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

async function sendAudioForRecognition(blob) {
  setState(STATES.recognizing);
  const formData = new FormData();
  formData.append("audio", blob, "recording.webm");

  try {
    const response = await fetch("https://python-course3.onrender.com/api/stt", { method: "POST", body: formData });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => null);
      const message = errorBody?.detail?.message || "Дауысты тану мүмкін болмады.";
      showSystemMessage(message);
      setState(STATES.idle);
      return;
    }

    const data = await response.json();
    addMessage("Сіз", data.text, "user");
    await askAssistant(data.text);
  } catch (err) {
    showSystemMessage("Серверге қосылу мүмкін болмады. Қайта көріңіз.");
    setState(STATES.idle);
  }
}

function startRecording(stream) {
  audioChunks = [];
  const options = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
    ? { mimeType: "audio/webm;codecs=opus" }
    : {};
  mediaRecorder = new MediaRecorder(stream, options);

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) audioChunks.push(event.data);
  };

  mediaRecorder.onstop = () => {
    stream.getTracks().forEach((track) => track.stop());
    stopTimer();
    const blob = new Blob(audioChunks, { type: "audio/webm" });
    sendAudioForRecognition(blob);
  };

  mediaRecorder.start();
  setState(STATES.listening);
  startTimer();
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  }
  micButton.classList.remove("is-recording");
  micButton.setAttribute("aria-pressed", "false");
}

micButton.addEventListener("click", async () => {
  const isRecording = micButton.classList.contains("is-recording");

  if (isRecording) {
    stopRecording();
    return;
  }

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    showSystemMessage("Бұл браузер микрофонды қолдамайды.");
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    micButton.classList.add("is-recording");
    micButton.setAttribute("aria-pressed", "true");
    startRecording(stream);
  } catch (err) {
    if (err.name === "NotAllowedError" || err.name === "SecurityError") {
      showSystemMessage("Микрофонға қолжетімділік жоқ. Браузер параметрлерінен рұқсат беріңіз.");
    } else if (err.name === "NotFoundError") {
      showSystemMessage("Микрофон табылмады. Құрылғыны тексеріңіз.");
    } else {
      showSystemMessage("Микрофонды іске қосу мүмкін болмады.");
    }
  }
});

chatInputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = chatTextInput.value.trim();
  if (!text) return;

  chatTextInput.value = "";
  addMessage("Сіз", text, "user");
  askAssistant(text);
});
