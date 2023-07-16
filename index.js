const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');
const closeBurger = document.querySelector('.burger__close');
burger.addEventListener('click', () => {
    burgerMenu.style.display = 'block';
    closeBurger.style.display = 'block';
});

closeBurger.addEventListener('click', () => {
    burgerMenu.style.display = 'none';
    closeBurger.style.display = 'none';
})