"use strict";

const slider_bg = [
    './src/img/hero_bg.webp',
    './src/img/hero_bg_1.webp',
    './src/img/hero_bg_2.webp',
    './src/img/hero_bg_3.webp',
]

const slider = document.getElementsByClassName("hero");
let currentSlide = 0; // current slide of "hero" section

function changeSlide(direction) {
    if (direction == "prev") {
        if (currentSlide !== 0) {
            currentSlide--;
        }
    }

    if (direction == "next") {
        if (currentSlide !== slider_bg.length - 1) {
            currentSlide++;
        }
    }
    
    slider[0].style.backgroundImage = 'url(' + slider_bg[currentSlide] + ')';
}