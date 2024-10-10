let currentIndex = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots[i].classList.remove('active');
    });

    dots[currentIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function currentSlide(index) {
    showSlide(index - 1);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);


setInterval(nextSlide, 4000);
