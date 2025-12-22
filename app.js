// house click area logic
const clickArea = document.getElementById("click-area");
const popupIcon = document.getElementById("popup-icon");

if (location.hostname !== 'localhost') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
  }
}

let clicked = false;

clickArea.addEventListener("click", () => {
  if (clicked) return;
  clicked = true;

  popupIcon.style.display = "block";

  setTimeout(() => {
    window.location.href = "./home.html";
  }, 1000);
});

