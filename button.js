document.addEventListener("DOMContentLoaded", () => {
  // BACK BUTTON
  const arrow = document.getElementById("arrow_click_area");
  const popup = document.getElementById("back_arrow_popup");

  let back_clicked = false;

  arrow.addEventListener("click", () => {
    if (back_clicked) return;
    back_clicked = true;

    popup.style.display = "block";

    setTimeout(() => {
      window.location.href = "index.html";
    }, 100);
  });
});
