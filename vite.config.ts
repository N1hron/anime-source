import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ui': path.resolve(__dirname, './src/components/ui'),
    },
  },
  server: {
    proxy: {
      '/api/anime': {
        target: 'https://api.myanimelist.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/anime/, ''),
      },
    },
  },
});
