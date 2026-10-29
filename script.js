/* ==========================================================================
   Syed Ukasha Shahid — Portfolio interactions (vanilla JavaScript)
   ========================================================================== */

(() => {
  'use strict';

  // Lets CSS apply "hidden until revealed" styles only when JS is running,
  // so the page remains fully readable if scripts are disabled.
  document.documentElement.classList.add('js');

  const header = document.getElementById('site-header');
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const backToTop = document.getElementById('back-to-top');
  const yearEl = document.getElementById('year');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ---------- 1. Footer year ---------- */
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- 2. Mobile navigation ---------- */
  const toggleLabel = navToggle ? navToggle.querySelector('.visually-hidden') : null;

  const setMenu = (open) => {
    if (!navToggle || !navMenu) return;
    navToggle.setAttribute('aria-expanded', String(open));
    navMenu.classList.toggle('is-open', open);
    if (toggleLabel) toggleLabel.textContent = open ? 'Close menu' : 'Open menu';
  };

  const isMenuOpen = () => navToggle && navToggle.getAttribute('aria-expanded') === 'true';

  if (navToggle) {
    navToggle.addEventListener('click', () => setMenu(!isMenuOpen()));
  }

  // Close on Escape and return focus to the toggle
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isMenuOpen()) {
      setMenu(false);
      navToggle.focus();
    }
  });

  // Close when clicking outside the open menu
  document.addEventListener('click', (event) => {
    if (isMenuOpen() && header && !header.contains(event.target)) setMenu(false);
  });

  // Reset the menu if the viewport grows past the mobile breakpoint
  const desktopQuery = window.matchMedia('(min-width: 1061px)');
  desktopQuery.addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* ---------- 3. Smooth scrolling for in-page links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;

      event.preventDefault();
      setMenu(false);

      const headerOffset = header ? header.offsetHeight : 0;
      const top = id === '#home'
        ? 0
        : target.getBoundingClientRect().top + window.pageYOffset - headerOffset;

      window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion.matches ? 'auto' : 'smooth' });

      // Keep the URL and keyboard focus in sync with the destination
      history.pushState(null, '', id);
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  /* ---------- 4 & 6. Header shadow + back-to-top visibility ---------- */
  let ticking = false;
  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', y > 10);
    if (backToTop) backToTop.classList.toggle('is-visible', y > window.innerHeight * 0.8);
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      const home = document.getElementById('home');
      if (home) {
        if (!home.hasAttribute('tabindex')) home.setAttribute('tabindex', '-1');
        home.focus({ preventScroll: true });
      }
      history.pushState(null, '', '#home');
    });
  }

  /* ---------- 5. Active navigation link ---------- */
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  const setActive = (id) => {
    navLinks.forEach((link) => {
      const active = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  // Pick the last section whose top has passed a line ~35% down the viewport.
  // This is more reliable than IntersectionObserver for sections of very
  // different heights, and it correctly lands on Contact at the page bottom.
  const updateActive = () => {
    const line = window.innerHeight * 0.35;
    let current = sections.length ? sections[0].id : '';
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= line) current = section.id;
    });
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
    if (atBottom && sections.length) current = sections[sections.length - 1].id;
    setActive(current);
  };

  let activeTicking = false;
  window.addEventListener('scroll', () => {
    if (!activeTicking) {
      window.requestAnimationFrame(() => { updateActive(); activeTicking = false; });
      activeTicking = true;
    }
  }, { passive: true });
  window.addEventListener('resize', updateActive);
  updateActive();

  /* ---------- 7. Scroll-triggered reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');

  if (reduceMotion.matches || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    // Stagger siblings slightly so grids feel composed rather than mechanical
    revealEls.forEach((el) => {
      const siblings = Array.from(el.parentElement.children).filter((c) => c.classList.contains('reveal'));
      const index = siblings.indexOf(el);
      if (index > 0) el.style.transitionDelay = `${Math.min(index, 5) * 70}ms`;
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    revealEls.forEach((el) => revealObserver.observe(el));
  }
})();
