import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // ESSENCIAL para funcionar no Vercel!
  build: {
    minify: true,
  },
});