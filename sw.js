if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let r={};const o=e=>i(e,l),t={module:{uri:l},exports:r,require:o};s[l]=Promise.all(n.map((e=>t[e]||o(e)))).then((e=>(a(...e),r)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"35a0183c328f9823108f9fd0cabe919a"},{url:"apple-touch-icon.png",revision:"53055e1236f0f1e202e49fb04d42269e"},{url:"assets/index-9f4I3Q9R.css",revision:null},{url:"assets/index-BkSiLyVN.js",revision:null},{url:"assets/Shabnam-Bold-FD-BfEDBMOj.woff",revision:null},{url:"assets/Shabnam-Bold-FD-DgKNTifC.ttf",revision:null},{url:"assets/Shabnam-Bold-FD-DYPR835k.eot",revision:null},{url:"assets/Shabnam-FD-BBQBpXRF.ttf",revision:null},{url:"assets/Shabnam-FD-BcUv-rxN.eot",revision:null},{url:"assets/Shabnam-FD-BK0ib4sr.woff",revision:null},{url:"assets/Shabnam-Light-FD-BdfyYdl7.eot",revision:null},{url:"assets/Shabnam-Light-FD-BZlENHsi.ttf",revision:null},{url:"assets/Shabnam-Light-FD-DMjdrdyC.woff",revision:null},{url:"assets/Shabnam-Medium-FD-D3gyXNjn.eot",revision:null},{url:"assets/Shabnam-Medium-FD-DBb0kER8.woff",revision:null},{url:"assets/Shabnam-Medium-FD-DBjX2RQ1.ttf",revision:null},{url:"assets/Shabnam-Thin-FD-BHp_dI0Q.ttf",revision:null},{url:"assets/Shabnam-Thin-FD-Cy0CEcu9.woff",revision:null},{url:"assets/Shabnam-Thin-FD-D0EyqbPU.eot",revision:null},{url:"favicon.ico",revision:"e6a0b898d817bdf38dbf0b952440c63e"},{url:"favicon.svg",revision:"108bb192ff03aab544ce5283b7cfe11c"},{url:"index.html",revision:"66106e3caf6afe068aa3dee84270b5ed"},{url:"pwa-192x192.png",revision:"b4c1a133f66a011f35cc3eefa9db7590"},{url:"pwa-512x512.png",revision:"36868f98c0bc2ad3393e3f76a6cfbb02"},{url:"pwa-maskable-192x192.png",revision:"352b44f39ecb40f290b071bea9901f15"},{url:"pwa-maskable-512x512.png",revision:"6dc681cc95b26e646a1226f92d723444"},{url:"registerSW.js",revision:"d576a2540ae80adf153214114bc87e61"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"favicon.ico",revision:"e6a0b898d817bdf38dbf0b952440c63e"},{url:"apple-touch-icon.png",revision:"53055e1236f0f1e202e49fb04d42269e"},{url:"manifest.webmanifest",revision:"4648806a0447fe88e7e73072d8ab2c52"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
