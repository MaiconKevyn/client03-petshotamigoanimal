#!/usr/bin/env bash
# Troca o hostname canonico mantendo o projeto portatil.
# Uso: ./set-domain.sh amigoanimal.com.br
set -euo pipefail

cd "$(dirname "$0")"

NEW_DOMAIN="${1:-}"
if [ -z "$NEW_DOMAIN" ]; then
  echo "uso: $0 <dominio>  ex.: $0 amigoanimal.com.br" >&2
  exit 1
fi

case "$NEW_DOMAIN" in
  http*|*/*|*[[:space:]]*)
    echo "erro: informe somente o hostname, sem https://, barra ou espacos" >&2
    exit 1
    ;;
esac

if ! [[ "$NEW_DOMAIN" =~ ^([a-z0-9]([a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$ ]]; then
  echo "erro: hostname invalido: $NEW_DOMAIN" >&2
  exit 1
fi

CURRENT_DOMAIN=$(sed -n "s#.*site: 'https://\([^/']*\)'.*#\1#p" astro.config.mjs | head -n 1)
if [ -z "$CURRENT_DOMAIN" ]; then
  echo "erro: nao foi possivel descobrir o dominio atual em astro.config.mjs" >&2
  exit 1
fi

FILES=(astro.config.mjs public/sitemap.xml src/layouts/SiteLayout.astro README.md HOSTINGER_DEPLOY.md)
ESCAPED_CURRENT=${CURRENT_DOMAIN//./\.}

for file in "${FILES[@]}"; do
  if ! grep -q "$CURRENT_DOMAIN" "$file"; then
    continue
  fi

  if sed --version >/dev/null 2>&1; then
    sed -i "s/${ESCAPED_CURRENT}/${NEW_DOMAIN}/g" "$file"
  else
    sed -i '' "s/${ESCAPED_CURRENT}/${NEW_DOMAIN}/g" "$file"
  fi
  echo "atualizado: $file"
done

echo "dominio alterado: $CURRENT_DOMAIN -> $NEW_DOMAIN"
echo "revise com: git diff"
