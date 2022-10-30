const nav = document.querySelector('nav');
const title = document.querySelectorAll('.nav-title a')[1];

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
    if (document.documentElement.scrollTop > 30) {
        nav.style.background = 'white';
        title.style.color = 'rgb(60, 60, 60)';
        menuLink.forEach(e => e.style.color = 'rgb(60, 60, 60)');
    } else {
        nav.style.background = 'transparent';
        title.style.color = 'white';
        menuLink.forEach(e => e.style.color = 'white');
    }
});