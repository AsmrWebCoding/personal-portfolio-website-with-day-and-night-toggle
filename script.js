let toggleBtn = document.querySelector(".toggle-btn");
let body = document.querySelector("body");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});