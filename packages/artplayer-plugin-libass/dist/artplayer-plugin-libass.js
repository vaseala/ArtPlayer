/*!
 * artplayer-plugin-libass.js v1.0.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2024 Harvey Zack
 * Released under the MIT License.
 */
!function(e,t,r,s,n){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="function"==typeof a[s]&&a[s],o=i.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,r){if(!o[t]){if(!e[t]){var n="function"==typeof a[s]&&a[s];if(!r&&n)return n(t,!0);if(i)return i(t,!0);if(l&&"string"==typeof t)return l(t);var d=Error("Cannot find module '"+t+"'");throw d.code="MODULE_NOT_FOUND",d}v.resolve=function(r){var s=e[t][1][r];return null!=s?s:r},v.cache={};var u=o[t]=new c.Module(t);e[t][0].call(u.exports,v,u,u.exports,this)}return o[t].exports;function v(e){var t=v.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=o,c.parent=i,c.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(c,"root",{get:function(){return a[s]}}),a[s]=c;for(var d=0;d<t.length;d++)c(t[d]);if(r){var u=c(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=u:"function"==typeof define&&define.amd&&define(function(){return u})}}({abjMI:[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r),s.export(r,"default",()=>i);var n=e("./adapter"),a=s.interopDefault(n);function i(e){return t=>{let r=new a.default(t,e);return{name:"artplayerPluginLibass",libass:r.libass,visible:r.visible,init:r.init.bind(r),switch:r.switch.bind(r),show:r.show.bind(r),hide:r.hide.bind(r),destroy:r.destroy.bind(r)}}}"undefined"!=typeof window&&(window.artplayerPluginLibass=i)},{"./adapter":"cjgNP","@parcel/transformer-js/src/esmodule-helpers.js":"guZOB"}],cjgNP:[function(e,t,r){var s=e("@parcel/transformer-js/src/esmodule-helpers.js");s.defineInteropFlag(r);var n=e("libass-wasm"),a=s.interopDefault(n);let i=`[Script Info] ScriptType:v4.00+`;r.default=class{constructor(e,t){let{constructor:r,template:s}=e;this.art=e,this.$video=s.$video,this.$webvtt=s.$subtitle,this.utils=r.utils,this.libass=null,e.once("ready",this.init.bind(this,t))}async init(e){this.#e(),await this.#t(e),this.#r(),this.art.emit("artplayerPluginLibass:init",this);let t=this.art?.option?.subtitle?.url;t&&"ass"===this.utils.getExt(t)&&this.switch(t)}switch(e){this.art.emit("artplayerPluginLibass:switch",e),e&&"ass"===this.utils.getExt(e)?(this.currentType="ass",this.libass.freeTrack(),this.libass.setTrackByUrl(this.#s(e)),this.visible=this.art.subtitle.show):(this.currentType="webvtt",this.hide(),this.libass.freeTrack())}setVisibility(e){this.visible=e}setOffset(e){this.timeOffset=e}get active(){return"ass"===this.currentType}get visible(){return!!this.libass&&"none"!==this.libass.canvasParent.style.display}set visible(e){this.art.emit("artplayerPluginLibass:visible",e),this.#n(!this.active),this.libass.canvasParent&&(this.libass.canvasParent.style.display=e?"block":"none",e&&this.libass.resize())}get timeOffset(){return this.libass.timeOffset}set timeOffset(e){this.art.emit("artplayerPluginLibass:timeOffset",e),this.libass.timeOffset=e}show(){this.visible=!0}hide(){this.visible=!1}destroy(){this.art.emit("artplayerPluginLibass:destroy"),this.#a(),this.libass.dispose(),URL.revokeObjectURL(this.workerScriptUrl),this.libass=null}async #t(e={}){if(!e.fallbackFont)return this.utils.errorHandle(e.fallbackFont,"artplayerPluginLibass:fallbackFont is required");e.workerUrl||(e.workerUrl="https://cdnjs.cloudflare.com/ajax/libs/libass-wasm/4.1.0/js/subtitles-octopus-worker.js"),e.availableFonts&&(e.availableFonts=Object.entries(e.availableFonts).reduce((e,[t,r])=>(e[t]=this.#s(r),e),{})),this.libass=new a.default({subContent:i,video:this.$video,...e,workerUrl:await this.#i(e),fallbackFont:this.#s(e.fallbackFont),fonts:e.fonts?.map(e=>this.#s(e))}),this.libass.canvasParent.className="artplayer-plugin-libass",this.libass.canvasParent.style.cssText=` position:absolute;top:0;left:0;width:100%;height:100%;user-select:none;pointer-events:none;z-index:20;`}#r(){this.switchHandler=this.switch.bind(this),this.visibleHandler=this.setVisibility.bind(this),this.offsetHandler=this.setOffset.bind(this),this.art.on("subtitle",this.visibleHandler),this.art.on("subtitleLoad",this.switchHandler),this.art.on("subtitleOffset",this.offsetHandler),this.art.once("destroy",this.destroy.bind(this))}#a(){this.art.off("subtitle",this.visibleHandler),this.art.off("subtitleLoad",this.switchHandler),this.art.off("subtitleOffset",this.offsetHandler)}#n(e){this.$webvtt.style.visibility=e?"visible":"hidden"}#s(e){return this.#o(e)?e:new URL(e,document.baseURI).toString()}#o(e){return/^https?:\/\//.test(e)}#i({workerUrl:e,wasmUrl:t}){return new Promise(r=>{fetch(e).then(e=>e.text()).then(s=>{let n=s,a=new Blob([n=n.replace(/wasmBinaryFile\s*=\s*"(subtitles-octopus-worker\.wasm)"/g,(r,s)=>(t=t?this.#s(t):new URL(s,e).toString(),`wasmBinaryFile = "${t}"`))],{type:"text/javascript"});r(URL.createObjectURL(a))})})}#e(){let e=!1;try{if("object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate){let t=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));t instanceof WebAssembly.Module&&(e=new WebAssembly.Instance(t) instanceof WebAssembly.Instance)}}catch(e){}this.utils.errorHandle(e,"Browser does not support WebAssembly")}}},{"libass-wasm":"fYfN6","@parcel/transformer-js/src/esmodule-helpers.js":"guZOB"}],fYfN6:[function(e,t,r){"function"==typeof SubtitlesOctopusOnLoad&&SubtitlesOctopusOnLoad(),t.exports&&(t.exports=function(e){var t=!1;try{if("object"==typeof WebAssembly&&"function"==typeof WebAssembly.instantiate){let e=new WebAssembly.Module(Uint8Array.of(0,97,115,109,1,0,0,0));e instanceof WebAssembly.Module&&(t=new WebAssembly.Instance(e) instanceof WebAssembly.Instance)}}catch(e){}console.log("WebAssembly support detected:"+(t?"yes":"no"));var r=this;function s(){r.setCurrentTime(r.video.currentTime+r.timeOffset)}function n(){r.setIsPaused(!1,r.video.currentTime+r.timeOffset)}function a(){r.setIsPaused(!0,r.video.currentTime+r.timeOffset)}function i(){r.video.removeEventListener("timeupdate",s,!1)}function o(){r.video.addEventListener("timeupdate",s,!1);var e=r.video.currentTime+r.timeOffset;r.setCurrentTime(e)}function l(){r.setRate(r.video.playbackRate)}function c(){r.setIsPaused(!0,r.video.currentTime+r.timeOffset)}function d(e){e.target.removeEventListener(e.type,d,!1),r.resize()}function u(){var e=r.renderFramesData,t=performance.now();r.ctx.clearRect(0,0,r.canvas.width,r.canvas.height);for(var s=0;s<e.canvases.length;s++){var n=e.canvases[s];r.bufferCanvas.width=n.w,r.bufferCanvas.height=n.h;var a=new Uint8ClampedArray(n.buffer);if(r.hasAlphaBug)for(var i=3;i<a.length;i+=4)a[i]=a[i]>=1?a[i]:1;var o=new ImageData(a,n.w,n.h);r.bufferCanvasCtx.putImageData(o,0,0),r.ctx.drawImage(r.bufferCanvas,n.x,n.y)}if(r.debug){var l=Math.round(performance.now()-t),c=e.blendTime;void 0!==c?console.log("render:"+Math.round(e.spentTime-c)+" ms,blend:"+Math.round(c)+" ms,draw:"+l+" ms;TOTAL="+Math.round(e.spentTime+l)+" ms"):console.log(Math.round(e.spentTime)+" ms (+ "+l+" ms draw)"),r.renderStart=performance.now()}}function v(){var e=r.renderFramesData,t=performance.now();r.ctx.clearRect(0,0,r.canvas.width,r.canvas.height);for(var s=0;s<e.bitmaps.length;s++){var n=e.bitmaps[s];r.ctx.drawImage(n.bitmap,n.x,n.y)}if(r.debug){var a=Math.round(performance.now()-t);console.log(e.bitmaps.length+" bitmaps,libass:"+Math.round(e.libassTime)+"ms,decode:"+Math.round(e.decodeTime)+"ms,draw:"+a+"ms"),r.renderStart=performance.now()}}r.canvas=e.canvas,r.renderMode=e.renderMode||(e.lossyRender?"lossy":"wasm-blend"),r.libassMemoryLimit=e.libassMemoryLimit||0,r.libassGlyphLimit=e.libassGlyphLimit||0,r.targetFps=e.targetFps||24,r.prescaleFactor=e.prescaleFactor||1,r.prescaleHeightLimit=e.prescaleHeightLimit||1080,r.maxRenderHeight=e.maxRenderHeight||0,r.dropAllAnimations=e.dropAllAnimations||!1,r.isOurCanvas=!1,r.video=e.video,r.canvasParent=null,r.fonts=e.fonts||[],r.availableFonts=e.availableFonts||[],r.fallbackFont=e.fallbackFont||"default.woff2",r.lazyFileLoading=e.lazyFileLoading||!1,r.onReadyEvent=e.onReady,t?r.workerUrl=e.workerUrl||"subtitles-octopus-worker.js":r.workerUrl=e.legacyWorkerUrl||"subtitles-octopus-worker-legacy.js",r.subUrl=e.subUrl,r.subContent=e.subContent||null,r.onErrorEvent=e.onError,r.debug=e.debug||!1,r.lastRenderTime=0,r.pixelRatio=window.devicePixelRatio||1,r.timeOffset=e.timeOffset||0,r.hasAlphaBug=!1,function(){if("function"==typeof ImageData.prototype.constructor)try{new window.ImageData(new Uint8ClampedArray([0,0,0,0]),1,1);return}catch(e){console.log("detected that ImageData is not constructable despite browser saying so")}var e=document.createElement("canvas").getContext("2d");window.ImageData=function(){var t=0;if(arguments[0]instanceof Uint8ClampedArray)var r=arguments[t++];var s=arguments[t++],n=arguments[t],a=e.createImageData(s,n);return r&&a.data.set(r),a}}(),r.workerError=function(e){if(console.error("Worker error:",e),r.onErrorEvent&&r.onErrorEvent(e),!r.debug)throw r.dispose(),Error("Worker error:"+e)},r.init=function(){if(!window.Worker){r.workerError("worker not supported");return}r.worker||(r.worker=new Worker(r.workerUrl),r.worker.addEventListener("message",r.onWorkerMessage),r.worker.addEventListener("error",r.workerError)),r.workerActive=!1,r.createCanvas(),r.setVideo(e.video),r.setSubUrl(e.subUrl),r.worker.postMessage({target:"worker-init",width:r.canvas.width,height:r.canvas.height,URL:document.URL,currentScript:r.workerUrl,preMain:!0,renderMode:r.renderMode,subUrl:r.subUrl,subContent:r.subContent,fonts:r.fonts,availableFonts:r.availableFonts,fallbackFont:r.fallbackFont,lazyFileLoading:r.lazyFileLoading,debug:r.debug,targetFps:r.targetFps,libassMemoryLimit:r.libassMemoryLimit,libassGlyphLimit:r.libassGlyphLimit,dropAllAnimations:r.dropAllAnimations})},r.createCanvas=function(){r.canvas||(r.video?(r.isOurCanvas=!0,r.canvas=document.createElement("canvas"),r.canvas.className="libassjs-canvas",r.canvas.style.display="none",r.canvasParent=document.createElement("div"),r.canvasParent.className="libassjs-canvas-parent",r.canvasParent.appendChild(r.canvas),r.video.nextSibling?r.video.parentNode.insertBefore(r.canvasParent,r.video.nextSibling):r.video.parentNode.appendChild(r.canvasParent)):r.canvas||r.workerError("Don't know where to render:you should give video or canvas in options.")),r.ctx=r.canvas.getContext("2d"),r.bufferCanvas=document.createElement("canvas"),r.bufferCanvasCtx=r.bufferCanvas.getContext("2d"),r.bufferCanvas.width=1,r.bufferCanvas.height=1;var e=new ImageData(new Uint8ClampedArray([0,255,0,0]),1,1);r.bufferCanvasCtx.clearRect(0,0,1,1),r.ctx.clearRect(0,0,1,1);var t=r.ctx.getImageData(0,0,1,1).data;r.bufferCanvasCtx.putImageData(e,0,0),r.ctx.drawImage(r.bufferCanvas,0,0);var s=r.ctx.getImageData(0,0,1,1).data;r.hasAlphaBug=t[1]!=s[1],r.hasAlphaBug&&console.log("Detected a browser having issue with transparent pixels,applying workaround")},r.setVideo=function(e){r.video=e,r.video&&(r.video.addEventListener("timeupdate",s,!1),r.video.addEventListener("playing",n,!1),r.video.addEventListener("pause",a,!1),r.video.addEventListener("seeking",i,!1),r.video.addEventListener("seeked",o,!1),r.video.addEventListener("ratechange",l,!1),r.video.addEventListener("waiting",c,!1),document.addEventListener("fullscreenchange",r.resizeWithTimeout,!1),document.addEventListener("mozfullscreenchange",r.resizeWithTimeout,!1),document.addEventListener("webkitfullscreenchange",r.resizeWithTimeout,!1),document.addEventListener("msfullscreenchange",r.resizeWithTimeout,!1),window.addEventListener("resize",r.resizeWithTimeout,!1),"undefined"!=typeof ResizeObserver&&(r.ro=new ResizeObserver(r.resizeWithTimeout),r.ro.observe(r.video)),r.video.videoWidth>0?r.resize():r.video.addEventListener("loadedmetadata",d,!1))},r.getVideoPosition=function(){var e=r.video.videoWidth/r.video.videoHeight,t=r.video.offsetWidth,s=r.video.offsetHeight,n=t,a=s;t/s>e?n=Math.floor(s*e):a=Math.floor(t/e);var i=(t-n)/2,o=(s-a)/2;return{width:n,height:a,x:i,y:o}},r.setSubUrl=function(e){r.subUrl=e},r.renderFrameData=null,r.workerActive=!1,r.frameId=0,r.onWorkerMessage=function(e){!r.workerActive&&(r.workerActive=!0,r.onReadyEvent&&r.onReadyEvent());var t=e.data;switch(t.target){case"stdout":console.log(t.content);break;case"console-log":console.log.apply(console,JSON.parse(t.content));break;case"console-debug":console.debug.apply(console,JSON.parse(t.content));break;case"console-info":console.info.apply(console,JSON.parse(t.content));break;case"console-warn":console.warn.apply(console,JSON.parse(t.content));break;case"console-error":console.error.apply(console,JSON.parse(t.content));break;case"stderr":console.error(t.content);break;case"window":window[t.method]();break;case"canvas":switch(t.op){case"getContext":r.ctx=r.canvas.getContext(t.type,t.attributes);break;case"resize":r.resize(t.width,t.height);break;case"renderCanvas":r.lastRenderTime<t.time&&(r.lastRenderTime=t.time,r.renderFramesData=t,window.requestAnimationFrame(u));break;case"renderFastCanvas":r.lastRenderTime<t.time&&(r.lastRenderTime=t.time,r.renderFramesData=t,window.requestAnimationFrame(v));break;case"setObjectProperty":r.canvas[t.object][t.property]=t.value;break;default:throw"eh?"}break;case"tick":r.frameId=t.id,r.worker.postMessage({target:"tock",id:r.frameId});break;case"custom":if(r.onCustomMessage)r.onCustomMessage(e);else throw"Custom message received but client onCustomMessage not implemented.";break;case"setimmediate":r.worker.postMessage({target:"setimmediate"});break;case"get-events":case"get-styles":case"ready":break;default:throw"what? "+t.target}},r.resize=function(e,t,s,n){var a=null;if(s=s||0,n=n||0,(!e||!t)&&r.video){var i=function(e,t){var s=r.prescaleFactor<=0?1:r.prescaleFactor;if(t<=0||e<=0)e=0,t=0;else{var n=s<1?-1:1,a=t;n*a*s<=n*r.prescaleHeightLimit?a*=s:n*a<n*r.prescaleHeightLimit&&(a=r.prescaleHeightLimit),r.maxRenderHeight>0&&a>r.maxRenderHeight&&(a=r.maxRenderHeight),e*=a/t,t=a}return{width:e,height:t}}((a=r.getVideoPosition()).width*r.pixelRatio,a.height*r.pixelRatio);e=i.width,t=i.height;var o=r.canvasParent.getBoundingClientRect().top-r.video.getBoundingClientRect().top;s=a.y-o,n=a.x}if(!e||!t){r.video||console.error("width or height is 0. You should specify width & height for resize.");return}(r.canvas.width!=e||r.canvas.height!=t||r.canvas.style.top!=s||r.canvas.style.left!=n)&&(r.canvas.width=e,r.canvas.height=t,null!=a&&(r.canvasParent.style.position="relative",r.canvas.style.display="block",r.canvas.style.position="absolute",r.canvas.style.width=a.width+"px",r.canvas.style.height=a.height+"px",r.canvas.style.top=s+"px",r.canvas.style.left=n+"px",r.canvas.style.pointerEvents="none"),r.worker.postMessage({target:"canvas",width:r.canvas.width,height:r.canvas.height}))},r.resizeWithTimeout=function(){r.resize(),setTimeout(r.resize,100)},r.runBenchmark=function(){r.worker.postMessage({target:"runBenchmark"})},r.customMessage=function(e,t){t=t||{},r.worker.postMessage({target:"custom",userData:e,preMain:t.preMain})},r.setCurrentTime=function(e){r.worker.postMessage({target:"video",currentTime:e})},r.setTrackByUrl=function(e){r.worker.postMessage({target:"set-track-by-url",url:e})},r.setTrack=function(e){r.worker.postMessage({target:"set-track",content:e})},r.freeTrack=function(e){r.worker.postMessage({target:"free-track"})},r.render=r.setCurrentTime,r.setIsPaused=function(e,t){r.worker.postMessage({target:"video",isPaused:e,currentTime:t})},r.setRate=function(e){r.worker.postMessage({target:"video",rate:e})},r.dispose=function(){r.worker.postMessage({target:"destroy"}),r.worker.terminate(),r.worker.removeEventListener("message",r.onWorkerMessage),r.worker.removeEventListener("error",r.workerError),r.workerActive=!1,r.worker=null,r.video&&(r.video.removeEventListener("timeupdate",s,!1),r.video.removeEventListener("playing",n,!1),r.video.removeEventListener("pause",a,!1),r.video.removeEventListener("seeking",i,!1),r.video.removeEventListener("seeked",o,!1),r.video.removeEventListener("ratechange",l,!1),r.video.removeEventListener("waiting",c,!1),r.video.removeEventListener("loadedmetadata",d,!1),document.removeEventListener("fullscreenchange",r.resizeWithTimeout,!1),document.removeEventListener("mozfullscreenchange",r.resizeWithTimeout,!1),document.removeEventListener("webkitfullscreenchange",r.resizeWithTimeout,!1),document.removeEventListener("msfullscreenchange",r.resizeWithTimeout,!1),window.removeEventListener("resize",r.resizeWithTimeout,!1),r.video.parentNode.removeChild(r.canvasParent),r.video=null),r.ro&&(r.ro.disconnect(),r.ro=null),r.onCustomMessage=null,r.onErrorEvent=null,r.onReadyEvent=null},r.fetchFromWorker=function(e,t,s){try{var n=e.target,a=setTimeout(function(){o(Error("Error:Timeout while try to fetch "+n))},5e3),i=function(e){e.data.target==n&&(t(e.data),r.worker.removeEventListener("message",i),r.worker.removeEventListener("error",o),clearTimeout(a))},o=function(e){s(e),r.worker.removeEventListener("message",i),r.worker.removeEventListener("error",o),clearTimeout(a)};r.worker.addEventListener("message",i),r.worker.addEventListener("error",o),r.worker.postMessage(e)}catch(e){s(e)}},r.createEvent=function(e){r.worker.postMessage({target:"create-event",event:e})},r.getEvents=function(e,t){r.fetchFromWorker({target:"get-events"},function(t){e(t.events)},t)},r.setEvent=function(e,t){r.worker.postMessage({target:"set-event",event:e,index:t})},r.removeEvent=function(e){r.worker.postMessage({target:"remove-event",index:e})},r.createStyle=function(e){r.worker.postMessage({target:"create-style",style:e})},r.getStyles=function(e,t){r.fetchFromWorker({target:"get-styles"},function(t){e(t.styles)},t)},r.setStyle=function(e,t){r.worker.postMessage({target:"set-style",style:e,index:t})},r.removeStyle=function(e){r.worker.postMessage({target:"remove-style",index:e})},r.init()})},{}],guZOB:[function(e,t,r){r.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},r.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.exportAll=function(e,t){return Object.keys(e).forEach(function(r){"default"===r||"__esModule"===r||Object.prototype.hasOwnProperty.call(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:function(){return e[r]}})}),t},r.export=function(e,t,r){Object.defineProperty(e,t,{enumerable:!0,get:r})}},{}]},["abjMI"],"abjMI","parcelRequire03dd");