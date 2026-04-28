let rotation = 0;
let score = 0;

/* 🔐 LOGIN */
function unlock() {
  const p = document.getElementById("pass").value;

  if (p === "Babi 0328") {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
  } else {
    document.getElementById("msg").innerHTML = "❌ Incorrect, try again";
  }
}

function togglePass() {
  const i = document.getElementById("pass");
  i.type = i.type === "password" ? "text" : "password";
}

/* 🎮 PANEL CONTROL (FIXED — THIS WAS MISSING BEFORE) */
function openSection(id) {
  document.getElementById("panel").classList.remove("hidden");

  document.querySelectorAll(".content").forEach(c => c.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function closePanel() {
  document.getElementById("panel").classList.add("hidden");
}

/* 🎡 WHEEL */
function spinWheel() {
  const w = document.getElementById("wheelBox");

  rotation += Math.random() * 360 + 1800;
  w.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    const options = ["💋 Kiss","🤗 Hug","😏 Bite","💜 You decide","😢 Sad","🔁 Try again"];
    const r = options[Math.floor(Math.random() * options.length)];

    document.getElementById("wheelResult").innerHTML = r;
    showOverlay(r);
  }, 4000);
}

/* 💬 TRUTH / DARE */
const truths = ["When did you like me? 💜","What do you love most? 💙","Do you miss me? 💜","Future plan? 💙","Jealous? 😏","Favorite memory? 💜","Who loves more? 💙","First impression? 💜","Song for me? 🎵","What makes you smile? 💙"];

const dares = ["Send I miss you 💜","Call me 📞","Heart spam 💙","Say I love you 💜","Voice note 🎧","Flirt 10 sec 😳","Emoji combo 💙","Cute message 💜","Say you're mine 😏","3 compliments 💙"];

function pickTruth() {
  document.getElementById("toldResult").innerHTML =
    truths[Math.floor(Math.random() * truths.length)];
}

function pickDare() {
  document.getElementById("toldResult").innerHTML =
    dares[Math.floor(Math.random() * dares.length)];
}

/* 💥 OVERLAY */
function showOverlay(t) {
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("overlayText").innerHTML = t;

  setTimeout(() => {
    document.getElementById("overlay").classList.add("hidden");
  }, 2000);
}
