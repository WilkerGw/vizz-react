import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [], // Certifique-se de que nenhum módulo importante está sendo externalizado
    },
  },
});