import{x as y,z as R,d as P,c as l,o as c,a as f,n as p,e as q,f as M,A as w,t as G,g as T,h as N,b as m,i as A,p as V,j as H}from"./index.13efb4fa.js";const d=Object.prototype.toString;function Pe(e){return d.call(e)==="[object Array]"}function he(e){return d.call(e)==="[object Null]"}function _e(e){return d.call(e)==="[object Boolean]"}function W(e){return d.call(e)==="[object Object]"}const je=e=>d.call(e)==="[object Promise]";function X(e){return d.call(e)==="[object String]"}function U(e){return d.call(e)==="[object Number]"&&e===e}function ze(e){return e===void 0}function Oe(e){return typeof e=="function"}function Be(e){return W(e)&&Object.keys(e).length===0}const Ie=e=>(e==null?void 0:e.$)!==void 0,D=Symbol("ArcoConfigProvider");var J=Object.defineProperty,Q=Object.defineProperties,Y=Object.getOwnPropertyDescriptors,L=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,E=(e,n,t)=>n in e?J(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ee=(e,n)=>{for(var t in n||(n={}))Z.call(n,t)&&E(e,t,n[t]);if(L)for(var t of L(n))x.call(n,t)&&E(e,t,n[t]);return e},ne=(e,n)=>Q(e,Y(n));const te="A",oe="arco",S="$arco",se=e=>{var n;return(n=e==null?void 0:e.componentPrefix)!=null?n:te},re=(e,n)=>{var t;n&&n.classPrefix&&(e.config.globalProperties[S]=ne(ee({},(t=e.config.globalProperties[S])!=null?t:{}),{classPrefix:n.classPrefix}))},h=e=>{var n,t,i;const o=R(),s=y(D,void 0),r=(i=(t=s==null?void 0:s.prefixCls)!=null?t:(n=o==null?void 0:o.appContext.config.globalProperties[S])==null?void 0:n.classPrefix)!=null?i:oe;return e?`${r}-${e}`:r};var _=(e,n)=>{for(const[t,i]of n)e[t]=i;return e};const ie=P({name:"IconLoading",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:n}){const t=h("icon"),i=l(()=>[t,`${t}-loading`,{[`${t}-spin`]:e.spin}]),o=l(()=>{const r={};return e.size&&(r.fontSize=U(e.size)?`${e.size}px`:e.size),e.rotate&&(r.transform=`rotate(${e.rotate}deg)`),r});return{cls:i,innerStyle:o,onClick:r=>{n("click",r)}}}}),le=["stroke-width","stroke-linecap","stroke-linejoin"],ae=M("path",{d:"M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"},null,-1),ce=[ae];function ue(e,n,t,i,o,s){return c(),f("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:p(e.cls),style:q(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:n[0]||(n[0]=(...r)=>e.onClick&&e.onClick(...r))},ce,14,le)}var $=_(ie,[["render",ue]]);const de=Object.assign($,{install:(e,n)=>{var t;const i=(t=n==null?void 0:n.iconPrefix)!=null?t:"";e.component(i+$.name,$)}}),fe=Symbol("ArcoFormItemContext"),we=Symbol("ArcoFormContext"),pe=({size:e,disabled:n,error:t,uninject:i}={})=>{const o=i?{}:y(fe,{}),s=l(()=>{var v;return(v=e==null?void 0:e.value)!=null?v:o.size}),r=l(()=>(n==null?void 0:n.value)||o.disabled),u=l(()=>(t==null?void 0:t.value)||o.error),b=w(o,"feedback"),g=w(o,"eventHandlers");return{formItemCtx:o,mergedSize:s,mergedDisabled:r,mergedError:u,feedback:b,eventHandlers:g}},me=(e,{defaultValue:n="medium"}={})=>{const t=y(D,void 0);return{mergedSize:l(()=>{var o,s;return(s=(o=e==null?void 0:e.value)!=null?o:t==null?void 0:t.size)!=null?s:n})}},F=Symbol("ArcoButtonGroup"),ge=P({name:"Button",components:{IconLoading:de},props:{type:{type:String},shape:{type:String},status:{type:String},size:{type:String},long:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean},htmlType:{type:String,default:"button"},href:String},emits:{click:e=>!0},setup(e,{emit:n}){const{size:t,disabled:i}=G(e),o=h("btn"),s=y(F,void 0),r=l(()=>{var a;return(a=t.value)!=null?a:s==null?void 0:s.size}),u=l(()=>Boolean(i.value||(s==null?void 0:s.disabled))),{mergedSize:b,mergedDisabled:g}=pe({size:r,disabled:u}),{mergedSize:v}=me(b),K=l(()=>{var a,j,z,O,B,I;return[o,`${o}-${(j=(a=e.type)!=null?a:s==null?void 0:s.type)!=null?j:"secondary"}`,`${o}-shape-${(O=(z=e.shape)!=null?z:s==null?void 0:s.shape)!=null?O:"square"}`,`${o}-size-${v.value}`,`${o}-status-${(I=(B=e.status)!=null?B:s==null?void 0:s.status)!=null?I:"normal"}`,{[`${o}-long`]:e.long,[`${o}-loading`]:e.loading,[`${o}-disabled`]:g.value,[`${o}-link`]:X(e.href)}]});return{prefixCls:o,cls:K,mergedDisabled:g,handleClick:a=>{if(e.disabled||e.loading){a.preventDefault();return}n("click",a)}}}}),ve=["href"],ye=["type","disabled"];function be(e,n,t,i,o,s){const r=T("icon-loading");return e.href?(c(),f("a",{key:0,class:p([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),href:e.mergedDisabled||e.loading?void 0:e.href,onClick:n[0]||(n[0]=(...u)=>e.handleClick&&e.handleClick(...u))},[e.loading||e.$slots.icon?(c(),f("span",{key:0,class:p(`${e.prefixCls}-icon`)},[e.loading?(c(),N(r,{key:0,spin:"true"})):m(e.$slots,"icon",{key:1})],2)):A("v-if",!0),m(e.$slots,"default")],10,ve)):(c(),f("button",{key:1,class:p([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),type:e.htmlType,disabled:e.mergedDisabled,onClick:n[1]||(n[1]=(...u)=>e.handleClick&&e.handleClick(...u))},[e.loading||e.$slots.icon?(c(),f("span",{key:0,class:p(`${e.prefixCls}-icon`)},[e.loading?(c(),N(r,{key:0,spin:!0})):m(e.$slots,"icon",{key:1})],2)):A("v-if",!0),m(e.$slots,"default")],10,ye))}var k=_(ge,[["render",be]]);const $e=P({name:"ButtonGroup",props:{type:{type:String},status:{type:String},shape:{type:String},size:{type:String},disabled:{type:Boolean}},setup(e){const{type:n,size:t,status:i,disabled:o,shape:s}=G(e),r=h("btn-group");return V(F,H({type:n,size:t,shape:s,status:i,disabled:o})),{prefixCls:r}}});function ke(e,n,t,i,o,s){return c(),f("div",{class:p(e.prefixCls)},[m(e.$slots,"default")],2)}var C=_($e,[["render",ke]]);const Ne=Object.assign(k,{Group:C,install:(e,n)=>{re(e,n);const t=se(n);e.component(t+k.name,k),e.component(t+C.name,C)}});export{Ne as B,de as I,_,se as a,ze as b,W as c,D as d,Ie as e,_e as f,h as g,Pe as h,U as i,he as j,X as k,Oe as l,me as m,Be as n,je as o,we as p,fe as q,re as s,pe as u};
