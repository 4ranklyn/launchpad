import express from 'express';
import compression from 'compression';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);
const distDir = path.join(__dirname, 'dist');

app.use(compression());

// Security and Agentic Discovery Link headers
app.use((req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  res.setHeader(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: https:",
      "connect-src 'self' https:",
      "frame-ancestors 'self' https://*.run.app https://*.google.com https://*.aistudio.google.com",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ')
  );
  res.setHeader(
    'Link',
    '</llms.txt>; rel="llms-txt"; type="text/markdown", </llms-full.txt>; rel="alternate"; type="text/markdown"; title="Full LLM Context", </.well-known/ard.json>; rel="ard"; type="application/json"'
  );
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Explicit markdown MIME types for discovery files
app.get('/llms.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
  res.sendFile(path.join(distDir, 'llms.txt'));
});

app.get('/llms-full.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
  res.sendFile(path.join(distDir, 'llms-full.txt'));
});

// Healthcheck endpoint for Cloud Run
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// Serve static assets from dist
app.use(express.static(distDir, {
  extensions: ['html'],
  maxAge: '1h'
}));

// Clean URL / fallback routing
app.use((req, res) => {
  const possibleHtml = path.join(distDir, req.path, 'index.html');
  if (fs.existsSync(possibleHtml)) {
    return res.sendFile(possibleHtml);
  }
  const notFound = path.join(distDir, '404.html');
  if (fs.existsSync(notFound)) {
    return res.status(404).sendFile(notFound);
  }
  return res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Cloud Run server running on http://0.0.0.0:${port}`);
});
