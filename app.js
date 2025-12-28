document.addEventListener("DOMContentLoaded", () => {

  // HOME BUTTON
  const clickArea = document.getElementById("click-area");
  const popupIcon = document.getElementById("popup-icon");

  let clicked = false;

  clickArea.addEventListener("click", () => {
    if (clicked) return;
    clicked = true;

    popupIcon.style.display = "block";

    setTimeout(() => {
      window.location.href = "./home.html";
    }, 100);
  });

  // Switch Backgrounds
  const background = document.getElementById("background");

  const backgrounds = [
    "icons/phanworld_background_1.jpg",
    "icons/phanworld_background_2.jpg"
  ];

  let index = 0;

  setInterval(() => {
    index = (index + 1) % backgrounds.length;
    background.src = backgrounds[index];
  }, 1200);
});
