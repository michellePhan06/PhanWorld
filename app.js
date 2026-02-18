document.addEventListener("DOMContentLoaded", () => {

  // HOME BUTTON
  const clickArea = document.getElementById("house_click_area");
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
    "icons/phanworld_background_1.png",
    "icons/phanworld_background_2.png"
  ];

  let index = 0;

  setInterval(() => {
    index = (index + 1) % backgrounds.length;
    background.src = backgrounds[index];
  }, 1200);
});
