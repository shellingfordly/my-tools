import{g as j,m as Re,_ as ce,s as fe,a as me,u as Me,b as Te,j as Ne,c as T,l as je}from"./index.be275d6f.js";import{S as ie,R as ke}from"./index.b136a94c.js";import{q as Ee,I as He,d as Oe,b as Ae,c as se,p as Fe}from"./use-popup-manager.35457e0b.js";import{d as k,t as he,c as h,j as De,p as Ge,B as u,x as ge,u as ee,o as x,a as L,b as pe,n as N,r as g,y as U,N as ue,g as q,e as Pe,D as K,i as J,w as de,f as _e,m as ve}from"./index.13efb4fa.js";import{u as We}from"./index.0ecf0cf5.js";const ae=Symbol("ArcoCard");var Q=k({name:"Card",components:{Spin:ie},props:{bordered:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},size:{type:String},headerStyle:{type:Object,default:()=>({})},bodyStyle:{type:Object,default:()=>({})},title:{type:String},extra:{type:String}},setup(e,{slots:a}){const l=j("card"),{size:d}=he(e),{mergedSize:b}=Re(d),p=h(()=>b.value==="small"||b.value==="mini"?"small":"medium"),c=n=>{const r=Ee(n);return u("div",{class:`${l}-actions`},[u("div",{class:`${l}-actions-right`},[r.map((y,C)=>u("span",{key:`action-${C}`,class:`${l}-actions-item`},[y]))])])},m=De({hasMeta:!1,hasGrid:!1,slots:a,renderActions:c});Ge(ae,m);const $=h(()=>[l,`${l}-size-${p.value}`,{[`${l}-loading`]:e.loading,[`${l}-bordered`]:e.bordered,[`${l}-hoverable`]:e.hoverable,[`${l}-contain-grid`]:m.hasGrid}]);return()=>{var n,r,y,C,w,S,v;const z=Boolean((n=a.title)!=null?n:e.title),V=Boolean((r=a.extra)!=null?r:e.extra);return u("div",{class:$.value},[(z||V)&&u("div",{class:[`${l}-header`,{[`${l}-header-no-title`]:!z}],style:e.headerStyle},[z&&u("div",{class:`${l}-header-title`},[(C=(y=a.title)==null?void 0:y.call(a))!=null?C:e.title]),V&&u("div",{class:`${l}-header-extra`},[(S=(w=a.extra)==null?void 0:w.call(a))!=null?S:e.extra])]),a.cover&&u("div",{class:`${l}-cover`},[a.cover()]),u("div",{class:`${l}-body`,style:e.bodyStyle},[e.loading?u(ie,null,null):(v=a.default)==null?void 0:v.call(a),a.actions&&!m.hasMeta&&c(a.actions())])])}}}),X=k({name:"CardMeta",props:{title:{type:String},description:{type:String}},setup(e,{slots:a}){const l=j("card-meta"),d=ge(ae);return ee(()=>{d&&(d.hasMeta=!0)}),()=>{var b,p,c,m,$,n;const r=Boolean((b=a.title)!=null?b:e.title),y=Boolean((p=a.description)!=null?p:e.description);return u("div",{class:l},[(r||y)&&u("div",{class:`${l}-content`},[r&&u("div",{class:`${l}-title`},[(m=(c=a.title)==null?void 0:c.call(a))!=null?m:e.title]),y&&u("div",{class:`${l}-description`},[(n=($=a.description)==null?void 0:$.call(a))!=null?n:e.description])]),(a.avatar||(d==null?void 0:d.slots.actions))&&u("div",{class:[`${l}-footer `,{[`${l}-footer-only-actions`]:!a.avatar}]},[a.avatar&&u("div",{class:`${l}-avatar`},[a.avatar()]),d&&d.slots.actions&&d.renderActions(d.slots.actions())])])}}});const Ue=k({name:"CardGrid",props:{hoverable:{type:Boolean,default:!1}},setup(e){const a=j("card-grid"),l=ge(ae);return ee(()=>{l&&(l.hasGrid=!0)}),{cls:h(()=>[a,{[`${a}-hoverable`]:e.hoverable}])}}});function qe(e,a,l,d,b,p){return x(),L("div",{class:N(e.cls)},[pe(e.$slots,"default")],2)}var Y=ce(Ue,[["render",qe]]);const na=Object.assign(Q,{Meta:X,Grid:Y,install:(e,a)=>{fe(e,a);const l=me(a);e.component(l+Q.name,Q),e.component(l+X.name,X),e.component(l+Y.name,Y)}}),Ke=["border-width","box-sizing","font-family","font-weight","font-size","font-variant","letter-spacing","line-height","padding-top","padding-bottom","padding-left","padding-right","text-indent","text-rendering","text-transform","white-space","overflow-wrap","width"],Je=e=>{const a={};return Ke.forEach(l=>{a[l]=e.getPropertyValue(l)}),a},Qe=k({name:"Textarea",components:{ResizeObserver:ke,IconHover:He,IconClose:Oe},inheritAttrs:!1,props:{modelValue:String,defaultValue:{type:String,default:""},placeholder:String,disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},maxLength:{type:[Number,Object],default:0},showWordLimit:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},autoSize:{type:[Boolean,Object],default:!1},wordLength:{type:Function},wordSlice:{type:Function}},emits:{"update:modelValue":e=>!0,input:(e,a)=>!0,change:(e,a)=>!0,clear:e=>!0,focus:e=>!0,blur:e=>!0},setup(e,{emit:a,attrs:l}){const{disabled:d,error:b,modelValue:p}=he(e),c=j("textarea"),{mergedDisabled:m,mergedError:$,eventHandlers:n}=Me({disabled:d,error:b}),r=g(),y=g(),C=g(),w=g(),S=g(e.defaultValue),v=h(()=>{var t;return(t=p.value)!=null?t:S.value}),[z,V]=We(r);U(p,t=>{(Te(t)||Ne(t))&&(S.value="")});const I=h(()=>T(e.maxLength)&&Boolean(e.maxLength.errorOnly)),f=h(()=>T(e.maxLength)?e.maxLength.length:e.maxLength),R=t=>{var o;return je(e.wordLength)?e.wordLength(t):(o=t.length)!=null?o:0},te=h(()=>R(v.value)),ye=h(()=>$.value||Boolean(f.value&&I.value&&te.value>f.value)),B=g(!1),E=g(!1),be=h(()=>e.allowClear&&!m.value&&v.value),H=g(!1),le=g(""),O=()=>{z(),ue(()=>{r.value&&v.value!==r.value.value&&(r.value.value=v.value,V())})},M=(t,o=!0)=>{var i,s;f.value&&!I.value&&R(t)>f.value&&(t=(s=(i=e.wordSlice)==null?void 0:i.call(e,t,f.value))!=null?s:t.slice(0,f.value)),S.value=t,o&&a("update:modelValue",t),O()};let A=v.value;const ne=(t,o)=>{var i,s;t!==A&&(A=t,a("change",t,o),(s=(i=n.value)==null?void 0:i.onChange)==null||s.call(i,o))},Ce=t=>{var o,i;E.value=!0,A=v.value,a("focus",t),(i=(o=n.value)==null?void 0:o.onFocus)==null||i.call(o,t)},$e=t=>{var o,i;E.value=!1,a("blur",t),(i=(o=n.value)==null?void 0:o.onBlur)==null||i.call(o,t),ne(v.value,t)},Se=t=>{var o,i;const{value:s}=t.target;if(t.type==="compositionend"){if(H.value=!1,le.value="",f.value&&!I.value&&v.value.length>=f.value&&R(s)>f.value){O();return}a("input",s,t),M(s),(i=(o=n.value)==null?void 0:o.onInput)==null||i.call(o,t)}else H.value=!0},we=t=>{var o,i;const{value:s}=t.target;if(H.value)le.value=s;else{if(f.value&&!I.value&&v.value.length>=f.value&&R(s)>f.value&&t.inputType==="insertText"){O();return}a("input",s,t),M(s),(i=(o=n.value)==null?void 0:o.onInput)==null||i.call(o,t)}},ze=t=>{M(""),ne("",t),a("clear",t)};U(p,t=>{t!==v.value&&M(t!=null?t:"",!1)});const Be=t=>Ae(l,se),xe=t=>Fe(l,se),Le=h(()=>[`${c}-wrapper`,{[`${c}-focus`]:E.value,[`${c}-disabled`]:m.value,[`${c}-error`]:ye.value,[`${c}-scroll`]:B.value}]);let oe;const F=g(0),D=g(0),G=h(()=>!T(e.autoSize)||!e.autoSize.minRows?0:e.autoSize.minRows*F.value+D.value),P=h(()=>!T(e.autoSize)||!e.autoSize.maxRows?0:e.autoSize.maxRows*F.value+D.value),_=()=>{const t=Je(oe);F.value=Number.parseInt(t["line-height"]||0,10),D.value=Number.parseInt(t["border-width"]||0,10)*2+Number.parseInt(t["padding-top"]||0,10)+Number.parseInt(t["padding-bottom"]||0,10),w.value=t,ue(()=>{var o;const i=(o=C.value)==null?void 0:o.offsetHeight;let s=i!=null?i:0,re="hidden";G.value&&s<G.value&&(s=G.value),P.value&&s>P.value&&(s=P.value,re="auto"),y.value={height:`${s}px`,resize:"none",overflow:re}})};ee(()=>{r.value&&(oe=window.getComputedStyle(r.value),e.autoSize&&_()),W()});const Ve=()=>{e.autoSize&&C.value&&_(),W()},Ie=t=>{r.value&&t.target!==r.value&&(t.preventDefault(),r.value.focus())},W=()=>{r.value&&(r.value.scrollHeight>r.value.offsetHeight?B.value||(B.value=!0):B.value&&(B.value=!1))};return U(v,()=>{e.autoSize&&C.value&&_(),W()}),{prefixCls:c,wrapperCls:Le,textareaRef:r,textareaStyle:y,mirrorRef:C,mirrorStyle:w,computedValue:v,showClearBtn:be,valueLength:te,computedMaxLength:f,mergedDisabled:m,getWrapperAttrs:Be,getTextareaAttrs:xe,handleInput:we,handleFocus:Ce,handleBlur:$e,handleComposition:Se,handleClear:ze,handleResize:Ve,handleMousedown:Ie}},methods:{focus(){var e;(e=this.$refs.textareaRef)==null||e.focus()},blur(){var e;(e=this.$refs.textareaRef)==null||e.blur()}}}),Xe=["disabled","value","placeholder"];function Ye(e,a,l,d,b,p){const c=q("resize-observer"),m=q("icon-close"),$=q("icon-hover");return x(),L("div",ve(e.getWrapperAttrs(e.$attrs),{class:e.wrapperCls,onMousedown:a[7]||(a[7]=(...n)=>e.handleMousedown&&e.handleMousedown(...n))}),[e.autoSize?(x(),L("div",{key:0,ref:"mirrorRef",class:N(`${e.prefixCls}-mirror`),style:Pe(e.mirrorStyle)},K(`${e.computedValue}
`),7)):J("v-if",!0),u(c,{onResize:e.handleResize},{default:de(()=>[_e("textarea",ve({ref:"textareaRef"},e.getTextareaAttrs(e.$attrs),{disabled:e.mergedDisabled,class:e.prefixCls,style:e.textareaStyle,value:e.computedValue,placeholder:e.placeholder,onInput:a[0]||(a[0]=(...n)=>e.handleInput&&e.handleInput(...n)),onFocus:a[1]||(a[1]=(...n)=>e.handleFocus&&e.handleFocus(...n)),onBlur:a[2]||(a[2]=(...n)=>e.handleBlur&&e.handleBlur(...n)),onCompositionstart:a[3]||(a[3]=(...n)=>e.handleComposition&&e.handleComposition(...n)),onCompositionupdate:a[4]||(a[4]=(...n)=>e.handleComposition&&e.handleComposition(...n)),onCompositionend:a[5]||(a[5]=(...n)=>e.handleComposition&&e.handleComposition(...n))}),null,16,Xe)]),_:1},8,["onResize"]),pe(e.$slots,"suffix"),e.computedMaxLength&&e.showWordLimit?(x(),L("div",{key:1,class:N(`${e.prefixCls}-word-limit`)},K(e.valueLength)+"/"+K(e.computedMaxLength),3)):J("v-if",!0),e.showClearBtn?(x(),L("div",{key:2,class:N(`${e.prefixCls}-clear-btn`),onClick:a[6]||(a[6]=(...n)=>e.handleClear&&e.handleClear(...n))},[u($,null,{default:de(()=>[u(m)]),_:1})],2)):J("v-if",!0)],16)}var Z=ce(Qe,[["render",Ye]]);const oa=Object.assign(Z,{install:(e,a)=>{fe(e,a);const l=me(a);e.component(l+Z.name,Z)}});export{na as C,oa as T};
