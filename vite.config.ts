import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

// Custom plugin to inline CSS into index.html to eliminate render-blocking CSS requests
function inlineCssPlugin() {
  return {
    name: 'inline-css',
    enforce: 'post' as const,
    apply: 'build' as const,
    transformIndexHtml(html: string, ctx: any) {
      if (!ctx.bundle) return html;
      let newHtml = html;
      for (const [fileName, chunk] of Object.entries(ctx.bundle)) {
        if (fileName.endsWith('.css') && 'source' in (chunk as any)) {
          const cssContent = (chunk as any).source.toString();
          const linkTagRegex = new RegExp(`<link[^>]+href="[^"]*${fileName}"[^>]*>`, 'g');
          if (linkTagRegex.test(newHtml)) {
            newHtml = newHtml.replace(linkTagRegex, `<style>${cssContent}</style>`);
          } else {
            newHtml = newHtml.replace('</head>', `<style>${cssContent}</style></head>`);
          }
        }
      }
      return newHtml;
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), inlineCssPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
        react: 'preact/compat',
        'react-dom': 'preact/compat',
        'react/jsx-runtime': 'preact/jsx-runtime',
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
