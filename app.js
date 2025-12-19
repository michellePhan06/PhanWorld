// // Register service worker
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('service-worker.js');
// }

// // Example app logic CHANGE
// document.getElementById('actionBtn').addEventListener('click', () => {
//   alert('Your app is working!');
// });

// house click area logic
const clickArea = document.getElementById("click-area");
const popupIcon = document.getElementById("popup-icon");

if (location.hostname !== 'localhost') {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
  }
}


clickArea.addEventListener("click", () => {
  popupIcon.style.display = "block";

  setTimeout(() => {
    popupIcon.style.display = "none";
  }, 1000); // 1 second
});
