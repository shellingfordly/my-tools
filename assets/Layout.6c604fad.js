import{g as y,_ as C,i as A,o as K,a as J,s as fe,b as be}from"./index.d66503d3.js";import{B as De}from"./index.112b9d80.js";import"./index.5aad1f1f.js";import{L as _e,u as Me,S as ze,M as He,a as Te}from"./index.102ee025.js";import{d as F,r as X,c,p as Ce,o as n,a as g,b as _,n as p,e as R,f as b,t as ie,g as T,h as B,w as m,i as j,j as Y,k as re,l as Ae,F as ce,m as Ee,q as $e,s as Le,u as Ie,v as Ne,x as Ye,y as ye,z as Ze,A as H,_ as Re,B as Pe,C as We,D as I,E as he,G as Oe,H as je}from"./index.51e79113.js";/* empty css              */import{O as Xe,S as Ve}from"./index.33960fc3.js";import{I as xe}from"./index.7b6f913b.js";import{I as Ke}from"./index.b81c55b1.js";import{u as se}from"./index.eb6c9e98.js";import{R as Je}from"./index.e2454c6d.js";import"./index.162d382c.js";import"./responsive-observe.34f7bf0c.js";import"./keyboard.9af3354b.js";var Qe=F({name:"Layout",props:{hasSider:{type:Boolean}},setup(e){const u=X([]),a=y("layout"),l=c(()=>[a,{[`${a}-has-sider`]:e.hasSider||u.value.length}]);return Ce(_e,{onSiderMount:t=>u.value.push(t),onSiderUnMount:t=>{u.value=u.value.filter(s=>s!==t)}}),{classNames:l}}});function qe(e,u,a,l,t,s){return n(),g("section",{class:p(e.classNames)},[_(e.$slots,"default")],2)}var Q=C(Qe,[["render",qe]]);const Ge=F({name:"LayoutHeader",setup(){return{classNames:[y("layout-header")]}}});function Ue(e,u,a,l,t,s){return n(),g("header",{class:p(e.classNames)},[_(e.$slots,"default")],2)}var O=C(Ge,[["render",Ue]]);const eu=F({name:"LayoutContent",setup(){return{classNames:[y("layout-content")]}}});function uu(e,u,a,l,t,s){return n(),g("main",{class:p(e.classNames)},[_(e.$slots,"default")],2)}var q=C(eu,[["render",uu]]);const au=F({name:"LayoutFooter",setup(){return{classNames:[y("layout-footer")]}}});function lu(e,u,a,l,t,s){return n(),g("footer",{class:p(e.classNames)},[_(e.$slots,"default")],2)}var G=C(au,[["render",lu]]);const tu=F({name:"IconDragDot",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},spin:Boolean},setup(e){const u=y("icon"),a=c(()=>[u,`${u}-drag-dot`,{[`${u}-spin`]:e.spin}]),l=c(()=>{if(e.size)return{fontSize:A(e.size)?`${e.size}px`:e.size}});return{cls:a,sizeStyle:l}}}),ou=["stroke-width","stroke-linecap","stroke-linejoin"],nu=b("path",{d:"M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z",fill:"currentColor",stroke:"none"},null,-1),su=b("path",{d:"M40 17v2h-2v-2h2ZM25 17v2h-2v-2h2ZM10 17v2H8v-2h2ZM40 29v2h-2v-2h2ZM25 29v2h-2v-2h2ZM10 29v2H8v-2h2Z"},null,-1),iu=[nu,su];function ru(e,u,a,l,t,s){return n(),g("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:p(e.cls),style:R(e.sizeStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},iu,14,ou)}var U=C(tu,[["render",ru]]);const cu=Object.assign(U,{install:(e,u)=>{var a;const l=(a=u==null?void 0:u.iconPrefix)!=null?a:"";e.component(l+U.name,U)}}),du=F({name:"IconDragDotVertical",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},spin:Boolean},setup(e){const u=y("icon"),a=c(()=>[u,`${u}-drag-dot-vertical`,{[`${u}-spin`]:e.spin}]),l=c(()=>{if(e.size)return{fontSize:A(e.size)?`${e.size}px`:e.size}});return{cls:a,sizeStyle:l}}}),vu=["stroke-width","stroke-linecap","stroke-linejoin"],Bu=b("path",{d:"M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z",fill:"currentColor",stroke:"none"},null,-1),pu=b("path",{d:"M17 8h2v2h-2V8ZM17 23h2v2h-2v-2ZM17 38h2v2h-2v-2ZM29 8h2v2h-2V8ZM29 23h2v2h-2v-2ZM29 38h2v2h-2v-2Z"},null,-1),hu=[Bu,pu];function gu(e,u,a,l,t,s){return n(),g("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:p(e.cls),style:R(e.sizeStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},hu,14,vu)}var ee=C(du,[["render",gu]]);const Fu=Object.assign(ee,{install:(e,u)=>{var a;const l=(a=u==null?void 0:u.iconPrefix)!=null?a:"";e.component(l+ee.name,ee)}});var Su=F({name:"ResizeTrigger",components:{ResizeObserver:Je,IconDragDot:cu,IconDragDotVertical:Fu},props:{prefixCls:{type:String,required:!0},direction:{type:String,default:"horizontal"}},emits:["resize"],setup(e,{emit:u}){const{direction:a,prefixCls:l}=ie(e),t=c(()=>(a==null?void 0:a.value)==="horizontal");return{classNames:c(()=>[l.value,{[`${l.value}-horizontal`]:t.value,[`${l.value}-vertical`]:!t.value}]),onResize:o=>{u("resize",o)},isHorizontal:t}}});function mu(e,u,a,l,t,s){const r=T("IconDragDot"),o=T("IconDragDotVertical"),i=T("ResizeObserver");return n(),B(i,{onResize:e.onResize},{default:m(()=>[b("div",{class:p(e.classNames)},[j(" @slot \u81EA\u5B9A\u4E49\u5185\u5BB9 "),_(e.$slots,"default",{},()=>[b("div",{class:p(`${e.prefixCls}-icon-wrapper`)},[j(" @slot \u81EA\u5B9A\u4E49 icon "),_(e.$slots,"icon",{},()=>[e.isHorizontal?(n(),B(r,{key:0,class:p(`${e.prefixCls}-icon`)},null,8,["class"])):(n(),B(o,{key:1,class:p(`${e.prefixCls}-icon`)},null,8,["class"]))])],2)])],2)]),_:3},8,["onResize"])}var fu=C(Su,[["render",mu]]),bu=Object.defineProperty,ge=Object.getOwnPropertySymbols,_u=Object.prototype.hasOwnProperty,Cu=Object.prototype.propertyIsEnumerable,Fe=(e,u,a)=>u in e?bu(e,u,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[u]=a,ue=(e,u)=>{for(var a in u||(u={}))_u.call(u,a)&&Fe(e,a,u[a]);if(ge)for(var a of ge(u))Cu.call(u,a)&&Fe(e,a,u[a]);return e};const we="left",ke="right",de="top",ve="bottom",Eu=[we,ke,de,ve];function Se(e,u){if(e===0)return 0;const a=e-u;return a<=0?0:a}function ae(e){return[de,ve].indexOf(e)>-1}const $u=F({name:"ResizeBox",components:{ResizeTrigger:fu},inheritAttrs:!1,props:{width:{type:Number},height:{type:Number},component:{type:String,default:"div"},directions:{type:Array,default:()=>["right"]}},emits:{"update:width":e=>!0,"update:height":e=>!0,movingStart:e=>!0,moving:(e,u)=>!0,movingEnd:e=>!0},setup(e,{emit:u}){const{height:a,width:l,directions:t}=ie(e),[s,r]=se(null,Y({value:l})),[o,i]=se(null,Y({value:a})),M=X(),E=Y({}),z=y("resizebox"),N=c(()=>[z]),$=c(()=>ue(ue(ue({},A(s.value)?{width:`${s.value}px`}:{}),A(o.value)?{height:`${o.value}px`}:{}),E)),Z=c(()=>t.value.filter(d=>Eu.includes(d))),S={direction:"",startPageX:0,startPageY:0,startWidth:0,startHeight:0,moving:!1,padding:{left:0,right:0,top:0,bottom:0}};function P(d){if(!S.moving)return;const{startPageX:v,startPageY:h,startWidth:f,startHeight:D,direction:x}=S;let w=f,k=D;const Be=d.pageX-v,pe=d.pageY-h;switch(x){case we:w=f-Be,r(w),u("update:width",w);break;case ke:w=f+Be,r(w),u("update:width",w);break;case de:k=D-pe,i(k),u("update:height",k);break;case ve:k=D+pe,i(k),u("update:height",k);break}u("moving",{width:w,height:k},d)}function L(d){S.moving=!1,J(window,"mousemove",P),J(window,"mouseup",L),J(window,"contextmenu",L),document.body.style.cursor="default",u("movingEnd",d)}function V(d,v){var h,f;u("movingStart",v),S.moving=!0,S.startPageX=v.pageX,S.startPageY=v.pageY,S.direction=d;const{top:D,left:x,right:w,bottom:k}=S.padding;S.startWidth=Se(((h=M.value)==null?void 0:h.clientWidth)||0,x+w),S.startHeight=Se(((f=M.value)==null?void 0:f.clientHeight)||0,D+k),K(window,"mousemove",P),K(window,"mouseup",L),K(window,"contextmenu",L),document.body.style.cursor=ae(d)?"row-resize":"col-resize"}function W(d,v){const{width:h,height:f}=v.contentRect,D=ae(d)?f:h;S.padding[d]=D,E[`padding-${d}`]=`${D}px`}return{prefixCls:z,classNames:N,styles:$,wrapperRef:M,onMoveStart:V,isHorizontal:ae,allowDirections:Z,onTiggerResize:W}}});function yu(e,u,a,l,t,s){const r=T("ResizeTrigger");return n(),B($e(e.component),Ee({ref:"wrapperRef",class:e.classNames},e.$attrs,{style:e.styles}),{default:m(()=>[_(e.$slots,"default"),(n(!0),g(ce,null,re(e.allowDirections,o=>(n(),B(r,{key:o,"prefix-cls":`${e.prefixCls}-trigger`,class:p(`${e.prefixCls}-direction-${o}`),direction:e.isHorizontal(o)?"horizontal":"vertical",onMousedown:i=>{e.onMoveStart(o,i)},onResize:i=>{e.onTiggerResize(o,i)}},Ae({default:m(()=>[e.$slots["resize-trigger"]?_(e.$slots,"resize-trigger",{key:0,direction:o}):j("v-if",!0)]),_:2},[e.$slots["resize-trigger-icon"]?{name:"icon",fn:m(()=>[_(e.$slots,"resize-trigger-icon",{direction:o})])}:void 0]),1032,["prefix-cls","class","direction","onMousedown","onResize"]))),128))]),_:3},16,["class","style"])}var le=C($u,[["render",yu]]);const Zu=Object.assign(le,{install:(e,u)=>{fe(e,u);const a=be(u);e.component(a+le.name,le)}}),wu=(()=>{let e=0;return(u="")=>(e+=1,`${u}${e}`)})();var ku=F({name:"LayoutSider",components:{IconLeft:Ke,IconRight:xe,ResizeBox:Zu},props:{theme:{type:String,default:"light"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:{type:Boolean},collapsible:{type:Boolean},width:{type:Number,default:200},collapsedWidth:{type:Number,default:48},reverseArrow:{type:Boolean},breakpoint:{type:String},resizeDirections:{type:Array,default:void 0},hideTrigger:{type:Boolean}},emits:["collapse","update:collapsed","breakpoint"],setup(e,{emit:u}){const{theme:a,collapsed:l,defaultCollapsed:t,collapsible:s,hideTrigger:r,breakpoint:o,collapsedWidth:i,resizeDirections:M}=ie(e),[E,z]=se(t.value,Y({value:l})),N=c(()=>M.value?"ResizeBox":"div"),$=c(()=>s.value&&!r.value),Z=y("layout-sider"),S=c(()=>[Z,{[`${Z}-light`]:a.value==="light",[`${Z}-has-trigger`]:$.value,[`${Z}-collapsed`]:l.value}]),P=c(()=>{const{width:v,collapsedWidth:h}=e,f=E.value?h:v;return A(f)?`${f}px`:String(f)}),L=c(()=>[`${Z}-trigger`,{[`${Z}-trigger-light`]:a.value==="light"}]),V=()=>{const v=!E.value;z(v),u("update:collapsed",v),u("collapse",v,"clickTrigger")};Me(o,v=>{const h=!v;h!==E.value&&(z(h),u("update:collapsed",h),u("collapse",h,"responsive"),u("breakpoint",h))});const W=wu("__arco_layout_sider"),d=Le(_e,void 0);return Ie(()=>{var v;(v=d==null?void 0:d.onSiderMount)==null||v.call(d,W)}),Ne(()=>{var v;(v=d==null?void 0:d.onSiderUnMount)==null||v.call(d,W)}),Ce(ze,Y({theme:a,collapsed:E,collapsedWidth:i})),{componentTag:N,prefixCls:Z,classNames:S,triggerClassNames:L,localCollapsed:E,siderWidth:P,showTrigger:$,toggleTrigger:V}}});const Du={key:0},Mu={key:1};function zu(e,u,a,l,t,s){const r=T("IconLeft"),o=T("IconRight");return n(),B($e(e.componentTag),Ee({class:e.classNames,style:{width:e.siderWidth}},e.resizeDirections?{directions:e.resizeDirections}:{}),{default:m(()=>[b("div",{class:p(`${e.prefixCls}-children`)},[_(e.$slots,"default")],2),e.showTrigger?(n(),g("div",{key:0,class:p(e.triggerClassNames),style:R({width:e.siderWidth}),onClick:u[0]||(u[0]=(...i)=>e.toggleTrigger&&e.toggleTrigger(...i))},[_(e.$slots,"trigger",{collapsed:e.localCollapsed},()=>[e.reverseArrow?(n(),g("div",Mu,[e.localCollapsed?(n(),B(r,{key:0})):(n(),B(o,{key:1}))])):(n(),g("div",Du,[e.localCollapsed?(n(),B(o,{key:1})):(n(),B(r,{key:0}))]))])],6)):j("v-if",!0)]),_:3},16,["class","style"])}var te=C(ku,[["render",zu]]);const Hu=Object.assign(Q,{Header:O,Content:q,Footer:G,Sider:te,install:(e,u)=>{fe(e,u);const a=be(u);e.component(a+Q.name,Q),e.component(a+O.name,O),e.component(a+q.name,q),e.component(a+G.name,G),e.component(a+te.name,te)}}),Tu=F({name:"IconMoonFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},spin:Boolean},setup(e){const u=y("icon"),a=c(()=>[u,`${u}-moon-fill`,{[`${u}-spin`]:e.spin}]),l=c(()=>{if(e.size)return{fontSize:A(e.size)?`${e.size}px`:e.size}});return{cls:a,sizeStyle:l}}}),Au=["stroke-width","stroke-linecap","stroke-linejoin"],Lu=b("path",{d:"M42.108 29.769c.124-.387-.258-.736-.645-.613A17.99 17.99 0 0 1 36 30c-9.941 0-18-8.059-18-18 0-1.904.296-3.74.844-5.463.123-.387-.226-.768-.613-.645C10.558 8.334 5 15.518 5 24c0 10.493 8.507 19 19 19 8.482 0 15.666-5.558 18.108-13.231Z",fill:"currentColor",stroke:"none"},null,-1),Iu=[Lu];function Nu(e,u,a,l,t,s){return n(),g("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:p(e.cls),style:R(e.sizeStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},Iu,14,Au)}var oe=C(Tu,[["render",Nu]]);const Yu=Object.assign(oe,{install:(e,u)=>{var a;const l=(a=u==null?void 0:u.iconPrefix)!=null?a:"";e.component(l+oe.name,oe)}}),Ru=F({name:"IconSunFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},spin:Boolean},setup(e){const u=y("icon"),a=c(()=>[u,`${u}-sun-fill`,{[`${u}-spin`]:e.spin}]),l=c(()=>{if(e.size)return{fontSize:A(e.size)?`${e.size}px`:e.size}});return{cls:a,sizeStyle:l}}}),Pu=["stroke-width","stroke-linecap","stroke-linejoin"],Wu=b("circle",{cx:"24",cy:"24",r:"9",fill:"currentColor",stroke:"none"},null,-1),Ou=b("path",{d:"M21 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5ZM21 37.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5ZM42.5 21a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h5ZM10.5 21a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h5ZM39.203 34.96a.5.5 0 0 1 0 .707l-3.536 3.536a.5.5 0 0 1-.707 0l-3.535-3.536a.5.5 0 0 1 0-.707l3.535-3.535a.5.5 0 0 1 .707 0l3.536 3.535ZM16.575 12.333a.5.5 0 0 1 0 .707l-3.535 3.535a.5.5 0 0 1-.707 0L8.797 13.04a.5.5 0 0 1 0-.707l3.536-3.536a.5.5 0 0 1 .707 0l3.535 3.536ZM13.04 39.203a.5.5 0 0 1-.707 0l-3.536-3.536a.5.5 0 0 1 0-.707l3.536-3.535a.5.5 0 0 1 .707 0l3.536 3.535a.5.5 0 0 1 0 .707l-3.536 3.536ZM35.668 16.575a.5.5 0 0 1-.708 0l-3.535-3.535a.5.5 0 0 1 0-.707l3.535-3.536a.5.5 0 0 1 .708 0l3.535 3.536a.5.5 0 0 1 0 .707l-3.535 3.535Z",fill:"currentColor",stroke:"none"},null,-1),ju=[Wu,Ou];function Xu(e,u,a,l,t,s){return n(),g("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:p(e.cls),style:R(e.sizeStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},ju,14,Pu)}var ne=C(Ru,[["render",Xu]]);const Vu=Object.assign(ne,{install:(e,u)=>{var a;const l=(a=u==null?void 0:u.iconPrefix)!=null?a:"";e.component(l+ne.name,ne)}});function xu(){const e=X(!0);Ye(e,()=>{u()},{immediate:!0});function u(){e.value?document.body.setAttribute("arco-theme","dark"):document.body.removeAttribute("arco-theme")}return{isDark:e,changeTheme:u}}const me=[{label:"\u9ED8\u8BA4",value:"auto"},{label:"\u5B8B\u4F53",value:"SimSun"},{label:"\u9ED1\u4F53",value:"SimHei"},{label:"\u5FAE\u8F6F\u96C5\u9ED1",value:"Microsoft Yahei"},{label:"\u5FAE\u8F6F\u6B63\u9ED1\u4F53",value:"Microsoft JhengHei"},{label:"\u6977\u4F53",value:"KaiTi"},{label:"\u65B0\u5B8B\u4F53",value:"NSimSun"},{label:"\u4EFF\u5B8B",value:"FangSong"},{label:"\u82F9\u65B9",value:"PingFang SC"},{label:"\u534E\u6587\u9ED1\u4F53",value:"STHeiti"},{label:"\u534E\u6587\u6977\u4F53",value:"STKaiti"},{label:"\u534E\u6587\u5B8B\u4F53",value:"STSong"},{label:"\u534E\u6587\u4EFF\u5B8B",value:"STFangsong"},{label:"\u534E\u6587\u4E2D\u5B8B",value:"STZhongsong"},{label:"\u534E\u6587\u7425\u73C0",value:"STHupo"},{label:"\u534E\u6587\u65B0\u9B4F",value:"STXinwei"},{label:"\u534E\u6587\u96B6\u4E66",value:"STLiti"},{label:"\u534E\u6587\u884C\u6977",value:"STXingkai"},{label:"\u51AC\u9752\u9ED1\u4F53\u7B80",value:"Hiragino Sans GB"},{label:"\u5170\u4EAD\u9ED1-\u7B80",value:"Lantinghei SC"},{label:"\u7FE9\u7FE9\u4F53-\u7B80",value:"Hanzipen SC"},{label:"\u624B\u672D\u4F53-\u7B80",value:"Hannotate SC"},{label:"\u5B8B\u4F53-\u7B80",value:"Songti SC"},{label:"\u5A03\u5A03\u4F53-\u7B80",value:"Wawati SC"},{label:"\u9B4F\u7891-\u7B80",value:"Weibei SC"},{label:"\u884C\u6977-\u7B80",value:"Xingkai SC"},{label:"\u96C5\u75DE-\u7B80",value:"Yapi SC"},{label:"\u5706\u4F53-\u7B80",value:"Yuanti SC"},{label:"\u5E7C\u5706",value:"YouYuan"},{label:"\u96B6\u4E66",value:"LiSu"},{label:"\u534E\u6587\u7EC6\u9ED1",value:"STXihei"},{label:"\u534E\u6587\u6977\u4F53",value:"STKaiti"},{label:"\u534E\u6587\u5B8B\u4F53",value:"STSong"},{label:"\u534E\u6587\u4EFF\u5B8B",value:"STFangsong"},{label:"\u534E\u6587\u4E2D\u5B8B",value:"STZhongsong"},{label:"\u534E\u6587\u5F69\u4E91",value:"STCaiyun"},{label:"\u534E\u6587\u7425\u73C0",value:"STHupo"},{label:"\u534E\u6587\u65B0\u9B4F",value:"STXinwei"},{label:"\u534E\u6587\u96B6\u4E66",value:"STLiti"},{label:"\u534E\u6587\u884C\u6977",value:"STXingkai"},{label:"\u65B9\u6B63\u8212\u4F53",value:"FZShuTi"},{label:"\u65B9\u6B63\u59DA\u4F53",value:"FZYaoti"},{label:"\u601D\u6E90\u9ED1\u4F53",value:"Source Han Sans CN"},{label:"\u601D\u6E90\u5B8B\u4F53",value:"Source Han Serif SC"},{label:"\u6587\u6CC9\u9A7F\u5FAE\u7C73\u9ED1",value:"WenQuanYi Micro Hei"},{label:"\u6C49\u4EEA\u65D7\u9ED1",value:"HYQihei 40S"},{label:"\u6C49\u4EEA\u65D7\u9ED1",value:"HYQihei 50S"},{label:"\u6C49\u4EEA\u65D7\u9ED1",value:"HYQihei 60S"},{label:"\u6C49\u4EEA\u5927\u5B8B\u7B80",value:"HYDaSongJ"},{label:"\u6C49\u4EEA\u6977\u4F53",value:"HYKaiti"},{label:"\u6C49\u4EEA\u5BB6\u4E66\u7B80",value:"HYJiaShuJ"},{label:"\u6C49\u4EEAPP\u4F53\u7B80",value:"HYPPTiJ"},{label:"\u6C49\u4EEA\u4E50\u55B5\u4F53\u7B80",value:"HYLeMiaoTi"},{label:"\u6C49\u4EEA\u5C0F\u9EA6\u4F53",value:"HYXiaoMaiTiJ"},{label:"\u6C49\u4EEA\u7A0B\u884C\u4F53",value:"HYChengXingJ"},{label:"\u6C49\u4EEA\u9ED1\u8354\u679D",value:"HYHeiLiZhiTiJ"},{label:"\u6C49\u4EEA\u96C5\u9177\u9ED1W",value:"HYYaKuHeiW"},{label:"\u6C49\u4EEA\u5927\u9ED1\u7B80",value:"HYDaHeiJ"},{label:"\u6C49\u4EEA\u5C1A\u9B4F\u624B\u4E66W",value:"HYShangWeiShouShuW"},{label:"\u65B9\u6B63\u7C97\u96C5\u5B8B\u7B80\u4F53",value:"FZYaSongS-B-GB"},{label:"\u65B9\u6B63\u62A5\u5B8B\u7B80\u4F53",value:"FZBaoSong-Z04S"},{label:"\u65B9\u6B63\u7C97\u5706\u7B80\u4F53",value:"FZCuYuan-M03S"},{label:"\u65B9\u6B63\u5927\u6807\u5B8B\u7B80\u4F53",value:"FZDaBiaoSong-B06S"},{label:"\u65B9\u6B63\u5927\u9ED1\u7B80\u4F53",value:"FZDaHei-B02S"},{label:"\u65B9\u6B63\u4EFF\u5B8B\u7B80\u4F53",value:"FZFangSong-Z02S"},{label:"\u65B9\u6B63\u9ED1\u4F53\u7B80\u4F53",value:"FZHei-B01S"},{label:"\u65B9\u6B63\u7425\u73C0\u7B80\u4F53",value:"FZHuPo-M04S"},{label:"\u65B9\u6B63\u6977\u4F53\u7B80\u4F53",value:"FZKai-Z03S"},{label:"\u65B9\u6B63\u96B6\u53D8\u7B80\u4F53",value:"FZLiBian-S02S"},{label:"\u65B9\u6B63\u96B6\u4E66\u7B80\u4F53",value:"FZLiShu-S01S"},{label:"\u65B9\u6B63\u7F8E\u9ED1\u7B80\u4F53",value:"FZMeiHei-M07S"},{label:"\u65B9\u6B63\u4E66\u5B8B\u7B80\u4F53",value:"FZShuSong-Z01S"},{label:"\u65B9\u6B63\u8212\u4F53\u7B80\u4F53",value:"FZShuTi-S05S"},{label:"\u65B9\u6B63\u6C34\u67F1\u7B80\u4F53",value:"FZShuiZhu-M08S"},{label:"\u65B9\u6B63\u5B8B\u9ED1\u7B80\u4F53",value:"FZSongHei-B07S"},{label:"\u65B9\u6B63\u5B8B\u4E09\u7B80\u4F53",value:"FZSong"},{label:"\u65B9\u6B63\u9B4F\u7891\u7B80\u4F53",value:"FZWeiBei-S03S"},{label:"\u65B9\u6B63\u7EC6\u7B49\u7EBF\u7B80\u4F53",value:"FZXiDengXian-Z06S"},{label:"\u65B9\u6B63\u7EC6\u9ED1\u4E00\u7B80\u4F53",value:"FZXiHei I-Z08S"},{label:"\u65B9\u6B63\u7EC6\u5706\u7B80\u4F53",value:"FZXiYuan-M01S"},{label:"\u65B9\u6B63\u5C0F\u6807\u5B8B\u7B80\u4F53",value:"FZXiaoBiaoSong-B05S"},{label:"\u65B9\u6B63\u884C\u6977\u7B80\u4F53",value:"FZXingKai-S04S"},{label:"\u65B9\u6B63\u59DA\u4F53\u7B80\u4F53",value:"FZYaoTi-M06S"},{label:"\u65B9\u6B63\u4E2D\u7B49\u7EBF\u7B80\u4F53",value:"FZZhongDengXian-Z07S"},{label:"\u65B9\u6B63\u51C6\u5706\u7B80\u4F53",value:"FZZhunYuan-M02S"},{label:"\u65B9\u6B63\u7EFC\u827A\u7B80\u4F53",value:"FZZongYi-M05S"},{label:"\u65B9\u6B63\u5F69\u4E91\u7B80\u4F53",value:"FZCaiYun-M09S"},{label:"\u65B9\u6B63\u96B6\u4E8C\u7B80\u4F53",value:"FZLiShu II-S06S"},{label:"\u65B9\u6B63\u5EB7\u4F53\u7B80\u4F53",value:"FZKangTi-S07S"},{label:"\u65B9\u6B63\u8D85\u7C97\u9ED1\u7B80\u4F53",value:"FZChaoCuHei-M10S"},{label:"\u65B9\u6B63\u65B0\u62A5\u5B8B\u7B80\u4F53",value:"FZNew BaoSong-Z12S"},{label:"\u65B9\u6B63\u65B0\u8212\u4F53\u7B80\u4F53",value:"FZNew ShuTi-S08S"},{label:"\u65B9\u6B63\u9EC4\u8349\u7B80\u4F53",value:"FZHuangCao-S09S"},{label:"\u65B9\u6B63\u5C11\u513F\u7B80\u4F53",value:"FZShaoEr-M11S"},{label:"\u65B9\u6B63\u7A1A\u827A\u7B80\u4F53",value:"FZZhiYi-M12S"},{label:"\u65B9\u6B63\u7EC6\u73CA\u745A\u7B80\u4F53",value:"FZXiShanHu-M13S"},{label:"\u65B9\u6B63\u7C97\u5B8B\u7B80\u4F53",value:"FZCuSong-B09S"},{label:"\u65B9\u6B63\u5E73\u548C\u7B80\u4F53",value:"FZPingHe-S11S"},{label:"\u65B9\u6B63\u534E\u96B6\u7B80\u4F53",value:"FZHuaLi-M14S"},{label:"\u65B9\u6B63\u7626\u91D1\u4E66\u7B80\u4F53",value:"FZShouJinShu-S10S"},{label:"\u65B9\u6B63\u7EC6\u5029\u7B80\u4F53",value:"FZXiQian-M15S"},{label:"\u65B9\u6B63\u4E2D\u5029\u7B80\u4F53",value:"FZZhongQian-M16S"},{label:"\u65B9\u6B63\u7C97\u5029\u7B80\u4F53",value:"FZCuQian-M17S"},{label:"\u65B9\u6B63\u80D6\u5A03\u7B80\u4F53",value:"FZPangWa-M18S"},{label:"\u65B9\u6B63\u5B8B\u4E00\u7B80\u4F53",value:"FZSongYi-Z13S"},{label:"\u65B9\u6B63\u526A\u7EB8\u7B80\u4F53",value:"FZJianZhi-M23S"},{label:"\u65B9\u6B63\u6D41\u884C\u4F53\u7B80\u4F53",value:"FZLiuXingTi-M26S"},{label:"\u65B9\u6B63\u7965\u96B6\u7B80\u4F53",value:"FZXiangLi-S17S"},{label:"\u65B9\u6B63\u7C97\u6D3B\u610F\u7B80\u4F53",value:"FZCuHuoYi-M25S"},{label:"\u65B9\u6B63\u80D6\u5934\u9C7C\u7B80\u4F53",value:"FZPangTouYu-M24S"},{label:"\u65B9\u6B63\u5361\u901A\u7B80\u4F53",value:"FZKaTong-M19S"},{label:"\u65B9\u6B63\u827A\u9ED1\u7B80\u4F53",value:"FZYiHei-M20S"},{label:"\u65B9\u6B63\u6C34\u9ED1\u7B80\u4F53",value:"FZShuiHei-M21S"},{label:"\u65B9\u6B63\u53E4\u96B6\u7B80\u4F53",value:"FZGuLi-S12S"},{label:"\u65B9\u6B63\u5E7C\u7EBF\u7B80\u4F53",value:"FZYouXian-Z09S"},{label:"\u65B9\u6B63\u542F\u4F53\u7B80\u4F53",value:"FZQiTi-S14S"},{label:"\u65B9\u6B63\u5C0F\u7BC6\u4F53",value:"FZXiaoZhuanTi-S13T"},{label:"\u65B9\u6B63\u786C\u7B14\u6977\u4E66\u7B80\u4F53",value:"FZYingBiKaiShu-S15S"},{label:"\u65B9\u6B63\u6BE1\u7B14\u9ED1\u7B80\u4F53",value:"FZZhanBiHei-M22S"},{label:"\u65B9\u6B63\u786C\u7B14\u884C\u4E66\u7B80\u4F53",value:"FZYingBiXingShu-S16S"}],Ku=F({__name:"FontFamily",setup(e){const u=X("auto"),a=c(()=>{const t=[...new Set(me.map(r=>r.value))],s=[...new Set(me.map(r=>r.label))];return t.map((r,o)=>({value:r,label:s[o]}))});function l(t){const s=document.body;s.style.fontFamily=t}return(t,s)=>{const r=Xe,o=Ve;return n(),B(o,{modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=i=>u.value=i),onChange:l,style:{width:"200px"},"allow-search":"","allow-create":"",placeholder:"\u9009\u62E9\u5B57\u4F53"},{default:m(()=>[(n(!0),g(ce,null,re(H(a),i=>(n(),B(r,{value:i.value},{default:m(()=>[ye(Ze(i.label),1)]),_:2},1032,["value"]))),256))]),_:1},8,["modelValue"])}}});const Ju=e=>(Oe("data-v-48819e14"),e=e(),je(),e),Qu=Ju(()=>b("div",{style:{width:"300px"}},null,-1)),qu={"f-ac":""},Gu=F({__name:"Header",setup(e){const u=c(()=>he.map(o=>{var i;return{name:(i=o.meta)==null?void 0:i.name,path:o.path}})),a=Pe(),l=We(),t=c(()=>{var o;return((o=he.find(i=>a.path.includes(i.path)))==null?void 0:o.path)||""}),{isDark:s}=xu();function r(o){l.push(o)}return(o,i)=>{const M=He,E=Te,z=De,N=O;return n(),B(N,{class:"header"},{default:m(()=>[Qu,I(E,{class:"menu",selectedKeys:[H(t)],mode:"horizontal",onMenuItemClick:r},{default:m(()=>[(n(!0),g(ce,null,re(H(u),$=>(n(),B(M,{key:$.path},{default:m(()=>[ye(Ze($==null?void 0:$.name),1)]),_:2},1024))),128))]),_:1},8,["selectedKeys"]),b("div",qu,[I(z,{type:"text","mr-10":"",onClick:i[0]||(i[0]=$=>s.value=!H(s))},{default:m(()=>[H(s)?(n(),B(H(Vu),{key:0})):(n(),B(H(Yu),{key:1}))]),_:1}),I(Ku)])]),_:1})}}});var Uu=Re(Gu,[["__scopeId","data-v-48819e14"]]);const pa=F({__name:"Layout",setup(e){return(u,a)=>{const l=T("RouterView"),t=Hu;return n(),B(t,{"hp-100":""},{default:m(()=>[I(Uu),I(t,null,{default:m(()=>[I(l)]),_:1})]),_:1})}}});export{pa as default};
