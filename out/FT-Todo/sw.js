if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const d=e=>i(e,r),l={module:{uri:r},exports:t,require:d};s[r]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(o(...e),t)))}}define(["./workbox-e0782b83"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-01e64e44.js",revision:null},{url:"assets/index-5b9ec539.css",revision:null},{url:"assets/workbox-window.prod.es5-dc90f814.js",revision:null},{url:"index.html",revision:"ed323121376842bf6ddf68318d5e27c5"},{url:"favicon.ico",revision:"9781c516a0fd82fdeb02f5d8b0e1b4e5"},{url:"manifest.webmanifest",revision:"2eb7b68cd16ce7fd7d92738f98cbe1a4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));