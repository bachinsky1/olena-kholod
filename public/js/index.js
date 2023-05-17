/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var t={866:(t,e,n)=>{n.r(e),n.d(e,{BrowserHistoryEngine:()=>w,compose:()=>T,createRouter:()=>S,pipe:()=>$});var r=function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},r.apply(this,arguments)};function o(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function c(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(a,c)}s((r=r.apply(t,e||[])).next())}))}function i(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var a=function t(e,n,r){return e instanceof RegExp?function(t,e){if(!e)return t;var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t}(e,n):Array.isArray(e)?function(e,n,r){for(var o=[],i=0;i<e.length;i++)o.push(t(e[i],n,r).source);return new RegExp("(?:"+o.join("|")+")",v(r))}(e,n,r):function(t,e,n){return m(p(t,n),e,n)}(e,n,r)},c=p,s=f,u=m,l="/",d=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function p(t,e){for(var n,r=[],o=0,i=0,a="",c=e&&e.delimiter||l,s=e&&e.whitelist||void 0,u=!1;null!==(n=d.exec(t));){var p=n[0],f=n[1],v=n.index;if(a+=t.slice(i,v),i=v+p.length,f)a+=f[1],u=!0;else{var m="",y=n[2],w=n[3],b=n[4],x=n[5];if(!u&&a.length){var E=a.length-1,S=a[E];(!s||s.indexOf(S)>-1)&&(m=S,a=a.slice(0,E))}a&&(r.push(a),a="",u=!1);var T="+"===x||"*"===x,L="?"===x||"*"===x,$=w||b,C=m||c;r.push({name:y||o++,prefix:m,delimiter:C,optional:L,repeat:T,pattern:$?h($):"[^"+g(C===c?C:C+c)+"]+?"})}}return(a||i<t.length)&&r.push(a+t.substr(i)),r}function f(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",v(e)));return function(e,r){for(var o="",i=r&&r.encode||encodeURIComponent,a=!r||!1!==r.validate,c=0;c<t.length;c++){var s=t[c];if("string"!=typeof s){var u,l=e?e[s.name]:void 0;if(Array.isArray(l)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===l.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(u=i(l[d],s),a&&!n[c].test(u))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');o+=(0===d?s.prefix:s.delimiter)+u}}else if("string"!=typeof l&&"number"!=typeof l&&"boolean"!=typeof l){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}else{if(u=i(String(l),s),a&&!n[c].test(u))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+u+'"');o+=s.prefix+u}}else o+=s}return o}}function g(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function h(t){return t.replace(/([=!:$/()])/g,"\\$1")}function v(t){return t&&t.sensitive?"":"i"}function m(t,e,n){for(var r=(n=n||{}).strict,o=!1!==n.start,i=!1!==n.end,a=n.delimiter||l,c=[].concat(n.endsWith||[]).map(g).concat("$").join("|"),s=o?"^":"",u=0;u<t.length;u++){var d=t[u];if("string"==typeof d)s+=g(d);else{var p=d.repeat?"(?:"+d.pattern+")(?:"+g(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;e&&e.push(d),d.optional?d.prefix?s+="(?:"+g(d.prefix)+"("+p+"))?":s+="("+p+")?":s+=g(d.prefix)+"("+p+")"}}if(i)r||(s+="(?:"+g(a)+")?"),s+="$"===c?"$":"(?="+c+")";else{var f=t[t.length-1],h="string"==typeof f?f[f.length-1]===a:void 0===f;r||(s+="(?:"+g(a)+"(?="+c+"))?"),h||(s+="(?="+g(a)+"|"+c+")")}return new RegExp(s,v(n))}a.parse=c,a.compile=function(t,e){return f(p(t,e),e)},a.tokensToFunction=s,a.tokensToRegExp=u;var y={bindClick:!0},w=function(t){return void 0===t&&(t={}),function(){var e,n=r(r({},y),t),a=[],c=[],s=null,u=function(t){return o(void 0,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,a.reduce((function(e,n){return e.then((function(){return n(t)}))}),Promise.resolve())];case 1:return e.sent(),[2]}}))}))},l=function(t){return o(void 0,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return[4,c.reduce((function(e,n){return e.then((function(){return n(t)}))}),Promise.resolve())];case 1:return e.sent(),[2]}}))}))},d=function(t){for(var n=t.target;n&&"A"!==n.nodeName.toUpperCase();)n=n.parentNode;if(n&&"A"===n.nodeName.toUpperCase()){if(n.hasAttribute("data-routerjs-ignore")||n.hasAttribute("download")||n.hasAttribute("target")||"external"===n.getAttribute("rel"))return;var r=n.getAttribute("href");if(r&&(function(t){return new URL(t,window.location.origin).origin!==window.location.origin}(r)||0===r.indexOf("mailto:")||0===r.indexOf("tel:")))return;t.preventDefault(),e.navigate(n.pathname)}},p=function(t){return o(void 0,void 0,void 0,(function(){var t;return i(this,(function(e){switch(e.label){case 0:return t=window.location.pathname,null===s?[3,2]:[4,l(s)];case 1:e.sent(),e.label=2;case 2:return s=t,[4,u(t)];case 3:return e.sent(),[2]}}))}))};return e={setup:function(){window.addEventListener("popstate",p),n.bindClick&&window.addEventListener("click",d)},teardown:function(){window.removeEventListener("popstate",p),window.removeEventListener("click",d)},addRouteChangeHandler:function(t){a.push(t)},addRouteExitHandler:function(t){c.push(t)},navigate:function(t){return o(void 0,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return""+window.location.pathname+window.location.search===t?[3,4]:null===s?[3,2]:[4,l(s)];case 1:e.sent(),e.label=2;case 2:return s=t,window.history.pushState({},"",t),[4,u(t)];case 3:e.sent(),e.label=4;case 4:return[2]}}))}))},back:function(){window.history.back()},forward:function(){window.history.forward()},go:function(t){window.history.go(t)},setLocation:function(t){window.location.pathname!==t&&window.history.pushState({},"",t)},run:function(t){var e=""+window.location.pathname+window.location.search,n=t||e;e!==n&&window.history.pushState({},"",n),u(n)}}}},b=/\/*$/,x=function(t){var e=function(n,a,c){return o(void 0,void 0,void 0,(function(){var o,s,u,l,d,p,f,g;return i(this,(function(i){switch(i.label){case 0:if(!(n.length>0))return[3,2];if(o=n[0],s={},u=[],l=c.split("?")[0],d=l.match(o.path)){for(p=0,p=0;p<o.paramNames.length;p++)s[o.paramNames[p].name]=d[p+1];if(p<d.length)for(f=p;f<d.length;f++)u.push(d[f])}return g=function(t){var e=t.path,n=t.params,o=t.splats,i=e.split("?"),a=(i[0],(i[1]||"").split("&").reduce((function(t,e){var n,o=e.split("="),i=o[0],a=o[1];return i?r(r({},t),((n={})[decodeURIComponent(i)]=decodeURIComponent(a),n)):t}),{})),c=!1,s={get:function(t,e){return s.params&&void 0!==s.params[t]?s.params[t]:s.query&&t in s.query?s.query[t]:void 0!==e?e:void 0},path:e,params:n,splats:o,query:a,stop:function(){c=!0},isStopped:function(){return c}};return s}({path:c,params:s,splats:u}),[4,o.callback(g,t)];case 1:if(i.sent(),!g.isStopped()&&n.length>1)return[2,e(n.slice(1),a,c)];i.label=2;case 2:return a.length>0?[4,a[0](t)]:[3,4];case 3:if(i.sent(),a.length>1)return[2,e([],a.slice(1),c)];i.label=4;case 4:return[2,Promise.resolve()]}}))}))};return e},E={ignoreCase:!1,basePath:"/",engine:w()},S=function(t){var e={routes:[],exits:[]},n=[],c=new Map,s=r(r({},E),t),u=s.engine(),l=s.basePath.replace(b,""),d=new RegExp("^"+l);c.set(500,[function(t,e){console&&console.error&&(console.error('500 - path: "'+e.path+'"'),console.error(t))}]),c.set(404,[function(t,e){console&&console.warn&&(console.warn('404 - path: "'+e.path+'"'),console.warn(t))}]);var p=function(t){return function(e){var n=e.statusCode,r=void 0===n?500:n,o=c.get(r),i=c.get("*");if(!o&&!i)throw e;o&&o.length>0&&o.forEach((function(n){n(e,t)})),i&&i.length>0&&i.forEach((function(n){n(e,t)}))}},f=function(t){return function(r){return o(void 0,void 0,void 0,(function(){var o,a,c,s,u,l,f,g,h;return i(this,(function(i){switch(i.label){case 0:for(o=e[t],a=[],c=""===(c=r.replace(d,""))?"/":c,s=""===(s=(s=r.split("?")[0]).replace(d,""))?"/":s,u=0,l=o.length;u<l;u++)o[u].path.test(s)&&a.push(u);return f=function(t){var e={path:t,set:function(t,n){e[t]=n}};return e}(c),"routes"!==t||0!==a.length?[3,1]:((g=new Error('Path "'+c+'" not matched')).statusCode=404,p(f)(g),[3,4]);case 1:return i.trys.push([1,3,,4]),[4,x(f)(a.map((function(t){return o[t]})),n,c)];case 2:return i.sent(),[3,4];case 3:return h=i.sent(),p(f)(h),[3,4];case 4:return[2]}}))}))}};u.setup(),u.addRouteChangeHandler(f("routes")),u.addRouteExitHandler(f("exits"));var g=function(t){return function(n,r){if(!r)throw new Error('Missing callback for path "'+n+'"');var o=e[t],i=[],c=a(n,i,{sensitive:!s.ignoreCase,strict:!1});o.push({url:n,path:c,paramNames:i,callback:r})}},h={get:function(t,e){return g("routes")(t,e),h},exit:function(t,e){return g("exits")(t,e),h},always:function(t){if(!t)throw new Error('A callback is mandatory when defining an "always" callback!');return n.push(t),h},error:function(t,e){return c.set(t,function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r}(c.get(t)||[],[e])),h},run:function(t){return u.run(t),h},teardown:function(){return u.teardown(),h},navigate:u.navigate,go:u.go,back:u.back,forward:u.forward,setLocation:u.setLocation,buildUrl:function(t){return""+l+t},getOptions:function(){return r(r({},s),{basePath:l,engine:void 0})},_getOptions:function(){return console.warn("@deprecated _getOptions is deprecated, use getOptions instead"),h.getOptions()},_showRoutes:function(){console.log(e)}};return h};function T(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?function(t){return t}:1===t.length?t[0]:t.reduce((function(t,e){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return t(e.apply(void 0,n))}}))}var L=function(){},$=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return T.apply(void 0,t)(L)}},830:function(t,e,n){var r=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{s(r.next(t))}catch(t){i(t)}}function c(t){try{s(r.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}s((r=r.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const o=(0,n(866).createRouter)();let i=1|Number(localStorage.getItem("currentSortType")),a=1|Number(localStorage.getItem("currentCategory"));function c(t){return r(this,void 0,void 0,(function*(){const e=document.getElementById("goodsContainer");if(null===e)return;e.innerHTML="",t=window.location.origin+t;const n=document.getElementById("spinner");null==n||n.setAttribute("style","display: flex;");const r=yield fetch(t);return null==n||n.setAttribute("style","display: none !important;"),r.ok?yield r.json():(console.log("HTTP error: "+r.status),[])}))}function s(t){const e=window.location.origin+t;history.pushState(null,"",e),o.run()}function u(t){0!==t.categories.length&&(function(){const t=document.getElementById("filter");t.innerHTML='\n        <option value="1">Cheaper first</option>\n        <option value="2">Alphabetically</option>\n        <option value="3">New first</option>\n    ',t.selectedIndex=i-1}(),function(t){const e=document.getElementById("categoriesContainer");if(null===e)return;const n=document.createElement("div");n.classList.add("list-group");for(const e of t){const t=document.createElement("a");t.setAttribute("href","#"),t.classList.add("list-group-item","list-group-item-action"),t.innerHTML=e.name+` (${e.count})`,t.dataset.category_id=e.id.toString(),t.addEventListener("click",(t=>{t.target instanceof HTMLAnchorElement&&(a=Number(t.target.dataset.category_id),localStorage.setItem("currentCategory",a.toString()),localStorage.setItem("currentSortType",i.toString()),localStorage.setItem("currentCategory",a.toString()),s(`/categories/${a}/${i}`))})),n.appendChild(t)}e.innerHTML="",e.appendChild(n)}(t.categories),function(t){const e=document.getElementById("goodsContainer");if(null!==e){e.classList.add("row"),e.classList.add("row-cols-md-4"),e.innerHTML="";for(const n of t){const t=document.createElement("div");t.classList.add("col"),t.innerHTML=`\n            <div class="card mb-4">\n                <div class="card-body">\n                    <h5 class="card-title">${n.name}</h5>\n                    <p class="card-text">${n.description}</p>\n                    <p class="card-text">${n.price.toFixed(2)}</p>\n                    <p class="card-text"><small class="text-muted">Last updated ${n.date}</small></p>\n                    <button type="button" \n                        class="btn btn-primary"\n                        data-bs-toggle="modal" \n                        data-bs-target="#myModal"\n                        id="open-modal-${n.id}">\n                        Buy this\n                    </button> \n                </div>\n            </div>`,null==e||e.appendChild(t);const r=document.querySelector(`#open-modal-${n.id}`);r&&r.addEventListener("click",(t=>{const e=document.getElementById("modal-name"),r=document.getElementById("modal-description"),o=document.getElementById("modal-price"),i=document.getElementById("modal-date");e&&(e.innerText=n.name||""),r&&(r.innerText=n.description||""),o&&(o.innerText=n.price.toFixed(2).toString()),i&&(i.innerText="Last updated "+n.date)}))}}}(t.active))}s(`/categories/${a}/${i}`),o.get("/categories",(()=>r(void 0,void 0,void 0,(function*(){const t=yield c("/api/categories");u(t),console.log(t)})))),o.get("/categories/:id",((t,e)=>r(void 0,void 0,void 0,(function*(){const e=t.params.id.toString();u(yield c(`/api/categories/${e}/${i}`))})))),o.get("/categories/:id/:sort",((t,e)=>r(void 0,void 0,void 0,(function*(){const e=t.params.id.toString();u(yield c(`/api/categories/${e}/${i}`))})))),o.get("/",(()=>r(void 0,void 0,void 0,(function*(){u(yield c("/api/categories"))})))),function(){const t=document.getElementById("myModal");t&&(t.innerHTML='\n        <div class="modal-dialog">\n            <div class="modal-content">\n\n                \x3c!-- Modal Header --\x3e\n                <div class="modal-header">\n                    <h4 class="modal-title" id="modal-name"></h4>\n                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>\n                </div>\n\n                \x3c!-- Modal body --\x3e\n                <div class="modal-body">\n                    <p id="modal-description"></p>\n                    <p id="modal-price"></p>\n                    <p id="modal-date"></p>\n                </div>\n\n                \x3c!-- Modal footer --\x3e\n                <div class="modal-footer">\n                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>\n                </div>\n\n            </div>\n        </div>\n    ')}(),function(){const t=document.getElementById("filter");t&&t.addEventListener("change",(t=>{const e=t.target,n=e.options[e.selectedIndex].value;i=Number(n),localStorage.setItem("currentSortType",i.toString()),s(`/categories/${a}/${i}`)}))}(),o.run()}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,n),i.exports}n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(830)})();