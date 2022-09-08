const form = document.querySelector("form");
const log = console.log;

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  if (validateEmail(input.value)) {
    alert("Your email is valid");
    window.location.reload();
  } else {
    if (!input.classList.contains("error")) input.classList.add("error");
    const msg = document.querySelector(".mes");
    if (!msg.classList.contains("error")) msg.classList.add("error");
    alert("Your email is invalid");
  }
});
