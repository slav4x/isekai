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

  const slider = new Splide('.slider', {
    arrowPath: 'M5 19.9993L35 19.9994M35 19.9994L20.8333 34.166M35 19.9994L20.8333 5.83268',
    pagination: false,
  });

  slider.mount();

  new Splide('.gallery-slider', {
    arrows: false,
    type: 'loop',
    pagination: false,
  }).mount();

  new Splide('.guest-slider', {
    type: 'loop',
    autoWidth: !0,
    focus: 'center',
    pagination: !1,
    arrowPath: 'M5 19.9993L35 19.9994M35 19.9994L20.8333 34.166M35 19.9994L20.8333 5.83268',
  }).mount();
});
