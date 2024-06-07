window.addEventListener('load', () => {
    // Is service worker available?
    if ('serviceWorker' in navigator) {
      console.log('Service worker registered!');

      navigator.serviceWorker.register('./sw.js').then(() => {
        console.log('Service worker registered!');
      }).catch((error) => {
        console.warn('Error registering service worker:');
        console.warn(error);
      });
    }
  });