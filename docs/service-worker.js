if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"cca609397b0652166d13dc6e1f9776fd","url":"404.html"},{"revision":"0dee292608b84d1c91ab78d421879e0e","url":"831e6e185dcc0f003ebe.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"cca609397b0652166d13dc6e1f9776fd","url":"index.html"},{"revision":"0f451eaa34102d0646cd42434affd8a0","url":"static/css/19.bded3b46.chunk.css"},{"revision":"cb9615687ee710b9cf130a8998e9faea","url":"static/css/2.6c493df4.chunk.css"},{"revision":"af5d5eca98c8633059b4836595f94888","url":"static/css/20.371c3fc8.chunk.css"},{"revision":"03ada91fa755124bb56a92169bfaa0ec","url":"static/js/0.2c72183f.chunk.js"},{"revision":"ae09767aa92267c5bc7ea29d110b6b2c","url":"static/js/1.aca8ce5a.chunk.js"},{"revision":"6e66f54d0ba7894a647f07f199851625","url":"static/js/11.5855773e.chunk.js"},{"revision":"7e3d85f95a58a3404dc75f2df669bf9d","url":"static/js/12.9024fc6f.chunk.js"},{"revision":"5820e49428bc767ed468330a66773765","url":"static/js/13.c5f95b34.chunk.js"},{"revision":"50220486bc6977643466fcdee747f297","url":"static/js/14.c9ff3e64.chunk.js"},{"revision":"4bebfefb2caf66634a06927055b6ac69","url":"static/js/15.3d655dc1.chunk.js"},{"revision":"4840712c6ebe01a1b1e6b81d66533225","url":"static/js/16.6f4cfeb4.chunk.js"},{"revision":"cba78d7faea7185dca778d6b11e093d6","url":"static/js/17.c440e160.chunk.js"},{"revision":"ef2b04fca93d2b2354a8737f26586dda","url":"static/js/18.94a32300.chunk.js"},{"revision":"32ce9e8dd99a01f4053d7566bd0648a4","url":"static/js/19.1ff8c43a.chunk.js"},{"revision":"970766ee6b07bd5a60aafcba6ef48a1c","url":"static/js/2.012e68a0.chunk.js"},{"revision":"385ee83a766487d59c9ceddd5698bd13","url":"static/js/20.97474300.chunk.js"},{"revision":"54852a23764057b009adfa8ebef945a1","url":"static/js/21.d87326eb.chunk.js"},{"revision":"2943c4f25f3474b7a3e329c224dea52f","url":"static/js/22.43d9176e.chunk.js"},{"revision":"b93d1477ff92d45e89f296d019976a96","url":"static/js/23.4d81ada1.chunk.js"},{"revision":"c76add5344246dbdaac0aa48ab6076ea","url":"static/js/24.a3f8a30d.chunk.js"},{"revision":"b8972043ce5aaa1ca98276781161798b","url":"static/js/25.a17b9b9d.chunk.js"},{"revision":"5631a22483e58d95533003ccc5f1e297","url":"static/js/26.596dd7f6.chunk.js"},{"revision":"f15e61c117f9709953bfdc13ad1e75a4","url":"static/js/27.6455661e.chunk.js"},{"revision":"83841e23ff6feaac0e86401f299cfd3d","url":"static/js/28.b5673abc.chunk.js"},{"revision":"90ca606aabcb1f35e6d879892a007fc9","url":"static/js/29.3dba1b36.chunk.js"},{"revision":"fbf1a27038402e1a6093aeee7462e1f3","url":"static/js/3.0c046050.chunk.js"},{"revision":"edad1b69ba8a063de5b7e9235e313da9","url":"static/js/30.09b8873a.chunk.js"},{"revision":"7a5fd03a98beaba710ed2f6d95d99c7c","url":"static/js/31.eaee886e.chunk.js"},{"revision":"689fdd14cba9f4e5615e89d05d430d10","url":"static/js/32.1000aba9.chunk.js"},{"revision":"fd06b5dd26a95eaa4abebfc2a6deae37","url":"static/js/33.637dc97f.chunk.js"},{"revision":"325c85af27edae4444ac633cc8e4029a","url":"static/js/34.63d3fc86.chunk.js"},{"revision":"546080df072ac74a9f8ba6a4fa4836fb","url":"static/js/35.e07fa0f9.chunk.js"},{"revision":"075c3f1f980d1f1561f57d298d1dddfd","url":"static/js/36.0c00ddfd.chunk.js"},{"revision":"9e81a4bdecc2d57c46c4dc775d7b20c9","url":"static/js/37.ecf1e936.chunk.js"},{"revision":"67b5e441a1b82dbba482d79807755a92","url":"static/js/38.a24eaaca.chunk.js"},{"revision":"a7ce3c05ae7d8bb56603c32058bc8c0e","url":"static/js/39.7297bf6f.chunk.js"},{"revision":"90fd0df5ee6243255d1376ff265bc4df","url":"static/js/4.c8910dc9.chunk.js"},{"revision":"5a88c6ed83194fc4c6a138110f71c5bf","url":"static/js/40.bc748bd7.chunk.js"},{"revision":"f3123bc84282638d0f737d877657fdc0","url":"static/js/41.adb38098.chunk.js"},{"revision":"13384a523c589d55aae8d063663d1996","url":"static/js/42.2528971f.chunk.js"},{"revision":"38294fcdc9c503ae69f1eb6a6fba0283","url":"static/js/43.3de7532b.chunk.js"},{"revision":"f4a05e5aab60387c67e6ddcfe0ed9bed","url":"static/js/44.7b03124d.chunk.js"},{"revision":"f5e9a6327f7796d63bc41e3e9637fe12","url":"static/js/5.8aa9a73c.chunk.js"},{"revision":"f953d2f38b13e76dddc7ddb1e2c36d49","url":"static/js/6.a7ff3540.chunk.js"},{"revision":"96dd13a7579e7325baa367423b32f657","url":"static/js/7.40ce390c.chunk.js"},{"revision":"1316962dcb175f454e20e187e3d50dc0","url":"static/js/8.33809765.chunk.js"},{"revision":"2e1d85845223742da820cfe4ff17f9b4","url":"static/js/main.93b42112.chunk.js"},{"revision":"9f99470e936d845c1417d45c54556d60","url":"static/js/runtime-main.fe2ccb33.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.incovid19\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
