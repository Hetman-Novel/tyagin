const lazyImages = document.querySelectorAll('img[loading="lazy"]'); // Получаем все изображения с атрибутом loading="lazy"
function addLoadedClass(image) { // Функция для добавления класса к родителю изображения после его загрузки
   const parentElement = image.parentElement;
   if (image.complete) { // Проверяем, загружено ли изображение
      parentElement.classList.add('loaded');
   } else {
      image.addEventListener('load', function() { // Добавляем событие load, чтобы добавить класс после загрузки изображения
         parentElement.classList.add('loaded');
      });
   }
}
lazyImages.forEach(addLoadedClass); // Перебираем все изображения и вызываем функцию addLoadedClass для каждого

/* === */

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