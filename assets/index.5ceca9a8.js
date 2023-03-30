import{g as f,i as h,_ as v}from"./index.be275d6f.js";import{d as g,c as d,o as w,a as _,n as k,e as b,f as y}from"./index.13efb4fa.js";const x=g({name:"IconDown",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const r=f("icon"),n=d(()=>[r,`${r}-down`,{[`${r}-spin`]:e.spin}]),o=d(()=>{const s={};return e.size&&(s.fontSize=h(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:n,innerStyle:o,onClick:s=>{t("click",s)}}}}),O=["stroke-width","stroke-linecap","stroke-linejoin"],P=y("path",{d:"M39.6 17.443 24.043 33 8.487 17.443"},null,-1),j=[P];function C(e,t,r,n,o,p){return w(),_("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:k(e.cls),style:b(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...s)=>e.onClick&&e.onClick(...s))},j,14,O)}var c=v(x,[["render",C]]);const M=Object.assign(c,{install:(e,t)=>{var r;const n=(r=t==null?void 0:t.iconPrefix)!=null?r:"";e.component(n+c.name,c)}});var E=Object.defineProperty,L=Object.defineProperties,S=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,q=(e,t)=>{for(var r in t||(t={}))z.call(t,r)&&u(e,r,t[r]);if(m)for(var r of m(t))$.call(t,r)&&u(e,r,t[r]);return e},I=(e,t)=>L(e,S(t));const H=["xxl","xl","lg","md","sm","xs"],a={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"};let i=[],N=-1,l={};const Q={matchHandlers:{},dispatch(e,t){return l=e,i.length<1?!1:(i.forEach(r=>{r.func(l,t)}),!0)},subscribe(e){i.length===0&&this.register();const t=(++N).toString();return i.push({token:t,func:e}),e(l,null),t},unsubscribe(e){i=i.filter(t=>t.token!==e),i.length===0&&this.unregister()},unregister(){Object.keys(a).forEach(e=>{const t=a[e];if(!t)return;const r=this.matchHandlers[t];r&&r.mql&&r.listener&&(r.mql.removeEventListener?r.mql.removeEventListener("change",r.listener):r.mql.removeListener(r.listener))})},register(){Object.keys(a).forEach(e=>{const t=a[e];if(!t)return;const r=({matches:o})=>{this.dispatch(I(q({},l),{[e]:o}),e)},n=window.matchMedia(t);n.addEventListener?n.addEventListener("change",r):n.addListener(r),this.matchHandlers[t]={mql:n,listener:r},r(n)})}};export{M as I,H as a,Q as r};