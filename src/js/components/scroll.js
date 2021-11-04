  const menu = document.querySelector('.menu');
  const menuOpen = document.querySelector('.burger');
  const body = document.querySelector('body');
  const menuLinks = document.querySelectorAll('.menu__link');
  const getID = (link) => link.getAttribute('href').replace('#', '');

  const header = document.querySelector('.header');
  const headerHeight = header.offsetHeight;
  const firstSection = document.querySelector('.tasty-food');
  const firstSectionHeight = firstSection.offsetHeight;

  window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY;
    if (scrollDistance >= headerHeight) {
      header.classList.add('header--fixed');
      firstSection.style.marginTop = `${headerHeight}px`;
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
    })
  };

  function closeMenu() {
    menuLinks.forEach(el => {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        menuOpen.classList.remove('burger--active');
        body.classList.remove('lock');
        menu.classList.remove('menu--active');
      })
    })
  };

  function scrollToAnchors() {

    menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', function (e) {
        e.preventDefault();
        const menuName = getID(menuLink);
        const sectionPosition = document.getElementById(menuName).offsetTop;
        const currentPosition = window.pageYOffset;
        const distance = sectionPosition - currentPosition;
        const duration = 1000;
        let start = null;

        window.requestAnimationFrame(step);

        function step(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;

          window.scrollTo(0, distance * (progress / duration) + currentPosition);
          if (progress < duration) window.requestAnimationFrame(step);
        }
      })
    });

    if ('.menu--active') {
      closeMenu()
    }
  };

  function scrollClass() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          menuLinks.forEach((menuLink) => {
            menuLink.classList.toggle(
              'menu__link--active',
              getID(menuLink) === entry.target.id
            );
          });
        }
      });
    }, {
      threshold: 0.7,
    });

    document.querySelectorAll('.sections').forEach(
      (sections) => observer.observe(sections),
    );
  }
  scrollClass()
  scrollToAnchors();

  
$(function () {
  $(".footer__logo").on("click", function (e) {
		e.preventDefault();
		var id  = $(this).attr('href');
		var	top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
})