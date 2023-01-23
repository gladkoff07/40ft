// Import Libs from npm
import $ from "jquery";
window.jQuery = $;
window.$ = $;

import mask from "jquery-mask-plugin";
import { Fancybox } from "@fancyapps/ui";
import Swiper, { Navigation, Pagination, Autoplay, EffectFade, Thumbs } from "swiper";

// Fancybox init
Fancybox.bind("[data-fancybox]", {
  animationEffect: "zoom-in-out",
  slideClass: "modal-close",
  autoFocus: false
});
Fancybox.defaults.Hash = false;

// Swiper init achievements
const swiperAchievements = new Swiper(".js-slider-achievements", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Autoplay, EffectFade],

  spaceBetween: 10,
  autoplay: {
    delay: 3000
  },
  slidesPerView: 1,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Swiper init container
var swiperContainerSmall = new Swiper(".js-slider-container-small", {
  spaceBetween: 10,
  slidesPerView: 1,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  slideToClickedSlide: true,

  breakpoints: {
    310: {
      slidesPerView: 1,
    },
    360: {
      slidesPerView: 1.2,
    },
    400: {
      slidesPerView: 1.7,
    },
    767: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 2.7,
    },
    1280: {
      slidesPerView: 3,
    },
    1366: {
      slidesPerView: 3.5,
    },
    1449: {
      slidesPerView: 4,
    },
  }
});
var swiperContainerBig = new Swiper(".js-slider-container-big", {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Thumbs],

  // loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiperContainerSmall,
  },
});

swiperContainerSmall.on("slideChange", () => {
  swiperContainerBig.slideTo(swiperContainerSmall.activeIndex);
});

// Swiper init slider-benefits
const swiperBenefits = new Swiper(".js-slider-benefits", {
  // configure Swiper to use modules
  modules: [Navigation],

  slidesPerView: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    310: {
      slidesPerView: 1,
    },
    360: {
      slidesPerView: 1.2,
    },
    767: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2.5,
    },
    1280: {
      slidesPerView: 3,
    },
    1366: {
      slidesPerView: 3.5,
    },
    1449: {
      slidesPerView: 4,
    },
  }
});

// Swiper init slider-staff
const swiperStaff = new Swiper(".js-slider-staff", {
  // configure Swiper to use modules
  modules: [Navigation],

  slidesPerView: 2.5,
  slidesPerView: "auto",
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1.2,
      // spaceBetween: 10
    },
    767: {
      slidesPerView: 2,
    },
    1449: {
      slidesPerView: 2.5,
    },
  }
});
