function openMenu() {
    var header_nav = document.getElementsByClassName('header__nav');
    header_nav[0].classList.toggle('nav__opened');

    var header_burger = document.getElementsByClassName('header__burger');
    header_burger[0].classList.toggle('burger__change');   
}