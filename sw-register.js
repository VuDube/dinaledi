if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Dinaledi SW Registered'))
      .catch(err => console.log('SW Registration Failed', err));
  });
}
