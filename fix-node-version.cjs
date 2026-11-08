if (process.versions) {
  try {
    Object.defineProperty(process.versions, 'webcontainer', { value: '1', configurable: true });
    Object.defineProperty(process.versions, 'node', { value: '22.23.4', configurable: true });
  } catch (_) {}
}
