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
    scrollText.textContent = Math.round(window.scrollY);
}
updateScroll();
window.addEventListener("scroll", updateScroll);
window.addEventListener("focus", () => {
    focusStatus.textContent = "В фокусе";
});
window.addEventListener("blur", () => {
    focusStatus.textContent = "Вне фокуса";
});
nameButton.addEventListener("click", () => {
    const userName = prompt("Введите ваше имя:");
    if (userName && userName.trim() !== "") {
        greeting.textContent = `Привет, ${userName.trim()}!`;
    }
});
