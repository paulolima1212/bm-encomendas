import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bm-encomendas',
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
  },
});
