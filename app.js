const submitBtnEl = document.querySelector(".form_btn");
const emailInputEl = document.querySelector(".email_input");
const errorEl = document.querySelector(".error");

let emailValue = "";
const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const validEmail = () => {
  errorEl.classList.add("hidden");
  emailInputEl.classList.remove("error_input");
};

const invalidEmail = () => {
  if (emailInputEl.value === "") {
    errorEl.textContent = "Whoops! It looks like you forgot to add your email";
  } else {
    errorEl.textContent = "Please provide a valid email address";
  }
  errorEl.classList.remove("hidden");
  emailInputEl.classList.add("error_input");
};

submitBtnEl.addEventListener("click", (e) => {
  emailValue = emailInputEl.value;

  if (emailValue.match(regex)) {
    validEmail();
    submitBtnEl.disabled = true;
  } else {
    invalidEmail();
    e.preventDefault();
  }
});
