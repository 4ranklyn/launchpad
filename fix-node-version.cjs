if (process.versions) {
  try {
    Object.defineProperty(process.versions, 'webcontainer', {
      value: '1',
      configurable: true,
      enumerable: true,
      writable: true,
    });
  } catch (_) {}
  try {
    Object.defineProperty(process.versions, 'node', {
      value: '22.23.4',
      configurable: true,
      enumerable: true,
      writable: true,
    });
  } catch (_) {}
}
