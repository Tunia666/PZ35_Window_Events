"use strict";

const widthText = document.querySelector("#window-width");
const scrollText = document.querySelector("#scroll-y");
const focusStatus = document.querySelector("#focus-status");
const nameButton = document.querySelector("#name-button");
const greeting = document.querySelector("#greeting");

// Задание 1. Создайте функцию updateWidth(): widthText.textContent = window.innerWidth.
// Вызовите её при загрузке скрипта и в обработчике resize.
function updateWidth() { widthText.textContent = window.innerWidth; }
function updateScroll() { scrollText.textContent = Math.round(window.scrollY); }
updateWidth();
updateScroll();

// Задание 2. Покажите window.scrollY в scrollText.
// Вызовите обновление при загрузке и на событии scroll.
focusStatus.textContent = "окно открыто";
window.addEventListener("resize", updateWidth);
window.addEventListener("scroll", updateScroll);

// Задание 3. На события focus и blur окна меняйте focusStatus.textContent.
window.addEventListener("focus", () => {
    focusStatus.textContent = "окно активно";

});
window.addEventListener("blur", () => {
    focusStatus.textContent = "окно  потеряло фокус";

});
nameButton.addEventListener("click", () => {
    const answer = window.prompt("как вас называть"); 
    if (answer !== null && answer.trim() !== "") {
        greeting.textContent = `здарова, ${answer.trim()}!`;
    }


});

// Задание 4. По click на nameButton вызовите prompt().
// Если пользователь ввёл непустое имя, обновите greeting.textContent.
