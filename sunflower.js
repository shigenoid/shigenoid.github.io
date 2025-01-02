let angle = 0; // Initial angle

function rotateFlower() {
    const flowerImage = document.querySelector('.flower img');
    
    // Increment angle by 10 degrees
    angle += 10;
    // Apply the rotation using transform
    flowerImage.style.transform = `rotate(${angle}deg)`;

    setTimeout(rotateFlower, 100);
}
rotateFlower();