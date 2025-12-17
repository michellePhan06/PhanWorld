// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

// Example app logic CHANGE
document.getElementById('actionBtn').addEventListener('click', () => {
  alert('Your app is working!');
});