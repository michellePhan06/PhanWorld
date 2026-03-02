async function getLines() {
  const response = await fetch("text/lines.txt"); // your txt file
  const text = await response.text();
  return text.split('\n').filter(line => line.trim() !== '');
}

async function showRandomLine() {
  const lines = await getLines();
  const randomIndex = Math.floor(Math.random() * lines.length);
  document.getElementById('output').textContent = lines[randomIndex];
}

// Run automatically when page loads
window.addEventListener('DOMContentLoaded', showRandomLine);