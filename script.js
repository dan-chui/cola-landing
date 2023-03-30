function imgSlide(item) {
    document.querySelector('.cola').src = item;
}

function pageColor(color) {  
    const sect = document.querySelector('.sect');
    sect.style.background = color;
}

function menuToggle() {
    const toggleMenu = document.querySelector('.toggleMenu');
    const navigation = document.querySelector('.navigation');
    toggleMenu.classList.toggle('active');
    navigation.classList.toggle('active');
}