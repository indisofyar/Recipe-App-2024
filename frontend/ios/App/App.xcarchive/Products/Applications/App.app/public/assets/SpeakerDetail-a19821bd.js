import{e as p,d as f,T as m,U as k,g as c,i as I,j as t,k as a,u as e,I as g,l as v,E as x,F as B,t as y,G as i,q as S,O as T,s as o,x as s,y as n,aC as b,aT as C,aU as h,P as D,A as N,B as V,_ as w}from"./index-82be729b.js";const z={key:0,"text-center":""},P=["src","alt"],E=p({__name:"SpeakerDetail",setup(G){const l=f(()=>d.state.speakers.speakers.find(r=>r.id===parseInt(_.params.speakerId.toString()))),d=m(),_=k();return(r,u)=>(c(),I(e(V),null,{default:t(()=>[a(e(S),null,{default:t(()=>[a(e(g),null,{default:t(()=>[a(e(v),{slot:"start"},{default:t(()=>[a(e(x),{text:"Speakers"})]),_:1}),a(e(B),null,{default:t(()=>[y(i(l.value?l.value.name:""),1)]),_:1})]),_:1})]),_:1}),a(e(N),{padding:"",class:"speaker-detail"},{default:t(()=>[l.value?(c(),T("div",z,[o("img",{src:l.value.profilePic,alt:l.value.name},null,8,P),u[0]||(u[0]=o("br",null,null,-1)),a(e(s),{fill:"clear",size:"small",color:"twitter"},{default:t(()=>[a(e(n),{icon:e(b),slot:"icon-only"},null,8,["icon"])]),_:1}),a(e(s),{fill:"clear",size:"small",color:"github"},{default:t(()=>[a(e(n),{icon:e(C),slot:"icon-only"},null,8,["icon"])]),_:1}),a(e(s),{fill:"clear",size:"small",color:"instagram"},{default:t(()=>[a(e(n),{icon:e(h),slot:"icon-only"},null,8,["icon"])]),_:1})])):D("",!0),o("p",null,i(l.value?l.value.about:""),1)]),_:1})]),_:1}))}});const j=w(E,[["__scopeId","data-v-d99f6386"]]);export{j as default};