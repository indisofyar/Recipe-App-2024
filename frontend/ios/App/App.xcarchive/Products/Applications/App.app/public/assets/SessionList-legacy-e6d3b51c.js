!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var n,r={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(n){f=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var o=e&&e.prototype instanceof k?e:k,a=Object.create(o.prototype),u=new A(r||[]);return i(a,"_invoke",{value:E(t,n,u)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}r.wrap=d;var p="suspendedStart",v="suspendedYield",y="executing",m="completed",g={};function k(){}function _(){}function w(){}var b={};f(b,c,(function(){return this}));var x=Object.getPrototypeOf,S=x&&x(x(I([])));S&&S!==o&&a.call(S,c)&&(b=S);var L=w.prototype=k.prototype=Object.create(b);function T(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function C(e,n){function r(o,i,u,c){var l=h(e[o],e,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&a.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):n.resolve(f).then((function(t){s.value=t,u(s)}),(function(t){return r("throw",t,u,c)}))}c(l.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(a,a):a()}})}function E(t,e,r){var o=p;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:n,done:!0}}for(r.method=a,r.arg=i;;){var u=r.delegate;if(u){var c=F(u,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=y;var l=h(t,e,r);if("normal"===l.type){if(o=r.done?m:v,l.arg===g)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function F(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,F(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),g;var a=h(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=n,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return _.prototype=w,i(L,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:_,configurable:!0}),_.displayName=f(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},T(C.prototype),f(C.prototype,l,(function(){return this})),r.AsyncIterator=C,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var i=new C(d(t,e,n,o),a);return r.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},T(L),f(L,s,"Generator"),f(L,c,(function(){return this})),f(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},r.values=I,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;j(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}},r}function n(t,e,n,r,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function u(t){n(i,o,a,u,c,"next",t)}function c(t){n(i,o,a,u,c,"throw",t)}u(void 0)}))}}function o(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy-595d99ac.js","./dateFormat-legacy-3445cff2.js"],(function(t,n){"use strict";var a,i,u,c,l,s,f,d,h,p,v,y,m,g,k,_,w,b,x,S,L,T,C,E,F,O,j,A,I,P,D,G,N,V,z,B,M,R,Y,q,H,J,K,U,W,$,Z,Q,X,tt,et,nt,rt,ot,at,it,ut,ct,lt,st,ft,dt,ht;return{setters:[function(t){a=t.e,i=t.r,u=t.am,c=t.a,l=t.an,s=t.g,f=t.i,d=t.j,h=t.k,p=t.u,v=t.q,y=t.I,m=t.l,g=t.x,k=t.t,_=t.F,w=t.A,b=t.H,x=t.ao,S=t.O,L=t.Z,T=t.Y,C=t.J,E=t.y,F=t.ap,O=t.G,j=t.aq,A=t.B,I=t.ar,P=t.D,D=t.af,G=t.d,N=t.w,V=t.m,z=t.K,B=t.as,M=t.at,R=t.au,Y=t.av,q=t.f,H=t.v,J=t.aw,K=t.ax,U=t.ay,W=t.az,$=t.aA,Z=t.aB,Q=t.aC,X=t.aD,tt=t.a8,et=t.$,nt=t.aE,rt=t.aF,ot=t.a3,at=t.aG,it=t.a0,ut=t.s,ct=t.aH,lt=t.aI,st=t.P,ft=t.aJ,dt=t._},function(t){ht=t.d}],execute:function(){var n=document.createElement("style");n.textContent="ion-fab-button[data-v-4848010a]{--background: var(--ion-color-step-150, #ffffff);--background-hover: var(--ion-color-step-200, #f2f2f2);--background-focused: var(--ion-color-step-250, #d9d9d9);--color: var(--ion-color-primary, #3880ff)}.ios ion-fab-button[data-v-4848010a]{--background-activated: var(--ion-color-step-250, #d9d9d9)}\n",document.head.appendChild(n);var pt=a({__name:"SessionListFilter",props:{excludedTracks:{type:Array,default:function(){return[]}},allTracks:{type:Array,default:function(){return[]}}},setup:function(t,e){var n=e.emit,r=t,o=n,a=i([]);i(r.allTracks.map((function(t){return t.name})));var P=u.state.sessions.isFirstLoad;c((function(){var t=r.allTracks.length?r.allTracks:[],e=u.state.sessions.selectedTrackFilters;a.value=t.map((function(t){return{name:t.name,icon:l[t.icon],isChecked:!!P||e.includes(t.name)}})),P&&u.commit("setFirstLoad",!1)}));var D=function(){return I.dismiss()},G=function(){var t=a.value.filter((function(t){return t.isChecked})).map((function(t){return t.name}));u.dispatch("setSelectedTrackFilters",t),o("filtersSelected",t),D()},N=function(t){a.value.forEach((function(e){return e.isChecked=t}))};return function(t,e){return s(),f(p(A),null,{default:d((function(){return[h(p(v),null,{default:d((function(){return[h(p(y),null,{default:d((function(){return[h(p(m),{slot:"start"},{default:d((function(){return[h(p(g),{onClick:D},{default:d((function(){return e[2]||(e[2]=[k("Cancel")])})),_:1})]})),_:1}),h(p(_),null,{default:d((function(){return e[3]||(e[3]=[k(" Filter Sessions ")])})),_:1}),h(p(m),{slot:"end"},{default:d((function(){return[h(p(g),{onClick:G,strong:""},{default:d((function(){return e[4]||(e[4]=[k("Done")])})),_:1})]})),_:1})]})),_:1})]})),_:1}),h(p(w),{class:"outer-content"},{default:d((function(){return[h(p(b),null,{default:d((function(){return[h(p(x),null,{default:d((function(){return e[5]||(e[5]=[k("Tracks")])})),_:1}),(s(!0),S(L,null,T(a.value,(function(t){return s(),f(p(C),{key:t.name},{default:d((function(){return[h(p(E),{slot:"start",icon:t.icon,color:"primary"},null,8,["icon"]),h(p(F),{onIonChange:function(e){return t.isChecked=!t.isChecked},checked:t.isChecked,color:"success"},{default:d((function(){return[k(O(t.name),1)]})),_:2},1032,["onIonChange","checked"])]})),_:2},1024)})),128))]})),_:1})]})),_:1}),h(p(j),{translucent:!0},{default:d((function(){return[h(p(y),null,{default:d((function(){return[h(p(m),{slot:"start"},{default:d((function(){return[h(p(g),{onClick:e[0]||(e[0]=function(t){return N(!1)})},{default:d((function(){return e[6]||(e[6]=[k("Deselect All")])})),_:1})]})),_:1}),h(p(m),{slot:"end"},{default:d((function(){return[h(p(g),{onClick:e[1]||(e[1]=function(t){return N(!0)})},{default:d((function(){return e[7]||(e[7]=[k("Select All")])})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})}}}),vt=a({__name:"SessionList",setup:function(t){var n=i("all"),a=i(""),u=i(null),l=i(null),F=i(null),j=P(),dt=D(),vt=i([]),yt=G((function(){return vt.value})),mt=function(t){return o(t).sort((function(t,e){return new Date(t.dateTimeStart).getTime()-new Date(e.dateTimeStart).getTime()})).reduce((function(t,e){var n=new Date(e.dateTimeStart);n.setMinutes(0,0,0);var r=n.toISOString(),o=t.find((function(t){return t.startTime===r}));return o?o.sessions.push(e):t.push({startTime:r,sessions:[e]}),t}),[])},gt=G((function(){return"all"===n.value?mt(j.getters.allFiltered):mt(j.getters.favoritesFiltered)}));N(gt,(function(t){vt.value=t}));var kt=function(){var t=r(e().mark((function t(n,r){var o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(-1===j.state.sessions.favoriteSessions.indexOf(r.id)){t.next=4;break}_t(n,r,"Favorite already added"),t.next=10;break;case 4:return j.dispatch("addFavorite",r.id),t.next=7,ft.create({header:"Favorite Added",buttons:[{text:"OK",handler:function(){n.target.closest("ion-item-sliding").close()}}]});case 7:return o=t.sent,t.next=10,o.present();case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),_t=function(){var t=r(e().mark((function t(n,r,o){var a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ft.create({header:o,message:"Would you like to remove this session from your favorites?",buttons:[{text:"Cancel",handler:function(){n.target.closest("ion-item-sliding").close()}},{text:"Remove",handler:function(){j.dispatch("removeFavorite",r.id),n.target.closest("ion-item-sliding").close()}}]});case 2:return a=t.sent,t.next=5,a.present();case 5:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),wt=function(){var t=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I.create({component:pt,presentingElement:tt.nativeEl,componentProps:{excludedTracks:j.state.sessions.trackFilters,allTracks:j.getters.allTracksFilter}});case 2:return(n=t.sent).componentProps.onFiltersSelected=function(){var t=r(e().mark((function t(n){var r,o,a;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==n.length){t.next=4;break}vt.value=[],t.next=15;break;case 4:return t.next=6,j.dispatch("loadSessionData");case 6:return t.next=8,j.dispatch("loadSpeakerData");case 8:return t.next=10,j.dispatch("fetchTracks");case 10:r=j.state.sessions.trackFilters,o=n.filter((function(t){return!r.includes(t)})),a=r.filter((function(t){return!n.includes(t)})),o.forEach((function(t){return j.dispatch("addTrackFilter",t)})),a.forEach((function(t){return j.dispatch("removeTrackFilter",t)}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t.next=6,n.present();case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),bt=function(t){n.value=t.detail.value},xt=function(){var t=r(e().mark((function t(n){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!u.value){t.next=9;break}return t.next=3,et.create({message:"Posting to ".concat(n),duration:1e3*Math.random()+500});case 3:return r=t.sent,t.next=6,r.present();case 6:return t.next=8,r.onWillDismiss();case 8:u.value.close();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),St=function(){var t=r(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==vt.value.length){t.next=7;break}return t.next=3,j.dispatch("loadSessionData");case 3:return t.next=5,j.dispatch("loadSpeakerData");case 5:return t.next=7,j.dispatch("fetchTracks");case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c((function(){V.enable(!0),St(),N((function(){return j.getters.allFiltered}),(function(t){vt.value=mt(t)}))})),function(t,e){return s(),f(p(A),null,{default:d((function(){return[h(p(v),{translucent:!0},{default:d((function(){return[h(p(y),null,{default:d((function(){return[h(p(m),{slot:"start"},{default:d((function(){return[h(p(z))]})),_:1}),h(p(B),{value:n.value,onIonChange:bt},{default:d((function(){return[h(p(M),{value:"all"},{default:d((function(){return e[6]||(e[6]=[k("All")])})),_:1}),h(p(M),{value:"favorites"},{default:d((function(){return e[7]||(e[7]=[k("Favorites")])})),_:1})]})),_:1},8,["value"]),h(p(m),{slot:"end"},{default:d((function(){return[h(p(g),{onClick:wt},{default:d((function(){return[h(p(E),{slot:"icon-only",icon:p(R)},null,8,["icon"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),h(p(w),{fullscreen:!0},{default:d((function(){var t,r;return[h(p(v),{collapse:"condense"},{default:d((function(){return[h(p(y),null,{default:d((function(){return[h(p(_),{size:"large"},{default:d((function(){return e[8]||(e[8]=[k("Schedule")])})),_:1})]})),_:1}),h(p(y),null,{default:d((function(){return[h(p(Y),{modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=function(t){return a.value=t}),debounce:500,onIonInput:e[1]||(e[1]=function(t){return e=t,void j.dispatch("setSearchText",e.detail.value);var e}),placeholder:"Search"},null,8,["modelValue"])]})),_:1})]})),_:1}),q(h(p(b),null,{default:d((function(){return[(s(!0),S(L,null,T(yt.value,(function(t){return s(),f(p(nt),{key:t.id},{default:d((function(){return[h(p(rt),{sticky:""},{default:d((function(){return[h(p(ot),null,{default:d((function(){return[k(O(p(ht)(t.startTime,"h:mm a")),1)]})),_:2},1024)]})),_:2},1024),(s(!0),S(L,null,T(t.sessions,(function(t){return s(),f(p(at),{key:t.id,"data-track":t.tracks[0].toLowerCase()},{default:d((function(){return[h(p(C),{button:"",onClick:function(e){return function(t){dt.push({name:"session-detail",params:{sessionId:t.id.toString()}})}(t)}},{default:d((function(){return[h(p(ot),{style:it((e=t.tracks[0],n="Ionic"===e?"primary":e.toLowerCase(),{borderLeft:"2px solid var(--ion-color-".concat(n,")"),paddingLeft:"10px"}))},{default:d((function(){return[ut("h3",null,O(t.tracks[0])+" - "+O(t.name),1),ut("p",null,O(p(ht)(t.dateTimeStart,"h:mm a"))+" — "+O(p(ht)(t.dateTimeEnd,"h:mm a"))+": "+O(t.location),1)]})),_:2},1032,["style"])];var e,n})),_:2},1032,["onClick"]),h(p(ct),null,{default:d((function(){return["all"===n.value?(s(),f(p(lt),{key:0,color:"favorite",onClick:function(e){return kt(e,t)}},{default:d((function(){return e[9]||(e[9]=[k("Favorite")])})),_:2},1032,["onClick"])):st("",!0),"favorites"===n.value?(s(),f(p(lt),{key:1,color:"danger",onClick:function(e){return _t(e,t,"Remove Favorite")}},{default:d((function(){return e[10]||(e[10]=[k("Remove")])})),_:2},1032,["onClick"])):st("",!0)]})),_:2},1024)]})),_:2},1032,["data-track"])})),128))]})),_:2},1024)})),128))]})),_:1},512),[[H,(null===(t=yt.value)||void 0===t?void 0:t.length)>0]]),q(h(p(x),null,{default:d((function(){return e[11]||(e[11]=[k("No Sessions Found")])})),_:1},512),[[H,0===(null===(r=yt.value)||void 0===r?void 0:r.length)]]),h(p(J),{slot:"fixed",vertical:"bottom",horizontal:"end",ref_key:"fab",ref:u},{default:d((function(){return[h(p(K),{ref_key:"fabButton",ref:l},{default:d((function(){return[h(p(E),{icon:p(U)},null,8,["icon"])]})),_:1},512),h(p(W),{ref_key:"fabList",ref:F,side:"top"},{default:d((function(){return[h(p(K),{color:"vimeo",onClick:e[2]||(e[2]=function(t){return xt("Vimeo")})},{default:d((function(){return[h(p(E),{icon:p($)},null,8,["icon"])]})),_:1}),h(p(K),{color:"google",onClick:e[3]||(e[3]=function(t){return xt("Google+")})},{default:d((function(){return[h(p(E),{icon:p(Z)},null,8,["icon"])]})),_:1}),h(p(K),{color:"twitter",onClick:e[4]||(e[4]=function(t){return xt("Twitter")})},{default:d((function(){return[h(p(E),{icon:p(Q)},null,8,["icon"])]})),_:1}),h(p(K),{color:"facebook",onClick:e[5]||(e[5]=function(t){return xt("Facebook")})},{default:d((function(){return[h(p(E),{icon:p(X)},null,8,["icon"])]})),_:1})]})),_:1},512)]})),_:1},512)]})),_:1})]})),_:1})}}});t("default",dt(vt,[["__scopeId","data-v-4848010a"]]))}}}))}();