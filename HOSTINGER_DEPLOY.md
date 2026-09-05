# Deploy na Hostinger: Pet Shop Amigo Animal

O site e estatico (Astro, `output: 'static'`). O build gera `dist/` com HTML,
CSS, JS e assets ja prontos: nao ha backend, banco nem variavel de ambiente.

Ha dois caminhos. Prefira o **A (GitHub)**; o **B (ZIP)** e a contingencia.

---

## A. Deploy automatico pelo GitHub (recomendado)

O repositorio dedicado ja e a raiz do projeto: `package.json`, `astro.config.mjs`,
`src/` e `public/` estao no topo. Isso evita o erro de "estrutura de projeto
invalida" que a Hostinger acusa em monorepos.

```text
Repository: MaiconKevyn/client03-petshotamigoanimal
Branch: main
```

No hPanel: **Sites → (site) → Deploy do GitHub / Auto Deployment**, conecte a
conta e use:

```text
Framework:         Astro   (se nao existir, use "Other")
Root directory:    .
Install command:   npm ci
Build command:     npm run build
Output directory:  dist
Node.js:           22.x
```

Se o painel nao tiver o preset `Astro`, escolha `Other` e preencha os mesmos
comandos acima. A versao do Node esta fixada em `.nvmrc` e em
`package.json → engines`.

Cada `git push` na `main` dispara um novo build e publica.

---

## B. Upload manual do ZIP (contingencia)

```bash
./deploy.sh
```

O script roda `npm ci`, `npm run check`, `npm run build`, confere que os itens
obrigatorios existem (`index.html`, `404.html`, `robots.txt`, `sitemap.xml`,
`.htaccess`, `assets/`) e gera `release/amigo-animal-site.zip`.

No hPanel: **Arquivos → Gerenciador de Arquivos**, entre em `public_html/`
(ou na pasta do subdominio), apague o conteudo antigo, envie o ZIP e extraia.

> O conteudo do ZIP e a **raiz** do site. Nao suba a pasta `dist` inteira, senao
> o site cai em `public_html/dist/`.

---

## Dominio

O hostname canonico vive em um lugar so e e trocado por script:

```bash
./set-domain.sh amigoanimal.com.br
```

Isso atualiza `astro.config.mjs`, `public/sitemap.xml`, `src/layouts/SiteLayout.astro`,
`README.md` e este arquivo. Depois refaca o build.

Hoje o valor e `amigoanimal.umbrastudio.com.br` (subdominio de demonstracao).

---

## `.htaccess`

`public/.htaccess` acompanha o build e vai para a raiz do site. Ele cuida de:

- redirecionamento forcado para HTTPS (funciona atras do proxy da Hostinger,
  via `X-Forwarded-Proto`);
- `ErrorDocument 404 /404.html`;
- cabecalhos de seguranca (`nosniff`, `Referrer-Policy`, `X-Frame-Options`,
  `Permissions-Policy`);
- compressao (`mod_deflate`) e cache (`mod_expires`), com HTML sempre revalidado,
  imagem/fonte com cache longo;
- `X-Robots-Tag: noindex` enquanto o site estiver no dominio de demonstracao.

**Ao publicar no dominio definitivo do cliente, remova duas coisas:**

1. a linha `Header always set X-Robots-Tag "noindex, nofollow, noarchive"` em
   `public/.htaccess`;
2. a tag `<meta name="robots" content="noindex, nofollow, noarchive" />` em
   `src/layouts/SiteLayout.astro`.

Sem isso o site nao entra no Google.

---

## SSL

Em **Seguranca → SSL**, ative o certificado gratuito (Let's Encrypt) para o
dominio e o `www`. O redirect de HTTPS do `.htaccess` so faz sentido depois que
o certificado estiver emitido.

---

## Checklist antes de publicar

- [ ] Confirmar o horario de atendimento em `src/data/site.ts` (unico contato
      ainda PLACEHOLDER; telefone, WhatsApp, Instagram e endereco ja sao reais).
- [ ] Trocar os nomes/fotos da equipe e os depoimentos por conteudo real.
- [ ] Substituir as imagens de `public/assets/img/` por fotos do cliente
      (ver "Imagens" no `README.md`).
- [ ] Conferir se o pino do Google Maps cai no ponto certo (o embed usa busca
      por endereco, nao coordenada).
- [ ] Rodar `./set-domain.sh <dominio-final>`.
- [ ] Remover o `noindex` (`.htaccess` + `SiteLayout.astro`).
- [ ] `npm run check && npm run build` sem erro.
- [ ] Ativar SSL no hPanel.

---

## O que nao deve subir

Nada de `node_modules/`, `.astro/`, `dist/` versionado, ZIP/TAR exportado de
outras hospedagens, arquivos `.env` ou chaves. O `.gitignore` ja cobre isso.
