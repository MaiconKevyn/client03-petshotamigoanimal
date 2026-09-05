const hero = document.querySelector('.hero');
const medalha = hero?.querySelector('[data-medalha]');
const movimentoPermitido = window.matchMedia(
  '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
);

if (hero && medalha instanceof HTMLElement) {
  let quadro = 0;
  let inclinacaoX = 8;
  let inclinacaoY = -14;

  const restaurar = () => {
    cancelAnimationFrame(quadro);
    quadro = 0;
    medalha.style.removeProperty('--tag-x');
    medalha.style.removeProperty('--tag-y');
  };

  hero.addEventListener('pointermove', (evento) => {
    if (!movimentoPermitido.matches || evento.pointerType === 'touch') return;
    const area = hero.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (evento.clientX - area.left) / area.width));
    const y = Math.max(0, Math.min(1, (evento.clientY - area.top) / area.height));
    inclinacaoX = 8 + (0.5 - y) * 14;
    inclinacaoY = -14 + (x - 0.5) * 24;
    if (quadro) return;
    quadro = requestAnimationFrame(() => {
      medalha.style.setProperty('--tag-x', `${inclinacaoX.toFixed(1)}deg`);
      medalha.style.setProperty('--tag-y', `${inclinacaoY.toFixed(1)}deg`);
      quadro = 0;
    });
  }, { passive: true });

  hero.addEventListener('pointerleave', restaurar);
  hero.addEventListener('pointercancel', restaurar);
  movimentoPermitido.addEventListener('change', restaurar);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) restaurar();
  });
}

export {};
