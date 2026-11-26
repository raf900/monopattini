import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://monopattini.ch',
  // vecchi indirizzi della pagina Usato, rinominata Compra
  redirects: {
    '/usato': '/compra',
    '/usato/[slug]': '/compra/[slug]',
    // pagina Vendi tolta: chi ha il vecchio link arriva in home
    '/vendi': '/',
  },
});
