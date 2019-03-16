importScripts('/inkvincible/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/inkvincible/_nuxt/0a2b9ef3c62ea1103daf.js",
    "revision": "d534104535bc6a2b82cdec4aba5c5253"
  },
  {
    "url": "/inkvincible/_nuxt/2dce6ac3e0540effcacc.js",
    "revision": "fa75abb86bbf6b0c2f9fe359fb0d2a6a"
  },
  {
    "url": "/inkvincible/_nuxt/35efb62f7dfe3627d664.js",
    "revision": "f39c67816c2bdc42b2f47b46c4f29e6b"
  },
  {
    "url": "/inkvincible/_nuxt/487e188b6faeff77b5e3.js",
    "revision": "cad9a722eb8808697fadb72b968f60e3"
  },
  {
    "url": "/inkvincible/_nuxt/563092dc67c8c8b32d11.js",
    "revision": "2a4eaadaec5027dd8adc34b0563aae16"
  },
  {
    "url": "/inkvincible/_nuxt/5a3ccec8fcf0c55d9254.js",
    "revision": "805c7c3a2d8fca4b7e76c979681ad8d5"
  },
  {
    "url": "/inkvincible/_nuxt/5cb44326f12923541302.js",
    "revision": "dce921f3c5c4b248b813f77f3b482151"
  },
  {
    "url": "/inkvincible/_nuxt/662c9b2d197507ae31c2.js",
    "revision": "f72733929b775b8069be9ca974295380"
  },
  {
    "url": "/inkvincible/_nuxt/9b269e71603c59cfe5c0.js",
    "revision": "1c128d506b3e7c87c63ed0e6aee1a466"
  },
  {
    "url": "/inkvincible/_nuxt/b75d831e3003ee812a1f.js",
    "revision": "ac11a1351d3b37097a85610d77b2cd83"
  },
  {
    "url": "/inkvincible/_nuxt/bcc48e4183d7871f4be7.js",
    "revision": "d8bd5db79b5c1412107d613e57d1d342"
  },
  {
    "url": "/inkvincible/_nuxt/de8c99d18af9b2fba20e.js",
    "revision": "28d48bd5e770958ccb62a903eede1a6c"
  }
], {
  "cacheId": "inkvincible",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/inkvincible/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/inkvincible/.*'), workbox.strategies.networkFirst({}), 'GET')
