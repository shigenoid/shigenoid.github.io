document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);

    const loaderScreen = document.getElementById("loader-screen");
    const content = document.getElementById("content");
    const loaderImage = document.querySelector("#loader img");

    let rotation = 0;

    const rotateImage = () => {
        rotation += 10;
        loaderImage.style.transform = `rotate(${rotation}deg)`;
    };

    const rotationInterval = setInterval(rotateImage, 100);

    setTimeout(() => {
        loaderScreen.style.backgroundColor = "rgba(0, 0, 0, 0)";
        loaderImage.style.opacity = "0";
    }, 500);

    setTimeout(() => {
        clearInterval(rotationInterval);
        loaderScreen.style.display = "none";
        content.style.display = "block";
    }, 1000);
});
