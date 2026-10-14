import { resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

function getHtmlInputs(dir, baseDir = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const inputs = {};
  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'dist' || entry.name === 'cms-laravel' || entry.name === 'scratch') continue;
    const fullPath = resolve(dir, entry.name);
    if (entry.isDirectory()) {
      Object.assign(inputs, getHtmlInputs(fullPath, baseDir));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      const rel = relative(baseDir, fullPath).replace(/\\/g, '/');
      const key = rel === 'index.html' ? 'main' : rel.replace(/\.html$/, '').replace(/[^a-zA-Z0-9]/g, '_');
      inputs[key] = fullPath;
    }
  }
  return inputs;
}

const consultationSuccessHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Inquiry Received | ZARIN Private Office</title><link rel="stylesheet" href="/styles/main.css"></head><body class="bg-[#0A0B0E] text-[#F8F9FA] min-h-screen flex items-center justify-center p-6"><div class="max-w-md w-full bg-[#111318] border border-[rgba(200,171,131,0.32)] rounded p-8 text-center"><div class="w-12 h-12 mx-auto mb-4 border border-[rgba(200,171,131,0.45)] rounded flex items-center justify-center text-[#C8AB83]"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><h1 class="text-2xl font-bold mb-2">Application Received</h1><p class="text-[#9FA6B2] text-sm mb-6 leading-relaxed">Thank you for your confidential inquiry. A senior director from ZARIN Private Office will reach out within 24 hours.</p><a href="/private-office" class="inline-block px-6 py-3 bg-[#C8AB83] text-[#0A0B0E] text-xs font-bold uppercase tracking-wider rounded hover:bg-[#DFC49E] transition-colors">Return to Private Office</a></div></body></html>`;

const newsletterSuccessHtml = `<!DOCTYPE html>
<html lang="en" dir="ltr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Subscription Confirmed | ZARIN Insights</title><link rel="stylesheet" href="/styles/main.css"></head><body class="bg-[#0A0B0E] text-[#F8F9FA] min-h-screen flex items-center justify-center p-6"><div class="max-w-md w-full bg-[#111318] border border-[rgba(200,171,131,0.32)] rounded p-8 text-center"><div class="w-12 h-12 mx-auto mb-4 border border-[rgba(200,171,131,0.45)] rounded flex items-center justify-center text-[#C8AB83]"><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg></div><h1 class="text-2xl font-bold mb-2">Subscription Confirmed</h1><p class="text-[#9FA6B2] text-sm mb-6 leading-relaxed">Welcome to ZARIN's monthly intelligence briefing. You will receive market reports, editorial articles, and daily data updates.</p><a href="/insights" class="inline-block px-6 py-3 bg-[#C8AB83] text-[#0A0B0E] text-xs font-bold uppercase tracking-wider rounded hover:bg-[#DFC49E] transition-colors">Return to Insights</a></div></body></html>`;

export default defineConfig({
  plugins: [
    tailwindcss(),
    {
      name: 'form-post-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.method === 'POST' && (req.url === '/consultation' || req.url === '/consultation/')) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(consultationSuccessHtml);
            return;
          }
          if (req.method === 'POST' && (req.url === '/newsletter' || req.url === '/newsletter/')) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(newsletterSuccessHtml);
            return;
          }
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.method === 'POST' && (req.url === '/consultation' || req.url === '/consultation/')) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(consultationSuccessHtml);
            return;
          }
          if (req.method === 'POST' && (req.url === '/newsletter' || req.url === '/newsletter/')) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(newsletterSuccessHtml);
            return;
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: getHtmlInputs(projectRoot)
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
