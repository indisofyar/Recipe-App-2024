System.register(["./index-legacy-595d99ac.js","./axios-legacy-a1f7cce6.js"],(function(e,n){"use strict";var t,o,a,c,u,r,i,l,s,d,f,p,g,h,m;return{setters:[function(e){t=e.r,o=e.N,a=e.g,c=e.i,u=e.j,r=e.u,i=e.k,l=e.s,s=e.O,d=e.Y,f=e.Z,p=e.A,g=e.B},function(e){h=e.a,m=e.b}],execute:function(){e("default",{__name:"ShoppingList",setup:function(e){var n=t([]),k=function(){h.get(m+"/api/recipes/shopping-list/").then((function(e){n.value=e.data}))},v=t(!1),S=localStorage.getItem("accessToken"),I="Bearer "+S,T=localStorage.getItem("refreshToken");return h.post(m+"/api/user/token/refresh/",{refresh:T}).then((function(e){localStorage.setItem("accessToken",e.data.access),S=localStorage.getItem("accessToken"),I="Bearer "+S,h.defaults.headers.common.Authorization=I,k()})).catch((function(e){return v.value=!0})),k(),function(e,t){var k=o("ion-checkbox"),v=o("ion-item"),S=o("ion-list");return a(),c(r(g),null,{default:u((function(){return[i(r(p),{fullscreen:!0,padding:"",class:"ion-padding"},{default:u((function(){return[t[0]||(t[0]=l("h3",null,"Shopping List",-1)),i(S,null,{default:u((function(){return[(a(!0),s(f,null,d(n.value.items,(function(e){return a(),c(v,null,{default:u((function(){return[i(k,{"label-placement":"start",modelValue:e.checked,"onUpdate:modelValue":function(n){return e.checked=n},innerHTML:e.ingredient.text,onIonChange:function(n){return t=e.id,o=e.checked,void h.post("".concat(m,"/api/recipes/shopping-list/").concat(t,"/"),{checked:o}).then((function(e){console.log("Updated item ".concat(t," status to ").concat(o))})).catch((function(e){console.error("Failed to update item status:",e)}));var t,o}},null,8,["modelValue","onUpdate:modelValue","innerHTML","onIonChange"])]})),_:2},1024)})),256))]})),_:1})]})),_:1})]})),_:1})}}})}}}));