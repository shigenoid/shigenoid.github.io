// JavaScript for changing fonts
const artistText = document.getElementById('artist');

// List of 8 font families to cycle through
const fonts = [
    "'Editorial', Times, serif",
    "'Times New Roman', Times, serif",
    "'Arial', sans-serif",
    "'Georgia', serif",
    "'Verdana', sans-serif",
    "'Tahoma', sans-serif",
    "'Editorial-Italic', Times, serif",
    "'Poppins', serif"
];

let fontIndex = 0; // To keep track of the current font

// Function to change the font family and randomly toggle italic and bold styles
function changeFont() {
    // Set the font family
    artistText.style.fontFamily = fonts[fontIndex];

    // Randomly apply italic style
    const isItalic = Math.random() > 0.5; // 50% chance for italic
    artistText.style.fontStyle = isItalic ? 'italic' : 'normal';

    // Randomly apply bold style
    const isBold = Math.random() > 0.9; // 50% chance for bold
    artistText.style.fontWeight = isBold ? 'bold' : 'normal';

    // Update the font index for the next change
    fontIndex = (fontIndex + 1) % fonts.length; // Cycle through the fonts
}

// Change the font every 200ms
setInterval(changeFont, 200);


window.addEventListener('scroll', function() {
    const artContainer = document.getElementById('art-container');
    const maxWidth = 175;
    const scrollY = window.scrollY;
    
    // Calculate the width based on the scroll position, and limit it to 175px
    const width = Math.min((scrollY / 2), maxWidth); // Adjust the /2 factor to control the rate of increase
    
    artContainer.style.width = `${width}px`;
});