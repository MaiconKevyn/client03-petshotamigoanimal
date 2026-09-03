import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://amigoanimal.umbrastudio.com.br',
  output: 'static',
  build: {
    format: 'directory',
  },
});
