(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8707],{1295:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{default:function(){return c},unstable_getImgProps:function(){return s}});let r=l(1024),n=l(2301),o=l(7873),a=l(3222),i=r._(l(5033)),s=e=>{(0,o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,l]of Object.entries(t))void 0===l&&delete t[e];return{props:t}},c=a.Image},678:function(e,t,l){"use strict";l.r(t);var r=l(7437);l(2265);var n=l(8910),o=l(4741),a=l(6691),i=l.n(a);t.default=()=>{var e,t;let l,a;let s=localStorage.getItem("storedData");if(null!=s&&console.log(a=null==(l=JSON.parse(s))?void 0:null===(t=l.layout)||void 0===t?void 0:t.find(e=>"Banner"===e.module_name)),!a)return null;let c=null===(e=a)||void 0===e?void 0:e.content;return(0,r.jsx)("div",{className:"pt-6 mx-auto w-full lg:pt-0",children:(0,r.jsx)(o.Z,{dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,pauseOnHover:!1,children:c.map((e,t)=>(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"w-full h-[300px] md:h-[450px] lg:h-[720px] overflow-hidden",children:(0,r.jsx)(i(),{className:"w-full h-full object-cover object-right md:object-left-bottom",src:e.background_image,alt:"banner",width:1920,height:1080})}),(0,r.jsxs)("div",{className:"absolute inset-0 flex flex-col items-start justify-center px-6 md:px-12 lg:px-24 text-white max-w-7xl",children:[(0,r.jsx)("h3",{className:"text-accent text-2xl lg:text-4xl font-semibold",children:e.title}),(0,r.jsx)("h2",{className:"text-blackish text-3xl md:text-4xl lg:text-6xl font-bold mt-2 leading-[1.2]",children:e.subTitle}),(0,r.jsxs)("button",{className:"bg-blue-500 text-white text-base md:text-lg px-6 py-3 rounded-full mt-4 inline-flex items-center space-x-2 cursor-pointer hover:bg-blackish",children:[(0,r.jsx)("span",{children:e.button_label||"Shop Now"}),(0,r.jsx)(n.kcE,{className:"w-6 h-6"})]})]})]},t))})})}},6691:function(e,t,l){e.exports=l(1295)},1172:function(e,t,l){"use strict";l.d(t,{w_:function(){return s}});var r=l(2265),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(n),a=function(){return(a=Object.assign||function(e){for(var t,l=1,r=arguments.length;l<r;l++)for(var n in t=arguments[l])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},i=function(e,t){var l={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(l[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,r=Object.getOwnPropertySymbols(e);n<r.length;n++)0>t.indexOf(r[n])&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(l[r[n]]=e[r[n]]);return l};function s(e){return function(t){return r.createElement(c,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,l){return r.createElement(t.tag,a({key:l},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var l,n=e.attr,o=e.size,s=e.title,c=i(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:l,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&r.createElement("title",null,s),e.children)};return void 0!==o?r.createElement(o.Consumer,null,function(e){return t(e)}):t(n)}}}]);