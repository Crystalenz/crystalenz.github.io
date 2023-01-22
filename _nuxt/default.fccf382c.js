import{u as d}from"./composables.efe69c08.js";import{j as o,a as u,h as g,w as c,k as S,F as m,o as f}from"./entry.c546a8e6.js";const y=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),s=(e,t)=>(i,r)=>(d(()=>e({...y(i),...r.attrs},r)),()=>{var n,a;return t?(a=(n=r.slots).default)==null?void 0:a.call(n):null}),l={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String};o({name:"NoScript",inheritAttrs:!1,props:{...l,title:String,body:Boolean,renderPriority:[String,Number]},setup:s((e,{slots:t})=>{var n;const i={...e},r=(((n=t.default)==null?void 0:n.call(t))||[]).filter(({children:a})=>a).map(({children:a})=>a).join("");return r&&(i.children=r),{noscript:[i]}})});o({name:"Link",inheritAttrs:!1,props:{...l,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:s(e=>({link:[e]}))});o({name:"Base",inheritAttrs:!1,props:{...l,href:String,target:String},setup:s(e=>({base:e}))});o({name:"Title",inheritAttrs:!1,setup:s((e,{slots:t})=>{var r,n,a;return{title:((a=(n=(r=t.default)==null?void 0:r.call(t))==null?void 0:n[0])==null?void 0:a.children)||null}})});const h=o({name:"Meta",inheritAttrs:!1,props:{...l,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:s(e=>{const t={...e};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})});o({name:"Style",inheritAttrs:!1,props:{...l,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:s((e,{slots:t})=>{var n,a,p;const i={...e},r=(p=(a=(n=t.default)==null?void 0:n.call(t))==null?void 0:a[0])==null?void 0:p.children;return r&&(i.children=r),{style:[i]}})});const b=o({name:"Head",inheritAttrs:!1,setup:(e,t)=>()=>{var i,r;return(r=(i=t.slots).default)==null?void 0:r.call(i)}});o({name:"Html",inheritAttrs:!1,props:{...l,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:s(e=>({htmlAttrs:e}),!0)});o({name:"Body",inheritAttrs:!1,props:{...l,renderPriority:[String,Number]},setup:s(e=>({bodyAttrs:e}),!0)});const B={__name:"default",setup(e){return d({title:"Crystalenz, Fullstack Developer",viewport:"width=device-width, initial-scale=1, maximum-scale=1",charset:"utf-8",meta:[{name:"description",content:"Online Portfolio of Crystalenz, Fullstack Developer"}],bodyAttrs:{class:"test"}}),(t,i)=>{const r=h,n=b;return f(),u(m,null,[g(n,null,{default:c(()=>[g(r,{name:"mobile-web-app-capable",content:"yes"})]),_:1}),S(t.$slots,"default",{class:"content"})],64)}}};export{B as default};
