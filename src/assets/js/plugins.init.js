/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Swiper slider        *

 ================================*/

//=========================================//
/*            02) Swiper slider            */
//=========================================//

const clientsSwiper = new Swiper(".clients-swiper", {
  spaceBetween: 10,
  slidesPerView: 2,
  autoplay: {
    delay: 0,
  },
  speed: 2000,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    992: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1020: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 8,
      spaceBetween: 50,
    },
  },
});
const plansSwiper = new Swiper(".plansSwiper", {
  spaceBetween: 10,
  slidesPerView: 1,

  speed: 2000,
  loop: false,
  center: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 0,
    },

    1200: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".nextFeedback",
    prevEl: ".prevFeedback",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar.plans-scrollbar",
    draggable: true,
    dragSize: 50,
  },
});
