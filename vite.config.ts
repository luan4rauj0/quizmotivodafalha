import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/quiz-bolt/', // Nome do repositório no GitHub
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
