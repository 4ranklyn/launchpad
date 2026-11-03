import express, { Request, Response, NextFunction } from 'express';
import compression from 'compression';
import path from 'path';
import fs from 'fs';

const isProduction = process.env.NODE_ENV === 'production';
const PORT = parseInt(process.env.PORT || '3000', 10);
const app = express();

// Enable GZIP / Deflate text compression for all response payloads
app.use(
  compression({
    threshold: 0,
    filter: (req: Request, res: Response) => {
      if (req.headers['x-no-compression']) {
        return false;
      }
      return compression.filter(req, res);
    },
  })
);

// Enforce Best-Practice Security & Agent Discovery Headers
app.use((req: Request, res: Response, next: NextFunction) => {
  // HTTP Strict Transport Security (HSTS)
  res.setHeader(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains; preload'
  );

  // Content Security Policy (CSP)
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

  // Agentic & LLM Context Discovery Link Header
  res.setHeader(
    'Link',
    '</llms.txt>; rel="llms-txt"; type="text/markdown", </llms-full.txt>; rel="alternate"; type="text/markdown"; title="Full LLM Context", </.well-known/ard.json>; rel="ard"; type="application/json"'
  );

  // Cross-Origin Isolation & Top-Level Context Isolation
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  next();
});

// Explicit routes for Agentic Resource Discovery & LLM Context
const ardPath = path.resolve(import.meta.dirname, 'public', '.well-known', 'ard.json');
app.get('/.well-known/ard.json', (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.sendFile(ardPath);
});

const llmsPath = path.resolve(import.meta.dirname, 'public', 'llms.txt');
app.get('/llms.txt', (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
  res.sendFile(llmsPath);
});

const llmsFullPath = path.resolve(import.meta.dirname, 'public', 'llms-full.txt');
app.get('/llms-full.txt', (_req: Request, res: Response) => {
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
  res.sendFile(llmsFullPath);
});

async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
      },
      appType: 'spa',
    });

    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(import.meta.dirname, 'dist');
    // Serve pre-built static assets with cache headers
    app.use(
      '/assets',
      express.static(path.join(distPath, 'assets'), {
        maxAge: '1y',
        immutable: true,
      })
    );
    app.use(express.static(distPath));

    app.use('*', (_req: Request, res: Response) => {
      const htmlPath = path.join(distPath, 'index.html');
      if (fs.existsSync(htmlPath)) {
        res.sendFile(htmlPath);
      } else {
        res.status(404).send('Not Found');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT} (${isProduction ? 'production' : 'development'})`);
  });
}

startServer();
