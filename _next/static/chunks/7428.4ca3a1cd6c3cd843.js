(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7428],{1295:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var l in t)Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}(t,{default:function(){return d},unstable_getImgProps:function(){return i}});let a=l(1024),n=l(2301),r=l(7873),s=l(3222),o=a._(l(5033)),i=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,l]of Object.entries(t))void 0===l&&delete t[e];return{props:t}},d=s.Image},7428:function(e,t,l){"use strict";let a,n;l.r(t);var r,s=l(7437);l(2265);var o=l(6691),i=l.n(o);let d=localStorage.getItem("storedData");null!=d&&(n=null==(a=JSON.parse(d))?void 0:null===(r=a.layout)||void 0===r?void 0:r.find(e=>"ShortIntro"===e.module_name)),t.default=()=>(0,s.jsx)(s.Fragment,{children:n&&n.content.map((e,t)=>(0,s.jsx)("section",{className:"px-8 py-12 bg-gray-100 md:py-18",style:{backgroundColor:"".concat(null==e?void 0:e.background_color)},children:(0,s.jsx)("div",{className:"max-w-6xl mx-auto space-y-24 md:space-y-36",children:(0,s.jsxs)("div",{className:"flex flex-col items-center gap-2 lg:flex-row ",children:[(0,s.jsx)("div",{className:"max-w-md ",children:(0,s.jsx)(i(),{width:500,height:500,src:e.image,alt:"",className:"w-full rounded-lg"})}),(0,s.jsxs)("div",{className:"max-w-md space-y-4 text-center md:ml-4 ",children:[(0,s.jsx)("h3",{className:"text-3xl font-semibold text-heading lg:text-4xl",children:e.title}),(0,s.jsx)("p",{className:"text-lg font-medium",children:e.intro})]})]})})},t))})},6691:function(e,t,l){e.exports=l(1295)}}]);