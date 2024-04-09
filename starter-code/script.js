const body = document.querySelector("body");
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submitted");
});
const themeButton = document.querySelector(".theme");
themeButton.addEventListener("click", () => {
  body.classList.toggle("dark");
});
