import{a4 as d,a5 as p,a6 as m,B as f,a7 as h,a8 as I,a9 as g,aa as x,a3 as B,y as T,ab as y,ac as k,ad as C,ae as N,_ as L,N as n,g as S,i as V,j as o,k as a,t as i}from"./index-82be729b.js";const j={methods:{calendar(){return d},list(){return p},home(){return m}},components:{IonPage:f,IonTabs:h,IonRouterOutlet:I,IonTabBar:g,IonTabButton:x,IonLabel:B,IonIcon:T},data(){return{playCircle:y,radio:k,library:C,search:N}}};function v(w,t,H,O,P,e){const u=n("ion-router-outlet"),l=n("ion-icon"),s=n("ion-label"),r=n("ion-tab-button"),_=n("ion-tab-bar"),c=n("ion-tabs"),b=n("ion-page");return S(),V(b,null,{default:o(()=>[a(c,null,{default:o(()=>[a(u),a(_,{slot:"bottom"},{default:o(()=>[a(r,{tab:"home",href:"/tabs/meal-planner"},{default:o(()=>[a(l,{icon:e.home()},null,8,["icon"]),a(s,null,{default:o(()=>t[0]||(t[0]=[i("Home")])),_:1})]),_:1}),a(r,{tab:"radio",href:"/tabs/recipe-schedule"},{default:o(()=>[a(l,{icon:e.calendar()},null,8,["icon"]),a(s,null,{default:o(()=>t[1]||(t[1]=[i("Schedule")])),_:1})]),_:1}),a(r,{tab:"library",href:"/tabs/shopping-list"},{default:o(()=>[a(l,{icon:e.list()},null,8,["icon"]),a(s,null,{default:o(()=>t[2]||(t[2]=[i("Shopping List")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const $=L(j,[["render",v]]);export{$ as default};