document.addEventListener("DOMContentLoaded", () => {
  // PANDA BUTTON
  const panda_click_area = document.getElementById("panda_click_area");
  const pandaIcon = document.getElementById("panda_popup");

  let clicked = false;

  panda_click_area.addEventListener("click", () => {
    if (clicked) return;
    clicked = true;

    pandaIcon.style.display = "block";

    setTimeout(() => {
      window.location.href = "./mailbox.html";
    }, 100);
  
  });
});