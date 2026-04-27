/**
 * CPPEM · Módulo Counters
 * Anima números (data-count) crescendo de 0 até o valor alvo
 * quando entram em viewport.
 */
(function () {
  'use strict';

  if (!('IntersectionObserver' in window)) {
    // Fallback: já mostra o valor final
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseInt(el.dataset.count, 10) || 0;
      const suffix = el.dataset.suffix || '';
      el.textContent = target.toLocaleString('pt-BR') + suffix;
    });
    return;
  }

  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el       = entry.target;
      const target   = parseInt(el.dataset.count, 10) || 0;
      const suffix   = el.dataset.suffix || '';
      const duration = 1600;
      const start    = performance.now();

      function step(now) {
        const t     = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        const val   = Math.round(target * eased);
        el.textContent = val.toLocaleString('pt-BR') + suffix;
        if (t < 1) requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
      counterObs.unobserve(el);
    });
  }, { threshold: 0.4 });

  document
    .querySelectorAll('[data-count]')
    .forEach(el => counterObs.observe(el));
})();
