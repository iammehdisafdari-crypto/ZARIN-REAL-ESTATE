import { defineConfig } from 'vite';

export default defineConfig({
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
