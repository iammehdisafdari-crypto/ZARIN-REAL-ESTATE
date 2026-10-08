import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(projectRoot, 'index.html'),
        notFound: resolve(projectRoot, '404.html'),
        brandbook: resolve(projectRoot, 'brandbook.html'),
        properties: resolve(projectRoot, 'properties/index.html'),
        propertiesHtml: resolve(projectRoot, 'properties.html'),
        offPlan: resolve(projectRoot, 'off-plan/index.html'),
        offPlanHtml: resolve(projectRoot, 'off-plan.html')
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
