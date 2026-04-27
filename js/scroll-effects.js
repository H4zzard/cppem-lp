/**
 * CPPEM · Módulo Scroll Effects
 * - Navbar com mudança de fundo ao scroll
 * - Parallax suave no hero
 * - Sticky CTA mobile
 * - Scroll reveal via IntersectionObserver
 */
(function () {
  'use strict';

  // ===== NAVBAR SCROLL =====
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) navbar.classList.add('scrolled');
      else navbar.classList.remove('scrolled');
    }, { passive: true });
  }

  // ===== HERO PARALLAX =====
  const heroBg = document.getElementById('heroBg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroBg.style.transform = `translateY(${y * 0.35}px)`;
      }
    }, { passive: true });
  }

  // ===== STICKY CTA MOBILE =====
  const stickyCta = document.getElementById('stickyCta');
  if (stickyCta) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) stickyCta.classList.add('visible');
      else stickyCta.classList.remove('visible');
    }, { passive: true });
  }

  // ===== SCROLL REVEAL =====
  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    document
      .querySelectorAll('.reveal, .reveal-stagger')
      .forEach(el => revealObs.observe(el));
  } else {
    // Fallback para browsers antigos
    document
      .querySelectorAll('.reveal, .reveal-stagger')
      .forEach(el => el.classList.add('in-view'));
  }
})();
