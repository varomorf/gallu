/**
 * Created by Alvaro on 18/03/2017.
 */

// register the service worker if available after on load
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function onLoadRegisterServiceWorker() {
    navigator.serviceWorker.register('./sw.js').then(function (reg) {
      console.log('Successfully registered service worker', reg);
    }).catch(function (err) {
      console.warn('Error whilst registering service worker', err);
    });
  });
}