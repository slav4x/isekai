/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable no-inner-declarations */

const viewportFix = (width) => {
  const meta = document.querySelector('meta[name="viewport"]');
  meta.setAttribute('content', `user-scalable=no, width=${screen.width <= width ? width : 'device-width'}`);
};

viewportFix(380);

document.addEventListener('DOMContentLoaded', function () {
  Fancybox.bind('[data-fancybox]', {
    dragToClose: false,
    autoFocus: false,
    placeFocusBack: false,
  });

  // const heroSlider = new Swiper('.hero-slider', {
  //   loop: true,
  //   speed: 1000,
  //   navigation: {
  //     nextEl: '.hero-slider__next',
  //     prevEl: '.hero-slider__prev',
  //   },
  // });
});
