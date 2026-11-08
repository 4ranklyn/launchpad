import express from 'express';
import compression from 'compression';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '8080', 10);
const distDir = path.join(__dirname, 'dist');

app.use(compression());

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
