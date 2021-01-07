var PagerDuty;PagerDuty=(()=>{"use strict";var e={337:(e,t,r)=>{function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t,n=r.queryParameters,u=r.requestTimeout,i=void 0===u?3e4:u,f=c(r,["queryParameters","requestTimeout"]);return e=l(e=new URL(e.toString()),n),t=p(t,i),a(e.toString(),3,o(o({},f),{},{headers:new Headers(o({"Content-Type":"application/json; charset=utf-8"},f.headers))}))}function a(e,t,r){return new Promise((function(n,o){fetch(e,r).then((function(u){if(0===t)return n(u);if(429===u.status){var c=r.retryTimeout;f(void 0===c?2e4:c).then((function(){a(e,t-1,r).then(n).catch(o)}))}else n(u)}))}))}r.r(t),r.d(t,{acknowledge:()=>A,all:()=>S,api:()=>w,change:()=>C,event:()=>q,resolve:()=>M,trigger:()=>R});var f=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function l(e,t){if(!t)return e;for(var r=e.searchParams,n=function(){var e=u[o],n=t[e];Array.isArray(n)?n.forEach((function(t){r.append(e,t)})):r.append(e,n)},o=0,u=Object.keys(t);o<u.length;o++)n();return e.search=r.toString(),e}function p(e,t){if(!t)return e;var r=new AbortController;return setTimeout((function(){return r.abort()}),t),o(o({},e),{},{signal:r.signal})}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){y=function(e,t){return new u(e,void 0,t)};var r=O(RegExp),n=RegExp.prototype,o=new WeakMap;function u(e,t,n){var u=r.call(this,e,t);return o.set(u,n||o.get(e)),u}function c(e,t){var r=o.get(t);return Object.keys(r).reduce((function(t,n){return t[n]=e[r[n]],t}),Object.create(null))}return b(u,r),u.prototype.exec=function(e){var t=n.exec.call(this,e);return t&&(t.groups=c(t,this)),t},u.prototype[Symbol.replace]=function(e,t){if("string"==typeof t){var r=o.get(this);return n[Symbol.replace].call(this,e,t.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+r[t]})))}if("function"==typeof t){var u=this;return n[Symbol.replace].call(this,e,(function(){var e=[];return e.push.apply(e,arguments),"object"!==s(e[e.length-1])&&e.push(c(e,u)),t.apply(this,e)}))}return n[Symbol.replace].call(this,e,t)},y.apply(this,arguments)}function b(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function O(e){var t="function"==typeof Map?new Map:void 0;return(O=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return v(e,arguments,h(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),d(n,e)})(e)}function v(e,t,r){return(v=g()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&d(o,r.prototype),o}).apply(null,arguments)}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){if(!e.endpoint&&!e.url)return function(e){var t=e,r=function(e){return w(j(j({},t),e))},n=function(e){return function(r,n){return w(j(j({endpoint:r,method:e},t),n))}};return r.get=n("get"),r.post=n("post"),r.put=n("put"),r.patch=n("patch"),r.delete=n("delete"),r.all=function(e){return S(e)},r}(e);var t,r,n,o=e.endpoint,u=e.server,c=void 0===u?"api.pagerduty.com":u,i=e.token,a=e.tokenType,f=void 0===a?e.tokenType||"token":a,l=e.url,p=e.version,s=void 0===p?2:p,y=e.data,b=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["endpoint","server","token","tokenType","url","version","data"]),O=j(j({method:"GET"},b),{},{headers:j({Accept:"application/vnd.pagerduty+json;version=".concat(s),Authorization:"".concat({bearer:"Bearer ",token:"Token token="}[f]).concat(i)},b.headers)});return r=O.method,!["PUT","POST","DELETE","PATCH"].includes(null!==(n=r.toUpperCase())&&void 0!==n?n:"GET")&&y?O.queryParameters=null!==(t=O.queryParameters)&&void 0!==t?t:y:O.body=JSON.stringify(y),T(null!=l?l:"https://".concat(c,"/").concat(o.replace(/^\/+/,"")),O)}function S(e){return w(e).then((function(e){return x([e])}))}function x(e){var t=e[e.length-1];return t.next?t.next().then((function(t){return x(e.concat([t]))})):Promise.resolve(e)}function T(e,t){return i(e,t).then((function(r){var n=r;n.response=r;var o=function(e){var t=e.match(y(/.+.com\/([0-9A-Z_a-z]+)/,{resource:1}));return t?t[1]:null}(e);return r.json().then((function(r){return n.next=function(e,t,r){if(function(e){return void 0!==e.offset}(r)){if(null!=r&&r.more&&void 0!==s(r.offset)&&r.limit)return function(){return T(e,j(j({},t),{},{queryParameters:j(j({},t.queryParameters),{},{limit:r.limit.toString(),offset:(r.limit+r.offset).toString()})}))}}else if(function(e){return void 0!==e.cursor}(r)&&null!=r&&r.cursor)return function(){return T(e,j(j({},t),{},{queryParameters:j(j({},t.queryParameters),{},{cursor:r.cursor,limit:r.limit.toString()})}))}}(e,t,r),n.data=r,n.resource=o?r[o]:null,n})).catch((function(){return Promise.resolve(n)}))}))}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function q(e){var t=e.server,r=void 0===t?"events.pagerduty.com":t,n=e.type,o=void 0===n?"event":n,u=e.data,c=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,["server","type","data"]),a="https://".concat(r,"/v2/enqueue");return"change"===o&&(a="https://".concat(r,"/v2/change/enqueue")),function(e,t){return i(e,t).then((function(e){var t=e;return e.json().then((function(r){return t.data=r,t.response=e,t}))}))}(a,E({method:"POST",body:JSON.stringify(u)},c))}var _=function(e){return function(t){return q(E(E({},t),{},{data:E(E({},t.data),{},D({},"event_action",e))}))}},R=_("trigger"),A=_("acknowledge"),M=_("resolve"),C=function(e){return q(E(E({},e),{},{type:"change"}))}}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}return r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(337)})();
//# sourceMappingURL=pdjs.js.map