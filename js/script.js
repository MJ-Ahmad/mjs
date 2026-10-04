document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang || 'en';
      if (window.mjsI18n && typeof window.mjsI18n.apply === 'function') {
        window.mjsI18n.apply(lang);
      }
    });
  });

  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      const target = targetId ? document.querySelector(targetId) : null;
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (mainNav && mainNav.classList.contains('is-open')) {
        mainNav.classList.remove('is-open');
      }
    });
  });

  const contactForm = document.querySelector('[data-form]');
  const formStatus = document.querySelector('.form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = (formData.get('name') || '').toString().trim();

      if (formStatus) {
        formStatus.textContent = name
          ? `Thanks, ${name}. Your message has been prepared and is ready to send.`
          : 'Thanks. Your message has been prepared and is ready to send.';
      }

      contactForm.reset();
    });
  }

  // Splash overlay handling
  const splash = document.getElementById('splash');
  try {
    const splashSeen = sessionStorage.getItem('mjs-splash-seen');
    if (splash && !splashSeen) {
      // show splash for 900ms then hide
      setTimeout(() => {
        splash.classList.add('hidden');
        sessionStorage.setItem('mjs-splash-seen', '1');
      }, 900);
    } else if (splash) {
      splash.classList.add('hidden');
    }
  } catch (e) {
    if (splash) splash.classList.add('hidden');
  }

  const savedLang = localStorage.getItem('mjs-lang') || 'en';
  if (window.mjsI18n && typeof window.mjsI18n.apply === 'function') {
    window.mjsI18n.apply(savedLang);
  }
});
