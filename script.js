const nav = document.querySelector('nav');
const navButton = document.querySelector('.nav-btn');
const menu = document.querySelector('.menu-list');
const menuLink = document.querySelectorAll('.menu-list li a');

navButton.addEventListener('click', () => {
    menu.classList.toggle('active');
})
menu.addEventListener('click', () => {
    menu.classList.toggle('active');
})

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 10) {
        nav.style.background = 'white';
        nav.style.color = 'rgb(60, 60, 60)';
        menuLink.forEach(e => e.style.color = 'rgb(60, 60, 60)');
    } else {
        nav.style.background = 'transparent';
        nav.style.color = 'white';
        menuLink.forEach(e => e.style.color = 'white');
    }
});