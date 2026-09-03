# Pet Shop Amigo Animal — site institucional

Site estatico em **Astro 7**, sem framework de UI e sem dependencia de runtime.
Referencia visual: `umbra-studios/behance/happy_tails`
([Happy Tails — Pet Care & Veterinary](https://www.behance.net/gallery/253883069/Happy-Tails-Pet-Care-Veterinary-WordPress-Theme)).

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
  layouts/           SiteLayout (head, SEO, JSON-LD)
  components/        Cabecalho, Hero, Destaques, Servicos, Estrutura,
                     Parceiros, Equipe, Depoimentos, Rodape, Icone
  pages/             index.astro, 404.astro
  scripts/main.js    menu movel, header colado, carrossel, voltar ao topo
  styles/style.css   design system inteiro (tokens + componentes)
```

Todo o conteudo editavel esta em `src/data/site.ts`. Toda a aparencia esta em
`src/styles/style.css`, comecando pelos tokens em `:root`.

## Design system

O **layout e a estrutura** vem da referencia Happy Tails; as **cores** vem da
marca do cliente (`assets/branding/`).

| Token | Valor | Origem / uso |
| --- | --- | --- |
| `--magenta` | `#eb0060` | script "pet shop" do logo — acao primaria |
| `--turquesa` | `#00a4a8` | wordmark do logo — icones, chips, detalhes |
| `--rosa` | `#fd819d` | silhueta do logo — inicio do gradiente do hero |
| `--rosa-claro` | `#ffb9c8` | topo do gradiente do hero |
| `--framboesa` | `#8e0040` | fim do gradiente, palavras-fantasma |
| `--blush` | `#f6e9ed` | fundo das secoes claras |
| `--creme` | `#fff4f7` | texto sobre fundo escuro |
| `--petroleo` | `#06343a` | rodape (turquesa levado ao escuro) |
| `--tinta` / `--grafite` | `#16141a` / `#4a4550` | titulo / corpo |

Tipografia: **Hanken Grotesk** (400/500/600), servida localmente por
`@fontsource` — sem chamada a CDN de fontes.

## Dados do cliente

Reais e ja aplicados em `src/data/site.ts`:

- Endereco: Rua dos Maias, 1970 — Porto Alegre/RS (com embed do Google Maps na
  secao "Onde estamos" e link para abrir no app)
- WhatsApp: `https://wa.me/5551985648001` (botao no cabecalho e na secao de contato)
- Instagram: `https://www.instagram.com/petshopamigoanimal3`
- Telefone: (51) 98564-8001

Ainda **PLACEHOLDER** (marcado no arquivo): horario de atendimento, nomes da
equipe e depoimentos. Nao ha e-mail publicado — se o cliente tiver um, adicione
em `site.ts` e no rodape.

O mapa usa `https://www.google.com/maps?q=...&output=embed`, que nao exige
chave de API nem cobranca.

## Imagens

As imagens em `public/assets/img/` sao **recortes do mockup de referencia da
Behance**, usados apenas como placeholder de layout. Elas pertencem ao tema
Happy Tails e **nao podem ir para producao**: substitua por fotos do cliente
(ou por banco de imagens licenciado) antes de publicar no dominio definitivo.

Formatos esperados, mantendo os mesmos nomes de arquivo:

| Arquivo | Proporcao | Onde aparece |
| --- | --- | --- |
| `hero-cao.webp` | retrato ~1:2 | animal recortado do hero |
| `servicos/*.webp` | retrato ~3:4 | 3 cartoes de destaque |
| `internacao.webp`, `hotel.webp` | paisagem ~3:1 | cartoes editoriais |
| `equipe/vet-0*.webp` | retrato ~3:4 | cartoes da equipe |
| `dalmata.webp` | ~1:1, fundo `#e9e3dc` | mascote da secao de depoimentos |
| `og-amigo-animal.jpg` | 1200x630 | compartilhamento em redes (ainda falta) |

### Marca

`public/assets/img/logo-amigo-animal.svg` usa o simbolo real da marca (silhueta
de cao + gato em rosa e o circulo pontilhado em turquesa), derivado de
`assets/branding/logo-amigo-animal.svg`. O nome "Amigo Animal" e composto em
HTML com a fonte do site, em vez de vir rasterizado no SVG — assim escala bem e
fica selecionavel.

O logo completo do cliente (com o wordmark serifado e o script "pet shop") vive
em `assets/branding/`, fora do build, para uso em impressos e redes.

As fotos com fundo laranja da referencia (`hero-cao.webp` e `hotel.webp`) foram
rotacionadas em matiz (+318 graus, satura 0,74) para casar com o rosa da marca.

## Acessibilidade e SEO

- HTML semantico, `lang="pt-BR"`, link "pular para o conteudo", foco visivel.
- `prefers-reduced-motion` desliga transicoes e o scroll suave.
- JSON-LD `VeterinaryCare` gerado a partir de `src/data/site.ts`.
- Enquanto o site estiver no dominio de demonstracao ele fica com `noindex`
  (meta tag + `X-Robots-Tag`). Ver `HOSTINGER_DEPLOY.md`.

## Deploy

Ver [`HOSTINGER_DEPLOY.md`](HOSTINGER_DEPLOY.md).
