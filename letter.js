const text = "You're amazing. You matter. I'm so lucky to know you. This is your day. Smile big. Laugh loud. You're loved. Happy Birthday! ❤️";
let i = 0;

document.getElementById("envelope").addEventListener("click", () => {
  document.getElementById("envelope").classList.add("hidden");
  document.getElementById("letter").classList.remove("hidden");
  typeMessage();
});

function typeMessage() {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeMessage, 50);
  }
}

// ---------------- PETALS ----------------

const petals = [
  "assets/petals/petal1.png",
  "assets/petals/petal2.png",
  "assets/petals/petal3.png"
];

function createPetal() {
  const img = document.createElement("img");
  img.src = petals[Math.floor(Math.random() * petals.length)];
  img.style.width = 10 + Math.random() * 10 + "px"; // small
  img.style.left = Math.random() * 100 + "vw";
  img.style.animationDuration = 2 + Math.random() * 1.5 + "s"; // fast fall
  img.classList.add("falling");
  document.getElementById("falling-elements").appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 8000);
}

// Generate petals every 100ms
setInterval(createPetal, 100);

// ---------------- STICKERS ----------------

const stickers = [
  "assets/stickers/sticker1.png",
  "assets/stickers/sticker2.png",
  "assets/stickers/sticker3.png",
  "assets/stickers/sticker4.png",
  "assets/stickers/sticker5.png",
  "assets/stickers/sticker6.png",
  "assets/stickers/sticker7.png",
  "assets/stickers/sticker8.png",
  "assets/stickers/sticker9.png",
  "assets/stickers/sticker10.png",
  "assets/stickers/sticker11.png",
  "assets/stickers/sticker12.png"
];

function createSticker() {
  const img = document.createElement("img");
  img.src = stickers[Math.floor(Math.random() * stickers.length)];
  img.style.width = 70 + Math.random() * 30 + "px"; // big
  img.style.left = Math.random() * 100 + "vw";
  img.style.animationDuration = 6 + Math.random() * 2 + "s"; // slower fall
  img.classList.add("falling");
  document.getElementById("falling-elements").appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 10000);
}

// Generate stickers every 1000ms (1 sec)
setInterval(createSticker, 1000);
const music = document.getElementById("bg-music");

// Get saved time
const audio = document.getElementById("bg-music");
const resumeTime = localStorage.getItem("musicTime");

if (resumeTime) {
  audio.currentTime = parseFloat(resumeTime);
}

window.addEventListener("click", () => {
  audio.play();
});

// (Optional) Clear saved timestamp after letter loads
setTimeout(() => {
  localStorage.removeItem("musicTime");
}, 5000);
document.getElementById("envelope").addEventListener("click", () => {
  document.getElementById("envelope").classList.add("hidden");
  document.getElementById("letter").classList.remove("hidden");

  // Start background music on interaction
  const audio = document.getElementById("bg-music");
  audio.volume = 0.4; // softer feel
  audio.play();

  typeMessage(); // your existing typing function
});
