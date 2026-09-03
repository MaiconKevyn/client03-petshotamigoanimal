// Comportamentos do site: menu movel, cabecalho colado, carrossel de
// depoimentos e botao de voltar ao topo.

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

const carrossel = document.querySelector('[data-carrossel]');
const pontos = document.querySelector('[data-pontos]');

if (carrossel && pontos) {
  const botoes = Array.from(pontos.querySelectorAll('button'));
  const cartoes = Array.from(carrossel.children);

  botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
      cartoes[indice]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    });
  });

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        const indice = cartoes.indexOf(entrada.target);
        botoes.forEach((botao, i) => {
          botao.setAttribute('aria-current', String(i === indice));
        });
      });
    },
    { root: carrossel, threshold: 0.6 },
  );

  cartoes.forEach((cartao) => observador.observe(cartao));
}

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
