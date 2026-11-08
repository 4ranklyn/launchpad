// Bypass Astro's aggressive minor Node.js patch version gate in cloud buildpack environments (e.g. Google Cloud Run from AI Studio with Node v22.23.2)
process.versions.webcontainer = '1';
if (process.versions && process.versions.node) {
  try {
    Object.defineProperty(process.versions, 'node', {
      value: '22.23.4',
      configurable: true,
      enumerable: true,
      writable: true
    });
  } catch (_) {}
}
