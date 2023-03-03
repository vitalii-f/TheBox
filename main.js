function openMenu() {
    var header_nav = document.getElementsByClassName('header__nav');
    console.log(header_nav[0]);
    header_nav[0].classList.toggle('nav__opened');
    
}