// Comportamentos do site: menu movel, cabecalho colado, trilho de
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

const secaoDepoimentos = document.querySelector('[data-depoimentos]');
const controleDepoimentos = document.querySelector('[data-depoimentos-controle]');

if (secaoDepoimentos && controleDepoimentos instanceof HTMLButtonElement) {
  const iconePausa = controleDepoimentos.querySelector('[data-icone-pausa]');
  const iconePlay = controleDepoimentos.querySelector('[data-icone-play]');

  controleDepoimentos.addEventListener('click', () => {
    const pausado = secaoDepoimentos.getAttribute('data-pausado') === 'true';
    const proximoEstado = !pausado;

    secaoDepoimentos.setAttribute('data-pausado', String(proximoEstado));
    controleDepoimentos.setAttribute('aria-pressed', String(proximoEstado));
    controleDepoimentos.setAttribute(
      'aria-label',
      proximoEstado ? 'Continuar carrossel de depoimentos' : 'Pausar carrossel de depoimentos',
    );

    if (iconePausa instanceof HTMLElement) iconePausa.hidden = proximoEstado;
    if (iconePlay instanceof HTMLElement) iconePlay.hidden = !proximoEstado;
  });
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
