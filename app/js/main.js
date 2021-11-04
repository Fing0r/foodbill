"use strict";
"use strict";

var menu = document.querySelector('.menu');
var menuOpen = document.querySelector('.burger');
var body = document.querySelector('body');
var menuLinks = document.querySelectorAll('.menu__link');

var getID = function getID(link) {
  return link.getAttribute('href').replace('#', '');
};

var header = document.querySelector('.header');
var headerHeight = header.offsetHeight;
var firstSection = document.querySelector('.tasty-food');
var firstSectionHeight = firstSection.offsetHeight;
window.addEventListener('scroll', function () {
  var scrollDistance = window.scrollY;

  if (scrollDistance >= headerHeight) {
    header.classList.add('header--fixed');
    firstSection.style.marginTop = "".concat(headerHeight, "px");
  } else {
    header.classList.remove('header--fixed');
    firstSection.style.marginTop = null;
  }
});

if (menu) {
  menuOpen.addEventListener('click', function () {
    menu.classList.toggle('menu--active');
    menuOpen.classList.toggle('burger--active');
    body.classList.toggle('lock');
  });
}

;

function closeMenu() {
  menuLinks.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      menuOpen.classList.remove('burger--active');
      body.classList.remove('lock');
      menu.classList.remove('menu--active');
    });
  });
}

;

function scrollToAnchors() {
  menuLinks.forEach(function (menuLink) {
    menuLink.addEventListener('click', function (e) {
      e.preventDefault();
      var menuName = getID(menuLink);
      var sectionPosition = document.getElementById(menuName).offsetTop;
      var currentPosition = window.pageYOffset;
      var distance = sectionPosition - currentPosition;
      var duration = 1000;
      var start = null;
      window.requestAnimationFrame(step);

      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        window.scrollTo(0, distance * (progress / duration) + currentPosition);
        if (progress < duration) window.requestAnimationFrame(step);
      }
    });
  });

  if ('.menu--active') {
    closeMenu();
  }
}

;

function scrollClass() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        menuLinks.forEach(function (menuLink) {
          menuLink.classList.toggle('menu__link--active', getID(menuLink) === entry.target.id);
        });
      }
    });
  }, {
    threshold: 0.7
  });
  document.querySelectorAll('.sections').forEach(function (sections) {
    return observer.observe(sections);
  });
}

scrollClass();
scrollToAnchors();
$(function () {
  $(".footer__logo").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
});
"use strict";

var testimonialsSlider = document.querySelector('.testimonials__slider');

if (testimonialsSlider) {
  var testimonialsSliders = new Swiper(testimonialsSlider, {
    wrapperClass: 'testimonials__list',
    slideClass: 'testimonials__slide',
    loop: true,
    navigation: {
      nextEl: '.testimonials__arrow--next',
      prevEl: '.testimonials__arrow--prev'
    },
    pagination: {
      el: '.testimonials__dots',
      type: 'bullets',
      bulletClass: 'testimonials__dot',
      bulletActiveClass: 'testimonials__dot--active',
      clickable: true,
      bulletElement: 'button'
    }
  });
}
/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */
"use strict";
//# sourceMappingURL=main.js.map
