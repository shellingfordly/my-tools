import{g as z,i as N,_ as y,a as Y,R as Oe,o as K,b as U,s as we,c as ze}from"./index.99fc70a1.js";import{d as _,c,o as i,e as m,A as d,B as T,m as C,r as ue,C as A,x as Pe,D as ke,E as $,l as P,a as w,w as D,G as x,H as B,f as Re,I as je,F as De,J as be,K as Se,L as Be,y as Ce,z as Le,n as Te}from"./index.3a4765c5.js";const He=_({name:"IconLeft",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},spin:Boolean},setup(e){const t=z("icon"),s=c(()=>[t,`${t}-left`,{[`${t}-spin`]:e.spin}]),n=c(()=>{if(e.size)return{fontSize:N(e.size)?`${e.size}px`:e.size}});return{cls:s,sizeStyle:n}}}),Ze=["stroke-width","stroke-linecap","stroke-linejoin"],Ee=C("path",{d:"M32 8.4 16.444 23.956 32 39.513"},null,-1),We=[Ee];function Ve(e,t,s,n,o,r){return i(),m("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:d(e.cls),style:T(e.sizeStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},We,14,Ze)}var G=y(He,[["render",Ve]]);const xe=Object.assign(G,{install:(e,t)=>{var s;const n=(s=t==null?void 0:t.iconPrefix)!=null?s:"";e.component(n+G.name,G)}}),Ae=_({name:"IconRight",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},spin:Boolean},setup(e){const t=z("icon"),s=c(()=>[t,`${t}-right`,{[`${t}-spin`]:e.spin}]),n=c(()=>{if(e.size)return{fontSize:N(e.size)?`${e.size}px`:e.size}});return{cls:s,sizeStyle:n}}}),qe=["stroke-width","stroke-linecap","stroke-linejoin"],Fe=C("path",{d:"m16 39.513 15.556-15.557L16 8.4"},null,-1),Xe=[Fe];function Ye(e,t,s,n,o,r){return i(),m("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:d(e.cls),style:T(e.sizeStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},Xe,14,qe)}var Q=y(Ae,[["render",Ye]]);const Ke=Object.assign(Q,{install:(e,t)=>{var s;const n=(s=t==null?void 0:t.iconPrefix)!=null?s:"";e.component(n+Q.name,Q)}});function Ue(e){const t=ue(e);return[t,n=>{t.value=n}]}function ce(e,t){const{value:s}=A(t),[n,o]=Ue(Y(s.value)?e:s.value);return Pe(s,p=>{Y(p)&&o(void 0)}),[c(()=>Y(s.value)?n.value:s.value),o,n]}var Ge=Object.defineProperty,Qe=Object.defineProperties,Je=Object.getOwnPropertyDescriptors,fe=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,ge=(e,t,s)=>t in e?Ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,st=(e,t)=>{for(var s in t||(t={}))et.call(t,s)&&ge(e,s,t[s]);if(fe)for(var s of fe(t))tt.call(t,s)&&ge(e,s,t[s]);return e},nt=(e,t)=>Qe(e,Je(t));const W={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"};let M=[],ot=-1,V={};const me={matchHandlers:{},dispatch(e,t){return V=e,M.length<1?!1:(M.forEach(s=>{s.func(V,t)}),!0)},subscribe(e){M.length===0&&this.register();const t=(++ot).toString();return M.push({token:t,func:e}),e(V,null),t},unsubscribe(e){M=M.filter(t=>t.token!==e),M.length===0&&this.unregister()},unregister(){Object.keys(W).forEach(e=>{const t=W[e];if(!t)return;const s=this.matchHandlers[t];s&&s.mql&&s.listener&&s.mql.removeEventListener("change",s.listener)})},register(){Object.keys(W).forEach(e=>{const t=W[e];if(!t)return;const s=({matches:o})=>{this.dispatch(nt(st({},V),{[e]:o}),e)},n=window.matchMedia(t);n.addEventListener("change",s),this.matchHandlers[t]={mql:n,listener:s},s(n)})}},Ie=Symbol("LayoutSiderInjectionKey"),rt=Symbol("SiderInjectionKey");var it=_({name:"Layout",props:{hasSider:{type:Boolean}},setup(e){const t=ue([]),s=z("layout"),n=c(()=>[s,{[`${s}-has-sider`]:e.hasSider||t.value.length}]);return ke(Ie,{onSiderMount:o=>t.value.push(o),onSiderUnMount:o=>{t.value=t.value.filter(r=>r!==o)}}),{classNames:n}}});function at(e,t,s,n,o,r){return i(),m("section",{class:d(e.classNames)},[$(e.$slots,"default")],2)}var J=y(it,[["render",at]]);const lt=_({name:"LayoutHeader",setup(){return{classNames:[z("layout-header")]}}});function ct(e,t,s,n,o,r){return i(),m("header",{class:d(e.classNames)},[$(e.$slots,"default")],2)}var ee=y(lt,[["render",ct]]);const ut=_({name:"LayoutContent",setup(){return{classNames:[z("layout-content")]}}});function dt(e,t,s,n,o,r){return i(),m("main",{class:d(e.classNames)},[$(e.$slots,"default")],2)}var te=y(ut,[["render",dt]]);const pt=_({name:"LayoutFooter",setup(){return{classNames:[z("layout-footer")]}}});function ht(e,t,s,n,o,r){return i(),m("footer",{class:d(e.classNames)},[$(e.$slots,"default")],2)}var se=y(pt,[["render",ht]]);const vt=_({name:"IconDragDot",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},spin:Boolean},setup(e){const t=z("icon"),s=c(()=>[t,`${t}-drag-dot`,{[`${t}-spin`]:e.spin}]),n=c(()=>{if(e.size)return{fontSize:N(e.size)?`${e.size}px`:e.size}});return{cls:s,sizeStyle:n}}}),ft=["stroke-width","stroke-linecap","stroke-linejoin"],gt=C("path",{d:"M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z",fill:"currentColor",stroke:"none"},null,-1),mt=C("path",{d:"M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z"},null,-1),$t=[gt,mt];function yt(e,t,s,n,o,r){return i(),m("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:d(e.cls),style:T(e.sizeStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},$t,14,ft)}var ne=y(vt,[["render",yt]]);const _t=Object.assign(ne,{install:(e,t)=>{var s;const n=(s=t==null?void 0:t.iconPrefix)!=null?s:"";e.component(n+ne.name,ne)}}),wt=_({name:"IconDragDotVertical",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},spin:Boolean},setup(e){const t=z("icon"),s=c(()=>[t,`${t}-drag-dot-vertical`,{[`${t}-spin`]:e.spin}]),n=c(()=>{if(e.size)return{fontSize:N(e.size)?`${e.size}px`:e.size}});return{cls:s,sizeStyle:n}}}),zt=["stroke-width","stroke-linecap","stroke-linejoin"],kt=C("path",{d:"M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",fill:"currentColor",stroke:"none"},null,-1),bt=C("path",{d:"M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z"},null,-1),St=[kt,bt];function Ct(e,t,s,n,o,r){return i(),m("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:d(e.cls),style:T(e.sizeStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},St,14,zt)}var oe=y(wt,[["render",Ct]]);const Lt=Object.assign(oe,{install:(e,t)=>{var s;const n=(s=t==null?void 0:t.iconPrefix)!=null?s:"";e.component(n+oe.name,oe)}});var It=_({name:"ResizeTrigger",components:{ResizeObserver:Oe,IconDragDot:_t,IconDragDotVertical:Lt},props:{prefixCls:{type:String,required:!0},direction:{type:String,default:"horizontal"}},emits:["resize"],setup(e,{emit:t}){const{direction:s,prefixCls:n}=A(e),o=c(()=>(s==null?void 0:s.value)==="horizontal");return{classNames:c(()=>[n.value,{[`${n.value}-horizontal`]:o.value,[`${n.value}-vertical`]:!o.value}]),onResize:u=>{t("resize",u)},isHorizontal:o}}});function Mt(e,t,s,n,o,r){const p=P("IconDragDot"),u=P("IconDragDotVertical"),f=P("ResizeObserver");return i(),w(f,{onResize:e.onResize},{default:D(()=>[C("div",{class:d(e.classNames)},[x(" @slot \u81EA\u5B9A\u4E49\u5185\u5BB9 "),$(e.$slots,"default",{},()=>[C("div",{class:d(`${e.prefixCls}-icon-wrapper`)},[x(" @slot \u81EA\u5B9A\u4E49 icon "),$(e.$slots,"icon",{},()=>[e.isHorizontal?(i(),w(p,{key:0,class:d(`${e.prefixCls}-icon`)},null,8,["class"])):(i(),w(u,{key:1,class:d(`${e.prefixCls}-icon`)},null,8,["class"]))])],2)])],2)]),_:3},8,["onResize"])}var Nt=y(It,[["render",Mt]]),Ot=Object.defineProperty,$e=Object.getOwnPropertySymbols,Pt=Object.prototype.hasOwnProperty,Rt=Object.prototype.propertyIsEnumerable,ye=(e,t,s)=>t in e?Ot(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,re=(e,t)=>{for(var s in t||(t={}))Pt.call(t,s)&&ye(e,s,t[s]);if($e)for(var s of $e(t))Rt.call(t,s)&&ye(e,s,t[s]);return e};const Me="left",Ne="right",de="top",pe="bottom",jt=[Me,Ne,de,pe];function _e(e,t){if(e===0)return 0;const s=e-t;return s<=0?0:s}function ie(e){return[de,pe].indexOf(e)>-1}const Dt=_({name:"ResizeBox",components:{ResizeTrigger:Nt},inheritAttrs:!1,props:{width:{type:Number},height:{type:Number},component:{type:String,default:"div"},directions:{type:Array,default:()=>["right"]}},emits:{"update:width":e=>!0,"update:height":e=>!0,movingStart:e=>!0,moving:(e,t)=>!0,movingEnd:e=>!0},setup(e,{emit:t}){const{height:s,width:n,directions:o}=A(e),[r,p]=ce(null,B({value:n})),[u,f]=ce(null,B({value:s})),R=ue(),L=B({}),j=z("resizebox"),q=c(()=>[j]),H=c(()=>re(re(re({},N(r.value)?{width:`${r.value}px`}:{}),N(u.value)?{height:`${u.value}px`}:{}),L)),k=c(()=>o.value.filter(a=>jt.includes(a))),v={direction:"",startPageX:0,startPageY:0,startWidth:0,startHeight:0,moving:!1,padding:{left:0,right:0,top:0,bottom:0}};function Z(a){if(!v.moving)return;const{startPageX:l,startPageY:h,startWidth:g,startHeight:I,direction:X}=v;let b=g,S=I;const he=a.pageX-l,ve=a.pageY-h;switch(X){case Me:b=g-he,p(b),t("update:width",b);break;case Ne:b=g+he,p(b),t("update:width",b);break;case de:S=I-ve,f(S),t("update:height",S);break;case pe:S=I+ve,f(S),t("update:height",S);break}t("moving",{width:b,height:S},a)}function O(a){v.moving=!1,U(window,"mousemove",Z),U(window,"mouseup",O),U(window,"contextmenu",O),document.body.style.cursor="default",t("movingEnd",a)}function F(a,l){var h,g;t("movingStart",l),v.moving=!0,v.startPageX=l.pageX,v.startPageY=l.pageY,v.direction=a;const{top:I,left:X,right:b,bottom:S}=v.padding;v.startWidth=_e(((h=R.value)==null?void 0:h.clientWidth)||0,X+b),v.startHeight=_e(((g=R.value)==null?void 0:g.clientHeight)||0,I+S),K(window,"mousemove",Z),K(window,"mouseup",O),K(window,"contextmenu",O),document.body.style.cursor=ie(a)?"row-resize":"col-resize"}function E(a,l){const{width:h,height:g}=l.contentRect,I=ie(a)?g:h;v.padding[a]=I,L[`padding-${a}`]=`${I}px`}return{prefixCls:j,classNames:q,styles:H,wrapperRef:R,onMoveStart:F,isHorizontal:ie,allowDirections:k,onTiggerResize:E}}});function Bt(e,t,s,n,o,r){const p=P("ResizeTrigger");return i(),w(Se(e.component),be({ref:"wrapperRef",class:e.classNames},e.$attrs,{style:e.styles}),{default:D(()=>[$(e.$slots,"default"),(i(!0),m(De,null,Re(e.allowDirections,u=>(i(),w(p,{key:u,"prefix-cls":`${e.prefixCls}-trigger`,class:d(`${e.prefixCls}-direction-${u}`),direction:e.isHorizontal(u)?"horizontal":"vertical",onMousedown:f=>{e.onMoveStart(u,f)},onResize:f=>{e.onTiggerResize(u,f)}},je({default:D(()=>[e.$slots["resize-trigger"]?$(e.$slots,"resize-trigger",{key:0,direction:u}):x("v-if",!0)]),_:2},[e.$slots["resize-trigger-icon"]?{name:"icon",fn:D(()=>[$(e.$slots,"resize-trigger-icon",{direction:u})])}:void 0]),1032,["prefix-cls","class","direction","onMousedown","onResize"]))),128))]),_:3},16,["class","style"])}var ae=y(Dt,[["render",Bt]]);const Tt=Object.assign(ae,{install:(e,t)=>{we(e,t);const s=ze(t);e.component(s+ae.name,ae)}});function Ht(e,t){const s=c(()=>Be(e)?e.value:e);let n="";Ce(()=>{n=me.subscribe((o,r)=>{!s.value||(!r||r===s.value)&&t(!!o[s.value])})}),Le(()=>{n&&me.unsubscribe(n)})}const Zt=(()=>{let e=0;return(t="")=>(e+=1,`${t}${e}`)})();var Et=_({name:"LayoutSider",components:{IconLeft:xe,IconRight:Ke,ResizeBox:Tt},props:{theme:{type:String,default:"light"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:{type:Boolean},collapsible:{type:Boolean},width:{type:Number,default:200},collapsedWidth:{type:Number,default:48},reverseArrow:{type:Boolean},breakpoint:{type:String},resizeDirections:{type:Array,default:void 0},hideTrigger:{type:Boolean}},emits:["collapse","update:collapsed","breakpoint"],setup(e,{emit:t}){const{theme:s,collapsed:n,defaultCollapsed:o,collapsible:r,hideTrigger:p,breakpoint:u,collapsedWidth:f,resizeDirections:R}=A(e),[L,j]=ce(o.value,B({value:n})),q=c(()=>R.value?"ResizeBox":"div"),H=c(()=>r.value&&!p.value),k=z("layout-sider"),v=c(()=>[k,{[`${k}-light`]:s.value==="light",[`${k}-has-trigger`]:H.value,[`${k}-collapsed`]:n.value}]),Z=c(()=>{const{width:l,collapsedWidth:h}=e,g=L.value?h:l;return N(g)?`${g}px`:String(g)}),O=c(()=>[`${k}-trigger`,{[`${k}-trigger-light`]:s.value==="light"}]),F=()=>{const l=!L.value;j(l),t("update:collapsed",l),t("collapse",l,"clickTrigger")};Ht(u,l=>{const h=!l;h!==L.value&&(j(h),t("update:collapsed",h),t("collapse",h,"responsive"),t("breakpoint",h))});const E=Zt("__arco_layout_sider"),a=Te(Ie,void 0);return Ce(()=>{var l;(l=a==null?void 0:a.onSiderMount)==null||l.call(a,E)}),Le(()=>{var l;(l=a==null?void 0:a.onSiderUnMount)==null||l.call(a,E)}),ke(rt,B({theme:s,collapsed:L,collapsedWidth:f})),{componentTag:q,prefixCls:k,classNames:v,triggerClassNames:O,localCollapsed:L,siderWidth:Z,showTrigger:H,toggleTrigger:F}}});const Wt={key:0},Vt={key:1};function xt(e,t,s,n,o,r){const p=P("IconLeft"),u=P("IconRight");return i(),w(Se(e.componentTag),be({class:e.classNames,style:{width:e.siderWidth}},e.resizeDirections?{directions:e.resizeDirections}:{}),{default:D(()=>[C("div",{class:d(`${e.prefixCls}-children`)},[$(e.$slots,"default")],2),e.showTrigger?(i(),m("div",{key:0,class:d(e.triggerClassNames),style:T({width:e.siderWidth}),onClick:t[0]||(t[0]=(...f)=>e.toggleTrigger&&e.toggleTrigger(...f))},[$(e.$slots,"trigger",{collapsed:e.localCollapsed},()=>[e.reverseArrow?(i(),m("div",Vt,[e.localCollapsed?(i(),w(p,{key:0})):(i(),w(u,{key:1}))])):(i(),m("div",Wt,[e.localCollapsed?(i(),w(u,{key:1})):(i(),w(p,{key:0}))]))])],6)):x("v-if",!0)]),_:3},16,["class","style"])}var le=y(Et,[["render",xt]]);const Ft=Object.assign(J,{Header:ee,Content:te,Footer:se,Sider:le,install:(e,t)=>{we(e,t);const s=ze(t);e.component(s+J.name,J),e.component(s+ee.name,ee),e.component(s+te.name,te),e.component(s+se.name,se),e.component(s+le.name,le)}});export{Ke as I,Ft as L,rt as S,ee as a,Ht as b,le as c,te as d,ce as u};
