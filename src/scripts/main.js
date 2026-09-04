// Comportamentos do site: menu movel, cabecalho colado, trilho de
// carrossel de depoimentos e botao de voltar ao topo.

const menu = document.querySelector('[data-menu]');
const navegacao = document.getElementById('menu-principal');

if (menu && navegacao) {
  menu.addEventListener('click', () => {
    const aberto = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!aberto));
    navegacao.classList.toggle('navegacao--aberta', !aberto);
  });

  navegacao.addEventListener('click', (evento) => {
    if (evento.target instanceof HTMLAnchorElement) {
      menu.setAttribute('aria-expanded', 'false');
      navegacao.classList.remove('navegacao--aberta');
    }
  });
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

const assinatura = document.querySelector('[data-assinatura]');
const aviso = document.querySelector('[data-assinatura-aviso]');

if (assinatura instanceof HTMLFormElement && aviso) {
  const textoOriginal = aviso.textContent;

  assinatura.addEventListener('submit', (evento) => {
    evento.preventDefault();
    aviso.textContent = 'Cadastro recebido. Em breve entraremos em contato.';
    assinatura.reset();
    window.setTimeout(() => {
      aviso.textContent = textoOriginal;
    }, 6000);
  });
}

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
