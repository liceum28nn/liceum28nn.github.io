const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-menu__toggle');

navMenu.classList.remove('nav-menu--nojs');
navMenu.classList.add('nav-menu--closed');

navToggle.click  = () =>{
  if (navMenu.classList.contains('nav-menu--closed')) {
    navMenu.classList.remove('nav-menu--closed');
    navMenu.classList.add('nav-menu--opened');
  } else {
    navMenu.classList.add('nav-menu--closed');
    navMenu.classList.remove('nav-menu--opened');
  }
};

const map = document.querySelector('.contacts__map');
map.classList.remove('page__visually-hidden');
