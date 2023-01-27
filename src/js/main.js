'use strict';

document.addEventListener('DOMContentLoaded', () => {
  
  const menu = document.querySelector('.header__menu'),
        burger = document.querySelector('.menu__icon');

  // ------------------ mobile menu ---------------

  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    
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
    if (event.target && event.target.matches(".link-ancor")) {
      burger.classList.remove('_active');
      menu.classList.remove('_active');

      smoothScroll(event.target);
    } else {
      window.location.href = event.target.getAttribute('href');
    }
    
  });  

  footLogo.addEventListener('click', (event) => {
    event.preventDefault();    
    smoothScroll(event.target.closest('.footer__logo'));
  });

  // ------------  Slider fairy-camp__slider -------------

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    var i;
    const slides = document.querySelectorAll('.fairy-camp__slide');
    if ( n > slides.length) { slideIndex = 1; }
    if  (n < 1) { slideIndex = slides.length; }
    for ( i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
  }

  if (document.querySelector('.fairy-camp__btn')) {
    var slideIndex = 1;
    const prev = document.querySelector('.fairy-camp__btn--prev'),
          next = document.querySelector('.fairy-camp__btn--next');

    showSlides(slideIndex);

    prev.addEventListener('click', () => {
      plusSlides(-1);
    });

    next.addEventListener('click', () => {
      plusSlides(1);
    });
  }

});