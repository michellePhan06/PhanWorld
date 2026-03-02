document.addEventListener("DOMContentLoaded", function () {

    async function getLines() {
        const response = await fetch("text/fortuneText.txt");
        const text = await response.text();
        return text.split('\n').filter(line => line.trim() !== '');
    }

    async function handleFortuneClick() {

        // 1️⃣ Change background
        const bg = document.getElementById("background");
        bg.src = "icons/phanworld_panda_af.jpeg";

        // 2️⃣ Get random line
        const lines = await getLines();
        const randomIndex = Math.floor(Math.random() * lines.length);

        const output = document.getElementById("output");
        output.textContent = lines[randomIndex];

        // 3️⃣ Show text
        output.style.display = "block";
    }

    document.getElementById("fortune_click_area")
        .addEventListener("click", handleFortuneClick);

});