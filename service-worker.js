//self.importScripts('./util/util.js')

self.addEventListener('install',event => {
  console.log('Worker: Received "install" event v2');
  // otherwise only updates when user leaves the site
  event.waitUntil(self.skipWaiting());

});

self.addEventListener('fetch', event => {
  console.log('Worker: Intercepted request for ', event.request.url);
  if (event.request.method != 'GET'){
    return;
  }

});
