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


//Swiper#2_Advantages
const advantagesCount = document.querySelectorAll('.slider-advantages .swiper-slide').length

const swiperAdvantages = new Swiper('.slider-advantages', {
  spaceBetween: 12,
  loop: true,
  simulateTouch: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    enabled: true,
  },
  breakpoints: {
    1025: {
      spaceBetween: 0,
      initialSlide: 0,
      loop: false,
      slidesPerGroup: advantagesCount,
      simulateTouch: false,
      pagination: {
        el: '.swiper-pagination',
        enabled: false,
      },
    }
  }
});  


//Swiper#3-4_Template
const swiperTemplate = new Swiper('.slider-template', {
  speed: 2000,
  slidesPerView: 1,
  loop: true,
  spaceBetween: 15,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    enabled: true,
  },
  navigation: {
    enabled: false,
  },

  breakpoints: {
    1025: {
      spaceBetween: 0,
      slidesPerView: 2,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        enabled: false,
      },
    },
    1400: {
      spaceBetween: 0,
      slidesPerView: 3,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        enabled: false,
      },
    }
  }
});
