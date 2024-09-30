let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;

    // Hide all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Update current slide index
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Show the current slide
    slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Show the first slide initially
showSlide(currentSlide);

// Automatically change slides every 2 seconds
setInterval(() => {
    changeSlide(1);
}, 2000);

