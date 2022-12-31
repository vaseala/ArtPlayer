"use strict";(self.webpackChunkartplayer_document=self.webpackChunkartplayer_document||[]).push([[204],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,y=d["".concat(c,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},191:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return s}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=["components"],o={title:"Hls \u753b\u8d28\u63d2\u4ef6",sidebar_position:4},c=void 0,p={unversionedId:"zh-cn/Plugins/hls-quality",id:"zh-cn/Plugins/hls-quality",title:"Hls \u753b\u8d28\u63d2\u4ef6",description:"\u8bf4\u660e",source:"@site/docs/zh-cn/Plugins/hls-quality.mdx",sourceDirName:"zh-cn/Plugins",slug:"/zh-cn/Plugins/hls-quality",permalink:"/document/zh-cn/Plugins/hls-quality",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Hls \u753b\u8d28\u63d2\u4ef6",sidebar_position:4},sidebar:"zh-cn",previous:{title:"Iframe \u63d2\u4ef6",permalink:"/document/zh-cn/Plugins/iframe"},next:{title:"\u63a7\u5236\u5668\u63d2\u4ef6",permalink:"/document/zh-cn/Plugins/control"}},u={},s=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u6f14\u793a",id:"\u6f14\u793a",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u901a\u8fc7 <code>npm</code> \u5b89\u88c5\uff1a",id:"\u901a\u8fc7-npm-\u5b89\u88c5",level:3},{value:"\u901a\u8fc7 <code>yarn</code> \u5b89\u88c5\uff1a",id:"\u901a\u8fc7-yarn-\u5b89\u88c5",level:3},{value:"\u901a\u8fc7 <code>script</code> \u5b89\u88c5\uff1a",id:"\u901a\u8fc7-script-\u5b89\u88c5",level:3}],d={toc:s};function m(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("p",null,"\u901a\u8fc7\u8be5\u63d2\u4ef6\uff0c\u53ef\u4ee5\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"Hls")," \u753b\u8d28\u5217\u8868\u5230\u63a7\u5236\u680f\u6216\u8005\u8bbe\u7f6e\u9762\u677f\u91cc"),(0,a.kt)("h2",{id:"\u6f14\u793a"},"\u6f14\u793a"),(0,a.kt)("p",null,"\ud83d\udc49 ",(0,a.kt)("a",{parentName:"p",href:"https://artplayer.org/?libs=https://cdnjs.cloudflare.com/ajax/libs/hls.js/8.0.0-beta.3/hls.min.js%0A./uncompiled/artplayer-plugin-hls-quality/index.js&example=hls.quality"},"\u67e5\u770b\u5b8c\u6574\u6f14\u793a")),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("h3",{id:"\u901a\u8fc7-npm-\u5b89\u88c5"},"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"h3"},"npm")," \u5b89\u88c5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install artplayer-plugin-hls-quality\n")),(0,a.kt)("h3",{id:"\u901a\u8fc7-yarn-\u5b89\u88c5"},"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"h3"},"yarn")," \u5b89\u88c5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add artplayer-plugin-hls-quality\n")),(0,a.kt)("h3",{id:"\u901a\u8fc7-script-\u5b89\u88c5"},"\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"h3"},"script")," \u5b89\u88c5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- \u672c\u5730 --\x3e\n<script src="path/to/artplayer-plugin-hls-quality.js"><\/script>\n\n\x3c!-- jsdelivr --\x3e\n<script src="https://cdn.jsdelivr.net/npm/artplayer-plugin-hls-quality/dist/artplayer-plugin-hls-quality.js"><\/script>\n\n\x3c!-- unpkg --\x3e\n<script src="https://unpkg.com/artplayer-plugin-hls-quality/dist/artplayer-plugin-hls-quality.js"><\/script>\n')),(0,a.kt)("p",null,"\u7136\u540e\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"window.artplayerPluginHlsQuality")," \u8bbf\u95ee\u5230\u63d2\u4ef6\u51fd\u6570"))}m.isMDXComponent=!0}}]);