// Tap to begin handler
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("intro-overlay");
  const music = document.getElementById("bg-music");
  const mainContent = document.getElementById("main-content");

  document.addEventListener("click", () => {
    overlay.classList.add("fade-out");
    mainContent.classList.remove("hidden");
    music.play();
  }, { once: true });
});

// Countdown Logic
const targetDate = new Date("2025-07-3 00:00:00").getTime();
const countdown = document.getElementById("countdown");
const popup = document.getElementById("popup");
const cassette = document.getElementById("cassette");

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdown.style.display = "none";
    popup.classList.remove("hidden");
  } else {
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    countdown.innerText = `${d}d ${h}h ${m}m ${s}s`;
  }
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Stars animation
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2,
  d: Math.random() + 0.5
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    ctx.fill();
    star.y += star.d;
    if (star.y > canvas.height) star.y = 0;
  });
  requestAnimationFrame(drawStars);
}
drawStars();

// Cassette click → go to slideshow
cassette.addEventListener("click", () => {
  window.location.href = "slideshow.html";
});
