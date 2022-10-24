import Swiper from "swiper";
import "swiper/scss";

const reviewSliderContainer = document.querySelector(".js-reviews-slider");
if (reviewSliderContainer) {
  new Swiper(reviewSliderContainer, {
    slidesPerView: 1.1,
    spaceBetween: 16,
    loop: true,
    breakpoints: {
      768: {
        slidesPerView: 1.8,
      },
      992: {
        slidesPerView: 2.2,
        spaceBetween: 40,
      },
    },
  });
}
const moreCaseContainer = document.querySelector(".js-services-more-slider");
if (moreCaseContainer) {
  new Swiper(moreCaseContainer, {
    slidesPerView: 1.1,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
}
const timelineContainer = document.querySelector(".js-timeline-slider");
if (timelineContainer) {
  new Swiper(timelineContainer, {
    slidesPerView: 1.15,
    spaceBetween: 16,
    breakpoints: {
      768: {
        slidesPerView: 2.2,
      },
      1024: {
        slidesPerView: 3.2,
        spaceBetween: 40,
      },
      1620: {
        slidesPerView: 4.2,
      },
    },
  });
}
