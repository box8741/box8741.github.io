(self.webpackChunkmin_blog=self.webpackChunkmin_blog||[]).push([[410],{7228:function(t){t.exports=function(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n},t.exports.__esModule=!0,t.exports.default=t.exports},2858:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},3646:function(t,r,e){var n=e(7228);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},6860:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},3884:function(t){t.exports=function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}},t.exports.__esModule=!0,t.exports.default=t.exports},521:function(t){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},8206:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},3038:function(t,r,e){var n=e(2858),o=e(3884),a=e(379),i=e(521);t.exports=function(t,r){return n(t)||o(t,r)||a(t,r)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},319:function(t,r,e){var n=e(3646),o=e(6860),a=e(379),i=e(8206);t.exports=function(t){return n(t)||o(t)||a(t)||i()},t.exports.__esModule=!0,t.exports.default=t.exports},379:function(t,r,e){var n=e(7228);t.exports=function(t,r){if(t){if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},7091:function(t){"use strict";var r="%[a-f0-9]{2}",e=new RegExp(r,"gi"),n=new RegExp("("+r+")+","gi");function o(t,r){try{return decodeURIComponent(t.join(""))}catch(a){}if(1===t.length)return t;r=r||1;var e=t.slice(0,r),n=t.slice(r);return Array.prototype.concat.call([],o(e),o(n))}function a(t){try{return decodeURIComponent(t)}catch(a){for(var r=t.match(e),n=1;n<r.length;n++)r=(t=o(r,n).join("")).match(e);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(r){return function(t){for(var e={"%FE%FF":"��","%FF%FE":"��"},o=n.exec(t);o;){try{e[o[0]]=decodeURIComponent(o[0])}catch(r){var i=a(o[0]);i!==o[0]&&(e[o[0]]=i)}o=n.exec(t)}e["%C2"]="�";for(var u=Object.keys(e),c=0;c<u.length;c++){var l=u[c];t=t.replace(new RegExp(l,"g"),e[l])}return t}(t)}}},8616:function(t){"use strict";t.exports=function(t,r){for(var e={},n=Object.keys(t),o=Array.isArray(r),a=0;a<n.length;a++){var i=n[a],u=t[i];(o?-1!==r.indexOf(i):r(i,u,t))&&(e[i]=u)}return e}},2203:function(t,r,e){"use strict";var n=e(9713),o=e(3038),a=e(319);function i(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,r){if(!t)return;if("string"==typeof t)return u(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(t,r)}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return i=t.done,t},e:function(t){c=!0,a=t},f:function(){try{i||null==e.return||e.return()}finally{if(c)throw a}}}}function u(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}var c=e(8936),l=e(7091),s=e(4734),f=e(8616),p=Symbol("encodeFragmentIdentifier");function d(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(t,r){return r.encode?r.strict?c(t):encodeURIComponent(t):t}function g(t,r){return r.decode?l(t):t}function y(t){return Array.isArray(t)?t.sort():"object"==typeof t?y(Object.keys(t)).sort((function(t,r){return Number(t)-Number(r)})).map((function(r){return t[r]})):t}function v(t){var r=t.indexOf("#");return-1!==r&&(t=t.slice(0,r)),t}function x(t){var r=(t=v(t)).indexOf("?");return-1===r?"":t.slice(r+1)}function b(t,r){return r.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!r.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function h(t,r){d((r=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},r)).arrayFormatSeparator);var e=function(t){var r;switch(t.arrayFormat){case"index":return function(t,e,n){r=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),r?(void 0===n[t]&&(n[t]={}),n[t][r[1]]=e):n[t]=e};case"bracket":return function(t,e,n){r=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),r?void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=[e]:n[t]=e};case"colon-list-separator":return function(t,e,n){r=/(:list)$/.exec(t),t=t.replace(/:list$/,""),r?void 0!==n[t]?n[t]=[].concat(n[t],e):n[t]=[e]:n[t]=e};case"comma":case"separator":return function(r,e,n){var o="string"==typeof e&&e.includes(t.arrayFormatSeparator),a="string"==typeof e&&!o&&g(e,t).includes(t.arrayFormatSeparator);e=a?g(e,t):e;var i=o||a?e.split(t.arrayFormatSeparator).map((function(r){return g(r,t)})):null===e?e:g(e,t);n[r]=i};case"bracket-separator":return function(r,e,n){var o=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),o){var a=null===e?[]:e.split(t.arrayFormatSeparator).map((function(r){return g(r,t)}));void 0!==n[r]?n[r]=[].concat(n[r],a):n[r]=a}else n[r]=e?g(e,t):e};default:return function(t,r,e){void 0!==e[t]?e[t]=[].concat(e[t],r):e[t]=r}}}(r),n=Object.create(null);if("string"!=typeof t)return n;if(!(t=t.trim().replace(/^[?#&]/,"")))return n;var a,u=i(t.split("&"));try{for(u.s();!(a=u.n()).done;){var c=a.value;if(""!==c){var l=s(r.decode?c.replace(/\+/g," "):c,"="),f=o(l,2),p=f[0],m=f[1];m=void 0===m?null:["comma","separator","bracket-separator"].includes(r.arrayFormat)?m:g(m,r),e(g(p,r),m,n)}}}catch(S){u.e(S)}finally{u.f()}for(var v=0,x=Object.keys(n);v<x.length;v++){var h=x[v],w=n[h];if("object"==typeof w&&null!==w)for(var k=0,j=Object.keys(w);k<j.length;k++){var Z=j[k];w[Z]=b(w[Z],r)}else n[h]=b(w,r)}return!1===r.sort?n:(!0===r.sort?Object.keys(n).sort():Object.keys(n).sort(r.sort)).reduce((function(t,r){var e=n[r];return Boolean(e)&&"object"==typeof e&&!Array.isArray(e)?t[r]=y(e):t[r]=e,t}),Object.create(null))}r.extract=x,r.parse=h,r.stringify=function(t,r){if(!t)return"";d((r=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},r)).arrayFormatSeparator);for(var e=function(e){return r.skipNull&&null==t[e]||r.skipEmptyString&&""===t[e]},n=function(t){switch(t.arrayFormat){case"index":return function(r){return function(e,n){var o=e.length;return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[[m(r,t),"[",o,"]"].join("")]:[[m(r,t),"[",m(o,t),"]=",m(n,t)].join("")])}};case"bracket":return function(r){return function(e,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[[m(r,t),"[]"].join("")]:[[m(r,t),"[]=",m(n,t)].join("")])}};case"colon-list-separator":return function(r){return function(e,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[[m(r,t),":list="].join("")]:[[m(r,t),":list=",m(n,t)].join("")])}};case"comma":case"separator":case"bracket-separator":var r="bracket-separator"===t.arrayFormat?"[]=":"=";return function(e){return function(n,o){return void 0===o||t.skipNull&&null===o||t.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[m(e,t),r,m(o,t)].join("")]:[[n,m(o,t)].join(t.arrayFormatSeparator)])}};default:return function(r){return function(e,n){return void 0===n||t.skipNull&&null===n||t.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[m(r,t)]:[[m(r,t),"=",m(n,t)].join("")])}}}}(r),o={},i=0,u=Object.keys(t);i<u.length;i++){var c=u[i];e(c)||(o[c]=t[c])}var l=Object.keys(o);return!1!==r.sort&&l.sort(r.sort),l.map((function(e){var o=t[e];return void 0===o?"":null===o?m(e,r):Array.isArray(o)?0===o.length&&"bracket-separator"===r.arrayFormat?m(e,r)+"[]":o.reduce(n(e),[]).join("&"):m(e,r)+"="+m(o,r)})).filter((function(t){return t.length>0})).join("&")},r.parseUrl=function(t,r){r=Object.assign({decode:!0},r);var e=s(t,"#"),n=o(e,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:h(x(t),r)},r&&r.parseFragmentIdentifier&&i?{fragmentIdentifier:g(i,r)}:{})},r.stringifyUrl=function(t,e){e=Object.assign(n({encode:!0,strict:!0},p,!0),e);var o=v(t.url).split("?")[0]||"",a=r.extract(t.url),i=r.parse(a,{sort:!1}),u=Object.assign(i,t.query),c=r.stringify(u,e);c&&(c="?".concat(c));var l=function(t){var r="",e=t.indexOf("#");return-1!==e&&(r=t.slice(e)),r}(t.url);return t.fragmentIdentifier&&(l="#".concat(e[p]?m(t.fragmentIdentifier,e):t.fragmentIdentifier)),"".concat(o).concat(c).concat(l)},r.pick=function(t,e,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var a=r.parseUrl(t,o),i=a.url,u=a.query,c=a.fragmentIdentifier;return r.stringifyUrl({url:i,query:f(u,e),fragmentIdentifier:c},o)},r.exclude=function(t,e,n){var o=Array.isArray(e)?function(t){return!e.includes(t)}:function(t,r){return!e(t,r)};return r.pick(t,o,n)}},4734:function(t){"use strict";t.exports=function(t,r){if("string"!=typeof t||"string"!=typeof r)throw new TypeError("Expected the arguments to be of type `string`");if(""===r)return[t];var e=t.indexOf(r);return-1===e?[t]:[t.slice(0,e),t.slice(e+r.length)]}},8936:function(t){"use strict";t.exports=function(t){return encodeURIComponent(t).replace(/[!'()*]/g,(function(t){return"%".concat(t.charCodeAt(0).toString(16).toUpperCase())}))}},9335:function(t,r,e){"use strict";e.r(r),e.d(r,{default:function(){return R}});var n=e(7462),o=e(7294),a=e(2203),i=e(1823),u=e(4469),c=e(3366),l=e(6771),s=e(5444),f=e(3431),p=["active"];var d=(0,l.Z)("div",{target:"e1bc20nu1"})({name:"1lw616b",styles:"display:flex;flex-wrap:wrap;width:768px;margin:20px auto;@media (max-width: 768px){width:100%;margin-top:50px;padding:0 20px;}"}),m=(0,l.Z)((function(t){t.active;var r=(0,c.Z)(t,p);return(0,f.tZ)(s.rU,r)}),{target:"e1bc20nu0"})("margin-right:14px;margin-bottom:12px;padding:3px 12px;font-size:14px;font-weight:bold;color:var(--font-gray);cursor:pointer;border-radius:50px;box-shadow:",(function(t){return t.active?"var(--shadow-enabled)":"var(--shadow-disabled)"}),";&:last-of-type{margin-right:0;}&:hover{color:var(--font-gray);box-shadow:",(function(t){return!t.active&&"var(--shadow-hover)"}),";}"),g=function(t){var r=t.selectedCategory,e=t.categoryList;return(0,f.tZ)(d,null,Object.entries(e).map((function(t){var e=t[0],n=t[1];return(0,f.tZ)(m,{to:"/blog/?category="+e,active:e===r,key:e},e,"(",n,")")})))},y=e(6125);var v=(0,l.Z)("div",{target:"e19xvmvh7"})({name:"c3njse",styles:"display:-webkit-box;overflow:hidden;margin-bottom:3px;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:20px;font-weight:700;color:var(--font)"}),x=(0,l.Z)(s.rU,{target:"e19xvmvh6"})("display:flex;padding:16px;border-top:1px solid var(--border);cursor:pointer;&:last-of-type{margin-bottom:0;border-bottom:1px solid var(--border);}&:hover ",v,"{text-decoration:underline;}"),b=(0,l.Z)(y.G,{target:"e19xvmvh5"})({name:"18t8hgp",styles:"@media (max-width: 768px){display:none;}"}),h=(0,l.Z)("div",{target:"e19xvmvh4"})({name:"1do7u82",styles:"flex:1;display:flex;flex-direction:column;padding:15px"}),w=(0,l.Z)("div",{target:"e19xvmvh3"})({name:"xm5j9w",styles:"font-size:14px;font-weight:400;opacity:0.7"}),k=(0,l.Z)("div",{target:"e19xvmvh2"})({name:"1bobky6",styles:"display:flex;flex-wrap:wrap;margin-top:10px;margin:10px -5px"}),j=(0,l.Z)("div",{target:"e19xvmvh1"})("margin:2.5px 5px;padding:3px 8px;border-radius:50px;font-size:14px;font-weight:bold;color:var(--font-gray);box-shadow:",(function(t){return t.active?"var(--shadow-enabled)":"var(--shadow-disabled)"}),";"),Z=(0,l.Z)("div",{target:"e19xvmvh0"})({name:"1wehmme",styles:"display:-webkit-box;overflow:hidden;margin-top:auto;text-overflow:ellipsis;white-space:normal;overflow-wrap:break-word;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:16px;opacity:0.8"}),S=function(t){var r=t.title,e=t.date,n=t.categories,o=t.summary,a=t.thumbnail.childImageSharp.gatsbyImageData,i=t.selectedCategory,u=t.link;return(0,f.tZ)(x,{to:u},(0,f.tZ)(b,{image:a,alt:"Post Item Image"}),(0,f.tZ)(h,null,(0,f.tZ)(v,null,r),(0,f.tZ)(w,null,e),(0,f.tZ)(k,null,n.map((function(t){return(0,f.tZ)(j,{key:t,active:t===i},t)}))),(0,f.tZ)(Z,null,o)))},A=function(t,r){var e=(0,o.useRef)(null),n=(0,o.useRef)(null),a=(0,o.useState)(1),i=a[0],u=a[1],c=(0,o.useMemo)((function(){return r.filter((function(r){var e=r.node.frontmatter.categories;return"All"===t||e.includes(t)}))}),[t]);return(0,o.useEffect)((function(){n.current=new IntersectionObserver((function(t,r){var e=t[0];e.isIntersecting&&(r.unobserve(e.target),u((function(t){return t+1})))}))}),[]),(0,o.useEffect)((function(){return u(1)}),[t]),(0,o.useEffect)((function(){var t,r;if(!(10*i>=c.length||0===(null===(t=e.current)||void 0===t?void 0:t.children.length)||null===e.current||null===n.current))return n.current.observe(null===(r=e.current)||void 0===r?void 0:r.children[e.current.children.length-1]),function(){var t;return null===(t=n.current)||void 0===t?void 0:t.disconnect()}}),[i,t]),{containerRef:e,postList:c.slice(0,10*i)}};var I=(0,l.Z)("div",{target:"e17q7xrg2"})({name:"10xhks6",styles:"width:768px;margin:0 auto;@media (max-width: 768px){width:100%;padding:0 20px;}"}),O=(0,l.Z)("div",{target:"e17q7xrg1"})({name:"gu05je",styles:"padding:20px 0;margin-bottom:60px;@media (max-width: 768px){grid-template-columns:1fr;}"}),F=(0,l.Z)("div",{target:"e17q7xrg0"})({name:"t2u80t",styles:"font-size:32px;font-weight:600;margin:0 0 16px 12px"}),E=function(t){var r=t.selectedCategory,e=t.posts,o=A(r,e),a=o.containerRef,i=o.postList;return(0,f.tZ)(I,null,(0,f.tZ)(O,{ref:a},(0,f.tZ)(F,null,"Posts ",i.length),i.map((function(t){var e=t.node,o=e.id,a=e.fields.slug,i=e.frontmatter;return(0,f.tZ)(S,(0,n.Z)({},i,{selectedCategory:r,key:o,link:a}))}))))};var C=(0,l.Z)("div",{target:"eeek0b71"})({name:"1al81r5",styles:"display:flex;width:768px;margin:40px auto;@media (max-width: 768px){width:100%;padding:0 20px;margin:20px auto;}"}),_=(0,l.Z)("span",{target:"eeek0b70"})({name:"9kg05m",styles:"left:12px;font-size:80px;font-weight:bold;@media (max-width: 768px){font-size:60px;left:32px;}"}),U=function(t){var r=t.children;return(0,f.tZ)(C,null,(0,f.tZ)(_,null,r))},M={title:"Developer Min | Blog",description:"개발 블로그"},R=function(t){var r=t.location,e=r.href,c=r.search,l=t.data,s=l.allMarkdownRemark.edges,p=l.file.publicURL,d=a.parse(c),m="string"==typeof d.category&&d.category?d.category:"All",y=(0,o.useMemo)((function(){return s.reduce((function(t,r){return r.node.frontmatter.categories.forEach((function(r){void 0===t[r]?t[r]=1:t[r]++})),t.All++,t}),{All:0})}),[]);return(0,f.tZ)(i.Z,(0,n.Z)({},M,{url:e,image:p}),(0,f.tZ)(u.Z,null,(0,f.tZ)(U,null,"Blog"),(0,f.tZ)(g,{selectedCategory:m,categoryList:y}),(0,f.tZ)(E,{selectedCategory:m,posts:s})))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-736c5e1dce450e7cd107.js.map