import{e as Ue,f as Xe,h as Ze,d as Ce,j as Ge,g as Ee,o as Ye,k as Qe,l as Ke,m as Je,s as Re,b as et,i as tt,_ as ot}from"./index.e2f750c2.js";import{i as m,y as z,P as Q,d as F,x as k,Q as K,q as lt,C as nt,c as S,n as de,E as rt,H as st,j as b,R as at,J as it,T as ut,N as dt,O as ct,F as ft,S as ht,o as vt,b as mt,A as pt,B as wt,k as bt}from"./index.b4b0c0eb.js";const xe=typeof window=="undefined"?global:window,gt=xe.requestAnimationFrame,ce=xe.cancelAnimationFrame;function yt(e){let t=0;const o=(...l)=>{t&&ce(t),t=gt(()=>{e(...l),t=0})};return o.cancel=()=>{ce(t),t=0},o}const J=()=>{},R=(()=>{try{return!(typeof window!="undefined"&&document!==void 0)}catch{return!0}})(),fe=(()=>R?J:(e,t,o,l=!1)=>{e.addEventListener(t,o,l)})(),_t=(()=>R?J:(e,t,o,l=!1)=>{e.removeEventListener(t,o,l)})(),ho=(e,t)=>{if(!e||!t)return!1;let o=t;for(;o;){if(o===e)return!0;o=o.parentNode}return!1},vo=e=>{const t=document.createElement("div");return t.setAttribute("class",`arco-overlay arco-overlay-${e}`),t},Ot=(e,t)=>{var o;return R?J():(o=(t!=null?t:document).querySelector(e))!=null?o:void 0},he=(e,t)=>{if(Ue(e)){const o=e[0]==="#"?`[id='${e.slice(1)}']`:e;return Ot(o,t)}return e},mo=(e,t)=>{const o=e.getBoundingClientRect(),l=t.getBoundingClientRect();return{top:o.top-l.top,bottom:l.bottom-o.bottom,left:o.left-l.left,right:l.right-o.right,width:o.width,height:o.height}},po=e=>e.tagName==="BODY"?document.documentElement.scrollHeight>window.innerHeight:e.scrollHeight>e.offsetHeight,wo=e=>e.tagName==="BODY"?window.innerWidth-(document.documentElement.offsetWidth||document.body.offsetWidth):e.offsetWidth-e.clientWidth;var St=Object.defineProperty,ve=Object.getOwnPropertySymbols,Pt=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable,me=(e,t,o)=>t in e?St(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,T=(e,t)=>{for(var o in t||(t={}))Pt.call(t,o)&&me(e,o,t[o]);if(ve)for(var o of ve(t))Ct.call(t,o)&&me(e,o,t[o]);return e};const Et=()=>({width:document.documentElement.clientWidth||window.innerWidth,height:document.documentElement.clientHeight||window.innerHeight}),pe=(e,t)=>{var o,l;const r=e.getBoundingClientRect();return{top:r.top,bottom:r.bottom,left:r.left,right:r.right,scrollTop:r.top-t.top,scrollBottom:r.bottom-t.top,scrollLeft:r.left-t.left,scrollRight:r.right-t.left,width:(o=e.offsetWidth)!=null?o:e.clientWidth,height:(l=e.offsetHeight)!=null?l:e.clientHeight}},xt=e=>{switch(e){case"top":case"tl":case"tr":return"top";case"bottom":case"bl":case"br":return"bottom";case"left":case"lt":case"lb":return"left";case"right":case"rt":case"rb":return"right";default:return"top"}},D=(e,t)=>{switch(t){case"top":switch(e){case"bottom":return"top";case"bl":return"tl";case"br":return"tr";default:return e}case"bottom":switch(e){case"top":return"bottom";case"tl":return"bl";case"tr":return"br";default:return e}case"left":switch(e){case"right":return"left";case"rt":return"lt";case"rb":return"lb";default:return e}case"right":switch(e){case"left":return"right";case"lt":return"rt";case"lb":return"rb";default:return e}default:return e}},Bt=(e,t,{containerRect:o,triggerRect:l,popupRect:r,offset:a,translate:s})=>{const d=xt(e),i=Et(),c={top:o.top+t.top,bottom:i.height-(o.top+t.top+r.height),left:o.left+t.left,right:i.width-(o.left+t.left+r.width)};let f=e;if(d==="top"&&c.top<0)if(l.top>r.height)t.top=-o.top;else{const v=$("bottom",l,r,{offset:a,translate:s});i.height-(o.top+v.top+r.height)>0&&(f=D(e,"bottom"),t.top=v.top)}if(d==="bottom"&&c.bottom<0)if(i.height-l.bottom>r.height)t.top=-o.top+(i.height-r.height);else{const v=$("top",l,r,{offset:a,translate:s});o.top+v.top>0&&(f=D(e,"top"),t.top=v.top)}if(d==="left"&&c.left<0)if(l.left>r.width)t.left=-o.left;else{const v=$("right",l,r,{offset:a,translate:s});i.width-(o.left+v.left+r.width)>0&&(f=D(e,"right"),t.left=v.left)}if(d==="right"&&c.right<0)if(i.width-l.right>r.width)t.left=-o.left+(i.width-r.width);else{const v=$("left",l,r,{offset:a,translate:s});o.left+v.left>0&&(f=D(e,"left"),t.left=v.left)}return(d==="top"||d==="bottom")&&(c.left<0?t.left=-o.left:c.right<0&&(t.left=-o.left+(i.width-r.width))),(d==="left"||d==="right")&&(c.top<0?t.top=-o.top:c.bottom<0&&(t.top=-o.top+(i.height-r.height))),{popupPosition:t,position:f}},$=(e,t,o,{offset:l=0,translate:r=[0,0]}={})=>{var a;const s=(a=Xe(r)?r:r[e])!=null?a:[0,0];switch(e){case"top":return{left:t.scrollLeft+Math.round(t.width/2)-Math.round(o.width/2)+s[0],top:t.scrollTop-o.height-l+s[1]};case"tl":return{left:t.scrollLeft+s[0],top:t.scrollTop-o.height-l+s[1]};case"tr":return{left:t.scrollRight-o.width+s[0],top:t.scrollTop-o.height-l+s[1]};case"bottom":return{left:t.scrollLeft+Math.round(t.width/2)-Math.round(o.width/2)+s[0],top:t.scrollBottom+l+s[1]};case"bl":return{left:t.scrollLeft+s[0],top:t.scrollBottom+l+s[1]};case"br":return{left:t.scrollRight-o.width+s[0],top:t.scrollBottom+l+s[1]};case"left":return{left:t.scrollLeft-o.width-l+s[0],top:t.scrollTop+Math.round(t.height/2)-Math.round(o.height/2)+s[1]};case"lt":return{left:t.scrollLeft-o.width-l+s[0],top:t.scrollTop+s[1]};case"lb":return{left:t.scrollLeft-o.width-l+s[0],top:t.scrollBottom-o.height+s[1]};case"right":return{left:t.scrollRight+l+s[0],top:t.scrollTop+Math.round(t.height/2)-Math.round(o.height/2)+s[1]};case"rt":return{left:t.scrollRight+l+s[0],top:t.scrollTop+s[1]};case"rb":return{left:t.scrollRight+l+s[0],top:t.scrollBottom-o.height+s[1]};default:return{left:0,top:0}}},Mt=e=>{let t="0";["top","bottom"].includes(e)?t="50%":["left","lt","lb","tr","br"].includes(e)&&(t="100%");let o="0";return["left","right"].includes(e)?o="50%":["top","tl","tr","lt","rt"].includes(e)&&(o="100%"),`${t} ${o}`},Tt=(e,t,o,l,{offset:r=0,translate:a=[0,0],customStyle:s={},autoFitPosition:d=!1}={})=>{let i=e,c=$(e,o,l,{offset:r,translate:a});if(d){const v=Bt(e,c,{containerRect:t,popupRect:l,triggerRect:o,offset:r,translate:a});c=v.popupPosition,i=v.position}return{style:T({left:`${c.left}px`,top:`${c.top}px`},s),position:i}},$t=(e,t,o,{customStyle:l={}})=>{if(["top","tl","tr","bottom","bl","br"].includes(e)){let a=Math.abs(t.scrollLeft+t.width/2-o.scrollLeft);return a>o.width-8&&(t.width>o.width?a=o.width/2:a=o.width-8),["top","tl","tr"].includes(e)?T({left:`${a}px`,bottom:"0",transform:"translate(-50%,50%) rotate(45deg)"},l):T({left:`${a}px`,top:"0",transform:"translate(-50%,-50%) rotate(45deg)"},l)}let r=Math.abs(t.scrollTop+t.height/2-o.scrollTop);return r>o.height-8&&(t.height>o.height?r=o.height/2:r=o.height-8),["left","lt","lb"].includes(e)?T({top:`${r}px`,right:"0",transform:"translate(50%,-50%) rotate(45deg)"},l):T({top:`${r}px`,left:"0",transform:"translate(-50%,-50%) rotate(45deg)"},l)},kt=e=>e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth,we=e=>{var t;const o=[];let l=e;for(;l&&l!==document.documentElement;)kt(l)&&o.push(l),l=(t=l.parentElement)!=null?t:void 0;return o},Be=()=>{const e={},t=m(),o=()=>{const l=Ze(e.value);l!==t.value&&(t.value=l)};return z(()=>o()),Q(()=>o()),{children:e,firstElement:t}};var be=F({name:"ResizeObserver",props:{watchOnUpdated:Boolean},emits:["resize"],setup(e,{emit:t,slots:o}){const{children:l,firstElement:r}=Be();let a;const s=i=>{!i||(a=new Ce(c=>{const f=c[0];t("resize",f)}),a.observe(i))},d=()=>{a&&(a.disconnect(),a=null)};return k(r,i=>{a&&d(),i&&s(i)}),K(()=>{a&&d()}),()=>{var i;return l.value=(i=o.default)==null?void 0:i.call(o),l.value}}});function zt(e,t){const o=m(e[t]);return Q(()=>{const l=e[t];o.value!==l&&(o.value=l)}),o}const ge=Symbol("ArcoTrigger"),Ft=1e3,Lt=5e3,ye=1;class jt{constructor(){this.popupStack={popup:new Set,dialog:new Set,message:new Set},this.getNextZIndex=t=>t==="message"?Lt+this.popupStack.message.size*ye:Ft+this.popupStack.popup.size*ye,this.add=(t,o)=>(this.popupStack[o].add(t),o==="dialog"&&this.popupStack.popup.add(t),this.getNextZIndex(o)),this.delete=(t,o)=>{this.popupStack[o].delete(t),o==="dialog"&&this.popupStack.popup.delete(t)},this.isLastDialog=t=>{if(this.popupStack.dialog.size>1){const o=Array.from(this.popupStack.dialog);return t===o[o.length-1]}return!0}}}const Z=new jt;function At(e,{visible:t,runOnMounted:o}={}){var l,r;const a=(r=(l=lt())==null?void 0:l.uid)!=null?r:Date.now(),s=m(0),d=()=>{s.value=Z.add(a,e)},i=()=>{Z.delete(a,e)},c=()=>e==="dialog"?Z.isLastDialog(a):!1;return k(()=>t==null?void 0:t.value,f=>{f?d():i()},{immediate:!0}),o&&(z(()=>{d()}),K(()=>{i()})),{id:a,zIndex:s,open:d,close:i,isLastDialog:c}}const Dt=({elementRef:e,onResize:t})=>{let o;return{createResizeObserver:()=>{!e.value||(o=new Ce(a=>{const s=a[0];Ge(t)&&t(s)}),o.observe(e.value))},destroyResizeObserver:()=>{o&&(o.disconnect(),o=null)}}};var Nt=F({name:"ClientOnly",setup(e,{slots:t}){const o=m(!1);return z(()=>o.value=!0),()=>{var l;return o.value?(l=t.default)==null?void 0:l.call(t):null}}});const Wt=({popupContainer:e,visible:t,defaultContainer:o="body",documentContainer:l})=>{const r=m(e.value),a=m(),s=()=>{const d=he(e.value),i=d?e.value:o,c=d!=null?d:l?document.documentElement:he(o);i!==r.value&&(r.value=i),c!==a.value&&(a.value=c)};return z(()=>s()),k(t,d=>{r.value!==e.value&&d&&s()}),{teleportContainer:r,containerRef:a}};var It=Object.defineProperty,Vt=Object.defineProperties,Ht=Object.getOwnPropertyDescriptors,_e=Object.getOwnPropertySymbols,qt=Object.prototype.hasOwnProperty,Ut=Object.prototype.propertyIsEnumerable,Oe=(e,t,o)=>t in e?It(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,Xt=(e,t)=>{for(var o in t||(t={}))qt.call(t,o)&&Oe(e,o,t[o]);if(_e)for(var o of _e(t))Ut.call(t,o)&&Oe(e,o,t[o]);return e},Zt=(e,t)=>Vt(e,Ht(t));const Gt=["onClick","onMouseenter","onMouseleave","onFocusin","onFocusout","onContextmenu"];var G=F({name:"Trigger",inheritAttrs:!1,props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"bottom"},disabled:{type:Boolean,default:!1},popupOffset:{type:Number,default:0},popupTranslate:{type:[Array,Object]},showArrow:{type:Boolean,default:!1},alignPoint:{type:Boolean,default:!1},popupHoverStay:{type:Boolean,default:!0},blurToClose:{type:Boolean,default:!0},clickToClose:{type:Boolean,default:!0},clickOutsideToClose:{type:Boolean,default:!0},unmountOnClose:{type:Boolean,default:!0},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupStyle:{type:Object},animationName:{type:String,default:"fade-in"},duration:{type:[Number,Object]},mouseEnterDelay:{type:Number,default:100},mouseLeaveDelay:{type:Number,default:100},focusDelay:{type:Number,default:0},autoFitPopupWidth:{type:Boolean,default:!1},autoFitPopupMinWidth:{type:Boolean,default:!1},autoFixPosition:{type:Boolean,default:!0},popupContainer:{type:[String,Object]},updateAtScroll:{type:Boolean,default:!1},autoFitTransformOrigin:{type:Boolean,default:!1},hideEmpty:{type:Boolean,default:!1},openedClass:{type:[String,Array,Object]},autoFitPosition:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},preventFocus:{type:Boolean,default:!1}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,show:()=>!0,hide:()=>!0,resize:()=>!0},setup(e,{emit:t,slots:o,attrs:l}){const{popupContainer:r}=nt(e),a=Ee("trigger"),s=S(()=>Ye(l,Gt)),d=de(Qe,void 0),i=S(()=>[].concat(e.trigger)),c=new Set,f=de(ge,void 0),{children:v,firstElement:B}=Be(),P=m(),ee=m(e.defaultPopupVisible),L=m(e.position),te=m({}),oe=m({}),le=m({}),Me=m(),g=m({top:0,left:0}),h=S(()=>{var n;return(n=e.popupVisible)!=null?n:ee.value}),{teleportContainer:Te,containerRef:I}=Wt({popupContainer:r,visible:h,documentContainer:!0}),{zIndex:$e}=At("popup",{visible:h});let M=0,_=!1;const ke=()=>{M&&(window.clearTimeout(M),M=0)},V=n=>{if(e.alignPoint){const{pageX:u,pageY:p}=n;g.value={top:p,left:u}}},C=()=>{if(!B.value||!P.value||!I.value)return;const n=I.value.getBoundingClientRect(),u=e.alignPoint?{top:g.value.top,bottom:g.value.top,left:g.value.left,right:g.value.left,scrollTop:g.value.top,scrollBottom:g.value.top,scrollLeft:g.value.left,scrollRight:g.value.left,width:0,height:0}:pe(B.value,n),p=pe(P.value,n),{style:E,position:x}=Tt(e.position,n,u,p,{offset:e.popupOffset,translate:e.popupTranslate,customStyle:e.popupStyle,autoFitPosition:e.autoFitPosition});e.autoFitTransformOrigin&&(oe.value={transformOrigin:Mt(x)}),e.autoFitPopupMinWidth?E.minWidth=`${u.width}px`:e.autoFitPopupWidth&&(E.width=`${u.width}px`),L.value!==x&&(L.value=x),te.value=E,e.showArrow&&(le.value=$t(x,u,p,{customStyle:e.arrowStyle}))},y=(n,u)=>{if(n===h.value&&M===0)return;const p=()=>{ee.value=n,t("update:popupVisible",n),t("popupVisibleChange",n),n&&ht(()=>{C()})};u?(ke(),n!==h.value&&(M=window.setTimeout(p,u))):p()},ze=n=>{var u;(u=l.onClick)==null||u.call(l,n),!(e.disabled||h.value&&!e.clickToClose)&&(i.value.includes("click")?(V(n),y(!h.value)):i.value.includes("contextMenu")&&h.value&&y(!1))},ne=n=>{var u;(u=l.onMouseenter)==null||u.call(l,n),!(e.disabled||!i.value.includes("hover"))&&(V(n),y(!0,e.mouseEnterDelay))},re=n=>{f==null||f.onMouseenter(n),ne(n)},se=n=>{var u;(u=l.onMouseleave)==null||u.call(l,n),!(e.disabled||!i.value.includes("hover"))&&y(!1,e.mouseLeaveDelay)},ae=n=>{f==null||f.onMouseleave(n),se(n)},Fe=n=>{var u;(u=l.onFocusin)==null||u.call(l,n),!(e.disabled||!i.value.includes("focus"))&&y(!0,e.focusDelay)},Le=n=>{var u;(u=l.onFocusout)==null||u.call(l,n),!(e.disabled||!i.value.includes("focus"))&&(!e.blurToClose||y(!1))},je=n=>{var u;(u=l.onContextmenu)==null||u.call(l,n),!(e.disabled||!i.value.includes("contextMenu")||h.value&&!e.clickToClose)&&(V(n),y(!h.value),n.preventDefault())};rt(ge,st({onMouseenter:re,onMouseleave:ae,addChildRef:n=>{c.add(n),f==null||f.addChildRef(n)},removeChildRef:n=>{c.delete(n),f==null||f.removeChildRef(n)}}));const H=()=>{_t(document.documentElement,"mousedown",q),_=!1},ie=zt(o,"content"),Ae=S(()=>{var n;return e.hideEmpty&&Ke((n=ie.value)==null?void 0:n.call(ie))}),q=n=>{var u,p,E;if(!(((u=B.value)==null?void 0:u.contains(n.target))||((p=P.value)==null?void 0:p.contains(n.target)))){for(const x of c)if((E=x.value)!=null&&E.contains(n.target))return;H(),y(!1)}},j=yt(()=>{h.value&&C()}),U=()=>{h.value&&C()},De=()=>{U(),t("resize")},Ne=n=>{e.preventFocus&&n.preventDefault()};f==null||f.addChildRef(P);const We=S(()=>h.value?e.openedClass:void 0);let w;k(h,n=>{if(e.clickOutsideToClose&&(!n&&_?H():n&&!_&&(fe(document.documentElement,"mousedown",q),_=!0)),e.updateAtScroll||(d==null?void 0:d.updateAtScroll)){if(n){w=we(B.value);for(const u of w)u.addEventListener("scroll",j)}else if(w){for(const u of w)u.removeEventListener("scroll",j);w=void 0}}n&&(X.value=!0)}),k(()=>[e.autoFitPopupWidth,e.autoFitPopupMinWidth],()=>{h.value&&C()});const{createResizeObserver:Ie,destroyResizeObserver:Ve}=Dt({elementRef:I,onResize:U});z(()=>{if(Ie(),h.value&&(C(),e.clickOutsideToClose&&!_&&(fe(document.documentElement,"mousedown",q),_=!0),e.updateAtScroll||(d==null?void 0:d.updateAtScroll))){w=we(B.value);for(const n of w)n.addEventListener("scroll",j)}}),Q(()=>{h.value&&C()}),K(()=>{if(f==null||f.removeChildRef(P),Ve(),_&&H(),w){for(const n of w)n.removeEventListener("scroll",j);w=void 0}});const X=m(h.value),A=m(!1),ue=()=>{A.value=!0},He=()=>{A.value=!1,h.value&&t("show")},qe=()=>{A.value=!1,h.value||(X.value=!1,t("hide"))};return()=>{var n,u;return v.value=(u=(n=o.default)==null?void 0:n.call(o))!=null?u:[],Je(v.value,{class:We.value,onClick:ze,onMouseenter:ne,onMouseleave:se,onFocusin:Fe,onFocusout:Le,onContextmenu:je}),b(ft,null,[e.autoFixPosition?b(be,{onResize:De},{default:()=>[v.value]}):v.value,b(Nt,null,{default:()=>[b(at,{to:Te.value,disabled:!e.renderToBody},{default:()=>[(!e.unmountOnClose||h.value||X.value)&&!Ae.value&&b(be,{onResize:U},{default:()=>[b("div",it({ref:P,class:[`${a}-popup`,`${a}-position-${L.value}`],style:Zt(Xt({},te.value),{zIndex:$e.value,pointerEvents:A.value?"none":"auto"}),"trigger-placement":L.value,onMouseenter:re,onMouseleave:ae,onMousedown:Ne},s.value),[b(ut,{name:e.animationName,duration:e.duration,appear:!0,onBeforeEnter:ue,onAfterEnter:He,onBeforeLeave:ue,onAfterLeave:qe},{default:()=>{var p;return[dt(b("div",{class:`${a}-popup-wrapper`,style:oe.value},[b("div",{class:[`${a}-content`,e.contentClass],style:e.contentStyle},[(p=o.content)==null?void 0:p.call(o)]),e.showArrow&&b("div",{ref:Me,class:[`${a}-arrow`,e.arrowClass],style:le.value},null)]),[[ct,h.value]])]}})])]})]})]})])}}});const bo=Object.assign(G,{install:(e,t)=>{Re(e,t);const o=et(t);e.component(o+G.name,G)}}),Yt=F({name:"IconDown",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},spin:Boolean},setup(e){const t=Ee("icon"),o=S(()=>[t,`${t}-down`,{[`${t}-spin`]:e.spin}]),l=S(()=>{if(e.size)return{fontSize:tt(e.size)?`${e.size}px`:e.size}});return{cls:o,sizeStyle:l}}}),Qt=["stroke-width","stroke-linecap","stroke-linejoin"],Kt=bt("path",{d:"M39.6 17.443 24.043 33 8.487 17.443"},null,-1),Jt=[Kt];function Rt(e,t,o,l,r,a){return vt(),mt("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:pt(e.cls),style:wt(e.sizeStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin},Jt,14,Qt)}var Y=ot(Yt,[["render",Rt]]);const go=Object.assign(Y,{install:(e,t)=>{var o;const l=(o=t==null?void 0:t.iconPrefix)!=null?o:"";e.component(l+Y.name,Y)}});var yo=F({name:"RenderFunction",props:{renderFunc:{type:Function,required:!0}},render(){return this.renderFunc(this.$attrs)}}),eo=Object.defineProperty,to=Object.defineProperties,oo=Object.getOwnPropertyDescriptors,Se=Object.getOwnPropertySymbols,lo=Object.prototype.hasOwnProperty,no=Object.prototype.propertyIsEnumerable,Pe=(e,t,o)=>t in e?eo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,ro=(e,t)=>{for(var o in t||(t={}))lo.call(t,o)&&Pe(e,o,t[o]);if(Se)for(var o of Se(t))no.call(t,o)&&Pe(e,o,t[o]);return e},so=(e,t)=>to(e,oo(t));const _o=["xxl","xl","lg","md","sm","xs"],N={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"};let O=[],ao=-1,W={};const Oo={matchHandlers:{},dispatch(e,t){return W=e,O.length<1?!1:(O.forEach(o=>{o.func(W,t)}),!0)},subscribe(e){O.length===0&&this.register();const t=(++ao).toString();return O.push({token:t,func:e}),e(W,null),t},unsubscribe(e){O=O.filter(t=>t.token!==e),O.length===0&&this.unregister()},unregister(){Object.keys(N).forEach(e=>{const t=N[e];if(!t)return;const o=this.matchHandlers[t];o&&o.mql&&o.listener&&o.mql.removeEventListener("change",o.listener)})},register(){Object.keys(N).forEach(e=>{const t=N[e];if(!t)return;const o=({matches:r})=>{this.dispatch(so(ro({},W),{[e]:r}),e)},l=window.matchMedia(t);l.addEventListener("change",o),this.matchHandlers[t]={mql:l,listener:o},o(l)})}};export{Nt as C,go as I,yo as R,bo as T,_t as a,gt as b,ce as c,_o as d,wo as e,be as f,mo as g,Wt as h,po as i,At as j,he as k,ho as l,vo as m,fe as o,Oo as r,yt as t,zt as u};
