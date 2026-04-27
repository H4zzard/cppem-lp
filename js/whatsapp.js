/**
 * CPPEM · Módulo WhatsApp
 * Aplica o link wa.me com mensagem pré-preenchida em todos os CTAs.
 */
(function () {
  'use strict';

  const cfg = window.CPPEM_CONFIG;
  if (!cfg) return;

  const url = `https://wa.me/${cfg.WHATSAPP_NUMBER}?text=${encodeURIComponent(cfg.WHATSAPP_MSG)}`;

  const selectors = [
    '[data-cta]',
    '#whatsappBtn',
    '#stickyCta',
    '#whatsappFooter'
  ].join(', ');

  document.querySelectorAll(selectors).forEach(el => {
    el.setAttribute('href', url);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });
})();
