const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#visitor-name");
const formReply = document.querySelector("#form-reply");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value.trim();
  if (!name) {
    nameInput.focus();
    return;
  }

  formReply.textContent = `Hi ${name}, I will reply to you soon.`;
  contactForm.reset();
});
