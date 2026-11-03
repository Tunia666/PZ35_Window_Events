const windowWidthEl = document.getElementById('window-width');
const scrollYEl = document.getElementById('scroll-y');
const focusStatusEl = document.getElementById('focus-status');
const nameButtonEl = document.getElementById('name-button');
const greetingEl = document.getElementById('greeting');

function updateWindowWidth() {
    if (windowWidthEl) {
        windowWidthEl.textContent = window.innerWidth; 
    }
}
updateWindowWidth();
window.addEventListener('resize', updateWindowWidth);

function updateScrollY() {
    if (scrollYEl) {
        scrollYEl.textContent = Math.round(window.scrollY);
    }
}
updateScrollY();
window.addEventListener('scroll', updateScrollY);

window.addEventListener('focus', () => {
    if (focusStatusEl) focusStatusEl.textContent = 'Active';
});
window.addEventListener('blur', () => {
    if (focusStatusEl) focusStatusEl.textContent = 'Inactive';
});

if (nameButtonEl && greetingEl) {
    nameButtonEl.addEventListener('click', () => {
        const userName = window.prompt('Имя:');
        if (userName !== null && userName.trim() !== '') {
            greetingEl.textContent = userName.trim();
        }
    });
}
