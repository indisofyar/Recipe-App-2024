import{e as L,T as V,V as j,d as A,g as r,i as p,j as a,k as t,u as e,I as S,F as y,t as i,l as H,K as N,q as T,H as b,ag as R,ah as x,O as z,Y as B,Z as v,A as F,B as G,ai as d,aj as M,al as O,J as m,aQ as P,s as u,a3 as q,G as f,ak as E,x as I,y as k,aC as J,aR as K,aS as Q,$ as W}from"./index-82be729b.js";const Y=["src"],X=L({__name:"SpeakerList",setup(Z){const _=V(),C=j(),w=A(()=>_.state.speakers.speakers.concat().sort()),$=s=>_.state.sessions.sessions.filter(l=>l.speakerIds.includes(s)),D=s=>{C.push({name:"speaker-session-detail",params:{sessionId:s.id.toString()}})},g=s=>{C.push({name:"speaker-detail",params:{speakerId:s.id.toString()}})},c=async s=>{const l=await W.create({message:s,duration:Math.random()*1e3+500});await l.present(),await l.onWillDismiss()};return(s,l)=>(r(),p(e(G),null,{default:a(()=>[t(e(T),{translucent:!0},{default:a(()=>[t(e(S),null,{default:a(()=>[t(e(y),null,{default:a(()=>l[3]||(l[3]=[i("Speakers")])),_:1}),t(e(H),{slot:"start"},{default:a(()=>[t(e(N))]),_:1})]),_:1})]),_:1}),t(e(F),{fullscreen:!0},{default:a(()=>[t(e(T),{collapse:"condense"},{default:a(()=>[t(e(S),null,{default:a(()=>[t(e(y),{size:"large"},{default:a(()=>l[4]||(l[4]=[i("Speakers")])),_:1})]),_:1})]),_:1}),t(e(b),null,{default:a(()=>[t(e(R),{fixed:""},{default:a(()=>[t(e(x),{"align-items-stretch":""},{default:a(()=>[(r(!0),z(v,null,B(w.value,n=>(r(),p(e(d),{size:"12","size-md":"6",key:n.id},{default:a(()=>[t(e(M),{class:"speaker-card"},{default:a(()=>[t(e(O),null,{default:a(()=>[t(e(m),{detail:!1,lines:"none",button:"",onClick:o=>g(n)},{default:a(()=>[t(e(P),{slot:"start"},{default:a(()=>[u("img",{src:n.profilePic,alt:"Speaker profile pic"},null,8,Y)]),_:2},1024),t(e(q),null,{default:a(()=>[u("h2",null,f(n.name),1),u("p",null,f(n.title),1)]),_:2},1024)]),_:2},1032,["onClick"])]),_:2},1024),t(e(E),null,{default:a(()=>[t(e(b),{lines:"none"},{default:a(()=>[(r(!0),z(v,null,B($(n.id),o=>(r(),p(e(m),{button:"",onClick:h=>D(o),key:o.id},{default:a(()=>[u("h3",null,f(o.name),1)]),_:2},1032,["onClick"]))),128)),t(e(m),{button:"",onClick:o=>g(n)},{default:a(()=>[u("h3",null,"About "+f(n.name),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024),t(e(x),{"no-padding":"","justify-content-center":""},{default:a(()=>[t(e(d),{"text-left":"",size:"4"},{default:a(()=>[t(e(I),{fill:"clear",size:"small",color:"primary",onClick:l[0]||(l[0]=o=>c("Tweet"))},{default:a(()=>[t(e(k),{icon:e(J),slot:"start"},null,8,["icon"]),l[5]||(l[5]=i("Tweet "))]),_:1})]),_:1}),t(e(d),{"text-center":"",size:"4"},{default:a(()=>[t(e(I),{fill:"clear",size:"small",color:"primary",onClick:l[1]||(l[1]=o=>c("Share"))},{default:a(()=>[t(e(k),{icon:e(K),slot:"start"},null,8,["icon"]),l[6]||(l[6]=i("Share "))]),_:1})]),_:1}),t(e(d),{"text-right":"",size:"4"},{default:a(()=>[t(e(I),{fill:"clear",size:"small",color:"primary",onClick:l[2]||(l[2]=o=>c("Contact"))},{default:a(()=>[t(e(k),{icon:e(Q),slot:"start"},null,8,["icon"]),l[7]||(l[7]=i("Contact "))]),_:1})]),_:1})]),_:1})]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{X as default};