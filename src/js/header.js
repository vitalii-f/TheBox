"use strict";

function openMenu() {
    const header_nav = document.getElementsByClassName('header__nav');
    header_nav[0].classList.toggle('nav__opened');

    const header_burger = document.getElementsByClassName('header__burger');
    header_burger[0].classList.toggle('burger__change');   
}

const links = document.getElementsByClassName("header__link");

for (let link of links) { 
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const anchor = link.getAttribute("href");
        document.getElementsByClassName(anchor)[0].scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}