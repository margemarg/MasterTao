$(document).ready(function() {
  $('.single-item').slick();

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
});

const burger = document.querySelector('#burger');
const mobileContainer = document.querySelector('.mobile-container');
console.log(mobileContainer)

function showBurgerMenu() {
  mobileContainer.classList.toggle('show')
}

burger.addEventListener('click', showBurgerMenu)
