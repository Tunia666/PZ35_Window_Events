"use strict";

const widthText = document.querySelector("#window-width");
const scrollText = document.querySelector("#scroll-y");
const focusStatus = document.querySelector("#focus-status");
const nameButton = document.querySelector("#name-button");
const greeting = document.querySelector("#greeting");

function updateWidth() { 
  widthText.textContent = window.innerWidth; 
} 
updateWidth(); 
window.addEventListener("resize", updateWidth); 


function updateScroll() {
    scrollText.textContent = window.scrollY;
}

updateScroll ();
window.addEventListener("scroll", updateScroll);

window.addEventListener("focus", () => {
    focusStatus.textContent = "В фокусе";
});

window.addEventListener("blur", () => {
    focusStatus.textContent = "Вне фокуса";
});

nameButton.addEventListener("click" , () => {
    const userName = prompt("Введите ваше имя:");

    if (userName &&userName.trim() !== "") {
        greeting.textContent = `Привет, ${userName.trim()}!`
    }
});
// Задание 1. Создайте функцию updateWidth(): widthText.textContent = window.innerWidth.
// Вызовите её при загрузке скрипта и в обработчике resize.

// Задание 2. Покажите window.scrollY в scrollText.
// Вызовите обновление при загрузке и на событии scroll.

// Задание 3. На события focus и blur окна меняйте focusStatus.textContent.

// Задание 4. По click на nameButton вызовите prompt().
// Если пользователь ввёл непустое имя, обновите greeting.textContent.
