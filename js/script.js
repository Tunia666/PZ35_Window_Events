const windowWidth = document.querySelector("#window-width");
const scrollY = document.querySelector("#scroll-y");
const focusStatus = document.querySelector("#focus-status");
const nameButton = document.querySelector("#name-button");
const greeting = document.querySelector("#greeting");

function updateWidth() {
  windowWidth.textContent = window.innerWidth;
}

function updateScroll() {
  scrollY.textContent = Math.round(window.scrollY);
}

updateWidth();
updateScroll();

window.addEventListener("resize", updateWidth);
window.addEventListener("scroll", updateScroll);

window.addEventListener("focus", () => {
  focusStatus.textContent = "Окно активно.";
});

window.addEventListener("blur", () => {
  focusStatus.textContent = "Окно неактивно.";
});

nameButton.addEventListener("click", () => {
  const answer = window.prompt("Введите ваше имя:");
  if (answer !== null && answer.trim() !== "") {
    greeting.textContent = `Здравствуйте, ${answer.trim()}!`;
  }
});

