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
const swiperInfo = new Swiper('.slider-info', {
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
    1025: {
      spaceBetween: 40,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }
});


//Calculation
const fileLabel = document.querySelectorAll('.calculation-label');
const fileInput = document.querySelectorAll('.calculation-file');

//fileInput.addEventListener('change', function() {
//  fileName.innerHTML = fileInput.files[0].name;
//});

fileInput.forEach(item => {
  item.addEventListener('change', function() {
    const fileName = item.closest('.input-box').querySelector('.file-name')
    console.log(fileName);
    fileName.innerHTML = item.files[0].name;
  })
})


//margin-bottom
fileLabel.forEach(item => item.closest('.form-row').previousElementSibling.classList.add('special-gap'))


//Swiper#2
//let swiperAdvantages

//function initAdvantages() {
//  swiperAdvantages = new Swiper('.slider-advantages', {
//    spaceBetween: 15,
//    loop: true,

//    pagination: {
//      el: '.swiper-pagination',
//      clickable: true,
//      enabled: true,
//    },
  
//    autoplay: {
//      delay: 5000,
//    },
  
//    breakpoints: {
//      1025: {
//        spaceBetween: 40,
//        navigation: {
//          enabled: true,
//          nextEl: '.swiper-button-next',
//          prevEl: '.swiper-button-prev',
//        },
//        pagination: {
//          enabled: false,
//        },
//      }
//    }
//  });
//}

//function destroyAdvantages() {
//  swiperAdvantages.destroy (true, true)
//}

//function mediaQuery(matchMedia1024) {
//  if (matchMedia1024.matches) {
//    initAdvantages()
//  }
//  else {
//    destroyAdvantages()
//  }
//}

//const matchMedia1024 = window.matchMedia("(max-width: 1024px)")

//mediaQuery(matchMedia1024);


//Delivery
const swiperDelivery = new Swiper('.slider-template', {
  speed: 700,
  slidesPerView: 1,
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
    1025: {
      spaceBetween: 20,
      slidesPerView: 3,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        enabled: false,
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
