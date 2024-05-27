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

  if (document.querySelector('.slider')) {
    new Splide('.slider', {
      arrowPath: 'M5 19.9993L35 19.9994M35 19.9994L20.8333 34.166M35 19.9994L20.8333 5.83268',
      pagination: false,
    }).mount();
  }

  if (document.querySelector('.gallery-slider')) {
    new Splide('.gallery-slider', {
      arrowPath: 'M5 19.9993L35 19.9994M35 19.9994L20.8333 34.166M35 19.9994L20.8333 5.83268',
      type: 'loop',
      pagination: false,
    }).mount();
  }

  if (document.querySelector('.guest-slider')) {
    new Splide('.guest-slider', {
      type: 'loop',
      autoWidth: !0,
      focus: 'center',
      pagination: !1,
      arrowPath: 'M5 19.9993L35 19.9994M35 19.9994L20.8333 34.166M35 19.9994L20.8333 5.83268',
    }).mount();
  }

  if (document.querySelector('.partners-big')) {
    new Splide('.partners-big', {
      type: 'loop',
      autoWidth: true,
      focus: 'center',
      pagination: false,
      arrows: false,
      gap: 90,
      autoScroll: {
        speed: 0.2,
        pauseOnHover: false,
        pauseOnFocus: false,
      },
      breakpoints: {
        768: {
          gap: 50,
        },
      },
    }).mount(window.splide.Extensions);
  }

  if (document.querySelector('.partners-small')) {
    new Splide('.partners-small', {
      type: 'loop',
      autoWidth: true,
      focus: 'center',
      pagination: false,
      arrows: false,
      gap: 90,
      autoScroll: {
        speed: -0.2,
        pauseOnHover: false,
        pauseOnFocus: false,
      },
      breakpoints: {
        768: {
          gap: 50,
        },
      },
    }).mount(window.splide.Extensions);
  }

  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  const headerNavItems = header.querySelectorAll('.header-nav li');
  const headerBurger = header.querySelector('.header-burger');
  const headerBtn = header.querySelector('.header-btn');

  headerBurger.addEventListener('click', () => {
    body.classList.toggle('overflow');
    header.classList.toggle('open');
  });

  headerBtn.addEventListener('click', () => {
    body.classList.remove('overflow');
    header.classList.remove('open');
  });

  headerNavItems.forEach((item) => {
    item.addEventListener('click', () => {
      body.classList.remove('overflow');
      header.classList.remove('open');
    });
  });

  const accordions = document.querySelectorAll('.popup-accordion');

  accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
      accordions.forEach((el) => {
        if (el !== accordion) {
          el.classList.remove('open');
        }
      });
      accordion.classList.toggle('open');
    });
  });

  const tabs = document.querySelectorAll('.popup-tabs__cosplay li');
  const rules = document.getElementById('rules');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      if (index === 0) {
        rules.style.display = 'flex';
      } else {
        rules.style.display = 'none';
      }
    });
  });

  document.querySelectorAll('.popup-tabs__partner li').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.popup-tabs__partner li').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.popup-tab').forEach((content) => {
        content.classList.remove('active');
        if (content.getAttribute('data-id') === tab.getAttribute('data-id')) {
          content.classList.add('active');
        }
      });
    });
  });

  const quiz = document.querySelector('.quiz');
  if (quiz) {
    const steps = quiz.querySelectorAll('.quiz-step');
    const nextButtons = quiz.querySelectorAll('.quiz-next');
    const currentStepDisplay = document.querySelector('.current-step');
    const totalStepsDisplay = document.querySelector('.total-steps');
    const counter = document.querySelector('.quiz-counter');
    let currentStep = 0;

    function nextStep() {
      currentStep++;
      if (currentStep < steps.length) {
        steps[currentStep - 1].classList.remove('active');
        steps[currentStep].classList.add('active');
        nextButtons[currentStep].disabled = true;
        currentStepDisplay.textContent = currentStep + 1;
      }
      if (currentStep === steps.length - 1) {
        counter.style.display = 'none';
      }
    }

    nextButtons.forEach((button, index) => {
      const radios = steps[index].querySelectorAll('input[type="radio"]');
      radios.forEach((radio) => {
        radio.addEventListener('change', () => {
          button.disabled = !Array.from(radios).some((r) => r.checked);
        });
      });

      document.querySelectorAll('.quiz-input').forEach((input) => {
        const radio = input.querySelector('input[type="radio"]');
        input.querySelector('input[type="text"]').addEventListener('click', () => {
          radio.checked = true;
          button.disabled = false;
        });
      });

      button.addEventListener('click', () => {
        nextStep();
      });
    });

    totalStepsDisplay.textContent = steps.length - 1;

    const form = document.querySelector('.quiz');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const action = form.getAttribute('action');

      fetch(action, {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error('Произошла ошибка:', error);
        });
    });
  }
});
