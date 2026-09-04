// Dados de contato e conteudo do site.
// ATENCAO: os valores marcados com PLACEHOLDER precisam ser trocados pelos
// dados reais do cliente antes do go-live (ver README.md).
export const site = {
  nome: 'Amigo Animal',
  nomeCompleto: 'Pet Shop Amigo Animal',
  slogan: 'Onde o bem-estar do seu pet vem primeiro',
  telefone: '(51) 98564-8001',
  telefoneLink: 'tel:+5551985648001',
  whatsapp: 'https://wa.me/5551985648001',
  instagram: 'https://www.instagram.com/petshopamigoanimal3',
  horario: 'Seg a Sáb: 8h00 – 19h00', // PLACEHOLDER — confirmar com o cliente
  endereco: {
    rua: 'Rua dos Maias, 1970',
    cidade: 'Porto Alegre',
    uf: 'RS',
  },
  // Embed do Google Maps sem chave de API; o link abre o app/site do Maps.
  mapaEmbed:
    'https://www.google.com/maps?q=Rua+dos+Maias+1970,+Porto+Alegre,+Rio+Grande+do+Sul&output=embed',
  mapaLink:
    'https://www.google.com/maps/search/?api=1&query=Rua+dos+Maias+1970%2C+Porto+Alegre%2C+RS',
} as const;

// Consulta manual ao perfil da clínica; não é uma integração em tempo real.
export const avaliacaoPetlove = {
  url: 'https://saude.petlove.com.br/rede-credenciada/rs/porto-alegre/amigo-animal-pet-shop',
  nota: 5,
  notaMaxima: 5,
  total: 33,
  consultadaEm: '2026-09-04',
} as const;

export const navegacao = [
  { rotulo: 'Início', href: '#topo', atual: true },
  { rotulo: 'Serviços', href: '#servicos' },
  { rotulo: 'Equipe', href: '#equipe' },
  { rotulo: 'Depoimentos', href: '#depoimentos' },
  { rotulo: 'Onde estamos', href: '#contato' },
] as const;

export const destaques = [
  {
    chip: 'Cuidado próximo',
    titulo: 'Atendimento veterinário',
    texto:
      'Avaliações, orientações e acompanhamento cuidadoso para cães e gatos em todas as fases da vida.',
    foto: '/assets/img/servicos/atendimento-veterinario-completo.webp',
    fotoCompacta: '/assets/img/servicos/atendimento-veterinario-completo-640.webp',
    tamanhosFoto: '(max-width: 600px) calc(100vw - 28px), 480px',
    alt: 'Corgi de corpo inteiro com uma pata apoiada na mão de um profissional com uniforme azul-marinho e luvas azuis, sem o rosto em cena',
    fotoInteira: true,
    espelharFoto: true,
    larguraFoto: 1448,
    alturaFoto: 1086,
    largo: true,
  },
  {
    chip: 'Higiene e estética',
    titulo: 'Banho e tosa',
    texto: 'Higiene e cuidados estéticos realizados com atenção ao conforto e ao bem-estar do pet.',
    foto: '/assets/img/servicos/banho-tosa-real.webp',
    alt: 'Cão branco recebendo banho em um espaço profissional de estética animal',
    largo: false,
    comparacao: true,
  },
  {
    chip: 'Pet shop completo',
    titulo: 'Rações e medicamentos',
    texto: 'Produtos essenciais para a rotina do pet, com orientação da equipe na hora da escolha.',
    foto: '/assets/img/servicos/racoes-gato-mesa-inteira.webp',
    fotoCompacta: '/assets/img/servicos/racoes-gato-mesa-inteira-640.webp',
    tamanhosFoto: '(max-width: 760px) calc(100vw - 40px), (max-width: 1180px) 50vw, 400px',
    alt: 'Gato tigrado e pote laranja de ração à direita, sobre uma mesa clara contínua de ponta a ponta, com fundo branco',
    fotoProduto: true,
    larguraFoto: 1448,
    alturaFoto: 1086,
    largo: false,
  },
] as const;

export const servicos = [
  {
    icone: 'estetoscopio',
    titulo: 'Atendimento veterinário',
    texto: 'Consultas, avaliações e acompanhamento cuidadoso para a saúde de cães e gatos.',
    miniatura: '/assets/img/servicos/atendimento-veterinario.webp',
    alt: 'Veterinária examinando um cão golden retriever com estetoscópio',
  },
  {
    icone: 'cruz',
    titulo: 'Castração',
    texto: 'Acompanhamento responsável antes e depois do procedimento, com foco em segurança e recuperação.',
    miniatura: '/assets/img/servicos/castracao.webp',
    alt: 'Veterinária acompanhando um gato com colar de recuperação',
  },
  {
    icone: 'dente',
    titulo: 'Profilaxia dentária',
    texto: 'Limpeza preventiva para ajudar a controlar o tártaro e preservar a saúde bucal do pet.',
    miniatura: '/assets/img/servicos/profilaxia-dentaria.webp',
    alt: 'Profissional veterinário examinando os dentes de um cão com espelho odontológico',
  },
  {
    icone: 'tesoura',
    titulo: 'Banho e tosa',
    texto: 'Higiene e cuidados estéticos realizados com atenção ao conforto e ao bem-estar.',
    miniatura: '/assets/img/servicos/banho-tosa-real.webp',
    alt: 'Cão branco recebendo banho em um espaço profissional de estética animal',
  },
  {
    icone: 'tigela',
    titulo: 'Rações',
    texto: 'Opções para diferentes portes, idades e necessidades, com apoio da equipe na escolha.',
    miniatura: '/assets/img/servicos/racoes.webp',
    alt: 'Cão e gato ao lado de tigelas e uma embalagem de ração sem marca',
  },
  {
    icone: 'frasco',
    titulo: 'Medicamentos',
    texto: 'Produtos veterinários para os cuidados do dia a dia, vendidos com orientação responsável.',
    miniatura: '/assets/img/servicos/medicamentos.webp',
    alt: 'Profissional apresentando medicamento veterinário a uma tutora com seu cão',
  },
] as const;

export const equipe = [
  {
    nome: 'Dra. Olívia Cardoso',
    cargo: 'Veterinária responsável',
    foto: '/assets/img/equipe/vet-01.webp',
    alt: 'Veterinária segurando um gato no colo',
  },
  {
    nome: 'Dra. Sofia Bennett',
    cargo: 'Clínica e emergência',
    foto: '/assets/img/equipe/vet-02.webp',
    alt: 'Veterinária sorrindo ao lado de um cão',
  },
  {
    nome: 'Dr. Enzo Walker',
    cargo: 'Cirurgião veterinário',
    foto: '/assets/img/equipe/vet-03.webp',
    alt: 'Veterinário segurando um filhote de golden retriever',
  },
] as const;

// Avaliações públicas verificadas na URL de avaliacaoPetlove em 04/09/2026.
// Textos originais e autores distintos; não inventar identidades ou depoimentos.
// A seleção é manual e não representa todas as avaliações da plataforma.
export const depoimentos = [
  {
    texto: 'Dra atenciosa e querida. Clínica com boa estrutura e limpa',
    nome: 'Robson',
  },
  {
    texto: 'Veterinária Ju muito atenciosa e querida',
    nome: 'Brayan',
  },
  {
    texto: 'Atendimento maravilhoso.',
    nome: 'Ana',
  },
  {
    texto: 'Fui bem atendido',
    nome: 'Fabio',
  },
] as const;
