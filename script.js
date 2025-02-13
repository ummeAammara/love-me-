function showLoveMessage() {
  document.getElementById("loveMessage").innerHTML = "I knew it! love you too! 😘💕";
}

function moveNoButton() {
  let noBtn = document.getElementById("noBtn");
  let x = Math.random() * (window.innerWidth - 100);
  let y = Math.random() * (window.innerHeight - 50);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}
