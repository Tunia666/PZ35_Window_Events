"use strict";

const widthText = document.querySelector("#window-width");
const scrollText = document.querySelector("#scroll-y");
const focusStatus = document.querySelector("#focus-status");
const nameButton = document.querySelector("#name-button");
const greeting = document.querySelector("#greeting");

// Задание 1. Создайте функцию updateWidth(): widthText.textContent = window.innerWidth.
// Вызовите её при загрузке скрипта и в обработчике resize.
function updateWidth() {
  widthText.textContent = window.innerWidth;
}

updateWidth();
window.addEventListener("resize", updateWidth);

// Задание 2. Покажите window.scrollY в scrollText.
// Вызовите обновление при загрузке и на событии scroll.
function updateScroll() {
  scrollText.textContent = Math.round(window.scrollY);
}

updateScroll();
window.addEventListener("scroll", updateScroll);

// Задание 3. На события focus и blur окна меняйте focusStatus.textContent.
window.addEventListener("focus", () => {
  focusStatus.textContent = "Вкладка активна";
});

window.addEventListener("blur", () => {
  focusStatus.textContent = "Вкладка неактивна";
});

// Задание 4. По click на nameButton вызовите prompt().
// Если пользователь ввёл непустое имя, обновите greeting.textContent.
nameButton.addEventListener("click", () => {
  const userName = prompt("Введите ваше имя:");

  if (userName !== null && userName.trim() !== "") {
    greeting.textContent = `Здравствуйте, ${userName.trim()}!`;
  }
});
