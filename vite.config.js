import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Adicione o plugin React aqui
  build: {
    rollupOptions: {
      external: [], // Certifique-se de que nenhum módulo importante está sendo externalizado
    },
  },
});