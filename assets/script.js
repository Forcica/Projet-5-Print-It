const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('.banner-p');

const dotsContainer = document.querySelector('.dots');

slides.forEach(function() {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('.dot');

if (dots.length > 0) {
    const firstDot = dots[0];
    firstDot.classList.add('dot_selected');
}

let currentSlideIndex = 0;

function showSlide(index) {
    const slide = slides[index];
    bannerImg.src = './assets/images/slideshow/' + slide.image;
    tagLine.innerHTML = slide.tagLine;
    dots.forEach(function(dot, dotIndex) {
        dot.classList.toggle('dot_selected', dotIndex === index);
    });
}

leftArrow.addEventListener('click', function() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
});

rightArrow.addEventListener('click', function() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
});
