(()=>{"use strict";var e,a,c,r,t,f={},b={};function o(e){var a=b[e];if(void 0!==a)return a.exports;var c=b[e]={id:e,loaded:!1,exports:{}};return f[e].call(c.exports,c,c.exports,o),c.loaded=!0,c.exports}o.m=f,o.c=b,e=[],o.O=(a,c,r,t)=>{if(!c){var f=1/0;for(i=0;i<e.length;i++){c=e[i][0],r=e[i][1],t=e[i][2];for(var b=!0,d=0;d<c.length;d++)(!1&t||f>=t)&&Object.keys(o.O).every((e=>o.O[e](c[d])))?c.splice(d--,1):(b=!1,t<f&&(f=t));if(b){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[c,r,t]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},c=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var t=Object.create(null);o.r(t);var f={};a=a||[null,c({}),c([]),c(c)];for(var b=2&r&&e;"object"==typeof b&&!~a.indexOf(b);b=c(b))Object.getOwnPropertyNames(b).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,o.d(t,f),t},o.d=(e,a)=>{for(var c in a)o.o(a,c)&&!o.o(e,c)&&Object.defineProperty(e,c,{enumerable:!0,get:a[c]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,c)=>(o.f[c](e,a),a)),[])),o.u=e=>"assets/js/"+({181:"3baaae34",301:"bbc09831",867:"33fc5bb8",1107:"4ee117cb",1160:"8939cc48",1235:"a7456010",1610:"46ee208c",1724:"dff1c289",1903:"acecf23e",1953:"1e4232ab",1972:"73664a40",1974:"5c868d36",2711:"9e4087bc",2748:"822bd8ab",3098:"533a09ca",3249:"ccc49370",3637:"f4f34a3a",3694:"8717b14a",3940:"ae6e0fa3",3976:"0e384e19",4037:"0c9528b7",4059:"6efc1b83",4134:"393be207",4195:"b33301fd",4212:"621db11d",4583:"1df93b7f",4736:"e44a2883",4813:"6875c492",5005:"63e22c6e",5557:"d9f32620",5636:"80330ba4",5742:"aba21aa0",6061:"1f391b9e",6969:"14eb3368",7052:"d7375a8d",7098:"a7bd4aaa",7472:"814f3328",7643:"a6aa9e1f",7948:"308047c4",8209:"01a85c17",8401:"17896441",8609:"925b3f96",8737:"7661071f",8863:"f55d3e7a",8955:"fbf24e30",8974:"2728d12e",9048:"a94703ab",9262:"18c41134",9325:"59362658",9328:"e273c56f",9647:"5e95c892",9858:"36994c47"}[e]||e)+"."+{181:"9b61320d",301:"cf0f3828",867:"b26f7d80",1107:"48dca112",1160:"ef05da87",1235:"0a4105fd",1538:"436c6248",1610:"7acfd919",1724:"735b4dc7",1903:"e33e5ec2",1953:"f3bdf7fe",1972:"74f7a5bf",1974:"f25cbe70",2237:"fa57efe2",2711:"f7363d14",2748:"07816261",3098:"46db9f73",3249:"8a07a3db",3347:"6c2206aa",3637:"02363467",3694:"e33f9562",3940:"80bd5666",3976:"7e073618",4037:"7a1b0209",4059:"d5d66b26",4134:"9f05b3fe",4195:"8ad3526d",4212:"c875c8c9",4583:"a20146d2",4736:"a672af74",4813:"28885f22",5005:"4e8772e5",5557:"a1d998ab",5636:"aada1bc4",5742:"d5a03dba",6061:"1a82c0b2",6969:"20f613b9",7052:"90e10516",7098:"58c11469",7472:"0009509e",7643:"bcf774a2",7948:"716e4cae",8209:"ba81d3c4",8401:"e4164eef",8609:"bd0de23f",8737:"73364917",8863:"262f8ff5",8955:"4c7d01f3",8974:"7e139a60",9048:"b343996a",9262:"52ccdb54",9325:"b39ac2dd",9328:"1d9d3ab9",9647:"5406a630",9858:"da1fcc95"}[e]+".js",o.miniCssF=e=>{},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},t="spellogram:",o.l=(e,a,c,f)=>{if(r[e])r[e].push(a);else{var b,d;if(void 0!==c)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==t+c){b=l;break}}b||(d=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,o.nc&&b.setAttribute("nonce",o.nc),b.setAttribute("data-webpack",t+c),b.src=e),r[e]=[a];var u=(a,c)=>{b.onerror=b.onload=null,clearTimeout(s);var t=r[e];if(delete r[e],b.parentNode&&b.parentNode.removeChild(b),t&&t.forEach((e=>e(c))),a)return a(c)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=u.bind(null,b.onerror),b.onload=u.bind(null,b.onload),d&&document.head.appendChild(b)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.p="/spellogram/",o.gca=function(e){return e={17896441:"8401",59362658:"9325","3baaae34":"181",bbc09831:"301","33fc5bb8":"867","4ee117cb":"1107","8939cc48":"1160",a7456010:"1235","46ee208c":"1610",dff1c289:"1724",acecf23e:"1903","1e4232ab":"1953","73664a40":"1972","5c868d36":"1974","9e4087bc":"2711","822bd8ab":"2748","533a09ca":"3098",ccc49370:"3249",f4f34a3a:"3637","8717b14a":"3694",ae6e0fa3:"3940","0e384e19":"3976","0c9528b7":"4037","6efc1b83":"4059","393be207":"4134",b33301fd:"4195","621db11d":"4212","1df93b7f":"4583",e44a2883:"4736","6875c492":"4813","63e22c6e":"5005",d9f32620:"5557","80330ba4":"5636",aba21aa0:"5742","1f391b9e":"6061","14eb3368":"6969",d7375a8d:"7052",a7bd4aaa:"7098","814f3328":"7472",a6aa9e1f:"7643","308047c4":"7948","01a85c17":"8209","925b3f96":"8609","7661071f":"8737",f55d3e7a:"8863",fbf24e30:"8955","2728d12e":"8974",a94703ab:"9048","18c41134":"9262",e273c56f:"9328","5e95c892":"9647","36994c47":"9858"}[e]||e,o.p+o.u(e)},(()=>{var e={5354:0,1869:0};o.f.j=(a,c)=>{var r=o.o(e,a)?e[a]:void 0;if(0!==r)if(r)c.push(r[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var t=new Promise(((c,t)=>r=e[a]=[c,t]));c.push(r[2]=t);var f=o.p+o.u(a),b=new Error;o.l(f,(c=>{if(o.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var t=c&&("load"===c.type?"missing":c.type),f=c&&c.target&&c.target.src;b.message="Loading chunk "+a+" failed.\n("+t+": "+f+")",b.name="ChunkLoadError",b.type=t,b.request=f,r[1](b)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,c)=>{var r,t,f=c[0],b=c[1],d=c[2],n=0;if(f.some((a=>0!==e[a]))){for(r in b)o.o(b,r)&&(o.m[r]=b[r]);if(d)var i=d(o)}for(a&&a(c);n<f.length;n++)t=f[n],o.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return o.O(i)},c=self.webpackChunkspellogram=self.webpackChunkspellogram||[];c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c))})()})();