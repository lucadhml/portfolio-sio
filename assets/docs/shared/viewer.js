// viewer.js — Shared logic for project dossier pages

(function () {
  'use strict';

  // ---- PDF overlay ----------------------------------------
  const overlay = document.getElementById('pdf-overlay');
  const frame   = document.getElementById('pdf-preview-frame');

  document.querySelectorAll('[data-open-pdf]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const file = btn.getAttribute('data-open-pdf');
      if (!overlay || !frame || !file) return;
      frame.src = `${file}#toolbar=1&navpanes=0&scrollbar=1&zoom=page-width`;
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeOverlay = () => {
    if (!overlay || !frame) return;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    frame.src = '';
    document.body.style.overflow = '';
  };

  overlay?.addEventListener('click', (e) => { if (e.target === overlay) closeOverlay(); });
  document.querySelectorAll('[data-close-pdf]').forEach((btn) => btn.addEventListener('click', closeOverlay));
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeOverlay(); });

  // ---- Back navigation ------------------------------------
  document.querySelectorAll('[data-go-projects]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      sessionStorage.setItem('portfolio-scroll-target', '#projets');
      if (window.history.length > 1 && document.referrer) {
        window.history.back();
        return;
      }
      const target = window.location.protocol === 'file:'
        ? 'file:///Users/luca_dhml/Documents/portfolio/index.html'
        : 'https://lucadhml.github.io/portfolio-sio/index.html';
      window.location.assign(target);
    });
  });
})();
