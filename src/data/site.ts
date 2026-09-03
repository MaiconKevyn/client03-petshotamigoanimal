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

export const navegacao = [
  { rotulo: 'Início', href: '#topo', atual: true },
  { rotulo: 'Serviços', href: '#servicos' },
  { rotulo: 'Estrutura', href: '#estrutura' },
  { rotulo: 'Equipe', href: '#equipe' },
  { rotulo: 'Depoimentos', href: '#depoimentos' },
  { rotulo: 'Onde estamos', href: '#contato' },
] as const;

export const destaques = [
  {
    chip: 'Estrutura completa',
    titulo: 'Clínica veterinária',
    texto:
      'Consultas, exames e acompanhamento contínuo com equipe própria e equipamentos modernos.',
    foto: '/assets/img/servicos/consulta.webp',
    alt: 'Cão golden retriever em consulta veterinária',
    largo: true,
  },
  {
    chip: 'Atendimento ágil',
    titulo: 'Medicina preventiva',
    texto: 'Vacinas, vermífugos e check-ups no calendário certo para cada fase da vida.',
    foto: '/assets/img/servicos/vacinacao.webp',
    alt: 'Gato cinza atento durante consulta',
    largo: false,
  },
  {
    chip: 'Especialistas',
    titulo: 'Pets exóticos',
    texto: 'Atendimento para coelhos, roedores e aves com profissionais habilitados.',
    foto: '/assets/img/servicos/exames.webp',
    alt: 'Coelho preto em atendimento especializado',
    largo: false,
  },
] as const;

export const servicos = [
  {
    icone: 'seringa',
    titulo: 'Vacinação',
    texto: 'Vacinas essenciais para proteger o pet de doenças comuns e evitáveis.',
    miniatura: '/assets/img/servicos/vacinacao.webp',
  },
  {
    icone: 'pata',
    titulo: 'Exames e diagnóstico',
    texto: 'Laboratório, imagem e triagem para diagnósticos precisos e rápidos.',
    miniatura: '/assets/img/servicos/consulta.webp',
  },
  {
    icone: 'dente',
    titulo: 'Odontologia',
    texto: 'Limpeza profissional e tratamento bucal para dentes e gengivas saudáveis.',
    miniatura: '/assets/img/servicos/exames.webp',
  },
  {
    icone: 'cruz',
    titulo: 'Cirurgia',
    texto: 'Procedimentos seguros conduzidos por cirurgiões veterinários experientes.',
    miniatura: '/assets/img/internacao.webp',
  },
  {
    icone: 'tesoura',
    titulo: 'Banho e tosa',
    texto: 'Higiene, tosa higiênica e estética com produtos hipoalergênicos.',
    miniatura: '/assets/img/banho-tosa.webp',
  },
  {
    icone: 'tigela',
    titulo: 'Nutrição',
    texto: 'Orientação alimentar e dietas ajustadas às necessidades de cada pet.',
    miniatura: '/assets/img/produto-01.webp',
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

export const depoimentos = [
  {
    titulo: 'Cuidado de verdade',
    texto:
      '“Levo a Mel desde filhote e sempre fui muito bem atendida. A equipe explica cada passo e o retorno é sempre rápido.”',
    nome: 'Marina R.',
    foto: '/assets/img/equipe/vet-01.webp',
  },
  {
    titulo: 'Profissionais de confiança',
    texto:
      '“Da consulta de rotina à emergência, sempre estiveram presentes. A competência e o carinho passam segurança total.”',
    nome: 'Henrique G.',
    foto: '/assets/img/equipe/vet-03.webp',
  },
  {
    titulo: 'Equipe atenciosa',
    texto:
      '“Excelente atendimento, equipe simpática e cuidado veterinário impecável. Tratam cada pet como família.”',
    nome: 'Tainá S.',
    foto: '/assets/img/equipe/vet-02.webp',
  },
  {
    titulo: 'Estrutura impecável',
    texto:
      '“A clínica é moderna, acolhedora e a equipe é formada por profissionais de primeira. Confiamos de olhos fechados.”',
    nome: 'Bruno M.',
    foto: '/assets/img/equipe/vet-02.webp',
  },
] as const;
