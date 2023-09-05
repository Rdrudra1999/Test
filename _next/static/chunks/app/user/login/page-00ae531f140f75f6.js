(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9639],{2618:function(e,t,r){Promise.resolve().then(r.bind(r,7043))},7043:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var a=r(7437),n=r(2265),o=r(3378),i=r(2703);let s=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...n})});s.displayName="Card";let l=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",r),...n})});l.displayName="CardHeader";let d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("h3",{ref:t,className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",r),...n})});d.displayName="CardTitle";let c=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("p",{ref:t,className:(0,i.cn)("text-sm text-muted-foreground",r),...n})});c.displayName="CardDescription";let u=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("p-6 pt-0",r),...n})});u.displayName="CardContent";let f=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)("div",{ref:t,className:(0,i.cn)("flex items-center p-6 pt-0",r),...n})});f.displayName="CardFooter";var p=r(3695),m=r(8020),g=r(5925);function h(){let[e,t]=(0,n.useState)(""),[r,i]=(0,n.useState)(""),[c,h]=(0,n.useState)(null),[y,b]=(0,n.useState)(""),[v,x]=(0,n.useState)(""),w=e=>null!==e.match(/^\d{10}$/),N=e=>null!==e.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/);return(0,a.jsx)("div",{className:"flex justify-center items-center min-h-[calc(100vh-90px)]",children:(0,a.jsxs)(s,{className:"w-full max-w-md rounded-none",children:[(0,a.jsx)(l,{className:"text-center",children:(0,a.jsx)(d,{className:"text-xl font-semibold",children:"Enter your Mobile or Email Id"})}),(0,a.jsx)(u,{children:(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(m._,{htmlFor:"userInput",children:"Phone Number or Email"}),(0,a.jsx)(p.I,{id:"userInput",type:"text",className:"rounded-none",placeholder:"Enter your phone number or email",value:e,onChange:e=>{t(e.target.value),b("")},onFocus:()=>{b(""),x("")}}),y&&(0,a.jsx)("p",{className:"text-red-500 text-sm",children:y})]}),c&&(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsx)(m._,{htmlFor:"code",children:"Verification Code"}),(0,a.jsx)(p.I,{className:"rounded-none",id:"code",type:"text",placeholder:"Enter the verification code",value:r,onChange:e=>{i(e.target.value),x("")}}),v&&(0,a.jsx)("p",{className:"text-red-500 text-sm",children:v})]})]})}),(0,a.jsx)(f,{className:"flex justify-end",children:c?(0,a.jsx)(o.z,{onClick:()=>{if(!c){x("Please send the verification code first.");return}if(!r||!r.match(/^\d{6}$/)){x("Please enter a valid 6-digit verification code.");return}g.Am.promise(new Promise((e,t)=>{setTimeout(()=>{e("Signed In")},1e3)}),{loading:"Signing In",success:(0,a.jsx)("b",{children:"Signed In"}),error:(0,a.jsx)("b",{children:"Sign In Failed"})})},className:"rounded-none min-w-full",children:"Sign In"}):(0,a.jsx)(o.z,{onClick:()=>{if(!e){b("Please enter a phone number or email address.");return}if(!w(e)&&!N(e)){b("Please enter a valid phone number or email address.");return}h("fake-verification-id")},className:"rounded-none min-w-full",children:"Send Code"})})]})})}},3378:function(e,t,r){"use strict";r.d(t,{z:function(){return d}});var a=r(7437),n=r(2265),o=r(7256),i=r(6061),s=r(2703);let l=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=n.forwardRef((e,t)=>{let{className:r,variant:n,size:i,asChild:d=!1,...c}=e,u=d?o.g7:"button";return(0,a.jsx)(u,{className:(0,s.cn)(l({variant:n,size:i,className:r})),ref:t,...c})});d.displayName="Button"},3695:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var a=r(7437),n=r(2265),o=r(2703);let i=n.forwardRef((e,t)=>{let{className:r,type:n,...i}=e;return(0,a.jsx)("input",{type:n,className:(0,o.cn)("flex h-10 w-full rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},8020:function(e,t,r){"use strict";r.d(t,{_:function(){return d}});var a=r(7437),n=r(2265),o=r(6743),i=r(6061),s=r(2703);let l=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=n.forwardRef((e,t)=>{let{className:r,...n}=e;return(0,a.jsx)(o.f,{ref:t,className:(0,s.cn)(l(),r),...n})});d.displayName=o.f.displayName},2703:function(e,t,r){"use strict";r.d(t,{cn:function(){return o}});var a=r(7042),n=r(3986);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.m)((0,a.W)(t))}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(2265),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var a,o={},d=null,c=null;for(a in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:n,type:e,key:d,ref:c,props:o,_owner:s.current}}t.Fragment=o,t.jsx=d,t.jsxs=d},7437:function(e,t,r){"use strict";e.exports=r(622)},6743:function(e,t,r){"use strict";r.d(t,{f:function(){return s}});var a=r(3428),n=r(2265),o=r(9381);let i=(0,n.forwardRef)((e,t)=>(0,n.createElement)(o.WV.label,(0,a.Z)({},e,{ref:t,onMouseDown:t=>{var r;null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}}))),s=i},6061:function(e,t,r){"use strict";r.d(t,{j:function(){return i}});var a=r(7042);let n=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,o=a.W,i=(e,t)=>r=>{var a;if((null==t?void 0:t.variants)==null)return o(e,null==r?void 0:r.class,null==r?void 0:r.className);let{variants:i,defaultVariants:s}=t,l=Object.keys(i).map(e=>{let t=null==r?void 0:r[e],a=null==s?void 0:s[e];if(null===t)return null;let o=n(t)||n(a);return i[e][o]}),d=r&&Object.entries(r).reduce((e,t)=>{let[r,a]=t;return void 0===a||(e[r]=a),e},{}),c=null==t?void 0:null===(a=t.compoundVariants)||void 0===a?void 0:a.reduce((e,t)=>{let{class:r,className:a,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...s,...d}[t]):({...s,...d})[t]===r})?[...e,r,a]:e},[]);return o(e,l,c,null==r?void 0:r.class,null==r?void 0:r.className)}},5925:function(e,t,r){"use strict";let a,n;r.d(t,{x7:function(){return en},Am:function(){return T}});var o,i=r(2265);let s={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||s,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,c=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,f=(e,t)=>{let r="",a="",n="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+i+";":a+="f"==o[1]?f(i,o):o+"{"+f(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=f(i,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=f.p?f.p(o,i):o+":"+i+";")}return r+(t&&n?t+"{"+n+"}":n)+a},p={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e},g=(e,t,r,a,n)=>{var o;let i=m(e),s=p[i]||(p[i]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(i));if(!p[s]){let t=i!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(c,""));)t[4]?a.shift():t[3]?(r=t[3].replace(u," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);p[s]=f(n?{["@keyframes "+s]:t}:t,r?"":"."+s)}let l=r&&p.g?p.g:null;return r&&(p.g=p[s]),o=p[s],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),s},h=(e,t,r)=>e.reduce((e,a,n)=>{let o=t[n];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":f(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function y(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?h(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,l(t.target),t.g,t.o,t.k)}y.bind({g:1});let b,v,x,w=y.bind({k:1});function N(e,t){let r=this||{};return function(){let a=arguments;function n(o,i){let s=Object.assign({},o),l=s.className||n.className;r.p=Object.assign({theme:v&&v()},s),r.o=/ *go\d+/.test(l),s.className=y.apply(r,a)+(l?" "+l:""),t&&(s.ref=i);let d=e;return e[0]&&(d=s.as||e,delete s.as),x&&d[0]&&x(s),b(d,s)}return t?t(n):n}}var j=e=>"function"==typeof e,E=(e,t)=>j(e)?e(t):e,k=(a=0,()=>(++a).toString()),C=()=>{if(void 0===n&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");n=!e||e.matches}return n},_=new Map,O=e=>{if(_.has(e))return;let t=setTimeout(()=>{_.delete(e),z({type:4,toastId:e})},1e3);_.set(e,t)},$=e=>{let t=_.get(e);t&&clearTimeout(t)},I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&$(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?I(e,{type:1,toast:r}):I(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?O(a):e.toasts.forEach(e=>{O(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let n=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+n}))}}},P=[],S={toasts:[],pausedAt:void 0},z=e=>{S=I(S,e),P.forEach(e=>{e(S)})},A={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},R=(e={})=>{let[t,r]=(0,i.useState)(S);(0,i.useEffect)(()=>(P.push(r),()=>{let e=P.indexOf(r);e>-1&&P.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||A[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},D=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||k()}),F=e=>(t,r)=>{let a=D(t,e,r);return z({type:2,toast:a}),a.id},T=(e,t)=>F("blank")(e,t);T.error=F("error"),T.success=F("success"),T.loading=F("loading"),T.custom=F("custom"),T.dismiss=e=>{z({type:3,toastId:e})},T.remove=e=>z({type:4,toastId:e}),T.promise=(e,t,r)=>{let a=T.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(T.success(E(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{T.error(E(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var M=(e,t)=>{z({type:1,toast:{id:e,height:t}})},L=()=>{z({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:r}=R(e);(0,i.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&T.dismiss(t.id);return}return setTimeout(()=>T.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,i.useCallback)(()=>{r&&z({type:6,time:Date.now()})},[r]),n=(0,i.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:n=8,defaultPosition:o}=r||{},i=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),s=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<s&&e.visible).length;return i.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+n,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:L,endPause:a,calculateOffset:n}}},U=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,V=N("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,W=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=N("div")`
  position: absolute;
`,Z=N("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Y=N("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,q=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(Y,null,t):t:"blank"===r?null:i.createElement(Z,null,i.createElement(V,{...a}),"loading"!==r&&i.createElement(B,null,"error"===r?i.createElement(U,{...a}):i.createElement(W,{...a})))},G=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,J=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,K=N("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Q=N("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,X=(e,t)=>{let r=e.includes("top")?1:-1,[a,n]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(r),J(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=i.memo(({toast:e,position:t,style:r,children:a})=>{let n=e.height?X(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(q,{toast:e}),s=i.createElement(Q,{...e.ariaProps},E(e.message,e));return i.createElement(K,{className:e.className,style:{...n,...r,...e.style}},"function"==typeof a?a({icon:o,message:s}):i.createElement(i.Fragment,null,o,s))});o=i.createElement,f.p=void 0,b=o,v=void 0,x=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:n})=>{let o=i.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return i.createElement("div",{ref:o,className:t,style:r},n)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=y`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,en=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:n,containerStyle:o,containerClassName:s})=>{let{toasts:l,handlers:d}=H(r);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:s,onMouseEnter:d.startPause,onMouseLeave:d.endPause},l.map(r=>{let o=r.position||t,s=er(o,d.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return i.createElement(et,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?ea:"",style:s},"custom"===r.type?E(r.message,r):n?n(r):i.createElement(ee,{toast:r,position:o}))}))}}},function(e){e.O(0,[526,2971,596,1744],function(){return e(e.s=2618)}),_N_E=e.O()}]);