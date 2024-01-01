const menuButton = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.menu-item');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});


