/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Swiper slider        *

 ================================*/

//=========================================//
/*            02) Swiper slider            */
//=========================================//

const swiper = new Swiper(".clients-swiper", {
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
    el: ".swiper-scrollbar",
  },
});
