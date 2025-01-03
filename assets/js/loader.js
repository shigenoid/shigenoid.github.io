document.addEventListener("DOMContentLoaded", () => {
    const loaderScreen = document.getElementById("loader-screen");
    const content = document.getElementById("content");
    const loaderImage = document.querySelector("#loader img");

    let rotation = 0;

    // Function to make the image rotate choppily
    const rotateImage = () => {
        rotation += 10; // Rotate by 10 degrees per interval
        loaderImage.style.transform = `rotate(${rotation}deg)`;
    };

    // Start the choppy rotation
    const rotationInterval = setInterval(rotateImage, 100); // Rotate every 100ms

    // After 500ms, start fading the background and the image
    setTimeout(() => {
        loaderScreen.style.backgroundColor = "rgba(0, 0, 0, 0)"; // Fade background to transparent
        loaderImage.style.opacity = "0"; // Fade out the image
    }, 500);

    // After 1000ms (500ms + fade duration), hide loader and show content
    setTimeout(() => {
        clearInterval(rotationInterval); // Stop the rotation
        loaderScreen.style.display = "none"; // Hide the loader
        content.style.display = "block"; // Show the content
    }, 1000);
});
