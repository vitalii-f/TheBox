function openMenu() {
    var header_nav = document.getElementsByClassName('header__nav');
    header_nav[0].classList.toggle('nav__opened');

    var header_burger = document.getElementsByClassName('header__burger');
    header_burger[0].classList.toggle('burger__change');   
}

var slider_bg = [
    '/src/img/hero_bg.jpg',
    '/src/img/hero_bg_1.webp',
    '/src/img/hero_bg_2.webp',
    '/src/img/hero_bg_3.webp',
]

var slider = document.getElementsByClassName('hero');
var currentSlide = 0;


function prevSlide() {
    --currentSlide;
    slider[0].style.backgroundImage = 'url(' + slider_bg[currentSlide] + ')';
}

function nextSlide() {
    ++currentSlide;
    slider[0].style.backgroundImage = 'url(' + slider_bg[currentSlide] + ')';
}