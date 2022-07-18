import{g as X,E as He,_ as Be,s as ze,c as Le,R as Pe,a as Ze,t as Ue,p as K,h as We,k as Je}from"./index.59fe142a.js";import{L as Ke}from"./index.c8f77ebb.js";import{S as $e,a as Qe,c as qe,d as Xe,u as Ye,b as we,p as et,B as tt}from"./index.8df7b720.js";import{d as D,C as Re,c as x,H as at,D as nt,b as v,n as Ee,y as _e,o as N,e as Z,E as Me,A as Q,r as S,x as ue,R as Se,k as ie,B as rt,t as q,G as se,w as T,m as pe,J as xe,_ as lt,a as Ve,g as ot}from"./index.4c318234.js";const ye=Symbol("ArcoCard");var ce=D({name:"Card",components:{Spin:$e},props:{bordered:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},size:{type:String},headerStyle:{type:Object,default:()=>({})},bodyStyle:{type:Object,default:()=>({})},title:{type:String},extra:{type:String}},setup(e,{slots:t}){const a=X("card"),{size:n}=Re(e),{mergedSize:o}=Qe(n),u=x(()=>o.value==="small"||o.value==="mini"?"small":"medium"),l=i=>{const s=He(i);return v("div",{class:`${a}-actions`},[v("div",{class:`${a}-actions-right`},[s.map((d,m)=>v("span",{key:`action-${m}`,class:`${a}-actions-item`},[d]))])])},c=at({hasMeta:!1,hasGrid:!1,slots:t,renderActions:l});nt(ye,c);const h=x(()=>[a,`${a}-size-${u.value}`,{[`${a}-loading`]:e.loading,[`${a}-bordered`]:e.bordered,[`${a}-hoverable`]:e.hoverable,[`${a}-contain-grid`]:c.hasGrid}]);return()=>{var i,s,d,m,C,y,g;const w=Boolean((i=t.title)!=null?i:e.title),p=Boolean((s=t.extra)!=null?s:e.extra);return v("div",{class:h.value},[(w||p)&&v("div",{class:[`${a}-header`,{[`${a}-header-no-title`]:!w}],style:e.headerStyle},[w&&v("div",{class:`${a}-header-title`},[(m=(d=t.title)==null?void 0:d.call(t))!=null?m:e.title]),p&&v("div",{class:`${a}-header-extra`},[(y=(C=t.extra)==null?void 0:C.call(t))!=null?y:e.extra])]),t.cover&&v("div",{class:`${a}-cover`},[t.cover()]),v("div",{class:`${a}-body`,style:e.bodyStyle},[e.loading?v($e,null,null):(g=t.default)==null?void 0:g.call(t),t.actions&&!c.hasMeta&&l(t.actions())])])}}}),de=D({name:"CardMeta",props:{title:{type:String},description:{type:String}},setup(e,{slots:t}){const a=X("card-meta"),n=Ee(ye);return _e(()=>{n&&(n.hasMeta=!0)}),()=>{var o,u,l,c,h,i;const s=Boolean((o=t.title)!=null?o:e.title),d=Boolean((u=t.description)!=null?u:e.description);return v("div",{class:a},[(s||d)&&v("div",{class:`${a}-content`},[s&&v("div",{class:`${a}-title`},[(c=(l=t.title)==null?void 0:l.call(t))!=null?c:e.title]),d&&v("div",{class:`${a}-description`},[(i=(h=t.description)==null?void 0:h.call(t))!=null?i:e.description])]),(t.avatar||(n==null?void 0:n.slots.actions))&&v("div",{class:[`${a}-footer `,{[`${a}-footer-only-actions`]:!t.avatar}]},[t.avatar&&v("div",{class:`${a}-avatar`},[t.avatar()]),n&&n.slots.actions&&n.renderActions(n.slots.actions())])])}}});const ut=D({name:"CardGrid",props:{hoverable:{type:Boolean,default:!1}},setup(e){const t=X("card-grid"),a=Ee(ye);return _e(()=>{a&&(a.hasGrid=!0)}),{cls:x(()=>[t,{[`${t}-hoverable`]:e.hoverable}])}}});function it(e,t,a,n,o,u){return N(),Z("div",{class:Q(e.cls)},[Me(e.$slots,"default")],2)}var he=Be(ut,[["render",it]]);const st=Object.assign(ce,{Meta:de,Grid:he,install:(e,t)=>{ze(e,t);const a=Le(t);e.component(a+ce.name,ce),e.component(a+de.name,de),e.component(a+he.name,he)}}),ct=["border-width","box-sizing","font-family","font-weight","font-size","font-variant","letter-spacing","line-height","padding-top","padding-bottom","padding-left","padding-right","text-indent","text-rendering","text-transform","white-space","overflow-wrap","width"],dt=e=>{const t={};return ct.forEach(a=>{t[a]=e.getPropertyValue(a)}),t},ht=D({name:"Textarea",components:{ResizeObserver:Pe,IconHover:qe,IconClose:Xe},inheritAttrs:!1,props:{modelValue:String,defaultValue:{type:String,default:""},placeholder:String,disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},maxLength:{type:[Number,Object],default:0},showWordLimit:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},autoSize:{type:[Boolean,Object],default:!1},wordLength:{type:Function},wordSlice:{type:Function}},emits:{"update:modelValue":e=>!0,input:(e,t)=>!0,change:(e,t)=>!0,clear:e=>!0,focus:e=>!0,blur:e=>!0},setup(e,{emit:t,attrs:a}){const{disabled:n,error:o,modelValue:u}=Re(e),l=X("textarea"),{mergedDisabled:c,mergedError:h,eventHandlers:i}=Ye({disabled:n,error:o}),s=S(),d=S(),m=S(),C=S(),y=S(e.defaultValue),g=x(()=>{var r;return(r=u.value)!=null?r:y.value});ue(u,r=>{(Ze(r)||Ue(r))&&(y.value="")});const w=x(()=>K(e.maxLength)&&Boolean(e.maxLength.errorOnly)),p=x(()=>K(e.maxLength)?e.maxLength.length:e.maxLength),L=r=>{var f;return We(e.wordLength)?e.wordLength(r):(f=r.length)!=null?f:0},B=x(()=>L(g.value)),A=x(()=>h.value||Boolean(p.value&&w.value&&B.value>p.value)),O=S(!1),J=S(!1),E=x(()=>e.allowClear&&!c.value&&g.value),V=S(!1),k=S(""),M=(r,f=!0)=>{var _,b;p.value&&!w.value&&L(r)>p.value&&(r=(b=(_=e.wordSlice)==null?void 0:_.call(e,r,p.value))!=null?b:r.slice(0,p.value)),y.value=r,f&&t("update:modelValue",r),Se(()=>{s.value&&g.value!==s.value.value&&(s.value.value=g.value)})};let I=g.value;const F=(r,f)=>{var _,b;r!==I&&(I=r,t("change",r,f),(b=(_=i.value)==null?void 0:_.onChange)==null||b.call(_,f))},G=r=>{var f,_;J.value=!0,I=g.value,t("focus",r),(_=(f=i.value)==null?void 0:f.onFocus)==null||_.call(f,r)},j=r=>{var f,_;J.value=!1,t("blur",r),(_=(f=i.value)==null?void 0:f.onBlur)==null||_.call(f,r),F(g.value,r)},ee=r=>{var f,_;const{value:b}=r.target;r.type==="compositionend"?(V.value=!1,k.value="",t("input",b,r),M(b),(_=(f=i.value)==null?void 0:f.onInput)==null||_.call(f,r)):V.value=!0},H=r=>{var f,_;const{value:b}=r.target;V.value?k.value=b:(t("input",b,r),M(b),(_=(f=i.value)==null?void 0:f.onInput)==null||_.call(f,r))},Oe=r=>{M(""),F("",r),t("clear",r)};ue(u,r=>{r!==g.value&&M(r!=null?r:"",!1)});const Fe=r=>Je(a,we),je=r=>et(a,we),Te=x(()=>[`${l}-wrapper`,{[`${l}-focus`]:J.value,[`${l}-disabled`]:c.value,[`${l}-error`]:A.value,[`${l}-scroll`]:O.value}]);let be;const te=S(0),ae=S(0),ne=x(()=>!K(e.autoSize)||!e.autoSize.minRows?0:e.autoSize.minRows*te.value+ae.value),re=x(()=>!K(e.autoSize)||!e.autoSize.maxRows?0:e.autoSize.maxRows*te.value+ae.value),le=()=>{const r=dt(be);te.value=Number.parseInt(r["line-height"]||0,10),ae.value=Number.parseInt(r["border-width"]||0,10)*2+Number.parseInt(r["padding-top"]||0,10)+Number.parseInt(r["padding-bottom"]||0,10),C.value=r,Se(()=>{var f;const _=(f=m.value)==null?void 0:f.offsetHeight;let b=_!=null?_:0,Ce="hidden";ne.value&&b<ne.value&&(b=ne.value),re.value&&b>re.value&&(b=re.value,Ce="auto"),d.value={height:`${b}px`,resize:"none",overflow:Ce}})};_e(()=>{s.value&&(be=window.getComputedStyle(s.value),e.autoSize&&le()),oe()});const De=()=>{e.autoSize&&m.value&&le(),oe()},Ge=r=>{s.value&&r.target!==s.value&&(r.preventDefault(),s.value.focus())},oe=()=>{s.value&&(s.value.scrollHeight>s.value.offsetHeight?O.value||(O.value=!0):O.value&&(O.value=!1))};return ue(g,()=>{e.autoSize&&m.value&&le(),oe()}),{prefixCls:l,wrapperCls:Te,textareaRef:s,textareaStyle:d,mirrorRef:m,mirrorStyle:C,computedValue:g,showClearBtn:E,valueLength:B,computedMaxLength:p,mergedDisabled:c,getWrapperAttrs:Fe,getTextareaAttrs:je,handleInput:H,handleFocus:G,handleBlur:j,handleComposition:ee,handleClear:Oe,handleResize:De,handleMousedown:Ge}},methods:{focus(){var e;(e=this.$refs.textareaRef)==null||e.focus()},blur(){var e;(e=this.$refs.textareaRef)==null||e.blur()}}}),ft=["disabled","value","placeholder"];function vt(e,t,a,n,o,u){const l=ie("resize-observer"),c=ie("icon-close"),h=ie("icon-hover");return N(),Z("div",xe(e.getWrapperAttrs(e.$attrs),{class:e.wrapperCls,onMousedown:t[7]||(t[7]=(...i)=>e.handleMousedown&&e.handleMousedown(...i))}),[e.autoSize?(N(),Z("div",{key:0,ref:"mirrorRef",class:Q(`${e.prefixCls}-mirror`),style:rt(e.mirrorStyle)},q(`${e.computedValue}
`),7)):se("v-if",!0),v(l,{onResize:e.handleResize},{default:T(()=>[pe("textarea",xe({ref:"textareaRef"},e.getTextareaAttrs(e.$attrs),{disabled:e.mergedDisabled,class:e.prefixCls,style:e.textareaStyle,value:e.computedValue,placeholder:e.placeholder,onInput:t[0]||(t[0]=(...i)=>e.handleInput&&e.handleInput(...i)),onFocus:t[1]||(t[1]=(...i)=>e.handleFocus&&e.handleFocus(...i)),onBlur:t[2]||(t[2]=(...i)=>e.handleBlur&&e.handleBlur(...i)),onCompositionstart:t[3]||(t[3]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onCompositionupdate:t[4]||(t[4]=(...i)=>e.handleComposition&&e.handleComposition(...i)),onCompositionend:t[5]||(t[5]=(...i)=>e.handleComposition&&e.handleComposition(...i))}),null,16,ft)]),_:1},8,["onResize"]),Me(e.$slots,"suffix"),e.computedMaxLength&&e.showWordLimit?(N(),Z("div",{key:1,class:Q(`${e.prefixCls}-word-limit`)},q(e.valueLength)+"/"+q(e.computedMaxLength),3)):se("v-if",!0),e.showClearBtn?(N(),Z("div",{key:2,class:Q(`${e.prefixCls}-clear-btn`),onClick:t[6]||(t[6]=(...i)=>e.handleClear&&e.handleClear(...i))},[v(h,null,{default:T(()=>[v(c)]),_:1})],2)):se("v-if",!0)],16)}var fe=Be(ht,[["render",vt]]);const mt=Object.assign(fe,{install:(e,t)=>{ze(e,t);const a=Le(t);e.component(a+fe.name,fe)}});const R={add:(e,t)=>e+t,minus:(e,t)=>e-t,multiply:(e,t)=>e*t,divide:(e,t)=>e/t},gt={"+":R.add,"-":R.minus,"*":R.multiply,x:R.multiply,"/":R.divide,\u52A0:R.add,\u51CF:R.minus,\u4E58:R.multiply,\u9664:R.divide};function pt(e){console.log("list",e);const t=[];let a=0;for(let n=0;n<e.length;n++){const o=e[n];if(/\d/.test(o))t.push(Number(o));else{const u=t.pop()||0,l=t.pop()||0,c=gt[o](l,u);t.push(c),a=c}}return a}var z={},Ae=/^([+-])?0*(\d+)(\.(\d+))?$/,ke=/^([+-])?0*(\d+)(\.(\d+))?e(([+-])?(\d+))$/i,_t=z.e2ten=function(e){var t=ke.exec(e.toString());if(!t)return e;var a=t[2],n=t[4]||"",o=t[5]?+t[5]:0;if(o>0){var u=n.substr(0,o);u=u.length<o?u+new Array(o-u.length+1).join("0"):u,n=n.substr(o),a+=u}else{o=-o;var l=a.length-o;l=l<0?0:l;var c=a.substr(l,o);c=c.length<o?new Array(o-c.length+1).join("0")+c:c,a=a.substring(0,l),n=c+n}return a=a==""?"0":a,(t[1]=="-"?"-":"")+a+(n?"."+n:"")};z.getNumbResult=function(e){var t=Ae.exec(e.toString());if(!t&&ke.test(e.toString())&&(t=Ae.exec(_t(e.toString()))),t)return{int:t[2],decimal:t[4],minus:t[1]=="-",num:t.slice(1,3).join("")}};z.centerArray=function e(t,a){if(t.splice.apply(t,[0,a.length].concat(a.splice(0,a.length))),arguments.length>2){var n=[].slice.call(arguments,2);n.unshift(t),e.apply(null,n)}return t};var yt=z.hasAttr=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};z.extend=function(e){for(var t,a=arguments[0]||{},n=Array.prototype.slice.call(arguments,1),o=0;o<n.length;o++){var u=n[o];for(t in u)yt(u,t)&&(a[t]=u[t])}return a};z.getDigit=function(e){return e>=5?(e-4)*4+4:e};z.unshiftZero=function(e,t){if(t==null&&(t=1),!(t<=0))for(;t--;)e.unshift(0)};z.clearZero=function(e,t,a){if(e==null)return"";var n=~"*.?+$^[](){}|\\/".indexOf(t)?"\\"+t:t,o=new RegExp("^"+n+"+"),u=new RegExp(n+"+$"),l=new RegExp(n+"{2}","g");return e=e.toString(),a=="^"&&(e=e.replace(o,"")),(!a||a=="$")&&(e=e.replace(u,"")),(!a||a=="nto1")&&(e=e.replace(l,t)),e};var $=z;function U(e,t){var a=$.getNumbResult(e);if(!a)return e;t=t||{};var n=this.ch,o=this.ch_u,u=this.ch_f||"",l=this.ch_d||".",c=n.charAt(0),h=a.int,i=a.decimal,s=a.minus,d="",m="",C=s?u:"",y=function B(A,O,J){A=$.getNumbResult(A).int;var E="",V=arguments.length>1?arguments[1]:t.tenMin,k=A.length;if(k==1)return n.charAt(+A);if(k<=4)for(var M=0,I=k;I--;){var F=+A.charAt(M);E+=V&&k==2&&M==0&&F==1?"":n.charAt(F),E+=F&&I?o.charAt(I):"",M++}else{for(var G=A.length/4>>0,j=A.length%4;j==0||!o.charAt(3+G);)j+=4,G--;var ee=A.substr(0,j),H=A.substr(j);E=B(ee,V)+o.charAt(3+G)+(H.charAt(0)=="0"?c:"")+B(H,H.length>4?V:!1)}return E=$.clearZero(E,c),E};if(i){i=$.clearZero(i,"0","$");for(var g=0;g<i.length;g++)m+=n.charAt(+i.charAt(g));m=m?l+m:""}if(d=y(h),t.ww&&o.length>5){var w=o.charAt(4),p=o.charAt(5),L=d.lastIndexOf(p);~L&&(d=d.substring(0,L).replace(new RegExp(p,"g"),w+w)+d.substring(L))}return C+d+m}function bt(e){e=e.toString();var t=e.split(this.ch_d),a=t[0].replace(this.ch_f,""),n=t[1],o=!!~t[0].indexOf(this.ch_f),u=this.ch_u.charAt(1),l=this.ch_u.charAt(4),c=this.ch_u.charAt(5);a=a.replace(new RegExp(l+"{2}","g"),c);for(var h=a.split(""),i=0,s=0,d=[],m=[],C=[],y=0;y<h.length;y++){var g=h[y],w=0,p=0;if(~(w=this.ch.indexOf(g)))w>0&&C.unshift(w);else if(~(p=this.ch_u.indexOf(g))){var L=$.getDigit(p);i>p?($.unshiftZero(C,L),$.centerArray(m,C)):p>=s?(y==0&&(C=[1]),$.centerArray(d,m,C),d.length>0&&$.unshiftZero(d,L),s=p):(C.length==0&&u==g&&(C=[1]),$.centerArray(m,C),$.unshiftZero(m,$.getDigit(p)),i=p)}}$.centerArray(d,m,C).reverse(),d.length==0&&d.push(0);var B=0;if(n){d.push("."),B="0.";for(var y=0;y<n.length;y++)B+=this.ch.indexOf(n.charAt(y)),d.push(this.ch.indexOf(n.charAt(y)));B=+B}return o&&d.unshift("-"),parseFloat(d.join(""))}function Ct(e,t){var a={ww:!0,complete:!1,outSymbol:!0},n=$.getNumbResult(e),o=this.ch.charAt(0);if(t=typeof t=="object"?t:{},!n)return e;t=$.extend(a,t);var u=n.num,l=n.decimal||"",c=t.outSymbol?this.m_t:"",h=l?"":this.m_z,i="";if(t.complete){for(var s=1;s<this.m_u.length;s++)i+=U.call(this,l.charAt(s-1)||"0")+this.m_u.charAt(s);h=U.call(this,u,t)+this.m_u.charAt(0)}else{if(l=l.substr(0,this.m_u.length-1),l=$.clearZero(l,"0","$"),l)for(var d,s=0;s<this.m_u.length-1;s++)l.charAt(s)&&l.charAt(s)!="0"&&(i+=U.call(this,l.charAt(s))+this.m_u.charAt(s+1),d=!1),l.charAt(s)==="0"&&!d&&((s!=0||u!="0")&&(i+=o),d=!0);(u!="0"||h||!i)&&(h=U.call(this,u,t)+this.m_u.charAt(0)+h)}return c+h+i}var Ie={CL:U,unCL:bt,toMoney:Ct},P=Ie,ve=z;function $t(e,t){return{encodeS:function(a,n){return n=ve.extend({ww:!0,tenMin:!0},n),P.CL.call(e,a,n)},encodeB:function(a,n){return n=ve.extend({ww:!0},n),P.CL.call(t,a,n)},decodeS:function(){return P.unCL.apply(e,arguments)},decodeB:function(){return P.unCL.apply(t,arguments)},toMoney:function(a,n){return n=ve.extend({ww:!0},n),P.toMoney.call(t,a,n)}}}var wt=$t,St={ch:"\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D",ch_u:"\u4E2A\u5341\u767E\u5343\u4E07\u4EBF",ch_f:"\u8D1F",ch_d:"\u70B9"},xt={ch:"\u96F6\u58F9\u8D30\u53C1\u8086\u4F0D\u9646\u67D2\u634C\u7396",ch_u:"\u4E2A\u62FE\u4F70\u4EDF\u4E07\u4EBF",ch_f:"\u8D1F",ch_d:"\u70B9",m_t:"\u4EBA\u6C11\u5E01",m_z:"\u6574",m_u:"\u5143\u89D2\u5206"},At={ch:"\u96F6\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D",ch_u:"\u500B\u5341\u767E\u5343\u842C\u5104",ch_f:"\u8CA0",ch_d:"\u9EDE"},Bt={ch:"\u96F6\u58F9\u8CB3\u53C3\u8086\u4F0D\u9678\u67D2\u634C\u7396",ch_u:"\u500B\u62FE\u4F70\u4EDF\u842C\u5104",ch_f:"\u8CA0",ch_d:"\u9EDE",m_t:"$",m_z:"\u6574",m_u:"\u5713\u89D2\u5206"},me=Ie,Ne=wt,W={s:St,b:xt,hk_s:At,hk_b:Bt},Y=function(e){this.lang=e,this.encode=function(){return me.CL.apply(e,arguments)},this.decode=function(){return me.unCL.apply(e,arguments)},this.toMoney=function(){return me.toMoney.apply(e,arguments)}};Y.langs=W;Y.cn=Ne(W.s,W.b);Y.hk=Ne(W.hk_s,W.hk_b);var zt=Y;const ge={"+":1,"-":1,"*":2,x:2,"/":2,"(":3,")":-1,\u52A0:1,\u51CF:1,\u4E58:2,\u9664:2,\u5DE6\u62EC\u53F7:3,\u53F3\u62EC\u53F7:-1};function Lt(e){const t=Rt(e),a=[],n=[];for(let o=0;o<t.length;o++){const u=t[o];if(!u)continue;const l=ge[u];if(l){let c=a.pop()||"",h=ge[c];if(h===void 0){a.push(u);continue}if(l>h||h===3){a.push(c),a.push(u);continue}else{for(;h&&l<=h;)if(h<3&&n.push(c),c=a.pop()||"",h=ge[c],h===3&&l>0){a.push(c);break}l>0&&a.push(u)}}else/\d/.test(u)?n.push(u):n.push(zt.cn.decodeS(u))}return[...n,...a.reverse()]}function Rt(e){const t=new RegExp(/(\+|\*|x|\/|\(|\)|\^|加|减|乘|除|左括号|右括号)/g);return e.replace(/\-/g,"+-").split(t)}const Et={class:"math-code-counter"},Mt=ot("="),Vt={class:"result"},kt=D({__name:"Counter",setup(e){const t=S(""),a=S("");function n(){a.value=String(pt(Lt(t.value)))}return(o,u)=>{const l=mt,c=tt,h=st,i=Ke;return N(),Ve(i,{class:"container"},{default:T(()=>[v(h,{title:"\u6570\u5B66\u8868\u8FBE\u5F0F\u8BA1\u7B97"},{extra:T(()=>[]),default:T(()=>[pe("div",Et,[v(l,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=s=>t.value=s),"allow-clear":""},null,8,["modelValue"]),v(c,{type:"primary",onClick:n},{default:T(()=>[Mt]),_:1}),pe("div",Vt,q(a.value),1)])]),_:1})]),_:1})}}});var It=lt(kt,[["__scopeId","data-v-05fd61ce"]]);const Tt=D({__name:"Queer",setup(e){return(t,a)=>(N(),Ve(It))}});export{Tt as default};