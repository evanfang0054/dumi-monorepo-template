!function(){"use strict";var t="/dumi-monorepo-template/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"dumi-monorepo-template","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.3c270202.async.js",9],["docs__config__markdownlint.md.d3fe6f17.async.js",12],["docs__guide__doc.md.b1280230.async.js",185],["docs__config__index.md.f8451bc0.async.js",253],["276.e8c51481.chunk.css",276],["276.ae1748f9.async.js",276],["dumi__pages__404__index.6b0bb182.async.js",509],["nm__dumi__theme-default__layouts__DocLayout__index.8c0070c7.async.js",519],["540.c8225a12.async.js",540],["docs__config__stylelint.md.6f24c098.async.js",596],["docs__guide__commit.md.0cf380f7.async.js",794],["docs__guide__index.md.95084f4d.async.js",825],["dumi__tmp-production__dumi__theme__ContextWrapper.8062bc9b.async.js",923],["docs__index.md.ec531449.async.js",935]],"r":{"/*":[7,9,5,6,8,13],"/":[14,5,6,8,13],"/config":[4,5,6,8,13],"/guide":[12,5,6,8,13],"/~demos/:id":[0,1,13],"/config/markdownlint":[2,5,6,8,13],"/config/stylelint":[10,5,6,8,13],"/guide/commit":[11,5,6,8,13],"/guide/doc":[3,5,6,8,13]}},{publicPath:"/dumi-monorepo-template/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();