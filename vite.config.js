import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(projectRoot, 'index.html'),
        notFound: resolve(projectRoot, '404.html')
      }
    }
  },
  server: {
    port: 5174,
    host: true,
    proxy: {
      '/api/tgju': {
        target: 'https://call.tgju.org',
        changeOrigin: true,
        rewrite: (path) => '/ajax.json',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          'Referer': 'https://www.tgju.org/'
        }
      }
    }
  }
});
