/* Let's Cars Barcelona — interacciones */
(function () {
  // Menú móvil
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', nav.classList.contains('is-open'));
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { nav.classList.remove('is-open'); });
    });
  }

  // Galería de la ficha: click en miniatura cambia la principal
  var main = document.querySelector('.gallery__main img');
  if (main) {
    document.querySelectorAll('.gallery__thumbs img').forEach(function (t) {
      t.addEventListener('click', function () {
        var full = t.getAttribute('data-full') || t.src;
        main.src = full;
      });
    });
  }

  // Reveal on scroll suave
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'none'; io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.style.opacity = 0;
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1)';
      io.observe(el);
    });
  }
})();
