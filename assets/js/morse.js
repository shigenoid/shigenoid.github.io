const morseText = ".-- . .-.. -.-. --- -- . / - --- / ... .... .. --. . -. --- .. -.. .----. ... / .-- . -... ... .. - . -.-.--";
const morseDisplay = document.getElementById('morse-display');

const morseChars = morseText.split('');
let currentIndex = 0;

function updateMorse() {
    morseDisplay.textContent = morseChars.slice(currentIndex, currentIndex + 30).join('');
    if (currentIndex + 30 >= morseChars.length) {
        morseDisplay.textContent = morseChars.slice(currentIndex).concat(morseChars.slice(0, 30 - (morseChars.length - currentIndex))).join('');
        currentIndex = (currentIndex + 1) % morseChars.length;
    } else {
        currentIndex++;
    }
    setTimeout(updateMorse, 200);
}
updateMorse();

const bar = document.querySelector(".morse-bar .bar");

document.addEventListener("DOMContentLoaded", () => {
    if (bar) {
        setTimeout(() => {
            bar.classList.add("expand");
        }, 500);
    }
});

function refresh() {
    const bar = document.querySelector('.bar');
    const fadeOverlay = document.createElement('div');

    fadeOverlay.classList.add('fade-overlay');
    document.body.appendChild(fadeOverlay);

    setTimeout(() => {
        fadeOverlay.classList.add('active');
        setTimeout(() => {
            const currentPath = window.location.pathname;
            if (currentPath === "/index.html" || currentPath === "/") {
                window.location.href = "main.html";
            } else if (currentPath === "/main.html") {
                window.location.href = "index.html";
            }
        }, 1000);
    }, 0);

    bar.style.transition = "width 0.5s cubic-bezier(0.83, 0, 0.17, 1)";
    if (bar) {
        bar.classList.remove("expand");
        setTimeout(() => {
            fadeOverlay.classList.add('active');
        }, 500);
    } else {
        fadeOverlay.classList.add('active');
        window.location.href = "main.html";
    }
}
