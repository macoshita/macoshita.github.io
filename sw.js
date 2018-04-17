importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "macoshita.github.io",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/10.0c39347437c338b7df6a.js",
    "revision": "586fd0a7eeb30560399c3548e4a6845f"
  },
  {
    "url": "/_nuxt/11.c20c5ba922ac2bcf4651.js",
    "revision": "1e3e3d5d3fb8b08a5a8b4e29ff2c481a"
  },
  {
    "url": "/_nuxt/5.e028b903f24b3e563373.js",
    "revision": "c5239a105350b92ecb464ab6ebed98ed"
  },
  {
    "url": "/_nuxt/6.86d4155bac657cb76009.js",
    "revision": "8e2a826b8027c8fedac6523b9a0b583d"
  },
  {
    "url": "/_nuxt/7.83e92dcb1c55c15e6678.js",
    "revision": "0cedcf1c0d00942b86762f96b4b966b8"
  },
  {
    "url": "/_nuxt/8.7d63c71dcb0129837c93.js",
    "revision": "9d8e6624efb56b6ba9d981876dde16e5"
  },
  {
    "url": "/_nuxt/9.791767a21813452251af.js",
    "revision": "01ed7428b12f0bc7aa0ff3099d1c322a"
  },
  {
    "url": "/_nuxt/app.6b37b7f4988e1a4a1932.js",
    "revision": "ca5cd4613e55b662bc534154ad8786fc"
  },
  {
    "url": "/_nuxt/layouts/default.4e64ec53dc4da6966f1f.js",
    "revision": "1e75853a6539453ed8006cb3e7ef1fbd"
  },
  {
    "url": "/_nuxt/manifest.71412949d7899dded1b3.js",
    "revision": "4f839d56c5bbdd6dca3cc0cc65233ca4"
  },
  {
    "url": "/_nuxt/pages/blog/_slug.48281ca73f7dbd1eb22b.js",
    "revision": "e95b8129ef38969c61c6a18e3d863edc"
  },
  {
    "url": "/_nuxt/pages/index.3cc03a96935e1bc13b46.js",
    "revision": "5392c6d9cf4a05b95a75142ed5816370"
  },
  {
    "url": "/_nuxt/vendor.0d4f966fe985ae7a164f.js",
    "revision": "f43054fd57f234ea3a271a901099329e"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

