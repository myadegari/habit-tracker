if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,a)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let f={};const c=e=>n(e,s),o={module:{uri:s},exports:f,require:c};i[s]=Promise.all(r.map((e=>o[e]||c(e)))).then((e=>(a(...e),f)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"35a0183c328f9823108f9fd0cabe919a"},{url:"apple-touch-icon.png",revision:"53055e1236f0f1e202e49fb04d42269e"},{url:"assets/index-D9OGRY-k.js",revision:null},{url:"assets/index-Dmz3fNXm.css",revision:null},{url:"favicon.ico",revision:"e6a0b898d817bdf38dbf0b952440c63e"},{url:"favicon.svg",revision:"108bb192ff03aab544ce5283b7cfe11c"},{url:"index.html",revision:"1dc638a2652574d7702880a18d58a899"},{url:"pwa-192x192.png",revision:"b4c1a133f66a011f35cc3eefa9db7590"},{url:"pwa-512x512.png",revision:"36868f98c0bc2ad3393e3f76a6cfbb02"},{url:"pwa-maskable-192x192.png",revision:"352b44f39ecb40f290b071bea9901f15"},{url:"pwa-maskable-512x512.png",revision:"6dc681cc95b26e646a1226f92d723444"},{url:"registerSW.js",revision:"d576a2540ae80adf153214114bc87e61"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"favicon.ico",revision:"e6a0b898d817bdf38dbf0b952440c63e"},{url:"apple-touch-icon.png",revision:"53055e1236f0f1e202e49fb04d42269e"},{url:"pwa-192x192.png",revision:"b4c1a133f66a011f35cc3eefa9db7590"},{url:"pwa-512x512.png",revision:"36868f98c0bc2ad3393e3f76a6cfbb02"},{url:"pwa-maskable-192x192.png",revision:"352b44f39ecb40f290b071bea9901f15"},{url:"pwa-maskable-512x512.png",revision:"6dc681cc95b26e646a1226f92d723444"},{url:"manifest.webmanifest",revision:"a0d15cf14cf63b08a2ab22b5b09313d4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
