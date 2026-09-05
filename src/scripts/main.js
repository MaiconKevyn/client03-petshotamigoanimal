// Comportamentos do site: menu movel, cabecalho colado, trilho de
// carrossel de depoimentos e botao de voltar ao topo.

const menu = document.querySelector('[data-menu]');
const navegacao = document.getElementById('menu-principal');

if (menu instanceof HTMLButtonElement && navegacao) {
  const alternarMenu = (aberto) => {
    menu.setAttribute('aria-expanded', String(aberto));
    menu.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    navegacao.classList.toggle('navegacao--aberta', aberto);
  };

  menu.addEventListener('click', () => alternarMenu(menu.getAttribute('aria-expanded') !== 'true'));
  navegacao.addEventListener('click', (evento) => {
    if (evento.target instanceof Element && evento.target.closest('a')) alternarMenu(false);
  });
  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      alternarMenu(false);
      menu.focus();
    }
  });
  document.addEventListener('click', (evento) => {
    if (evento.target instanceof Node && !menu.contains(evento.target) && !navegacao.contains(evento.target)) {
      alternarMenu(false);
    }
  });
  const desktop = window.matchMedia('(min-width: 1181px)');
  desktop.addEventListener('change', () => alternarMenu(false));
}

const cabecalho = document.querySelector('[data-cabecalho]');
const subir = document.querySelector('[data-subir]');

const aoRolar = () => {
  const y = window.scrollY;
  cabecalho?.classList.toggle('cabecalho--fixo', y > 40);
  subir?.classList.toggle('subir--visivel', y > 600);
};

aoRolar();
window.addEventListener('scroll', aoRolar, { passive: true });

const controleDepoimentos = document.querySelector('[data-depoimentos-alternar]');
const trilhoDepoimentos = document.getElementById('trilho-depoimentos');
const rotuloDepoimentos = controleDepoimentos?.querySelector('[data-depoimentos-rotulo]');
const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)');
let depoimentosPausados = false;

const atualizarCarrossel = () => {
  if (!(controleDepoimentos instanceof HTMLButtonElement) || !trilhoDepoimentos || !rotuloDepoimentos) {
    return;
  }

  const pausado = depoimentosPausados || movimentoReduzido.matches;
  trilhoDepoimentos.classList.toggle('depoimentos__trilho--pausado', pausado);
  controleDepoimentos.setAttribute('aria-pressed', String(depoimentosPausados));
  controleDepoimentos.setAttribute(
    'aria-label',
    depoimentosPausados ? 'Retomar animação dos depoimentos' : 'Pausar animação dos depoimentos',
  );
  rotuloDepoimentos.textContent = depoimentosPausados ? 'Retomar' : 'Pausar';
};

if (controleDepoimentos instanceof HTMLButtonElement && trilhoDepoimentos) {
  controleDepoimentos.addEventListener('click', () => {
    depoimentosPausados = !depoimentosPausados;
    atualizarCarrossel();
  });

  movimentoReduzido.addEventListener('change', atualizarCarrossel);
  atualizarCarrossel();
}

// Indica a seção atual sem alterar o histórico durante a rolagem.
const linksSecoes = [...document.querySelectorAll('.navegacao__link[href^="#"]')];
const secoes = linksSecoes.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if (secoes.length) {
  const atualizarSecao = () => {
    const atual = [...secoes].reverse().find((secao) => secao.getBoundingClientRect().top <= 160) || secoes[0];
    linksSecoes.forEach((link) => {
      if (link.getAttribute('href') === `#${atual.id}`) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  let pendente = false;
  window.addEventListener('scroll', () => {
    if (pendente) return;
    pendente = true;
    requestAnimationFrame(() => { atualizarSecao(); pendente = false; });
  }, { passive: true });
  atualizarSecao();
}
