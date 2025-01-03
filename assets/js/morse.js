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

document.addEventListener("DOMContentLoaded", () => {
    const bar = document.querySelector(".morse-bar .bar");
    if (bar) {
        // Add the class to trigger the transition
        setTimeout(() => {
            bar.classList.add("expand");
        }, 500); // Add a small delay for the animation to look smooth
    }
});