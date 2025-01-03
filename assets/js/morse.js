const morseText = ".-- . .-.. -.-. --- -- . / - --- / ... .... .. --. . -. --- .. -.. .----. ... / .-- . -... ... .. - . -.-.--";
const morseDisplay = document.getElementById('morse-display');

// Create an array of characters from the Morse text
const morseChars = morseText.split('');
let currentIndex = 0;

// Function to update the displayed Morse text
function updateMorse() {
    // Set the text content to the current segment
    morseDisplay.textContent = morseChars.slice(currentIndex, currentIndex + 30).join('');
    
    // Increment the index and wrap it around if it exceeds the text length
    if (currentIndex + 30 >= morseChars.length) {
        // Display the characters that wrap to the beginning of the text
        morseDisplay.textContent = morseChars.slice(currentIndex).concat(morseChars.slice(0, 30 - (morseChars.length - currentIndex))).join('');
        currentIndex = (currentIndex + 1) % morseChars.length;
    } else {
        // Normal flow when the text isn't wrapping
        currentIndex++;
    }

    // Repeat the update every 200 milliseconds
    setTimeout(updateMorse, 200);
}
updateMorse();

const bar = document.querySelector(".morse-bar .bar");

document.addEventListener("DOMContentLoaded", () => {
    
    if (bar) {
        // Add the class to trigger the transition
        setTimeout(() => {
            bar.classList.add("expand");
        }, 500); // Add a small delay for the animation to look smooth
    }
});

function refresh() {
    bar.style.transition = "width 0.5s cubic-bezier(0.83, 0, 0.17, 1)";
    if (bar) {
        // Remove the "expand" class to trigger the de-expansion animation
        bar.classList.remove("expand");

        // Wait for the de-expansion animation to complete before reloading
        setTimeout(() => {
            location.reload();
        }, 500); // Match this delay with the CSS transition duration
    } else {
        location.reload();
    }
}