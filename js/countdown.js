/**
 * CPPEM · Módulo Countdown
 * Cronômetro regressivo até a data limite da campanha.
 */
(function () {
  'use strict';

  const cfg = window.CPPEM_CONFIG;
  if (!cfg) return;

  const cdDays  = document.getElementById('cdDays');
  const cdHours = document.getElementById('cdHours');
  const cdMin   = document.getElementById('cdMin');
  const cdSec   = document.getElementById('cdSec');

  if (!cdDays || !cdHours || !cdMin || !cdSec) return;

  const deadline = new Date(cfg.DEADLINE).getTime();
  const pad = n => String(Math.max(0, n)).padStart(2, '0');

  function tick() {
    const now = Date.now();
    let diff = Math.max(0, deadline - now);

    const d = Math.floor(diff / 86400000); diff -= d * 86400000;
    const h = Math.floor(diff / 3600000);  diff -= h * 3600000;
    const m = Math.floor(diff / 60000);    diff -= m * 60000;
    const s = Math.floor(diff / 1000);

    cdDays.textContent  = pad(d);
    cdHours.textContent = pad(h);
    cdMin.textContent   = pad(m);
    cdSec.textContent   = pad(s);
  }

  tick();
  setInterval(tick, 1000);
})();
