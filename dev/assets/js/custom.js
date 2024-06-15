//FancyBox
Fancybox.bind("[data-fancybox]", {

});


//Burger_Menu
const burger = document.querySelector('#burger');
const body = document.querySelector('body');
const mobileContainer = document.querySelector('.mobile-container');

function showBurgerMenu() {
  mobileContainer.classList.toggle('show')
  burger.classList.toggle('is-active')
  body.classList.toggle('overflow-hidden')
}

burger.addEventListener('click', showBurgerMenu)


//Swiper
const swiper = new Swiper('.slider-info', {
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    enabled: false,
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    992: {
      spaceBetween: 40,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }
});


//Slick
//$(document).ready(function() {
  //$('your-class').slick({
    //dots: true,
    //infinite: false,
    //pauseOnHover: true,
    //autoplay: true,
    //autoplaySpeed: 1000,
  //});
//});
