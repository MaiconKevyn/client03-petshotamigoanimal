const filtros = document.querySelector('[data-filtros]');
const servicos = [...document.querySelectorAll('[data-servico-categoria]')];
const avisoServicos = document.querySelector('[data-servicos-status]');

if (filtros instanceof HTMLElement && servicos.length) {
  const botoes = [...filtros.querySelectorAll('button[data-filtro]')];

  const filtrar = (categoria, anunciar = true) => {
    botoes.forEach((botao) => botao.setAttribute('aria-pressed', String(botao.dataset.filtro === categoria)));
    let visiveis = 0;
    servicos.forEach((servico) => {
      if (!(servico instanceof HTMLElement)) return;
      servico.hidden = categoria !== 'todos' && servico.dataset.servicoCategoria !== categoria;
      if (!servico.hidden) visiveis += 1;
    });
    if (avisoServicos && anunciar) avisoServicos.textContent = `${visiveis} serviços disponíveis nesta categoria.`;
  };

  botoes.forEach((botao) => botao.addEventListener('click', () => filtrar(botao.dataset.filtro)));

  // Revela o serviço solicitado mesmo quando outro filtro está selecionado.
  const revelarDestino = (hash = window.location.hash) => {
    const destino = servicos.find((servico) => `#${servico.id}` === hash);
    if (destino instanceof HTMLElement && destino.hidden) {
      filtrar(destino.dataset.servicoCategoria, false);
      requestAnimationFrame(() => destino.scrollIntoView({ behavior: 'instant', block: 'start' }));
    }
  };
  window.addEventListener('hashchange', () => revelarDestino());
  document.addEventListener('click', (evento) => {
    if (!(evento.target instanceof Element) || evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey) return;
    const link = evento.target.closest('a[href]');
    if (!(link instanceof HTMLAnchorElement) || link.target === '_blank') return;
    const destino = new URL(link.href);
    if (destino.origin === location.origin && destino.pathname === location.pathname) {
      revelarDestino(destino.hash);
    }
  });
  revelarDestino();
  filtros.hidden = false;
}

export {};
