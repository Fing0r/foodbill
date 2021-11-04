const testimonialsSlider = document.querySelector('.testimonials__slider');
if (testimonialsSlider) {
  const testimonialsSliders = new Swiper(testimonialsSlider, {
    wrapperClass: 'testimonials__list',
    slideClass: 'testimonials__slide',
    loop: true,
    navigation: {
      nextEl: '.testimonials__arrow--next',
      prevEl: '.testimonials__arrow--prev',
    },
    pagination: {
      el: '.testimonials__dots',
      type: 'bullets',
      bulletClass: 'testimonials__dot',
      bulletActiveClass: 'testimonials__dot--active',
      clickable: true,
      bulletElement: 'button',
    },
  })
}
