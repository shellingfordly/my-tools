import{r as m,d as De,t as Ee,c as S,u as _e,P as Ie,y as fe,g as $,o as d,h as T,w as _,V as je,E as U,a as M,m as X,B as I,T as de,n as k,e as q,G as J,i as y,f as Q,M as ce,b as Z,C as x,D as ee,$ as me,N as Ae}from"./index.13efb4fa.js";import{B as Ne,g as Ve,i as ve,l as z,o as pe,f as ye,_ as ze,s as Le,a as Fe}from"./index.be275d6f.js";import{r as Ge,s as He,o as G,a as te,I as Ke,d as We,n as Ye,t as Re,v as Ue,k as Xe,j as qe,w as Je,M as Qe,x as Ze,y as oe,b as xe}from"./use-popup-manager.35457e0b.js";import{C as eo,b as oo,d as lo,K as no}from"./index.7953a262.js";import{a as to}from"./index.0ecf0cf5.js";var So=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};const ao=e=>{const o=m(!1),l={overflow:"",width:"",boxSizing:""};return{setOverflowHidden:()=>{if(e.value){const n=e.value;if(!o.value&&n.style.overflow!=="hidden"){const s=Ge(n);(s>0||He(n))&&(l.overflow=n.style.overflow,l.width=n.style.width,l.boxSizing=n.style.boxSizing,n.style.overflow="hidden",n.style.width=`${n.offsetWidth-s}px`,n.style.boxSizing="border-box",o.value=!0)}}},resetOverflow:()=>{if(e.value&&o.value){const n=e.value;n.style.overflow=l.overflow,n.style.width=l.width,n.style.boxSizing=l.boxSizing,o.value=!1}}}},so=({modalRef:e,wrapperRef:o,draggable:l})=>{const f=m(!1),a=m([0,0]),n=m([0,0]),s=m([0,0]),g=m(),u=m([0,0]),t=()=>{var c,r;if(o.value&&e.value){const{top:P,left:w}=o.value.getBoundingClientRect(),{clientWidth:C,clientHeight:L}=o.value,{top:K,left:j,width:A,height:N}=e.value.getBoundingClientRect(),V=j-w,E=K-P;(V!==((c=s.value)==null?void 0:c[0])||E!==((r=s.value)==null?void 0:r[1]))&&(s.value=[V,E]);const b=C>A?C-A:0,F=L>N?L-N:0;(b!==u.value[0]||F!==u.value[1])&&(u.value=[b,F])}},v=c=>{l.value&&(c.preventDefault(),f.value=!0,t(),a.value=[c.x,c.y],n.value=[0,0],G(window,"mousemove",O),G(window,"mouseup",p),G(window,"contextmenu",p))},O=c=>{if(f.value){const r=c.x-a.value[0],P=c.y-a.value[1];let w=s.value[0]+r,C=s.value[1]+P;w<0&&(w=0),w>u.value[0]&&(w=u.value[0]),C<0&&(C=0),C>u.value[1]&&(C=u.value[1]),g.value=[w,C]}},p=()=>{f.value=!1,te(window,"mousemove",O),te(window,"mouseup",p)};return{position:g,handleMoveDown:v}};var io=Object.defineProperty,Ce=Object.getOwnPropertySymbols,ro=Object.prototype.hasOwnProperty,uo=Object.prototype.propertyIsEnumerable,be=(e,o,l)=>o in e?io(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,fo=(e,o)=>{for(var l in o||(o={}))ro.call(o,l)&&be(e,l,o[l]);if(Ce)for(var l of Ce(o))uo.call(o,l)&&be(e,l,o[l]);return e},co=De({name:"Modal",components:{ClientOnly:eo,ArcoButton:Ne,IconHover:Ke,IconClose:We,IconInfoCircleFill:to,IconCheckCircleFill:Ye,IconExclamationCircleFill:Re,IconCloseCircleFill:Ue},inheritAttrs:!1,props:{visible:{type:Boolean,default:void 0},defaultVisible:{type:Boolean,default:!1},width:{type:[Number,String]},top:{type:[Number,String]},mask:{type:Boolean,default:!0},title:{type:String},titleAlign:{type:String,default:"center"},alignCenter:{type:Boolean,default:!0},unmountOnClose:Boolean,maskClosable:{type:Boolean,default:!0},hideCancel:{type:Boolean,default:!1},simple:{type:Boolean,default:e=>e.notice},closable:{type:Boolean,default:!0},okText:String,cancelText:String,okLoading:{type:Boolean,default:!1},okButtonProps:{type:Object},cancelButtonProps:{type:Object},footer:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},popupContainer:{type:[String,Object],default:"body"},maskStyle:{type:Object},modalClass:{type:[String,Array]},modalStyle:{type:Object},onBeforeOk:{type:Function},onBeforeCancel:{type:Function},escToClose:{type:Boolean,default:!0},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},maskAnimationName:{type:String,default:e=>e.fullscreen?"fade-in-standard":"fade-modal"},modalAnimationName:{type:String,default:e=>e.fullscreen?"zoom-in":"zoom-modal"},bodyClass:{type:[String,Array]},bodyStyle:{type:[String,Object,Array]},messageType:{type:String}},emits:["update:visible","ok","cancel","open","close","beforeOpen","beforeClose"],setup(e,{emit:o}){const{fullscreen:l,popupContainer:f}=Ee(e),a=Ve("modal"),{t:n}=oo(),s=m(),g=m(),u=m(e.defaultVisible),t=S(()=>{var i;return(i=e.visible)!=null?i:u.value}),v=m(!1),O=S(()=>e.okLoading||v.value),p=S(()=>e.draggable&&!e.fullscreen),{teleportContainer:c,containerRef:r}=lo({popupContainer:f,visible:t}),P=m(t.value),w=S(()=>e.okText||n("modal.okText")),C=S(()=>e.cancelText||n("modal.cancelText")),{zIndex:L,isLastDialog:K}=Xe("dialog",{visible:t});let j=!1;const A=i=>{e.escToClose&&i.key===no.ESC&&K()&&W()},N=()=>{e.escToClose&&!j&&(j=!0,G(document.documentElement,"keydown",A))},V=()=>{j=!1,te(document.documentElement,"keydown",A)};let E=0;const{position:b,handleMoveDown:F}=so({wrapperRef:s,modalRef:g,draggable:p}),ae=()=>{E++,v.value&&(v.value=!1),u.value=!1,o("update:visible",!1)},ke=async()=>{const i=E,h=await new Promise(async R=>{var re;if(z(e.onBeforeOk)){let B=e.onBeforeOk((ue=!0)=>R(ue));if((pe(B)||!ye(B))&&(v.value=!0),pe(B))try{B=(re=await B)!=null?re:!0}catch{B=!1}ye(B)&&R(B)}else R(!0)});i===E&&(h?(o("ok"),ae()):v.value&&(v.value=!1))},W=()=>{var i;let h=!0;z(e.onBeforeCancel)&&(h=(i=e.onBeforeCancel())!=null?i:!1),h&&(o("cancel"),ae())},Y=m(!1),Oe=i=>{i.target===s.value&&(Y.value=!0)},Be=()=>{e.mask&&e.maskClosable&&Y.value&&W()},Se=()=>{t.value&&(!Je(s.value,document.activeElement)&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),o("open"))},$e=()=>{t.value||(p.value&&(b.value=void 0),P.value=!1,ie(),o("close"))},{setOverflowHidden:se,resetOverflow:ie}=ao(r);_e(()=>{r.value=qe(e.popupContainer),t.value&&(se(),e.escToClose&&N())}),Ie(()=>{ie(),V()}),fe(t,i=>{u.value!==i&&(u.value=i),i?(o("beforeOpen"),P.value=!0,Y.value=!1,se(),N()):(o("beforeClose"),V())}),fe(l,()=>{b.value&&(b.value=void 0)});const Pe=S(()=>[`${a}-wrapper`,{[`${a}-wrapper-align-center`]:e.alignCenter&&!e.fullscreen,[`${a}-wrapper-moved`]:Boolean(b.value)}]),Te=S(()=>[`${a}`,e.modalClass,{[`${a}-simple`]:e.simple,[`${a}-draggable`]:p.value,[`${a}-fullscreen`]:e.fullscreen}]),Me=S(()=>{var i;const h=fo({},(i=e.modalStyle)!=null?i:{});return e.width&&(h.width=ve(e.width)?`${e.width}px`:e.width),!e.alignCenter&&e.top&&(h.top=ve(e.top)?`${e.top}px`:e.top),b.value&&(h.transform=`translate(${b.value[0]}px, ${b.value[1]}px)`),h});return{prefixCls:a,mounted:P,computedVisible:t,containerRef:r,wrapperRef:s,mergedModalStyle:Me,okDisplayText:w,cancelDisplayText:C,zIndex:L,handleOk:ke,handleCancel:W,handleMaskClick:Be,handleMaskMouseDown:Oe,handleOpen:Se,handleClose:$e,mergedOkLoading:O,modalRef:g,wrapperCls:Pe,modalCls:Te,teleportContainer:c,handleMoveDown:F}}});function mo(e,o,l,f,a,n){const s=$("icon-info-circle-fill"),g=$("icon-check-circle-fill"),u=$("icon-exclamation-circle-fill"),t=$("icon-close-circle-fill"),v=$("icon-close"),O=$("icon-hover"),p=$("arco-button"),c=$("client-only");return d(),T(c,null,{default:_(()=>[(d(),T(je,{to:e.teleportContainer,disabled:!e.renderToBody},[!e.unmountOnClose||e.computedVisible||e.mounted?U((d(),M("div",X({key:0,class:`${e.prefixCls}-container`,style:{zIndex:e.zIndex}},e.$attrs),[I(de,{name:e.maskAnimationName,appear:""},{default:_(()=>[e.mask?U((d(),M("div",{key:0,ref:"maskRef",class:k(`${e.prefixCls}-mask`),style:q(e.maskStyle)},null,6)),[[J,e.computedVisible]]):y("v-if",!0)]),_:1},8,["name"]),Q("div",{ref:"wrapperRef",class:k(e.wrapperCls),onClick:o[2]||(o[2]=ce((...r)=>e.handleMaskClick&&e.handleMaskClick(...r),["self"])),onMousedown:o[3]||(o[3]=ce((...r)=>e.handleMaskMouseDown&&e.handleMaskMouseDown(...r),["self"]))},[I(de,{name:e.modalAnimationName,appear:"",onAfterEnter:e.handleOpen,onAfterLeave:e.handleClose},{default:_(()=>[U(Q("div",{ref:"modalRef",class:k(e.modalCls),style:q(e.mergedModalStyle)},[e.$slots.title||e.title||e.closable?(d(),M("div",{key:0,class:k(`${e.prefixCls}-header`),onMousedown:o[1]||(o[1]=(...r)=>e.handleMoveDown&&e.handleMoveDown(...r))},[e.$slots.title||e.title?(d(),M("div",{key:0,class:k([`${e.prefixCls}-title`,`${e.prefixCls}-title-align-${e.titleAlign}`])},[e.messageType?(d(),M("div",{key:0,class:k(`${e.prefixCls}-title-icon`)},[e.messageType==="info"?(d(),T(s,{key:0})):y("v-if",!0),e.messageType==="success"?(d(),T(g,{key:1})):y("v-if",!0),e.messageType==="warning"?(d(),T(u,{key:2})):y("v-if",!0),e.messageType==="error"?(d(),T(t,{key:3})):y("v-if",!0)],2)):y("v-if",!0),Z(e.$slots,"title",{},()=>[x(ee(e.title),1)])],2)):y("v-if",!0),!e.simple&&e.closable?(d(),M("div",{key:1,tabindex:"-1",role:"button","aria-label":"Close",class:k(`${e.prefixCls}-close-btn`),onClick:o[0]||(o[0]=(...r)=>e.handleCancel&&e.handleCancel(...r))},[I(O,null,{default:_(()=>[I(v)]),_:1})],2)):y("v-if",!0)],34)):y("v-if",!0),Q("div",{class:k([`${e.prefixCls}-body`,e.bodyClass]),style:q(e.bodyStyle)},[Z(e.$slots,"default")],6),e.footer?(d(),M("div",{key:1,class:k(`${e.prefixCls}-footer`)},[Z(e.$slots,"footer",{},()=>[e.hideCancel?y("v-if",!0):(d(),T(p,X({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:_(()=>[x(ee(e.cancelDisplayText),1)]),_:1},16,["onClick"])),I(p,X({type:"primary"},e.okButtonProps,{loading:e.mergedOkLoading,onClick:e.handleOk}),{default:_(()=>[x(ee(e.okDisplayText),1)]),_:1},16,["loading","onClick"])])],2)):y("v-if",!0)],6),[[J,e.computedVisible]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],34)],16)),[[J,e.computedVisible||e.mounted]]):y("v-if",!0)],8,["to","disabled"]))]),_:3})}var H=ze(co,[["render",mo]]),vo=Object.defineProperty,po=Object.defineProperties,yo=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertySymbols,Co=Object.prototype.hasOwnProperty,bo=Object.prototype.propertyIsEnumerable,we=(e,o,l)=>o in e?vo(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,D=(e,o)=>{for(var l in o||(o={}))Co.call(o,l)&&we(e,l,o[l]);if(ge)for(var l of ge(o))bo.call(o,l)&&we(e,l,o[l]);return e},go=(e,o)=>po(e,yo(o));const le=(e,o)=>{let l=Ze("modal");const f=()=>{t.component&&(t.component.props.visible=!1),z(e.onOk)&&e.onOk()},a=()=>{t.component&&(t.component.props.visible=!1),z(e.onCancel)&&e.onCancel()},n=async()=>{await Ae(),l&&(me(null,l),document.body.removeChild(l)),l=null,z(e.onClose)&&e.onClose()},s=()=>{t.component&&(t.component.props.visible=!1)},g=v=>{t.component&&Object.entries(v).forEach(([O,p])=>{t.component.props[O]=p})},t=I(H,D(D(D({},{visible:!0,renderToBody:!1,unmountOnClose:!0,onOk:f,onCancel:a,onClose:n}),xe(e,["content","title","footer","visible","unmountOnClose","onOk","onCancel","onClose"])),{footer:typeof e.footer=="boolean"?e.footer:void 0}),{default:oe(e.content),title:oe(e.title),footer:typeof e.footer!="boolean"?oe(e.footer):void 0});return(o!=null?o:he._context)&&(t.appContext=o!=null?o:he._context),me(t,l),document.body.appendChild(l),{close:s,update:g}},ne=D({open:le,confirm:(e,o)=>{const l=D({simple:!0},e);return le(l,o)}},Qe.reduce((e,o)=>(e[o]=(l,f)=>{const a=D({simple:!0,hideCancel:!0,messageType:o},l);return le(a,f)},e),{})),he=Object.assign(H,go(D({},ne),{install:(e,o)=>{Le(e,o);const l=Fe(o);e.component(l+H.name,H);const f={};for(const a of Object.keys(ne))f[a]=(n,s=e._context)=>ne[a](n,s);e.config.globalProperties.$modal=f},_context:null}));export{he as M,So as c};