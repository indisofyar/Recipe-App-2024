!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var r,n={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",f=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(r){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),u=new T(n||[]);return a(i,"_invoke",{value:S(t,r,u)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=h;var d="suspendedStart",y="suspendedYield",v="executing",g="completed",m={};function w(){}function b(){}function x(){}var _={};s(_,c,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(C([])));k&&k!==o&&i.call(k,c)&&(_=k);var E=x.prototype=w.prototype=Object.create(_);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(e,r){function n(o,a,u,c){var f=p(e[o],e,a);if("throw"!==f.type){var l=f.arg,s=l.value;return s&&"object"==t(s)&&i.call(s,"__await")?r.resolve(s.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(s).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,c)}))}c(f.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function S(t,e,n){var o=d;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:r,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=P(u,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var f=p(t,e,n);if("normal"===f.type){if(o=n.done?g:y,f.arg===m)continue;return{value:f.arg,done:n.done}}"throw"===f.type&&(o=g,n.method="throw",n.arg=f.arg)}}}function P(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,P(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(i.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return a.next=a}}throw new TypeError(t(e)+" is not iterable")}return b.prototype=x,a(E,"constructor",{value:x,configurable:!0}),a(x,"constructor",{value:b,configurable:!0}),b.displayName=s(x,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},j(O.prototype),s(O.prototype,f,(function(){return this})),n.AsyncIterator=O,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new O(h(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(E),s(E,l,"Generator"),s(E,c,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=C,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return u.type="throw",u.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),f=i.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!f)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),m}},n}function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}System.register(["./index-legacy-595d99ac.js"],(function(t,n){"use strict";var o,i,a,u,c,f,l,s,h,p,d,y,v,g,m,w,b,x,_,L,k,E,j,O;return{setters:[function(t){o=t.e,i=t.r,a=t.D,u=t.af,c=t.a,f=t.m,l=t.V,s=t.g,h=t.i,p=t.j,d=t.k,y=t.u,v=t.q,g=t.H,m=t.ag,w=t.ah,b=t.ai,x=t.aj,_=t.ak,L=t.t,k=t.x,E=t.A,j=t.B,O=t._}],execute:function(){var n=document.createElement("style");n.textContent="ion-fab-button[data-v-2809ce73]{--background: var(--ion-color-step-150, #ffffff);--background-hover: var(--ion-color-step-200, #f2f2f2);--background-focused: var(--ion-color-step-250, #d9d9d9);--color: var(--ion-color-primary, #3880ff)}\n",document.head.appendChild(n);var S=o({__name:"MealPlanner",setup:function(t){i("all");var n=a();u();var o=i([]),O=function(){var t,i=(t=e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==o.value.length){t.next=7;break}return t.next=3,n.dispatch("loadSessionData");case 3:return t.next=5,n.dispatch("loadSpeakerData");case 5:return t.next=7,n.dispatch("fetchTracks");case 7:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))});return function(){return i.apply(this,arguments)}}();c((function(){f.enable(!0),O()}));var S=l(),P=function(){S.push({name:"recipe-bank"})},N=function(){S.push({name:"select-schedule"})};return function(t,e){return s(),h(y(j),null,{default:p((function(){return[d(y(v)),d(y(E),{fullscreen:!0},{default:p((function(){return[d(y(g),null,{default:p((function(){return[d(y(m),{fixed:""},{default:p((function(){return[d(y(w),{"align-items-stretch":""},{default:p((function(){return[d(y(b),{size:"12","size-md":"6"},{default:p((function(){return[d(y(x),{class:"speaker-card"},{default:p((function(){return[d(y(_),{onClick:e[0]||(e[0]=function(t){return y(S).push({name:"select-schedule"})}),style:{"text-align":"center"}},{default:p((function(){return e[1]||(e[1]=[L(" No schedule this week ")])})),_:1}),d(y(_),{style:{"text-align":"center"}},{default:p((function(){return[d(y(k),{onClick:N},{default:p((function(){return e[2]||(e[2]=[L("Create schedule")])})),_:1})]})),_:1})]})),_:1}),d(y(x),{class:"speaker-card"},{default:p((function(){return[d(y(_),{style:{"text-align":"center"}},{default:p((function(){return e[3]||(e[3]=[L(" Recipe Bank ")])})),_:1}),d(y(_),{style:{"text-align":"center"}},{default:p((function(){return[d(y(k),{onClick:P},{default:p((function(){return e[4]||(e[4]=[L("View Recipes")])})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})}}});t("default",O(S,[["__scopeId","data-v-2809ce73"]]))}}}))}();