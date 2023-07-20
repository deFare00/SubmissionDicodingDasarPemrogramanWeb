const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
let currentIndex = 0;

function slideRight() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSliderPosition();
}

function slideLeft() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSliderPosition();
}

function updateSliderPosition() {
    const slideWidth = images[0].clientWidth;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

setInterval(slideRight, 5000); // Automatically slide every 5 seconds

// Optional: Add event listeners for manual navigation
document.querySelector(".next-btn").addEventListener("click", slideRight);
document.querySelector(".prev-btn").addEventListener("click", slideLeft);
