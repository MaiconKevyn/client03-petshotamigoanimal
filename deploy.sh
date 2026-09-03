#!/usr/bin/env bash
# Gera o pacote de deploy (upload manual no Gerenciador de Arquivos da Hostinger)
# a partir do build Astro.
# Uso: ./deploy.sh
set -euo pipefail

cd "$(dirname "$0")"

BUILD_DIR="dist"
RELEASE_DIR="release"
ZIP="$RELEASE_DIR/amigo-animal-site.zip"

command -v zip >/dev/null || { echo "erro: 'zip' nao esta instalado" >&2; exit 1; }
command -v npm >/dev/null || { echo "erro: 'npm' nao esta instalado" >&2; exit 1; }

npm ci
npm run check
npm run build

for file in index.html 404.html robots.txt sitemap.xml .htaccess assets; do
  [ -e "$BUILD_DIR/$file" ] || { echo "erro: item obrigatorio ausente no build: $file" >&2; exit 1; }
done

mkdir -p "$RELEASE_DIR"
rm -f "$ZIP"
(cd "$BUILD_DIR" && zip -r -q "../$ZIP" . -x '.DS_Store' '*/.DS_Store' '__MACOSX/*')

echo "pacote gerado: $ZIP"
echo "conteudo:"
unzip -Z1 "$ZIP" | sed 's/^/  /'
