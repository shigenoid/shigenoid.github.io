
const phrases = ["Welcome!", "noid!", "Hi there!", "Ass wrwb!"];
let currentPhraseIndex = 0; 
let currentText = ""; 
let targetText = phrases[currentPhraseIndex]; 

const welcomeElement = document.getElementById("welcome");

function typingEffect() {
    let phraseLength = targetText.length;

 
    for (let i = 0; i < phraseLength; i++) {
        setTimeout(() => {
            currentText = targetText.substring(0, i + 1) + currentText.substring(i + 1);
            welcomeElement.textContent = currentText;
        }, i * 100); 
    }

    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;

    setTimeout(() => {
        targetText = phrases[currentPhraseIndex];
        currentText = ""; 
        typingEffect();
    }, phraseLength * 500); 
}

// Start the typing effect
typingEffect();
