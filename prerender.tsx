import fs from 'fs';
import path from 'path';
import { renderToString } from 'react-dom/server';
import React from 'react';
import App from './src/App.tsx';

const distIndex = path.resolve(import.meta.dirname, 'dist', 'index.html');

if (fs.existsSync(distIndex)) {
  const template = fs.readFileSync(distIndex, 'utf-8');
  const appHtml = renderToString(<App />);

  const html = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  fs.writeFileSync(distIndex, html, 'utf-8');
  console.log('Pre-rendered static HTML into dist/index.html');
} else {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}
