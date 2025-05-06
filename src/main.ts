import "./styles/global.scss";

const newsLetterForm = document.querySelector(
  "#newsletter-form"
) as HTMLFormElement;

const submitBtn = document.querySelector("#submit-btn") as HTMLButtonElement;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorMessage = document.querySelector(
  "#error-message"
) as HTMLSpanElement;
const emailInput = document.querySelector("#email") as HTMLInputElement;
const successModal = document.querySelector("#success-modal") as HTMLDivElement;
const newsletter = document.querySelector("#newsletter") as HTMLDivElement;
const dismissBtn = document.querySelector("#dismiss-btn");

newsLetterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = emailInput.value;
  if (!emailRegex.test(email) || email === "") {
    errorMessage.classList.remove("hidden");
    emailInput.classList.add("invalid-field");
    submitBtn.classList.remove("btn-active");
    return;
  } else {
    submitBtn.classList.remove("btn-active");
    emailInput.value = "";
    newsletter.classList.add("hidden");
    successModal.classList.remove("hidden");
  }
});

newsLetterForm.addEventListener("input", () => {
  const email = emailInput.value;
  if (emailRegex.test(email)) {
    errorMessage.classList.add("hidden");
    emailInput.classList.remove("invalid-field");
    submitBtn.classList.add("btn-active");
  }
});

if (dismissBtn) {
  dismissBtn.addEventListener("click", () => {
    successModal.classList.add("hidden");
    newsletter.classList.remove("hidden");
  });
}
