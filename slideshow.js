// Shooting Star Animation
const canvas = document.getElementById('shooting-stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class ShootingStar {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * 0.5;
    this.length = Math.random() * 80 + 100;
    this.speed = Math.random() * 8 + 6;
    this.opacity = Math.random() * 0.5 + 0.3;
  }
  update() {
    this.x -= this.speed;
    this.y += this.speed;
    if (this.x < -this.length || this.y > canvas.height + this.length) {
      this.reset();
    }
  }
  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.length, this.y - this.length);
    ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

const stars = [];
for (let i = 0; i < 10; i++) {
  stars.push(new ShootingStar());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let star of stars) {
    star.update();
    star.draw();
  }
  requestAnimationFrame(animate);
}
animate();

// Video to Envelope Logic
const video = document.getElementById('main-video');
const envelope = document.getElementById('envelope');

video.addEventListener('ended', () => {
  video.style.display = 'none';
  envelope.classList.remove('hidden');
});

// Navigate to letter page
document.getElementById('env-img').addEventListener('click', () => {
  window.location.href = 'letter.html';
});
const music = document.getElementById("bg-music");

const audio = document.getElementById("bg-music");
audio.currentTime = 0;
audio.play();
// Try to resume from previous page
const resumeTime = localStorage.getItem("musicTime");
if (resumeTime) {
  audio.currentTime = parseFloat(resumeTime);
}

// Play on first click (required by browser)
window.addEventListener("click", () => {
  audio.play();
});

// Before leaving to letter page
document.getElementById("envelope")?.addEventListener("click", () => {
  localStorage.setItem("musicTime", audio.currentTime);
  window.location.href = "letter.html";
});

window.addEventListener('load', () => {
  const audio = document.getElementById("bg-music");
  audio.currentTime = 0;
  audio.play().catch((e) => {
    // If autoplay is blocked, wait for first user interaction
    document.body.addEventListener('click', () => {
      audio.currentTime = 0;
      audio.play();
    }, { once: true });
  });
});
