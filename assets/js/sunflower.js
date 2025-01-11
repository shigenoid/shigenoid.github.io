let angle = 0; // Initial angle

function rotateFlower() {
    const flowerImage = document.querySelector('.rotate');
    
    angle += 10;
    
    const currentPath = window.location.pathname;
        
            if (currentPath === "/index.html" || currentPath === "/") {
                flowerImage.style.transform = `translate(-50%, -60%) rotate(${angle}deg)`;
            } else if (currentPath === "/main.html") {
                flowerImage.style.transform = `rotate(${angle}deg)`;
            }

    setTimeout(rotateFlower, 100);
}

rotateFlower();