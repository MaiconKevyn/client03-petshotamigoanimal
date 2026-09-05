# Pet Shop Amigo Animal: site institucional

Site estatico em **Astro 7**, sem framework de UI e sem dependencia de runtime.
Referencia visual: `umbra-studios/behance/happy_tails`
([Happy Tails: Pet Care & Veterinary](https://www.behance.net/gallery/253883069/Happy-Tails-Pet-Care-Veterinary-WordPress-Theme)).

## Como rodar

```bash
npm install
npm run dev
```

| Comando | O que faz |
| --- | --- |
| `npm run dev` | servidor de desenvolvimento |
| `npm run check` | checagem de tipos/Astro |
| `npm run build` | build estatico em `dist/` |
| `npm run preview` | serve o `dist/` localmente |
| `./deploy.sh` | build + pacote `release/amigo-animal-site.zip` |
| `./set-domain.sh <dominio>` | troca o hostname canonico do projeto |

Node 22.12+ (`.nvmrc`).

## Estrutura

```text
public/
  .htaccess          regras de HTTPS, cache e seguranca (Hostinger/LiteSpeed)
  robots.txt
  sitemap.xml
  assets/img/        imagens e logo
src/
  data/site.ts       contatos, navegacao, servicos, equipe, depoimentos
  data/banho-tosa.ts retratos escolhidos e enquadramentos do antes/depois
  layouts/           SiteLayout (head, SEO, JSON-LD)
  components/        Cabecalho, Hero, Destaques (inclui AntesDepois), Servicos,
                     Parceiros, Equipe, Depoimentos, Contato, Rodape, Icone
  pages/             index.astro, 404.astro
  scripts/main.js    menu movel, header colado, carrossel, voltar ao topo
  styles/style.css   design system inteiro (tokens + componentes)
```

Os dados editaveis estao em `src/data/site.ts` e `src/data/banho-tosa.ts`. A aparencia esta em
`src/styles/style.css`, comecando pelos tokens em `:root`.

## Design system

### Avaliações na Petlove

O card do topo usa `AvaliacaoPetlove.astro`, com logo vetorial oficial, nota e
quantidade de avaliações em texto acessível. Todo o card abre o perfil da clínica
na Petlove em uma nova aba, com `noopener noreferrer`; no celular, ele aparece
em formato compacto abaixo da apresentação.

O fundo branco tem **90% de opacidade**, sem reduzir a opacidade de logo, nota e
textos. A aproximação web de Liquid Glass combina `backdrop-filter`, um bisel
interno e um aro especular rosado de 4 px. O reflexo acompanha o mouse com
`requestAnimationFrame`, sem animação contínua, bibliotecas ou distorção do texto.
O link funciona mesmo sem JavaScript; as camadas decorativas não interceptam cliques.

O acabamento segue as referências [Meet Liquid Glass (Apple)](https://developer.apple.com/videos/play/wwdc2025/219/)
e [backdrop-filter (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/backdrop-filter),
sem pretender reproduzir a refração nativa do sistema Apple. Sem `backdrop-filter`,
o fundo continua a 90%; sem composição de máscaras, o aro vira uma borda simples.
Movimento reduzido desativa o reflexo dinâmico e a resposta de escala;
transparência reduzida/contraste aumentado
usam fundo opaco. Cores forçadas preservam a borda e o foco do teclado.

A consulta manual de 04/09/2026 confirmou **5,0/5 e 33 avaliações** em
[Amigo Animal na Petlove](https://saude.petlove.com.br/rede-credenciada/rs/porto-alegre/amigo-animal-pet-shop).
URL, nota, quantidade e data ficam em `avaliacaoPetlove`, em `src/data/site.ts`.
Os números não são atualizados automaticamente: confira o perfil ao revisá-los.
Não foi adicionado selo de certificação nem marcação estruturada de avaliações.

`public/assets/img/petlove-logo.svg` preserva os caminhos e cores da marca
Petlove do [SVG oficial](https://health-frontend-statics-prod.petlove.com.br/jigglypuff/_nuxt/petlove-health-logo-purple.CDkc9gQp.svg),
sem o descritor separado de plano de saúde. A prévia gerada serviu como referência
visual; o card publicado é HTML/CSS, com logo SVG e estrelas vetoriais.

### Paleta e tipografia

O **layout e a estrutura** vem da referencia Happy Tails; as **cores** vem da
marca do cliente (`assets/branding/`).

| Token | Valor | Origem / uso |
| --- | --- | --- |
| `--magenta` | `#fd2575` | script "pet shop" do logo: acao primaria |
| `--turquesa` | `#01a4a4` | "AMIGO" e circulo pontilhado: icones e chips |
| `--coral` | `#fd6a46` | "ANIMAL": segundo acento, topo do gradiente do hero |
| `--rosa` | `#fd4670` | silhueta do cao no logo |
| `--framboesa` | `#a3003f` | fim do gradiente, palavras-fantasma |
| `--blush` | `#f6e9ed` | fundo das secoes claras |
| `--creme` | `#fff4f7` | texto sobre fundo escuro |
| `--petroleo` | `#06343a` | rodape (turquesa levado ao escuro) |
| `--tinta` / `--grafite` | `#16141a` / `#4a4550` | titulo / corpo |

Tipografia: **Hanken Grotesk** (400/500/600), servida localmente por
`@fontsource`, sem chamada a CDN de fontes.

## Dados do cliente

Reais e ja aplicados em `src/data/site.ts`:

- Endereco: Rua dos Maias, 1970, Porto Alegre/RS (com embed do Google Maps na
  secao "Onde estamos" e link para abrir no app)
- WhatsApp: `https://wa.me/5551985648001` (botao no cabecalho e na secao de contato)
- Instagram: `https://www.instagram.com/petshopamigoanimal3`
- Telefone: (51) 98564-8001

O carrossel usa quatro avaliações públicas verificadas na Petlove em 04/09/2026,
com textos originais e nomes publicados (apenas a capitalização foi normalizada).
A seleção em `depoimentos`, em `src/data/site.ts`, não repete autores, não usa
fotos, títulos inventados ou identidades fictícias. O link da fonte fica acima
dos cards e cada citação usa a URL do perfil. A seleção é manual e não representa
a totalidade das avaliações. O segundo grupo de cards é somente a cópia técnica
para o loop contínuo, oculta de leitores de tela; não são avaliações adicionais.

Ainda **PLACEHOLDER**: horario de atendimento e nomes da
equipe. Nao ha e-mail publicado. Se o cliente tiver um, adicione
em `site.ts` e no rodape.

O mapa usa `https://www.google.com/maps?q=...&output=embed`, que nao exige
chave de API nem cobranca.

## Imagens

Parte das imagens em `public/assets/img/` ainda usa recortes do mockup de
referencia da Behance como placeholder de layout. As seis fotos da lista de
servicos e a imagem principal do hero foram criadas especificamente para este
projeto; os demais placeholders devem ser substituidos por fotos do cliente
(ou por banco de imagens licenciado) antes da publicacao definitiva.

Formatos esperados, mantendo os mesmos nomes de arquivo:

| Arquivo | Proporcao | Onde aparece |
| --- | --- | --- |
| `hero-cao-natural.webp` | paisagem 3:2 | imagem principal do hero |
| `servicos/{atendimento-veterinario,castracao,profilaxia-dentaria,banho-tosa-real,racoes,medicamentos}.webp` | paisagem 10:7 | lista e cards de servicos |
| `servicos/atendimento-veterinario-completo.webp` | paisagem 4:3 | corpo do corgi completado por IA no card Atendimento veterinario; versao `-640.webp` via `srcset` |
| `servicos/racoes-gato-mesa-inteira.webp` | paisagem 4:3 com fundo branco | gato e pote a direita, mesa de ponta a ponta no card Racoes e medicamentos; versao `-640.webp` via `srcset` |
| `banho-tosa/estudio-{antes,depois}-branco.webp` | retratos 4:5 com fundo branco | dupla antes/depois no card; versoes `-branco-640.webp` via `srcset` |
| `equipe/vet-0*.webp` | retrato ~3:4 | cartoes da equipe |
| `cao-cliente-transparente.webp` | ~1:1, transparencia alfa real | retrato de cao atendido pela clinica, aprimorado com IA, em primeiro plano nos depoimentos; versao `-576.webp` via `srcset` |

O card de Atendimento veterinario usa uma extensao generativa da imagem enviada
pelo cliente em `codex-clipboard-21e5771f-c237-4740-9f96-7ddcb235a3b7.png`.
O restante do corpo do corgi foi completado para que sua silhueta nao termine
abruptamente dentro do card. A foto inteira aparece sem mascara, degrade ou
corte adicional, preservando a interacao com a mao enluvada e sem acrescentar
rosto ao profissional. WebP em 1448 x 1086 pixels (119 KB) e 640 x 480 pixels
(32 KB), ainda com fundo branco opaco. O recorte transparente permanece pendente.
O card usa areas separadas para texto e foto: lado a lado no
desktop e foto abaixo do texto em telas de ate 600 pixels. A proporcao 4:3 e
preservada. A miniatura da lista de servicos permanece independente e nao mudou.
A foto do card e espelhada horizontalmente por CSS (`espelharFoto` em
`src/data/site.ts`): o cachorro fica a esquerda e o uniforme do veterinario
termina na borda direita. O arquivo original, o texto e os controles nao sao
invertidos ou alterados.

O card Racoes e medicamentos usa uma edicao da cena anterior, com apenas um
gato tigrado, o pote laranja e a mesa clara, sobre fundo branco. A mesa foi
estendida por IA para ocupar toda a largura do card, sem corte vertical interno.
A cena aparece inteira, sem mascara ou degrade, alinhada a base do card; o
gato e o pote ficam a direita, com espaco para o texto a esquerda. A proporcao
minima 4:3 do card evita cortar as orelhas nas telas mais largas. Ha versoes
WebP de 1448 x 1086 e 640 x 480 pixels, selecionadas por `srcset`.
A foto anterior continua na lista de servicos.

O mascote dos depoimentos foi substituido por um retrato gerado com IA a partir
da foto fornecida de um cao atendido pela clinica: pelagem tigrada, coleira laranja
e peitoral rosa. A pose foi adaptada para a composicao em primeiro plano;
nao se trata da fotografia original nem de recuperacao documental de detalhes.
O novo PNG recortado fornecido pelo cliente foi convertido para
`cao-cliente-transparente.webp` (1334 x 1179 pixels), com uma versao de
576 x 509 pixels para telas menores. Ambos usam WebP lossless com transparencia
alfa real; o alfa do arquivo em tamanho integral foi preservado exatamente.
Nao ha mais mascara SVG/CSS sobre a imagem: o contorno e a transparencia dos
pelos sao os do arquivo fornecido, sem regeneracao ou novo retoque do animal.
A posicao e a largura responsiva foram mantidas, assim como o deslocamento de
4,665% que deixa apenas as pontas das patas sobre a area branca. Os arquivos
antigos com fundo opaco e a mascara `cao-cliente-contorno.svg` nao sao mais
referenciados pela UI.

### Antes e depois do banho e tosa

Apenas o card de banho e tosa usa `AntesDepois.astro`:
os dois retratos escolhidos pelo cliente aparecem simultaneamente, Antes a
esquerda e Depois a direita, tambem no celular. Os retratos preservam a proporcao
original, sem zoom para cobrir o card, limitados a 220 pixels de largura cada.
As fotos e o card usam fundo branco uniforme, no mesmo padrao dos outros cards.
O espaco entre os animais e preservado, sem mascara vertical sobre as laterais
dos cachorros. Rotulos em HTML identificam cada metade, com borda rosa e texto
turquesa escuro. O titulo usa texto escuro e o botao tem fundo blush. Os retratos
ficam alinhados a borda inferior e as bordas externas do card: Antes a esquerda
e Depois a direita. As legendas acompanham cada retrato. Nao ha mascaras,
degrade no rodape ou recorte nos containers internos. Os arquivos dos retratos
nao foram regenerados nesta revisao.

A dupla aprovada substitui a exibicao dos dois casos antigos. Nao ha carrossel,
animacao, controles de troca ou JavaScript neste card. A seta no rodape abre o
WhatsApp com uma mensagem especifica de banho e tosa, sem enviar automaticamente.
As imagens fornecidas pelo cliente foram geradas/aprimoradas por IA; nao sao
fotografias originais nem comprovam recuperacao fiel de cada fio da pelagem.
O aviso visual de IA foi removido do card a pedido do cliente; a origem das
imagens permanece registrada aqui e na descricao acessivel do grupo de fotos.

Os WebP de 1122 x 1402 pixels somam aproximadamente 458 KB, com versoes de
640 x 800 pixels (181 KB no total) servidas via `srcset` e carregamento tardio.
Nao houve ampliacao artificial posterior. Estudos intermediarios, registros
temporarios de geracao e scripts experimentais nao fazem parte do site publicado.

Para trocar a dupla, atualize `resultadoBanhoTosa` em `src/data/banho-tosa.ts`
com as fotos do mesmo pet antes/depois, `foto`, `fotoCompacta` de 640 pixels de largura,
e dimensoes individuais. Os retratos sao ancorados nas bordas externas pelo CSS. Prefira fotografias
originais em alta resolucao quando disponiveis e atualize o registro de origem
ao substituir as imagens.

### Marca

Tudo deriva de `assets/branding/logo-amigo-animal-sem-fundo.png`, o logo oficial
em PNG transparente:

| Arquivo | Origem | Uso |
| --- | --- | --- |
| `public/assets/img/marca-amigo-animal.webp` | simbolo recortado (cao + gato + circulo) | cabecalho e rodape |
| `public/assets/img/favicon.png` | simbolo sobre placa branca arredondada | aba do navegador, atalho iOS |
| `public/assets/img/og-amigo-animal.jpg` | lockup completo sobre `--blush` | card de compartilhamento |
| `assets/branding/logo-amigo-animal-lockup.webp` | lockup aparado | entrega, impressos, redes |

No cabecalho e no rodape entra so o **simbolo**; o nome "Amigo Animal" e
composto em HTML com a fonte do site: "Amigo" em `--turquesa` e "Animal" em
`--coral`, como no logo. Assim o wordmark fica nitido em qualquer tamanho e
continua selecionavel, o que nao aconteceria com o lockup rasterizado reduzido a
56px de altura. No rodape as duas palavras viram `--creme` para contrastar com o
fundo petroleo.

A foto `hero-cao.webp` herdada da referencia foi rotacionada em matiz
(+324 graus, satura 0,78) para casar com o gradiente coral-rosa do hero.

## Acessibilidade e SEO

- HTML semantico, `lang="pt-BR"`, link "pular para o conteudo", foco visivel.
- `prefers-reduced-motion` desliga transicoes e o scroll suave.
- JSON-LD `VeterinaryCare` gerado a partir de `src/data/site.ts`.
- Enquanto o site estiver no dominio de demonstracao ele fica com `noindex`
  (meta tag + `X-Robots-Tag`). Ver `HOSTINGER_DEPLOY.md`.

## Deploy

Ver [`HOSTINGER_DEPLOY.md`](HOSTINGER_DEPLOY.md).
