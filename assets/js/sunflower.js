let angle = 0; // Initial angle

function rotateFlower() {
    const flowerImage = document.querySelector('.rotate');
    
    // Increment angle by 10 degrees
    angle += 10;
    
    // Apply the rotation using transform
    
    const currentPath = window.location.pathname;
        
            if (currentPath === "/index.html" || currentPath === "/") {
                flowerImage.style.transform = `translate(-50%, -60%) rotate(${angle}deg)`;
            } else if (currentPath === "/main.html") {
                flowerImage.style.transform = `rotate(${angle}deg)`;
            }

    // Call rotateFlower again after 100ms to keep the rotation going
    setTimeout(rotateFlower, 100);
}

rotateFlower();