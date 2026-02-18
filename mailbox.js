document.addEventListener("DOMContentLoaded", () => {
  // MAILBOX BUTTON
  const mailbox_click_area = document.getElementById("mailbox_click_area");
  const mailboxIcon = document.getElementById("mailbox_popup");

  let clicked = false;

  mailbox_click_area.addEventListener("click", () => {
    if (clicked) return;
    clicked = true;

    mailboxIcon.style.display = "block";

    setTimeout(() => {
      window.location.href = "./mailbox.html";
    }, 100);
  
  });
});