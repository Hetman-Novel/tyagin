const museumHallsSlider = document.querySelector('.museum-halls__slider')
if (museumHallsSlider) {
   new Swiper(museumHallsSlider, {
      navigation: {
         prevEl: '#museum-halls-slider-swiper-button-prev',
         nextEl: '#museum-halls-slider-swiper-button-next',
      },
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
      slidesPerView: 6,
      watchOverflow: true,
      spaceBetween: 30,
      //centeredSlides: true,
      //loop: true,
      speed: 800,
      effect: 'slide',
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      breakpoints: {
         0: {
            slidesPerView: 2,
            spaceBetween: 10,
         },
         461: {
            slidesPerView: 3,
            spaceBetween: 20,
         },
         576: {
            slidesPerView: 4,
            spaceBetween: 20,
         },
         801: {
            slidesPerView: 5,
            spaceBetween: 30,
         },
         1025: {
            slidesPerView: 6,
            spaceBetween: 30,
         }
      }
   });
}

document.addEventListener('DOMContentLoaded', function () {
   
   const museumHallsWrapSlider = document.querySelector('.museum-halls__wrapSlider')
   if (museumHallsWrapSlider) {
      const museumHallsSlide = document.querySelectorAll('.museum-halls__slide')
      if (museumHallsSlide.length > 6) {
         museumHallsWrapSlider.classList.add('more-than-six');
      }
   }

   const sliderBlocks = document.querySelectorAll('.about-tyagin__sliderBlockImage');
   if (sliderBlocks) {
      function handleEvent(event) {
         document.querySelectorAll('.show-pagination').forEach(element => {
            element.classList.remove('show-pagination');
         });
         let parent = event.currentTarget;
         for (let i = 0; i < 4; i++) {
            parent = parent.parentElement;
            if (!parent) return;
         }
         parent.classList.add('show-pagination');
      }
      sliderBlocks.forEach(block => {
         block.addEventListener('mouseenter', handleEvent);
         block.addEventListener('touchstart', handleEvent);
      });
      sliderBlocks.forEach(block => {
         block.addEventListener('mouseleave', function () {
            let parent = this;
            for (let i = 0; i < 4; i++) {
               parent = parent.parentElement;
               if (!parent) return;
            }
            parent.classList.remove('show-pagination');
         });
      });
   }
});

const museumHallsBlock = document.querySelector('.museum-halls__block')
if (museumHallsBlock) {
   var swiper = new Swiper(".museum-hall-small-slider", {
      spaceBetween: 18,
      slidesPerView: 7,
      freeMode: true,
      watchSlidesProgress: true,
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      //simulateTouch: false,
      touchRation: 0,
      touchAngle: 0,
      watchOverflow: false,
      breakpoints: {
         0: {
            slidesPerView: 5,
            spaceBetween: 10,
         },
         641: {
            slidesPerView: 7,
            spaceBetween: 18,
         }
      }
   });
   var swiper2 = new Swiper(".museum-hall-big-slider", {
      slidesPerView: 1,
      spaceBetween: 10,
      effect: 'fade',
      navigation: {
         prevEl: ".museum-hall-big-slide-prev",
         nextEl: ".museum-hall-big-slide-next",
      },
      thumbs: {
         swiper: swiper,
      },
      preloadImages: false,
      lazy: {
         loadOnTransitionStart: false,
         loadPrewNext: false,
      },
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      simulateTouch: false,
      touchRation: 0,
      touchAngle: 0,
      watchOverflow: false,
   });
}


const aboutTyaginSliderOne = document.getElementById('about-tyagin-slider-one')
if (aboutTyaginSliderOne) {
   new Swiper(aboutTyaginSliderOne, {
      pagination: {
         el: "#about-tyagin-slider-one-pagination",
         type: "fraction",
      },
      slidesPerView: 1,
      loop: true,
      freeMode: true,
      autoplay: {
         deley: 100,
         stopOnLastSlide: false,
         disableOnInteraction: false,
      },
      speed: 1200,
      effect: 'fade',
      simulateTouch: false,
      touchRation: 0,
      touchAngle: 0,
      watchOverflow: false,
   });
}
const aboutTyaginSliderTwo = document.getElementById('about-tyagin-slider-two')
if (aboutTyaginSliderTwo) {
   new Swiper(aboutTyaginSliderTwo, {
      pagination: {
         el: "#about-tyagin-slider-two-pagination",
         type: "fraction",
      },
      slidesPerView: 1,
      loop: true,
      freeMode: true,
      autoplay: {
         deley: 300,
         stopOnLastSlide: false,
         disableOnInteraction: false,
      },
      speed: 1200,
      effect: 'fade',
      simulateTouch: false,
      touchRation: 0,
      touchAngle: 0,
      watchOverflow: false,
   });
}
const aboutTyaginSliderThree = document.getElementById('about-tyagin-slider-three')
if (aboutTyaginSliderThree) {
   new Swiper(aboutTyaginSliderThree, {
      pagination: {
         el: "#about-tyagin-slider-three-pagination",
         type: "fraction",
      },
      slidesPerView: 1,
      loop: true,
      freeMode: true,
      autoplay: {
         deley: 600,
         stopOnLastSlide: false,
         disableOnInteraction: false,
      },
      speed: 1200,
      effect: 'fade',
      simulateTouch: false,
      touchRation: 0,
      touchAngle: 0,
      watchOverflow: false,
   });
}