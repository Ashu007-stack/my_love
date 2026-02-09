// Play background music
const bgMusic = document.getElementById("bgMusic");
if (bgMusic) {
  bgMusic.volume = 0.4;
}

// Create floating hearts
for (let i = 0; i < 30; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.body.appendChild(heart);
}

// Button sounds
const clickSound = document.getElementById("clickSound");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// ✅ YES button → open note.html
yesBtn.addEventListener("click", () => {
  clickSound.play();
  window.location.href = "note.html"; // your note page
});

// NO button playful move
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.clientWidth);
  const y = Math.random() * (window.innerHeight - noBtn.clientHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

noBtn.addEventListener("click", () => {
  clickSound.play();
  yesBtn.style.transform = "scale(1.3)";
});

// Auto play music on first interaction
document.body.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
  }
});

// Music toggle button
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    bgMusic.play();
    musicBtn.textContent = " Music OFF";
    isPlaying = true;
    console.log(isPlaying)
  } else {
    bgMusic.pause();
    musicBtn.textContent = " Tap for Song";
    isPlaying = false;
    console.log(isPlaying)
  }
});

