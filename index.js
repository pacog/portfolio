!function(e){function t(t){for(var o,r,i=t[0],a=t[1],c=0,s=[];c<i.length;c++)r=i[c],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&s.push(n[r][0]),n[r]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(l&&l(t);s.length;)s.shift()()}var o={},n={0:0};function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],o=n[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise((function(t,r){o=n[e]=[t,r]}));t.push(o[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=function(e){return r.p+""+e+".index.js"}(e);var l=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(s);var o=n[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,o[1](l)}n[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},r.m=e,r.c=o,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/portfolio/",r.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=a;r(r.s=1)}([function(e,t,o){e.exports=o.p+"07b33747b4c2a09fe36e2ff8858c7437.jpg"},function(e,t,o){"use strict";o.r(t);o(2);var n=o(0),r=o.n(n);o.e(1).then(o.bind(null,6)).then(({triangulator:e})=>{e({url:r.a,svg:document.querySelector("#svg-bg")})})},function(e,t,o){var n=o(3),r=o(4);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(n(r,i),r.locals?r.locals:{});e.exports=a},function(e,t,o){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),a=[];function c(e){for(var t=-1,o=0;o<a.length;o++)if(a[o].identifier===e){t=o;break}return t}function l(e,t){for(var o={},n=[],r=0;r<e.length;r++){var i=e[r],l=t.base?i[0]+t.base:i[0],s=o[l]||0,p="".concat(l," ").concat(s);o[l]=s+1;var d=c(p),u={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(u)):a.push({identifier:p,updater:m(u,t),references:1}),n.push(p)}return n}function s(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var p,d=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function u(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=d(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,o){var n=o.css,r=o.media,i=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var b=null,h=0;function m(e,t){var o,n,r;if(t.singleton){var i=h++;o=b||(b=s(t)),n=u.bind(null,o,i,!1),r=u.bind(null,o,i,!0)}else o=s(t),n=f.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=c(o[n]);a[r].references--}for(var i=l(e,t),s=0;s<o.length;s++){var p=c(o[s]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}o=i}}}},function(e,t,o){(t=o(5)(!1)).push([e.i,"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}body{background:#fff}h1,h2{font-family:'Raleway', sans-serif}html{font-family:'Roboto', sans-serif;color:#1C140D;font-size:16px}@media (min-width: 800px){html{font-size:18px}}@media (min-width: 1200px){html{font-size:20px}}h1{font-size:3em}h2{font-size:2.5em}h3{font-size:2em}#svg-bg{width:100vmax;height:100vmax;position:absolute;top:50%;margin-top:-50vmax;left:0;z-index:5}@supports (object-fit: cover){#svg-bg{object-fit:cover;top:auto;left:0;right:0;bottom:0;margin-top:0}}.title-container{height:75vh;position:relative;overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:40px}.title-container .title-content{position:relative;z-index:20}.title-container:before{content:'';display:block;position:absolute;z-index:10;top:0;left:0;right:0;bottom:0;background:linear-gradient(to bottom, transparent, #fff)}.content{max-width:800px;margin:0 auto;padding:0 20px;width:100%}h1{margin-bottom:0.1em}h2{color:#5bc528}h3{margin-top:2em;margin-bottom:1em;position:relative;display:inline-block;color:white;padding:0 10px}h3:before{content:'';background:rgba(28,20,13,0.9);position:absolute;z-index:-1;display:block;bottom:-5px;left:-4px;height:27px;right:-3px}h3:after{content:'';background:rgba(91,197,40,0.9);position:absolute;z-index:-1;display:block;top:-5px;left:-1px;height:24px;right:-10px}a{color:#5bc528}a:hover{color:#20460e}a:active{color:#347017}a:visited{color:#5bc528}a:hover{color:#20460e}.projects{display:flex;flex-wrap:wrap}.project{width:50%;padding:30px}.project-image-container{position:relative}.project-image-container:before{display:block;content:'';padding-top:100%}.project-link{text-decoration:none;display:block}.project-image{object-fit:cover;width:100%;height:100%;position:absolute;top:0;left:0;right:0;bottom:0}.project-title{color:white;border-top:solid 4px #5bc528;padding:10px 0;color:#1C140D;font-size:1.5em;font-family:'Raleway', sans-serif}.project-link:hover .project-title{text-decoration:underline;color:#479b1f}.project-description{padding:5px 0;padding-top:0;color:#565657;line-height:1.4;margin-bottom:5px}.project-extra-link{margin-bottom:15px}.project-tag{display:inline-block;background:rgba(91,197,40,0.7);color:white;font-size:0.60em;padding:5px 10px;margin-right:5px;margin-bottom:5px;border-radius:5px}@media (max-width: 500px){.project{width:100%;padding:30px 0}}.contact-link{margin-bottom:10px}footer{text-align:center;font-size:0.75em;color:#565657;padding:20px;margin-top:40px;border-top:1px solid #5bc528}footer p{margin-bottom:0.75em}\n",""]),e.exports=t},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=(a=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[o].concat(i).concat([r]).join("\n")}var a,c,l;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);n&&r[l[0]]||(o&&(l[2]?l[2]="".concat(o," and ").concat(l[2]):l[2]=o),t.push(l))}},t}}]);