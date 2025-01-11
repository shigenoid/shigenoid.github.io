const artistText = document.getElementById('artist');

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

let fontIndex = 0;

function changeFont() {
    artistText.style.fontFamily = fonts[fontIndex];
    const isItalic = Math.random() > 0.5;
    artistText.style.fontStyle = isItalic ? 'italic' : 'normal';
    const isBold = Math.random() > 0.9;
    artistText.style.fontWeight = isBold ? 'bold' : 'normal';
    fontIndex = (fontIndex + 1) % fonts.length;
}

setInterval(changeFont, 200);

window.addEventListener('scroll', function() {
    const artContainer = document.getElementById('art-container');
    const maxWidth = 175;
    const scrollY = window.scrollY;
    const width = Math.min((scrollY / 2), maxWidth);
    artContainer.style.width = `${width}px`;
});
