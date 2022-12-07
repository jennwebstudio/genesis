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


  
  
});