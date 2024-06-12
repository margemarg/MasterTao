//FancyBox
Fancybox.bind("[data-fancybox]", {

});


//Burger_Menu
const burger = document.querySelector('#burger');
const mobileContainer = document.querySelector('.mobile-container');

function showBurgerMenu() {
  mobileContainer.classList.toggle('show')
  burger.classList.toggle('is-active')
}

burger.addEventListener('click', showBurgerMenu)


//Swiper
const swiper = new Swiper('.slider-info', {
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
  },
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
