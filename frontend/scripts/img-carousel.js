// Simple carousel script by @Manymate1

/*

If you want to execute the script off-Web console you kinda need node.js ( Lol )

https://nodejs.org/en

*/

let currentIndex = 0;
const track = document.getElementById('carouselTrack');
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function moveCarousel(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// This automatically moves the image every 5 seconds, disable it if you want

setInterval(() => {
    moveCarousel(1);
}, 5000);
