'use strict';

document.addEventListener('DOMContentLoaded', () => {
  
  const body = document.body,
        menu = document.querySelector('.header__menu'),
        burger = document.querySelector('.menu__icon');

  // ------------------ mobile menu ---------------

  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');  // не дает скроллить сайт при открытом меню
  });

  // ------------------ smooth scroll ---------------

  const footLogo = document.querySelector('.footer__logo img');

  function smoothScroll(selector) {
    const id = selector.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
	});
}
  menu.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target && event.target.matches(".menu__link")) {
      smoothScroll(event.target);
    }
  });  

  footLogo.addEventListener('click', (event) => {
    event.preventDefault();    
    smoothScroll(event.target.closest('.footer__logo'));
  });

});