!function(){function n(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,t){if(n){if("string"==typeof n)return e(n,t);var r={}.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var u=0,l=function(){};return{s:l,n:function(){return u>=n.length?{done:!0}:{done:!1,value:n[u++]}},e:function(n){throw n},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,o=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return i=n.done,n},e:function(n){o=!0,a=n},f:function(){try{i||null==r.return||r.return()}finally{if(o)throw a}}}}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy-595d99ac.js","./axios-legacy-a1f7cce6.js"],(function(e,t){"use strict";var r,u,l,a,i,o,f,c,d,s,v,y,m,p,b,h,_,g,S,k,A,E,j,x,w,C,I,F,G,O,R,q,z;return{setters:[function(n){r=n.r,u=n.d,l=n.V,a=n.g,i=n.i,o=n.j,f=n.u,c=n.k,d=n.I,s=n.F,v=n.t,y=n.l,m=n.x,p=n.y,b=n.aK,h=n.q,_=n.f,g=n.v,S=n.H,k=n.O,A=n.Y,E=n.Z,j=n.A,x=n.B,w=n.aE,C=n.aF,I=n.a3,F=n.s,G=n.G,O=n.aG,R=n.J},function(n){q=n.a,z=n.b}],execute:function(){e("default",{__name:"RecipeSchedule",setup:function(e){var t=r([]),B=r(0),H=u((function(){var e,r=[],u=0,l=n(t.value);try{for(l.s();!(e=l.n()).done;){var a=e.value;r[u]||(r[u]={label:null,mealEvents:[]}),null!=r[u].label&&a.date!=r[u].label&&(r[++u]={label:null,mealEvents:[]}),r[u]&&(r[u].label=a.date,r[u].mealEvents.push(a))}}catch(i){l.e(i)}finally{l.f()}return r}));q.get(z+"/api/recipes/events/"+B.value+"/").then((function(n){t.value=n.data}));var J=l(),K=function(){};return function(n,e){return a(),i(f(x),null,{default:o((function(){return[c(f(h),{translucent:!0},{default:o((function(){return[c(f(d),null,{default:o((function(){return[c(f(s),null,{default:o((function(){return e[0]||(e[0]=[v("Recipe Schedule")])})),_:1}),c(f(y),{slot:"end"},{default:o((function(){return[c(f(m),{onClick:K},{default:o((function(){return[c(f(p),{icon:f(b),size:"medium"},null,8,["icon"])]})),_:1})]})),_:1})]})),_:1})]})),_:1}),c(f(j),{fullscreen:!0},{default:o((function(){return[_(c(f(S),null,{default:o((function(){return[(a(!0),k(E,null,A(H.value,(function(n){return a(),i(f(w),{key:n.id},{default:o((function(){return[c(f(C),{sticky:""},{default:o((function(){return[c(f(I),null,{default:o((function(){return[F("b",null,G(n.label),1)]})),_:2},1024)]})),_:2},1024),(a(!0),k(E,null,A(n.mealEvents,(function(n){return a(),i(f(O),{key:n.id},{default:o((function(){return[c(f(R),{button:"",onClick:function(e){return f(J).push({name:"recipe",params:{id:n.recipe.id}})}},{default:o((function(){return[c(f(I),null,{default:o((function(){return[F("h3",null,[F("b",null,G(n.type),1)]),F("p",null,G(n.recipe.title),1)]})),_:2},1024)]})),_:2},1032,["onClick"])]})),_:2},1024)})),128))]})),_:2},1024)})),128))]})),_:1},512),[[g,H.value.length>0]])]})),_:1})]})),_:1})}}})}}}))}();