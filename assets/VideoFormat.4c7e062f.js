import{c as Ze,f as Le,b as at,g as le,r as lt,z as Me,_ as se,j as xe,n as st,i as we,A as Ie,s as nt,a as ut,B as ke}from"./index.cdfcc5d8.js";import{s as dt}from"./selectFile.a2607bdd.js";import{g as ct}from"./getVideoInfo.ecd0ef5d.js";import{R as ft,a as pt,b as ht}from"./index.147dbbd6.js";import{u as gt,f as mt,I as vt,P as bt}from"./utils.59c47cd3.js";import"./index.c6a20670.js";import{s as yt,S as _t,O as jt}from"./index.2105d003.js";import{d as D,r as B,t as Se,c as _,j as z,p as He,o as y,a as V,b as W,n as k,S as $t,e as Ct,f as p,x as Ve,u as Je,O as Ye,z as Ot,g as H,h as R,w as O,q as wt,m as ce,i as N,B as C,E as x,G as J,k as pe,T as We,F as X,R as $e,A as St,l as Vt,y as Ft,I as j,C as Et,D as Lt,_ as Xe,a0 as Mt,a1 as kt,s as Pt}from"./index.4b01108f.js";import{M as qt}from"./index.29f530db.js";import{R as At,C as zt}from"./index.43f6f745.js";import{I as Rt}from"./index.554646c6.js";import"./handleFile.719ba7a4.js";import"./use-popup-manager.b89a1cc3.js";import"./index.f4d01a67.js";import"./responsive-observe.d27ca9a6.js";import"./index.91270f9d.js";import"./index.45f5c73b.js";import"./index.319e4295.js";const Ne=(e,t)=>{if(!e||!t)return;t=t.replace(/\[(\w+)\]/g,".$1");const r=t.split(".");if(r.length===0)return;let i=e;for(let o=0;o<r.length;o++){if(!Ze(i)&&!Le(i)||!r[o])return;if(o!==r.length-1)i=i[r[o]];else return i[r[o]]}},Be=(e,t,r,{addPath:i}={})=>{if(!e||!t)return;t=t.replace(/\[(\w+)\]/g,".$1");const o=t.split(".");if(o.length===0)return;let a=e;for(let s=0;s<o.length;s++){if(!Ze(a)&&!Le(a)||!o[s])return;s!==o.length-1?(i&&at(a[o[s]])&&(a[o[s]]={}),a=a[o[s]]):a[o[s]]=r}};var Tt=Object.defineProperty,De=Object.getOwnPropertySymbols,xt=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,Ue=(e,t,r)=>t in e?Tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Wt=(e,t)=>{for(var r in t||(t={}))xt.call(t,r)&&Ue(e,r,t[r]);if(De)for(var r of De(t))It.call(t,r)&&Ue(e,r,t[r]);return e};const Nt=D({name:"Form",props:{model:{type:Object,required:!0},layout:{type:String,default:"horizontal"},size:{type:String},labelColProps:{type:Object,default:()=>({span:5,offset:0})},wrapperColProps:{type:Object,default:()=>({span:19,offset:0})},labelColStyle:Object,wrapperColStyle:Object,labelAlign:{type:String,default:"right"},disabled:{type:Boolean,default:void 0},rules:{type:Object},autoLabelWidth:{type:Boolean,default:!1},id:{type:String},scrollToFirstError:{type:Boolean,default:!1}},emits:{submit:(e,t)=>!0,submitSuccess:(e,t)=>!0,submitFailed:(e,t)=>!0},setup(e,{emit:t}){const r=le("form"),i=B(),{id:o,model:a,layout:s,disabled:n,labelAlign:b,labelColProps:$,wrapperColProps:S,labelColStyle:m,wrapperColStyle:d,size:F,rules:L}=Se(e),{mergedSize:M}=lt(F),q=_(()=>e.layout==="horizontal"&&e.autoLabelWidth),c=[],h=[],U=z({}),K=_(()=>Math.max(...Object.values(U))),Y=u=>{u&&u.field&&c.push(u)},ne=u=>{u&&u.field&&c.splice(c.indexOf(u),1)},be=u=>{c.forEach(v=>{u[v.field]&&v.setField(u[v.field])})},ue=(u,v)=>{v&&U[v]!==u&&(U[v]=u)},G=u=>{u&&delete U[u]},ye=u=>{const v=u?[].concat(u):[];c.forEach(w=>{(v.length===0||v.includes(w.field))&&w.resetField()})},Q=u=>{const v=u?[].concat(u):[];c.forEach(w=>{(v.length===0||v.includes(w.field))&&w.clearValidate()})},de=(u,v)=>{const w=i.value||document.body,l=e.id?`${e.id}_${u}`:u,f=w==null?void 0:w.querySelector(`#${l}`);f&&yt(f,Wt({behavior:"smooth",block:"nearest",scrollMode:"if-needed"},v))},re=u=>{const v=st(e.scrollToFirstError)?void 0:e.scrollToFirstError;de(u,v)},ie=u=>{const v=[];return c.forEach(w=>{v.push(w.validate())}),Promise.all(v).then(w=>{const l={};let f=!1;return w.forEach(g=>{g&&(f=!0,l[g.field]=g)}),f&&e.scrollToFirstError&&re(Object.keys(l)[0]),xe(u)&&u(f?l:void 0),f?l:void 0})},_e=(u,v)=>{const w=[];for(const l of c)(Le(u)&&u.includes(l.field)||u===l.field)&&w.push(l.validate());return Promise.all(w).then(l=>{const f={};let g=!1;return l.forEach(A=>{A&&(g=!0,f[A.field]=A)}),g&&e.scrollToFirstError&&re(Object.keys(f)[0]),xe(v)&&v(g?f:void 0),g?f:void 0})},ze=u=>{const v=[];c.forEach(w=>{v.push(w.validate())}),Promise.all(v).then(w=>{const l={};let f=!1;w.forEach(g=>{g&&(f=!0,l[g.field]=g)}),f?(e.scrollToFirstError&&re(Object.keys(l)[0]),t("submitFailed",{values:a.value,errors:l},u)):t("submitSuccess",a.value,u),t("submit",{values:a.value,errors:f?l:void 0},u)})};return He(Me,z({id:o,layout:s,disabled:n,labelAlign:b,labelColProps:$,wrapperColProps:S,labelColStyle:m,wrapperColStyle:d,model:a,size:M,rules:L,fields:c,touchedFields:h,addField:Y,removeField:ne,validateField:_e,setLabelWidth:ue,removeLabelWidth:G,maxLabelWidth:K,autoLabelWidth:q})),{cls:_(()=>[r,`${r}-layout-${e.layout}`,`${r}-size-${M.value}`,{[`${r}-auto-label-width`]:e.autoLabelWidth}]),formRef:i,handleSubmit:ze,innerValidate:ie,innerValidateField:_e,innerResetFields:ye,innerClearValidate:Q,innerSetFields:be,innerScrollToField:de}},methods:{validate(e){return this.innerValidate(e)},validateField(e,t){return this.innerValidateField(e,t)},resetFields(e){return this.innerResetFields(e)},clearValidate(e){return this.innerClearValidate(e)},setFields(e){return this.innerSetFields(e)},scrollToField(e){return this.innerScrollToField(e)}}});function Bt(e,t,r,i,o,a){return y(),V("form",{ref:"formRef",class:k(e.cls),onSubmit:t[0]||(t[0]=$t((...s)=>e.handleSubmit&&e.handleSubmit(...s),["prevent"]))},[W(e.$slots,"default")],34)}var Ce=se(Nt,[["render",Bt]]),ee=Object.prototype.toString;function me(e){return ee.call(e)==="[object Array]"}function T(e){return ee.call(e)==="[object Object]"}function Fe(e){return ee.call(e)==="[object String]"}function Dt(e){return ee.call(e)==="[object Number]"&&e===e}function Ut(e){return ee.call(e)==="[object Boolean]"}function Ee(e){return ee.call(e)==="[object Function]"}function Kt(e){return T(e)&&Object.keys(e).length===0}function Z(e){return e==null||e===""}function et(e){return me(e)&&!e.length}var Pe=function(e,t){if(typeof e!="object"||typeof t!="object")return e===t;if(Ee(e)&&Ee(t))return e===t||e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var r in e){var i=Pe(e[r],t[r]);if(!i)return!1}return!0},qe=function(e,t){var r=Object.assign({},e);return Object.keys(t||{}).forEach(function(i){var o=r[i],a=t==null?void 0:t[i];r[i]=T(o)?Object.assign(Object.assign({},o),a):a||o}),r},Gt=function(e,t){for(var r=t.split("."),i=e,o=0;o<r.length;o++)if(i=i&&i[r[o]],i===void 0)return i;return i},I="#{field} is not a #{type} type",Qt={required:"#{field} is required",type:{ip:I,email:I,url:I,string:I,number:I,array:I,object:I,boolean:I},number:{min:"`#{value}` is not greater than `#{min}`",max:"`#{value}` is not less than `#{max}`",equal:"`#{value}` is not equal to `#{equal}`",range:"`#{value}` is not in range `#{min} ~ #{max}`",positive:"`#{value}` is not a positive number",negative:"`#{value}` is not a negative number"},string:{maxLength:"#{field} cannot be longer than #{maxLength} characters",minLength:"#{field} must be at least #{minLength} characters",length:"#{field} must be exactly #{length} characters",match:"`#{value}` does not match pattern #{pattern}",uppercase:"`#{value}` must be all uppercase",lowercase:"`#{value}` must be all lowercased"},array:{length:"#{field} must be exactly #{length} in length",minLength:"#{field} cannot be less than #{minLength} in length",maxLength:"#{field} cannot be greater than #{maxLength} in length",includes:"#{field} is not includes #{includes}",deepEqual:"#{field} is not deep equal with #{deepEqual}",empty:"#{field} is not an empty array"},object:{deepEqual:"#{field} is not deep equal to expected value",hasKeys:"#{field} does not contain required fields",empty:"#{field} is not an empty object"},boolean:{true:"Expect true but got `#{value}`",false:"Expect false but got `#{value}`"}},P=function(t,r){var i=this;this.getValidateMsg=function(o,a){a===void 0&&(a={});var s=Object.assign(Object.assign({},a),{value:i.obj,field:i.field,type:i.type}),n=Gt(i.validateMessages,o);return Ee(n)?n(s):Fe(n)?n.replace(/\#\{.+?\}/g,function(b){var $=b.slice(2,-1);if($ in s){if(T(s[$])||me(s[$]))try{return JSON.stringify(s[$])}catch{return s[$]}return String(s[$])}return b}):n},T(r)&&Fe(t)&&r.trim?this.obj=t.trim():T(r)&&r.ignoreEmptyString&&t===""?this.obj=void 0:this.obj=t,this.message=r.message,this.type=r.type,this.error=null,this.field=r.field||r.type,this.validateMessages=qe(Qt,r.validateMessages)},ve={not:{configurable:!0},isRequired:{configurable:!0},end:{configurable:!0}};ve.not.get=function(){return this._not=!this._not,this};ve.isRequired.get=function(){if(Z(this.obj)||et(this.obj)){var e=this.getValidateMsg("required");this.error={value:this.obj,type:this.type,requiredError:!0,message:this.message||(T(e)?e:(this._not?"[NOT MODE]:":"")+e)}}return this};ve.end.get=function(){return this.error};P.prototype.addError=function(t){!this.error&&t&&(this.error={value:this.obj,type:this.type,message:this.message||(T(t)?t:(this._not?"[NOT MODE]:":"")+t)})};P.prototype.validate=function(t,r){var i=this._not?t:!t;return i&&this.addError(r),this};P.prototype.collect=function(t){t&&t(this.error)};Object.defineProperties(P.prototype,ve);var Zt=function(e){function t(i,o){e.call(this,i,Object.assign(Object.assign({},o),{type:"string"})),this.validate(o&&o.strict?Fe(this.obj):!0,this.getValidateMsg("type.string"))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={uppercase:{configurable:!0},lowercase:{configurable:!0}};return t.prototype.maxLength=function(o){return this.obj?this.validate(this.obj.length<=o,this.getValidateMsg("string.maxLength",{maxLength:o})):this},t.prototype.minLength=function(o){return this.obj?this.validate(this.obj.length>=o,this.getValidateMsg("string.minLength",{minLength:o})):this},t.prototype.length=function(o){return this.obj?this.validate(this.obj.length===o,this.getValidateMsg("string.length",{length:o})):this},t.prototype.match=function(o){var a=o instanceof RegExp;return a&&(o.lastIndex=0),this.validate(this.obj===void 0||a&&o.test(this.obj),this.getValidateMsg("string.match",{pattern:o}))},r.uppercase.get=function(){return this.obj?this.validate(this.obj.toUpperCase()===this.obj,this.getValidateMsg("string.uppercase")):this},r.lowercase.get=function(){return this.obj?this.validate(this.obj.toLowerCase()===this.obj,this.getValidateMsg("string.lowercase")):this},Object.defineProperties(t.prototype,r),t}(P),Ht=function(e){function t(i,o){e.call(this,i,Object.assign(Object.assign({},o),{type:"number"})),this.validate(o&&o.strict?Dt(this.obj):!0,this.getValidateMsg("type.number"))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={positive:{configurable:!0},negative:{configurable:!0}};return t.prototype.min=function(o){return Z(this.obj)?this:this.validate(this.obj>=o,this.getValidateMsg("number.min",{min:o}))},t.prototype.max=function(o){return Z(this.obj)?this:this.validate(this.obj<=o,this.getValidateMsg("number.max",{max:o}))},t.prototype.equal=function(o){return Z(this.obj)?this:this.validate(this.obj===o,this.getValidateMsg("number.equal",{equal:o}))},t.prototype.range=function(o,a){return Z(this.obj)?this:this.validate(this.obj>=o&&this.obj<=a,this.getValidateMsg("number.range",{min:o,max:a}))},r.positive.get=function(){return Z(this.obj)?this:this.validate(this.obj>0,this.getValidateMsg("number.positive"))},r.negative.get=function(){return Z(this.obj)?this:this.validate(this.obj<0,this.getValidateMsg("number.negative"))},Object.defineProperties(t.prototype,r),t}(P),Jt=function(e){function t(i,o){e.call(this,i,Object.assign(Object.assign({},o),{type:"array"})),this.validate(o&&o.strict?me(this.obj):!0,this.getValidateMsg("type.array",{value:this.obj,type:this.type}))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={empty:{configurable:!0}};return t.prototype.length=function(o){return this.obj?this.validate(this.obj.length===o,this.getValidateMsg("array.length",{value:this.obj,length:o})):this},t.prototype.minLength=function(o){return this.obj?this.validate(this.obj.length>=o,this.getValidateMsg("array.minLength",{value:this.obj,minLength:o})):this},t.prototype.maxLength=function(o){return this.obj?this.validate(this.obj.length<=o,this.getValidateMsg("array.maxLength",{value:this.obj,maxLength:o})):this},t.prototype.includes=function(o){var a=this;return this.obj?this.validate(o.every(function(s){return a.obj.indexOf(s)!==-1}),this.getValidateMsg("array.includes",{value:this.obj,includes:o})):this},t.prototype.deepEqual=function(o){return this.obj?this.validate(Pe(this.obj,o),this.getValidateMsg("array.deepEqual",{value:this.obj,deepEqual:o})):this},r.empty.get=function(){return this.validate(et(this.obj),this.getValidateMsg("array.empty",{value:this.obj}))},Object.defineProperties(t.prototype,r),t}(P),Yt=function(e){function t(i,o){e.call(this,i,Object.assign(Object.assign({},o),{type:"object"})),this.validate(o&&o.strict?T(this.obj):!0,this.getValidateMsg("type.object"))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={empty:{configurable:!0}};return t.prototype.deepEqual=function(o){return this.obj?this.validate(Pe(this.obj,o),this.getValidateMsg("object.deepEqual",{deepEqual:o})):this},t.prototype.hasKeys=function(o){var a=this;return this.obj?this.validate(o.every(function(s){return a.obj[s]}),this.getValidateMsg("object.hasKeys",{keys:o})):this},r.empty.get=function(){return this.validate(Kt(this.obj),this.getValidateMsg("object.empty"))},Object.defineProperties(t.prototype,r),t}(P),Xt=function(e){function t(i,o){e.call(this,i,Object.assign(Object.assign({},o),{type:"boolean"})),this.validate(o&&o.strict?Ut(this.obj):!0,this.getValidateMsg("type.boolean"))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={true:{configurable:!0},false:{configurable:!0}};return r.true.get=function(){return this.validate(this.obj===!0,this.getValidateMsg("boolean.true"))},r.false.get=function(){return this.validate(this.obj===!1,this.getValidateMsg("boolean.false"))},Object.defineProperties(t.prototype,r),t}(P),er=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,tr=new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$","i"),rr=/^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/,ir=function(e){function t(i,o){e.call(this,i,Object.assign(Object.assign({},o),{type:"type"}))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={email:{configurable:!0},url:{configurable:!0},ip:{configurable:!0}};return r.email.get=function(){return this.type="email",this.validate(this.obj===void 0||er.test(this.obj),this.getValidateMsg("type.email"))},r.url.get=function(){return this.type="url",this.validate(this.obj===void 0||tr.test(this.obj),this.getValidateMsg("type.url"))},r.ip.get=function(){return this.type="ip",this.validate(this.obj===void 0||rr.test(this.obj),this.getValidateMsg("type.ip"))},Object.defineProperties(t.prototype,r),t}(P),or=function(e){function t(i,o){e.call(this,i,Object.assign(Object.assign({},o),{type:"custom"}))}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={validate:{configurable:!0}};return r.validate.get=function(){var i=this;return function(o,a){var s;if(o)return s=o(i.obj,i.addError.bind(i)),s&&s.then?(a&&s.then(function(){a&&a(i.error)},function(n){console.error(n)}),[s,i]):(a&&a(i.error),i.error)}},Object.defineProperties(t.prototype,r),t}(P),he=function(e,t){return new tt(e,Object.assign({field:"value"},t))};he.globalConfig={};he.setGlobalConfig=function(e){he.globalConfig=e||{}};var tt=function(t,r){var i=he.globalConfig,o=Object.assign(Object.assign(Object.assign({},i),r),{validateMessages:qe(i.validateMessages,r.validateMessages)});this.string=new Zt(t,o),this.number=new Ht(t,o),this.array=new Jt(t,o),this.object=new Yt(t,o),this.boolean=new Xt(t,o),this.type=new ir(t,o),this.custom=new or(t,o)},Ae=function(t,r){r===void 0&&(r={}),this.schema=t,this.options=r};Ae.prototype.messages=function(t){this.options=Object.assign(Object.assign({},this.options),{validateMessages:qe(this.options.validateMessages,t)})};Ae.prototype.validate=function(t,r){var i=this;if(!T(t))return;var o=[],a=null;function s(n,b){a||(a={}),(!a[n]||b.requiredError)&&(a[n]=b)}this.schema&&Object.keys(this.schema).forEach(function(n){if(me(i.schema[n]))for(var b=function(m){var d=i.schema[n][m],F=d.type,L=d.message;if(!F&&!d.validator)throw"You must specify a type to field "+n+"!";var M=Object.assign(Object.assign({},i.options),{message:L,field:n});"ignoreEmptyString"in d&&(M.ignoreEmptyString=d.ignoreEmptyString),"strict"in d&&(M.strict=d.strict);var q=new tt(t[n],M),c=q.type[F]||null;if(!c)if(d.validator){c=q.custom.validate(d.validator),Object.prototype.toString.call(c)==="[object Array]"&&c[0].then?o.push({function:c[0],_this:c[1],key:n}):c&&s(n,c);return}else c=q[F];if(Object.keys(d).forEach(function(h){d.required&&(c=c.isRequired),h!=="message"&&c[h]&&d[h]&&typeof c[h]=="object"&&(c=c[h]),c[h]&&d[h]!==void 0&&typeof c[h]=="function"&&(c=c[h](d[h]))}),c.collect(function(h){h&&s(n,h)}),a)return"break"},$=0;$<i.schema[n].length;$++){var S=b($);if(S==="break")break}}),o.length>0?Promise.all(o.map(function(n){return n.function})).then(function(){o.forEach(function(n){n._this.error&&s(n.key,n._this.error)}),r&&r(a)}):r&&r(a)};const ar=D({name:"IconQuestionCircle",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const r=le("icon"),i=_(()=>[r,`${r}-question-circle`,{[`${r}-spin`]:e.spin}]),o=_(()=>{const s={};return e.size&&(s.fontSize=we(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:i,innerStyle:o,onClick:s=>{t("click",s)}}}}),lr=["stroke-width","stroke-linecap","stroke-linejoin"],sr=p("path",{d:"M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z"},null,-1),nr=p("path",{d:"M24.006 31v4.008m0-6.008L24 28c0-3 3-4 4.78-6.402C30.558 19.195 28.288 15 23.987 15c-4.014 0-5.382 2.548-5.388 4.514v.465"},null,-1),ur=[sr,nr];function dr(e,t,r,i,o,a){return y(),V("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:k(e.cls),style:Ct(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...s)=>e.onClick&&e.onClick(...s))},ur,14,lr)}var Oe=se(ar,[["render",dr]]);const cr=Object.assign(Oe,{install:(e,t)=>{var r;const i=(r=t==null?void 0:t.iconPrefix)!=null?r:"";e.component(i+Oe.name,Oe)}}),fr=D({name:"FormItemLabel",components:{ResizeObserver:ft,Tooltip:pt,IconQuestionCircle:cr},props:{required:{type:Boolean,default:!1},showColon:{type:Boolean,default:!1},component:{type:String,default:"label"},asteriskPosition:{type:String,default:"start"},tooltip:{type:String},attrs:Object},setup(){const e=le("form-item-label"),t=Ve(Me,void 0),r=Ot(),i=B(),o=()=>{i.value&&we(i.value.offsetWidth)&&(t==null||t.setLabelWidth(i.value.offsetWidth,r==null?void 0:r.uid))};return Je(()=>{i.value&&we(i.value.offsetWidth)&&(t==null||t.setLabelWidth(i.value.offsetWidth,r==null?void 0:r.uid))}),Ye(()=>{t==null||t.removeLabelWidth(r==null?void 0:r.uid)}),{prefixCls:e,labelRef:i,handleResize:o}}}),pr=p("svg",{fill:"currentColor",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},[p("path",{d:"M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"})],-1),hr=[pr],gr=p("svg",{fill:"currentColor",viewBox:"0 0 1024 1024",width:"1em",height:"1em"},[p("path",{d:"M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z"})],-1),mr=[gr];function vr(e,t,r,i,o,a){const s=H("icon-question-circle"),n=H("Tooltip"),b=H("ResizeObserver");return y(),R(b,{onResize:e.handleResize},{default:O(()=>[(y(),R(wt(e.component),ce({ref:"labelRef",class:e.prefixCls},e.attrs),{default:O(()=>[e.required&&e.asteriskPosition==="start"?(y(),V("strong",{key:0,class:k(`${e.prefixCls}-required-symbol`)},hr,2)):N("v-if",!0),W(e.$slots,"default"),e.tooltip?(y(),R(n,{key:1,content:e.tooltip},{default:O(()=>[C(s,{class:k(`${e.prefixCls}-tooltip`)},null,8,["class"])]),_:1},8,["content"])):N("v-if",!0),e.required&&e.asteriskPosition==="end"?(y(),V("strong",{key:2,class:k(`${e.prefixCls}-required-symbol`)},mr,2)):N("v-if",!0),x(" "+J(e.showColon?":":""),1)]),_:3},16,["class"]))]),_:3},8,["onResize"])}var br=se(fr,[["render",vr]]);const yr=D({name:"FormItemMessage",props:{error:{type:Array,default:()=>[]},help:String},setup(){return{prefixCls:le("form-item-message")}}});function _r(e,t,r,i,o,a){return e.error.length>0?(y(!0),V(X,{key:0},pe(e.error,s=>(y(),R(We,{key:s,name:"form-blink",appear:""},{default:O(()=>[p("div",{role:"alert",class:k([e.prefixCls])},J(s),3)]),_:2},1024))),128)):e.help||e.$slots.help?(y(),R(We,{key:1,name:"form-blink",appear:""},{default:O(()=>[p("div",{class:k([e.prefixCls,`${e.prefixCls}-help`])},[W(e.$slots,"help",{},()=>[x(J(e.help),1)])],2)]),_:3})):N("v-if",!0)}var jr=se(yr,[["render",_r]]);const Ke=["success","warning","error","validating"],$r=e=>{let t="";for(const r of Object.keys(e)){const i=e[r];i&&(!t||Ke.indexOf(i)>Ke.indexOf(t))&&(t=e[r])}return t},Cr=e=>{const t=[];for(const r of Object.keys(e)){const i=e[r];i&&t.push(i)}return t};var Or=Object.defineProperty,ge=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,Ge=(e,t,r)=>t in e?Or(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Qe=(e,t)=>{for(var r in t||(t={}))rt.call(t,r)&&Ge(e,r,t[r]);if(ge)for(var r of ge(t))it.call(t,r)&&Ge(e,r,t[r]);return e},wr=(e,t)=>{var r={};for(var i in e)rt.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&ge)for(var i of ge(e))t.indexOf(i)<0&&it.call(e,i)&&(r[i]=e[i]);return r};const Sr=D({name:"FormItem",components:{ArcoRow:At,ArcoCol:zt,FormItemLabel:br,FormItemMessage:jr},props:{field:{type:String,default:""},label:String,tooltip:{type:String},showColon:{type:Boolean,default:!1},noStyle:{type:Boolean,default:!1},disabled:{type:Boolean,default:void 0},help:String,extra:String,required:{type:Boolean,default:!1},asteriskPosition:{type:String,default:"start"},rules:{type:[Object,Array]},validateStatus:{type:String},validateTrigger:{type:[String,Array],default:"change"},labelColProps:Object,wrapperColProps:Object,hideLabel:{type:Boolean,default:!1},hideAsterisk:{type:Boolean,default:!1},labelColStyle:Object,wrapperColStyle:Object,rowProps:Object,rowClass:[String,Array,Object],contentClass:[String,Array,Object],contentFlex:{type:Boolean,default:!0},mergeProps:{type:[Boolean,Function],default:!0},labelColFlex:{type:[Number,String]},feedback:{type:Boolean,default:!1},labelComponent:{type:String,default:"label"},labelAttrs:Object},setup(e){const t=le("form-item"),{field:r}=Se(e),i=Ve(Me,{}),{autoLabelWidth:o,layout:a}=Se(i),{i18nMessage:s}=ht(),n=_(()=>{var l;const f=Qe({},(l=e.labelColProps)!=null?l:i.labelColProps);return e.labelColFlex?f.flex=e.labelColFlex:i.autoLabelWidth&&(f.flex=`${i.maxLabelWidth}px`),f}),b=_(()=>{var l;const f=Qe({},(l=e.wrapperColProps)!=null?l:i.wrapperColProps);return m.value&&(f.id=m.value),(e.labelColFlex||i.autoLabelWidth)&&(f.flex="auto"),f}),$=_(()=>{var l;return(l=e.labelColStyle)!=null?l:i.labelColStyle}),S=_(()=>{var l;return(l=e.wrapperColStyle)!=null?l:i.wrapperColStyle}),m=_(()=>i.id?`${i.id}_${r.value}`:r.value),d=Ne(i.model,e.field),F=z({}),L=z({}),M=_(()=>$r(F)),q=_(()=>Cr(L)),c=B(!1),h=_(()=>Ne(i.model,e.field)),U=_(()=>{var l;return Boolean((l=e.disabled)!=null?l:i==null?void 0:i.disabled)}),K=_(()=>{var l;return(l=e.validateStatus)!=null?l:M.value}),Y=_(()=>K.value==="error"),ne=_(()=>{var l,f,g;const A=[].concat((g=(f=e.rules)!=null?f:(l=i==null?void 0:i.rules)==null?void 0:l[e.field])!=null?g:[]),je=A.some(ae=>ae.required);return e.required&&!je?[{required:!0}].concat(A):A}),be=_(()=>ne.value.some(l=>l.required)),ue=e.noStyle?Ve(Ie,void 0):void 0,G=(l,{status:f,message:g})=>{F[l]=f,L[l]=g,e.noStyle&&(ue==null||ue.updateValidateState(l,{status:f,message:g}))},ye=_(()=>e.feedback&&K.value?K.value:void 0),Q=()=>{var l;if(c.value)return Promise.resolve();const f=ne.value;if(!r.value||f.length===0)return M.value&&ie(),Promise.resolve();const g=r.value,A=h.value;G(g,{status:"",message:""});const je=new Ae({[g]:f.map(ae=>{var E=wr(ae,[]);return!E.type&&!E.validator&&(E.type="string"),E})},{ignoreEmptyString:!0,validateMessages:(l=s.value.form)==null?void 0:l.validateMessages});return new Promise(ae=>{je.validate({[g]:A},E=>{var Re;const Te=Boolean(E==null?void 0:E[g]);G(g,{status:Te?"error":"",message:(Re=E==null?void 0:E[g].message)!=null?Re:""});const ot=Te?{label:e.label,field:r.value,value:E[g].value,type:E[g].type,isRequiredError:Boolean(E[g].requiredError),message:E[g].message}:void 0;ae(ot)})})},de=_(()=>[].concat(e.validateTrigger)),re=_(()=>de.value.reduce((l,f)=>{switch(f){case"change":return l.onChange=()=>{Q()},l;case"input":return l.onInput=()=>{$e(()=>{Q()})},l;case"focus":return l.onFocus=()=>{Q()},l;case"blur":return l.onBlur=()=>{Q()},l;default:return l}},{}));He(Ie,z({eventHandlers:re,size:i&&St(i,"size"),disabled:U,error:Y,feedback:ye,updateValidateState:G}));const ie=()=>{r.value&&G(r.value,{status:"",message:""})},oe=z({field:r,disabled:U,error:Y,validate:Q,clearValidate:ie,resetField:()=>{ie(),c.value=!0,(i==null?void 0:i.model)&&r.value&&Be(i.model,r.value,d),$e(()=>{c.value=!1})},setField:l=>{var f,g;r.value&&(c.value=!0,"value"in l&&(i==null?void 0:i.model)&&r.value&&Be(i.model,r.value,l.value),(l.status||l.message)&&G(r.value,{status:(f=l.status)!=null?f:"",message:(g=l.message)!=null?g:""}),$e(()=>{c.value=!1}))}});Je(()=>{var l;oe.field&&((l=i.addField)==null||l.call(i,oe))}),Ye(()=>{var l;oe.field&&((l=i.removeField)==null||l.call(i,oe))});const u=_(()=>[t,`${t}-layout-${i.layout}`,{[`${t}-error`]:Y.value,[`${t}-status-${K.value}`]:Boolean(K.value)},e.rowClass]),v=_(()=>[`${t}-label-col`,{[`${t}-label-col-left`]:i.labelAlign==="left",[`${t}-label-col-flex`]:i.autoLabelWidth||e.labelColFlex}]),w=_(()=>[`${t}-wrapper-col`,{[`${t}-wrapper-col-flex`]:!b.value}]);return{prefixCls:t,cls:u,isRequired:be,isError:Y,finalMessage:q,mergedLabelCol:n,mergedWrapperCol:b,labelColCls:v,autoLabelWidth:o,layout:a,mergedLabelStyle:$,wrapperColCls:w,mergedWrapperStyle:S}}});function Vr(e,t,r,i,o,a){var s;const n=H("FormItemLabel"),b=H("ArcoCol"),$=H("FormItemMessage"),S=H("ArcoRow");return e.noStyle?W(e.$slots,"default",{key:0}):(y(),R(S,ce({key:1,class:[e.cls,{[`${e.prefixCls}-has-help`]:Boolean((s=e.$slots.help)!=null?s:e.help)}],wrap:!(e.labelColFlex||e.autoLabelWidth),div:e.layout!=="horizontal"||e.hideLabel},e.rowProps),{default:O(()=>[e.hideLabel?N("v-if",!0):(y(),R(b,ce({key:0,class:e.labelColCls,style:e.mergedLabelStyle},e.mergedLabelCol),{default:O(()=>[C(n,{required:e.hideAsterisk?!1:e.isRequired,"show-colon":e.showColon,"asterisk-position":e.asteriskPosition,component:e.labelComponent,attrs:e.labelAttrs,tooltip:e.tooltip},{default:O(()=>[e.$slots.label||e.label?W(e.$slots,"label",{key:0},()=>[x(J(e.label),1)]):N("v-if",!0)]),_:3},8,["required","show-colon","asterisk-position","component","attrs","tooltip"])]),_:3},16,["class","style"])),C(b,ce({class:e.wrapperColCls,style:e.mergedWrapperStyle},e.mergedWrapperCol),{default:O(()=>[p("div",{class:k(`${e.prefixCls}-content-wrapper`)},[p("div",{class:k([`${e.prefixCls}-content`,{[`${e.prefixCls}-content-flex`]:e.contentFlex},e.contentClass])},[W(e.$slots,"default")],2)],2),e.isError||e.$slots.help||e.help?(y(),R($,{key:0,error:e.finalMessage,help:e.help},Vt({_:2},[e.$slots.help?{name:"help",fn:O(()=>[W(e.$slots,"help")])}:void 0]),1032,["error","help"])):N("v-if",!0),e.$slots.extra||e.extra?(y(),V("div",{key:1,class:k(`${e.prefixCls}-extra`)},[W(e.$slots,"extra",{},()=>[x(J(e.extra),1)])],2)):N("v-if",!0)]),_:3},16,["class","style"])]),_:3},16,["class","wrap","div"]))}var fe=se(Sr,[["render",Vr]]);const Fr=Object.assign(Ce,{Item:fe,install:(e,t)=>{nt(e,t);const r=ut(t);e.component(r+Ce.name,Ce),e.component(r+fe.name,fe)}});const te=e=>(Mt("data-v-3874325b"),e=e(),kt(),e),Er={class:"setting"},Lr=te(()=>p("span",null,"\u5E27\u6570 :",-1)),Mr=te(()=>p("span",null,"\u5BBD\u5EA6:",-1)),kr=te(()=>p("span",null,"\u9AD8\u5EA6:",-1)),Pr=te(()=>p("span",null,"\u5F00\u59CB\u65F6\u95F4:",-1)),qr=te(()=>p("span",null,"\u7ED3\u675F\u65F6\u95F4:",-1)),Ar=te(()=>p("span",null,"\u6587\u4EF6\u683C\u5F0F:",-1)),zr=D({__name:"FormatSetting",props:{fileInfo:{}},emits:["change"],setup(e,{emit:t}){const r=e,i=["gif","mp4","avi","webm","mpeg","flv"],o=B(!1),a=z({type:"video",outputName:"output",filename:"",frameRate:25,rangeStart:0,rangeEnd:10,width:0,height:0,fileType:"gif"}),s=B(0),{ffmpeg:n,writeFile:b,ffmpegRun:$}=gt();Ft(()=>r.fileInfo,m=>{m&&(a.width=m==null?void 0:m.width,a.height=m==null?void 0:m.height,a.rangeEnd=m==null?void 0:m.duration)}),n.setProgress(({time:m})=>{const d=m>=0?m:0;s.value=mt(d/a.rangeEnd,2)});async function S(){var L;const m=(L=r.fileInfo)==null?void 0:L.file;if(!m)return;o.value=!0,await b(m);const{url:d,size:F}=await $({...a,filename:m.name});t("change",{url:d,size:F,type:a.fileType}),o.value=!1}return(m,d)=>{const F=vt,L=jt,M=_t,q=ke,c=bt;return y(),V("div",Er,[p("div",null,[Lr,C(F,{type:"text",modelValue:j(a).frameRate,"onUpdate:modelValue":d[0]||(d[0]=h=>j(a).frameRate=h)},null,8,["modelValue"])]),p("div",null,[Mr,C(F,{type:"text",modelValue:j(a).width,"onUpdate:modelValue":d[1]||(d[1]=h=>j(a).width=h)},null,8,["modelValue"])]),p("div",null,[kr,C(F,{type:"text",modelValue:j(a).height,"onUpdate:modelValue":d[2]||(d[2]=h=>j(a).height=h)},null,8,["modelValue"])]),p("div",null,[Pr,C(F,{type:"text",modelValue:j(a).rangeStart,"onUpdate:modelValue":d[3]||(d[3]=h=>j(a).rangeStart=h)},null,8,["modelValue"])]),p("div",null,[qr,C(F,{type:"text",modelValue:j(a).rangeEnd,"onUpdate:modelValue":d[4]||(d[4]=h=>j(a).rangeEnd=h)},null,8,["modelValue"])]),p("div",null,[Ar,C(M,{"w-320i":"",modelValue:j(a).fileType,"onUpdate:modelValue":d[5]||(d[5]=h=>j(a).fileType=h)},{default:O(()=>[(y(),V(X,null,pe(i,h=>C(L,{value:h,key:h},{default:O(()=>[x(J(h.toUpperCase()),1)]),_:2},1032,["value"])),64))]),_:1},8,["modelValue"])]),p("div",null,[C(q,{loading:j(o),onClick:S,type:"primary","mr-10":""},{default:O(()=>[x(" \u5F00\u59CB\u8F6C\u6362 ")]),_:1},8,["loading"]),Et(C(c,{percent:j(s),max:100,min:0,"w-200i":""},null,8,["percent"]),[[Lt,j(s)||j(o)]])])])}}});var Rr=Xe(zr,[["__scopeId","data-v-3874325b"]]);const Tr={flex:"","mb-10":"","b-1":"","b-rd-10":""},xr={"f-ac":"","wp-50":"","p-10":""},Ir=["src"],Wr=["src"],Nr={"wp-50":"","p-10":"","b-l-1":""},Br=p("div",{"fs-20":"","fw-700":"","ml-10":"","mb-10":""},"\u6587\u4EF6\u4FE1\u606F",-1),Dr=p("span",null,"M",-1),Ur={"f-ac-jc":""},Kr=["src"],Gr=["src"],Qr=D({__name:"FormatCard",props:{file:{}},setup(e){const t=e,r=B(!1),i=_(()=>(t.file.size/1e6).toFixed(2)),o=B("output");return(a,s)=>{const n=Rt,b=fe,$=Fr,S=ke,m=qt;return y(),V(X,null,[p("div",Tr,[p("div",xr,[a.file.type==="gif"?(y(),V("img",{key:0,src:a.file.url,"wp-100":""},null,8,Ir)):(y(),V("video",{key:1,src:a.file.url,autoplay:"",loop:"","wp-100":""},null,8,Wr))]),p("div",Nr,[Br,C($,{model:{},"label-col-props":{span:6},"wrapper-col-props":{span:18}},{default:O(()=>[C(b,{label:"\u5927\u5C0F"},{default:O(()=>[C(n,{"model-value":j(i),disabled:""},{suffix:O(()=>[Dr]),_:1},8,["model-value"])]),_:1}),C(b,{field:"output",label:"\u540D\u5B57"},{default:O(()=>[C(n,{modelValue:j(o),"onUpdate:modelValue":s[0]||(s[0]=d=>Pt(o)?o.value=d:null)},{suffix:O(()=>[p("span",null,"."+J(a.file.type),1)]),_:1},8,["modelValue"])]),_:1})]),_:1}),p("div",Ur,[C(S,{"w-60":"","mr-20":"",size:"small",type:"outline",onClick:s[1]||(s[1]=d=>r.value=!0)},{default:O(()=>[x(" \u9884\u89C8 ")]),_:1}),C(S,{"w-60":"",size:"small",type:"primary",href:a.file.url,download:`${j(o)}.${a.file.type}`},{default:O(()=>[x(" \u4E0B\u8F7D ")]),_:1},8,["href","download"])])])]),C(m,{title:`output.${a.file.type}`,visible:j(r),footer:!1,onCancel:s[2]||(s[2]=d=>r.value=!1),width:"80%"},{default:O(()=>[a.file.type==="gif"?(y(),V("img",{key:0,src:a.file.url},null,8,Kr)):(y(),V("video",{key:1,src:a.file.url,autoplay:"",loop:""},null,8,Gr))]),_:1},8,["title","visible"])],64)}}});const Zr={"mb-20":""},Hr={flex:"","b-1":""},Jr={"wp-50":"","p-20":"","b-r-1":""},Yr=["onClick"],Xr=["src"],ei={"wp-50":"","p-20":"",class:"right"},ti=D({__name:"VideoFormat",setup(e){const t=z([]),r=B({}),i=z([]);async function o(){const n=await dt("video"),b=await ct(n);a(b),t.push(b)}function a(n){r.value=n}function s(n){i.push(n)}return(n,b)=>{const $=ke;return y(),V(X,null,[p("div",Zr,[C($,{onClick:o,type:"primary"},{default:O(()=>[x("\u4E0A\u4F20\u6587\u4EF6")]),_:1})]),p("div",Hr,[p("div",Jr,[C(Rr,{fileInfo:j(r),onChange:s},null,8,["fileInfo"]),(y(!0),V(X,null,pe(j(t),S=>(y(),V("div",{class:k(["video-box",j(r).id===S.id&&"selected"]),key:S.id,onClick:m=>a(S)},[p("video",{src:S.url,"h-300":"",autoplay:"",loop:""},null,8,Xr)],10,Yr))),128))]),p("div",ei,[(y(!0),V(X,null,pe(j(i),S=>(y(),R(Qr,{file:S},null,8,["file"]))),256))])])],64)}}});var _i=Xe(ti,[["__scopeId","data-v-28ca0d29"]]);export{_i as default};
