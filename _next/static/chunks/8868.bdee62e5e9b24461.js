(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8868],{1295:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return d},unstable_getImgProps:function(){return s}});let a=n(1024),l=n(2301),i=n(7873),r=n(3222),o=a._(n(5033)),s=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,l.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},d=r.Image},8868:function(e,t,n){"use strict";n.r(t);var a=n(7437);n(2265);var l=n(4741);n(2759),n(7881);var i=n(6691),r=n.n(i);t.default=()=>{var e,t;let n,i;let o=localStorage.getItem("storedData");if(null!=o&&(i=null==(n=JSON.parse(o))?void 0:null===(t=n.layout)||void 0===t?void 0:t.find(e=>"Testimonial"===e.module_name)),!i)return null;let s=null===(e=i)||void 0===e?void 0:e.content.map((e,t)=>({id:t,background_color:e.background_color||"",background_image:e.background_image||"",title:e.title||"",subTitle:e.content||"",button_label:e.buttonText||"",button_link:e.buttonLink||""}));return(0,a.jsx)("section",{className:"p-6 md:py-16 max-w-screen-xl mx-auto",children:(0,a.jsx)(l.Z,{dots:!0,infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,cssEase:"linear",children:s.map((e,t)=>(0,a.jsxs)("div",{className:"rounded-2xl border-2 border-solid border-layer-2 px-6 pt-4 pb-5",children:[(0,a.jsx)("div",{className:"flex justify-between",children:(0,a.jsxs)("div",{className:"flex content-center items-center gap-2",children:[(0,a.jsx)(r(),{height:50,width:50,src:e.avatar,alt:"user",className:"inline-block h-12 w-12 rounded-full"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"font-semibold text-heading",children:e.name}),(0,a.jsx)("div",{className:"text-xs text-text",children:e.username})]})]})}),(0,a.jsx)("p",{className:"mt-2 text-base text-heading",children:e.quote})]},t))})})}},7881:function(){},2759:function(){},6691:function(e,t,n){e.exports=n(1295)}}]);