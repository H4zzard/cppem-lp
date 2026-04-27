/**
 * CPPEM · Módulo Main
 * Atualiza dinamicamente o número de vagas restantes
 * (sincroniza hero + CTA final).
 */
(function () {
  'use strict';

  const cfg = window.CPPEM_CONFIG;
  if (!cfg) return;

  const els = [
    document.getElementById('vagasRestantes'),
    document.getElementById('vagasRestantesCTA')
  ].filter(Boolean);

  els.forEach(el => {
    el.textContent = cfg.TOTAL_VAGAS;
  });
})();
