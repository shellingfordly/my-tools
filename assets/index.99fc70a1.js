import{n as U,q as W,s as I,v as q,F as K,d as X,r as k,c as J,x as Q,y as Z,z as F}from"./index.3a4765c5.js";const d=Object.prototype.toString;function T(e){return d.call(e)==="[object Array]"}function Be(e){return d.call(e)==="[object Null]"}function je(e){return d.call(e)==="[object Boolean]"}function Ge(e){return d.call(e)==="[object Object]"}function x(e){return d.call(e)==="[object String]"}function Ve(e){return d.call(e)==="[object Number]"&&e===e}function $e(e){return e===void 0}function z(e){return typeof e=="function"}const ee=e=>(e==null?void 0:e.$)!==void 0,te=Symbol("ArcoConfigProvider");var re=Object.defineProperty,ne=Object.defineProperties,ie=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ue=(e,t)=>{for(var r in t||(t={}))oe.call(t,r)&&C(e,r,t[r]);if(A)for(var r of A(t))se.call(t,r)&&C(e,r,t[r]);return e},ce=(e,t)=>ne(e,ie(t));const fe="A",ae="arco",y="$arco",Ye=e=>{var t;return(t=e==null?void 0:e.componentPrefix)!=null?t:fe},Ue=(e,t)=>{var r;t&&t.classPrefix&&(e.config.globalProperties[y]=ce(ue({},(r=e.config.globalProperties[y])!=null?r:{}),{classPrefix:t.classPrefix}))},We=e=>{var t,r,n;const i=W(),o=U(te,void 0),s=(n=(r=o==null?void 0:o.prefixCls)!=null?r:(t=i==null?void 0:i.appContext.config.globalProperties[y])==null?void 0:t.classPrefix)!=null?n:ae;return e?`${s}-${e}`:s};var H=function(){if(typeof Map!="undefined")return Map;function e(t,r){var n=-1;return t.some(function(i,o){return i[0]===r?(n=o,!0):!1}),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(r){var n=e(this.__entries__,r),i=this.__entries__[n];return i&&i[1]},t.prototype.set=function(r,n){var i=e(this.__entries__,r);~i?this.__entries__[i][1]=n:this.__entries__.push([r,n])},t.prototype.delete=function(r){var n=this.__entries__,i=e(n,r);~i&&n.splice(i,1)},t.prototype.has=function(r){return!!~e(this.__entries__,r)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(r,n){n===void 0&&(n=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];r.call(n,s[1],s[0])}},t}()}(),w=typeof window!="undefined"&&typeof document!="undefined"&&window.document===document,v=function(){return typeof global!="undefined"&&global.Math===Math?global:typeof self!="undefined"&&self.Math===Math?self:typeof window!="undefined"&&window.Math===Math?window:Function("return this")()}(),le=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(v):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),de=2;function he(e,t){var r=!1,n=!1,i=0;function o(){r&&(r=!1,e()),n&&c()}function s(){le(o)}function c(){var u=Date.now();if(r){if(u-i<de)return;n=!0}else r=!0,n=!1,setTimeout(s,t);i=u}return c}var ve=20,_e=["top","right","bottom","left","width","height","size","weight"],pe=typeof MutationObserver!="undefined",Ee=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=he(this.refresh.bind(this),ve)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var r=this.observers_,n=r.indexOf(t);~n&&r.splice(n,1),!r.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return t.forEach(function(r){return r.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!w||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),pe?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!w||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var r=t.propertyName,n=r===void 0?"":r,i=_e.some(function(o){return!!~n.indexOf(o)});i&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),B=function(e,t){for(var r=0,n=Object.keys(t);r<n.length;r++){var i=n[r];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},l=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||v},j=p(0,0,0,0);function _(e){return parseFloat(e)||0}function L(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t.reduce(function(n,i){var o=e["border-"+i+"-width"];return n+_(o)},0)}function be(e){for(var t=["top","right","bottom","left"],r={},n=0,i=t;n<i.length;n++){var o=i[n],s=e["padding-"+o];r[o]=_(s)}return r}function me(e){var t=e.getBBox();return p(0,0,t.width,t.height)}function Oe(e){var t=e.clientWidth,r=e.clientHeight;if(!t&&!r)return j;var n=l(e).getComputedStyle(e),i=be(n),o=i.left+i.right,s=i.top+i.bottom,c=_(n.width),u=_(n.height);if(n.boxSizing==="border-box"&&(Math.round(c+o)!==t&&(c-=L(n,"left","right")+o),Math.round(u+s)!==r&&(u-=L(n,"top","bottom")+s)),!we(e)){var f=Math.round(c+o)-t,a=Math.round(u+s)-r;Math.abs(f)!==1&&(c-=f),Math.abs(a)!==1&&(u-=a)}return p(i.left,i.top,c,u)}var ye=function(){return typeof SVGGraphicsElement!="undefined"?function(e){return e instanceof l(e).SVGGraphicsElement}:function(e){return e instanceof l(e).SVGElement&&typeof e.getBBox=="function"}}();function we(e){return e===l(e).document.documentElement}function Te(e){return w?ye(e)?me(e):Oe(e):j}function Re(e){var t=e.x,r=e.y,n=e.width,i=e.height,o=typeof DOMRectReadOnly!="undefined"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return B(s,{x:t,y:r,width:n,height:i,top:r,right:t+n,bottom:i+r,left:t}),s}function p(e,t,r,n){return{x:e,y:t,width:r,height:n}}var ge=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=p(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=Te(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Ne=function(){function e(t,r){var n=Re(r);B(this,{target:t,contentRect:n})}return e}(),Ae=function(){function e(t,r,n){if(this.activeObservations_=[],this.observations_=new H,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=r,this.callbackCtx_=n}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(t)||(r.set(t,new ge(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element=="undefined"||!(Element instanceof Object))){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;!r.has(t)||(r.delete(t),r.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&t.activeObservations_.push(r)})},e.prototype.broadcastActive=function(){if(!!this.hasActive()){var t=this.callbackCtx_,r=this.activeObservations_.map(function(n){return new Ne(n.target,n.broadcastRect())});this.callback_.call(t,r,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),G=typeof WeakMap!="undefined"?new WeakMap:new H,V=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=Ee.getInstance(),n=new Ae(t,r,this);G.set(this,n)}return e}();["observe","unobserve","disconnect"].forEach(function(e){V.prototype[e]=function(){var t;return(t=G.get(this))[e].apply(t,arguments)}});var Ce=function(){return typeof v.ResizeObserver!="undefined"?v.ResizeObserver:V}(),M;(function(e){e[e.ELEMENT=1]="ELEMENT",e[e.FUNCTIONAL_COMPONENT=2]="FUNCTIONAL_COMPONENT",e[e.STATEFUL_COMPONENT=4]="STATEFUL_COMPONENT",e[e.COMPONENT=6]="COMPONENT",e[e.TEXT_CHILDREN=8]="TEXT_CHILDREN",e[e.ARRAY_CHILDREN=16]="ARRAY_CHILDREN",e[e.SLOTS_CHILDREN=32]="SLOTS_CHILDREN",e[e.TELEPORT=64]="TELEPORT",e[e.SUSPENSE=128]="SUSPENSE",e[e.COMPONENT_SHOULD_KEEP_ALIVE=256]="COMPONENT_SHOULD_KEEP_ALIVE",e[e.COMPONENT_KEPT_ALIVE=512]="COMPONENT_KEPT_ALIVE"})(M||(M={}));var S;(function(e){e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.DEV_ROOT_FRAGMENT=2048]="DEV_ROOT_FRAGMENT",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL"})(S||(S={}));const E=e=>Boolean(e&&e.shapeFlag&1),b=(e,t)=>Boolean(e&&e.shapeFlag&6),Le=(e,t)=>Boolean(e&&e.shapeFlag&8),m=(e,t)=>Boolean(e&&e.shapeFlag&16),R=(e,t)=>Boolean(e&&e.shapeFlag&32),h=e=>{var t,r;if(!!e)for(const n of e){if(E(n)||b(n))return n;if(m(n,n.children)){const i=h(n.children);if(i)return i}else if(R(n,n.children)){const i=(r=(t=n.children).default)==null?void 0:r.call(t);if(i){const o=h(i);if(o)return o}}else if(T(n)){const i=h(n);if(i)return i}}},qe=e=>{if(!e)return!0;for(const t of e)if(t.children)return!1;return!0},Me=(e,t)=>{if(e&&e.length>0)for(let r=0;r<e.length;r++){const n=e[r];if(E(n)||b(n)){const o=z(t)?t(n):t;return e[r]=I(n,o,!0),!0}const i=$(n);if(i&&i.length>0&&Me(i,t))return!0}return!1},$=e=>{if(m(e,e.children))return e.children;if(T(e))return e},Y=e=>{var t,r;if(E(e))return e.el;if(b(e)){if(((t=e.el)==null?void 0:t.nodeType)===1)return e.el;if((r=e.component)!=null&&r.subTree){const n=Y(e.component.subTree);if(n)return n}}else{const n=$(e);return Se(n)}},Se=e=>{if(e&&e.length>0)for(const t of e){const r=Y(t);if(r)return r}},O=(e,t=!1)=>{var r,n;const i=[];for(const o of e!=null?e:[])E(o)||b(o)||t&&Le(o,o.children)?i.push(o):m(o,o.children)?i.push(...O(o.children,t)):R(o,o.children)?i.push(...O((n=(r=o.children).default)==null?void 0:n.call(r),t)):T(o)&&i.push(...O(o,t));return i};function Ke(e){function t(r){const n=[];return r.forEach(i=>{var o,s;q(i)&&i.type===K?R(i,i.children)?n.push(...t(((s=(o=i.children).default)==null?void 0:s.call(o))||[])):m(i,i.children)?n.push(...t(i.children)):x(i.children)&&n.push(i.children):n.push(i)}),n}return t(e)}const Xe=e=>{if(e)return z(e)?e:()=>e};var ke=X({name:"ResizeObserver",emits:["resize"],setup(e,{emit:t,slots:r}){let n;const i=k(),o=J(()=>ee(i.value)?i.value.$el:i.value),s=u=>{!u||(n=new Ce(f=>{const a=f[0];t("resize",a)}),n.observe(u))},c=()=>{n&&(n.disconnect(),n=null)};return Q(o,u=>{n&&c(),u&&s(u)}),Z(()=>{o.value&&s(o.value)}),F(()=>{c()}),()=>{var u,f;const a=h((f=(u=r.default)==null?void 0:u.call(r))!=null?f:[]);return a?I(a,{ref:i},!0):null}}});const g=()=>{},N=(()=>{try{return!(typeof window!="undefined"&&document!==void 0)}catch{return!0}})(),Je=(()=>N?g:(e,t,r,n=!1)=>{e.addEventListener(t,r,n)})(),Qe=(()=>N?g:(e,t,r,n=!1)=>{e.removeEventListener(t,r,n)})(),Ze=(e,t)=>{if(!e||!t)return!1;let r=t;for(;r;){if(r===e)return!0;r=r.parentNode}return!1},Fe=e=>{const t=document.createElement("div");return t.setAttribute("class",`arco-overlay arco-overlay-${e}`),t},Pe=(e,t)=>{var r;return N?g():(r=(t!=null?t:document).querySelector(e))!=null?r:void 0},et=(e,t)=>{if(x(e)){const r=e[0]==="#"?`[id='${e.slice(1)}']`:e;return Pe(r,t)}return e},tt=(e,t)=>{const r=e.getBoundingClientRect(),n=t.getBoundingClientRect();return{top:r.top-n.top,bottom:n.bottom-r.bottom,left:r.left-n.left,right:n.right-r.right,width:r.width,height:r.height}},rt=e=>e.tagName==="BODY"?document.documentElement.scrollHeight>window.innerHeight:e.scrollHeight>e.offsetHeight,nt=e=>e.tagName==="BODY"?window.innerWidth-(document.documentElement.offsetWidth||document.body.offsetWidth):e.offsetWidth-e.clientWidth;var it=(e,t)=>{for(const[r,n]of t)e[r]=n;return e},De=Object.defineProperty,P=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,D=(e,t,r)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ze=(e,t)=>{for(var r in t||(t={}))Ie.call(t,r)&&D(e,r,t[r]);if(P)for(var r of P(t))xe.call(t,r)&&D(e,r,t[r]);return e};const ot=(e,t)=>{const r=ze({},e);for(const n of t)n in r&&delete r[n];return r};export{Xe as A,h as B,O as C,ke as R,it as _,$e as a,Qe as b,Ye as c,T as d,Se as e,Ce as f,We as g,z as h,Ve as i,et as j,ot as k,te as l,qe as m,Me as n,Je as o,Ge as p,x as q,Be as r,Ue as s,tt as t,Ke as u,nt as v,rt as w,je as x,Ze as y,Fe as z};
