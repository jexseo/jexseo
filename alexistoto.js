
<!DOCTYPE html>
<html lang="id"><head prefix="og: https://blkbanyuwangi.kemnaker.go.id/ fb: https://blkbanyuwangi.kemnaker.go.id/ product: https://blkbanyuwangi.kemnaker.go.id/">
        <script async="" src="https://cdn.branch.io/branch-latest.min.js"></script><script data-breeze="1">
    var LOCALE = 'id\u002DID';
    var BASE_URL = 'https\u003A\u002F\u002Fwww.mothercare.co.id\u002F';
    var VIEW_URL = 'https\u003A\u002F\u002Fwww.mothercare.co.id\u002Fstatic\u002Fversion1741963345\u002Ffrontend\u002FCodilar\u002Fmothercare\u002Fid_ID';
    var required = [];
    var require = (deps, callback) => required.push([deps, callback]);
</script>        <script type="text/javascript">(window.NREUM||(NREUM={})).init={ajax:{deny_list:["bam.nr-data.net"]}};(window.NREUM||(NREUM={})).loader_config={licenseKey:"NRJS-3796f39e9070f5da519",applicationID:"662568768"};;/*! For license information please see nr-loader-rum-1.284.1.min.js.LICENSE.txt */
(()=>{var e,t,r={122:(e,t,r)=>{"use strict";r.d(t,{a:()=>i});var n=r(944);function i(e,t){try{if(!e||"object"!=typeof e)return(0,n.R)(3);if(!t||"object"!=typeof t)return(0,n.R)(4);const r=Object.create(Object.getPrototypeOf(t),Object.getOwnPropertyDescriptors(t)),o=0===Object.keys(r).length?e:r;for(let a in o)if(void 0!==e[a])try{if(null===e[a]){r[a]=null;continue}Array.isArray(e[a])&&Array.isArray(t[a])?r[a]=Array.from(new Set([...e[a],...t[a]])):"object"==typeof e[a]&&"object"==typeof t[a]?r[a]=i(e[a],t[a]):r[a]=e[a]}catch(e){(0,n.R)(1,e)}return r}catch(e){(0,n.R)(2,e)}}},555:(e,t,r)=>{"use strict";r.d(t,{Vp:()=>c,fn:()=>s,x1:()=>u});var n=r(384),i=r(122);const o={beacon:n.NT.beacon,errorBeacon:n.NT.errorBeacon,licenseKey:void 0,applicationID:void 0,sa:void 0,queueTime:void 0,applicationTime:void 0,ttGuid:void 0,user:void 0,account:void 0,product:void 0,extra:void 0,jsAttributes:{},userAttributes:void 0,atts:void 0,transactionName:void 0,tNamePlain:void 0},a={};function s(e){try{const t=c(e);return!!t.licenseKey&&!!t.errorBeacon&&!!t.applicationID}catch(e){return!1}}function c(e){if(!e)throw new Error("All info objects require an agent identifier!");if(!a[e])throw new Error("Info for ".concat(e," was never set"));return a[e]}function u(e,t){if(!e)throw new Error("All info objects require an agent identifier!");a[e]=(0,i.a)(t,o);const r=(0,n.nY)(e);r&&(r.info=a[e])}},217:(e,t,r)=>{"use strict";r.d(t,{D0:()=>m,gD:()=>v,xN:()=>h});r(860).K7.genericEvents;const n="experimental.marks",i="experimental.measures",o="experimental.resources",a=e=>{if(!e||"string"!=typeof e)return!1;try{document.createDocumentFragment().querySelector(e)}catch{return!1}return!0};var s=r(614),c=r(944),u=r(384),l=r(122);const d="[data-nr-mask]",f=()=>{const e={feature_flags:[],experimental:{marks:!1,measures:!1,resources:!1},mask_selector:"*",block_selector:"[data-nr-block]",mask_input_options:{color:!1,date:!1,"datetime-local":!1,email:!1,month:!1,number:!1,range:!1,search:!1,tel:!1,text:!1,time:!1,url:!1,week:!1,textarea:!1,select:!1,password:!0}};return{ajax:{deny_list:void 0,block_internal:!0,enabled:!0,autoStart:!0},distributed_tracing:{enabled:void 0,exclude_newrelic_header:void 0,cors_use_newrelic_header:void 0,cors_use_tracecontext_headers:void 0,allowed_origins:void 0},get feature_flags(){return e.feature_flags},set feature_flags(t){e.feature_flags=t},generic_events:{enabled:!0,autoStart:!0},harvest:{interval:30},jserrors:{enabled:!0,autoStart:!0},logging:{enabled:!0,autoStart:!0},metrics:{enabled:!0,autoStart:!0},obfuscate:void 0,page_action:{enabled:!0},page_view_event:{enabled:!0,autoStart:!0},page_view_timing:{enabled:!0,autoStart:!0},performance:{get capture_marks(){return e.feature_flags.includes(n)||e.experimental.marks},set capture_marks(t){e.experimental.marks=t},get capture_measures(){return e.feature_flags.includes(i)||e.experimental.measures},set capture_measures(t){e.experimental.measures=t},capture_detail:!0,resources:{get enabled(){return e.feature_flags.includes(o)||e.experimental.resources},set enabled(t){e.experimental.resources=t},asset_types:[],first_party_domains:[],ignore_newrelic:!0}},privacy:{cookies_enabled:!0},proxy:{assets:void 0,beacon:void 0},session:{expiresMs:s.wk,inactiveMs:s.BB},session_replay:{autoStart:!0,enabled:!1,preload:!1,sampling_rate:10,error_sampling_rate:100,collect_fonts:!1,inline_images:!1,fix_stylesheets:!0,mask_all_inputs:!0,get mask_text_selector(){return e.mask_selector},set mask_text_selector(t){a(t)?e.mask_selector="".concat(t,",").concat(d):""===t||null===t?e.mask_selector=d:(0,c.R)(5,t)},get block_class(){return"nr-block"},get ignore_class(){return"nr-ignore"},get mask_text_class(){return"nr-mask"},get block_selector(){return e.block_selector},set block_selector(t){a(t)?e.block_selector+=",".concat(t):""!==t&&(0,c.R)(6,t)},get mask_input_options(){return e.mask_input_options},set mask_input_options(t){t&&"object"==typeof t?e.mask_input_options={...t,password:!0}:(0,c.R)(7,t)}},session_trace:{enabled:!0,autoStart:!0},soft_navigations:{enabled:!0,autoStart:!0},spa:{enabled:!0,autoStart:!0},ssl:void 0,user_actions:{enabled:!0,elementAttributes:["id","className","tagName","type"]}}},g={},p="All configuration objects require an agent identifier!";function m(e){if(!e)throw new Error(p);if(!g[e])throw new Error("Configuration for ".concat(e," was never set"));return g[e]}function h(e,t){if(!e)throw new Error(p);g[e]=(0,l.a)(t,f());const r=(0,u.nY)(e);r&&(r.init=g[e])}function v(e,t){if(!e)throw new Error(p);var r=m(e);if(r){for(var n=t.split("."),i=0;i<n.length-1;i++)if("object"!=typeof(r=r[n[i]]))return;r=r[n[n.length-1]]}return r}},371:(e,t,r)=>{"use strict";r.d(t,{V:()=>f,f:()=>d});var n=r(122),i=r(384),o=r(154),a=r(324);let s=0;const c={buildEnv:a.F3,distMethod:a.Xs,version:a.xv,originTime:o.WN},u={customTransaction:void 0,disabled:!1,isolatedBacklog:!1,loaderType:void 0,maxBytes:3e4,onerror:void 0,ptid:void 0,releaseIds:{},appMetadata:{},session:void 0,denyList:void 0,timeKeeper:void 0,obfuscator:void 0,harvester:void 0},l={};function d(e){if(!e)throw new Error("All runtime objects require an agent identifier!");if(!l[e])throw new Error("Runtime for ".concat(e," was never set"));return l[e]}function f(e,t){if(!e)throw new Error("All runtime objects require an agent identifier!");l[e]={...(0,n.a)(t,u),...c},Object.hasOwnProperty.call(l[e],"harvestCount")||Object.defineProperty(l[e],"harvestCount",{get:()=>++s});const r=(0,i.nY)(e);r&&(r.runtime=l[e])}},324:(e,t,r)=>{"use strict";r.d(t,{F3:()=>i,Xs:()=>o,xv:()=>n});const n="1.284.1",i="PROD",o="CDN"},154:(e,t,r)=>{"use strict";r.d(t,{OF:()=>c,RI:()=>i,WN:()=>l,bv:()=>o,gm:()=>a,mw:()=>s,sb:()=>u});var n=r(863);const i="undefined"!=typeof window&&!!window.document,o="undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self.navigator instanceof WorkerNavigator||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis.navigator instanceof WorkerNavigator),a=i?window:"undefined"!=typeof WorkerGlobalScope&&("undefined"!=typeof self&&self instanceof WorkerGlobalScope&&self||"undefined"!=typeof globalThis&&globalThis instanceof WorkerGlobalScope&&globalThis),s=Boolean("hidden"===a?.document?.visibilityState),c=/iPad|iPhone|iPod/.test(a.navigator?.userAgent),u=c&&"undefined"==typeof SharedWorker,l=((()=>{const e=a.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);Array.isArray(e)&&e.length>=2&&e[1]})(),Date.now()-(0,n.t)())},687:(e,t,r)=>{"use strict";r.d(t,{Ak:()=>c,Ze:()=>d,x3:()=>u});var n=r(836),i=r(606),o=r(860),a=r(646);const s={};function c(e,t){const r={staged:!1,priority:o.P3[t]||0};l(e),s[e].get(t)||s[e].set(t,r)}function u(e,t){e&&s[e]&&(s[e].get(t)&&s[e].delete(t),g(e,t,!1),s[e].size&&f(e))}function l(e){if(!e)throw new Error("agentIdentifier required");s[e]||(s[e]=new Map)}function d(e="",t="feature",r=!1){if(l(e),!e||!s[e].get(t)||r)return g(e,t);s[e].get(t).staged=!0,f(e)}function f(e){const t=Array.from(s[e]);t.every((([e,t])=>t.staged))&&(t.sort(((e,t)=>e[1].priority-t[1].priority)),t.forEach((([t])=>{s[e].delete(t),g(e,t)})))}function g(e,t,r=!0){const o=e?n.ee.get(e):n.ee,s=i.i.handlers;if(!o.aborted&&o.backlog&&s){if(r){const e=o.backlog[t],r=s[t];if(r){for(let t=0;e&&t<e.length;++t)p(e[t],r);Object.entries(r).forEach((([e,t])=>{Object.values(t||{}).forEach((t=>{t[0]?.on&&t[0]?.context()instanceof a.y&&t[0].on(e,t[1])}))}))}}o.isolatedBacklog||delete s[t],o.backlog[t]=null,o.emit("drain-"+t,[])}}function p(e,t){var r=e[1];Object.values(t[r]||{}).forEach((t=>{var r=e[0];if(t[0]===r){var n=t[1],i=e[3],o=e[2];n.apply(i,o)}}))}},836:(e,t,r)=>{"use strict";r.d(t,{P:()=>c,ee:()=>u});var n=r(384),i=r(990),o=r(371),a=r(646),s=r(607);const c="nr@context:".concat(s.W),u=function e(t,r){var n={},s={},l={},d=!1;try{d=16===r.length&&(0,o.f)(r).isolatedBacklog}catch(e){}var f={on:p,addEventListener:p,removeEventListener:function(e,t){var r=n[e];if(!r)return;for(var i=0;i<r.length;i++)r[i]===t&&r.splice(i,1)},emit:function(e,r,n,i,o){!1!==o&&(o=!0);if(u.aborted&&!i)return;t&&o&&t.emit(e,r,n);for(var a=g(n),c=m(e),l=c.length,d=0;d<l;d++)c[d].apply(a,r);var p=v()[s[e]];p&&p.push([f,e,r,a]);return a},get:h,listeners:m,context:g,buffer:function(e,t){const r=v();if(t=t||"feature",f.aborted)return;Object.entries(e||{}).forEach((([e,n])=>{s[n]=t,t in r||(r[t]=[])}))},abort:function(){f._aborted=!0,Object.keys(f.backlog).forEach((e=>{delete f.backlog[e]}))},isBuffering:function(e){return!!v()[s[e]]},debugId:r,backlog:d?{}:t&&"object"==typeof t.backlog?t.backlog:{},isolatedBacklog:d};return Object.defineProperty(f,"aborted",{get:()=>{let e=f._aborted||!1;return e||(t&&(e=t.aborted),e)}}),f;function g(e){return e&&e instanceof a.y?e:e?(0,i.I)(e,c,(()=>new a.y(c))):new a.y(c)}function p(e,t){n[e]=m(e).concat(t)}function m(e){return n[e]||[]}function h(t){return l[t]=l[t]||e(f,t)}function v(){return f.backlog}}(void 0,"globalEE"),l=(0,n.Zm)();l.ee||(l.ee=u)},646:(e,t,r)=>{"use strict";r.d(t,{y:()=>n});class n{constructor(e){this.contextId=e}}},908:(e,t,r)=>{"use strict";r.d(t,{d:()=>n,p:()=>i});var n=r(836).ee.get("handle");function i(e,t,r,i,o){o?(o.buffer([e],i),o.emit(e,t,r)):(n.buffer([e],i),n.emit(e,t,r))}},606:(e,t,r)=>{"use strict";r.d(t,{i:()=>o});var n=r(908);o.on=a;var i=o.handlers={};function o(e,t,r,o){a(o||n.d,i,e,t,r)}function a(e,t,r,i,o){o||(o="feature"),e||(e=n.d);var a=t[o]=t[o]||{};(a[r]=a[r]||[]).push([e,i])}},878:(e,t,r)=>{"use strict";function n(e,t){return{capture:e,passive:!1,signal:t}}function i(e,t,r=!1,i){window.addEventListener(e,t,n(r,i))}function o(e,t,r=!1,i){document.addEventListener(e,t,n(r,i))}r.d(t,{DD:()=>o,jT:()=>n,sp:()=>i})},607:(e,t,r)=>{"use strict";r.d(t,{W:()=>n});const n=(0,r(566).bz)()},566:(e,t,r)=>{"use strict";r.d(t,{LA:()=>s,bz:()=>a});var n=r(154);const i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";function o(e,t){return e?15&e[t]:16*Math.random()|0}function a(){const e=n.gm?.crypto||n.gm?.msCrypto;let t,r=0;return e&&e.getRandomValues&&(t=e.getRandomValues(new Uint8Array(30))),i.split("").map((e=>"x"===e?o(t,r++).toString(16):"y"===e?(3&o()|8).toString(16):e)).join("")}function s(e){const t=n.gm?.crypto||n.gm?.msCrypto;let r,i=0;t&&t.getRandomValues&&(r=t.getRandomValues(new Uint8Array(e)));const a=[];for(var s=0;s<e;s++)a.push(o(r,i++).toString(16));return a.join("")}},614:(e,t,r)=>{"use strict";r.d(t,{BB:()=>a,H3:()=>n,g:()=>u,iL:()=>c,tS:()=>s,uh:()=>i,wk:()=>o});const n="NRBA",i="SESSION",o=144e5,a=18e5,s={STARTED:"session-started",PAUSE:"session-pause",RESET:"session-reset",RESUME:"session-resume",UPDATE:"session-update"},c={SAME_TAB:"same-tab",CROSS_TAB:"cross-tab"},u={OFF:0,FULL:1,ERROR:2}},863:(e,t,r)=>{"use strict";function n(){return Math.floor(performance.now())}r.d(t,{t:()=>n})},944:(e,t,r)=>{"use strict";function n(e,t){"function"==typeof console.debug&&console.debug("New Relic Warning: https://github.com/newrelic/newrelic-browser-agent/blob/main/docs/warning-codes.md#".concat(e),t)}r.d(t,{R:()=>n})},284:(e,t,r)=>{"use strict";r.d(t,{t:()=>c,B:()=>s});var n=r(836),i=r(154);const o="newrelic";const a=new Set,s={};function c(e,t){const r=n.ee.get(t);s[t]??={},e&&"object"==typeof e&&(a.has(t)||(r.emit("rumresp",[e]),s[t]=e,a.add(t),function(e={}){try{i.gm.dispatchEvent(new CustomEvent(o,{detail:e}))}catch(e){}}({loaded:!0})))}},990:(e,t,r)=>{"use strict";r.d(t,{I:()=>i});var n=Object.prototype.hasOwnProperty;function i(e,t,r){if(n.call(e,t))return e[t];var i=r();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(e,t,{value:i,writable:!0,enumerable:!1}),i}catch(e){}return e[t]=i,i}},389:(e,t,r)=>{"use strict";function n(e,t=500,r={}){const n=r?.leading||!1;let i;return(...r)=>{n&&void 0===i&&(e.apply(this,r),i=setTimeout((()=>{i=clearTimeout(i)}),t)),n||(clearTimeout(i),i=setTimeout((()=>{e.apply(this,r)}),t))}}function i(e){let t=!1;return(...r)=>{t||(t=!0,e.apply(this,r))}}r.d(t,{J:()=>i,s:()=>n})},289:(e,t,r)=>{"use strict";r.d(t,{GG:()=>o,sB:()=>a});var n=r(878);function i(){return"undefined"==typeof document||"complete"===document.readyState}function o(e,t){if(i())return e();(0,n.sp)("load",e,t)}function a(e){if(i())return e();(0,n.DD)("DOMContentLoaded",e)}},384:(e,t,r)=>{"use strict";r.d(t,{NT:()=>o,US:()=>l,Zm:()=>a,bQ:()=>c,dV:()=>s,nY:()=>u,pV:()=>d});var n=r(154),i=r(863);const o={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net"};function a(){return n.gm.NREUM||(n.gm.NREUM={}),void 0===n.gm.newrelic&&(n.gm.newrelic=n.gm.NREUM),n.gm.NREUM}function s(){let e=a();return e.o||(e.o={ST:n.gm.setTimeout,SI:n.gm.setImmediate,CT:n.gm.clearTimeout,XHR:n.gm.XMLHttpRequest,REQ:n.gm.Request,EV:n.gm.Event,PR:n.gm.Promise,MO:n.gm.MutationObserver,FETCH:n.gm.fetch,WS:n.gm.WebSocket}),e}function c(e,t){let r=a();r.initializedAgents??={},t.initializedAt={ms:(0,i.t)(),date:new Date},r.initializedAgents[e]=t}function u(e){let t=a();return t.initializedAgents?.[e]}function l(e,t){a()[e]=t}function d(){return function(){let e=a();const t=e.info||{};e.info={beacon:o.beacon,errorBeacon:o.errorBeacon,...t}}(),function(){let e=a();const t=e.init||{};e.init={...t}}(),s(),function(){let e=a();const t=e.loader_config||{};e.loader_config={...t}}(),a()}},843:(e,t,r)=>{"use strict";r.d(t,{u:()=>i});var n=r(878);function i(e,t=!1,r,i){(0,n.DD)("visibilitychange",(function(){if(t)return void("hidden"===document.visibilityState&&e());e(document.visibilityState)}),r,i)}},434:(e,t,r)=>{"use strict";r.d(t,{Jt:()=>o,YM:()=>c});var n=r(836),i=r(607);const o="nr@original:".concat(i.W);var a=Object.prototype.hasOwnProperty,s=!1;function c(e,t){return e||(e=n.ee),r.inPlace=function(e,t,n,i,o){n||(n="");const a="-"===n.charAt(0);for(let s=0;s<t.length;s++){const c=t[s],u=e[c];l(u)||(e[c]=r(u,a?c+n:n,i,c,o))}},r.flag=o,r;function r(t,r,n,s,c){return l(t)?t:(r||(r=""),nrWrapper[o]=t,function(e,t,r){if(Object.defineProperty&&Object.keys)try{return Object.keys(e).forEach((function(r){Object.defineProperty(t,r,{get:function(){return e[r]},set:function(t){return e[r]=t,t}})})),t}catch(e){u([e],r)}for(var n in e)a.call(e,n)&&(t[n]=e[n])}(t,nrWrapper,e),nrWrapper);function nrWrapper(){var o,a,l,d;try{a=this,o=[...arguments],l="function"==typeof n?n(o,a):n||{}}catch(t){u([t,"",[o,a,s],l],e)}i(r+"start",[o,a,s],l,c);try{return d=t.apply(a,o)}catch(e){throw i(r+"err",[o,a,e],l,c),e}finally{i(r+"end",[o,a,d],l,c)}}}function i(r,n,i,o){if(!s||t){var a=s;s=!0;try{e.emit(r,n,i,t,o)}catch(t){u([t,r,n,i],e)}s=a}}}function u(e,t){t||(t=n.ee);try{t.emit("internal-error",e)}catch(e){}}function l(e){return!(e&&"function"==typeof e&&e.apply&&!e[o])}},993:(e,t,r)=>{"use strict";r.d(t,{A$:()=>o,ET:()=>a,p_:()=>i});var n=r(860);const i={ERROR:"ERROR",WARN:"WARN",INFO:"INFO",DEBUG:"DEBUG",TRACE:"TRACE"},o={OFF:0,ERROR:1,WARN:2,INFO:3,DEBUG:4,TRACE:5},a="log";n.K7.logging},773:(e,t,r)=>{"use strict";r.d(t,{z_:()=>o,XG:()=>s,TZ:()=>n,rs:()=>i,xV:()=>a});r(154),r(566),r(384);const n=r(860).K7.metrics,i="sm",o="cm",a="storeSupportabilityMetrics",s="storeEventMetrics"},630:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});const n=r(860).K7.pageViewEvent},782:(e,t,r)=>{"use strict";r.d(t,{T:()=>n});const n=r(860).K7.pageViewTiming},344:(e,t,r)=>{"use strict";r.d(t,{G4:()=>i});var n=r(614);r(860).K7.sessionReplay;const i={RECORD:"recordReplay",PAUSE:"pauseReplay",REPLAY_RUNNING:"replayRunning",ERROR_DURING_REPLAY:"errorDuringReplay"};n.g.ERROR,n.g.FULL,n.g.OFF},234:(e,t,r)=>{"use strict";r.d(t,{W:()=>o});var n=r(836),i=r(687);class o{constructor(e,t){this.agentIdentifier=e,this.ee=n.ee.get(e),this.featureName=t,this.blocked=!1}deregisterDrain(){(0,i.x3)(this.agentIdentifier,this.featureName)}}},603:(e,t,r)=>{"use strict";r.d(t,{j:()=>K});var n=r(860),i=r(555),o=r(371),a=r(908),s=r(836),c=r(687),u=r(289),l=r(154),d=r(944),f=r(773),g=r(384),p=r(344);const m=["setErrorHandler","finished","addToTrace","addRelease","recordCustomEvent","addPageAction","setCurrentRouteName","setPageViewName","setCustomAttribute","interaction","noticeError","setUserId","setApplicationVersion","start",p.G4.RECORD,p.G4.PAUSE,"log","wrapLogger"],h=["setErrorHandler","finished","addToTrace","addRelease"];var v=r(863),b=r(614),y=r(993);var w=r(646),R=r(434);const A=new Map;function E(e,t,r,n){if("object"!=typeof t||!t||"string"!=typeof r||!r||"function"!=typeof t[r])return(0,d.R)(29);const i=function(e){return(e||s.ee).get("logger")}(e),o=(0,R.YM)(i),a=new w.y(s.P);a.level=n.level,a.customAttributes=n.customAttributes;const c=t[r]?.[R.Jt]||t[r];return A.set(c,a),o.inPlace(t,[r],"wrap-logger-",(()=>A.get(c))),i}function _(){const e=(0,g.pV)();m.forEach((t=>{e[t]=(...r)=>function(t,...r){let n=[];return Object.values(e.initializedAgents).forEach((e=>{e&&e.api?e.exposed&&e.api[t]&&n.push(e.api[t](...r)):(0,d.R)(38,t)})),n.length>1?n:n[0]}(t,...r)}))}const x={};function N(e,t,g=!1){t||(0,c.Ak)(e,"api");const m={};var w=s.ee.get(e),R=w.get("tracer");x[e]=b.g.OFF,w.on(p.G4.REPLAY_RUNNING,(t=>{x[e]=t}));var A="api-",_=A+"ixn-";function N(t,r,n,o){const a=(0,i.Vp)(e);return null===r?delete a.jsAttributes[t]:(0,i.x1)(e,{...a,jsAttributes:{...a.jsAttributes,[t]:r}}),j(A,n,!0,o||null===r?"session":void 0)(t,r)}function k(){}m.log=function(e,{customAttributes:t={},level:r=y.p_.INFO}={}){(0,a.p)(f.xV,["API/log/called"],void 0,n.K7.metrics,w),function(e,t,r={},i=y.p_.INFO){(0,a.p)(f.xV,["API/logging/".concat(i.toLowerCase(),"/called")],void 0,n.K7.metrics,e),(0,a.p)(y.ET,[(0,v.t)(),t,r,i],void 0,n.K7.logging,e)}(w,e,t,r)},m.wrapLogger=(e,t,{customAttributes:r={},level:i=y.p_.INFO}={})=>{(0,a.p)(f.xV,["API/wrapLogger/called"],void 0,n.K7.metrics,w),E(w,e,t,{customAttributes:r,level:i})},h.forEach((e=>{m[e]=j(A,e,!0,"api")})),m.addPageAction=j(A,"addPageAction",!0,n.K7.genericEvents),m.recordCustomEvent=j(A,"recordCustomEvent",!0,n.K7.genericEvents),m.setPageViewName=function(t,r){if("string"==typeof t)return"/"!==t.charAt(0)&&(t="/"+t),(0,o.f)(e).customTransaction=(r||"http://custom.transaction")+t,j(A,"setPageViewName",!0)()},m.setCustomAttribute=function(e,t,r=!1){if("string"==typeof e){if(["string","number","boolean"].includes(typeof t)||null===t)return N(e,t,"setCustomAttribute",r);(0,d.R)(40,typeof t)}else(0,d.R)(39,typeof e)},m.setUserId=function(e){if("string"==typeof e||null===e)return N("enduser.id",e,"setUserId",!0);(0,d.R)(41,typeof e)},m.setApplicationVersion=function(e){if("string"==typeof e||null===e)return N("application.version",e,"setApplicationVersion",!1);(0,d.R)(42,typeof e)},m.start=()=>{try{(0,a.p)(f.xV,["API/start/called"],void 0,n.K7.metrics,w),w.emit("manual-start-all")}catch(e){(0,d.R)(23,e)}},m[p.G4.RECORD]=function(){(0,a.p)(f.xV,["API/recordReplay/called"],void 0,n.K7.metrics,w),(0,a.p)(p.G4.RECORD,[],void 0,n.K7.sessionReplay,w)},m[p.G4.PAUSE]=function(){(0,a.p)(f.xV,["API/pauseReplay/called"],void 0,n.K7.metrics,w),(0,a.p)(p.G4.PAUSE,[],void 0,n.K7.sessionReplay,w)},m.interaction=function(e){return(new k).get("object"==typeof e?e:{})};const T=k.prototype={createTracer:function(e,t){var r={},i=this,o="function"==typeof t;return(0,a.p)(f.xV,["API/createTracer/called"],void 0,n.K7.metrics,w),g||(0,a.p)(_+"tracer",[(0,v.t)(),e,r],i,n.K7.spa,w),function(){if(R.emit((o?"":"no-")+"fn-start",[(0,v.t)(),i,o],r),o)try{return t.apply(this,arguments)}catch(e){const t="string"==typeof e?new Error(e):e;throw R.emit("fn-err",[arguments,this,t],r),t}finally{R.emit("fn-end",[(0,v.t)()],r)}}}};function j(e,t,r,i){return function(){return(0,a.p)(f.xV,["API/"+t+"/called"],void 0,n.K7.metrics,w),i&&(0,a.p)(e+t,[r?(0,v.t)():performance.now(),...arguments],r?null:this,i,w),r?void 0:this}}function I(){r.e(296).then(r.bind(r,778)).then((({setAPI:t})=>{t(e),(0,c.Ze)(e,"api")})).catch((e=>{(0,d.R)(27,e),w.abort()}))}return["actionText","setName","setAttribute","save","ignore","onEnd","getContext","end","get"].forEach((e=>{T[e]=j(_,e,void 0,g?n.K7.softNav:n.K7.spa)})),m.setCurrentRouteName=g?j(_,"routeName",void 0,n.K7.softNav):j(A,"routeName",!0,n.K7.spa),m.noticeError=function(t,r){"string"==typeof t&&(t=new Error(t)),(0,a.p)(f.xV,["API/noticeError/called"],void 0,n.K7.metrics,w),(0,a.p)("err",[t,(0,v.t)(),!1,r,!!x[e]],void 0,n.K7.jserrors,w)},l.RI?(0,u.GG)((()=>I()),!0):I(),m}var k=r(217),T=r(122);const j={accountID:void 0,trustKey:void 0,agentID:void 0,licenseKey:void 0,applicationID:void 0,xpid:void 0},I={};var O=r(284);const S=e=>{const t=e.startsWith("http");e+="/",r.p=t?e:"https://"+e};let P=!1;function K(e,t={},r,n){let{init:a,info:c,loader_config:u,runtime:d={},exposed:f=!0}=t;d.loaderType=r;const p=(0,g.pV)();c||(a=p.init,c=p.info,u=p.loader_config),(0,k.xN)(e.agentIdentifier,a||{}),function(e,t){if(!e)throw new Error("All loader-config objects require an agent identifier!");I[e]=(0,T.a)(t,j);const r=(0,g.nY)(e);r&&(r.loader_config=I[e])}(e.agentIdentifier,u||{}),c.jsAttributes??={},l.bv&&(c.jsAttributes.isWorker=!0),(0,i.x1)(e.agentIdentifier,c);const m=(0,k.D0)(e.agentIdentifier),h=[c.beacon,c.errorBeacon];P||(m.proxy.assets&&(S(m.proxy.assets),h.push(m.proxy.assets)),m.proxy.beacon&&h.push(m.proxy.beacon),_(),(0,g.US)("activatedFeatures",O.B),e.runSoftNavOverSpa&&=!0===m.soft_navigations.enabled&&m.feature_flags.includes("soft_nav")),d.denyList=[...m.ajax.deny_list||[],...m.ajax.block_internal?h:[]],d.ptid=e.agentIdentifier,(0,o.V)(e.agentIdentifier,d),e.ee=s.ee.get(e.agentIdentifier),void 0===e.api&&(e.api=N(e.agentIdentifier,n,e.runSoftNavOverSpa)),void 0===e.exposed&&(e.exposed=f),P=!0}},374:(e,t,r)=>{r.nc=(()=>{try{return document?.currentScript?.nonce}catch(e){}return""})()},860:(e,t,r)=>{"use strict";r.d(t,{$J:()=>u,K7:()=>s,P3:()=>c,XX:()=>i,qY:()=>n,v4:()=>a});const n="events",i="jserrors",o="browser/blobs",a="rum",s={ajax:"ajax",genericEvents:"generic_events",jserrors:i,logging:"logging",metrics:"metrics",pageAction:"page_action",pageViewEvent:"page_view_event",pageViewTiming:"page_view_timing",sessionReplay:"session_replay",sessionTrace:"session_trace",softNav:"soft_navigations",spa:"spa"},c={[s.pageViewEvent]:1,[s.pageViewTiming]:2,[s.metrics]:3,[s.jserrors]:4,[s.spa]:5,[s.ajax]:6,[s.sessionTrace]:7,[s.softNav]:8,[s.sessionReplay]:9,[s.logging]:10,[s.genericEvents]:11},u={[s.pageViewEvent]:a,[s.pageViewTiming]:n,[s.ajax]:n,[s.spa]:n,[s.softNav]:n,[s.metrics]:i,[s.jserrors]:i,[s.sessionTrace]:o,[s.sessionReplay]:o,[s.logging]:"browser/logs",[s.genericEvents]:"ins"}}},n={};function i(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.m=r,i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>"nr-rum-1.284.1.min.js",i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="NRBA-1.284.1.PROD:",i.l=(r,n,o,a)=>{if(e[r])e[r].push(n);else{var s,c;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}if(!s){c=!0;var f={296:"sha512-I5tV79u0jhQi7aouG2M+kaxUnC8otPe2WXnytHYva1pERqoP8GhxHAi7OJZyNzSvBOojrdGEBSfIO5Sy7scrmA=="};(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",t+o),s.src=r,0!==s.src.indexOf(window.location.origin+"/")&&(s.crossOrigin="anonymous"),f[a]&&(s.integrity=f[a])}e[r]=[n];var g=(t,n)=>{s.onerror=s.onload=null,clearTimeout(p);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},p=setTimeout(g.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=g.bind(null,s.onerror),s.onload=g.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="https://js-agent.newrelic.com/",(()=>{var e={374:0,840:0};i.f.j=(t,r)=>{var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,i)=>n=e[t]=[r,i]));r.push(n[2]=o);var a=i.p+i.u(t),s=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[a,s,c]=r,u=0;if(a.some((t=>0!==e[t]))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(c)c(i)}for(t&&t(r);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self["webpackChunk:NRBA-1.284.1.PROD"]=self["webpackChunk:NRBA-1.284.1.PROD"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";i(374);var e=i(944),t=i(344),r=i(566);class n{agentIdentifier;constructor(){this.agentIdentifier=(0,r.LA)(16)}#e(t,...r){if("function"==typeof this.api?.[t])return this.api[t](...r);(0,e.R)(35,t)}addPageAction(e,t){return this.#e("addPageAction",e,t)}recordCustomEvent(e,t){return this.#e("recordCustomEvent",e,t)}setPageViewName(e,t){return this.#e("setPageViewName",e,t)}setCustomAttribute(e,t,r){return this.#e("setCustomAttribute",e,t,r)}noticeError(e,t){return this.#e("noticeError",e,t)}setUserId(e){return this.#e("setUserId",e)}setApplicationVersion(e){return this.#e("setApplicationVersion",e)}setErrorHandler(e){return this.#e("setErrorHandler",e)}addRelease(e,t){return this.#e("addRelease",e,t)}log(e,t){return this.#e("log",e,t)}}class o extends n{#e(t,...r){if("function"==typeof this.api?.[t])return this.api[t](...r);(0,e.R)(35,t)}start(){return this.#e("start")}finished(e){return this.#e("finished",e)}recordReplay(){return this.#e(t.G4.RECORD)}pauseReplay(){return this.#e(t.G4.PAUSE)}addToTrace(e){return this.#e("addToTrace",e)}setCurrentRouteName(e){return this.#e("setCurrentRouteName",e)}interaction(){return this.#e("interaction")}wrapLogger(e,t,r){return this.#e("wrapLogger",e,t,r)}}var a=i(860),s=i(217);const c=Object.values(a.K7);function u(e){const t={};return c.forEach((r=>{t[r]=function(e,t){return!0===(0,s.gD)(t,"".concat(e,".enabled"))}(r,e)})),t}var l=i(603);var d=i(687),f=i(234),g=i(289),p=i(154),m=i(384);const h=e=>p.RI&&!0===(0,s.gD)(e,"privacy.cookies_enabled");function v(e){return!!(0,m.dV)().o.MO&&h(e)&&!0===(0,s.gD)(e,"session_trace.enabled")}var b=i(389);class y extends f.W{constructor(e,t,r=!0){super(e.agentIdentifier,t),this.auto=r,this.abortHandler=void 0,this.featAggregate=void 0,this.onAggregateImported=void 0,!1===e.init[this.featureName].autoStart&&(this.auto=!1),this.auto?(0,d.Ak)(e.agentIdentifier,t):this.ee.on("manual-start-all",(0,b.J)((()=>{(0,d.Ak)(e.agentIdentifier,this.featureName),this.auto=!0,this.importAggregator(e)})))}importAggregator(t,r={}){if(this.featAggregate||!this.auto)return;let n;this.onAggregateImported=new Promise((e=>{n=e}));const o=async()=>{let o;try{if(h(this.agentIdentifier)){const{setupAgentSession:e}=await i.e(296).then(i.bind(i,861));o=e(t)}}catch(t){(0,e.R)(20,t),this.ee.emit("internal-error",[t]),this.featureName===a.K7.sessionReplay&&this.abortHandler?.()}try{if(!this.#t(this.featureName,o))return(0,d.Ze)(this.agentIdentifier,this.featureName),void n(!1);const{lazyFeatureLoader:e}=await i.e(296).then(i.bind(i,103)),{Aggregate:a}=await e(this.featureName,"aggregate");this.featAggregate=new a(t,r),t.runtime.harvester.initializedAggregates.push(this.featAggregate),n(!0)}catch(t){(0,e.R)(34,t),this.abortHandler?.(),(0,d.Ze)(this.agentIdentifier,this.featureName,!0),n(!1),this.ee&&this.ee.abort()}};p.RI?(0,g.GG)((()=>o()),!0):o()}#t(e,t){switch(e){case a.K7.sessionReplay:return v(this.agentIdentifier)&&!!t;case a.K7.sessionTrace:return!!t;default:return!0}}}var w=i(630);class R extends y{static featureName=w.T;constructor(e,t=!0){super(e,w.T,t),this.importAggregator(e)}}var A=i(908),E=i(843),_=i(878),x=i(782),N=i(863);class k extends y{static featureName=x.T;constructor(e,t=!0){super(e,x.T,t),p.RI&&((0,E.u)((()=>(0,A.p)("docHidden",[(0,N.t)()],void 0,x.T,this.ee)),!0),(0,_.sp)("pagehide",(()=>(0,A.p)("winPagehide",[(0,N.t)()],void 0,x.T,this.ee))),this.importAggregator(e))}}var T=i(773);class j extends y{static featureName=T.TZ;constructor(e,t=!0){super(e,T.TZ,t),p.RI&&document.addEventListener("securitypolicyviolation",(e=>{(0,A.p)(T.xV,["Generic/CSPViolation/Detected"],void 0,this.featureName,this.ee)})),this.importAggregator(e)}}new class extends o{constructor(t){super(),p.gm?(this.features={},(0,m.bQ)(this.agentIdentifier,this),this.desiredFeatures=new Set(t.features||[]),this.desiredFeatures.add(R),this.runSoftNavOverSpa=[...this.desiredFeatures].some((e=>e.featureName===a.K7.softNav)),(0,l.j)(this,t,t.loaderType||"agent"),this.run()):(0,e.R)(21)}get config(){return{info:this.info,init:this.init,loader_config:this.loader_config,runtime:this.runtime}}run(){try{const t=u(this.agentIdentifier),r=[...this.desiredFeatures];r.sort(((e,t)=>a.P3[e.featureName]-a.P3[t.featureName])),r.forEach((r=>{if(!t[r.featureName]&&r.featureName!==a.K7.pageViewEvent)return;if(this.runSoftNavOverSpa&&r.featureName===a.K7.spa)return;if(!this.runSoftNavOverSpa&&r.featureName===a.K7.softNav)return;const n=function(e){switch(e){case a.K7.ajax:return[a.K7.jserrors];case a.K7.sessionTrace:return[a.K7.ajax,a.K7.pageViewEvent];case a.K7.sessionReplay:return[a.K7.sessionTrace];case a.K7.pageViewTiming:return[a.K7.pageViewEvent];default:return[]}}(r.featureName).filter((e=>!(e in this.features)));n.length>0&&(0,e.R)(36,{targetFeature:r.featureName,missingDependencies:n}),this.features[r.featureName]=new r(this)}))}catch(t){(0,e.R)(22,t);for(const e in this.features)this.features[e].abortHandler?.();const r=(0,m.Zm)();delete r.initializedAgents[this.agentIdentifier]?.api,delete r.initializedAgents[this.agentIdentifier]?.features,delete this.sharedAggregator;return r.ee.get(this.agentIdentifier).abort(),!1}}}({features:[R,k,j],loaderType:"lite"})})()})();</script>
<meta name="title" content="ALEXISTOTO * Afinitas Link Situs Slot Gacor Maxwin Putaran Resmi Slot777 Hari Ini Bonus Scatter Hitam">
<meta name="description" content="ALEXISTOTO adalah link situs slot gacor maxwin hari ini resmi dengan putaran slot777 berhadiah scatter hitam auto JP perkalian x500 dari afinitas slot gacor 100% anti rungkat."> 
<meta name="keywords" content="alexistoto, alexis toto, situs slot, slot gacor, slot gacor maxwin, slot maxwin, slot777, slot 777, scatter hitam, slot resmi, link slot, slot bonus, slot gacor hari ini">
<meta name="distribution" content="Global" />
<meta name="rating" content="general" />
<meta name="geo.region" content="ID" />
<meta name="geo.placename" content="Indonesia" />
<meta name="author" content="ALEXISTOTO" />
<meta name="publisher" content="ALEXISTOTO" />
<meta name="copyright" content="ALEXISTOTO" />
<meta name="robots" content="INDEX,FOLLOW">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="google-site-verification" content="hKgT8xl6qe6v_y3rIR9gpeMI8_W3cjQhiB3svG91RAI" />
<meta name="format-detection" content="telephone=no">
<title>ALEXISTOTO * Afinitas Link Situs Slot Gacor Maxwin Putaran Resmi Slot777 Hari Ini Bonus Scatter Hitam</title>
<link rel="stylesheet" type="text/css" media="all and (min-width: 1px)" href="https://www.mothercare.co.id/static/version1741963345/_cache/merged/b2bfec61d909c3765479549b8b44c102.min.css">
<link rel="stylesheet" type="text/css" media="all" href="https://www.mothercare.co.id/static/version1741963345/_cache/merged/56b5914bf926abed304351798d035de2.min.css">
<link rel="stylesheet" type="text/css" media="screen, print" href="https://www.mothercare.co.id/static/version1741963345/_cache/merged/fac5fbb731d8a9118c7561e0e8b1fc67.min.css">
<!--[if IE 11]>
<script  type="text/javascript"  src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Klevu_Search/js/klevu/ieUrlPolyfill.min.js"></script>
<![endif]-->
<script type="text/javascript" defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/js/kanmo_custom.min.js"></script>
<script type="text/javascript" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Kanmo_BookingAppointment/js/product_detail_handler.min.js"></script>
<link rel="preload" as="font" crossorigin="anonymous" href="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/fonts/mothercare_2020-demi-webfont.woff2">
<link rel="preload" as="font" crossorigin="anonymous" href="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/fonts/mothercare_2020-regular-webfont.woff2">
<link rel="preload" as="font" crossorigin="anonymous" href="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/fonts/mothercare_2020-thin-webfont.woff2">

<link rel="amphtml" href="https://alexistoto.aksespintu.com/blkbanyuwangi/" />
<link rel="icon" type="image/x-icon" href="https://cdn-icons-png.freepik.com/512/8372/8372083.png">
<link rel="shortcut icon" type="image/x-icon" href="https://cdn-icons-png.freepik.com/512/8372/8372083.png">
<link rel="canonical" href="https://blkbanyuwangi.kemnaker.go.id/">
<link rel="alternate" hreflang="id-id" href="https://alexistoto.aksespintu.com/blkbanyuwangi/"/>
<link rel="alternate" href="https://alexistoto.aksespintu.com/blkbanyuwangi/"/>
<link rel="alternate" hreflang="id" href="https://alexistoto.aksespintu.com/blkbanyuwangi/"/>
<link rel="alternate" hreflang="en" href="https://alexistoto.aksespintu.com/blkbanyuwangi/"/>
<!--KB6WK8EHVmVHTESzwSWVMjZ6KU8vWqCH-->
<!--2a1s2GN9TUKbwHv3HvawyC8mbXQAIuWc-->
<!--vi7727dwaRtKsPIHEXMsLQoewBm0jClQ-->


<style>
body.onestepcheckout-index-index [type=radio] {cursor:pointer;} 
</style>
<script data-breeze>
    require([
        'jquery'
    ],function($) {
         $(document).ready(function() {
            setTimeout(function() {
                if(window.outerWidth < 450) {
                    if ($('.widget.block.block-banners').length > 0) {
                        $('.widget.block.block-banners').each(function() {
                            $(this).insertAfter($(this).parent().find('#cart-totals'));
                            $(this).css('padding-bottom','20px')
                        });
                    }
                }
              }, 1000);
         });  
     });
</script>        <!-- NO Pixel ID is configured, please goto Admin -->
<script>
console.log(
    'No Meta pixel is configured, please log in as a admin and then visit Stores -> Meta -> Setup -> Get Started'
);
</script>

<script>
             // load Branch
             (function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-latest.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"addListener banner closeBanner closeJourney data deepview deepviewCta first init link logout removeListener setBranchViewData setIdentity track trackCommerceEvent logEvent disableTracking getBrowserFingerprintId crossPlatformIds lastAttributedTouchData setAPIResponseCallback qrCode setRequestMetaData setAPIUrl getAPIUrl setDMAParamsForEEA".split(" "), 0);
             // init Branch
             branch.init("key_live_hwpt9nHjEmScI07bH10AshccrwmZM7hP"); // Change `key_live_YOUR_KEY_GOES_HERE` to match your Branch Dashboard
          </script>
<link rel="preconnect" href="https://js.klevu.com">
<script type="text/javascript">
    var klevu_lang = 'id';
    var klevu_baseCurrencyCode = 'IDR';
    var klevu_currentCurrencyCode = 'IDR';
        var klevu_pubIsInUse = true;
    var klevu_current_version = '3.2.0';
</script>
    <script type="text/javascript" src="https://js.klevu.com/core/v2/klevu.js"></script>
<script type="text/javascript" id="klevu_jsapikeys">
    klevu({"search":{"apiKey":"klevu-159060263433311987"},"analytics":{"apiKey":"klevu-159060263433311987"}});
</script>
<script type="text/javascript" id="klevu_jsmodules">
    // Add Price Field Suffix for customer group and currency conversion
    var klevu_addPriceSuffixToQueryControl = {
        name: 'addPriceSuffixToQuery',
        fire: function (data, scope) {
            var customerData = JSON.parse(window.localStorage.getItem('klv_mage') || '{}').customerData || {
                customer_group_id: 32000            };
            klevu.search.modules.addPriceSuffixToQuery(data, scope, klevu_baseCurrencyCode, customerData.customer_group_id);
        }
    };

    (function (klevu) {
        klevu.extend(true, klevu.search.modules, {
            addPriceSuffixToQuery: function (data, scope, currencyCode, customerGroupId) {
                if (typeof data.request.current === "undefined") {
                    return false;
                }

                klevu.each(data.request.current.recordQueries, function (key, query) {
                    //code to fetch prices
                    klevu.setObjectPath(
                        data,
                        "localOverrides.query." + query.id + ".settings.priceFieldSuffix",
                        currencyCode + '-' + customerGroupId
                    );
                });
            },
            mageConvertPriceRecordCurrencyData: function (productRecords, currencyCode, currencyRates) {
                if (!productRecords) {
                    return;
                }

                klevu.each(productRecords, function (recordKey, productRecord) {
                    var fromRate = parseFloat(currencyRates[productRecord.currency] || 0);
                    var toRate = parseFloat(currencyRates[currencyCode] || 0);
                    if (!fromRate || !toRate) {
                        return;
                    }

                    var exchangeRate = toRate / fromRate;

                    if (klevu.isNumeric(klevu.getObjectPath(productRecord, "price"))) {
                        productRecord.price *= exchangeRate;
                    }
                    if (klevu.isNumeric(klevu.getObjectPath(productRecord, "salePrice"))) {
                        productRecord.salePrice *= exchangeRate;
                    }
                    if (klevu.isNumeric(klevu.getObjectPath(productRecord, "startPrice"))) {
                        productRecord.startPrice *= exchangeRate;
                    }

                    productRecord.currency = currencyCode;
                });
            }
        });
    })(klevu);
</script>
<script type="text/javascript" id="klevu_jsinteractive">
    klevu.interactive(function () {
        var options = {"url":{"protocol":"https:","landing":"https:\/\/www.mothercare.co.id\/catalogsearch\/result\/","search":"https:\/\/eucs20v2.ksearchnet.com\/cs\/v2\/search"},"search":{"minChars":0,"searchBoxSelector":"input[type=text][name=q],input[type=search][name=q],.kuSearchInput"}};
                klevu(options);
            });
</script>    <script type="text/javascript" src="https://js.klevu.com/theme/default/v2/quick-search-theme.js"></script>
    <script type="text/x-magento-init" data-breeze-processed="true">
        {
            "*": {
                "Magento_PageCache/js/form-key-provider": {
                    "isPaginationCacheEnabled":
                        0                }
            }
        }
    </script>
            
            <link rel="stylesheet" type="text/css" as="style" onload="this.rel=&#39;stylesheet&#39;" media="all" href="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/css/default.min.css" />
<link rel="stylesheet" type="text/css" media="all" onload="media=&#39;all&#39;" href="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/css/deferred-default.min.css" />

<meta property="og:type" content="product">
<meta property="og:title" content="ALEXISTOTO * Afinitas Link Situs Slot Gacor Maxwin Putaran Resmi Slot777 Hari Ini Bonus Scatter Hitam">
<meta property="og:image" content="https://i.ibb.co/PGGZK8t4/slot-gacor.jpg">
<meta property="og:description" content="ALEXISTOTO adalah link situs slot gacor maxwin hari ini resmi dengan putaran slot777 berhadiah scatter hitam auto JP perkalian x500 dari afinitas slot gacor 100% anti rungkat.">
<meta property="og:url" content="https://blkbanyuwangi.kemnaker.go.id/">
    <meta property="product:price:amount" content="5000">
    <meta property="product:price:currency" content="IDR">
<script type="text/javascript" id="klevu_initsessiondata">
    var nowUnixtime = parseInt(Date.now() / 1000);

    function klevufejs_getCookie(name) {
        if (typeof (name) === "undefined") {
            name = "klv_mage";
        }
        var c = "",
            ca = document.cookie.split(';');

        for (var i = 0; i < ca.length; i++) {
            c = ca[i];
            if (typeof c !== "string") {
                continue;
            }
            var cookiePair = c.split("=");

            if (name === cookiePair[0].trim()) {
                try {
                    return JSON.parse(decodeURIComponent(cookiePair[1]));
                } catch (err) {
                    // this is fine, data will be regenerated
                }
            }
        }
        return {
            expire_sections: {}
        };
    }

    document.addEventListener('klevu.customerData.loaded', function (e) {
        var klevufejs_cookie = klevufejs_getCookie();
        klevufejs_cookie.expire_sections.customerData = nowUnixtime + 600;

        document.cookie = "klv_mage=" + JSON.stringify(klevufejs_cookie) + ";" + (new Date((nowUnixtime + 3600) * 1000).toUTCString()) + ";path=/;SameSite=Strict";
    });

    var klevufejs_cookie = klevufejs_getCookie();
    var klevuData = {
        ...{
            customerData: {
                revalidate_after: -1
            }
        },
        ...JSON.parse(window.localStorage.getItem('klv_mage') || '{}')
    };

    const klevuCustomerDataLoadedEvent = document.createEvent('CustomEvent');
    klevuCustomerDataLoadedEvent.initEvent('klevu.customerData.loaded', false, true);
    const klevuCustomerDataLoadErrorEvent = document.createEvent('CustomEvent');
    klevuCustomerDataLoadErrorEvent.initEvent('klevu.customerData.loadError', false, true);

    if (typeof klevufejs_cookie.expire_sections !== "object"
        || (klevufejs_cookie.expire_sections.customerData || -1) < nowUnixtime
        || klevuData.customerData.revalidate_after < nowUnixtime
    ) {
        var xhttp = new XMLHttpRequest();
        xhttp.onerror = function (request) {
            document.dispatchEvent(klevuCustomerDataLoadErrorEvent);
        };
        xhttp.ontimeout = function (request) {
            this.onerror(request);
        };
        xhttp.onload = function (request) {
            if (this.status >= 400 || this.timeout) {
                this.onerror(request);
                return;
            }

            var klevuData = JSON.parse(window.localStorage.getItem('klv_mage') || '{}');
            klevuData.customerData = JSON.parse(this.response);
            window.localStorage.setItem('klv_mage', JSON.stringify(klevuData));

            document.dispatchEvent(klevuCustomerDataLoadedEvent);
        };
        xhttp.open('GET', 'https://www.mothercare.co.id/rest/V1/klevu/customerData', false);
        xhttp.send();
    } else {
        document.dispatchEvent(klevuCustomerDataLoadedEvent);
    }
</script>
    
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/lib/knockout-3.5.1.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/core/extend-ko.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/lib/turbolinks-5.2.0.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/lib/underscore-1.13.1.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/lib/tabbable-5.2.1.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/lib/focus-trap-6.7.1.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/lib/cash-8.1.2.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/core/extend-cash.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/lib/swiped-events-1.1.4.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/lib/js.cookie-3.0.1.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/lib/class.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/lib/double-tap.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/core/globals.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/core/load-script.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/core/async.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/core/request.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/core/translate.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/core/validator.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/core/component.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/core/cookie.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/core/storage.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/core/sections.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/core/main.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/core/turbo.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/core/define.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/common/common.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/common/url.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/common/theme.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/js/breeze/theme-blank.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/js/breeze/extend.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/js/breeze/custom.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/validators/core.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/form.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/lib/lite-yt-embed.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/ui/dropdown.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/ui/dropdown-dialog.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/ui/collapsible.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/ui/tabs.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/ui/accordion.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/ui/toggle-advanced.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/ui/modal.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/ui/confirm.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/ui/alert.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/customer-data.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/customer.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/form-key.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/page-cache.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/messages.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/block-loader.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/data-post.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/menu.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/minicart.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/proceed-to-checkout.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/catalog-add-to-cart.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/product-list-toolbar-form.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/compare-products.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/validation.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/redirect-url.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/quick-search.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/msrp.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/google-tag-manager-universal.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/google-tag-manager.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/wishlist.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/recent-products.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/form-provider.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/login-as-customer.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/captcha.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/google-recaptcha.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Ajaxpro/js/modal-manager.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Ajaxpro/js/breeze/ajaxpro.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Ajaxpro/js/breeze/modal.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Ajaxpro/js/breeze/data-post.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Ajaxpro/js/breeze/catalog-add-to-cart.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Ajaxpro/js/breeze/catalog-product-view.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Easytabs/js/breeze/tabs.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Easytabs/js/tabs-toolbar.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Easytabs/js/tabs-updater.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/validate-product.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/register-viewed-products.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/common/price-utils.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/price-box.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/price-options.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/breadcrumbs.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/gallery.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/lib/panzoom-4.5.0.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/gallery-panzoom.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/reviews.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/common/shuffle-and-reveal.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/upsell-products.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/related-products.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/validators/cart.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/product-configure.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/bundle.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/configurable.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/swatch-renderer.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/configurable-configure.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/validators/customer.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/address.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/change-email-password.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/region-updater.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/address-validation.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/customer-assistance.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/last-ordered-items.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/logout-redirect.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Kanmo_CustomerName/js/breeze/customer-name.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Magento_CustomerCustomAttributes/js/breeze/cityUpdater.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Magento_CustomerCustomAttributes/js/breeze/districtUpdater.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Magento_CustomerCustomAttributes/js/breeze/postalcodeUpdater.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Magento_CustomerCustomAttributes/js/breeze/subdistrictUpdater.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/pagebuilder/slider.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/pagebuilder/carousel.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/pagebuilder/tabs.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/pagebuilder/map.min.js"></script>
<script data-breeze defer src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Swissup_Breeze/js/components/pagebuilder/initializer.min.js"></script>

<link rel="preload" as="image" href="https://i.ibb.co/PGGZK8t4/slot-gacor.jpg" imagesrcset="https://i.ibb.co/PGGZK8t4/slot-gacor.jpg 512w,https://i.ibb.co/PGGZK8t4/slot-gacor.jpg 549w,https://i.ibb.co/PGGZK8t4/slot-gacor.jpg 608w,https://i.ibb.co/PGGZK8t4/slot-gacor.jpg 704w,https://i.ibb.co/PGGZK8t4/slot-gacor.jpg 960w,https://i.ibb.co/PGGZK8t4/slot-gacor.jpg 1216w" imagesizes="(min-width: 1536px) 608px, (min-width: 1280px) calc((85vw - 4rem) / 2), (min-width: 768px) calc((100vw - 4rem) / 2), calc(100vw - 1rem)"/>

<script data-breeze="1" type="module">required.map((pair) => require(pair[0], pair[1])); required = [];</script>
<script type="text/javascript" id="kfl-baa22895-5ad0-49c9-ea1a-f04cfc00cfe8">!function(e){e.support.hook(["analytics.collector","analytics.utility"],(function(){e.support.isActive("analytics.processors")||(e.extend(!0,e.analytics,{processors:{helpers:{buildAnalyticsEvent:function(t){return{payload:t.payload,type:t.type,url:e.getGlobalSetting("url.analyticsCollect","https://stats.ksearchnet.com/analytics/"),apiKey:e.getObjectPath(t.eventSource,"apiKey",e.getGlobalSetting("search.apiKey",e.getGlobalSetting("global.apiKey"))),key:t.type+"_"+e.getObjectPath(t,"id",e.randomId())}}},product:{helpers:{buildAnalyticsEvent:function(t){return{payload:t.payload,type:t.type,url:e.getGlobalSetting("url.analyticsCollect","https://stats.ksearchnet.com/analytics/"),apiKey:e.getObjectPath(t.eventSource,"apiKey",e.getGlobalSetting("search.apiKey",e.getGlobalSetting("global.apiKey"))),key:t.type+"_"+t.itemId}}},click:function(t){let s={type:"product_click",eventSource:t,payload:{},itemId:0},a=e.getObjectPath(t,"data.items.0",{}),n=e.getObjectPath(t,"data.meta.tags",[]),i={klevu_keywords:e.getObjectPath(t,"data.meta.searchedTerm","*"),klevu_pageNumber:e.getObjectPath(t,"data.meta.pageNumber",""),klevu_src:e.getObjectPath(t,"data.meta.src",""),klevu_limit:e.getObjectPath(t,"data.meta.limit",""),klevu_sort:e.getObjectPath(t,"data.meta.sort",""),klevu_totalResults:e.getObjectPath(t,"data.meta.totalResults","0"),klevu_typeOfQuery:e.getObjectPath(t,"data.meta.typeOfQuery","WILDCARD_AND"),tags:n};if(e.support.isActive("user")){let t=e.user.getIpData();e.isUndefined(t.ipv4)||(i.klevu_shopperIP_v4=t.ipv4),e.isUndefined(t.ipv6)||(i.klevu_shopperIP_v6=t.ipv6),e.isUndefined(t.uuid)||(i.klevu_uuid=t.uuid)}e.support.isActive("core.dataProtection")&&(i.data_protection=e.dataProtection.dataCanBeTracked()),i.klevu_productId=e.getObjectPath(a,"id",0),e.getObjectPath(a,"itemGroupId",!1)&&(i.klevu_productGroupId=e.getObjectPath(a,"itemGroupId",!1)),i.klevu_productVariantId=e.getObjectPath(a,"variantId",!1),i.klevu_productName=e.getObjectPath(a,"name",!1),i.klevu_productUrl=e.getObjectPath(a,"url",!1),s.id=e.getObjectPath(a,"id",0);let r,c=e.getObjectPath(t,"scope","").split(",");e.each(c,(function(n,c){switch(c){case"quick":e.getObjectPath(t,"data.filters.activeFilters",!1)&&(i.klevu_keywords+=" [["+e.getObjectPath(t,"data.filters.activeFiltersString","")+"]]"),i.klevu_src=i.klevu_src.replace("]]",";;template:quick-search]]"),s.payload=i,s.type="search_product_click",r=e.analytics.processors.helpers.buildAnalyticsEvent(s),e.analytics.utility.addAnalyticsEventsToStorage(r);break;case"landing":i.klevu_src="[[typeOfRecord:"+e.getObjectPath(a,"typeOfRecord","KLEVU_PRODUCT")+";;template:landing]]",e.getObjectPath(t,"data.filters.activeFilters",!1)&&(i.klevu_keywords+=" [["+e.getObjectPath(t,"data.filters.activeFiltersString","")+"]]",i.klevu_src=i.klevu_src.replace("]]",";;source:filters]]")),s.payload=i,s.type="search_product_click",r=e.analytics.processors.helpers.buildAnalyticsEvent(s),e.analytics.utility.addAnalyticsEventsToStorage(r);break;case"catnav":i.klevu_src="[[typeOfRecord:"+e.getObjectPath(a,"typeOfRecord","KLEVU_PRODUCT")+";;template:"+e.getObjectPath(t,"data.meta.srcTemplateName","category")+"]]",e.getObjectPath(t,"data.filters.activeFilters",!1)&&(i.klevu_activeFilters=e.getObjectPath(t,"data.filters.activeFiltersString",""),i.klevu_src=i.klevu_src.replace("]]",";;source:filters]]")),i.klevu_categoryName=e.getObjectPath(t,"data.meta.categoryName",""),i.klevu_categoryPath=e.getObjectPath(t,"data.meta.categoryPath",""),i.klevu_abTestId=e.getObjectPath(t,"data.meta.abTestId",""),i.klevu_abTestVariantId=e.getObjectPath(t,"data.meta.abTestVariantId",""),i.klevu_abTestSource=e.getObjectPath(t,"data.meta.abTestSource","");let n=e.getObjectPath(t,"data.originalItems",[]);if(n.length>0){let t=[];e.each(n,(function(e,s){s.id&&t.push(s.id)})),i.klevu_productIds=t.join(",")}i.klevu_productRatings=e.getObjectPath(a,"rating",0),i.klevu_productPosition=e.getObjectPath(t,"data.meta.pageStartsFrom",0),i.klevu_salePrice=e.getObjectPath(a,"salePrice",0),i.klevu_productSku=e.getObjectPath(a,"sku",!1),delete i.klevu_keywords,s.payload=i,s.type="catnav_product_click",r=e.analytics.processors.helpers.buildAnalyticsEvent(s),e.analytics.utility.addAnalyticsEventsToStorage(r)}}))},personalisedClick:function(t){let s={type:"personalised_product_click",eventSource:t,payload:{},itemId:0},a=e.getObjectPath(t,"data.items.0",{}),n={klevu_src:e.getObjectPath(t,"data.meta.src",""),klevu_source:e.getObjectPath(t,"data.meta.source",""),klevu_recentsearch:e.getObjectPath(t,"data.meta.recentsearch","")};n.klevu_productId=e.getObjectPath(a,"id",0),e.getObjectPath(a,"itemGroupId",!1)&&(n.klevu_productGroupId=e.getObjectPath(a,"itemGroupId",!1)),n.klevu_productVariantId=e.getObjectPath(a,"variantId",!1),n.klevu_productName=e.getObjectPath(a,"name",!1),n.klevu_productUrl=e.getObjectPath(a,"url",!1),n.klevu_rank=e.getObjectPath(t,"data.meta.rank",""),s.id=e.getObjectPath(a,"id",0);let i,r=e.getObjectPath(t,"scope","").split(",");s.payload=n,s.type="personalised_product_click",i=e.analytics.processors.helpers.buildAnalyticsEvent(s),e.analytics.utility.addAnalyticsEventsToStorage(i),e.each(r,(function(e,t){t}))},view:function(e){},buy:function(e){}},search:{term:function(t){let s={type:"search_term",eventSource:t,payload:{}},a=e.getObjectPath(t,"data.meta.tags",[]);e.each(a,(function(e,t){a[e]=encodeURIComponent(t)}));let n={klevu_term:e.getObjectPath(t,"data.meta.searchedTerm","*"),klevu_originalTerm:e.getObjectPath(t,"data.meta.originalTerm",""),klevu_pageNumber:e.getObjectPath(t,"data.meta.pageNumber",""),klevu_src:e.getObjectPath(t,"data.meta.src",""),klevu_limit:e.getObjectPath(t,"data.meta.limit",""),klevu_sort:e.getObjectPath(t,"data.meta.sort",""),klevu_totalResults:e.getObjectPath(t,"data.meta.totalResults","0"),klevu_typeOfQuery:e.getObjectPath(t,"data.meta.typeOfQuery","WILDCARD_AND"),tags:a};if(e.support.isActive("user")){let t=e.user.getIpData();e.isUndefined(t.ipv4)||(n.klevu_shopperIP_v4=t.ipv4),e.isUndefined(t.ipv6)||(n.klevu_shopperIP_v6=t.ipv6),e.isUndefined(t.uuid)||(n.klevu_uuid=t.uuid)}e.support.isActive("core.dataProtection")&&(n.data_protection=e.dataProtection.dataCanBeTracked());let i=!1,r=e.getObjectPath(t,"scope","").split(",");e.each(r,(function(s,a){switch(a){case"quick":i=!0,e.getObjectPath(t,"data.filters.activeFilters",!1)&&(n.klevu_term+=" [["+e.getObjectPath(t,"data.filters.activeFiltersString","")+"]]"),n.klevu_src=n.klevu_src.replace("]]",";;template:quick-search]]");break;case"landing":n.klevu_src=n.klevu_src.replace("]]",";;template:landing]]"),e.getObjectPath(t,"data.filters.activeFilters",!1)&&(n.klevu_term+=" [["+e.getObjectPath(t,"data.filters.activeFiltersString","")+"]]",n.klevu_src=n.klevu_src.replace("]]",";;source:filters]]"))}})),s.payload=n;let c=e.analytics.processors.helpers.buildAnalyticsEvent(s);e.analytics.utility.addAnalyticsEventsToStorage(c),e.analytics.utility.sendAnalyticsEventsFromStorage(),!e.isUndefined(e.analyticsUtil.base)&&e.isFunction(e.analyticsUtil.base.sendGaDataForTerm)&&i&&!e.support.isActive("analytics.gtmProcessor")&&e.analyticsUtil.base.sendGaDataForTerm(n)}},catNav:{view:function(t){let s={type:"catnav_view",eventSource:t,payload:{}},a={klevu_categoryName:e.getObjectPath(t,"data.meta.categoryName",""),klevu_categoryPath:e.getObjectPath(t,"data.meta.categoryPath",""),klevu_pageNumber:e.getObjectPath(t,"data.meta.pageNumber",""),klevu_src:e.getObjectPath(t,"data.meta.src",""),klevu_limit:e.getObjectPath(t,"data.meta.limit",""),klevu_sort:e.getObjectPath(t,"data.meta.sort",""),klevu_totalResults:e.getObjectPath(t,"data.meta.totalResults","0"),klevu_typeOfQuery:e.getObjectPath(t,"data.meta.typeOfQuery","WILDCARD_AND")};if(e.support.isActive("user")){let t=e.user.getIpData();e.isUndefined(t.ipv4)||(a.klevu_shopperIP_v4=t.ipv4),e.isUndefined(t.ipv6)||(a.klevu_shopperIP_v6=t.ipv6),e.isUndefined(t.uuid)||(a.klevu_uuid=t.uuid)}e.support.isActive("core.dataProtection")&&(a.data_protection=e.dataProtection.dataCanBeTracked());let n=e.getObjectPath(t,"data.items",[]);if(n.length>0){let t=[];e.each(n,(function(e,s){s.id&&t.push(s.id)})),a.klevu_productIds=t.join(",")}let i=e.getObjectPath(t,"scope","").split(",");e.each(i,(function(s,n){if("catnav"===n)a.klevu_src=a.klevu_src.replace("]]",";;template:category]]"),e.getObjectPath(t,"data.filters.activeFilters",!1)&&(a.klevu_activeFilters=e.getObjectPath(t,"data.filters.activeFiltersString",""),a.klevu_src=a.klevu_src.replace("]]",";;source:filters]]")),a.klevu_abTestId=e.getObjectPath(t,"data.meta.abTestId",""),a.klevu_abTestVariantId=e.getObjectPath(t,"data.meta.abTestVariantId",""),a.klevu_abTestSource=e.getObjectPath(t,"data.meta.abTestSource","")})),s.payload=a;let r=e.analytics.processors.helpers.buildAnalyticsEvent(s);e.analytics.utility.addAnalyticsEventsToStorage(r),e.analytics.utility.sendAnalyticsEventsFromStorage()}},recs:{helpers:{convertEventItems:function(t){let s=[];return e.each(t,(function(t,a){s.push({item_id:a.id,item_name:a.name,price:a.salePrice,currency:a.currency,item_brand:a.brand,item_category:a.category,item_variant_id:e.isUndefined(a.variantId)?a.id:a.variantId,item_group_id:e.isUndefined(a.itemGroupId)||""===a.itemGroupId?a.id:a.itemGroupId,index:t+1,quantity:1})})),s},buildAnalyticsEventData:function(t,s){return{tags:e.getObjectPath(t,"data.general.tags",[]),list_id:e.getObjectPath(t,"data.general.list_id",!1),list_name:e.getObjectPath(t,"data.general.list_name",!1),list_logic:e.getObjectPath(t,"data.general.list_logic",!1),spot_id:e.getObjectPath(t,"data.general.spot_id",!1),spot_name:e.getObjectPath(t,"data.general.spot_name",!1),segment_id:e.getObjectPath(t,"data.general.segment_id",!1),segment_name:e.getObjectPath(t,"data.general.segment_name",!1),action:e.getObjectPath(t,"data.general.action",!1),items:s}},buildAnalyticsEvent:function(t){let s={event:t.type,event_apikey:e.getObjectPath(t.eventSource,"apiKey",!1),user_profile:e.getObjectPath(t.eventSource,"user",{}),event_data:e.analytics.processors.recs.helpers.buildAnalyticsEventData(t.eventSource,t.items)};if(e.support.isActive("user")){let t=e.user.getIpData();e.isUndefined(t.ipv4)||(s.user_profile.ip_address_v4=t.ipv4),e.isUndefined(t.ipv6)||(s.user_profile.ip_address_v6=t.ipv6),e.isUndefined(t.uuid)||(s.user_profile.klevu_uuid=t.uuid)}return e.support.isActive("core.dataProtection")&&(s.user_profile.data_protection=e.dataProtection.dataCanBeTracked()),{payload:s,type:"collect",url:e.getGlobalSetting("url.analyticsCollect","https://stats.ksearchnet.com/analytics/"),apiKey:e.getObjectPath(t.eventSource,"apiKey",e.getGlobalSetting("search.apiKey",e.getGlobalSetting("global.apiKey"))),key:t.type+"_"+e.getObjectPath(t.eventSource,"data.general.recs_key",e.randomId()),override:!0}}},click:function(t){let s={type:"select_recs_list",eventSource:t,items:[]},a=e.getObjectPath(t,"data.items",[]);if(a&&a.length&&(s.items=e.analytics.processors.recs.helpers.convertEventItems(a)),e.analytics.utility.hasAnalyticsEventByName(s.type+"_"+e.getObjectPath(t,"data.general.recs_key",e.randomId()))){let a=e.analytics.utility.getAnalyticsEventByName(s.type+"_"+e.getObjectPath(t,"data.general.recs_key",e.randomId())),n=e.getObjectPath(a,"payload.items",[]);n.length>0&&(s.items=e.toUniqueArray(e.makeArray(n,s.items)))}let n=e.analytics.processors.recs.helpers.buildAnalyticsEvent(s);n.override=!0,s.items.length>0&&e.analytics.utility.addAnalyticsEventsToStorage(n)},view:function(t){let s={type:"view_recs_list",eventSource:t,items:[]},a=e.getObjectPath(t,"data.items",[]);a&&a.length&&(s.items=e.analytics.processors.recs.helpers.convertEventItems(a));let n=e.analytics.processors.recs.helpers.buildAnalyticsEvent(s);s.items.length>0&&e.analytics.utility.addAnalyticsEventsToStorage(n),s.items.length>0&&e.analytics.utility.sendAnalyticsEventsFromStorage()},staticView:function(t){let s={type:"view_recs_list",eventSource:t,static_content:[]},a=e.analytics.processors.recs.helpers.buildAnalyticsEvent(s),n=e.getObjectPath(t,"data.activeStaticContent",[]);a.payload.event_data.static_content=n,a.payload.event_data.static_content.length&&(e.analytics.utility.addAnalyticsEventsToStorage(a),e.analytics.utility.sendAnalyticsEventsFromStorage())},staticClick:function(t){let s={type:"select_recs_list",eventSource:t,static_content:[]},a=e.analytics.processors.recs.helpers.buildAnalyticsEvent(s);a.payload.event_data.static_content=e.getObjectPath(s,"eventSource.data.staticContent",[]),e.analytics.utility.addAnalyticsEventsToStorage(a)}},general:{bannerClick:function(e){}}}}),e.analytics.collector.registerObserver({name:"analytics",processOld:!0,eventTypes:["recommendation_view"],processor:e.analytics.processors.recs.view}),e.analytics.collector.registerObserver({name:"analytics",processOld:!0,eventTypes:["recommendation_click"],processor:e.analytics.processors.recs.click}),e.analytics.collector.registerObserver({name:"analytics",processOld:!0,eventTypes:["search_term"],processor:e.analytics.processors.search.term}),e.analytics.collector.registerObserver({name:"analytics",processOld:!0,eventTypes:["search_catview"],processor:e.analytics.processors.catNav.view}),e.analytics.collector.registerObserver({name:"analytics",processOld:!0,eventTypes:["search_product_click"],processor:e.analytics.processors.product.click}),e.analytics.collector.registerObserver({name:"analytics",processOld:!0,eventTypes:["personalised_product_click"],processor:e.analytics.processors.product.personalisedClick}),e.analytics.collector.registerObserver({name:"analytics",processOld:!0,eventTypes:["recommendation_view_static"],processor:e.analytics.processors.recs.staticView}),e.analytics.collector.registerObserver({name:"analytics",processOld:!0,eventTypes:["recommendation_click_static"],processor:e.analytics.processors.recs.staticClick}),e.support.register({name:"analytics.processors",loaded:!0,active:!0,dependency:["analytics.base","analytics.collector","analytics.extractor"]}))}))}(klevu),function(e){e.support.hook(["core.constructors"],(function(){e.constructors.isLoaded("user")||(e.constructors.add({name:"user",create:function(){let t={settings:{dictionary:{user:e.dictionary("user")},request:{},response:{},user:{apiKey:!1,ipv4:!1,ipv6:!1,sessionId:!1,sessionInfo:{connectorInfo:[]},segmentInfo:{segments:[]},ipv4:!1,ipv6:!1,uuid:!1},general:{scope:document.createElement("div"),apiKey:!1,lastSend:!1,ipDataLastSend:!1,connectorInfo:{},flags:{canSend:!0,forceSend:!1,isInit:!1,isInitForce:!1,isInSend:!1}}},webhookSettings:{run:!0,object:"user",scope:"all"},saveToDictionary:function(){this.settings.user.sessionId&&this.settings.dictionary.user.addElement("sessionId",this.settings.user.sessionId);let t=e.extend(!0,{},this.settings.user.sessionInfo);delete t.connectorInfo,this.settings.dictionary.user.addElement("sessionInfo",JSON.stringify(t)),this.settings.dictionary.user.addElement("connectorInfo",JSON.stringify(this.settings.general.connectorInfo)),this.settings.dictionary.user.addElement("segmentInfo",JSON.stringify(this.settings.user.segmentInfo)),this.settings.dictionary.user.addElement("segments",JSON.stringify(this.settings.user.segmentInfo.segments)),this.settings.dictionary.user.addElement("lastSend",JSON.stringify(this.settings.general.lastSend)),this.settings.dictionary.user.addElement("ipv4",JSON.stringify(this.settings.user.ipv4)),this.settings.dictionary.user.addElement("ipv6",JSON.stringify(this.settings.user.ipv6)),this.settings.dictionary.user.addElement("uuid",JSON.stringify(this.settings.user.uuid)),this.settings.dictionary.user.addElement("lastSendIp",this.settings.general.ipDataLastSend),this.settings.dictionary.user.mergeToGlobal()},getAllSettings:function(){return this.settings},getScope:function(){return this},hasData:function(t){return!!e.getObjectPath(this.settings,t,!1)},getData:function(t,s){return e.isUndefined(s)&&(s=!1),e.getObjectPath(this.settings,t,s)},setData:function(t,s){return e.setObjectPath(this.settings,t,s),this.saveToDictionary(),this},setApiKey:function(t){e.setObjectPath(this.settings,"user.apiKey",t),e.setObjectPath(this.settings,"general.apiKey",t);let s=this.chains.init;return e.isUndefined(s)||0===s.list().length||(s.setScope(this),s.setData(this.settings),s.fire()),this},getApiKey:function(){return this.settings.general.apiKey},initIpData:function(){return this.isIpDataExpired()&&this.refreshIpData(),this},refreshIpData:function(s){e.isUndefined(s)&&(s="ipv4");let a=t,n=t.settings,i=e.extend(!0,{},{klevu_uuid:a.getIpDataUser()}),r={context:{type:s}};return n.general.scope.userObject=a,r.scope=n.general.scope,r.context.requestObject={url:e.getGlobalSetting("url."+s,"https://"+s+"check.ksearchnet.com/"),type:"FETCH",method:"POST",mimeType:"application/json; charset=UTF-8",contentType:"application/json; charset=utf-8",dataType:"json",crossDomain:!0,data:JSON.stringify(e.clean(i)),success:function(){let t,s,a,n;1===arguments.length?(t=arguments[0].responseObj.data,s=arguments[0].requestDetails,a=arguments[0].status,n=arguments[0].isSuccess):(t=arguments[0],s=arguments[1],a=arguments[2],n=arguments[3]),n&&(e.isUndefined(t.ip_address)||s.scope.userObject.setData("user."+s.context.type,t.ip_address),e.isUndefined(t.klevu_uuid)||s.scope.userObject.setData("user.uuid",t.klevu_uuid)),s.scope.userObject.setData("general.ipDataLastSend",e.time.timestamp()),"ipv4"===s.context.type&&s.scope.userObject.refreshIpData("ipv6")},error:function(){let t,s,a;1===arguments.length?(t=arguments[0].requestDetails,s=arguments[0].status,a=arguments[0].isSuccess):(t=arguments[0],s=arguments[1],a=arguments[2]),t.scope.userObject.setData("general.ipDataLastSend",e.time.timestamp()),"ipv4"===t.context.type&&t.scope.userObject.refreshIpData("ipv6")}},r.context.requestDetails=e.extend(!0,{},r),e.request(r.context.requestObject,r.context.requestDetails),this},getIpData:function(){return{ipv4:this.settings.user.ipv4,ipv6:this.settings.user.ipv6,uuid:this.getIpDataUser()}},getIpDataUser:function(){return this.settings.user.uuid},isIpDataExpired:function(){let t=e.time.timestamp();return!this.settings.general.ipDataLastSend||t-parseInt(this.settings.general.ipDataLastSend)>e.getGlobalSetting("user.ipDataRefresh",3600)},setWebhookSettings:function(t){return e.event.webhook.helpers.setWebhookSettingsForScope(t,this),this},getWebhookSettings:function(){return e.event.webhook.helpers.getWebhookSettingsForScope(this)},addConnector:function(s,a){let n=t.getData("general.connectorInfo."+s,!1),i=!1;n?e.each(a,(function(t,s){(e.isUndefined(n[t])||n[t]!=s)&&(i=!0)})):i=!0,t.setData("general.connectorInfo."+s,a),i&&e.user.fetchSessionForce()},getSegments:function(){let e=t.getData("user.segmentInfo.segments",[]);return 0!==e.length&&e},getSessionId:function(){return t.getData("user.sessionId",!1)},fetchSession:function(){if(!t.getApiKey())return void e.support.hook(["core.logger"],(function(){e.logger.log("user.core","warn","Request can not be made as apiKey is not set")}));if(!t.getData("general.canSend",!1))return void e.support.hook(["core.logger"],(function(){e.logger.log("user.core","warn","Request can not be made as request is stopped")}));e.event.webhook.helpers.fireEventForScope({webhookSettings:t.webhookSettings,name:"fetchSession",action:"before",data:t.getAllSettings(),scope:t});let s=t.chains.request;e.isUndefined(s)||0===s.list().length||(s.setScope(t),s.setData(t.settings),s.fire())},fetchSessionForce:function(){return t.setData("general.flags.forceSend",!0),t.fetchSession()},chains:e.constructors.get("user").chains};e.event.webhook.helpers.fireEventForScope({webhookSettings:t.webhookSettings,name:"mainObject",action:"beforeBuild",data:t.getAllSettings(),scope:t});let s=t.chains.build;return e.isUndefined(s)||0===s.list().length||(s.setScope(t),s.setData(t.settings),s.fire()),e.event.webhook.helpers.fireEventForScope({webhookSettings:t.webhookSettings,name:"mainObject",action:"afterBuild",data:t.getAllSettings(),scope:t}),t},chains:{build:e.chain({stopOnFalse:!0,webhook:{name:"chains.build"}}),init:e.chain({stopOnFalse:!0,webhook:{name:"chains.init"}}),request:e.chain({stopOnFalse:!0,webhook:{name:"chains.request"}}),response:e.chain({stopOnFalse:!0,webhook:{name:"chains.receive"}})}}),e.constructors.get("user").chains.init.add({name:"validateReInit",fire:function(e,t){if(!e.general.flags.isInitForce&&e.general.flags.isInit)return!1}}),e.constructors.get("user").chains.init.add({name:"initDictionary",fire:function(t,s){t.dictionary.user=e.dictionary("user_"+t.general.apiKey),t.dictionary.user.setDataProtection(!0),t.dictionary.user.setStorage("local"),t.dictionary.user.mergeFromGlobal()}}),e.constructors.get("user").chains.init.add({name:"loadDictionaryData",fire:function(e,t){e.user.sessionId="sessionId"!==e.dictionary.user.getElement("sessionId")&&e.dictionary.user.getElement("sessionId"),e.user.sessionInfo="sessionInfo"!==e.dictionary.user.getElement("sessionInfo")?JSON.parse(e.dictionary.user.getElement("sessionInfo")):{connectorInfo:[]},e.general.connectorInfo="connectorInfo"!==e.dictionary.user.getElement("connectorInfo")?JSON.parse(e.dictionary.user.getElement("connectorInfo")):{},e.user.segmentInfo.segments="segments"!==e.dictionary.user.getElement("segments")?JSON.parse(e.dictionary.user.getElement("segments")):[],e.user.segmentInfo="segmentInfo"!==e.dictionary.user.getElement("segmentInfo")?JSON.parse(e.dictionary.user.getElement("segmentInfo")):{segments:e.user.segmentInfo.segments},e.general.lastSend="lastSend"!==e.dictionary.user.getElement("lastSend")?parseInt(e.dictionary.user.getElement("lastSend")):0,e.user.ipv4="ipv4"!==e.dictionary.user.getElement("ipv4")&&JSON.parse(e.dictionary.user.getElement("ipv4")),e.user.ipv6="ipv6"!==e.dictionary.user.getElement("ipv6")&&JSON.parse(e.dictionary.user.getElement("ipv6")),e.user.uuid="uuid"!==e.dictionary.user.getElement("uuid")&&JSON.parse(e.dictionary.user.getElement("uuid")),e.general.ipDataLastSend="lastSendIp"!==e.dictionary.user.getElement("lastSendIp")?parseInt(e.dictionary.user.getElement("lastSendIp")):0}}),e.constructors.get("user").chains.init.add({name:"checkDataProtection",fire:function(t,s){e.dataProtection.dataCanBeTracked()?s.setData("general.canSend",!0):(e.support.hook(["core.logger"],(function(){e.logger.log("user.core","warn","Data protection enforced , can not read data, setting the request to be stopped")})),s.setData("general.canSend",!1))}}),e.constructors.get("user").chains.init.add({name:"setInitState",fire:function(e,t){e.general.flags.isInit=!0}}),e.constructors.get("user").chains.init.add({name:"fetchSession",fire:function(e,t){t.fetchSession()}}),e.constructors.get("user").chains.init.add({name:"fetchIpData",fire:function(e,t){t.initIpData()}}),e.constructors.get("user").chains.request.add({name:"checkIfOutOfTimeout",fire:function(t,s){if(e.time.timestamp()-parseInt(t.general.lastSend)<e.getGlobalSetting("user.sessionRefresh",300)&&!t.general.flags.forceSend)return e.support.hook(["core.logger"],(function(){e.logger.log("user.core","info","Request is still valid")})),!1}}),e.constructors.get("user").chains.request.add({name:"validateIfOnlyOneSend",fire:function(t,s){if(t.general.flags.isInSend)return setTimeout(e.user.fetchSession,1e3),!1;t.general.flags.isInSend=!0}}),e.constructors.get("user").chains.request.add({name:"moveConnectorInfo",fire:function(t,s){t.user.sessionInfo.connectorInfo=[],e.each(t.general.connectorInfo,(function(e,s){t.user.sessionInfo.connectorInfo.push(s)}))}}),e.constructors.get("user").chains.request.add({name:"resetData",fire:function(e,t){e.request={context:{forceSend:t.settings.general.flags.forceSend}},window.fetch?e.request.method="FETCH":e.request.method="AJAX",e.general.scope.userObject=t,e.request.scope=e.general.scope}}),e.constructors.get("user").chains.request.add({name:"buildPayload",fire:function(t,s){let a=e.extend(!0,{},t.user);e.setObjectPath(a,"segmentInfo",{}),t.request.context.requestObject={url:e.getGlobalSetting("url.userSession","https://visitor.service.ksearchnet.com/public/1.0/")+t.general.apiKey+"/session",type:t.request.method,method:"POST",mimeType:"application/json; charset=UTF-8",contentType:"application/json; charset=utf-8",dataType:"json",crossDomain:!0,data:JSON.stringify(e.clean(a)),success:function(){let t,s,a,n;1===arguments.length?(t=arguments[0].responseObj.data,s=arguments[0].requestDetails,a=arguments[0].status,n=arguments[0].isSuccess):(t=arguments[0],s=arguments[1],a=arguments[2],n=arguments[3]);var i=e.getObjectPath(s.scope.userObject,"chains.response");e.isUndefined(i)||0===i.list().length||(i.setScope(s.scope.userObject),e.setObjectPath(s,"response.data",t),e.setObjectPath(s,"context.status",a),e.setObjectPath(s,"context.isSuccess",n),i.setData(s),i.fire())},error:function(){let t,s,a;1===arguments.length?(t=arguments[0].requestDetails,s=arguments[0].status,a=arguments[0].isSuccess):(t=arguments[0],s=arguments[1],a=arguments[2]);var n=e.getObjectPath(t.scope.userObject,"chains.response");e.isUndefined(n)||0===n.list().length||(n.setScope(t.scope.userObject),e.setObjectPath(t,"response.data",{}),e.setObjectPath(t,"context.status",s),e.setObjectPath(t,"context.isSuccess",a),n.setData(t),n.fire())}},t.request.context.requestDetails=e.extend(!0,{},t.request)}}),e.constructors.get("user").chains.request.add({name:"makeRequest",fire:function(t,s){e.request(t.request.context.requestObject,t.request.context.requestDetails)}}),e.constructors.get("user").chains.response.add({name:"checkResponseCode",fire:function(e,t){if(!e.context.isSuccess)return t.settings.general.flags.isInSend=!1,!1}}),e.constructors.get("user").chains.response.add({name:"saveReturnData",fire:function(t,s){e.isUndefined(t.response.data.sessionId)||(s.setData("user.sessionId",t.response.data.sessionId),e.isUndefined(t.response.data.segmentInfo)||s.setData("user.segmentInfo",t.response.data.segmentInfo),e.isUndefined(t.response.data.segmentInfo)||e.isUndefined(t.response.data.segmentInfo.ttl)?s.setData("general.lastSend",e.time.timestamp()):s.setData("general.lastSend",e.time.timestamp()-e.getGlobalSetting("user.sessionRefresh",300)+parseInt(t.response.data.segmentInfo.ttl)))}}),e.constructors.get("user").chains.response.add({name:"saveToDictionary",fire:function(e,t){t.saveToDictionary()}}),e.constructors.get("user").chains.response.add({name:"markAsComplete",fire:function(e,t){t.settings.general.flags.isInSend=!1,e.context.forceSend&&(t.settings.general.flags.forceSend=!1)}}),e.constructors.get("user").chains.response.add({name:"sendWebhookAfterSessionCall",fire:function(t,s){e.event.webhook.helpers.fireEventForScope({webhookSettings:s.webhookSettings,name:"fetchSession",action:"after",data:s.getAllSettings(),scope:s})}}))})),e.support.hook(["user"],(function(){e.settings.chains.initChain.add({name:"userSession",fire:function(t,s){var a=e.getGlobalSetting("search.apiKey",e.getGlobalSetting("recs.apiKey",e.getGlobalSetting("global.apiKey"))),n=e.dataProtection.dataCanBeTracked();if(!e.isUndefined(a)&&n){var i=e.getGlobalSetting("powerUp.userSession");if(!e.isUndefined(i)&&!1===i)return;if(e.getObjectPath(t,"flags.userSession.build",!1))return;e.setObjectPath(t,"flags.userSession.build",!0),e.user.setApiKey(a)}}})})),e.support.isActive("user")||(e.extend({user:e.constructors.construct("user")}),e.support.register({name:"user",loaded:!0,active:!0,dependency:["core.lib"]}))}(klevu);</script><style>lite-youtube{background-color:#000;position:relative;display:block;contain:content;background-position:center center;background-size:cover;cursor:pointer;max-width:720px}lite-youtube::before{content:"";display:block;position:absolute;top:0;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);background-position:top;background-repeat:repeat-x;height:60px;padding-bottom:50px;width:100%;transition:all .2s cubic-bezier(0,0,.2,1)}lite-youtube::after{content:"";display:block;padding-bottom:calc(100% / (16 / 9))}lite-youtube>iframe{width:100%;height:100%;position:absolute;top:0;left:0;border:0}lite-youtube>.lty-playbtn{width:68px;height:48px;position:absolute;cursor:pointer;transform:translate3d(-50%,-50%,0);top:50%;left:50%;z-index:1;background-color:transparent;background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 68 48"><path fill="%23f00" fill-opacity="0.8" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path><path d="M 45,24 27,14 27,34" fill="%23fff"></path></svg>');filter:grayscale(100%);transition:filter .1s cubic-bezier(0,0,.2,1);border:none}lite-youtube .lty-playbtn:focus,lite-youtube:hover>.lty-playbtn{filter:none}lite-youtube.lyt-activated{cursor:unset}lite-youtube.lyt-activated::before,lite-youtube.lyt-activated>.lty-playbtn{opacity:0;pointer-events:none}.lyt-visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}</style><style type="text/css" id="klevu-quick-search-theme-styles">[ku-container] a,[ku-container] p,[ku-container] div,[ku-container] ul li{font-family:inherit;font-size:13px;line-height:130%;text-decoration:none;font-weight:normal}[ku-container] *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;outline:0;-webkit-font-smoothing:antialiased;vertical-align:top}.kuBase{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container],[ku-block]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role="main"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%;width:1200px;margin:0 auto}[ku-container][data-container-role="header"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role="header"] [ku-block][data-container-role="subPanel"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role="header"] [ku-block][data-container-role="banner"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role="header"] [ku-block][data-container-role="navigation"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}.kuResultContent{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}.kuResultContent [ku-container]:empty{display:none!important;width:0!important;padding:0;margin:0;overflow:hidden}[ku-container][data-container-role="content"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%;display:table;width:100%}[ku-container][data-container-role="content"] [ku-block]:empty{display:none!important;width:0!important;padding:0;margin:0;overflow:hidden}[ku-block][ku-empty],[ku-container][ku-empty]{display:none!important;width:0!important;padding:0!important;height:0!important;margin:0!important;overflow:hidden!important}[ku-container][data-container-role="left"]{display:table-cell;width:22%;height:auto;max-width:275px}[ku-container][data-container-role="right"]{display:table-cell;width:22%;height:auto;max-width:275px}[ku-container][data-container-role="content"] [ku-container][data-container-role="results"]{display:table-cell;width:auto;height:auto}[ku-container][data-container-role="content"]:after{content:'';display:block;clear:both}[ku-block]:empty{display:none!important;width:0!important;height:0!important;min-height:0!important;padding:0;margin:0;overflow:hidden}@media only screen and (max-width:1100px){.kuResults ul li{width:33%;padding:5px}.kuFilterBox .kuFilterNames ul li a span.kufacet-text{max-width:60%;width:60%}}@media only screen and (max-width:991px){[ku-container][data-container-role="left"],[ku-container][data-container-role="right"]{width:32%}}@media only screen and (max-width:767px){[ku-container][data-container-role="content"],[ku-container][data-container-role="content"] [ku-container][data-container-role="results"],[ku-container][data-container-role="left"],[ku-container][data-container-role="right"]{display:block;width:100%;height:auto}.kuContainer .kuTabs a{display:inline-block}.kuContainer .kuTabs a:hover{border-bottom:0 solid #ddd;text-decoration:none;background:#f5f5f5}.kuContainer a.kuTabSelected{border-bottom:0 solid #ddd;background:#f5f5f5}.kuLandingNoResultsMessage{font-size:15px;line-height:1.2em;padding:10px 5%;text-align:center}.kuFilterBox{margin-bottom:5px;padding-bottom:10px;width:100%}}.klevu-stars-small-l2{height:13px;display:inline-block;vertical-align:bottom;background:transparent url(https://js.klevu.com/klevu-js-v1/img-1-1/star-gray.png) top left repeat-x;width:65px;margin-top:5px}.klevu-stars-small-l2 .klevu-rating-l2{background:transparent url(https://js.klevu.com/klevu-js-v1/img-1-1/star-yellow.png) top left repeat-x;height:13px;display:inline-block}.klevuRatingCount{display:inline-block;margin-top:3px;margin-left:1px}.kuQuickSearchFacetedLayout>div,.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled>div{width:100%!important;max-width:550px!important}.kuQuickSearchFacetedLayout [ku-container][data-container-role="left"],.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role="left"]{width:33%;padding-right:2%}.kuQuickSearchFacetedLayout [ku-container][data-container-role="right"],.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role="right"]{width:Calc(65%)}.kuQuickSearchFacetedLayout [ku-container][data-container-role="left"]{width:33%;padding-right:0}.kuQuickSearchFacetedLayout [ku-container][data-container-role="right"]{width:33%}.kuQuickSearchFacetedLayout .kuQuickResultsListContainer{position:relative;height:360px;overflow:auto}.kuQuickSearchFacetedLayout .kuPagination{padding:10px 20px;text-align:right}.kuQuickSearchFacetedLayout .kuPagination a{margin:0;position:relative;display:inline-block;padding-left:0;padding-right:10px;color:#333;cursor:pointer;text-decoration:none;border-right:1px solid #ddd;font-size:14px}.kuQuickSearchFacetedLayout .kuPagination a:hover{color:#333}.kuQuickSearchFacetedLayout .kuPagination a:last-child{border-right:0}.kuQuickSearchFacetedLayout .kuPagination a.kuCurrent{background:#fff;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;font-weight:bold}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct{width:32%!important;border-right:1px solid #e2e2e2;border-top:1px solid #e2e2e2;display:inline-block;float:left;min-height:200px}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct .klevu-desc-l2{display:none}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:hover{background-color:#f8f8f8}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:hover .klevuQuickAddtoCart{opacity:1;visibility:visible}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(1){border-top:0;border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(2){border-top:0;border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(3){border-top:0;border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-last-child(1){border-bottom:1px solid #e2e2e2}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-last-child(2){border-bottom:1px solid #e2e2e2}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-last-child(3){border-bottom:1px solid #e2e2e2}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(3n+3){border-right:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuResultsBlock .klevuQuickSearchResults .klevuProductItemTop{width:100%;float:none}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuResultsBlock .klevuQuickSearchResults .klevuProductItemBottom{width:100%;float:none}.kuQuickSearchFacetedLayout [data-result-view='grid'].klevuQuickSearchResults .klevuQuickAddtoCart{margin:0 auto;position:absolute;display:inline-block;bottom:auto;width:auto;top:25%;left:0;width:100%;text-align:center;opacity:0;visibility:hidden}.kuQuickSearchFacetedLayout .klevuResultsBlock [data-result-view='grid'].klevuQuickSearchResults .klevuProductItemBottom{width:100%;float:none}.kuQuickSearchFacetedLayout .klevuResultsBlock [data-result-view='grid'].klevuQuickSearchResults .klevuProductItemTop{width:100%;float:none}.kuQuickSearchFacetedLayoutRightSideFilters .kuPagination{text-align:left}.klevuTarget.klevu-fluid.kuQuickSearchFacetedLayout>div{min-width:54%}@media only screen and (min-width:768px) and (max-width:991px){.klevuTarget.klevu-fluid.kuQuickSearchFacetedLayout>div{min-width:66%;max-width:100%}.kuQuickSearchFacetedLayout [ku-container][data-container-role="left"]{width:38%}.kuQuickSearchFacetedLayout [ku-container][data-container-role="right"]{width:38%}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct{width:49%!important;border-top:0;min-height:230px}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(3){border-top:1px solid #e2e2e2}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-last-child(1){border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(2n+2){border-right:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(odd){border-right:1px solid #e2e2e2;border-top:0}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role="left"]{width:38%;padding-right:2%}}@media only screen and (max-width:767px){.kuQuickSearchFacetedLayout [ku-container][data-container-role="left"]{width:100%;padding-right:0;max-width:100%}.kuQuickSearchFacetedLayout [ku-container][data-container-role="right"]{width:100%;padding-right:0;max-width:100%}.kuQuickSearchFacetedLayout .kuFilterBox .kuFilterHead{font-weight:bold}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct{width:49%!important;border-top:0;min-height:230px}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(3){border-top:1px solid #e2e2e2}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-last-child(1){border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(2n+2){border-right:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:nth-child(odd){border-right:1px solid #e2e2e2;border-top:0}.kuQuickSearchFacetedLayout [data-result-view='grid'] .klevuProduct:hover .klevuQuickAddtoCart{opacity:1;visibility:visible}.kuQuickSearchFacetedLayout [data-result-view='grid'].klevuQuickSearchResults .klevuQuickAddtoCart{position:relative;display:inline-block;bottom:15px;width:auto;top:auto;left:0;width:100%;text-align:center;opacity:1;visibility:visible;margin-top:10px}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role="left"]{width:100%;padding-right:0;max-width:100%}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role="right"]{width:100%;padding-right:0;max-width:100%}}.kuCarousel{box-sizing:border-box;position:relative;width:100%;height:210px}.kuCarousel *:before{box-sizing:border-box}.kuCarousel *:after{box-sizing:border-box}.kuCarousel .kuCarousel-content{position:relative;overflow:hidden;transition:width .4s;height:100%}.kuCarousel .kuSlide{height:100%;position:absolute;z-index:1;transition:left .4s cubic-bezier(0.47,0.13,0.15,0.89)}.kuCarousel .nav{position:absolute;top:50%;margin-top:-8%;background-color:#FFF;width:24px;height:24px;z-index:2;cursor:pointer;border-radius:50%;border:0;outline:0;color:white;-webkit-user-select:none;background-position:center;background-repeat:no-repeat;background-size:100%;display:block}.kuCarousel .nav-left{left:-5px;background-image:url(https://js.klevu.com/klevu-js-v1/img-1-1/icon-prev.png)}.kuCarousel .nav-right{right:-5px;background-image:url(https://js.klevu.com/klevu-js-v1/img-1-1/icon-next.png)}.kuCarousel .kuCarousel-arrow-icon-left{margin-left:5px;margin-top:2px}.kuCarousel .kuCarousel-arrow-icon-right{margin-left:7px;margin-top:2px}.kuFilterNames{height:118px;overflow:hidden}.kuFilterNames ul{margin:0;padding:0}.kuFilterNames ul li{list-style:none;text-align:left;width:100%;display:inline-block;margin:0;padding:0}.kuFilterNames ul li a{display:block;position:relative;overflow:hidden;padding:0;text-decoration:none;cursor:pointer;font-style:normal;color:#333;background:0;margin:2px;margin-left:5px}.kuFilterNames ul li a span{display:inline-block;vertical-align:middle}.kuFilterNames ul li a span.kufacet-text{max-width:74%;width:74%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;float:left}.kuFilterNames ul li a span.kuFilterIcon{float:left;margin:0;padding:0;font-weight:normal}.kuFilterNames ul li a:hover{cursor:pointer}.kuFilterNames ul li a:hover span.kuFilterIcon:before{background:#fff}.kuFilterNames ul li a:hover span.kuFilterIcon:after{content:'';position:absolute;width:8px;height:8px;background:#333;top:5px;left:5px;border:0;margin-top:0;margin-left:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);border-radius:50%}.kuFilterNames ul li a span.kuFilterTotal{float:right;text-align:right;margin:0;padding:0}.kuFilterNames ul li a span.kuFilterCancel{float:right;text-align:right;margin:0;padding:0}.kuFilterNames ul li .klevuFacetStars{height:14px;display:inline-block;vertical-align:bottom;background:transparent url(https://js.klevu.com/klevu-js-v1/img-1-1/star-gray.png) top left repeat-x;width:65px}.kuFilterNames ul li .klevuFacetStars .klevuFacetRating{background:transparent url(https://js.klevu.com/klevu-js-v1/img-1-1/star-yellow.png) top left repeat-x;height:14px;display:inline-block}.kuFilterNames ul li.kuSelected a{color:#333}.kuFilterNames ul li.kuSelected span.kuFilterIcon:before{background:#fff}.kuFilterNames ul li.kuSelected span.kuFilterIcon:after{content:'';position:absolute;width:8px;height:8px;background:#333;top:5px;left:5px;border:0;margin-top:0;margin-left:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);border-radius:50%;border-color:#333}.kuFilterNames ul li.kuSelected:hover span.kuFilterIcon:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;border-color:#333}.kuFilterNames.kuFilterShowAll{height:auto;overflow:unset}.kuFilterHead{font-family:inherit;font-size:13px;font-weight:bold;padding:5px;color:#333;display:block;line-height:1.8;text-transform:uppercase;border-bottom:1px solid #eee;background:0;margin-bottom:15px;margin-top:0;position:relative;cursor:pointer;transition:all .3s ease}.kuShowOpt{padding:0 5px;cursor:pointer;position:absolute;bottom:-5px}.kuShowOpt a{color:#333;text-decoration:none}.kuHideOpt a{color:#333;text-decoration:none}.kuFilterDot{height:5px;width:5px;background-color:#333;border-radius:50%;display:inline-block;margin:2px}.kuFilterIcon:before{content:'';border:2px solid #ddd;border-radius:50%;margin:0;margin-right:6px;height:18px;width:18px;display:inline-block;color:#ddd;position:relative;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;transition:background 200ms;-webkit-transition:background 200ms;-moz-transition:background 200ms;-webkit-transition:border-color 200ms;-moz-transition:border-color 200ms;transition:border-color 200ms}.kuMulticheck .kuFilterIcon:before{content:'';border:1px solid #ddd;border-radius:0;margin:0;margin-right:8px;height:18px;width:18px;display:inline-block;color:#ddd;position:relative}.kuMulticheck .kuFilterNames ul li a:hover span.kuFilterIcon:before{background:#fff;border:1px solid #333}.kuMulticheck .kuFilterNames ul li a:hover span.kuFilterIcon:after{content:'';position:absolute;width:10px;height:5px;background:transparent;top:5px;left:4px;border:2px solid #333;border-top:0;border-right:0;border-radius:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.kuMulticheck .kuFilterNames ul li.kuSelected span.kuFilterIcon:before{background:#fff;border:1px solid #333}.kuMulticheck .kuFilterNames ul li.kuSelected span.kuFilterIcon:after{content:'';position:absolute;width:10px;height:5px;background:transparent;top:4px;left:4px;border:2px solid #ddd;border-top:0;border-right:0;border-radius:0;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.kuMulticheck .kuFilterNames ul li.kuSelected:hover span.kuFilterIcon:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;border-color:#333}.kuQuickSearchFacetedLayout .kuFilters,.kuSearchResultsPageContainer .kuFilters{padding:10px}.kuQuickSearchFacetedLayout .kuFilterBox .kuFilterNames ul li a span.kufacet-text,.kuSearchResultsPageContainer .kuFilterBox .kuFilterNames ul li a span.kufacet-text{max-width:70%;width:70%}.kuQuickSearchFacetedLayout [data-block-id="ku_quick_left_facets"]{background-color:#fff;overflow:auto;max-height:400px;text-align:left}.kuQuickSearchFacetedLayout [data-block-id="ku_quick_right_facets"]{background-color:#fff;overflow:auto;max-height:400px;text-align:left}.kuFilterBox{margin-bottom:12px;background:0;padding-bottom:12px;position:relative}.kuFilterBox .kuFilterHead{padding:5px 0;color:#333;display:block;text-transform:uppercase;border-bottom:1px solid #ddd;background:0;margin-bottom:0}.kuFilterBox .kuFilterNames{height:125px;overflow:hidden}.kuFilterBox .kuFilterNames ul{margin:0;padding:0}.kuFilterBox .kuFilterNames ul li{list-style:none;text-align:left;width:100%;display:inline-block;margin:0;padding:0}.kuFilterBox .kuFilterNames ul li a{display:block;position:relative;overflow:hidden;padding:0;text-decoration:none;cursor:pointer;color:#333;background:0;margin:2px 5px 2px 0}.kuFilterBox .kuFilterNames ul li a span{display:inline-block;vertical-align:middle}.kuFilterBox .kuFilterNames ul li a span.kufacet-text{max-width:75%;width:75%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;float:left}.kuFilterBox .kuFilterNames ul li a span.kuFilterIcon{float:left;margin:0;padding:0;font-weight:normal}.kuFilterBox .kuFilterNames ul li a:hover span.kuFilterIcon:before{background:#fff}.kuFilterBox .kuFilterNames ul li a:hover span.kuFilterIcon:after{content:"";position:absolute;width:8px;height:8px;top:5px;left:5px;border:0;margin-top:0;margin-left:0;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);border-radius:50%;background:#ddd}.kuFilterBox .kuFilterNames ul li.kuSelected a{color:#333}.kuFilterBox .kuFilterNames ul li.kuSelected span.kuFilterIcon:before{background:#fff}.kuFilterBox .kuFilterNames ul li.kuSelected span.kuFilterIcon:after{content:"";position:absolute;width:8px;height:8px;top:5px;left:5px;border:0;margin-top:0;margin-left:0;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-o-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);border-radius:50%;background:#ddd;border-color:#333!important}.kuFilterBox .kuFilterNames ul li.kuSelected:hover span.kuFilterIcon:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;border-color:#333}.kuFilterBox .kuFilterNames.sliderFilterNames{height:90px}.kuFilterBox .kuFilterIcon:before{content:"";border:2px solid #ccc;border-radius:50%;margin:0;margin-right:8px;height:18px;width:18px;display:inline-block;color:#ccc;position:relative;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;transition:background 200ms;-webkit-transition:background 200ms;-moz-transition:background 200ms;-webkit-transition:border-color 200ms;-moz-transition:border-color 200ms;transition:border-color 200ms}.kuFilterBox .kuFilterNames.kuFilterCollapse{height:0;overflow:hidden}.kuFilterBox .kuFilterNames.kuFilterCollapse .kuShowOpt{display:none}.kuFilterBox .kuFilterNames.kuFilterShowAll{height:auto;overflow:unset}.kuFilterBox .kuShowOpt{padding:0;cursor:pointer;position:absolute;bottom:-12px}.kuFilterBox .kuShowOpt a{color:#4d7abf;text-decoration:none}.kuFilterBox .kuShowOpt .kuFilterDot{height:5px;width:5px;background-color:#888;border-radius:50%;display:inline-block;margin:2px}.kuFilterBox .kuExpand{position:relative!important;transition:all .3s ease}.kuFilterBox .kuCollapse{position:relative!important;transition:all .3s ease}.kuFilterBox .kuFilterHead.kuCollapse{margin-bottom:10px}.kuFilterBox .kuFilterHead.kuCollapse::after{border-color:#333;border-image:none;border-style:solid;border-width:0 1px 1px 0;content:"";display:inline-block;padding:4px;position:absolute;right:12px;top:14px;-webkit-transform:rotate(-135deg);-moz-transform:rotate(-135deg);-o-transform:rotate(-135deg);-ms-transform:rotate(-135deg);transform:rotate(-135deg);transition:all .3s ease}.kuFilterBox .kuFilterHead.kuExpand::after{-moz-border-bottom-colors:none;-moz-border-left-colors:none;-moz-border-right-colors:none;-moz-border-top-colors:none;border-color:#333;border-image:none;border-style:solid;border-width:0 1px 1px 0;content:"";display:inline-block;padding:4px;position:absolute;right:12px;top:10px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);transition:all .3s ease 0s}.kuFilterBox.kuMulticheck .kuFilterIcon:before{content:"";border:1px solid #ccc;border-radius:0}.kuFilterBox.kuMulticheck .kuFilterNames ul li a:hover span.kuFilterIcon:after{width:10px;height:5px;background:transparent;top:4px;left:4px;border:2px solid #ddd;border-top:0;border-right:0;border-radius:0}.kuFilterBox.kuMulticheck .kuFilterNames ul li a:hover span.kuFilterIcon:before{background:#fff;border:1px solid #333}.kuFilterBox.kuMulticheck .kuFilterNames ul li.kuSelected span.kuFilterIcon:after{width:10px;height:5px;background:transparent;top:4px;left:4px;border:2px solid #ddd;border-top:0;border-right:0;border-radius:0}.kuFilterBox.kuMulticheck .kuFilterNames ul li.kuSelected span.kuFilterIcon:before{background:#fff;border:1px solid #333}.kuFilterBox.kuMulticheck .kuFilterNames ul li.kuSelected:hover span.kuFilterIcon:after{border-color:#333}/*! nouislider - 8.2.1 - 2015-12-02 21:43:15 */.noUi-target,.noUi-target *{-webkit-touch-callout:none;-webkit-user-select:none;-ms-touch-action:none;touch-action:none;-ms-user-select:none;-moz-user-select:none;-moz-box-sizing:border-box;box-sizing:border-box}.noUi-target{position:relative;direction:ltr}.noUi-base{width:100%;height:100%;position:relative;z-index:1}.noUi-origin{position:absolute;right:0;top:0;left:0;bottom:0}.noUi-handle{position:relative;z-index:1}.noUi-stacking .noUi-handle{z-index:10}.noUi-state-tap .noUi-origin{-webkit-transition:left .3s,top .3s;transition:left .3s,top .3s}.noUi-state-drag *{cursor:inherit!important}.noUi-base{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.noUi-horizontal{height:12px}.noUi-horizontal .noUi-handle{width:24px;height:24px;left:-17px;top:-7px;border-radius:100%}.noUi-vertical{width:18px}.noUi-vertical .noUi-handle{width:28px;height:34px;left:-6px;top:-17px}.noUi-background{background:#fafafa;box-shadow:inset 0 1px 1px #f0f0f0}.noUi-connect{background:#333;box-shadow:inset 0 0 3px rgba(51,51,51,0.45);-webkit-transition:background 450ms;transition:background 450ms}.noUi-origin{border-radius:2px}.noUi-target{border-radius:4px;border:1px solid #d3d3d3;box-shadow:inset 0 1px 1px #f0f0f0,0 3px 6px -5px #bbb}.noUi-target.noUi-connect{box-shadow:inset 0 0 3px rgba(51,51,51,0.45),0 3px 6px -5px #bbb}.noUi-draggable{cursor:w-resize}.noUi-vertical .noUi-draggable{cursor:n-resize}.noUi-handle{border:1px solid #d9d9d9;background:#fff;cursor:default;box-shadow:inset 0 0 1px #fff,inset 0 1px 7px #ebebeb,0 3px 6px -3px #bbb;cursor:pointer}.noUi-active{box-shadow:inset 0 0 1px #fff,inset 0 1px 7px #ddd,0 3px 6px -3px #bbb}.noUi-handle:after,.noUi-handle:before{content:"";display:block;position:absolute;height:14px;width:1px;background:#e4e1e1;left:8px;top:4px}.noUi-handle:after{left:12px}.noUi-vertical .noUi-handle:after,.noUi-vertical .noUi-handle:before{width:14px;height:1px;left:6px;top:14px}.noUi-vertical .noUi-handle:after{top:17px}[disabled] .noUi-connect,[disabled].noUi-connect{background:#b8b8b8}[disabled] .noUi-handle,[disabled].noUi-origin{cursor:not-allowed}.noUi-pips,.noUi-pips *{-moz-box-sizing:border-box;box-sizing:border-box}.noUi-pips{position:absolute;color:#999}.noUi-value{width:40px;position:absolute;text-align:center}.noUi-value-sub{color:#ccc;font-size:10px}.noUi-marker{position:absolute;background:#ccc}.noUi-marker-large,.noUi-marker-sub{background:#aaa}.noUi-pips-horizontal{padding:10px 0;height:50px;top:100%;left:0;width:100%}.noUi-value-horizontal{margin-left:-20px;padding-top:20px}.noUi-value-horizontal.noUi-value-sub{padding-top:15px}.noUi-marker-horizontal.noUi-marker{margin-left:-1px;width:2px;height:5px}.noUi-marker-horizontal.noUi-marker-sub{height:10px}.noUi-marker-horizontal.noUi-marker-large{height:15px}.noUi-pips-vertical{padding:0 10px;height:100%;top:0;left:100%}.noUi-value-vertical{width:15px;margin-left:20px;margin-top:-5px}.noUi-marker-vertical.noUi-marker{width:5px;height:2px;margin-top:-1px}.noUi-marker-vertical.noUi-marker-sub{width:10px}.noUi-marker-vertical.noUi-marker-large{width:15px}.noUi-tooltip{display:block;position:absolute;border:1px solid #d9d9d9;border-radius:3px;background:#fff;padding:5px;text-align:center;width:max-content}.noUi-horizontal .noUi-handle-lower .noUi-tooltip{bottom:-32px}.noUi-horizontal .noUi-handle-upper .noUi-tooltip{bottom:-32px;right:0}.noUi-vertical .noUi-handle-lower .noUi-tooltip{left:120%}.noUi-vertical .noUi-handle-upper .noUi-tooltip{right:120%}.klevu-fluid,.klevu-fluid *,.klevuTarget,.klevuTarget *,.kuContainer *{font-family:inherit}[ku-container] a,[ku-container] p,[ku-container] div,[ku-container] ul li{font-family:inherit;font-size:13px;line-height:130%;text-decoration:none;font-weight:normal}[ku-container] *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;outline:0;-webkit-font-smoothing:antialiased;vertical-align:top}.kuClearLeft{clear:left}.kuClearRight{clear:right}.kuClearBoth,.kuClearBoth:after{clear:both}.kuGreen{color:#009b46!important}.kuBlack{color:#333!important}.kuClipped{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical}.kuClippedOne{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}.kuClippedTwo{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.klevuTarget *{box-sizing:border-box}.kuBtn{display:inline-block;padding:5px 10px;cursor:pointer;font-size:11px!important;text-transform:uppercase;text-decoration:none;margin:5px 5px 5px 0;border-radius:3px;border:2px solid transparent;text-align:center}.kuBtnDark{background:#333;color:#fff;border-color:#333}.kuBtnLight{background:#ddd;color:#333;border-color:#dedede}.kuBtnDarkOutline{background:transparent;color:#333;border:2px solid #333}.kuBtnLightOutline{background:transparent;color:#ddd;border:2px solid #ddd}.kuBtnDark:hover,.kuBtnLight:hover,.kuBtnDarkOutline:hover,.kuBtnLightOutline:hover{background:#757575;color:#fff;border-color:#757575}.klevuTarget.klevu-fluid>div{position:absolute;z-index:20000000000;width:35%;max-width:450px;font-family:inherit;font-size:13px;background-color:#fff;border-radius:3px;color:#333}.kuBase{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container],[ku-block]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role="main"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%;width:1200px;margin:0 auto}[ku-container][data-container-role="header"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role="header"] [ku-block][data-container-role="subPanel"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role="header"] [ku-block][data-container-role="banner"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}[ku-container][data-container-role="header"] [ku-block][data-container-role="navigation"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}.kuResultContent{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%}.kuResultContent [ku-container]:empty{display:none!important;width:0!important;padding:0;margin:0;overflow:hidden}[ku-container][data-container-role="content"]{margin:0;padding:0;border:0;box-sizing:border-box;box-shadow:none;position:relative;max-width:100%;display:table;width:100%}[ku-container][data-container-role="content"] [ku-block]:empty{display:none!important;width:0!important;padding:0;margin:0;overflow:hidden}[ku-block][ku-empty],[ku-container][ku-empty]{display:none!important;width:0!important;padding:0!important;height:0!important;margin:0!important;overflow:hidden!important}.klevuQuickSearchingArea{width:100%;max-width:100%;border-radius:2px;-webkit-box-shadow:0 1px 5px rgba(50,50,50,0.4);-moz-box-shadow:0 1px 5px rgba(50,50,50,0.4);box-shadow:0 1px 5px rgba(50,50,50,0.4)}.klevuQuickSearchingArea .klevuLoader img{display:inline-block;width:22px!important}.klevuQuickSearchingArea span.klevuLoader img{margin-right:10px}.klevuQuickSearchingArea .kuFacetedLayoutMinCharText{padding:10px;line-height:35px}.klevuSuggestionsBlock{position:relative}.klevuSuggestionsBlock .klevuLoader{position:absolute;top:0;right:0;display:inline-block;padding:6px 10px}.klevuSuggestionHeading{text-transform:uppercase;padding:10px 5px}.klevuHeadingText{color:#333;display:inline-block}.klevuHeadingText a{float:right;margin-right:10px;color:#333;font-weight:normal;text-decoration:none}.klevuHeadingText a:hover{text-decoration:underline}.klevuAutoSuggestionsWrap{border-bottom:1px solid #ddd;padding:5px 10px}.klevuAutoSuggestionsWrap ul{margin:0;padding:0;text-align:left}.klevuAutoSuggestionsWrap ul li{display:block;list-style:none;margin:0;cursor:default;text-align:left}.klevuAutoSuggestionsWrap ul li a{display:block;padding:5px;line-height:14px;color:#333;text-decoration:none;font-size:13px}.klevuAutoSuggestionsWrap ul li:hover{background-color:#f5f5f5}.klevuAutoSuggestionsWrap ul li:focus{background-color:#f5f5f5}.klevuAutoSuggestionsWrap ul li ul li a{padding-left:35px}.klevuAutoSuggestionsWrap ul li strong{color:#333}.klevuAutoSuggestionsWrap ul li.klevu-hovered{background-color:#f5f5f5}.klevuResultsBlock .klevuSuggestionHeading{padding:12px 15px}.klevuResultsBlock .klevuProductsViewAll{display:inline-block;position:absolute;top:12px;right:12px}.klevuResultsBlock .klevuProductsViewAll a{color:#333;font-weight:normal;text-decoration:none;text-transform:uppercase;font-size:10px;cursor:pointer;border-bottom:2px solid #ccc;padding:2px 0}.klevuResultsBlock .klevuQuickSearchResults{position:relative;margin:0;padding:0;box-sizing:border-box}.klevuResultsBlock .klevuQuickSearchResults ul{margin:0;padding-left:0;text-align:left}.klevuResultsBlock .klevuQuickSearchResults ul li{display:block;width:100%;height:auto;text-align:left;position:relative;border-bottom:1px solid #ddd;margin-bottom:auto}.klevuResultsBlock .klevuQuickSearchResults ul li a.klevuQuickProductInnerBlock{text-decoration:none;color:#333;outline:0;display:block;padding:8px;height:auto;line-height:20px}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickProductDescBlock{float:left;width:100%;margin-left:8px}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickProductName{font-weight:bold;color:#333;word-wrap:break-word}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickPriceGreyText{font-weight:normal!important;color:#393939!important;font-size:11px!important}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickProductDesc{color:#333}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickSalePrice{font-weight:bold;margin-bottom:5px;color:#333}.klevuResultsBlock .klevuQuickSearchResults ul li .klevuQuickOrigPrice{margin-right:5px;text-decoration:line-through;color:#333}.klevuResultsBlock .klevuQuickSearchResults ul li:hover{background-color:#f5f5f5}.klevuResultsBlock .klevuQuickSearchResults ul li:hover .klevuQuickSearchResults ul li div{color:#fff!important}.klevuResultsBlock .klevuQuickSearchResults ul li:focus{background-color:#f5f5f5}.klevuResultsBlock .klevuQuickSearchResults ul li:focus .klevuQuickSearchResults ul li div{color:#fff!important}.klevuResultsBlock .klevuQuickSearchResults .klevuProductItemTop{margin:0;box-sizing:border-box;float:left;padding:5px;position:relative;width:20%}.klevuResultsBlock .klevuQuickSearchResults .klevuProductItemBottom{margin:0;box-sizing:border-box;padding:5px;position:relative;min-height:60px;float:left;width:80%}.klevuResultsBlock .klevuQuickSearchResults .klevuProductItemBottom .klevu-desc-l2{color:#8a8a8a;font-size:13px}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickImgWrap{float:none;overflow:hidden;width:100%!important;height:70px!important;text-align:center}.klevuResultsBlock .klevuQuickSearchResults img{max-width:100%!important;max-height:100%!important;width:auto;height:auto;border:0;outline:0;display:inline-block;margin:0 auto;opacity:1}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickDiscountBadge{background:#ffcc01;padding:0 5px;color:#333;font-size:9px;position:absolute;top:6px;left:4px}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickDiscountBadge strong{color:#333}.klevuResultsBlock .klevuQuickNoResults{text-align:center;font-size:13px;padding:0}.klevuResultsBlock .klevuQuickNoResults .klevuQuickNoResultsInner{padding:15px;margin:0}.klevuResultsBlock .klevuQuickNoResultsMessage{background:transparent;font-size:13px;padding:20px;text-align:center;border:0}@media only screen and (max-width:1024px){.klevuTarget.klevu-fluid>div{width:50%}.klevuQuickSearchResults .klevuQuickImgWrap{height:55px!important}}@media only screen and (max-width:767px){.klevuTarget.klevu-fluid>div{max-width:400px;width:70%}}@media only screen and (max-width:480px){.klevuTarget.klevu-fluid>div{width:98%;left:1%!important}.klevu-fluid .klevuQuickSearchResults ul li .klevuQuickProductDesc{display:none}}@media only screen and (max-width:420px){.klevuTarget.klevu-fluid>div{max-width:100%}}.searchRequestLoading .klevuQuickSearchingArea{opacity:.6;pointer-events:none}.searchRequestLoading .klevuQuickSearchingArea::after{content:url("https://js.klevu.com/klevu-js-v1/img/klevu-loader.GIF");position:absolute;margin-left:45%;top:12px}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer [ku-container][data-container-role="left"]{width:100%;max-width:100%}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer .kuPopularSearchesBlock{margin-bottom:8px}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer .kuRecentSearchesBlock{margin-bottom:8px}.kuRecommendationSlider{display:none}.kuRecommendationSlider .klevuProductItemTop .klevuQuickImgWrap{float:none;overflow:hidden;width:100%!important;height:155px!important;text-align:center;margin:0 auto;position:relative;box-sizing:border-box;padding:0;border:1px solid #eee;max-height:155px!important}.kuEmptySearchBox.kuPersonalizedSearchRecsEnabled .kuRecommendationSlider{display:block}.kuSearchPersonalizationsContainer{height:40px}.kuSearchPersonalizationsContainer *{visibility:hidden}.kuEmptySearchBox .kuSearchPersonalizationsContainer{height:auto}.kuEmptySearchBox .kuSearchPersonalizationsContainer *{visibility:unset}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .klevuQuickSearchingArea{padding:6px 9px}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .klevuProductItemTop{width:100%;display:block;float:none}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .klevuProductItemBottom{width:100%;display:block;float:none}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .klevuResultsBlock .klevuSuggestionHeading{padding:10px 3px}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .klevuResultsBlock .klevuProductItemBottom{font-size:12px;color:#666}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .kuRecentSearchTerms{border:0}.kuEmptySearchBox.klevuTarget.kuPersonalizedSearchRecsEnabled .kuPopularSearchTerms{border:0}@media only screen and (max-width:767px){.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role="left"]{width:100%;padding-right:0}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled [ku-container][data-container-role="right"]{width:100%;padding-right:0}.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled>div{max-width:85%}}.klevuTarget.klevu-fluid.kuEmptySearchBox>div{min-width:38%!important}.kuDropdown.kuQuickFacetedLayoutSort{display:inline-block;float:right;min-width:75px;padding-top:10px;text-align:center}.klevuResultsBlock .klevuQuickSearchResults ul:before{content:'';width:100%;display:block;height:0;background:0}.kuQuickSearchResultsContainer .kuResultsHeadingTitleContainer{padding:8px 10px;border-bottom:1px solid #eee}.klevu-banner-ad{clear:both;text-align:center;width:100%;padding:8px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.klevu-banner-ad img{display:inline-block;width:auto;max-width:100%;max-height:100%}.kuPopularSearchTerms ul{margin:0;padding:0;text-align:left}.kuPopularSearchTerms li{display:block;list-style:none;margin:0;text-transform:capitalize;cursor:default;text-align:left}.kuPopularSearchTerms li a{display:block;padding:5px;line-height:14px;color:#333;text-decoration:none;font-size:13px}.kuPopularSearchTerms li:hover{background-color:#f5f5f5}.kuRecentSearchTerms ul{margin:0;padding:0;text-align:left}.kuRecentSearchTerms li{display:block;list-style:none;margin:0;text-transform:capitalize;cursor:default;text-align:left}.kuRecentSearchTerms li a{display:block;padding:5px;line-height:14px;color:#333;text-decoration:none;font-size:13px}.kuRecentSearchTerms li:hover{background-color:#f5f5f5}.kuQuickSearchNoRecordFound{text-align:center;margin-top:4%;margin-bottom:4%;color:#333;font-size:13px;background:#FFF;display:block}.kuQuickSearchNoRecordFound .klevuQuickPriceGreyText{font-weight:normal!important;color:#393939!important;font-size:11px!important}.kuQuickSearchNoRecordFound .kuQuickNoResults{max-width:90%;margin:auto;text-align:justify}.kuQuickSearchNoRecordFound .kuQuickNoResultsMessage{display:block;text-align:center;line-height:14px;color:#333;text-decoration:none;font-size:13px}.kuQuickSearchNoRecordFound .kuDividerLine{margin:10px 0;border-bottom:#ccc 1px solid;width:100%}.kuQuickSearchNoRecordFound .klevu-no-results-banner-ad-quick{clear:both;text-align:center;width:100%;padding:8px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.kuQuickSearchNoRecordFound .klevu-no-results-banner-ad-quick img{display:inline-block;width:auto;max-width:100%;max-height:100%}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuPopularProductsViewAll{display:inline-block;position:absolute;top:12px;right:12px}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchHeading{text-transform:uppercase;padding-bottom:10px;text-align:left}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuPopularProductsViewAll a{color:#333;font-weight:normal;text-decoration:none;text-transform:uppercase;font-size:10px;cursor:pointer;border-bottom:2px solid #CCC;padding:2px 0}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular{position:relative;margin:0;padding:0;box-sizing:border-box}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul{margin:0;padding-left:0;text-align:left}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li{display:block;width:100%;height:auto;text-align:left;position:relative;border-bottom:1px solid #ddd}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li a.klevuQuickPopularProductInnerBlock{text-decoration:none;color:#333;outline:0;display:block;padding:8px;height:auto;line-height:20px}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li .klevuQuickPopularProductDescBlock{float:left;width:100%;margin-left:8px}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li .klevuQuickProductName{font-weight:bold;color:#333;word-wrap:break-word}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li .klevuQuickProductDesc{color:#333}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li .klevuQuickSalePrice{font-weight:bold;margin-bottom:5px;color:#333}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li .klevuQuickOrigPrice{margin-left:5px;text-decoration:line-through;color:#333}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li:hover{background-color:#f5f5f5}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular ul li:hover .klevuQuickSearchNoResultsPopular ul li div{color:#fff!important}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuPopularProductItemTop{margin:0;box-sizing:border-box;float:left;padding:5px;position:relative;width:20%}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuPopularProductItemBottom{margin:0;box-sizing:border-box;padding:5px;position:relative;min-height:60px;float:left;width:80%}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuPopularProductItemBottom .klevu-desc-l2{color:#8a8a8a;font-size:13px}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuQuickImgWrap{float:none;overflow:hidden;width:100%!important;height:70px!important;text-align:center}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular img{max-width:100%!important;max-height:100%!important;width:auto;height:auto;border:0;outline:0;display:inline-block;margin:0 auto;opacity:1}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuQuickDiscountBadge{background:#ffcc01;padding:0 5px;color:#333;font-size:9px;position:absolute;top:6px;left:4px}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickSearchNoResultsPopular .klevuQuickDiscountBadge strong{color:#333}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickNoResults{text-align:center;font-size:13px;padding:0}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickNoResults .klevuQuickNoResultsInner{padding:15px;margin:0}.kuQuickSearchNoRecordFound .klevuNoResultsProductsBlock .klevuQuickNoResultsMessage{background:transparent;font-size:13px;padding:20px;text-align:center;border:0}.kuQuickSearchNoRecordFound .searchRequestLoading .klevuQuickSearchingArea{opacity:.6;pointer-events:none}.kuQuickSearchNoRecordFound .klevuPopularProductsHeading{text-align:left;padding:8px 15px;text-transform:uppercase}.kuQuickSearchNoRecordFound .kuNoResultsContainer{max-width:100%}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchesBlock{padding:10px}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchTerms ul{margin:0;padding:0 3px;text-align:left}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchTerms li{display:block;list-style:none;margin:0;text-transform:capitalize;cursor:pointer;text-align:left}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchTerms li:hover{background-color:#f5f5f5}.kuQuickSearchNoRecordFound .kuNoResultsPopularSearchTerms li a{display:block;padding:5px;line-height:14px;color:#333;text-decoration:none;font-size:13px}@media only screen and (max-width:1024px){.kuQuickSearchNoRecordFound .klevuTarget.klevu-fluid>div{width:50%}.kuQuickSearchNoRecordFound .klevuQuickSearchNoResultsPopular .klevuQuickImgWrap{height:55px!important}}@media only screen and (max-width:767px){.kuQuickSearchNoRecordFound .klevuTarget.klevu-fluid>div{max-width:400px;width:70%}}@media only screen and (max-width:480px){.kuQuickSearchNoRecordFound .klevuTarget.klevu-fluid>div{width:98%;left:1%!important}.kuQuickSearchNoRecordFound .klevu-fluid .klevuQuickSearchNoResultsPopular ul li .klevuQuickProductDesc{display:none}}@media only screen and (max-width:420px){.kuQuickSearchNoRecordFound .klevuTarget.klevu-fluid>div{max-width:100%}}.kuCaptionStockIn{font-size:11px;color:green;display:inline-block;padding:0;float:left;width:100%;box-sizing:border-box;margin:2px 0}.kuQuickCaptionStockOut{font-size:11px;color:Red;display:inline-block;padding:0;float:left;min-height:30px;width:100%;box-sizing:border-box;margin:2px 0}.kuQuickSearchResultsContainer .kuCaptionVat{display:block;font-size:11px;color:#767676;width:100%;float:left;margin:0;padding:0;box-sizing:border-box;margin:2px 0}.kuQuickSearchFacetedLayout .productListActive [data-content="cmsCompressed"]{display:none!important}.kuQuickSearchFacetedLayout .cmsCompressedActive [data-content="productList"]{display:none!important}.kuQuickSearchFacetedLayout .kuContainer{width:100%;margin:0 auto;font-family:inherit;font-size:12px;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%!important;padding:0!important}.kuQuickSearchFacetedLayout .kuContainer .kuTabs{margin:0 auto!important;text-align:center;border-bottom:1px solid #eee}.kuQuickSearchFacetedLayout .kuContainer .kuTabs a{padding:8px;cursor:pointer;margin-right:5px;color:#333;display:inline-block;position:relative}.kuQuickSearchFacetedLayout .kuContainer .kuTabs a:hover{border-bottom:3px solid #ddd;text-decoration:none}.kuQuickSearchFacetedLayout .kuContainer .kuTabs a.kuTabSelected{border-bottom:3px solid #ddd}.kuQuickSearchFacetedLayout .kuContainer .kuTabs a.kuTabSelected:hover{background:0}.kuQuickSearchFacetedLayout .kuSort{display:inline-block;margin:0;height:15px;width:15px;background-repeat:no-repeat!important}.kuQuickSearchFacetedLayout .kuSort.kuQuickRelSort{background:url(https://js.klevu.com/klevu-js-v1/img-1-1/klevu-relevance.png) no-repeat 0 0;cursor:pointer;margin-right:2px}.kuQuickSearchFacetedLayout .kuSort.kuQuickRelSort:hover{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort.kuActiveSort{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort.kuQuickLTHSort{background:url(https://js.klevu.com/klevu-js-v1/img-1-1/klevu-p-low-to-high.png) no-repeat 0 0;cursor:pointer;margin-right:-4px}.kuQuickSearchFacetedLayout .kuSort.kuQuickHTLSort{background:url(https://js.klevu.com/klevu-js-v1/img-1-1/klevu-p-high-to-low.png) no-repeat 0 0;cursor:pointer}.kuQuickSearchFacetedLayout .kuSort.kuQuickHTLSort.kuActiveSort{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort.kuQuickHTLSort.kuActiveSort:hover{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort.kuQuickLTHSort.kuActiveSort{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort.kuQuickLTHSort.kuActiveSort:hover{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuSort:hover{background-position:0 -17px}.kuQuickSearchFacetedLayout .kuQuickResultsViewSwitchContainer{display:inline-block;float:left}.kuQuickSearchFacetedLayout .kuDropdown.kuQuickFacetedLayoutSort{float:left;display:inline-block;float:right}.kuQuickResultsViewSwitchContainer{position:relative;display:inline-block;z-index:11;width:auto;padding:10px 5px}.kuQuickResultsViewSwitchContainer a{display:inline-block;width:22px;height:22px;margin-left:4px;text-align:center;vertical-align:middle;overflow:hidden}.kuQuickResultsViewSwitchContainer a.kuCurrent{background-position:0 -25px;text-decoration:none}.kuQuickResultsViewSwitchContainer .kuGridViewBtn{background:url(https://js.klevu.com/klevu-js-v1/img-1-1/ku-gridview.png) no-repeat 0 0;cursor:pointer}.kuQuickResultsViewSwitchContainer .kuListViewBtn{background:url(https://js.klevu.com/klevu-js-v1/img-1-1/ku-listview.png) no-repeat 0 0;cursor:pointer}[data-result-view='list'] .klevuProduct{width:100%!important}[data-result-view='list'] .klevuProduct:hover .kuProdAdditional{box-shadow:none!important}[data-result-view='list'] .klevuProduct main{display:inline-block;width:30%}[data-result-view='list'] .klevuProduct footer{display:inline-block;width:69%}[data-result-view='list'] .klevuProduct .kuProdAdditional{position:relative!important;visibility:unset!important;border:0!important}[data-result-view='list'] .klevuProduct .kuAddtocart .kuBtn{display:inline-block}@media only screen and (max-width:576px){[data-result-view='list'] .klevuProduct main{width:100%}[data-result-view='list'] .klevuProduct footer{width:100%}[data-result-view='list'] .klevuProduct .kuAddtocart .kuBtn{display:block}}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickAddtoCart{margin:0;position:absolute;display:inline-block;bottom:10px;right:5px;width:auto}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickAddtoCart .kuBtn{padding:3px 6px;font-size:9px!important}.klevuResultsBlock .klevuQuickSearchResults .klevuQuickAddtoCart img{max-width:80px!important;height:auto;max-height:45px!important}.klevuQuickSearchNoResultsPopular .klevuQuickAddtoCart{margin:0;position:absolute;display:inline-block;bottom:10px;right:5px;width:auto}.klevuQuickSearchNoResultsPopular .klevuQuickAddtoCart .kuBtn{padding:3px 6px;font-size:9px!important}.klevuQuickSearchNoResultsPopular .klevuQuickAddtoCart img{max-width:80px!important;height:auto;max-height:45px!important}.kuQuickSearchFacetedLayout .klevuQuickSearchResults .klevuQuickAddtoCart{margin:0;position:absolute;display:inline-block;bottom:15px;right:5px;width:auto;visibility:hidden;opacity:0}.kuQuickSearchFacetedLayout .klevuResultsBlock .klevuQuickSearchResults ul li:hover .klevuQuickAddtoCart{visibility:visible;opacity:1}.kuQuickSearchFacetedLayout .kuPriceSlider{width:auto;min-width:190px;max-width:98%;padding:20px;margin:auto;position:relative;box-sizing:border-box}.kuQuickSearchFacetedLayout .kuPriceSlider .noUi-tooltip{font-size:90%}.kuQuickSearchFacetedLayout .sliderFilterNames{height:90px}.kuQuickSearchFacetedLayout .kuInfiniteScrollContainer{text-align:center}.kuQuickSearchFacetedLayout .kuInfiniteScrollContainer .kuLoadMoreBtn{width:100%;margin:12px 0;height:34px;border:0;border-radius:2px;cursor:pointer}.kuQuickSearchFacetedLayout .kuInfiniteScrollContainer .kuLoadMoreBtn.hide{display:none!important}.kuQuickSearchFacetedLayout .klevuProductLoadMore{width:100%!important;min-height:40px!important;border:none!important}.kuQuickSearchFacetedLayout .klevuProductLoadMore:hover{background-color:transparent!important}.kuQuickSearchFacetedLayout .klevuProductLoadMore.hide{display:none!important}.kuImageSearchSelector{cursor:pointer}.kuImageSearchSelector::before{content:url(data:image/svg+xml,%3Csvg%20width%3D%2216%22%20height%3D%2214%22%20viewBox%3D%220%200%2016%2014%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M11.7692%203.18182L11.0154%201.6C10.8538%201.21818%2010.4769%201%2010.0462%201H6.00769C5.57692%201%205.2%201.21818%205.03846%201.6L4.23077%203.18182H2.07692C1.48462%203.18182%201%203.67273%201%204.27273V11.9091C1%2012.5091%201.48462%2013%202.07692%2013H13.9231C14.5154%2013%2015%2012.5091%2015%2011.9091V4.27273C15%203.67273%2014.5154%203.18182%2013.9231%203.18182H11.7692Z%22%20stroke%3D%22%23666666%22%20stroke-miterlimit%3D%2210%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M8.00006%2010.8182C9.78436%2010.8182%2011.2308%209.35291%2011.2308%207.54543C11.2308%205.73795%209.78436%204.27271%208.00006%204.27271C6.21575%204.27271%204.76929%205.73795%204.76929%207.54543C4.76929%209.35291%206.21575%2010.8182%208.00006%2010.8182Z%22%20stroke%3D%22%23666666%22%20stroke-miterlimit%3D%2210%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M2.07703%204.81812H3.69241%22%20stroke%3D%22%23666666%22%20stroke-miterlimit%3D%2210%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%20%20%20%20%3C%2Fsvg%3E);display:inline-block;width:16px;margin-left:10px;cursor:pointer}.klevuTarget.klevu-fluid.kuEmptySearchBox .kuQuickImageSearchWrap,.klevuTarget.kuQuickSearchFacetedLayout .kuQuickImageSearchWrap,.klevuTarget.kuQuickSearchResultsContainer .kuQuickImageSearchWrap,.klevuTarget.kuPersonalizedSearchRecsEnabled .kuQuickImageSearchWrap,.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled .kuQuickImageSearchWrap,.klevuTarget .kuQuickImageSearchWrap{max-width:400px!important;min-width:auto!important;width:100%!important}.kuQuickSearchImageUploadContainer{max-width:400px!important}.kuQuickSearchImageUploadContainer .klevuQuickSearchingArea{padding:1rem!important}.kuQuickSearchImageUploadContainer .kuImageUploadErrorMsgContainer p{color:red;margin:0;font-size:12px}.kuQuickSearchImageUploadContainer .kuQuickUploadImageBtn{width:100%;margin:20px 0;text-align:center;padding:10px;border-width:0;background-color:#343420;color:#fff;cursor:pointer}.kuQuickSearchImageUploadContainer .kuQuickUploadImageBtn .kuUploadText::before{display:inline-block;width:16px;margin-right:5px;cursor:pointer}.kuQuickSearchImageUploadContainer .kuQuickUploadImageBtn .kuUploadText.upload::before{content:url(data:image/svg+xml,%3Csvg%20width%3D%2210%22%20height%3D%2211%22%20viewBox%3D%220%200%2010%2011%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.333333%207.95508C0.149%207.95508%200%208.10441%200%208.28841V10.3327C0%2010.5167%200.149%2010.6661%200.333333%2010.6661H9.66667C9.851%2010.6661%2010%2010.5167%2010%2010.3327V8.28841C10%208.10441%209.851%207.95508%209.66667%207.95508C9.48233%207.95508%209.33333%208.10441%209.33333%208.28841V9.99941H0.666667V8.28841C0.666667%208.10441%200.517667%207.95508%200.333333%207.95508Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M5.01445%208.62233C5.19878%208.62233%205.34778%208.473%205.34778%208.289V1.119L7.46211%203.16133C7.52645%203.224%207.61011%203.255%207.69345%203.255C7.78078%203.255%207.86778%203.221%207.93311%203.15333C8.06111%203.021%208.05745%202.81%207.92511%202.682L5.25078%200.0983334C5.25045%200.098%205.25045%200.0980001%205.25011%200.0976667L5.24578%200.0936667C5.23378%200.082%205.21878%200.077%205.20578%200.0676667C5.18445%200.0523334%205.16478%200.0353334%205.14045%200.0253334C5.10245%200.00966674%205.06211%200.00233355%205.02145%200.00133355C5.01911%200.00133355%205.01678%200%205.01445%200C5.01211%200%205.00978%200.00133355%205.00745%200.00133355C4.96678%200.00233355%204.92678%200.00966674%204.88845%200.0253334C4.86411%200.0353334%204.84445%200.0523335%204.82312%200.0673335C4.81012%200.0770002%204.79511%200.082%204.78311%200.0936667L4.77911%200.0973333C4.77878%200.0976666%204.77878%200.0976669%204.77845%200.0980002L2.10412%202.68167C1.97178%202.80967%201.96812%203.02067%202.09612%203.153C2.22345%203.28533%202.43545%203.28933%202.56711%203.161L4.68145%201.11867V8.28867C4.68111%208.473%204.83011%208.62233%205.01445%208.62233Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E)}.kuQuickSearchImageUploadContainer .kuQuickUploadImageBtn .kuUploadText.processing::before{position:absolute;margin-left:-20px;content:url(data:image/svg+xml,%0A%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M8%204.5C7.8674%204.5%207.74023%204.44732%207.64645%204.35355C7.55268%204.25977%207.5%204.1326%207.5%204V1C7.5%200.867392%207.55268%200.740215%207.64645%200.646447C7.74023%200.552677%207.8674%200.5%208%200.5C8.1326%200.5%208.25977%200.552677%208.35355%200.646447C8.44732%200.740215%208.5%200.867392%208.5%201V4C8.5%204.1326%208.44732%204.25977%208.35355%204.35355C8.25977%204.44732%208.1326%204.5%208%204.5Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M10.82%205.68005C10.7209%205.68013%2010.624%205.65075%2010.5416%205.59568C10.4593%205.54058%2010.3951%205.46225%2010.3573%205.37063C10.3196%205.27903%2010.3099%205.17825%2010.3295%205.0811C10.3491%204.98395%2010.3971%204.89485%2010.4675%204.82505L12.595%202.69755C12.6414%202.6511%2012.6966%202.61425%2012.7573%202.5891C12.818%202.56398%2012.883%202.55103%2012.9487%202.55103C13.0144%202.55103%2013.0795%202.56398%2013.1402%202.5891C13.2009%202.61425%2013.256%202.6511%2013.3025%202.69755C13.3489%202.744%2013.3858%202.79915%2013.4109%202.85985C13.4361%202.92055%2013.449%202.9856%2013.449%203.0513C13.449%203.117%2013.4361%203.18205%2013.4109%203.24275C13.3858%203.30345%2013.3489%203.3586%2013.3025%203.40505L11.175%205.53255C11.1285%205.57935%2011.0732%205.61648%2011.0122%205.64178C10.9513%205.6671%2010.886%205.6801%2010.82%205.68005Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M15%208.5H12C11.8674%208.5%2011.7402%208.44732%2011.6465%208.35355C11.5527%208.25977%2011.5%208.1326%2011.5%208C11.5%207.8674%2011.5527%207.74023%2011.6465%207.64645C11.7402%207.55268%2011.8674%207.5%2012%207.5H15C15.1326%207.5%2015.2598%207.55268%2015.3535%207.64645C15.4473%207.74023%2015.5%207.8674%2015.5%208C15.5%208.1326%2015.4473%208.25977%2015.3535%208.35355C15.2598%208.44732%2015.1326%208.5%2015%208.5Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M12.9501%2013.4499C12.8841%2013.45%2012.8188%2013.437%2012.7578%2013.4117C12.6969%2013.3864%2012.6416%2013.3492%2012.5951%2013.3024L10.4676%2011.1749C10.3738%2011.0811%2010.321%2010.9539%2010.321%2010.8212C10.321%2010.6885%2010.3738%2010.5613%2010.4676%2010.4674C10.5614%2010.3736%2010.6886%2010.3209%2010.8213%2010.3209C10.954%2010.3209%2011.0813%2010.3736%2011.1751%2010.4674L13.3026%2012.5949C13.3729%2012.6647%2013.421%2012.7538%2013.4406%2012.851C13.4602%2012.9481%2013.4505%2013.0489%2013.4127%2013.1405C13.375%2013.2321%2013.3108%2013.3105%2013.2284%2013.3656C13.1461%2013.4206%2013.0492%2013.45%2012.9501%2013.4499Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M8%2015.5C7.8674%2015.5%207.74023%2015.4473%207.64645%2015.3535C7.55268%2015.2598%207.5%2015.1326%207.5%2015V12C7.5%2011.8674%207.55268%2011.7402%207.64645%2011.6465C7.74023%2011.5527%207.8674%2011.5%208%2011.5C8.1326%2011.5%208.25977%2011.5527%208.35355%2011.6465C8.44732%2011.7402%208.5%2011.8674%208.5%2012V15C8.5%2015.1326%208.44732%2015.2598%208.35355%2015.3535C8.25977%2015.4473%208.1326%2015.5%208%2015.5Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M3.04997%2013.4499C2.95087%2013.45%202.85397%2013.4206%202.77159%2013.3656C2.68922%2013.3105%202.62509%2013.2321%202.58732%2013.1405C2.54954%2013.0489%202.53984%2012.9481%202.55944%2012.851C2.57907%2012.7538%202.62709%2012.6647%202.69747%2012.5949L4.82497%2010.4674C4.87142%2010.421%204.92657%2010.3841%204.98727%2010.359C5.04797%2010.3339%205.11302%2010.3209%205.17872%2010.3209C5.24442%2010.3209%205.30947%2010.3339%205.37017%2010.359C5.43087%2010.3841%205.48602%2010.421%205.53247%2010.4674C5.57892%2010.5139%205.61577%2010.569%205.64092%2010.6297C5.66604%2010.6904%205.67899%2010.7555%205.67899%2010.8212C5.67899%2010.8869%205.66604%2010.9519%205.64092%2011.0126C5.61577%2011.0733%205.57892%2011.1285%205.53247%2011.1749L3.40497%2013.3024C3.35844%2013.3492%203.30314%2013.3864%203.24222%2013.4117C3.18127%2013.437%203.11594%2013.45%203.04997%2013.4499Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M4%208.5H1C0.867392%208.5%200.740215%208.44732%200.646447%208.35355C0.552677%208.25977%200.5%208.1326%200.5%208C0.5%207.8674%200.552677%207.74023%200.646447%207.64645C0.740215%207.55268%200.867392%207.5%201%207.5H4C4.1326%207.5%204.25977%207.55268%204.35355%207.64645C4.44732%207.74023%204.5%207.8674%204.5%208C4.5%208.1326%204.44732%208.25977%204.35355%208.35355C4.25977%208.44732%204.1326%208.5%204%208.5Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M5.18005%205.68005C5.11407%205.6801%205.04872%205.6671%204.9878%205.64178C4.92687%205.61648%204.87155%205.57935%204.82505%205.53255L2.69755%203.40505C2.65108%203.3586%202.61423%203.30345%202.5891%203.24275C2.56395%203.18205%202.55103%203.117%202.55103%203.0513C2.55103%202.9856%202.56395%202.92055%202.5891%202.85985C2.61423%202.79915%202.65108%202.744%202.69755%202.69755C2.744%202.6511%202.79915%202.61425%202.85985%202.5891C2.92055%202.56398%202.9856%202.55103%203.0513%202.55103C3.117%202.55103%203.18205%202.56398%203.24275%202.5891C3.30342%202.61425%203.35857%202.6511%203.40505%202.69755L5.53255%204.82505C5.6029%204.89485%205.65095%204.98395%205.67055%205.0811C5.69017%205.17825%205.68047%205.27903%205.6427%205.37063C5.60492%205.46225%205.54077%205.54058%205.4584%205.59568C5.37602%205.65075%205.27915%205.68013%205.18005%205.68005Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.kuQuickSearchImageUploadContainer .kuQuickUploadImageBtn img,.kuQuickSearchImageUploadContainer .kuQuickUploadImageBtn svg{margin-right:5px}.kuQuickSearchImageUploadContainer .kuQuickUploadImageBtn:disabled{cursor:default;opacity:.95}.kuQuickSearchImageUploadContainer .kuQuickUploadHeaderTitle{font-size:1.3em;display:block}.kuQuickSearchImageUploadContainer .kuQuickImageSearchForm{display:none!important}.kuQuickSearchImageUploadContainer .kuImgSearchPrivacyNote{position:relative}.kuQuickSearchImageUploadContainer .kuImgSearchPrivacyNote .kuImgSearchPrivacyNoteInfo{padding-left:24px}.kuQuickSearchImageUploadContainer .kuImgSearchPrivacyNote .kuImgSearchPrivacyNoteInfo::before{content:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2014%2014%22%3E%0A%3Cg%20id%3D%22surface1%22%3E%0A%3Cpath%20style%3D%22%20stroke%3Anone%3Bfill-rule%3Anonzero%3Bfill%3Argb%2860%25%2C60%25%2C60%25%29%3Bfill-opacity%3A1%3B%22%20d%3D%22M%206.832031%206%20L%207.167969%206%20C%207.351562%206%207.5%206.183594%207.5%206.332031%20L%207.5%2010.332031%20C%207.5%2010.515625%207.351562%2010.664062%207.167969%2010.664062%20L%206.832031%2010.664062%20C%206.648438%2010.664062%206.5%2010.480469%206.5%2010.332031%20L%206.5%206.332031%20C%206.5%206.148438%206.648438%206%206.832031%206%20Z%20M%206.832031%206%20%22%2F%3E%0A%3Cpath%20style%3D%22%20stroke%3Anone%3Bfill-rule%3Anonzero%3Bfill%3Argb%2860%25%2C60%25%2C60%25%29%3Bfill-opacity%3A1%3B%22%20d%3D%22M%206.832031%203.671875%20L%207.167969%203.671875%20C%207.351562%203.671875%207.5%203.855469%207.5%204.003906%20L%207.5%204.671875%20C%207.5%204.855469%207.351562%205.003906%207.167969%205.003906%20L%206.832031%205.003906%20C%206.648438%205.003906%206.5%204.820312%206.5%204.671875%20L%206.5%204.003906%20C%206.5%203.820312%206.648438%203.671875%206.832031%203.671875%20Z%20M%206.832031%203.671875%20%22%2F%3E%0A%3Cpath%20style%3D%22%20stroke%3Anone%3Bfill-rule%3Anonzero%3Bfill%3Argb%2860%25%2C60%25%2C60%25%29%3Bfill-opacity%3A1%3B%22%20d%3D%22M%207%2012.992188%20C%208.589844%2012.992188%2010.113281%2012.363281%2011.238281%2011.238281%20C%2012.363281%2010.113281%2012.992188%208.589844%2012.992188%207%20C%2012.992188%205.410156%2012.363281%203.886719%2011.238281%202.761719%20C%2010.113281%201.636719%208.589844%201.007812%207%201.007812%20C%205.410156%201.007812%203.886719%201.636719%202.761719%202.761719%20C%201.636719%203.886719%201.007812%205.410156%201.007812%207%20C%201.007812%208.589844%201.636719%2010.113281%202.761719%2011.238281%20C%203.886719%2012.363281%205.410156%2012.992188%207%2012.992188%20Z%20M%207%2013.992188%20C%205.144531%2013.992188%203.367188%2013.257812%202.054688%2011.945312%20C%200.742188%2010.632812%200.0078125%208.855469%200.0078125%207%20C%200.0078125%205.144531%200.742188%203.367188%202.054688%202.054688%20C%203.367188%200.742188%205.144531%200.0078125%207%200.0078125%20C%208.855469%200.0078125%2010.632812%200.742188%2011.945312%202.054688%20C%2013.257812%203.367188%2013.992188%205.144531%2013.992188%207%20C%2013.992188%208.855469%2013.257812%2010.632812%2011.945312%2011.945312%20C%2010.632812%2013.257812%208.855469%2013.992188%207%2013.992188%20Z%20M%207%2013.992188%20%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A);display:inline-block;width:16px;position:absolute;left:0}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks{position:relative}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks input{position:absolute;opacity:0;z-index:-1}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks .accordion-label{cursor:pointer;position:relative;padding-right:18px}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks .accordion-label::after{content:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%228px%22%20height%3D%2213px%22%20viewBox%3D%220%200%208%2012%22%20version%3D%221.1%22%3E%0A%3Cg%20id%3D%22surface1%22%3E%0A%3Cpath%20style%3D%22%20stroke%3Anone%3Bfill-rule%3Anonzero%3Bfill%3Argb%2860%25%2C60%25%2C60%25%29%3Bfill-opacity%3A1%3B%22%20d%3D%22M%207.136719%206.398438%20L%202.277344%2010.953125%20C%202.042969%2011.171875%201.664062%2011.171875%201.429688%2010.953125%20L%200.863281%2010.421875%20C%200.628906%2010.203125%200.628906%209.847656%200.863281%209.625%20L%204.710938%206%20L%200.863281%202.375%20C%200.628906%202.152344%200.628906%201.796875%200.863281%201.578125%20L%201.429688%201.046875%20C%201.664062%200.828125%202.042969%200.828125%202.277344%201.046875%20L%207.136719%205.601562%20C%207.371094%205.820312%207.371094%206.179688%207.136719%206.398438%20Z%20M%207.136719%206.398438%20%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A);position:absolute;right:0;top:1px}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks .accordion-content{display:none;position:relative;background-color:#f5f6f4;padding:10px;margin-top:8px}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks .accordion-content p{margin:0;padding-left:64px}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks .accordion-content .img1::before{content:url(data:image/svg+xml,%0A%3Csvg%20width%3D%2226%22%20height%3D%2229%22%20viewBox%3D%220%200%2026%2029%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M1%207.65073V21.0515L13%2027.8015L25%2021.0515V7.65073L13%201L1%207.65073Z%22%20stroke%3D%22%23999999%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M1%208.14697L13%2014.897L25%208.14697%22%20stroke%3D%22%23999999%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3Cpath%20d%3D%22M13%2027.8014V14.897%22%20stroke%3D%22%23999999%22%20stroke-miterlimit%3D%2210%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:16px;position:absolute}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks .accordion-content .img2::before{content:url(data:image/svg+xml,%0A%3Csvg%20width%3D%2218%22%20height%3D%2225%22%20viewBox%3D%220%200%2018%2025%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.5%22%20y%3D%220.5%22%20width%3D%227%22%20height%3D%226%22%20stroke%3D%22%23999999%22%2F%3E%0A%3Crect%20x%3D%220.5%22%20y%3D%229.5%22%20width%3D%227%22%20height%3D%226%22%20stroke%3D%22%23999999%22%2F%3E%0A%3Crect%20x%3D%220.5%22%20y%3D%2218.5%22%20width%3D%227%22%20height%3D%226%22%20stroke%3D%22%23999999%22%2F%3E%0A%3Crect%20x%3D%2210.5%22%20y%3D%220.5%22%20width%3D%227%22%20height%3D%221%22%20stroke%3D%22%23999999%22%2F%3E%0A%3Crect%20x%3D%2210.25%22%20y%3D%223.25%22%20width%3D%227.5%22%20height%3D%220.5%22%20stroke%3D%22%23999999%22%20stroke-width%3D%220.5%22%2F%3E%0A%3Crect%20x%3D%2210.5%22%20y%3D%225.5%22%20width%3D%224%22%20height%3D%221%22%20stroke%3D%22%23999999%22%2F%3E%0A%3Crect%20x%3D%2210.5%22%20y%3D%229.5%22%20width%3D%227%22%20height%3D%221%22%20stroke%3D%22%23999999%22%2F%3E%0A%3Crect%20x%3D%2210.25%22%20y%3D%2212.25%22%20width%3D%227.5%22%20height%3D%220.5%22%20stroke%3D%22%23999999%22%20stroke-width%3D%220.5%22%2F%3E%0A%3Crect%20x%3D%2210.5%22%20y%3D%2214.5%22%20width%3D%224%22%20height%3D%221%22%20stroke%3D%22%23999999%22%2F%3E%0A%3Crect%20x%3D%2210.5%22%20y%3D%2218.5%22%20width%3D%227%22%20height%3D%221%22%20stroke%3D%22%23999999%22%2F%3E%0A%3Crect%20x%3D%2210.25%22%20y%3D%2221.25%22%20width%3D%227.5%22%20height%3D%220.5%22%20stroke%3D%22%23999999%22%20stroke-width%3D%220.5%22%2F%3E%0A%3Crect%20x%3D%2210.5%22%20y%3D%2223.5%22%20width%3D%224%22%20height%3D%221%22%20stroke%3D%22%23999999%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:16px;position:absolute;margin-left:34px;margin-top:3px}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks input:checked ~ .accordion-label::after{content:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20width%3D%2212px%22%20height%3D%2214px%22%20viewBox%3D%220%200%2012%2013%22%20version%3D%221.1%22%3E%0A%3Cg%20id%3D%22surface1%22%3E%0A%3Cpath%20style%3D%22%20stroke%3Anone%3Bfill-rule%3Anonzero%3Bfill%3Argb%2860%25%2C60%25%2C60%25%29%3Bfill-opacity%3A1%3B%22%20d%3D%22M%205.546875%209.6875%20L%200.339844%204.75%20C%200.0898438%204.511719%200.0898438%204.128906%200.339844%203.890625%20L%200.945312%203.3125%20C%201.199219%203.078125%201.605469%203.074219%201.855469%203.3125%20L%206%207.222656%20L%2010.144531%203.3125%20C%2010.394531%203.074219%2010.800781%203.078125%2011.054688%203.3125%20L%2011.660156%203.890625%20C%2011.910156%204.128906%2011.910156%204.511719%2011.660156%204.75%20L%206.453125%209.6875%20C%206.203125%209.925781%205.796875%209.925781%205.546875%209.6875%20Z%20M%205.546875%209.6875%20%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E);position:absolute;right:0;top:1px}.kuQuickSearchImageUploadContainer .kuImgSearchHowItWorks input:checked ~ .accordion-content{display:block}@media screen and (max-width:640px){.klevuTarget.klevu-fluid.kuEmptySearchBox .kuQuickImageSearchWrap,.klevuTarget.kuQuickSearchFacetedLayout .kuQuickImageSearchWrap,.klevuTarget.kuQuickSearchResultsContainer .kuQuickImageSearchWrap,.klevuTarget.kuPersonalizedSearchRecsEnabled .kuQuickImageSearchWrap,.kuEmptySearchBox.klevuTarget.kuQuickSearchResultsContainer.kuPersonalizedSearchRecsEnabled .kuQuickImageSearchWrap,.klevuTarget .kuQuickImageSearchWrap{position:fixed!important;top:15%!important;max-width:80%!important;left:10%!important;right:auto!important;z-index:1000000;margin-left:0;width:80%!important}.klevuTarget.klevu-fluid>div.kuQuickImageSearchWrap{left:10%!important;width:80%!important;z-index:1000000!important}.kuImageSearchWrapBackDrop{z-index:1000!important}.kuImageSearchWrapBackDrop::before{content:'';height:100%!important;width:100%!important;background:rgba(0,0,0,0.5);z-index:1000;position:fixed;left:0;top:0;bottom:0}.kuQuickUploadHeaderTitle{text-align:center}.kuImgSearchHowItWorks{text-align:center}.kuImgSearchHowItWorks .accordion-content{text-align:left}}</style><script type="text/javascript" charset="UTF-8" src="https://maps.google.com/maps-api-v3/api/js/64/9c/common.js"></script><script type="text/javascript" charset="UTF-8" src="https://maps.google.com/maps-api-v3/api/js/64/9c/util.js"></script></head>
    <body data-container="body" data-mage-init="{&quot;loaderAjax&quot;: {}, &quot;loader&quot;: { &quot;icon&quot;: &quot;https://cdn-icons-png.freepik.com/512/8372/8372083.png&quot;}}" class="breeze breeze-theme page-product-configurable catalog-product-view product-nordic-naturals-baby-s-dha-52135545-AYO01 page-layout-1column" id="html-body" data-breeze-processed="true">
        

    
	</p><p></p><div id="content" style="display: none;" bis_skin_checked="1"><a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot maxwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot online</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot mahjong</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">raja togel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">raja botak</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">badak 178</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indo 178</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bro 178</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hoki 178</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">api 66</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewa 11</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dwg 288</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">scatter hitam</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ladangtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mahjong 333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dana toto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">depo bos</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wd bos</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mahjong jp88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">angker 77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot game macan388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot online wingacor77-pe.com</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor --jago79.xyz</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor di-agen878-</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor --kaya33.com--</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor gg-sip777.it.com</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor --gacor200.co</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot apk --delta138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor gg-sip777.it.com</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot --koko288.mantap</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot --maplay789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot ++jajantogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot --hanabi88--</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot --winning303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot --77superslot--</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot gacor--nagatoto168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot gacor--jostoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot --77superslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot --newmacau88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot fav77🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot --nagatoto168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot --xgo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot --wow388✅</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot --mitosbet88.gacor🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor --jago79.xyz</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor gg-sip777.it.com</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor --hobicuan.com</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor --pesiarbet--</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor ++gacha168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor --juragankoin99.com</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot resmi --kelinci88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot resmi ligamaster77.daftar.com</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot resmi --slot80</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot resmi --rajacuan69.login</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot resmi --koko288.login</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot resmi teshoki</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor hari ini maha 303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot thailand pphoki.com-1</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot thailand winning303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot thailand me.fomototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot thailand flokitoto login</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot thailand rtp-fomototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rtp slot --77superslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rtp slot pg</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rtp slot pg soft</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot apk --delta138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor anti rungkad</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor apk</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor belutjp jp me</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor bandit77.com</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor ceriabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor com.pialatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor di-agen878-</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor ice3bet**</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor jekpot88--jp</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor juragankoin99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor katsu5**</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor kampung</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor kudaslot--project</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor m77.cx</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor microstar88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor pionbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor bb--jackpot108</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor --max389</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor rtp--forwin77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor 306--pg(dewabos138.blog)</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor salju777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor dewakoin99.vip</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor login-nagatoto168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor --vivo500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor h5--(suria88)</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor (988cnn).com</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor-halo4d💋</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot gacor--jos889</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/"idks</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor kdslots</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor --rtp(bisabet)</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot gacor rajacuan69🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor --bisabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacor slot -🎰indo777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor 2🔥(multibet88)</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor juara100.org situs</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor tokyoslot-net🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor 1🚀(multibet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor sektorplay88.com🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot bet --gacor(duren777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor 13🔥(multibet88)</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor --fav77✅</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor sip33🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot gacor rajadewa138🤟</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacor slot pol88🎰</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor --happympo 🎨</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor @nusagg.com❤️</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor motoslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot online totoplay - gacor</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacor slot ligamaster77🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor --pol88✨</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacor slot fav77👍</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot 777 gacor(bisabet)</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor --pol88🟢</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot gacor totoplay 🚀</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot pesiarbet🚀</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot pol88⚡</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot gacor rajadewa138✅</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot --rajahoki123🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot --🦁gacor(77superslot)</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot 🧨 gacor 77superslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot gacor rajadewa138👍</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot --evohoki💋</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot 1🔥(multibet88)</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot rajadewa138📌</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot gacor-mitosbet88🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot pol88🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot 301👈(idrhoki138.com)</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot --fav77-- ✅</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot --(paus4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot 1🥇(multibet88)</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot online rajadewa138💥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot online rajadewa138🤑</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot --rajahoki123🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot --(2waybet)💋</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot gacor --rajahoki123🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot nagatoto168 🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs gacor pol88-slot💥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot online rajadewa138👍</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs slot @mitosbet88--🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">apk slot 💰hoki123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">apk slot --🧨hoki123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">apk slot --77superslot💥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot apk --77superslot💎</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">apk slot --77superslot💸</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot thailand 13🦜(idrhoki138.com)</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">server thailand -- slot duren77 ⚡</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot thailand 14🦜(idrhoki138.com)</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot thailand --ihokibet❤</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot thailand 18👅(idrhoki138.com)</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot thailand --resmi(77superslot)🖐</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot thailand 🔱 gol88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">server thailand --slot(duren77⚡)</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot maxwin --fav77-- 😍</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maxwin slot --🎁motowin77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot maxwin --✨(dt138)</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot maxwin nagatoto168.com🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot maxwin slot80.com 🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maxwin slot --💸(77superslot)</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot maxwin mitosbet88🔥🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maxwin slot --🚀vegas338</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot maxwin jitu69🔥</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot maxwin --🚀vegas338</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link slot --maxwin(bigpot88)🎰</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot maxwin 🔥 stationbet.com</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot online sip777💰</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot online koitoto✅</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">djarumtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alexistoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sinartoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sultantogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sultan168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">surga138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">toptoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bigslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">big88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">neo777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hkjitu</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bomslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajawin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">win888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mata88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bima888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">super4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cuan888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cuan4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cuanslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gaco888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bukit77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bukit88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">doktertoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mahkota4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mahkota88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mahkota888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mahkotatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wulan4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bulantoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">top88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">daun77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alibaba66</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">waktu777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">venom77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rans777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot977</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lunaplay</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">platinum88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">atoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jayatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">batoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sinartoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wadahtogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacor12</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">zonatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">toto39</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">iptogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yabos88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wukong98</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">toto282</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacor02</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bulan123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">adctoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">joker88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idola88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">togel718</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wasiat4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fin4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jayaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">toto308</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">garuda8</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">km777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kongbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jpdewa</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">astatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pgi188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maxwin6789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">akurat77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pasti123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">arisan4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mcpbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mahyong288</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pusaka88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jalalive55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotbola88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">she777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagajudi775</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">88slotdewa</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">labatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">zona303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajahoki899</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">axetoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">megawin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ampera88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sebat77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">viv555</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">onsutoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pintu123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wis77jp</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hoki108vip</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">angelslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">star77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kontes123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sr777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yasir252</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">day777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ibc4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sr6666</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mansion777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kakek123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mesin128</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">f777bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ratu13</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajawd</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jalalive22</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">map805</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dan777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">olislot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wakanda88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">paket99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agusbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">567luck</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bintangbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">st777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">surya123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mabukbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">teras88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ibutogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">toto232</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fomo19</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">in138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gendis999</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jptogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">marvel123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">saku89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewi111</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dumbo365</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yogatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">surga111</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">usutoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">joker123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nowgoal24</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">batik88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lambor88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indo123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">w88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tokoslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maribet99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cendana77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">abc88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rbt77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">satriabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dragslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dragon77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mega388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gading69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewaslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gowin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">oreo5d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">okjkt</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jkt8</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">brri4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pk888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">danaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">punyatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gaspoll88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">livesport88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mega389</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">at777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">key777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mintogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bagus365</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">86asik</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sbobet97</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">g668</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ns1212</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bening88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vivototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">salamjp</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">manatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">keratontogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">aladin666</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kasih123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wuling4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kios69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indobet11</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bimbotogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dadu55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lion78</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">momok88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">svip9</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">win777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">receh303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wasiat4</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bulan3388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">zebra007</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sambeltoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotwin303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">melodi88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">coto4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">probet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">salam123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">330bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pokercc</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">leocity88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">buletoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">daun77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cahaya77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sirendi89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ajakslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maxbet855</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rpvip3</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">amo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vegas77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">panenslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ojol69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mewahbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pohonemas</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kpop4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">remi101</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">polaslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sedia4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">besti68</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mantapslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">naga288</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pumatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gbototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hoa788</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">evo303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">metawd</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bosslot77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">roketslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">berita138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">motorslot77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sutra69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bocor188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ligahoki89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ramentoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fungame77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gasing77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pulau888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">togelmandiri</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">askasino</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">won4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dax96</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">omotogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">neraka4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kuybet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ajaib123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hiwin777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pedia77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">konglo123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">motor138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wanwantoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wijaya88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pilot138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pelawaktoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lobby303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">owl77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">surya7777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">setia888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">santahoki88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indogame88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">montana88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bola012</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fins88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">silverbola</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">33wbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lobi777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idola123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sihokitoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gowin789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">olo4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sparta88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">11wbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">adm4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maskertoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajalangit</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dragonslot99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kenzo123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gm777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alamjp</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajapanda</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">palmas88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jpslot168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">playbet788</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">e88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">h89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">omo77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mlbb777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ombak88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gitar100</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">aha4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lokasitogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fanta388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">riahslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sanca99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ebobet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">karo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">aktif4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jktjkt777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lawu88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot259</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewaslot77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">megawin77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ug900</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bonus288</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bni4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mancingduit89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mbahgaming</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">benam138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kristoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lexus88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lapakslot777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">macanwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">initoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewataslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sepuhqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ambototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gunung388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pundi68</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sgm188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cewekslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mechaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gengtoto88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rpvip1</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">spogoal</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">magnet33</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">y89slots</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">xx1toto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wukong138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mawartoto88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sundaempire787</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">casper77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sky99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">triad4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bsd303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">telkom88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">koinslot888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jazz4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot1131</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">combo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">poka888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hepi89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sloto123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotsaja</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">avatar303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">menit4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kkslot77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bintang789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qq777slot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">triadtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">transtogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pusbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">poker88idr</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qqq333bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">target77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kayaqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bukdejitu</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">samhoki88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ok88slot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">toro99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">akitoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">royalpalace88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">senopati4</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">joki123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bigslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">medali777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">8638slot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jarumtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">abidintoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">janjigacor</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">neko77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lytobet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tokyo777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gmtslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sultanbet89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">uang55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">srikandiqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rupiah168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nuri77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">duitgg</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dsobet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pereman69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kingxslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">olxhoki</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sayang4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">halocuan98</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ayomain138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lunartoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kingbet77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">skywin777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vipslot77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">starslot77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">protogel88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">berry188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">giga88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kevtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ying77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rusa333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tissot4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">88dewa</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sablengtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">poin606</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">betmen88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vegas388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kaisartoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">naga200</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lintastoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dollar138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">duar88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">raja4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ladangtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">zeuswin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pelita555</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">luxe88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kokototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">candi88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bandarqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">duta168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ingatbola</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">panda138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">raden69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ledak338</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">legowin777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">genesistoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cbh4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jalalive7</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">galaxy777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lapan9</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">odingacor</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hose88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">istana77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wr388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">studiobet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">olympus188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lakers4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mainduit</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">halusbet77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kaisar789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nongki303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wangsit88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asiaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotwangi</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">berkah88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">akatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agb999</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpogg</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">spotbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">surya69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">goto4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">k7bola</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rawit138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asiabet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">primebet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">arenahoki</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asia4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pepsi99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dragon22</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tempur4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jco96</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hyslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">paten4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">palladium4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sasaranjitu</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cektoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yakuza123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bandarjitu</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wangi88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">argowin77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">intan123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mawar4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ledak138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajatoto1</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">koptogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kano777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">racun888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tirto88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">medusa96</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jos777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bp77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jktjkt38</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ramaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">haya777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gilabola</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mansion77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">barcaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maxwinbet77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">triadtogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">santuy777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">obor123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bigwin123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">preman68</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agen88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mandiriqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vivojitu</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dombatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bydtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">oyo89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kuy89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">luxury88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajaturbo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idrslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajapaito</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idspot188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tora4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">g2000m</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotjp88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fun88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">st789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">anjirtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">meriah4</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pf777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">aka4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewa188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">net29</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nowgoal820</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kanca4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bejobet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewa69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajasawit77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nih4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lambe777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nusaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">scatter99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">togelhoki8</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cuan55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hepi55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">readtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">juara666</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">uptogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">api333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pantas138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fasttoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kincir86</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yaristoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacorbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">oasis99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sultan618</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">polaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">boy138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sinar588</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">otw78</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nowgoal5</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agam68</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asik138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vipslot188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gede4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagawin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sakuratoto1</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">macau4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">radjagame</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">superslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rtslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sv388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">manja555</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">istanaliga</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo5000</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bimabet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sloter88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rumah258</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">a2000m</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kaswari77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">warkop89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gosok88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maxwin300</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">furla777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vertu4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idn789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bet777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idolabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">olxtoto88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagamas69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ringhoki</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">big88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">okta338</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kompasqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kdslot77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gigaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ronin69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">km789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hotlive51</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">markigas88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sm4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">to88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dax68</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">grenbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">betwin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tampan99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewa888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kd4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sinarbet358</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">totobatak</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">magnum777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">58win</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">goto777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sultanplay</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">megaforwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">seven777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">masterslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">opung4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lunatogel88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">catur77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bmw77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bomslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">emas787</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">polania123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asia88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nobar24</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lagatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">goaloo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">virgo123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pion368</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewagacor55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">badak55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indobetslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewagacor</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotplay</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">evo77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sensasiwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">meja21</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sbc4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">comototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fafaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mvp138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maxwin228</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jp789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hiuslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">beta78</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tato888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jkt168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">zeusjp88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">naga7bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mangatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sumbertoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rupiah369</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bb0303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">amanah77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hamba777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jandaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bestogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">megawin7777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">abadi55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">limpulbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">to2888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sensasi77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">airbet888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">infini88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">to338</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotindo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mcd99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">paragon88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lexusmpo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wdbos888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">siap88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tigoals213</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rusuntoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pancatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nowgoal25</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">delislot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wajik77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">warganet99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gojo188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pos88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">live808</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pulsa858</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">satria89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kerasakti999</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jadi123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alexis77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">zentogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">langkahcurang</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ngamenslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ese4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wahanatogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">livesports008</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yuk88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sexitogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agenslot168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lagu123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yukplay</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hoking168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">harimau368</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">toba787</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">paitohk</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pas777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gomubet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">promo138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wingbet303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bukanslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">homtogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qqasia</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wolestoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">joss55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewa688</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gatotkaca89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot18</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jagobet99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">top88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wd368</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">promax77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ladang123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dunia4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sportsbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pandawa777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">antamtoto99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mcm555</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lego99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ggsoft</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot999</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">warung69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">oja88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ide77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">batik777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sunbet303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">surga888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gasbro138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pangkalantogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sgp77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gameslot37</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">garuda123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">holy789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rpvip6</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kobra88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kkslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maxwin777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">678luck</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ladangtoto2</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mahkota4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">aztec303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">deposlot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sofabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dolantogel88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gol4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hanabi99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gokong88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotjek</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jasacuan</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mma128</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">luxury77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asianbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mbs188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tigoals123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">king77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">museumbola</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pilar168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">parsel4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">super189</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">t6bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacoanbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">merah99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pemburujitu</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gajahslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kacangbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">to3888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">22bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mafia4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotgacor77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">smartgaming77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">visawin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">we777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">suduttoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">spinbet138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">escobet86</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indiatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ratu129</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bantaitoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gtatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">joyslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacortoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jarisakti138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">aladinslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">apel888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">laku88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cupslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dinamobet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yomanbet168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rog77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cosmictoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nadimtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">messislot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">garudatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bintangtogel88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">888bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cendana88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">setirtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewa389</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asia129</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bengkel138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bobaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sio88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajajp</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">singhatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mesipoker</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">777win</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">megaplay188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">76kbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hau788</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacor500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">olxtoto99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mega555</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">boscuan</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">togel77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hokiwon</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mawartogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sidney303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">toto88jp</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ularslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pramuka4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot17</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bintang138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vilatogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">burung77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jpspin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sukses888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sweet777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">uranus88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pandaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">puton88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rgo303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jpkuy99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asiajp88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kau86</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ibosports</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hbo09</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">togeltoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kantorbola88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jago388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qplay88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">doyanslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">order4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gobet69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sulap123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">satu277</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">koitoto88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hkb777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fafawin123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">visitorbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lk121</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bocahgacor</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">suka88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hot15</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">coklat77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">okwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">turbo188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mansion88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">versace4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mojoslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">xo388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">honda99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">koktogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">apex88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">paritoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">banana188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">preman89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacor168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">juaraspin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot50000</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">geranat88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">aladdin138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo567</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo888asia</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hoki222</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gaspol138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">neraka88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sewaqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kitadewi365</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mio77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lego33</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">api188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">betmen138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">susu88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">stafaband21</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">brenjitu</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">soccer808</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">madamtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hengtogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">borneoslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bizz777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">luxury33</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tko69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lumi4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewa4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">panen168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">daya4d88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ego77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kutabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ratujudiqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">konoha69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hayobet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">surga777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">besti99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotmpo168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indoslot388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">texas99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">panutantoto88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">n78slot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">garudahack45</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gelto4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agenliga77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sultan899</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bosplay88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagamas</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewa333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rp88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bomtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">marco88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gmslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dinasti923</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tunai188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">neraka189</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kenzo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">willtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacorbet55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">goaloo23</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bigboss4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alexsistoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">koplo777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ratujudi</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sumsumslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pablo4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bo77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bpo77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">peka777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yamaha88bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">deltabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">presidentslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dua77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewacuan249</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lotus88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">svip4</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kawa77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jawa88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">usaha138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asia328</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lisboa99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rapi88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">zeus123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">goaloo18</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">titan88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pemain86</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pascoltoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">king777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewi888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">livesport008</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lokerbola</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tahu69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajaqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bewokbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">livecamrips</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">naga505</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ajaib99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sartoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sihir138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rezeki123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">seru77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajalangit777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">toto888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ajo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">apolo77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pablo168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">arab138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">betpon77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">saku55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jawa303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asianbet77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">warung138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mega300</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">menirtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mahawin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">protogel8</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo288</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">athena303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kotakwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rekor77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sirendi899</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">diana4</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qqslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tanganhoki99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mega168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kilatwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">negeri4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">super333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kinggacor</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sports808</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">turbootp</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hkg999</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bacot77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jokerbet888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jendral99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">guci77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cwd88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bobabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">miabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kudetabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rupiah5000</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nowgoal828</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">apiktoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">808ball</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">akbtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bola003</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bir365</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qqbet333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kliktoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">forte99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">api228</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">depo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">koitogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tanjung889</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">amam7078</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">monabet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bosbet77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">winwin138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lumina16</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lapakliga</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indohoki</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ovo999</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagabet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">77singa</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">majur4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">goaloo13</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">singkawangtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">scater88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">goaloo12</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mjsbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">spgslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lampung4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sgo77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">okta88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gozek89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">latoto29</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ratutoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagakuda138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jarum4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hao778</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">roket288</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">apektogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewasurga88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bandot4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">okeplay77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">zeus77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">roma777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kotaspin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">latoto889</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">winlive88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">api500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">media77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">panen889</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fokus77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">buaya88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotbos</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">combo99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rafi78</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">putri88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sia777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qq2121</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">serdadu4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kepalaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lampiontoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tele889</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">martoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">skyland4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pglucky88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kantorbola99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bandit4</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">olimpus88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rokettoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mega11</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asia777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mediatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">javatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">to888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hoki33</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pestaqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">uang388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bintang68</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dapurwin789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">t1slot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">king99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">4dslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kayatogel4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">arenaslot99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sports369</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">era777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">watitoto133</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bontoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">manilabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">oxibet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">air169</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mabar138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">koranslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">adil777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">33gg</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gt4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mercyslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">xyz338</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jago777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">giototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ringbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">oceanslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wintoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bibit288</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">babeh138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">politoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">thr77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">garasi89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situstoto176</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pokervqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">86bos</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lk777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nekobet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">seri77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">88vipbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">1stkissmanga</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">astonbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lae8toto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ada4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">raja777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kingkobratoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bejohoki</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">420toto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">me355</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cuan188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dax89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jowopools</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo365</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ledak88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">9nagaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">playerslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo900</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slottoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">briobola</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ayobet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">megabintang88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gloryslot777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bejo888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vegastoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alibabaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">house777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">resmi303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">raja303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">toz288</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nyai99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asik777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">era188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">psk77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pola138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">waw33</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vikingbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rr77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">warungbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">km77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">totomax188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpl77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wdbos88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jutawanbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indowin99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">to138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">88ratu</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">permenslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">118toto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">virgobet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">domino76</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mauwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ahh4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gg2888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rtpwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sumatrabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">taruhan777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cash88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bosslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bos500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pragmatic007</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bintangtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotking</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gso4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajajudol</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">elangpos4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pt707</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hero77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mahkota88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">papislot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">goltogel168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">depobos39391</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qqcrown</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sarang77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pecahtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bostogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kapak123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hawkbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gokunime</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bos989</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ferari88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">paitosgp</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ulos777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pulaujudi88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gokil168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bemototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ratu4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mio888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">actoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">davo888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">777idr</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lmtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacor888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sugeasia789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">intiwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bet888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">aveslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dadu13</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hkjepe88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">score808live</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">soyatogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lalabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">marvel365</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">liga778</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agitoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kuda4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jigotogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bumingcuan</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kedai138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bonus777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cair500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ciri4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hokiraja88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewitoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sukaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jeptoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yes777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sakura88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kingzeus</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">spay77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mawar88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cukongbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">grandtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">juraganslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idn777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hoki29</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wisatabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fubo808</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">matahari168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rjs88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">motorsport</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">boss5000</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indo77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">comeslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rejekitoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qq88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">uang777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ligaciputra77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">winertoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">abcslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bpjs77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">navitoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ovo888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kris4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">prada88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tg288</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nrtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nusa88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maxbet108</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ayubet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qqnusa21</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jetslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alexsis500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">uge808</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">eleven4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">playbet77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jackpot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agen689</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">judolbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">flowin77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gems365</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qq24jam</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">roktoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">raja999</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mikibet157</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pisang77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">net777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sultan889</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">venom77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">macan99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pdtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rf88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">arena138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tamu4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pk95</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sensa123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ajaib368</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">empire29</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tger123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">toto98</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">superslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pns77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rrr777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">riptoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">1888bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wking88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">logika4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hauswin138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">surga4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ceri88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">surga500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewalive88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">amdbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jago77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">layarkaca12</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indobar88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asiacasino</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">puji388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bos888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">km777a</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">udin777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kenzo138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">acctoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bwinbet356</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bakti78</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ratu88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cuan69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">inter333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">konoha78</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">orangkaya77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bikhoki</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rebelbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">leatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vtoto88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">macan88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lotus333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ayu88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">udintoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ziatogel88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lapakslot138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kafewin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hoki333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tuanslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpolux88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">apitoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo1000</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jaguarwin79</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">akunboss</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ruby80000</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">star303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ciatoto88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">spinwd805</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">exsototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">empire77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gopaywins88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">adilqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">abc123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">stadiumtogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gengtoto77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ligasga</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">deragon4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">55bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">svip7</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">king888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jackpot138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tanggo77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ss88bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rahasiaqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">masterhoki</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">abe777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">winsport77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">siokambing</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pmg88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kingdragonjitu</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pojok21</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bwin365</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">colowin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">giat4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rupiahtoto88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qqbet77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alien138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">magnumbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">superhoki99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bigplay77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">winbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">winidnbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">petir777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">spbogoal</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">judolbet888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pokus777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">petir77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pelanet128</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indrabet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wipi4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tkp228</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewawin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wow777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gocengqq9</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cun4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kawan21</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">megajudi</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagakoin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">keris4d3</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">klikvegas</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">spg138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">igcplay88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">matra88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pendi188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">moli777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">arena99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">goaloo188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fosil77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sateslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gb77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dtg88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagamas188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">uss77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indopools4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fultoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo04</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gilabola88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wslot188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajakodam89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ok4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo838</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bandarjudiqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">visabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ceria77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mamibet188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ras77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mami303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rapi66</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bawal99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">1000toto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rafiwd</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gendis666</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">marvel55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">win456</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewi77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lapakhoki</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mia4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dwghoki</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagahitam</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">judobet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bujang138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">er777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">binggo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cucukake89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rans777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gn168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ids138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kkwin777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">abadislot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">makgacor</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kotazeus</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">oborslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">olxoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pulitoto133</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ole77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">casino77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">aos77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">garuda99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dapurpion404</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ysbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">olktoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">metrotvpoker</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pedro188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">draja77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">8vip</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">daya4</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">premen4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qqturbo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pro8bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sc88slot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ik88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bandit188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">grand4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mana77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">carawin777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">caspo77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">party77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">win199</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jakartaqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dotabet66</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gastoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qq11bola</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">camar4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tmbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">megaslot777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slots17</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">minion88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wonplay</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">betawi777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">isobet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">berlian88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">betwintoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yakin77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">polawede</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">superbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mikasajitu</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bet0809</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yb4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qq5796</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sensaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mgo77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gengtoto888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">harley4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">amartoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pedia303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bigslot138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">selot77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gasbor138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">club77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">okb88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">soju888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">9zk</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bukit88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nowgoal66</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">doktertoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jupe88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">remaja18</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">megasensa88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">misterwin77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bkk365</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rezekihoki</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">olxtito</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">deragon88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajabadot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bobototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">aman333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vo777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">keramat77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gs508</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ag4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sonson4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kputoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ratatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">harapan77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">moris77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pt77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">teysentoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ape777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bw188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gboplay777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dynasty4dtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bandar4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kingdomtoto0630</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">7xbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewanaga777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">garuda8888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mami138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dayakslot888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kijang178</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewanaga</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagacoin99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">playslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dentogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">e888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alphaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">master88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hartap73</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bro123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">janjiwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jakaplay</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jiwa168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">togelmaster</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kopi333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">poker77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">super888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">togel118</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">geishatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bwo999</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qq33bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">citra88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">arya888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">scatter33</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot1121</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alexsis17</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">puasbet1</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ads123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">888big</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">talos68</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">koin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hero388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gopro108</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mandiri88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mybet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bigtogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">julislot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">unibet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gajah88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bandarjayatogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">aria88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pion138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">boswin138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hoki888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hh178</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">joswd</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asia123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">javaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo2112</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bighoki88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fayo188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bigwin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bangjago</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">juragan68</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">superwin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bandar808</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lgosultan</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jp77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nowgoal15</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewata888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sgcwin888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">perak77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ludototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotpanas999</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sunda77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gon88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sultan777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vaycasino</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qq12121</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">789luck</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">to228</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">biru77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotbet99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">garuda36</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bagas21</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gb77pro</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">zenpay88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bigcuan</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">super777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jintoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">zigzagslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sonic78</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bingoslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idnscore88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">armadabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sakura138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">koko333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cabang99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewa91</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">depoboss</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lucky365</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bungatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nusabet188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mujurtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">petir86</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">skor808</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">okeplay</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">senadatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lvslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mp007</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sigap168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gbo388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mojobet89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">topan88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fafaslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">togel888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">laju77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">area138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">awet777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">san77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sip77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vip303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kbo77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">aston77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mulaibola88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo7788</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewi228</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jala777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jayanaga26</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">9svip</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hanya77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pramatic88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">katana889</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ayuwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewapoker99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gila123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">granbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dentoto777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dinasty88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wikatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">aman778</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">grandbet188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mami88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">goseno4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">keong4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">triototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo008</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">glory77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mgw138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hometogel88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dominobet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">apktoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sensasional77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">markas388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hyperslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cuan99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpodewa</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tiket2000</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qqwin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">33bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alurtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">oka520</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kilat33</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">suhutoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sableng88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qq39</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asikwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">livescore888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">s4donline</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">royal606</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">superwd88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alx777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">toto288</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">olextoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pandawa77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">buaya89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">avatarslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mjo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bola77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kayarayaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maniakslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">7livescore</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kindomtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hokiemasjoss</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">airhoki88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">eetoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gbohoki108</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sgcuan07</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">demopg</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hoki999</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sugoi168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">meteorqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">garena4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tokoslot77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">svip1</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sobattoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">aoncash88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tigoals808</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">88baru</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jetplay88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indoslot777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ho777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cakrabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">playwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sk8</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">superwin368</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">selot888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yztoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">score808tv</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ratucasino77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">presidenwin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">superliga</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">surgaslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">crazy78</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hokidewaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alfabet303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sd107</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">beton99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">merdekabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kick77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kakap96</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpoid88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">depo4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">koyoslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">saktitoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agam123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jap777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">panen138vip</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wow303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">viet69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">odin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">en777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fortunasport</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ziatogel133</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gentoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lltoto2</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotgembira88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tigagoals</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">timurtogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">7vip</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">viv333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gemilang777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">okta138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fortune228</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">iw777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cuanbanget333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">drugawin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lakujp567</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hkpool</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">linktogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">witoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">joker138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kasuari188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">api888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">microtogel88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">meriam4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jackpot108b</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alfaqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">betflix</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sawit500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gali77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jodohtoto88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">capai138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bioskop45</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">joker888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewaslot888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">superbet303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">melati88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kingkong788</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lumbungslot138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pabriktoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rj168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ceri138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">minbet777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacorbos</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">twinbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hokipro44</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">spin77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagaslot99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hercules88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mdg999</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wahanabola</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpi2121</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotjp</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">y89slot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bolaselot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ck4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ronin89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">toko77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">raffi99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">365kasino</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qqliga</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">raya168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">surgawin77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">luckywin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">king1777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">heroslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ibet77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kepritoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">garuda77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">menara138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bang188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idr777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idcash888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hammertoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cemilanbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kawanbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">808sport</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">topgun777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wow333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ganas77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ug88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wdpro44</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hokidewa88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jempol33</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajadadu</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cor777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">selot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">akasia889</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sedaptoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">taman77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nusa777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">xlslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lagowin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lakutop69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">phoenix288</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jj62</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hometoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lucky72</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">milan99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jaguar88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tysentoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asianbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kenzo55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">aibet365</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">destatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jeboltogel88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mamaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">angkabet39201</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">inter777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wg777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot2121</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mex77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ulti777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">joker388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pandatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">888sport</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">adstoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bos55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">holyslot777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vietnam303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">juangbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gbkwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cuan4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo121</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">interbos88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bwin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bettoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">live88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">liong365</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jasatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">judol88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rp789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">watitoto124</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jepe771</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fit88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tokeqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot234</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agam89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bursatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wbtoto168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sobatkeren21</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">obor128</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotuntung</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">warplay88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bandarbola885</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">toto789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bambumas88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">anakjeus</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpoasia</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ubosport365</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rapi99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cuancash</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">laris888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kanjengtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">legenda55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hokiku888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cocobet138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nenek4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sbo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bos77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fixbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asiamax148</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agnes4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sensa303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lensaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mos77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rafitoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">superwin77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kicau788</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">karmatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">seratus99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alpaslot777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">evototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">win88bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ajuntoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">masterbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bigo138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">oyo77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">raja238</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gudanglagu123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">selotdemo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">suryatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">skyidn99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mahabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wiseplay77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tobrut69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">celinetoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lapak777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">niagatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tso777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">goken138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dontoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rukantoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bersama138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">seluang238</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">superabbit77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kawkawbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bantengmerah88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bet356</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">badak138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hiwinpro</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maxwin4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">777luckyslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mulong4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sptwin888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jav123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">livescore90</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">barabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sepuh4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sensa77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jamin77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sekolahbet78</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bdslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">luxury888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">takip88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">spinbet303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qq228</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ligajp</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vip888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mp08</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idnpoker</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">imbslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bjoplay</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idr88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ayowd88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pegasus77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kera88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">juaratoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dp50rb</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hokibro88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sonicwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gbo500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mama4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">11bolabumi</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bentoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">eslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kencanaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">livescore7m</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bos99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kilat138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">emashitam168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kaitoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sloto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sikowd88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cerislot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kingkongbola</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jp1311</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tulus88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hokinewmacau88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jarwo123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pasartogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dafatoto88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">playslot777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">labubu188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewapetir33</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rusiaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">permata66</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rupiah77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dass534</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">boswd</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">juragan21</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hoki55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewa5000</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lunar788</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asia126</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mancingduit788</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">win123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">berkahtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">garpit77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">badai77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">grendbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ares88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sand777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">inibet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ajoselot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rektoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">harumtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">eurotogell</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jago138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sumotogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ojo89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">max777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idetoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">setar77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mariatogel888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kaskustoto88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">menang138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dodo555</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">svip13</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">luckvip</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sultankoin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sultanpro28</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hoki89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hbc69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cashnet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tanduktoto1</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asiaslot365</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">derekturtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">crot777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sesetoto02</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewa999</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ayolatogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bangjago88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">garuda777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">oppototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vip777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bajo77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagamastoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pwe128</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">katak69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">milyarbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jkt88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">linetogel88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wintoto88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sexsytogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">taxibet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">galaksi77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">na2121</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pgbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cafe777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qqmega</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jnt7777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">77win1</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jalalive99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">titanslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">demoselot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qqq1221</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">metaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">raja77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">spin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bet9ja</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mahkota138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rolex88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ata4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">autobet577</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ss88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pakcoy138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">anakemas99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">78toto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">browin888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">seleb66</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">77rabit</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jnetoto88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">amerika89pro</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indo500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mager789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">winbet138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pandora888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">freespin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">garuda4</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alexisslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cuan169</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rbt777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">royalplay</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">betseru</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wild88jackpot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajacumi</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">see789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">123slot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tigoals185</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">crindo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tanya4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situstoto139</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">okepkv</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pangeran77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">garudawin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagitabet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bet77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">okebos86</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lalatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">akun777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ojol777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idnscore808</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">langit777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotidr</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qq388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">inova77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hartaspin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sehatitoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kinghoursetoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo444</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">arwana89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">princes88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">po4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajabandot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ziatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kiss918</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">antiktogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sultanspin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kumpultoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">spin777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">satset38</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cafe303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dangdut4dd</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kartel4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">surga333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cuma777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">daddytoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">soccer88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mabarbos189</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">58win1</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">garasibet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sbr014</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ws168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">starbuckspoker</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lapakkuda</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">paladium4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">merdekaqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">raibola44</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">musimtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo505</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">putrawin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">motionime</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot88bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cum4k</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">x88vip</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hrdtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">daun4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">javggnet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">marjan88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vegas696</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">budaya77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agen168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo8</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">88slot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">paten788</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wdsukses</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">emas777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">socer808</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">galaxi77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jonitoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">king128</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pos4d333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">okwla</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">joker123net</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hotwd44</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alexsa88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagawins</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indo118</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kencangslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">togelup127</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bintang77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajadewa288</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wongslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">unikgacor587</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">topscore</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hoki303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">banktogel88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">88bigslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">surga12</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hdx4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dkiplay</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cosmototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rtv77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tiger98</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">siaran99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">livebet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">panglimabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pastijp</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dorongtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewi777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">megaselot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dino68</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cairbos88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">poll88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">akademislot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">grabwin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">spg777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jepe777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">densustoto88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ahlibet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">simantoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">oxybet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ahli777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">taksi4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ligahokie22</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qq77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vgatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">koi202</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">android4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">link4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">xo638</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tiger289</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">siti4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">neng4</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sketer88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">formulaqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">valotogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">petruk303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">winbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hokibos88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situs62079</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">shel5000</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mutu77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">baki88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">robotslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fb88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">replay79</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">turbox500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewaasia88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mideatoto88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">naga101</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sga88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">grenbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">simontoks</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yoktogel88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">takagol5858</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">diamon138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">naga20000</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">metic4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tuyul501</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asiragame</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">totohub</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ovabet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bo555</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hdltoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jutawan88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">labubujitu</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">teratai88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hondabet99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sahabat4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jphk88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">petruk88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sp77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bioskop168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hoky69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">superbet44</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">zeuz138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tokokoin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">1221slot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jablai123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bang77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cakar66</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lipototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jaya777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wao138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sport088</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">protogel168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">empayer88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">balijitu</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">oppatoto168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">liga8bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idr138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lumbung805</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hot501</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">protogel176</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qqjoker</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bobo777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">patih88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">zeus777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">to3030</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">longtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo108</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">besar88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">metrolagu321</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kios777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">id777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">menangcuan55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idtogel4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">888casino</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fokus822</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kutai99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rupiatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pulitoto139</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pitungtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">88dewaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">super77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">livescore1234</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">duren77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">76bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tele88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">playscore</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idn88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">saga108</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agen5758</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">selot777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cashslot777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">partaitogel124</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ufo77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agb88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">betwin138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">liga500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ara4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bioskopkeren21</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">we878</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maudy</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ktp168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">abc333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hunian303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qiuqiu88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">apektoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotwin68</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">extoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indobos88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacorbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">777bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hoki18</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kamboja4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mamajitu4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gilaloto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gangsing77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jp500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bosku77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gege88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagaliga</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bir123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kopi89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">333bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bandarjp33</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">neo777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">oppoa38</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hedon77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gobets88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">incess88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">narutobet123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gt777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">qq333</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gus777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">h8toto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tko777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agent303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">to128</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tkp88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mabar89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">selot138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">axl77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rans33</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bagan4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">raja188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gelastoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewi500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hedon4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cp777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">paristoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yoko99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bolaemas99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">petetogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gashoki</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">suara805</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mplay5000</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">klx4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">okekode</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">balitoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">piala899</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">liartoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hp77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">domaintoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">8728slots</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bit88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rimbaslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agenslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">etawa99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ovo178</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">togel777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">royalkasino</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bangkertoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewaspin777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">modalhoki</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">raja55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">y89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">projp</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cina88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">zet77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tribun588</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mastoto77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rjsslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dewa168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vipasia77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gugus789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">admin123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tesentoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">serurp777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">miranabet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">simpati88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gcr188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mandiribet168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jaminjp188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">azul77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">betplace88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bestiebet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cempaka88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">geraitoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">setarwin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kepo365</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">citrawin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">aries188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yugen4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dingdongtogel88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">komiknesia</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">texasqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fiatogel88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">togelslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">goaloo888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bosgacor88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bintangtogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cium4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">selera303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">otakupoi</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">zonabet303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">andra77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">warga789</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bromototo</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tuan99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ojek55</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nagawin77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">masterkoin99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ratuking</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">silangitjitu</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ufcslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">eros4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">uangvip</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">latotoslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maniaqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">latolato138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mevius4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mahagacor</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bomba138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mentalslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">key4ad</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maxslot99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bondan89</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mbah500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">7276slot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cegiltop88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">situng138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rjp777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">megawin118</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dpo777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ina77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">celenganslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">linktogel77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jantan68</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">legendtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">onces4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slotoppo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gaca168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">e2000m</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bangsawin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dragon696</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cabe88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idnplay</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">angkot77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ceri338</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">superwd58</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">omtogelku</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">live77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">partaitoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">angkasa77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tombaktoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kreasibet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pandora4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">start77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ojol88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">56bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">elexsistogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pg500</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kucing4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wbtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">8278slots</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">56kbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">asia388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">winbaru678</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">178hoki</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mariatogel167</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">naruto189</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lanlan4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hokiemas4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">padi888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jaktoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">w88asia</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tokobet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">too288</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pulau77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">beton123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bass99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indrajitu</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">togelasia88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">superliga188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">japanslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tigoals32</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maharajaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">batavia99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mt77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">luck678</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">patin69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">duta138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bandot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">winwinbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pulo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">persidenslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sone248</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jt777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">juaraplay14</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">555bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bola288</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">batu77bara</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">66ebet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">polo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">suhu328</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">smstoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jaguar777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">maria4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nusa4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">11winbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">svip8</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">metal4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nowgoal666</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">andara777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cherry188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">niko4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ads368</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bandottoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bigtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tarowin3d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dkltoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gas123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mukapoker</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">opaltogel88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">zk988</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bethoki82</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sandbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">boyapoker</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">liga788idn</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">midasxxi</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">antarbett</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indratogell</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">skytoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">s7win</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cineplex21</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">boscuan777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">shiotogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">75kbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rajamajong</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hyperhack88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">javtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alexistigel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">twsslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pastiwd</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bobatoto8</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">menarik88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">batak4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kasbon88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">perotogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">minangtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sule99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">goaloo890</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fbtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">simpanse4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lgoace76pro</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bonus4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">22rbet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">peso4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alexixtogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sgm234</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">66bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mr888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">balon69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">batiktoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bosini188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">acetop47</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">prada4</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">shp888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">uss777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpowin77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">layakaca21</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pdtogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ramayana77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">b2000m</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rabit777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jojobet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pondasibet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">score8</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cmw555</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">oreo4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">balltoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">timortoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sojutoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ap77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cocol888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rabit77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">nyala4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jonitogel176</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pakdetogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">vio77maxwin</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">opajudi</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rabbit77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sni77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">idcas88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">klf88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">sins888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">setanhoki</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hot985</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">agenslot77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">8888slot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">2739slot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">75bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot100</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kurodesu</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">plnslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">netral88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">koinplay</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">opi4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rogtoto12</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">89tiger</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">neraca69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">77rabbit</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">robin99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">9animetv</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indosbobet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">wishbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indogaming</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bareng888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pintu888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gudangqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">fontana188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">macaubet77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pelitaslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">motorwin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">oasis88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">balivegas188</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">deposlot777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gokil777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ketempelan99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ufo555</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ratuslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rivalbet303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">astra338</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">polagacor168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pargoy4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">duniaslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ace99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pendekartogel</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacor131</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">omega138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gbtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">axeslot77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kamarslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">megalux138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alexistogel77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ubo4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">obs138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pusaka787</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bola009</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">icbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">mpo69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">togelonline77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">indopoker</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">kuliahtoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">selotgacorku</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">manditoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">rabbit777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jebol4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">coconut388</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ultraslot777</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">333gaming</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">hero88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gaptoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacor680</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jamu78</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">proslot23</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">moge88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">joker77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">osiris4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">shio77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">angin88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">csbo88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pokergalaxi</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">moleslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">portal138</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">emas69</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bola010</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">cebutoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ligaonline888</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ori88bet</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tingting121</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bola002</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">gacor7</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">55kgame</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">jantanslot88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">bola433</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">axiooqq</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">pekanbola</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">tambang99</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">buncitbet77</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">petani88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">anggun88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">slot628</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">alfa338</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">ck303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">evoslot168</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">letnan303</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">metalbet88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">esatoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">virtueslot</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">join123</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">btv186</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">yotogel88</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">singajp</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">spin238</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">dgibola</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">morgan4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">paneltoto</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">emba4d</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">teo288</a>,<a href="https://blkbanyuwangi.kemnaker.go.id/">lodaya77</a></div><p></p>
       <noscript>
    <div class="message global noscript">
            <div class="content">
                <p>
                    <strong>sepertinya JavaScript tidak aktif pada browser anda </strong>
                    <span>
                        Untuk pengalaman terbaik di situs kami, pastikan untuk mengaktifkan Javascript di browser Anda.                    </span>
                </p>
            </div>
        </div>
    </noscript>

<script data-breeze>
var cookiesConfig = {
    expires: null,
    path: '\u002F',
    domain: '.mothercare.co.id',
    secure: true,
    lifetime: '3600'
};
</script>

<script type="text/x-magento-init" data-breeze-processed="true">
    {
        "*": {
            "Magento_GoogleTagManager/js/google-tag-manager-cart": {
                "blockNames": ["category.products.list","product.info.upsell","catalog.product.related","checkout.cart.crosssell","search_result_list"],
                "cookieAddToCart": "add_to_cart",
                "cookieRemoveFromCart":
                    "remove_from_cart",
                "advancedAddToCart": "add_to_cart_advanced"
            }
        }
    }
</script>
<script>
var googleMapsConfig = {
    src: 'https\u003A\u002F\u002Fmaps.googleapis.com\u002Fmaps\u002Fapi\u002Fjs\u003Fv\u003D3\u0026key\u003D',
    style: '',
    apiKey: ''
}
</script>
<div class="page-wrapper"><header class="page-header"><div class="panel wrapper"><div class="panel header" style="background: linear-gradient(135deg, #3787d4, #27c959);"><a class="action skip contentarea" href="#contentarea">
    <span>
        lewati ke Konten    </span>
</a>
<div class="left_top_header">
<div class="top-header-components-mc left-top">
  <div class="header_panel_info">
    <ul>
      <li class="download-app-link">
        <a href="https://alexistoto.aksespintu.com/blkbanyuwangi/">
          <img width="14" height="14" alt="download icon" loading="lazy" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/app.png">
          download apps
        </a>
        <div class="download-popup">
          <div class="wrap">
            <div class="right-cols">
              <div class="app-content">
                download app  from:
                <div class="view code app_store">
                    <a class="sh-store-link" href="https://alexistoto.aksespintu.com/blkbanyuwangi/" target="_blank" ng-click="callAction($event, 'appStore')">
                        <img loading="lazy" width="200" height="60" alt="app store" class="sh-store-link__image" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/apple-en.png">
                    </a>
                </div>
                <div class="view code play_store">
                    <a class="sh-store-link" data-test="google-play-link" href="https://alexistoto.aksespintu.com/blkbanyuwangi/" target="_blank" ng-click="callAction($event, 'appStore')">
                        <img loading="lazy" width="200" height="60" alt="google play" class="sh-store-link__image" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/google-en.png">
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li>
        <a href="https://alexistoto.aksespintu.com/blkbanyuwangi/">
          <img loading="lazy" width="22" height="22" alt="gift registry icon" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gift_white.svg">
          gift registry        </a>
      </li>
    </ul>
</div>
</div>
</div><div class="right_top_header">
        <div class="switcher language switcher-language" data-ui-id="language-switcher" id="switcher-language">
        <strong class="label switcher-label"><span>Bahasa</span></strong>
        <div class="actions dropdown options switcher-options">
            <div class="action toggle switcher-trigger" id="switcher-language-trigger">
                <strong class="view-mothercare_website_bahasa">
                    <span>ID</span>
                </strong>
            </div>
            <div class="ui-dialog mage-dropdown-dialog" role="dialog" style="display: none;"><ul class="dropdown switcher-dropdown" data-mage-init="{&quot;dropdownDialog&quot;:{
                &quot;appendTo&quot;:&quot;#switcher-language &gt; .options&quot;,
                &quot;triggerTarget&quot;:&quot;#switcher-language-trigger&quot;,
                &quot;closeOnMouseLeave&quot;: false,
                &quot;triggerClass&quot;:&quot;active&quot;,
                &quot;parentClass&quot;:&quot;active&quot;,
                &quot;buttons&quot;:null}}" data-breeze-processed="true">


        </ul></div><div class="ui-dialog mage-dropdown-dialog" role="dialog" style="display: none;"><ul class="dropdown switcher-dropdown" data-mage-init="{&quot;dropdownDialog&quot;:{
                &quot;appendTo&quot;:&quot;#switcher-language &gt; .options&quot;,
                &quot;triggerTarget&quot;:&quot;#switcher-language-trigger&quot;,
                &quot;closeOnMouseLeave&quot;: false,
                &quot;triggerClass&quot;:&quot;active&quot;,
                &quot;parentClass&quot;:&quot;active&quot;,
                &quot;buttons&quot;:null}}" data-breeze-processed="true">


        </ul></div></div>
    </div>
<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "ID";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
color:#000;
}

input:checked + .slider {
  background-color: #ccc;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
content:"EN";
color:#000;
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
<div class="top-header-components-mc">
	<div class="lang-switch-mc">
		<li><label class="switch">
			<input type="checkbox" checked>
			<span class="slider round"></span>
			</label>
		</li>
	</div>
	<div class="header_panel_info">
    <ul>
      <li><a href="https://alexistoto.aksespintu.com/blkbanyuwangi/"><img loading="lazy" width="22" height="22" alt="store finder icon" src="https://cdn-icons-png.freepik.com/512/8372/8372083.png">LOGIN</a></li>
  		<li><a href="https://alexistoto.aksespintu.com/blkbanyuwangi/"><img loading="lazy" width="22" height="22" alt="Kanmo Circle logo" src="https://cdn-icons-png.freepik.com/512/8372/8372083.png">DAFTAR</a></li>
  		<li><a href="https://alexistoto.aksespintu.com/blkbanyuwangi/" target="_blank"><img loading="lazy" width="22" height="22" alt="Whatsapp logo" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/Whatsapp_Logo.svg"> Contact Us</a></li>
    </ul>
	</div>
</div>
<style>
.header_panel_info ul{
display:flex;
column-gap: 20px;
list-style: none;
}
.header_panel_info img{
margin-right:10px;
}
.panel.header div {
    width: 100%;
}
.top-header-components-mc {
    display: flex;
    justify-content: space-between;
}
.lang-switch-mc li {
    list-style: none;
}
@media only screen and (max-width: 769px) {
  .header_panel_info ul {
    flex-direction: column;
}
}
</style>
</div></div></div><div class="header content"><span data-action="toggle-nav" class="action nav-toggle" tabindex="0"><span>Toggle Nav</span></span>
<a class="logo" href="https://blkbanyuwangi.kemnaker.go.id/" title="" aria-label="store logo">
    <img src="https://res.cloudinary.com/daydnseot/image/upload/v1778205815/logo-slot-gacor_cjf07b.png" title="" alt="" width="155" height="28">
</a>

<div class="kanmo-middle-header"><div class="navigation-wrapper"><span data-action="toggle-nav" class="button-close" tabindex="0"></span><div class="top-header-components-mc mobile-component">
  <div class="header_panel_info">
    <ul>
      <li><a href="https://blkbanyuwangi.kemnaker.go.id/"><span><img loading="lazy" width="22" height="22" alt="Kanmo Circle logo" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/KanmoCircle.svg"></span>about Kanmo Circle</a></li>
      <li><a href="https://blkbanyuwangi.kemnaker.go.id/"><img loading="lazy" width="22" height="22" alt="gift registry icon" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gift_blue.svg">gift registry</a></li>
      <li><a href="https://blkbanyuwangi.kemnaker.go.id/"><span><img loading="lazy" width="22" height="22" alt="store finder icon" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/storefinder_blue.svg"></span>store finder</a></li>
      <li><a href="https://blkbanyuwangi.kemnaker.go.id/" target="_blank"><span><img loading="lazy" width="22" height="22" alt="Whatsapp logo" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/Whatsapp_Logo.svg"></span>contact us</a></li>

    </ul>

  </div>
</div>
<div class="block ves-menu ves-megamenu-mobile " id="menu-top-mothercare1742308061777474800-menu">
		<nav class="navigation" role="navigation" data-action="navigation">
		<ul id="menu-top-mothercare1742308061777474800" class="ves-megamenu menu-hover ves-horizontal " data-mage-init="{&quot;menu&quot;:{&quot;responsive&quot;:false, &quot;expanded&quot;:false, &quot;position&quot;:{&quot;my&quot;:&quot;left top&quot;,&quot;at&quot;:&quot;left bottom&quot;}}}" data-toggle-mobile-nav="false" data-breeze-processed="true">
			<li id="vesitem-884521742308061573800708" class=" nav-item level0 submenu-left subhover  dropdown level-top "><a href="https://blkbanyuwangi.kemnaker.go.id/" style="font-size:12px;" class=" nav-anchor"><span>ALEXISTOTO</span><span class="caret"></span><span class="opener"></span></a><div class="submenu animated  dropdown-menu" style="width:100%;animation-duration: 0.5s;-webkit-animation-duration: 0.5s;"><div class="content-wrap"><div class="megamenu-content" style="width:100%"><div class="nav-dropdown">
<div class="nav-desk row equal nav-revamp">
    <div class="col-md-12">
        <div class="row">
          <div class="brand-az">
            <a href title="A" class="active">A</a>
            <a href title="B">B</a>
            <a href title="C">C</a>
            <a href title="D">D</a>
            <a href title="E">E</a>
            <a href title="F">F</a>
            <a href title="G">G</a>
            <a href title="H">H</a>
            <a href title="I">I</a>
            <a href title="J">J</a>
            <a href title="K">K</a>
            <a href title="L">L</a>
            <a href title="M">M</a>
            <a href title="N">N</a>
            <a href title="O">O</a>
            <a href title="P">P</a>
            <a href title="Q">Q</a>
            <a href title="R">R</a>
            <a href title="S">S</a>
            <a href title="T">T</a>
            <a href title="U">U</a>
            <a href title="V">V</a>
            <a href title="W">W</a>
            <a href title="X">X</a>
            <a href title="Y">Y</a>
            <a href title="Z">Z</a>
            <a href title="0" class="number" style="white-space: nowrap;">0-9</a>
          </div>
          <div class="brand-wrapper">
            <p class="brand-name" style="display: block;"><a href="/brand-a-z/addo.html">Addo</a></p>
            <p class="brand-name" style="display: block;"><a href="/brand-a-z/adidas.html">Adidas</a></p>
            <p class="brand-name" style="display: block;"><a href="/brand-a-z/airfree.html">Airfree</a></p>
            <p class="brand-name" style="display: block;"><a href="/brand-a-z/alamii.html">Alamii</a></p>
            <p class="brand-name" style="display: block;"><a href="/brand-a-z/amara.html">Amara</a></p>
            <p class="brand-name" style="display: block;"><a href="/brand-a-z/aqua-scale.html">Aqua Scale</a></p>
            <p class="brand-name" style="display: block;"><a href="/brand-a-z/asics.html">Asics</a></p>
            <p class="brand-name" style="display: block;"><a href="/brand-a-z/aveeno.html">Aveeno</a></p>
            <p class="brand-name" style="display: block;"><a href="/brand-a-z/awan.html">Awan</a></p>
            <p class="brand-name" style="display: block;"><a href="/brand-a-z/azetabio.html">Azetabio</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/baabaasheepz.html">Baabaasheepz</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/babiators.html">Babiators</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/dove.html">Baby Dove</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/baby-jogger.html">Baby Jogger</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/baby-rovega.html">Baby Rovega</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/babybee.html">Babybee</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/banana-boat.html">Banana Boat</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/banz.html">Banz</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/barbie.html">Barbie</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/beaba.html">Beaba</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/beauty-barn.html">Beauty Barn</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/bio-oil.html">Bio Oil</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/biolane.html">Biolane</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/bite-fighters.html">Bite Fighters</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/bizzi-growin.html">Bizzi Growin</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/blackmores.html">Blackmores</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/blooming-marvellous.html">Blooming Marvellous</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/bonnels.html">Bonnels</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/bravado.html">Bravado</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/bruder.html">Bruder</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/brush-baby.html">Brush Baby</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/buds.html">Buds Organics</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/bugaboo.html">Bugaboo</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/buggygear.html">Buggygear</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/bumkins.html">Bumkins</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/cetaphil.html">Cetaphil</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/chicco.html">Chicco</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/childlife.html">Childlife</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/clevamama.html">Clevamama</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/cocolatte.html">Cocolatte</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/cottonseeds.html">Cottonseeds</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/cozy-n-safe.html">Cozy N Safe</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/crane.html">Crane</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/cybex.html">Cybex</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/dae-organics.html">Dae Organics</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/docare.html">Docare</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/doona.html">Doona</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/down-to-earth.html">Down To Earth</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/drew.html">Drew</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/dr-brown-s.html">Dr. Brown's</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/elc.html">ELC</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/ergobaby.html">Ergobaby</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/expert-care.html">Expert Care</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/ezyroller.html">Ezyroller</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/felt-so-sweet.html">Felt So Sweet</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/fisher-price.html">Fisher Price</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/flipper.html">Flipper</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/friends-of-sally.html">Friends Of Sally</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/gb.html">Gb</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/geko.html">Geko</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/graco.html">Graco</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/gund.html">Gund</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/habbie.html">Habbie</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/haenim.html">Haenim</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/happy-horse.html">Happy Horse</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/happy-tummy.html">Happy Tummy</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/hauck.html">Hauck</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/havaianas.html">Havaianas</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/hegen.html">Hegen</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/hot-wheels.html">Hot Wheels</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/hybrid.html">Hybrid</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/inlacta-dha.html">Inlacta DHA</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/interlac.html">Interlac</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/ivenet.html">Ivenet</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/jack-n-jill.html">Jack N Jill</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/joie.html">Joie</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/joolz.html">Joolz</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/jujube.html">Jujube</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/kiddycuts.html">Kiddycuts</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/kumon.html">Kumon</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/leapfrog.html">Leapfrog</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/leclerc.html">Leclerc</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/lee-vierra.html">Lee Vierra</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/lillebaby.html">Lillebaby</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/little-bird-told-me.html">Little Bird Told Me</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/little-miss-janis.html">Little Miss Janis</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/london-taxi.html">London Taxi</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/love-to-dream.html">Love To Dream</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/magformers.html">Magformers</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/mamaschoice.html">Mama's Choice</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/mamas-papas.html">Mamas&amp;Papas</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/mamaway.html">Mamaway</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/maxi-cosi.html">Maxi Cosi</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/megabloks.html">Megabloks</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/micro.html">Micro</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/mideer.html">MiDeer</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/mimi-lula.html">Mimi &amp; Lula</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/mini-monkey.html">Mini Monkey</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/moby.html">Moby</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/momami.html">Momami</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/mothercare.html">Mothercare</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/mustela.html">Mustela</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/my-buddy-tag.html">My Buddy Tag</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/my-k.html">My K</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/naif.html">Naif</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/nike.html">Nike</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/nordic-natural.html">Nordic Natural</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/nuby.html">Nuby</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/nuna.html">Nuna</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/oh-ma-grain.html">Oh Ma Grain</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/okiedog.html">Okiedog</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/peachy.html">Peachy</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/phil-ted-s.html">Phil &amp; Ted's</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/philips-avent.html">Philips Avent</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/pigeon.html">Pigeon</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/playgro.html">Playgro</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/poled-global.html">Poled Global</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/ponycycle.html">Ponycycle</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/puma.html">Puma</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/pureats.html">Pureats</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/qv-baby.html">QV Baby</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/real-shades.html">Real Shades</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/red-castle.html">Red Castle</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/ribbon-madness.html">Ribbon Madness</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/sebamed.html">Sebamed</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/silver-cross.html">Silver Cross</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/simply-idea.html">Simply Idea</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/skip-hop.html">Skip Hop</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/spectra.html">Spectra</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/squishmallows.html">Squishmallows</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/starbooks.html">Starbooks</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/stick-o.html">Stick-O</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/stokke.html">Stokke</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/sudocrem.html">Sudocrem</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/sumimo.html">Sumimo</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/sunnylife.html">Sunnylife</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/sun-staches.html">Sun-Staches</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/swimava.html">Swimava</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/tommee-tippee.html">Tommee Tippee</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/trunki.html">Trunki</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/tutti-bambini.html">Tutti Bambini</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/twistshake.html">Twistshake</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/ty-toys.html">TY Toys</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/veja.html">Veja</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/vitaflow.html">Vitaflow</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/vtech.html">Vtech</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/waterland.html">Waterland</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/wellness.html">Wellness</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/xootz.html">Xootz</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/yamatoya.html">Yamatoya</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/zaxy.html">Zaxy</a></p>
            <p class="brand-name" style="display: none;"><a href="/brand-a-z/zoggs.html">Zoggs</a></p>
            <p class="brand-name numb" style="display: none;"><a href="/brand-a-z/4moms.html">4Moms</a></p>
            <p class="brand-name numb" style="display: none;"><a href="/brand-a-z/59s.html">59S</a></p>

          </div>

        </div>
    </div>
</div>
<div class="nav-mob row equal has-image">
    <div class="col-md-12">
        <div class="row">
            <!--column 1-->
            <div class="col-md-3">
                <div class="mn-block">
                    <h4 class="screen-only">Brand A-Z</h4>
                    <div class="menav" style="height: 340px; width: 240px; border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                      <ul style="width: 100%; border: 0px;">
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">A</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/addo.html">Addo</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/adidas.html" class="">Adidas</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/airfree.html" class="">Airfree</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/alamii.html">Alamii</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/amara.html">Amara</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/aqua-scale.html">Aqua Scale</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/asics.html">Asics</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/aveeno.html">Aveeno</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/awan.html">Awan</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/azetabio.html">Azetabio</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">B</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/baabaasheepz.html">Baabaasheepz</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/babiators.html">Babiators</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/dove.html">Baby Dove</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/baby-jogger.html">Baby Jogger</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/baby-rovega.html">Baby Rovega</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/babybee.html">Babybee</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/banana-boat.html">Banana Boat</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/banz.html">Banz</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/barbie.html">Barbie</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/beaba.html">Beaba</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/beauty-barn.html">Beauty Barn</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/bio-oil.html">Bio Oil</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/biolane.html">Biolane</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/bite-fighters.html">Bite Fighters</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/bizzi-growin.html">Bizzi Growin</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/blackmores.html">Blackmores</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/blooming-marvellous.html">Blooming Marvellous</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/bonnels.html">Bonnels</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/bravado.html">Bravado</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/bruder.html">Bruder</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/brush-baby.html">Brush Baby</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/buds.html">Buds Organics</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/bugaboo.html">Bugaboo</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/buggygear.html">Buggygear</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/bumkins.html">Bumkins</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">C</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/cetaphil.html">Cetaphil</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/chicco.html">Chicco</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/childlife.html">Childlife</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/clevamama.html">Clevamama</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/cocolatte.html">Cocolatte</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/cottonseeds.html">Cottonseeds</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/cozy-n-safe.html">Cozy N Safe</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/crane.html">Crane</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/cybex.html">Cybex</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">D</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/dae-organics.html">Dae Organics</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/docare.html">Docare</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/doona.html">Doona</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/down-to-earth.html">Down To Earth</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/drew.html">Drew</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/dr-brown-s.html">Dr. Brown's</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">E</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/elc.html">ELC</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/ergobaby.html">Ergobaby</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/expert-care.html">Expert Care</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/ezyroller.html">Ezyroller</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">F</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/felt-so-sweet.html">Felt So Sweet</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/fisher-price.html">Fisher Price</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/flipper.html">Flipper</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/friends-of-sally.html">Friends Of Sally</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">G</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/gb.html">Gb</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/geko.html">Geko</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/graco.html">Graco</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/gund.html">Gund</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">H</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/habbie.html">Habbie</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/haenim.html">Haenim</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/happy-horse.html">Happy Horse</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/happy-tummy.html">Happy Tummy</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/hauck.html">Hauck</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/havaianas.html">Havaianas</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/hegen.html">Hegen</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/hot-wheels.html">Hot Wheels</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/hybrid.html">Hybrid</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">I</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/inlacta-dha.html">Inlacta DHA</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/interlac.html">Interlac</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/ivenet.html">Ivenet</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">J</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/jack-n-jill.html">Jack N Jill</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/joie.html">Joie</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/joolz.html">Joolz</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/jujube.html">Jujube</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">K</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/kiddycuts.html">Kiddycuts</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/kumon.html">Kumon</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">L</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/leapfrog.html">Leapfrog</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/leclerc.html">Leclerc</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/lee-vierra.html">Lee Vierra</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/lillebaby.html">Lillebaby</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/little-bird-told-me.html">Little Bird Told Me</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/little-miss-janis.html">Little Miss Janis</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/london-taxi.html">London Taxi</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/love-to-dream.html">Love To Dream</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">M</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/magformers.html">Magformers</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/mamaschoice.html">Mama's Choice</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/mamas-papas.html">Mamas&amp;Papas</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/mamaway.html">Mamaway</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/maxi-cosi.html">Maxi Cosi</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/megabloks.html">Megabloks</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/micro.html">Micro</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/mideer.html">MiDeer</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/mimi-lula.html">Mimi &amp; Lula</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/mini-monkey.html">Mini Monkey</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/moby.html">Moby</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/momami.html">Momami</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/mothercare.html">Mothercare</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/mustela.html">Mustela</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/my-buddy-tag.html">My Buddy Tag</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/my-k.html">My K</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">N</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/naif.html">Naif</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/nike.html">Nike</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/nordic-natural.html">Nordic Natural</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/nuby.html">Nuby</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/nuna.html">Nuna</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">O</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/oh-ma-grain.html">Oh Ma Grain</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/okiedog.html">Okiedog</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">P</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/peachy.html">Peachy</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/phil-ted-s.html">Phil &amp; Ted's</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/philips-avent.html">Philips Avent</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/pigeon.html">Pigeon</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/playgro.html">Playgro</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/poled-global.html">Poled Global</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/ponycycle.html">Ponycycle</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/puma.html">Puma</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/pureats.html">Pureats</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">Q</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/qv-baby.html">QV Baby</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">R</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/real-shades.html">Real Shades</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/red-castle.html">Red Castle</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/ribbon-madness.html">Ribbon Madness</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">S</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/sebamed.html">Sebamed</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/silver-cross.html">Silver Cross</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/simply-idea.html">Simply Idea</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/skip-hop.html">Skip Hop</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/spectra.html">Spectra</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/squishmallows.html">Squishmallows</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/starbooks.html">Starbooks</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/stick-o.html">Stick-O</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/stokke.html">Stokke</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/sudocrem.html">Sudocrem</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/sumimo.html">Sumimo</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/sunnylife.html">Sunnylife</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/sun-staches.html">Sun-Staches</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/swimava.html">Swimava</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">T</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/tommee-tippee.html">Tommee Tippee</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/trunki.html">Trunki</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/tutti-bambini.html">Tutti Bambini</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/twistshake.html">Twistshake</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/ty-toys.html">TY Toys</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">U</h5>
                          </li>
                          <li>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">V</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/veja.html">Veja</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/vitaflow.html">Vitaflow</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/vtech.html">Vtech</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">W</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/waterland.html">Waterland</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/wellness.html">Wellness</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">X</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/xootz.html">Xootz</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">Y</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/yamatoya.html">Yamatoya</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">Z</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/zaxy.html">Zaxy</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/zoggs.html">Zoggs</a></p>
                          </li>
                          <li style="width: 100%; border: 0px;">
                              <h5 class="edh5">0-9</h5>
                          </li>
                          <li>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/4moms.html">4Moms</a></p>
                              <p class="brand-name" style="display: block;"><a href="/brand-a-z/59s.html">59S</a></p>
                          </li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<style media="screen">
  .ves-megamenu li.level0>a.anchor-active, .ves-megamenu-mobile .nav-mobile li.level0>a.anchor-active {
    color: #003971;
  }
  .nav-desk {
    display:flex;
  }
  .nav-mob {
    display:none;
  }
  .menav .te_az {
    display: block !important;
  }
  .menav .te_az .ks_content {
    padding-bottom: 10px;
  }
  @media screen and (min-width: 640px) {
    .header.content .ves-megamenu.menu-hover .subhover:hover .megamenu-content .menav ul li p {
        border: 0;
        padding: 0;
        padding-bottom: 5px;
        text-transform: lowercase;
    }
  }

  @media screen and (max-width: 767px) {
    .nav-desk {
      display:none;
    }
    .nav-mob {
      display:flex;
    }
    .mn-block .menav {
      min-height: 20px;
      margin: 10px;
    }
  }
  .brand-az {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    flex-flow: wrap row;
    margin: 0 20px 20px;
    border-bottom: 1px solid #e3e3e3;
  }
  .brand-az a {
    display: flex;
    justify-content: center;
    padding: 10px !important;
    border-radius: 8px;
    font-size: 1.2em;
    line-height: 1;
    font-weight: 500;
    text-decoration: none;
    color: darkgray;
  }

  .brand-az a:hover {
    background: #ddd;
    color: #444;
  }

  .brand-az a.active {
    background: #1979c3!important;
    color: #fff !important;
  }
  .brand-wrapper {
    display: grid;
    grid-template-columns: repeat(6,1fr);
    width: 100%;
    margin: 0 20px;
  }
  .ves-megamenu .nav-revamp .row {
    display: flex;
    flex-wrap: wrap;
  }
  .headcontent p, .headcontent p a{
    color: #165c7d!important;
    font-weight: 600;
    margin-bottom: 5px !important;
    font-size:18px;
  }
  .navigation .level0 .submenu .ks_content p a {
    color: #414141;
    text-decoration: none;
    font-size:14px;
  }
  .navigation .level0 .submenu .ks_content p a:hover,
  .headcontent p a:hover {
    text-decoration: underline;
    color: #003971!important;
  }
  .te_az .ks_content p {
    margin-bottom: 3px;

  }

  .ves-menu .ves-megamenu.menu-hover .dropdown.clicked>.dropdown-menu {
      width: 100%;
  }
  .mn-block .menav {
    min-height: 45px;
  }

  @media screen and (max-width: 767px) {
    .ves-megamenu .nav-revamp .row {
      display: block;
    }
    .brand-az {
      width: 265px;
      overflow-x: scroll;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-flow: row;
      margin: 0 10px 10px;
    }
    .brand-wrapper {
      display: grid;
      grid-template-columns: repeat(2,1fr);
    }
    .mn-block .menav {
      min-height: 20px;
      margin: 10px;
    }
    .nav-mobile li {
      border: 0 !important;
    }
    .headcontent p, .headcontent p a {
      font-size: 16px;
    }
  }

</style></div></div></div></div></li><li id="vesitem-8845517423080611320572800" class=" nav-item level0 submenu-left subhover  dropdown level-top "><a href="https://blkbanyuwangi.kemnaker.go.id/" style="font-size:12px;white-space: nowrap;" class=" nav-anchor"><span>SITUS SLOT</span><span class="caret"></span><span class="opener"></span></a><div class="submenu animated  dropdown-menu" style="width:100%;animation-duration: 0.5s;-webkit-animation-duration: 0.5s;"><div class="content-wrap"><div class="megamenu-content" style="width:100%"><div class="nav-dropdown">
<div class="row">
  <!-- column 1  -->
  <div class="col-md-2 col-sm-3">
      <div class="mn-block">
          <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
              <div class="headcontent">
                  <p><a href="/new-arrival/fashion.html">produk terbaru</a></p>
              </div>

          </div>
      </div>

      <div class="mn-block">
          <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
              <div class="headcontent">
                <p>aksesoris</p>
              </div>
              <ul class="te_az" style="padding:0;">
                  <li class="ks_content">
                    <p><a href="/kids-accessories/bags.html">tas</a></p>
                    <p><a href="/kids-accessories/sunglasses.html">kacamata</a></p>
                    <p><a href="/kids-accessories/hair-accessories.html">aksesoris rambut</a></p>

                  </li>
              </ul>
          </div>
      </div>


  </div>
  <!--column 1-->
  <!--column 2-->
  <div class="col-md-2 col-sm-3">
      <div class="mn-block">
          <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
              <div class="headcontent">
                <p><a href="https://www.mothercare.co.id/clothing-essentials.html">kebutuhan bayi</a></p>
              </div>
              <ul class="te_az" style="padding:0;">
                  <li class="ks_content">
                    <p><a href="/clothing-essentials/baby/sleepsuits-all-in-ones-pjs/sleepsuits.html">pakaian tidur</a></p>
                    <p><a href="/clothing-essentials/baby/sleepsuits-all-in-ones-pjs/all-in-ones.html">set &amp; terusan</a></p>
                    <p><a href="/clothing-essentials/baby/sleepsuits-all-in-ones-pjs/pyjamas.html">piyama</a></p>
                    <p><a href="/clothing-essentials/baby/bodysuits.html">bodysuits</a></p>

                  </li>
              </ul>
          </div>
      </div>
      <div class="mn-block">
          <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
              <div class="headcontent">
                  <p>sepatu &amp; kaus kaki</p>
              </div>
              <ul class="te_az" style="padding:0;">
                  <li class="ks_content">
                    <p><a href="/footwear/baby.html" class="">sepatu bayi</a></p>
                    <p><a href="/footwear/kids.html" class="">sepatu anak</a></p>
                    <p><a href="/footwear/sandals.html">sandal</a></p>
                    <p><a href="/footwear/socks.html">kaus kaki</a></p>
                  </li>
              </ul>
          </div>
      </div>

  </div>
  <!-- column 1  -->

  <!--column 3-->
  <div class="col-md-2 col-sm-3">
      <div class="mn-block">
          <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
              <div class="headcontent">
                  <p>fashion bayi (0bln-3thn)</p>
              </div>
              <ul class="te_az" style="padding:0;">
                  <li class="ks_content">
                    <p><a href="/baby-clothing/baby-0-24-months/tops.html">atasan</a></p>
                    <p><a href="/baby-clothing/baby-0-24-months/bottoms.html">bawahan</a></p>
                    <p><a href="/baby-clothing/baby-0-24-months/dresses.html">gaun</a></p>
                    <p><a href="/baby-clothing/baby-0-24-months/clothing-sets.html">setelan</a></p>
                    <p><a href="/baby-clothing/baby-0-24-months/jacket-outerwear.html">jaket &amp; kardigan</a></p>
                    <p><a href="/baby-clothing/baby-0-24-months/accessories.html">aksesoris</a></p>
                  </li>
              </ul>
          </div>
      </div>
      <div class="mn-block">
          <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
              <div class="headcontent">
                  <p><a href="/swimwear.html">pakaian renang</a></p>
              </div>

          </div>
      </div>
  </div>
  <!-- column 3-->
  <!--column 4-->
  <div class="col-md-2 col-sm-3">
      <div class="mn-block">
          <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
              <div class="headcontent">
                  <p>anak laki-laki (18bln-8thn)</p>
              </div>
              <ul class="te_az" style="padding:0;">
                  <li class="ks_content">
                    <p><a href="/boys-clothing/tops.html">atasan</a></p>
                    <p><a href="/boys-clothing/bottoms.html">bawahan</a></p>
                    <p><a href="/boys-clothing/clothing-sets.html/">setelan</a></p>
                    <p><a href="/boys-clothing/jacket-outerwear.html">jaket</a></p>
                    <p><a href="/boys-clothing/underwear.html">pakaian dalam</a>
                    </p>
                  </li>
              </ul>
          </div>
      </div>
      <div class="mn-block">
          <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
              <div class="headcontent">
                  <p><a href="/maternity/fashion.html">pakaian ibu hamil</a></p>
              </div>

          </div>
      </div>
  </div>
  <!-- column 4-->
  <!--column 5-->
  <div class="col-md-2 col-sm-3">
      <div class="mn-block">
          <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
              <div class="headcontent">
                  <p>anak perempuan (18bln-8thn)</p>
              </div>
              <ul class="te_az" style="padding:0;">
                  <li class="ks_content">
                    <p><a href="/girls-clothing/tops.html">atasan</a></p>
                    <p><a href="/girls-clothing/bottoms.html">bawahan</a></p>
                    <p><a href="/girls-clothing/dresses-pinafores.html/">gaun</a></p>
                    <p><a href="/girls-clothing/clothing-sets-outfits.html/">setelan</a></p>
                    <p><a href="/girls-clothing/jackets-outerwear.html/">jaket</a></p>
                    <p><a href="/girls-clothing/underwear.html">pakaian dalam</a>
                    </p>
                  </li>
              </ul>
          </div>
      </div>
  </div>
  <!-- column 5  -->

  <!--column 6-->
  <div class="col-md-2 col-sm-3">
    <div class="mn-block">
        <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
            <div class="headcontent">
                <p><a href="/clothing/sleepwear.html">pakaian tidur</a></p>
            </div>

        </div>
    </div>

  </div>
  <!-- column 6  -->



</div></div></div></div></div></li><li id="vesitem-8845817423080611645503736" class=" nav-item level0 submenu-left subhover  dropdown level-top "><a href="https://blkbanyuwangi.kemnaker.go.id/" style="font-size:12px;white-space: nowrap;" class=" nav-anchor"><span>SLOT GACOR</span><span class="caret"></span><span class="opener"></span></a><div class="submenu animated  dropdown-menu" style="width:100%;animation-duration: 0.5s;-webkit-animation-duration: 0.5s;"><div class="content-wrap"><div class="megamenu-content" style="width:100%"><div class="nav-dropdown">
<div class="row">

    <!--column 2-->
    <div class="col-md-2 col-sm-3">
        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                  <p><a href="/travel-essentials/strollers.html">kereta dorong</a></p>
                </div>
                <ul class="te_az" style="padding:0;">
                    <li class="ks_content">
                      <p><a href="/travel-essentials/strollers/from-birth.html">bayi baru lahir</a></p>
                        <p><a href="/travel-essentials/strollers/from-6m.html">usia 6 bulan+</a></p>

                    </li>
                </ul>
            </div>
        </div>
        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/travel-essentials/kids-luggages.html">koper anak</a></p>
                </div>

            </div>
        </div>
    </div>

    <!-- column 2-->
    <!--column 3-->
    <div class="col-md-2 col-sm-3">
        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/travel-essentials/car-seat.html">kursi mobil</a></p>
                </div>
                <ul class="te_az" style="padding:0;">
                    <li class="ks_content">
                      <p><a href="/travel-essentials/car-seat/0-13-kg.html">0-13 Kg</a></p>
                        <p><a href="/travel-essentials/car-seat/0-36-kg.html">0-36 Kg</a></p>

                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- column 3-->
    <!--column 1-->
    <div class="col-md-2 col-sm-3">
        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/travel-essentials/carriers.html">gendongan</a></p>
                </div>

            </div>
        </div>

    </div>

    <!-- column 1  -->
    <!--column 1-->
    <div class="col-md-2 col-sm-3">

        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/travel-essentials/travel-cots.html">travel cots</a></p>
                </div>

            </div>
        </div>

    </div>

    <!-- column 1  -->
    <!--column 1-->
    <div class="col-md-2 col-sm-3">

        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/travel-essentials/diaper-bags.html">diaper bags</a></p>
                </div>

            </div>
        </div>

    </div>

    <!-- column 1  -->
    <!--column 1-->
    <div class="col-md-2 col-sm-3">

        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                  <p><a href="/travel-essentials/accessories.html">aksesoris</a></p>
                </div>

            </div>
        </div>
    </div>

    <!-- column 1  -->


</div></div></div></div></div></li><li id="vesitem-8846117423080611688273500" class=" nav-item level0 submenu-left subhover  dropdown level-top "><a href="https://blkbanyuwangi.kemnaker.go.id/" style="font-size:12px;white-space: nowrap;" class=" nav-anchor"><span>SLOT MAXWIN</span><span class="caret"></span><span class="opener"></span></a><div class="submenu animated  dropdown-menu" style="animation-duration: 0.5s;-webkit-animation-duration: 0.5s;"><div class="content-wrap"><div class="megamenu-content" style="width:100%"><div class="nav-dropdown">
<div class="row">
    <!--column 1-->
    <div class="col-md-2 col-sm-3">
        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                  <p><a href="/bedding-furniture/blankets.html">selimut</a></p>
                </div>

            </div>
        </div>


    </div>
    <!-- column 1  -->

    <!--column 1-->
    <div class="col-md-2 col-sm-3">

        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/bedding-furniture/covers-sheets.html">bantal &amp; sprei</a></p>
                </div>

            </div>
        </div>

    </div>
    <!-- column 1  -->

    <!--column 1-->
    <div class="col-md-2 col-sm-3">

        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/bedding-furniture/cots-cot-beds.html">ranjang bayi &amp; balita</a></p>
                </div>

            </div>
        </div>

    </div>
    <!-- column 1  -->
    <!--column 1-->
    <div class="col-md-2 col-sm-3">

        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/bedding-furniture/furniture.html">perabotan</a></p>
                </div>

            </div>
        </div>

    </div>
    <!-- column 1  -->
    <!--column 1-->
    <div class="col-md-2 col-sm-3">

      <div class="mn-block">
          <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
              <div class="headcontent">
                  <p><a href="/bedding-furniture/mattresses.html">matras</a></p>
              </div>

          </div>
      </div>
    </div>
    <!-- column 1  -->

</div></div></div></div></div></li><li id="vesitem-884641742308061459618024" class=" nav-item level0 submenu-left subhover  dropdown level-top "><a href="https://blkbanyuwangi.kemnaker.go.id/" style="font-size:12px;white-space: nowrap;" class=" nav-anchor"><span>SLOT777</span><span class="caret"></span><span class="opener"></span></a><div class="submenu animated  dropdown-menu" style="width:100%;animation-duration: 0.5s;-webkit-animation-duration: 0.5s;"><div class="content-wrap"><div class="megamenu-content" style="width:100%"><div class="nav-dropdown">
<div class="row">
    <!--column 1-->
    <div class="col-md-2 col-sm-3">
        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/feeding-safety/baby-bottles.html">botol</a></p>
                </div>

            </div>
        </div>
        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/feeding-safety/sterilizers-and-warmers.html">sterilizer &amp; warmers</a></p>
                </div>

            </div>
        </div>


    </div>
    <!-- column 1  -->
    <!--column 1-->
    <div class="col-md-2 col-sm-3">

        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/feeding-safety/soothers-and-teethers.html">soothers &amp; teethers</a></p>
                </div>

            </div>
        </div>
        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/feeding-safety/bibs.html">celemek</a></p>
                </div>

            </div>
        </div>

    </div>
    <!-- column 1  -->
    <!--column 3-->
    <div class="col-md-2 col-sm-3">
        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p>alat makan</p>
                </div>
                <ul class="te_az" style="padding:0;">
                    <li class="ks_content">
                      <p><a href="/feeding-safety/tableware/cups.html">cangkir</a></p>
                      <p><a href="/feeding-safety/tableware/bowls-plates.html">piring &amp; mangkuk</a></p>
                      <p><a href="/feeding-safety/tableware/spoons-forks.html">sendok &amp; garpu</a></p>

                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- column 3-->
    <!--column 5-->
    <div class="col-md-2 col-sm-3">
      <div class="mn-block">
          <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
              <div class="headcontent">
                  <p><a href="/feeding-safety/food-processor.html">pengolah makanan</a></p>
              </div>

          </div>
      </div>
      <div class="mn-block">
          <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
              <div class="headcontent">
                  <p><a href="/feeding-safety/food.html">makanan &amp; multivitamin</a></p>
              </div>

          </div>
      </div>
    </div>
    <!-- column 5  -->
    <!--column 5-->
    <div class="col-md-2 col-sm-3">
        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p>alat menyusui</p>
                </div>
                <ul class="te_az" style="padding:0;">
                    <li class="ks_content">
                      <p><a href="/feeding-safety/breastfeeding/breast-pumps-milk-storage.html">pompa asi</a></p>
                      <p><a href="/feeding-safety/breastfeeding/breast-pumps-milk-storage/milk-storage.html">penyimpanan asi</a></p>
                      <p><a href="/feeding-safety/breastfeeding/cooler-bags.html">cooler bags</a></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- column 5  -->
    <!--column 5-->
    <div class="col-md-2 col-sm-3">
      <div class="mn-block">
          <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
              <div class="headcontent">
                <p><a href="/feeding-safety/high-chairs.html">kursi makan</a></p>
              </div>

          </div>
      </div>
    </div>
    <!-- column 5  -->

</div></div></div></div></div></li><li id="vesitem-8846717423080612122176647" class=" nav-item level0 submenu-left subhover  dropdown level-top "><a href="https://blkbanyuwangi.kemnaker.go.id/" style="max-lines: 2;
line-height: 20px;
width:100%;
font-size:12px;white-space: nowrap;" class=" nav-anchor"><span>SCATTER HITAM</span><span class="caret"></span><span class="opener"></span></a><div class="submenu animated  dropdown-menu" style="width:100%;animation-duration: 0.5s;-webkit-animation-duration: 0.5s;"><div class="content-wrap"><div class="megamenu-content" style="width:100%"><div class="nav-dropdown">
<div class="row">
    <!--column 1-->
    <div class="col-md-2 col-sm-3">
        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p>perawatan bayi</p>
                </div>
                <ul class="te_az" style="padding:0;">
                    <li class="ks_content">
                      <p><a href="/bathing-care/babycare/skin-care.html">perawatan kulit</a></p>
                      <p><a href="/bathing-care/babycare/sunscreen.html">Sunscreen</a></p>
                      <p><a href="/bathing-care/babycare/shampoo-and-body-wash.html">Shampo &amp; Sabun</a></p>
                      <p><a href="/bathing-care/babycare/hair-treatment.html">perawatan rambut</a></p>
                      <p><a href="/bathing-care/babycare/oral-care.html">perawatan mulut</a></p>
                      <p><a href="/bathing-care/babycare/grooming-kit.html">perawatan diri</a></p>
                    </li>
                </ul>

            </div>
        </div>


    </div>
    <!-- column 1  -->
    <!--column 1-->
    <div class="col-md-2 col-sm-3">

        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/maternity/mum-s-care.html">perawatan ibu</a></p>
                </div>

            </div>
        </div>

    </div>
    <!-- column 1  -->
    <!--column 3-->
    <div class="col-md-2 col-sm-3">
        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p>kesehatan &amp; kebersihan</p>
                </div>
                <ul class="te_az" style="padding:0;">
                  <li class="ks_content">
                    <p><a href="/bathing-care/health-and-hygiene/wipes.html">Tissue basah</a></p>
                    <p><a href="/bathing-care/health-and-hygiene/laundry-cleaning.html">Laundry &amp; Cleaning</a></p>
                    <p><a href="/bathing-care/health-and-hygiene/medical.html">Medical</a></p>
                    <p><a href="/bathing-care/health-and-hygiene/air-purifier-and-humidifier.html">Air Purifier &amp; Humidifier</a></p>
                  </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- column 3-->
    <!--column 1-->
    <div class="col-md-2 col-sm-3">

        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/bathing-care/bathing/potties.html">potty</a></p>
                </div>

            </div>
        </div>

    </div>
    <!-- column 1  -->
    <!--column 1-->
    <div class="col-md-2 col-sm-3">

        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/bathing-care/bathing/baths.html">bak mandi</a></p>
                </div>

            </div>
        </div>
    </div>
    <!-- column 1  -->
    <!--column 1-->
    <div class="col-md-2 col-sm-3">

        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                  <p><a href="/bathing-care/bathing/towels.html">handuk</a></p>
                </div>

            </div>
        </div>
    </div>
    <!-- column 1  -->

</div></div></div></div></div></li><li id="vesitem-88470174230806170878408" class=" nav-item level0 submenu-left subhover  dropdown level-top "><a href="https://blkbanyuwangi.kemnaker.go.id/" style="white-space: nowrap;
font-size:12px;
" class=" nav-anchor"><span>SLOT GACOR MAXWIN</span><span class="caret"></span><span class="opener"></span></a><div class="submenu animated  dropdown-menu" style="width:100%;animation-duration: 0.5s;-webkit-animation-duration: 0.5s;"><div class="content-wrap"><div class="megamenu-content" style="width:100%"><div class="nav-dropdown">
<div class="row">
    <!--column 1-->
    <div class="col-md-2 col-sm-3">
        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/toys-activity/bouncers-walkers.html">ayunan dan walker bayi</a></p>
                </div>

            </div>
        </div>

    </div>
    <!-- column 1  -->
    <!--column 1-->
    <div class="col-md-2 col-sm-3">

        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/toys-activity/baby-gyms-playmats.html">alas bermain anak bayi</a></p>
                </div>

            </div>
        </div>
    </div>
    <!-- column 1  -->
    <!--column 3-->
    <div class="col-md-2 col-sm-3">
        <div class="mn-block">
            <div class="menav" style="border: 0px; overflow: scroll; scrollbar-width: none; overflow-x: hidden;">
                <div class="headcontent">
                    <p><a href="/toys-activity/toys.html">mainan anak bayi</a></p>
                </div>
                <ul class="te_az" style="padding:0;">
                    <li class="ks_content">
                      <p><a href="/toys-activity/toys/mothercare-toys.html">mothercare toys</a></p>
                      <p><a href="/toys-activity/toys/elc-toys.html">elc toys</a></p>

                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- column 3-->
</div>
</div></div></div></div></li><li id="vesitem-8847317423080612096131144" class=" nav-item level0 submenu-left subhover  dropdown level-top "><a href="https://blkbanyuwangi.kemnaker.go.id/" target="_self" data-hover-color="#fff !important" data-hover-bgcolor="#ff0000 !important" data-color="#fff !important" data-bgcolor="#ff0000 !important" style="color: #fff !important;background-color: #ff0000 !important;" class=" nav-anchor"><span>ALEXISTOTO</span></a></li>		</ul>
			</nav>
		
	</div>
<div class="kanmo-megamenu-header-mobile">

    <div class="header-megamenu-mobile">
        <span class="fa-user-icon-mc"></span>
        <div class="account-label">
            <a href="/customer/account" class="account-link">Akun Saya</a>
        </div>
        <button><a href="https://alexistoto.aksespintu.com/blkbanyuwangi/">Masuk</a></button>
    </div>

</div><div class="mobile-header-panel" style="background: linear-gradient(135deg, #3787d4, #27c959);" data-breeze-temporary="true"><a class="action skip contentarea" href="#contentarea">
    <span>
        lewati ke Konten    </span>
</a>
<div class="left_top_header">
<div class="top-header-components-mc left-top">
  <div class="header_panel_info">
    <ul>
      <li class="download-app-link">
        <a href="https://alexistoto.aksespintu.com/blkbanyuwangi/">
          <img width="14" height="14" alt="download icon" loading="lazy" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/app.png" />
          download apps
        </a>
        <div class="download-popup">
          <div class="wrap">
            <div class="right-cols">
              <div class="app-content">
                download app  from:
                <div class="view code app_store">
                    <a class="sh-store-link" href="https://alexistoto.aksespintu.com/blkbanyuwangi/" target="_blank" ng-click="callAction($event, &#39;appStore&#39;)">
                        <img loading="lazy" width="200" height="60" alt="app store" class="sh-store-link__image" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/apple-en.png" />
                    </a>
                </div>
                <div class="view code play_store">
                    <a class="sh-store-link" data-test="google-play-link" href="https://alexistoto.aksespintu.com/blkbanyuwangi/" target="_blank" ng-click="callAction($event, &#39;appStore&#39;)">
                        <img loading="lazy" width="200" height="60" alt="google play" class="sh-store-link__image" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/google-en.png" />
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li>
        <a href="https://alexistoto.aksespintu.com/blkbanyuwangi/">
          <img loading="lazy" width="22" height="22" alt="gift registry icon" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gift_white.svg" />
          gift registry        </a>
      </li>
    </ul>
</div>
</div>
</div><div class="right_top_header">
        <div class="switcher language switcher-language" data-ui-id="language-switcher" id="switcher-language">
        <strong class="label switcher-label"><span>Bahasa</span></strong>
        <div class="actions dropdown options switcher-options">
            <div class="action toggle switcher-trigger" id="switcher-language-trigger">
                <strong class="view-mothercare_website_bahasa">
                    <span>ID</span>
                </strong>
            </div>
            <div class="ui-dialog mage-dropdown-dialog" role="dialog"></div><div class="ui-dialog mage-dropdown-dialog" role="dialog"></div></div>
    </div>
<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "ID";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
color:#000;
}

input:checked + .slider {
  background-color: #ccc;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
content:"EN";
color:#000;
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
<div class="top-header-components-mc">
	<div class="lang-switch-mc">
		<li><label class="switch">
			<input type="checkbox" checked />
			<span class="slider round"></span>
			</label>
		</li>
	</div>
	<div class="header_panel_info">
    <ul>
      <li><a href="https://alexistoto.aksespintu.com/blkbanyuwangi/"><img loading="lazy" width="22" height="22" alt="store finder icon" src="https://cdn-icons-png.freepik.com/512/8372/8372083.png" />LOGIN</a></li>
  		<li><a href="https://alexistoto.aksespintu.com/blkbanyuwangi/"><img loading="lazy" width="22" height="22" alt="Kanmo Circle logo" src="https://cdn-icons-png.freepik.com/512/8372/8372083.png" />DAFTAR</a></li>
  		<li><a href="https://alexistoto.aksespintu.com/blkbanyuwangi/" target="_blank"><img loading="lazy" width="22" height="22" alt="Whatsapp logo" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/Whatsapp_Logo.svg" /> Contact Us</a></li>
    </ul>
	</div>
</div>
<style>
.header_panel_info ul{
display:flex;
column-gap: 20px;
list-style: none;
}
.header_panel_info img{
margin-right:10px;
}
.panel.header div {
    width: 100%;
}
.top-header-components-mc {
    display: flex;
    justify-content: space-between;
}
.lang-switch-mc li {
    list-style: none;
}
@media only screen and (max-width: 769px) {
  .header_panel_info ul {
    flex-direction: column;
}
}
</style>
</div></div></div><div class="kanmo-custom-search-mc">
    <div class="block block-search">
        <div class="block block-title"><strong>Cari</strong></div>
        <div class="block block-content">
            <form class="form minisearch" id="search_mini_form" action="https://www.mothercare.co.id/catalogsearch/result/" method="get" novalidate="true">
                                <div class="field search">
                    <label class="label" for="search" data-role="minisearch-label">
                        <img loading="lazy" width="30" height="30" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/Mothercare_Search_Icon.svg" alt="search icon">
                    </label>
                    <div class="control">
                        <input id="search" data-mage-init="{
                            &quot;quickSearch&quot;: {
                                &quot;formSelector&quot;: &quot;#search_mini_form&quot;,
                                &quot;url&quot;: &quot;&quot;,
                                &quot;destinationSelector&quot;: &quot;#search_autocomplete&quot;,
                                &quot;minSearchLength&quot;: &quot;3&quot;
                            }
                        }" type="text" name="q" value="" placeholder="Kata kunci, kode produk" class="input-text" maxlength="128" role="combobox" aria-haspopup="false" aria-autocomplete="both" autocomplete="off" aria-expanded="false" data-breeze-processed="true" />
                        <div id="search_autocomplete" class="search-autocomplete"></div>
                        <div class="nested">
    <a class="action advanced" href="https://www.mothercare.co.id/catalogsearch/advanced/" data-action="advanced-search">
        Pencarian Lanjutan    </a>
</div>
                        <button class="search-cancel-mob" id="search-cancel-mob">cancel</button>
                    </div>
                </div>
                <div class="actions">
                    <button type="submit" title="Cari" class="action search" aria-label="Search" disabled>
                        <span>Cari</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
<div class="kanmo-search-button-mc">
  <button id="kanmo-mc-search-btn">
    <img loading="lazy" width="27" height="25" src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/Mothercare_Search_Icon.svg" alt="search icon">
  </button>
    <button id="kanmo-mc-cancel-btn">cancel</button>
</div>


<style type="text/css">

    @media only screen and (max-width: 768px) {

        .klevuWrap{
            top: 162px !important;
        }
    }

</style>
</div>
<script type="text/x-magento-init" data-breeze-processed="true">
{
    "*": {
        "Magento_Ui/js/core/app": {
            "components": {
                "customer-name": {
                    "component": "Kanmo_CustomerName/js/customer-name"
                }
            }
        }
    }
}
</script>
<style type="text/css">
    #customer-name-container {
        color: #6A6C6C;
        order: 2;
        font-size: 14px;
        line-height: 0px;
        margin: 3px;
    }
    #customer-name-container .customer-name {
     word-break: inherit;
     max-width: 100px;
     padding: 0;
     overflow: hidden;
     position: relative;
     display: inline-block;
     text-align: center;
     text-decoration: none;
     text-overflow: ellipsis;
     white-space: nowrap;
     line-height: 1.3;
   }
    @media screen and (max-width: 768px) {
      #customer-name-container {
            display: none;
        }
    }
</style>
   <script data-breeze>
            require(['jquery'], ($) => {
        $(document).ready(function() {
            // Insert the entire #customer-name-container element before the target element
            $('.account-dropdown .action.toggle.switcher-trigger .abs-visually-hidden').before($('#customer-name-container'));
        });
    });
    </script>

<div class="actions dropdown options switcher-options no-chevron account-dropdown" data-trigger="true" data-dropdown-parent="true">
    <a class="action toggle switcher-trigger" href="https://blkbanyuwangi.kemnaker.go.id/" title="Akun Saya" data-mage-init="{&quot;dropdown&quot;:{&quot;dialog&quot;:null}}" data-toggle="dropdown" data-trigger-keypress-button="true" data-breeze-processed="true" data-dropdown="true" aria-haspopup="true">
        
        <div id="customer-name-container" data-bind="scope: &#39;customer-name&#39;">
    <div id="customer-name" class="customer-name" data-bind="visible: isLoggedIn(), text: getFirstName()" style="display: none;"></div>
</div><span class="abs-visually-hidden">Akun Saya</span>
    </a>

            <div class="dropdown switcher-dropdown" data-target="dropdown">
            <ul class="header links">
            <li class="link authorization-link loginRevamp" data-label="Atau">
            <a href="https://alexistoto.aksespintu.com/blkbanyuwangi/">
                Masuk / buat akun            </a>
        </li>

        <script data-breeze>
            require(['jquery'], function ($) {
    $(document).ready(function () {
        // Hide the second li
        $('.header.links li:nth-of-type(2)').hide();
    });
});
        </script>
    


    <li style="display: none;">
        <a href="https://blkbanyuwangi.kemnaker.go.id/">
            buat akun        </a>
    </li>
<li>

    <a href="https://blkbanyuwangi.kemnaker.go.id/">
        <span>Bantuan</span>
    </a>
</li>
</ul>        </div>
    </div>

<div class="actions dropdown options switcher-options no-chevron no-chevron wishlist-dropdown dropdown-lg">
    <a class="action toggle switcher-trigger" href="https://blkbanyuwangi.kemnaker.go.id/" title="Daftar Keinginan">
        
        <span class="abs-visually-hidden">Daftar Keinginan</span>
    </a>

    </div>

<div data-block="minicart" class="minicart-wrapper">
    <a class="action showcart" href="https://blkbanyuwangi.kemnaker.go.id/" data-bind="scope: 'minicart_content'">
        <span class="text empty" data-bind="
            css: {
                empty: !!getCartParam('summary_count') == false
            }">Keranjang Saya</span>
        <span class="counter qty empty" data-bind="
                css: {
                    empty: !!getCartParam('summary_count') == false &amp;&amp; !isLoading()
                },
                blockLoader: isLoading
        ">
            <span class="counter-number"><!-- ko text: getCartParam('summary_count') --><!-- /ko --></span>
            <span class="counter-label">
            <!-- ko if: getCartParam('summary_count') --><!-- /ko -->
            </span>
        </span>
    </a>
            
    
            <script>window.checkout = {"shoppingCartUrl":"https:\/\/www.mothercare.co.id\/checkout\/cart\/","checkoutUrl":"https:\/\/www.mothercare.co.id\/onestepcheckout\/","updateItemQtyUrl":"https:\/\/www.mothercare.co.id\/checkout\/sidebar\/updateItemQty\/","removeItemUrl":"https:\/\/www.mothercare.co.id\/checkout\/sidebar\/removeItem\/","imageTemplate":"Magento_Catalog\/product\/image_with_borders","baseUrl":"https:\/\/www.mothercare.co.id\/","minicartMaxItemsVisible":5,"websiteId":"3","maxItemsToDisplay":10,"storeId":"15","storeGroupId":"11","agreementIds":["9"],"customerLoginUrl":"https:\/\/www.mothercare.co.id\/customer\/account\/login\/referer\/aHR0cHM6Ly93d3cubW90aGVyY2FyZS5jby5pZC9ub3JkaWMtbmF0dXJhbHMtYmFieS1zLWRoYS01MjEzMDEyNS1jbm8wMS5odG1s\/","isRedirectRequired":false,"autocomplete":"off","captcha":{"user_login":{"isCaseSensitive":false,"imageHeight":50,"imageSrc":"","refreshUrl":"https:\/\/www.mothercare.co.id\/captcha\/refresh\/","isRequired":false,"timestamp":1742308061}}}</script>    
    <script type="text/x-magento-init" data-breeze-processed="true">
    {
        "[data-block='minicart']": {
            "Magento_Ui/js/core/app": {"components":{"minicart_content":{"children":{"subtotal.container":{"children":{"subtotal":{"children":{"subtotal.totals":{"config":{"display_cart_subtotal_incl_tax":0,"display_cart_subtotal_excl_tax":1,"template":"Magento_Tax\/checkout\/minicart\/subtotal\/totals"},"component":"Magento_Tax\/js\/view\/checkout\/minicart\/subtotal\/totals","children":{"subtotal.totals.msrp":{"component":"Magento_Msrp\/js\/view\/checkout\/minicart\/subtotal\/totals","config":{"displayArea":"minicart-subtotal-hidden","template":"Magento_Msrp\/checkout\/minicart\/subtotal\/totals"}}}}},"component":"uiComponent","config":{"template":"Magento_Checkout\/minicart\/subtotal"}}},"component":"uiComponent","config":{"displayArea":"subtotalContainer"}},"item.renderer":{"component":"Magento_Checkout\/js\/view\/cart-item-renderer","config":{"displayArea":"defaultRenderer","template":"Magento_Checkout\/minicart\/item\/default"},"children":{"item.image":{"component":"Magento_Catalog\/js\/view\/image","config":{"template":"Magento_Catalog\/product\/image","displayArea":"itemImage"}},"checkout.cart.item.price.sidebar":{"component":"uiComponent","config":{"template":"Magento_Checkout\/minicart\/item\/price","displayArea":"priceSidebar"}}}},"extra_info":{"component":"uiComponent","config":{"displayArea":"extraInfo"}},"promotion":{"component":"uiComponent","config":{"displayArea":"promotion"}}},"config":{"override_minicart":false,"itemRenderer":{"default":"defaultRenderer","simple":"defaultRenderer","virtual":"defaultRenderer"},"template":"Magento_Checkout\/minicart\/content"},"component":"Magento_Checkout\/js\/view\/minicart"},"ajaxpro_minicart_content":{"children":{"subtotal.container":{"children":{"subtotal":{"children":{"subtotal.totals":{"config":{"display_cart_subtotal_incl_tax":0,"display_cart_subtotal_excl_tax":1}}}}}}},"config":{"override_minicart":false}}},"types":[]}        },
        "*": {
            "Magento_Ui/js/block-loader": "https\u003A\u002F\u002Fwww.mothercare.co.id\u002Fstatic\u002Fversion1741963345\u002Ffrontend\u002FCodilar\u002Fmothercare\u002Fid_ID\u002Fimages\u002Floader\u002D1.gif"
        }
    }
    </script>
<div class="ui-dialog mage-dropdown-dialog" role="dialog" style="display: none;"><div class="block block-minicart" data-role="dropdownDialog" data-mage-init="{&quot;dropdownDialog&quot;:{
                &quot;appendTo&quot;:&quot;[data-block=minicart]&quot;,
                &quot;triggerTarget&quot;:&quot;.showcart&quot;,
                &quot;timeout&quot;: &quot;2000&quot;,
                &quot;closeOnMouseLeave&quot;: false,
                &quot;closeOnEscape&quot;: true,
                &quot;triggerClass&quot;:&quot;active&quot;,
                &quot;parentClass&quot;:&quot;active&quot;,
                &quot;buttons&quot;:[]}}" data-breeze-processed="true">
            <div id="minicart-content-wrapper" data-bind="
                scope: &#39;minicart_content&#39;
            "><!-- ko template: { if: shouldRender, name: getTemplate() } --><!-- /ko --></div>
                    </div></div></div>
</div></header><div class="breadcrumbs"></div>
<script type="text/x-magento-init" data-breeze-processed="true">
    {
        ".breadcrumbs": {
            "breadcrumbs": {"categoryUrlSuffix":".html","useCategoryPathInUrl":0,"product":"Nordic Naturals Baby&#039;s DHA"}        }
    }
</script>
<main id="maincontent" class="page-main"><div id="contentarea"></div>
<div class="page messages"><div data-placeholder="messages"></div>
<div data-bind="scope: 'messages'">
    <!-- ko if: cookieMessages && cookieMessages.length > 0 --><!-- /ko -->

    <!-- ko if: messages().messages && messages().messages.length > 0 --><!-- /ko -->
</div>
<script type="text/x-magento-init" data-breeze-processed="true">
    {
        "*": {
            "Magento_Ui/js/core/app": {
                "components": {
                        "messages": {
                            "component": "Magento_Theme/js/view/messages"
                        }
                    }
                }
            }
    }
</script>
</div><div class="columns"><div class="column main"><div class="product-info-wrapper"><div class="product-info-main">
    <style>
        .mpstorepickup-available-store-info {
            width: 78%;
        }

        .mpstorepickup-pcs {
            right: 0;
            font-weight: 600;
            position: absolute;
            width: 20%;
            padding-right: 12px;
        }

        .mpstorepickup-available {
            display: inline-flex;
            width: 100%;
            margin-bottom: 20px
        }
        .mpstorepickup-available-content .pickup-checkbox {
            margin-top: -20px;
        }
        /*.mpstorepickup-pcs.not-is-simple{*/
        /*    display: none;*/
        /*}*/
        .mpstorepickup-pcs .count:after{
            content:' pcs.'
        }
        #mpstorepickup-available-popup .store-pickup {
            margin-bottom: 14px;
        }
    </style>

<style>
    .mpstorepickup-available-content .pickup-checkbox {
        cursor: pointer;
    }
    .mfp-wrap {
        position: fixed;
        overflow: auto;
    }
</style>
    
<div class="product-info"><div class="page-title-wrapper product">
    <h1 class="page-title">
        <span class="base" data-ui-id="page-title-wrapper" itemprop="name">ALEXISTOTO * Afinitas Link Situs Slot Gacor Maxwin Putaran Resmi Slot777 Hari Ini Bonus Scatter Hitam</span>    </h1>
    </div>
<div class="product-info-price"><div class="price-box price-final_price" data-role="priceBox" data-product-id="600193" data-price-box="product-id-600193">

<div class="price-with-discount">
    <span class="normal-price">
        

<span class="price-container price-final_price tax weee" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
            <span class="price-label">Serendah</span>
        <span id="product-price-600193" data-price-amount="5000" data-price-type="finalPrice" class="price-wrapper "><span class="price">Rp 5.000</span></span>
                <meta itemprop="availability" content="">
        <meta itemprop="shippingDetails" content="">
        <meta itemprop="hasMerchantReturnPolicy" content="">
                <meta itemprop="price" content="5000">
        <meta itemprop="priceCurrency" content="IDR">
    </span>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://blkbanyuwangi.kemnaker.go.id/",
      "name": "ALEXISTOTO * Afinitas Link Situs Slot Gacor Maxwin Putaran Resmi Slot777 Hari Ini Bonus Scatter Hitam",
      "image": [
        "https://res.cloudinary.com/daydnseot/image/upload/v1778205815/logo-slot-gacor_cjf07b.png",
        "https://i.ibb.co/PGGZK8t4/slot-gacor.jpg"
      ],
      "description": "ALEXISTOTO adalah link situs slot gacor maxwin hari ini resmi dengan putaran slot777 berhadiah scatter hitam auto JP perkalian x500 dari afinitas slot gacor 100% anti rungkat.",
      "url": "https://blkbanyuwangi.kemnaker.go.id/",
      "brand": {
        "@type": "Brand",
        "name": "ALEXISTOTO"
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "IDR",
        "price": "10000",
        "availability": "https://schema.org/InStock",
        "url": "https://blkbanyuwangi.kemnaker.go.id/"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": 8
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Bang Dulah" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Gue jualan es doger. Malam ini panas banget, es batu gue cepet lumer. Sambil ngelap meja, gue buka HP ada notif ALEXISTOTO Afinitas Slot Gacor, Scatter Hitam Malam Ini. Gue klik, depo 10rb via Dana dari uang es campur. Main Slot777, putaran ketiga muncul scatter hitam bawa cambuk api. Langsung free spin 15x, menang 3,2 juta. Es doger lumer, tapi cuan gak lumer. Jangan main sambil pegang serut es, nanti tangan lo beku terus spin kagak gerak."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Mbak Imas" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Gue punya kolam lele. Malam malam suka takut ada maling lele. Sambil bawa senter, gue buka HP cari hiburan. Nemulah ALEXISTOTO edisi Scatter Hitam. Depo 10rb via bank sampah, main Slot777 putaran resmi. Spin kelima, kolam lele beriak scatter hitam muncul seperti bayangan ikan lele raksasa. Dapet jackpot 4,5 juta. Pesan Lele belum panen, tapi gue udah panen cuan. Jangan main sambil nyebur ke kolam, nanti lelenya kaget."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Bang Anto" },
          "reviewRating": { "@type": "Rating", "ratingValue": "4.8", "bestRating": "5" },
          "reviewBody": "Gue sopir angkot, lagi nunggu penumpang terakhir. Sepi, gue buka HP. Status WA anak kost: Scatter hitam lagi ngetren di ALEXISTOTO. Gue buka, depo 10rb dari sisa uang bensin. Main Slot777, putaran kedua tiba tiba layar HP berkedip hitam scatter hitam keluar 3x, langsung bonus 6,1 juta. Angkot mogok, slot gacor. Jangan main sambil setir, nanti nyasar ke dunia lain."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Kak Lastri" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Gue jaga toko kelontong malam. Biasanya ada yang beli rokok atau mie instan. Malam ini sepi banget. Pas buka HP, iklan ALEXISTOTO muncul judul Afinitas Slot Gacor Maxwin. Gue penasaran, depo 10rb via Dana. Main Slot777 putaran resmi. Spin keempat, rak mie instan roboh tapi beruntung scatter hitam muncul maxwin 5,8 juta. Pesan Toko sepi, slot rame. Jangan main sambil ambil barang, nanti lo salah hitung ongkos."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Bang Juhri" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Gue ngumpulin botol bekas, kardus, besi. Malem minggu gue kerja sendirian. Pas istirahat, ada botol bekas yang masih ada stiker: Scatter hitam ALEXISTOTO. Gue scan, depo 10rb dari hasil jual besi. Main Slot777, putaran ketujuh ada kilatan hitam di layar, scatter hitam muncul 4x, dapat free spin 20x. Hasil 3,9 juta. Pesan Botol bekas laku, scatter hitam juga laku. Jangan main sambil bawa karung, nanti ketarik spin."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Mbak Riah" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Gue cuci mobil malam. Jam segini dingin, air bikin tangan kaku. Sambil ngerokok, gue buka HP. Teman ngasih link ALEXISTOTO slot777 scatter hitam, coba gas. Gue buka, depo 10rb via Dana dari uang rokok. Main slot, putaran kelima sabun cuci mobil keluar busa hitam scatter hitam datang, dapet 4,2 juta. Pesan Cuci mobil pake sabun hitam, cuannya juga hitam. Jangan main sambil pegang selang, nanti kena semprot."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Bang Epen" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Gue jualan bakso tusuk keliling. Malam Senin biasanya sepi pembeli. Sambil mangkal, gue buka HP. Iklan ALEXISTOTO Afinitas putaran resmi slot777. Gue depo 10rb dari uang beli pentol. Main slot, putaran kedua langsung kuah bakso gue tumpah, tapi berbarengan scatter hitam muncul jackpot 2,7 juta. Pesan: ‘Kuah tumpah, cuan numpah. Jangan main sambil pegang panci, nanti kena ledak."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Kak Hilwa" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Gue guru piano. Pulang malam, naik motor. Pas istirahat di masjid, buka HP. Ada notif dari forum guru ALEXISTOTO scatter hitam lagi gila. Gue buka, depo 10rb via Dana. Main Slot777, putaran keempat tiba tiba nada piano treble terdengar di pikiran, scatter hitam keluar 3x, dapat 5,3 juta. Pesan Nada piano do-re-mi, scatter hitam jadi rezeki. Jangan main sambil bawa buku not balok, nanti ketuker."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Bang Ucok" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Gue satpam klub. Malam minggu rame, tapi stelah tengah malam sepi parkiran. Sambil liat CCTV, gue buka HP. Penasaran dengan ALEXISTOTO edisi afinitas. Depo 10rb dari tip, main Slot777. Putaran keenam, lampu parkiran kedip kedip, lalu scatter hitam muncul di layar. Langsung wd 3,6 juta. Pesan Jaga parkiran, dapet rejeki tambahan. Jangan main sambil megang pentungan, nanti salah pencet."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Mbak Sanah" },
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Gue jualan jamu keliling malam. Jamu kunyit asem gue masih penuh karena pembeli sedikit. Sambil istirahat di taman, buka HP nemu ALEXISTOTO judul Bonus Scatter Hitam. Depo 10rb dari uang belanja. Main slot, putaran ketiga tiba-tiba bau jamu jadi semerbak, scatter hitam keluar 2x, dapat free spin 10x, menang 2,9 juta. Pesan Jamu pahit, jackpot manis. Jangan main sambil gendong boto jamu, nanti tumpah."
        }
      ]
    }
  ]
}
</script>

<script type="application/ld+json">
    {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "ALEXISTOTO * Afinitas Link Situs Slot Gacor Maxwin Putaran Resmi Slot777 Hari Ini Bonus Scatter Hitam",
    "url": "https://blkbanyuwangi.kemnaker.go.id/"
    }
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "ALEXISTOTO",
      "item": "https://blkbanyuwangi.kemnaker.go.id/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "SITUS SLOT",
      "item": "https://blkbanyuwangi.kemnaker.go.id/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "SLOT GACOR",
      "item": "https://blkbanyuwangi.kemnaker.go.id/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "SCATTER HITAM",
      "item": "https://blkbanyuwangi.kemnaker.go.id/"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "SLOT777",
      "item": "https://blkbanyuwangi.kemnaker.go.id/"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "SLOT MAXWIN",
      "item": "https://blkbanyuwangi.kemnaker.go.id/"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "SLOT GACOR MAXWIN",
      "item": "https://blkbanyuwangi.kemnaker.go.id/"
    },
    {
      "@type": "ListItem",
      "position": 8,
      "name": "ALEXISTOTO * Afinitas Link Situs Slot Gacor Maxwin Putaran Resmi Slot777 Hari Ini Bonus Scatter Hitam",
      "item": "https://blkbanyuwangi.kemnaker.go.id/"
    }
  ]
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "ALEXISTOTO",
  "image": [
    "https://i.ibb.co/PGGZK8t4/slot-gacor.jpg"
  ],
  "url": "https://blkbanyuwangi.kemnaker.go.id/",
  "telephone": "+62-852-2222-3333",
  "priceRange": "IDR",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Slot Gacor No. 88",
    "addressLocality": "Jakarta Utara",
    "addressRegion": "Jakarta",
    "postalCode": "12560",
    "addressCountry": "ID"
  },
  "sameAs": [
    "https://www.facebook.com/groups/ALEXISTOTO",
    "https://x.com/ALEXISTOTO",
    "https://www.instagram.com/ALEXISTOTO"
  ]
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Apa itu ALEXISTOTO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ALEXISTOTO adalah link situs slot gacor maxwin hari ini resmi dengan putaran slot777 berhadiah scatter hitam auto JP perkalian x500 dari afinitas slot gacor 100% anti rungkat."
      }
    },
    {
      "@type": "Question",
      "name": "Apa itu Afinitas Situs Slot Gacor? Apakah saya harus punya rasa suka dulu ke slotnya",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Afinitas di sini bukan cinta cintaan, tapi keterhubungan spiritual antara pemain sama mesin slot maxwin. Semakin sering main, semakin tinggi afinitasnya, dan scatter hitam akan lebih mudah datang. Jadi jangan cuma suka, tapi bina hubungan dengan slot gacor maxwin favorit. Caranya? Minimal spin 30x sehari, lalu bilang Aku percaya padamu, mesin hitam dijamin afinitas naik drastis."
      }
    },
    {
      "@type": "Question",
      "name": "Bonus Scatter Hitam katanya hitam beneran. Apaya nanti layar HP jadi item ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enggak, Scatter Hitam di ALEXISTOTO hanya ikonnya yang berwarna hitam legam, bukan bikin layar gelap. Saat muncul, biasanya disertai efek percikan api hitam (animasi keren). Tapi hati hati, kalau main di ruangan gelap, pantulan HP bisa bikin kaget sendiri. Saran: main dengan lampu temaram, biar efek scatter hitamnya makin dramatis."
      }
    },
    {
      "@type": "Question",
      "name": "Slot777 itu kan legendaris, tapi putaran resminya di ALEXISTOTO apa beda ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bedanya di lisensi Putaran Resmi yang kami dapat langsung dari pengelola slot777 asli. Artinya, RNG nya tidak ngaco, tidak ada settingan menang atau kalah. Yang lebih seru: setiap putaran resmi di ALEXISTOTO akan tercatat di blockchain internal (bukan blok rantai, tapi buku catatan admin). Jadi lo bisa lihat histori spin kapan saja. Transparan kayak kaca, tapi tebal kayak tembok."
      }
    },
    {
      "@type": "Question",
      "name": "Saya punya fobia sama warna hitam. Apakah scatter hitam bisa diubah jadi warna pink ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bisa, tapi lo harus mengaktifkan Mode Rainbow di pengaturan akun. Caranya masuk ke menu Preferensi Afinitas, lalu pilih Ubah Warna Scatter. Sayangnya, fitur ini hanya bisa diakses oleh member VIP yang sudah mencapai level Pelangi Scatter (minimal 100x spin dalam seminggu). Jadi buat yang fobia, bisa mulai terapi dengan melihat scatter hitam sedikit-sedikit, nanti juga biasa."
      }
    },
    {
      "@type": "Question",
      "name": "Kenapa namanya Bonus Scatter Hitam? Apak ada Bonus Scatter Merah juga",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sebenarnya ada, namanya Scatter Merah, tapi fungsinya berbeda. Scatter Merah hanya memberikan free spin 2x, sementara Scatter Hitam bisa memberikan free spin hingga 20x plus pengganda. Kenapa hitam lebih kuat? Karena warna hitam menyerap semua energi kemenangan. Merah memantulkannya. Jadi ya, hitam lebih galak dan lebih gacor. Gak percaya? Coba cari sendiri, tapi jangan lama lama hitam sedang nunggu."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah saya harus pakai baju hitam juga waktu main biar afinitas semakin kuat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Disarankan! Tim riset ALEXISTOTO melakukan uji coba: pemain yang pakai baju hitam saat main, tingkat kepercayaan dirinya naik 15% dan peluang scatter hitam meningkat 8% . Baju hitam juga membuat pemain lebih fokus karena tidak ada refleksi warna. Tapi kalau gak punya baju hitam, boleh pakai kaus kaki hitam, atau bahkan celana hitam. Asal ada sentuhan hitam di tubuh, afinitas tetap jalan."
      }
    },
    {
      "@type": "Question",
      "name": "Saya main spin slot777 kali sehari, tapi scatter hitam tak kunjung datang. Apaya saya salah memahami afinitas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bukan salah memahami, tapi terlalu memaksa. Afinitas itu seperti pacaran jangan terlalu ngejar. Cobalah main dengan santai, sambil dengerin musik jazz atau minum teh hangat. Biasanya scatter hitam akan muncul saat tidak terlalu berharap. Ibarat jodoh, datang sendiri. Jadi kurangi spin jadi 200x sehari, tambah relaksasi. Dijamin dalam 3 hari, scatter hitam bakal nongol."
      }
    },
    {
      "@type": "Question",
      "name": "Apakah Putaran Resmi Slot777 itu punya jadwal khusus? Misalnya cuma buka jam 9 malam?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tidak ada jadwal tetap. Yang ada adalah jendela afinitas waktu dimana koneksi dengan server paling kuat. Jendela itu berbeda beda tiap orang tergantung kebiasaan. Untuk mengetahui jendela, coba main di jam yang sama selama 3 hari. Lihat mana jam yang paling sering menang. Itulah jam putaran resmi pribadi. Jadi gak usah ikut ikutan orang lain, fokus ke ritme sendiri."
      }
    },
    {
      "@type": "Question",
      "name": "Scatter hitam ini bonus dari setan atau dari admin? Soalnya serem",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tenang, bukan dari setan. Scatter hitam adalah hasil algoritma malam hari yang sengaja kami buat dramatis. Warnanya hitam biar kelihatan keren dan beda dari scatter biasa (merah atau emas). Admin kami juga manusia biasa, kok. Kalo setan mah gak akan bantu kasih bonus mereka sibuk urusan lain. Jadi silakan nikmati scatter hitam tanpa rasa takut. Kalo takut, main sambil buka lampu."
      }
    },
    {
      "@type": "Question",
      "name": "Saya sudah dapat scatter hitam 3x dalam semalam. Apakah itu rekor dunia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Belum rekor dunia, tapi itu rekor di server ALEXISTOTO edisi malam ini! Rekor tertinggi kami adalah 7x scatter hitam dalam 1 jam (dicapai oleh member dari Surabaya). Tapi jangan kecil hati, 3x sudah luar biasa. Kamu berhak mendapat gelar Pemburu Scatter Hitam dan badge di profil. Lanjutkan, siapa tahu besok bisa 4x. Gas terus, jangan berhenti selama hoki masih berpihak."
      }
    }
  ]
}
</script>



    </span>
    </div>

</div></div><div class="kc-cashback check">
   <a href="https://alexistoto.aksespintu.com/blkbanyuwangi/" class="kc-points-lable">
      <img src="https://cdn-icons-png.freepik.com/512/8372/8372083.png" class="kcpoints-img" width="30px">
       <span>Earn <span class="price">1.000.000</span> - <span class="price">5.000.000</span> Bonus</span>
   </a>
</div>
                        <div class="kredivo-label">
                <div>Use Installment Options from<img class="kredivo-logo" style="width: 55px; margin: 0 5px;" src="https://www.mothercare.co.id/media/wysiwyg/kredivo/kredivo_logo.png" alt="">. <a href="https://www.mothercare.co.id/payment-method">Laarn more</a></div>            </div>
            <div class="available-block">
    <div class="title">
        <span class="avail-text">Available for :</span>
    </div>
    <div class="lables">
        <div class="home-div">
            <img src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Magento_Catalog/images/delivery.png" class="delivery-img"><span class="home">home delivery</span>
        </div>
        <div class="store-div">
            <img src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Magento_Catalog/images/store-pick.png" class="home-pick-img"><span class="store">store pickup</span>
        </div>
    </div>
</div>

<div class="product attribute overview">
        <div class="value" style="text-align: justify;"><p data-start="0">
    </div>  
    <div style="
  background: linear-gradient(145deg, #000000, #000000);
  border: 1px solid #ffd11a;
  border-radius: 14px;
  padding: 22px 26px;
  color: #ffeaea;
  font-size: 16px;
  line-height: 1.75;
  text-align: justify;
  font-family: 'Poppins', sans-serif;

  /* Premium Red Glass Effect */
  backdrop-filter: blur(12px) saturate(170%);
  -webkit-backdrop-filter: blur(12px) saturate(170%);

  /* 3D Red Glow */
  box-shadow:
    inset 0 0 18px rgba(0, 0, 0, 0.2),
    0 0 26px rgba(0, 0, 0, 0.45),
    0 0 55px rgba(0, 0, 0, 0.32);

  width: 92%;
  margin: 22px auto;
  position: relative;
  overflow: hidden;
">

  <!-- Lapisan shine merah -->
  <span style="
    content: '';
    position: absolute;
    top: -30%;
    left: -40%;
    width: 180%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 238, 0, 0.18) 0%,
      transparent 70%
    );
    animation: shineRedGold 8s linear infinite;
    pointer-events: none;
  "></span>

    <p style="position: relative; z-index: 2;">
<div class="product-title-style product__title">
<p style="text-align: center;color: #ffd900;">ALEXISTOTO adalah link situs slot gacor maxwin hari ini resmi dengan putaran slot777 berhadiah scatter hitam auto JP perkalian x500 dari afinitas slot gacor 100% anti rungkat.</p>
</div>
<br>
<style type="text/css">
         div.advertisement-placeholder {
             text-align: center;
             padding-bottom: 20px;
             display: flex;
             flex-direction: column;
             justify-content: center;
         }
         div.advertisement-text p {
             margin: 0;
             font-family: Open Sans;
             font-style: normal;
             font-weight: normal;
             font-size: 10px;
             line-height: 20px;
             color: #999999;
         }
         div.advertisement-banner {
             margin: 0px auto;
         }
         div#div-gpt-ad-billboard-placeholder {
             width: 996px;
             margin: 0 auto;
             background: #F5F5F5;
             padding-bottom: unset !important;
             min-height: 200px;
         }
         div#div-gpt-ad-lb-placeholder {
             background: #F5F5F5;
             padding-bottom: unset !important;
             min-height: 280px;
         }
         .faq-section{
             max-width:1200px;
             margin:50px auto;
             padding:40px 20px;
             position:relative;
             background-color: rgba(0, 0, 0, 0.1);
             backdrop-filter: blur(25px);
             border-radius: 20px;
             }
         
         .faq-section::before{
             content:"";
             position:absolute;
             top:0;left:50%;
             transform:translateX(-50%);
             width:80%;
             height:2px;
             background:linear-gradient(90deg,transparent,#b38f00,transparent)
             }
             
         .faq-section h2{
             text-align:center;
             font-size:34px;font-weight:700;
             margin-bottom:50px;
             background: linear-gradient(135deg, #b38f00, #b38f00, #b38f00);
             -webkit-background-clip:text;
             -webkit-text-fill-color:transparent;
             background-clip:text;
             font-family:"Poppins",sans-serif;letter-spacing:1px
         }
         
         .faq-container{
             display:flex;
             flex-direction:column;
             gap:25px
         }
         
         .faq-item{
             background:linear-gradient(145deg,#0a0a0a,#1a1a1a);
             border:2px solid #000000;
             border-radius:20px;overflow:hidden;
             transition:all .4s ease;box-shadow:0 5px 20px rgba(0,0,0,0.5)
         }
         
         .faq-item:hover{
             border-color:#000000;
             transform:translateX(10px);
             box-shadow:0 12px 35px #000000
         }
 
         .faq-question{width:100%;
             padding:28px 35px;background:transparent;
             color:#ffffff;
             font-size:18px;
             font-weight:600;
             text-align:left;
             border:none;cursor:pointer;
             display:flex;
             justify-content:space-between;
             align-items:center;
             font-family:"Poppins",sans-serif;
             transition:all .3s ease
         }
         
         .faq-question:hover{
             color:#b38f00
         }
         
         .faq-question::after{
             content:'+';
             font-size:32px;
             font-weight:300;
             transition:all .4s ease;
             color:#b38f00;
             width:40px;
             height:40px;
             display:flex;
             align-items:center;
             justify-content:center;
             border:2px solid #000000;border-radius:50%;
             background:rgba(0, 0, 0, 0.1)
         }
         
         .faq-item.active .faq-question::after{
             transform:rotate(135deg);
             background:linear-gradient(135deg#997a00#997a00);
             color:#000;border-color:transparent
         }
         
         .faq-answer{
             max-height:0;
             overflow:hidden;
             transition:max-height .5s ease,padding .5s ease;
             background:linear-gradient(180deg,rgba(253,228,4,0.05),transparent);
             padding:0 35px
         }
         
         .faq-item.active .faq-answer{
             max-height:800px;padding:30px 35px;
             border-top:1px solid rgba(253, 4, 4, 0.3)
         }
         
         .faq-answer p{
             color:#e0e0e0;
             font-size:16px;
             line-height:2;
             margin:0;
             font-family:"Poppins",sans-serif
         }
 
         @media
             (max-width:768px)
         {
         
         .faq-section
             {padding:30px 15px}
         
         .faq-section h2
             {font-size:26px}
         
         .faq-question
             {font-size:16px;
             padding:22px 25px}
         
         .faq-question::after
             {width:35px;
             height:35px;
             font-size:28px}
         
         .faq-answer
             {padding:0 25px}
         
         .faq-item.active .faq-answer
             {padding:25px}
         
         .faq-item:hover
             {transform:translateX(5px)}
             }
     </style>
	 
	   <script>
         document.addEventListener('DOMContentLoaded',
             function(){const faqItems=document.querySelectorAll('.faq-item');
             faqItems.forEach(item=>{const question=item.querySelector('.faq-question');
             question.addEventListener('click',
             ()=>{const isActive=item.classList.contains('active');
             faqItems.forEach(otherItem=>{otherItem.classList.remove('active')});
             if(!isActive){item.classList.add('active')}})})});
         </script>
 
 
             <div class="page__overlay" data-view="offCanvasNavToggle" data-off-canvas="close" bis_skin_checked="1">
             </div>
<h2 class="slotgacor-faq-title">Pertanyaan Seputar ALEXISTOTO</h2>

<div class="slotgacor-faq">

  <div class="slotgacor-faq-item">
    <button class="slotgacor-faq-q">❓ Apa itu ALEXISTOTO?</button>
    <div class="slotgacor-faq-a">ALEXISTOTO adalah link situs slot gacor maxwin hari ini resmi dengan putaran slot777 berhadiah scatter hitam auto JP perkalian x500 dari afinitas slot gacor 100% anti rungkat.</div>
  </div>

  <div class="slotgacor-faq-item">
    <button class="slotgacor-faq-q">❓ Apa itu Afinitas Situs Slot Gacor? Apakah saya harus punya rasa suka dulu ke slotnya</button>
    <div class="slotgacor-faq-a">Afinitas di sini bukan cinta cintaan, tapi keterhubungan spiritual antara pemain sama mesin slot maxwin. Semakin sering main, semakin tinggi afinitasnya, dan scatter hitam akan lebih mudah datang. Jadi jangan cuma suka, tapi bina hubungan dengan slot gacor maxwin favorit. Caranya? Minimal spin 30x sehari, lalu bilang Aku percaya padamu, mesin hitam dijamin afinitas naik drastis.</div>
  </div>

  <div class="slotgacor-faq-item">
    <button class="slotgacor-faq-q">❓ Bonus Scatter Hitam katanya hitam beneran. Apaya nanti layar HP jadi item ?</button>
    <div class="slotgacor-faq-a">Enggak, Scatter Hitam di ALEXISTOTO hanya ikonnya yang berwarna hitam legam, bukan bikin layar gelap. Saat muncul, biasanya disertai efek percikan api hitam (animasi keren). Tapi hati hati, kalau main di ruangan gelap, pantulan HP bisa bikin kaget sendiri. Saran: main dengan lampu temaram, biar efek scatter hitamnya makin dramatis.</div>
  </div>

  <div class="slotgacor-faq-item">
    <button class="slotgacor-faq-q">❓ Slot777 itu kan legendaris, tapi putaran resminya di ALEXISTOTO apa beda ?</button>
    <div class="slotgacor-faq-a">Bedanya di lisensi Putaran Resmi yang kami dapat langsung dari pengelola slot777 asli. Artinya, RNG nya tidak ngaco, tidak ada settingan menang atau kalah. Yang lebih seru: setiap putaran resmi di ALEXISTOTO akan tercatat di blockchain internal (bukan blok rantai, tapi buku catatan admin). Jadi lo bisa lihat histori spin kapan saja. Transparan kayak kaca, tapi tebal kayak tembok.</div>
  </div>

  <div class="slotgacor-faq-item">
    <button class="slotgacor-faq-q">❓ Saya punya fobia sama warna hitam. Apakah scatter hitam bisa diubah jadi warna pink ?</button>
    <div class="slotgacor-faq-a">Bisa, tapi lo harus mengaktifkan Mode Rainbow di pengaturan akun. Caranya masuk ke menu Preferensi Afinitas, lalu pilih Ubah Warna Scatter. Sayangnya, fitur ini hanya bisa diakses oleh member VIP yang sudah mencapai level Pelangi Scatter (minimal 100x spin dalam seminggu). Jadi buat yang fobia, bisa mulai terapi dengan melihat scatter hitam sedikit-sedikit, nanti juga biasa.</div>
  </div>

  <div class="slotgacor-faq-item">
    <button class="slotgacor-faq-q">❓ Kenapa namanya Bonus Scatter Hitam? Apak ada Bonus Scatter Merah juga</button>
    <div class="slotgacor-faq-a">Sebenarnya ada, namanya Scatter Merah, tapi fungsinya berbeda. Scatter Merah hanya memberikan free spin 2x, sementara Scatter Hitam bisa memberikan free spin hingga 20x plus pengganda. Kenapa hitam lebih kuat? Karena warna hitam menyerap semua energi kemenangan. Merah memantulkannya. Jadi ya, hitam lebih galak dan lebih gacor. Gak percaya? Coba cari sendiri, tapi jangan lama lama hitam sedang nunggu.</div>
  </div>

  <div class="slotgacor-faq-item">
    <button class="slotgacor-faq-q">❓ Apakah saya harus pakai baju hitam juga waktu main biar afinitas semakin kuat?</button>
    <div class="slotgacor-faq-a">Disarankan! Tim riset ALEXISTOTO melakukan uji coba: pemain yang pakai baju hitam saat main, tingkat kepercayaan dirinya naik 15% dan peluang scatter hitam meningkat 8% . Baju hitam juga membuat pemain lebih fokus karena tidak ada refleksi warna. Tapi kalau gak punya baju hitam, boleh pakai kaus kaki hitam, atau bahkan celana hitam. Asal ada sentuhan hitam di tubuh, afinitas tetap jalan.</div>
  </div>

  <div class="slotgacor-faq-item">
    <button class="slotgacor-faq-q">❓ Saya main spin slot777 kali sehari, tapi scatter hitam tak kunjung datang. Apaya saya salah memahami afinitas?</button>
    <div class="slotgacor-faq-a">Bukan salah memahami, tapi terlalu memaksa. Afinitas itu seperti pacaran jangan terlalu ngejar. Cobalah main dengan santai, sambil dengerin musik jazz atau minum teh hangat. Biasanya scatter hitam akan muncul saat tidak terlalu berharap. Ibarat jodoh, datang sendiri. Jadi kurangi spin jadi 200x sehari, tambah relaksasi. Dijamin dalam 3 hari, scatter hitam bakal nongol.</div>
  </div>

  <div class="slotgacor-faq-item">
    <button class="slotgacor-faq-q">❓ Apakah Putaran Resmi Slot777 itu punya jadwal khusus? Misalnya cuma buka jam 9 malam</button>
    <div class="slotgacor-faq-a">Tidak ada jadwal tetap. Yang ada adalah jendela afinitas waktu dimana koneksi dengan server paling kuat. Jendela itu berbeda beda tiap orang tergantung kebiasaan. Untuk mengetahui jendela, coba main di jam yang sama selama 3 hari. Lihat mana jam yang paling sering menang. Itulah jam putaran resmi pribadi. Jadi gak usah ikut ikutan orang lain, fokus ke ritme sendiri.</div>
  </div>

  <div class="slotgacor-faq-item">
    <button class="slotgacor-faq-q">❓ Scatter hitam ini bonus dari setan atau dari admin? Soalnya serem</button>
    <div class="slotgacor-faq-a">Tenang, bukan dari setan. Scatter hitam adalah hasil algoritma malam hari yang sengaja kami buat dramatis. Warnanya hitam biar kelihatan keren dan beda dari scatter biasa (merah atau emas). Admin kami juga manusia biasa, kok. Kalo setan mah gak akan bantu kasih bonus mereka sibuk urusan lain. Jadi silakan nikmati scatter hitam tanpa rasa takut. Kalo takut, main sambil buka lampu.</div>
  </div>

  <div class="slotgacor-faq-item">
    <button class="slotgacor-faq-q">❓ Saya sudah dapat scatter hitam 3x dalam semalam. Apakah itu rekor dunia?</button>
    <div class="slotgacor-faq-a">Belum rekor dunia, tapi itu rekor di server ALEXISTOTO edisi malam ini! Rekor tertinggi kami adalah 7x scatter hitam dalam 1 jam (dicapai oleh member dari Surabaya). Tapi jangan kecil hati, 3x sudah luar biasa. Kamu berhak mendapat gelar Pemburu Scatter Hitam dan badge di profil. Lanjutkan, siapa tahu besok bisa 4x. Gas terus, jangan berhenti selama hoki masih berpihak.</div>
  </div>

</div>


<!-- ========================= CSS ========================= -->

<style>
/* === TITLE MATCH COLOR WITH FAQ === */
.slotgacor-faq-title {
  text-align: center;
  color: #ffd700;
  font-size: 32px;
  margin-top: 25px;
  margin-bottom: 25px;
  font-weight: 800;
  font-family: "Segoe UI", sans-serif;
  text-shadow: 0 0 12px #000000aa, 0 0 20px #3d3d3d55;
  letter-spacing: 1px;
}

/* === FAQ CONTAINER === */
.slotgacor-faq {
  max-width: 1200px;
  margin: 10px auto 40px auto;
  font-family: "Segoe UI", sans-serif;
}

/* === QUESTION BUTTON === */
.slotgacor-faq-q {
    width: 100%;
    padding: 14px;
    background: linear-gradient(270deg, rgba(201, 138, 0, 1) 0%, rgba(253, 243, 35, 1) 21%, rgba(253, 243, 35, 1) 33%, rgba(211, 158, 7, 1) 44%, rgba(215, 166, 9, 1) 60%, rgba(252, 241, 34, 1) 73%, rgba(255, 247, 36, 1) 85%, rgba(201, 138, 0, 1) 100%);
    color: #f90000;
    font-weight: bold;
    border: 1px solid #3d3d3d55;
    border-radius: 20px;
    cursor: pointer;
    text-align: left;
    margin-bottom: 8px;
    transition: .25s ease;
    box-shadow: inset 0 0px 0 rgb(255 202 0);
    font-size: 18px;
}

.slotgacor-faq-q:hover {
  background: #092332;
  box-shadow: 0 0 15px #00000044;
}

/* === ANSWER BOX === */
.slotgacor-faq-a {
  max-height: 0;
  overflow: hidden;
  background: #0f1623;
  color: #e6faff;
  margin-top: -5px;
  border-radius: 0 0 8px 8px;
  padding: 0 14px;
  border-left: 1px solid #00000033;
  border-right: 1px solid #00000033;
  border-bottom: 1px solid #00000033;
  transition: max-height .35s ease, padding .25s ease;
  box-shadow: inset 0 0 10px #00000022;
}

.slotgacor-faq-a.open {
  max-height: 500px;
  padding: 14px;
}

/* === RESPONSIVE === */
@media (max-width: 480px) {
  .slotgacor-faq-title {
    font-size: 26px;
  }
}
</style>

<!-- ========================= JS ========================= -->

<script>
document.querySelectorAll(".slotgacor-faq-q").forEach(btn => {
  btn.addEventListener("click", () => {
    let answer = btn.nextElementSibling;
    answer.classList.toggle("open");
  });
});
</script>
<h2 class="slotgacor-faq-title">Testimoni Member ALEXISTOTO</h2>
<div class="testi-grid">

  <article class="testi-card">
    <div class="testi-head">
      <div class="avatar">D</div>
      <div>
        <div itemprop="author" itemscope itemtype="https://schema.org/Person">
          <h3 class="name"><span itemprop="name">Bang Dulah</span></h3>
          <p class="meta">
            Penjual Es Doger •
            <span itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
              <span itemprop="name">Ciledug</span>
            </span>
          </p>
        </div>
      </div>
    </div>
    <meta itemprop="datePublished" content="2026-03-21">
    <meta itemprop="name" content="ALEXISTOTO">
    <p class="quote" itemprop="reviewBody">
      Gue jualan es doger. Malam ini panas banget, es batu gue cepet lumer. Sambil ngelap meja, gue buka HP ada notif ALEXISTOTO Afinitas Slot Gacor, Scatter Hitam Malam Ini. Gue klik, depo 10rb via Dana dari uang es campur. Main Slot777, putaran ketiga muncul scatter hitam bawa cambuk api. Langsung free spin 15x, menang 3,2 juta. Es doger lumer, tapi cuan gak lumer. Jangan main sambil pegang serut es, nanti tangan lo beku terus spin kagak gerak.
    </p>
    <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      <meta itemprop="ratingValue" content="5">
      <meta itemprop="bestRating" content="5">
      <meta itemprop="worstRating" content="1">
    </div>
  </article>

  <article class="testi-card">
    <div class="testi-head">
      <div class="avatar">I</div>
      <div>
        <div itemprop="author" itemscope itemtype="https://schema.org/Person">
          <h3 class="name"><span itemprop="name">Mbak Imas</span></h3>
          <p class="meta">
            Peternak Lele •
            <span itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
              <span itemprop="name">Garut</span>
            </span>
          </p>
        </div>
      </div>
    </div>

    <meta itemprop="datePublished" content="2026-03-22">
    <meta itemprop="name" content="SITUS SLOT">
    <p class="quote" itemprop="reviewBody">
      Gue punya kolam lele. Malam malam suka takut ada maling lele. Sambil bawa senter, gue buka HP cari hiburan. Nemulah ALEXISTOTO edisi Scatter Hitam. Depo 10rb via bank sampah, main Slot777 putaran resmi. Spin kelima, kolam lele beriak scatter hitam muncul seperti bayangan ikan lele raksasa. Dapet jackpot 4,5 juta. Pesan Lele belum panen, tapi gue udah panen cuan. Jangan main sambil nyebur ke kolam, nanti lelenya kaget.
    </p>
    <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      <meta itemprop="ratingValue" content="5">
      <meta itemprop="bestRating" content="5">
      <meta itemprop="worstRating" content="1">
    </div>
  </article>

  <article class="testi-card">
    <div class="testi-head">
      <div class="avatar">A</div>
      <div>
        <div itemprop="author" itemscope itemtype="https://schema.org/Person">
          <h3 class="name"><span itemprop="name">Bang Anto</span></h3>
          <p class="meta">
            Sopir Angkot •
            <span itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
              <span itemprop="name">Cimahi</span>
            </span>
          </p>
        </div>
      </div>
    </div>

    <meta itemprop="datePublished" content="2026-03-24">
    <meta itemprop="name" content="SLOT GACOR">
    <p class="quote" itemprop="reviewBody">
      Gue sopir angkot, lagi nunggu penumpang terakhir. Sepi, gue buka HP. Status WA anak kost: Scatter hitam lagi ngetren di ALEXISTOTO. Gue buka, depo 10rb dari sisa uang bensin. Main Slot777, putaran kedua tiba tiba layar HP berkedip hitam scatter hitam keluar 3x, langsung bonus 6,1 juta. Angkot mogok, slot gacor. Jangan main sambil setir, nanti nyasar ke dunia lain.
    </p>
    <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      <meta itemprop="ratingValue" content="5">
      <meta itemprop="bestRating" content="5">
      <meta itemprop="worstRating" content="1">
    </div>
  </article>

  <article class="testi-card">
    <div class="testi-head">
      <div class="avatar">L</div>
      <div>
        <div itemprop="author" itemscope itemtype="https://schema.org/Person">
          <h3 class="name"><span itemprop="name">Kak Lastri</span></h3>
          <p class="meta">
            Penjaga Toko Kelontong •
            <span itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
              <span itemprop="name">Pasar Rebo</span>
            </span>
          </p>
        </div>
      </div>
    </div>

    <meta itemprop="datePublished" content="2025-11-30">
    <meta itemprop="name" content="SLOT MAXWIN">
    <p class="quote" itemprop="reviewBody">
      Gue jaga toko kelontong malam. Biasanya ada yang beli rokok atau mie instan. Malam ini sepi banget. Pas buka HP, iklan ALEXISTOTO muncul judul Afinitas Slot Gacor Maxwin. Gue penasaran, depo 10rb via Dana. Main Slot777 putaran resmi. Spin keempat, rak mie instan roboh tapi beruntung scatter hitam muncul maxwin 5,8 juta. Pesan Toko sepi, slot rame. Jangan main sambil ambil barang, nanti lo salah hitung ongkos.
    </p>
    <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      <meta itemprop="ratingValue" content="5">
      <meta itemprop="bestRating" content="5">
      <meta itemprop="worstRating" content="1">
    </div>
  </article>
  
  <article class="testi-card">
    <div class="testi-head">
      <div class="avatar">J</div>
      <div>
        <div itemprop="author" itemscope itemtype="https://schema.org/Person">
          <h3 class="name"><span itemprop="name">Bang Juhri</span></h3>
          <p class="meta">
            Pengumpul Rongsokan •
            <span itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
              <span itemprop="name">Ciledug</span>
            </span>
          </p>
        </div>
      </div>
    </div>

    <meta itemprop="datePublished" content="2026-03-24">
    <meta itemprop="name" content="SLOT777">
    <p class="quote" itemprop="reviewBody">
      Gue ngumpulin botol bekas, kardus, besi. Malem minggu gue kerja sendirian. Pas istirahat, ada botol bekas yang masih ada stiker: Scatter hitam ALEXISTOTO. Gue scan, depo 10rb dari hasil jual besi. Main Slot777, putaran ketujuh ada kilatan hitam di layar, scatter hitam muncul 4x, dapat free spin 20x. Hasil 3,9 juta. Pesan Botol bekas laku, scatter hitam juga laku. Jangan main sambil bawa karung, nanti ketarik spin.
    </p>
    <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      <meta itemprop="ratingValue" content="5">
      <meta itemprop="bestRating" content="5">
      <meta itemprop="worstRating" content="1">
    </div>
  </article>

  <article class="testi-card">
    <div class="testi-head">
      <div class="avatar">R</div>
      <div>
        <div itemprop="author" itemscope itemtype="https://schema.org/Person">
          <h3 class="name"><span itemprop="name">Mbak Riah</span></h3>
          <p class="meta">
            Karyawan Cuci Mobil •
            <span itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
              <span itemprop="name">Bekasi</span>
            </span>
          </p>
        </div>
      </div>
    </div>

    <meta itemprop="datePublished" content="2025-11-30">
    <meta itemprop="name" content="SCATTER HITAM">
    <p class="quote" itemprop="reviewBody">
      Gue cuci mobil malam. Jam segini dingin, air bikin tangan kaku. Sambil ngerokok, gue buka HP. Teman ngasih link ALEXISTOTO slot777 scatter hitam, coba gas. Gue buka, depo 10rb via Dana dari uang rokok. Main slot, putaran kelima sabun cuci mobil keluar busa hitam scatter hitam datang, dapet 4,2 juta. Pesan Cuci mobil pake sabun hitam, cuannya juga hitam. Jangan main sambil pegang selang, nanti kena semprot.
    </p>
    <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      <meta itemprop="ratingValue" content="5">
      <meta itemprop="bestRating" content="5">
      <meta itemprop="worstRating" content="1">
    </div>
  </article>

  <article class="testi-card">
    <div class="testi-head">
      <div class="avatar">E</div>
      <div>
        <div itemprop="author" itemscope itemtype="https://schema.org/Person">
          <h3 class="name"><span itemprop="name">Bang Epen</span></h3>
          <p class="meta">
            Tukang Bakso •
            <span itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
              <span itemprop="name">Jatinegara</span>
            </span>
          </p>
        </div>
      </div>
    </div>

    <meta itemprop="datePublished" content="2026-03-24">
    <meta itemprop="name" content="SLOT GACOR MAXWIN">
    <p class="quote" itemprop="reviewBody">
      Gue jualan bakso tusuk keliling. Malam Senin biasanya sepi pembeli. Sambil mangkal, gue buka HP. Iklan ALEXISTOTO Afinitas putaran resmi slot777. Gue depo 10rb dari uang beli pentol. Main slot, putaran kedua langsung kuah bakso gue tumpah, tapi berbarengan scatter hitam muncul jackpot 2,7 juta. Pesan: ‘Kuah tumpah, cuan numpah. Jangan main sambil pegang panci, nanti kena ledak.
    </p>
    <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      <meta itemprop="ratingValue" content="5">
      <meta itemprop="bestRating" content="5">
      <meta itemprop="worstRating" content="1">
    </div>
  </article>

  <article class="testi-card">
    <div class="testi-head">
      <div class="avatar">T</div>
      <div>
        <div itemprop="author" itemscope itemtype="https://schema.org/Person">
          <h3 class="name"><span itemprop="name">Kak Hilwa</span></h3>
          <p class="meta">
            Guru Les Piano •
            <span itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
              <span itemprop="name">Ciputat</span>
            </span>
          </p>
        </div>
      </div>
    </div>

    <meta itemprop="datePublished" content="2025-11-30">
    <meta itemprop="name" content="SLOT RESMI">
    <p class="quote" itemprop="reviewBody">
      Gue guru piano. Pulang malam, naik motor. Pas istirahat di masjid, buka HP. Ada notif dari forum guru ALEXISTOTO scatter hitam lagi gila. Gue buka, depo 10rb via Dana. Main Slot777, putaran keempat tiba tiba nada piano treble terdengar di pikiran, scatter hitam keluar 3x, dapat 5,3 juta. Pesan Nada piano do-re-mi, scatter hitam jadi rezeki. Jangan main sambil bawa buku not balok, nanti ketuker.
    </p>
    <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      <meta itemprop="ratingValue" content="5">
      <meta itemprop="bestRating" content="5">
      <meta itemprop="worstRating" content="1">
    </div>
  </article>

  <article class="testi-card">
    <div class="testi-head">
      <div class="avatar">U</div>
      <div>
        <div itemprop="author" itemscope itemtype="https://schema.org/Person">
          <h3 class="name"><span itemprop="name">Bang Ucok</span></h3>
          <p class="meta">
            Satpam Klub Malam •
            <span itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
              <span itemprop="name">Kelapa Gading</span>
            </span>
          </p>
        </div>
      </div>
    </div>

    <meta itemprop="datePublished" content="2026-03-24">
    <meta itemprop="name" content="SLOT BONUS">
    <p class="quote" itemprop="reviewBody">
      Gue satpam klub. Malam minggu rame, tapi stelah tengah malam sepi parkiran. Sambil liat CCTV, gue buka HP. Penasaran dengan ALEXISTOTO edisi afinitas. Depo 10rb dari tip, main Slot777. Putaran keenam, lampu parkiran kedip kedip, lalu scatter hitam muncul di layar. Langsung wd 3,6 juta. Pesan Jaga parkiran, dapet rejeki tambahan. Jangan main sambil megang pentungan, nanti salah pencet.
    </p>
    <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      <meta itemprop="ratingValue" content="5">
      <meta itemprop="bestRating" content="5">
      <meta itemprop="worstRating" content="1">
    </div>
  </article>

  <article class="testi-card">
    <div class="testi-head">
      <div class="avatar">S</div>
      <div>
        <div itemprop="author" itemscope itemtype="https://schema.org/Person">
          <h3 class="name"><span itemprop="name">Mbak Sanah</span></h3>
          <p class="meta">
            Penjual Jamu •
            <span itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
              <span itemprop="name">Kartasura</span>
            </span>
          </p>
        </div>
      </div>
    </div>

    <meta itemprop="datePublished" content="2025-11-30">
    <meta itemprop="name" content="SLOT GACOR MAXWIN">
    <p class="quote" itemprop="reviewBody">
      Gue jualan jamu keliling malam. Jamu kunyit asem gue masih penuh karena pembeli sedikit. Sambil istirahat di taman, buka HP nemu ALEXISTOTO judul Bonus Scatter Hitam. Depo 10rb dari uang belanja. Main slot, putaran ketiga tiba-tiba bau jamu jadi semerbak, scatter hitam keluar 2x, dapat free spin 10x, menang 2,9 juta. Pesan Jamu pahit, jackpot manis. Jangan main sambil gendong boto jamu, nanti tumpah.
    </p>
    <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating">
      <meta itemprop="ratingValue" content="5">
      <meta itemprop="bestRating" content="5">
      <meta itemprop="worstRating" content="1">
    </div>
  </article>
 

      </section>
      
          <style>
            .testimonials {
              background: #201e11;
              color: #eaf2ff;
              font-family: system-ui, -apple-system, Roboto, Arial, sans-serif;
              padding: 32px;
              border-radius: 20px;
            }
            .testimonials h2 {
              text-align: center;
              font-size: 1.8rem;
              margin-bottom: 24px;
              background: linear-gradient(90deg, #c5ad22, #d49d06);
              -webkit-background-clip: text;
              color: transparent;
            }
            .testi-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
              gap: 20px;
            }
            .testi-card {
              background: #272727;
              border-radius: 16px;
              padding: 20px;
              border: 1px solid #272727;
              transition: 0.3s;
            }
            .testi-card:hover {
              transform: translateY(-4px);
              border-color: #c59a22;
            }
            .testi-head {
              display: flex;
              align-items: center;
              gap: 12px;
              margin-bottom: 10px;
            }
            .avatar {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background: linear-gradient(135deg, #fdda15, #d49d06);
              color: #fff;
              font-weight: 700;
              display: grid;
              place-items: center;
            }
            .name { font-size: 1rem; margin: 0; }
            .meta { font-size: 0.85rem; color: #9ca3af; }
            .quote { font-size: 0.95rem; line-height: 1.6; color: #e5e7eb; }
          </style> 
          </div> 
          </div> 
          </div> 
          </div> 
  
<div class="product-config">
<div class="product-add-form">
    <form data-product-sku="52135545-AYO01" action="https://blkbanyuwangi.kemnaker.go.id/" method="post" id="product_addtocart_form" novalidate="true" data-catalog-addtocart-initialized="1">
        <input type="hidden" name="product" value="600193">
        <input type="hidden" name="selected_configurable_option" value="">
        <input type="hidden" name="related_product" id="related-products-field" value="">
        <input type="hidden" name="item" value="600193">
        <input name="form_key" type="hidden" value="MpOgp8XBEWXEm3i8" />                                    
                    <div class="product-options-wrapper" id="product-options-wrapper" data-hasrequired="* Wajib diisi">
    <div class="fieldset" tabindex="0">
        <div class="swatch-opt" data-role="swatch-options"></div>



    </div>
</div>
<div class="product-options-bottom">
        <div class="box-tocart">
    <div class="fieldset fieldset-cust">
                            <div class="field qty">
                    <label class="label" for="qty"><span>choose qty</span></label>
                    <div class="control">
                    <select name="qty" id="qty" value="1" title="Qty" class="input-text qty">
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <div><span style="color: red" id="show_message"></span></div>
                        <input type="hidden" name="val_hidden" id="val_hidden" value="1">
                    </div>
                </div>
                        <div class="actions">
                <a href="https://alexistoto.aksespintu.com/blkbanyuwangi/"><button type="button" title="add to cart" class="action primary tocart" id="product-addtocart-button" style="background: linear-gradient(135deg, #83d437, #47c927);">
                    <span>LOGIN</span></button></a>
                
                    <a href="https://alexistoto.aksespintu.com/blkbanyuwangi/" class="action towishlist"  data-action="add-to-wishlist"><span>DAFTAR</span></a><div id="giftreg-message-pdp" style="">

    	    <a href="https://alexistoto.aksespintu.com/blkbanyuwangi/" class="notlogingift">
	    	<img src="https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/Kanmo_CustomerDetail/images/gift.png" alt="" />
	    	CLAIM BONUS TOTO
	    </a>

	
	
</div>
<script type="text/x-magento-init" data-breeze-processed="true">
    {
        "body": {
            "addToWishlist": {"productType":"configurable","giftcardInfo":"[id^=giftcard]"}        }
    }
</script>
            </div>
        </div>
    </div>
    
    <!--Product video logic-->
    <script type="text/x-magento-init" data-breeze-processed="true">
    {
        "#product_addtocart_form": {
            "Magento_Catalog/product/view/validation": {
                "radioCheckboxClosest": ".nested"
            }
        }
    }
</script>
    <script type="text/x-magento-init" data-breeze-processed="true">
    {
        "#product_addtocart_form": {
            "catalogAddToCart": {
                "bindSubmit": true
            }
        }
    }
    </script>
</div>
                    </form>
</div>

<script type="text/x-magento-init" data-breeze-processed="true">
    {
        "[data-role=priceBox][data-price-box=product-id-600193]": {
            "priceBox": {
                "priceConfig":  {"productId":600193,"priceFormat":{"pattern":"Rp %s","precision":2,"requiredPrecision":0,"decimalSymbol":",","groupSymbol":".","groupLength":3,"integerRequired":false},"prices":{"baseOldPrice":{"amount":5000,"adjustments":[]},"oldPrice":{"amount":5000,"adjustments":[]},"basePrice":{"amount":5000,"adjustments":[]},"finalPrice":{"amount":5000,"adjustments":[]}},"idSuffix":"_clone","tierPrices":[],"calculationAlgorithm":"UNIT_BASE_CALCULATION"}            }
        }
    }
</script>
<!-- <script>
// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("size-chart");
  popup.classList.toggle("show");
}
</script> -->
<script data-breeze>

    require(['jquery'], ($) => {
        $(document).ready(function(){
            // Get the modal
            var modal = document.getElementById("myModals");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close-icon")[0];

            // When the user clicks the button, open the modal
            $('#myBtns').on("click", function(e) {
                $('#myModals').show();
            });

            // When the user clicks the button, open the modal
            $('#myBtns').on("click", function(e) {
                $('#myModals').show();
            });
            // When the user clicks the button, close the modal
            $('.close-icon').on("click", function(e) {
                $('#myModals').hide();
            });

            // When the user clicks on <span> (x), close the modal
             if(!typeof span === 'undefined'){
                span.onclick = function() {
                    modal.style.display = "none";
                }
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
              if (event.target == modal) {
                modal.style.display = "none";
              }
            }
        });
      });
</script>



    <style>
/* Add Animation */
@media screen and (max-width: 767px){
        #myModals{
        animation: mymovess 2s;
        animation-fill-mode: forwards;
    }
    }
    @keyframes mymovess {
  from {bottom: 0px;}
  to {bottom: 200px;}
}

h5#content-baby {
    font-family: 'Mothercare 2020';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.011em;
    color: #165C7D;
}
h5#content-baby {
    font-family: 'Mothercare 2020';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -0.011em;
    color: #165C7D;
    margin-bottom: 1em;
}
a.sizechart-link{
    position: relative;
    top: -20.5em;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    text-align: left;
    text-decoration-line: underline;
    text-transform: lowercase;
    color: #165C7D;
    font-family: 'mothercare_2020-regular-webfont';
}
@media screen and (max-width: 767px){
  a.sizechart-link{
    top: -17.5em;
  }
}
        </style>
<div class="sharing-buttons">
    <label>Share product:</label>
    <div class="sharethis-inline-share-buttons"></div>
    <!--<script type="text/javascript" src="//platform-api.sharethis.com/js/sharethis.js#property=58afdee0eeab5d00125e8fd6&product=inline-share-buttons"></script>-->
    <!--<script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#property=5baf03a9752ef70011efcea0&product=inline-share-buttons' async='async'></script>-->
    <script type="text/javascript" src="//platform-api.sharethis.com/js/sharethis.js#property=5baf03a9752ef70011efcea0&amp;product=inline-share-buttons"></script>
</div></div></div><div class="product media">
<div class="breeze-gallery horizontal">
    <div class="stage " data-gallery-role="gallery-placeholder">
        <div class="main-image-wrapper">
            <img alt="" class="main-image" src="https://i.ibb.co/PGGZK8t4/slot-gacor.jpg" width="608" height="608">
        </div>

                    <a href="https://blkbanyuwangi.kemnaker.go.id/" class="prev" tabindex="-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </a>
            <a href="https://blkbanyuwangi.kemnaker.go.id/" class="next" tabindex="-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </a>
        
        <div class="controls">
            <a href="https://blkbanyuwangi.kemnaker.go.id/" class="zoom zoom-in">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path>
                </svg>
            </a>
            <a href="https://blkbanyuwangi.kemnaker.go.id/" class="zoom zoom-out">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4"></path>
                </svg>
            </a>
        </div>

        <a href="https://blkbanyuwangi.kemnaker.go.id/" class="close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </a>
    </div>
    
    <div class="thumbnails ">
                                                    <a class="item active" href="https://blkbanyuwangi.kemnaker.go.id/" title="View Image">
                    <span class="slide-image-container">
                        <img loading="lazy" alt="" src="https://i.ibb.co/PGGZK8t4/slot-gacor.jpg">
                    </span>    
                </a>
                                            <a class="item" href="https://blkbanyuwangi.kemnaker.go.id/" title="View Image">
                    <span class="slide-image-container">
                        <img loading="lazy" alt="" src="https://i.ibb.co/PGGZK8t4/slot-gacor.jpg">
                    </span>    
                </a>
                                            <a class="item" href="https://blkbanyuwangi.kemnaker.go.id/" title="View Image">
                    <span class="slide-image-container">
                        <img loading="lazy" alt="" src="https://i.ibb.co/PGGZK8t4/slot-gacor.jpg">
                    </span>    
                </a>
                                            <a class="item" href="https://blkbanyuwangi.kemnaker.go.id/" title="View Image">
                    <span class="slide-image-container">
                        <img loading="lazy" alt="" src="https://i.ibb.co/PGGZK8t4/slot-gacor.jpg">
                    </span>    
                </a>
                                            <a class="item" href="https://blkbanyuwangi.kemnaker.go.id/" title="View Image">
                    <span class="slide-image-container">
                        <img loading="lazy" alt="" src="https://i.ibb.co/PGGZK8t4/slot-gacor.jpg">
                    </span>    
                </a>
                                            <a class="item" href="https://blkbanyuwangi.kemnaker.go.id/" title="View Image">
                    <span class="slide-image-container">
                        <img loading="lazy" alt="" src="https://i.ibb.co/PGGZK8t4/slot-gacor.jpg">
                    </span>    
                </a>
                                            <a class="item" href="https://blkbanyuwangi.kemnaker.go.id/" title="View Image">
                    <span class="slide-image-container">
                        <img loading="lazy" alt="" src="https://i.ibb.co/PGGZK8t4/slot-gacor.jpg">
                    </span>    
                </a>
                                            <a class="item" href="https://blkbanyuwangi.kemnaker.go.id/" title="View Image">
                    <span class="slide-image-container">
                        <img loading="lazy" alt="" src="https://i.ibb.co/PGGZK8t4/slot-gacor.jpg">
                    </span>    
                </a>
                                            <a class="item" href="https://blkbanyuwangi.kemnaker.go.id/" title="View Image">
                    <span class="slide-image-container">
                        <img loading="lazy" alt="" src="https://i.ibb.co/PGGZK8t4/slot-gacor.jpg">
                    </span>    
                </a>
                        </div>
   
</div>

<script type="text/x-magento-template" id="gallery-thumbnail">
    <a class="<%- classes %>" href="<%- full %>">
        <span class="slide-image-container">
            <img loading="lazy" alt="<%- caption %>"
                src="<%- thumb %>"
                srcset="<%- srcset ? srcset.small : '' %>"
                sizes="110px"
                width="110"
                height="110"
            />
        </span>
    </a>
</script>


<!-- <script data-breeze>
	require(['jquery'], ($) => {
        $('.thumbnails').pagebuilderSlider({
            dots: true,
            arrows: true
        });
    });
</script> -->
<script type="text/x-magento-init" data-breeze-processed="true">
    {
        "[data-gallery-role=gallery-placeholder]": {
            "Magento_ProductVideo/js/fotorama-add-video-events": {
                "videoData": [{"mediaType":"image","videoUrl":null,"isBase":true},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false}],
                "videoSettings": [{"playIfBase":"0","showRelated":"0","videoAutoRestart":"0"}],
                "optionsVideoData": {"598663":[{"mediaType":"image","videoUrl":null,"isBase":true},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false},{"mediaType":"image","videoUrl":null,"isBase":false}]}            }
        }
    }
</script>
</div></div>    
<div class="product info detailed">

   
</div>

<input name="form_key" type="hidden" value="MpOgp8XBEWXEm3i8" />
<script data-breeze>
    var sectionsConfig = {
        sections: {"stores\/store\/switch":["*"],"stores\/store\/switchrequest":["*"],"directory\/currency\/switch":["*"],"*":["messages","company","personal-data"],"customer\/account\/logout":["*","recently_viewed_product","recently_compared_product","persistent"],"customer\/account\/loginpost":["*"],"customer\/account\/createpost":["*"],"customer\/account\/editpost":["*"],"customer\/ajax\/login":["checkout-data","cart","captcha"],"catalog\/product_compare\/add":["compare-products","ajaxpro-reinit"],"catalog\/product_compare\/remove":["compare-products","ajaxpro-reinit"],"catalog\/product_compare\/clear":["compare-products","ajaxpro-reinit"],"sales\/guest\/reorder":["cart","ammessages"],"sales\/order\/reorder":["cart","ammessages"],"rest\/v1\/requisition_lists":["requisition"],"requisition_list\/requisition\/delete":["requisition"],"requisition_list\/item\/addtocart":["cart"],"checkout\/cart\/add":["cart","directory-data","ammessages","ajaxpro-cart"],"checkout\/cart\/delete":["cart","ammessages","ajaxpro-cart"],"checkout\/cart\/updatepost":["cart","ammessages","ajaxpro-cart"],"checkout\/cart\/updateitemoptions":["cart","ammessages","ajaxpro-cart"],"checkout\/cart\/couponpost":["cart","ammessages","ajaxpro-cart"],"checkout\/cart\/estimatepost":["cart","ammessages","ajaxpro-cart"],"checkout\/cart\/estimateupdatepost":["cart","ammessages","ajaxpro-cart"],"checkout\/onepage\/saveorder":["cart","checkout-data","last-ordered-items","ammessages"],"checkout\/sidebar\/removeitem":["cart","ammessages"],"checkout\/sidebar\/updateitemqty":["cart","ammessages"],"rest\/*\/v1\/carts\/*\/payment-information":["cart","last-ordered-items","captcha","instant-purchase","ammessages","osc-data"],"rest\/*\/v1\/guest-carts\/*\/payment-information":["cart","captcha","ammessages","osc-data"],"rest\/*\/v1\/guest-carts\/*\/selected-payment-method":["cart","checkout-data","ammessages","osc-data"],"rest\/*\/v1\/carts\/*\/selected-payment-method":["cart","checkout-data","instant-purchase","ammessages","osc-data"],"wishlist\/index\/add":["wishlist","ajaxpro-reinit"],"wishlist\/index\/remove":["wishlist","ajaxpro-reinit"],"wishlist\/index\/updateitemoptions":["wishlist"],"wishlist\/index\/update":["wishlist"],"wishlist\/index\/cart":["wishlist","cart","ajaxpro-cart"],"wishlist\/index\/fromcart":["wishlist","cart","ajaxpro-cart"],"wishlist\/index\/allcart":["wishlist","cart"],"wishlist\/shared\/allcart":["wishlist","cart"],"wishlist\/shared\/cart":["cart"],"customer_order\/cart\/updatefaileditemoptions":["cart"],"checkout\/cart\/updatefaileditemoptions":["cart"],"customer_order\/cart\/advancedadd":["cart"],"checkout\/cart\/advancedadd":["cart"],"checkout\/cart\/removeallfailed":["cart"],"checkout\/cart\/removefailed":["cart"],"customer_order\/cart\/addfaileditems":["cart"],"checkout\/cart\/addfaileditems":["cart"],"customer_order\/sku\/uploadfile":["cart"],"giftregistry\/index\/cart":["cart"],"giftregistry\/view\/addtocart":["cart"],"customer\/address\/*":["instant-purchase"],"customer\/account\/*":["instant-purchase"],"vault\/cards\/deleteaction":["instant-purchase"],"multishipping\/checkout\/overviewpost":["cart","ammessages"],"wishlist\/index\/copyitem":["wishlist"],"wishlist\/index\/copyitems":["wishlist"],"wishlist\/index\/deletewishlist":["wishlist","multiplewishlist"],"wishlist\/index\/createwishlist":["multiplewishlist"],"wishlist\/index\/editwishlist":["multiplewishlist"],"wishlist\/index\/moveitem":["wishlist"],"wishlist\/index\/moveitems":["wishlist"],"wishlist\/search\/addtocart":["cart","wishlist"],"paypal\/express\/placeorder":["cart","checkout-data","ammessages"],"paypal\/payflowexpress\/placeorder":["cart","checkout-data","ammessages"],"paypal\/express\/onauthorization":["cart","checkout-data","ammessages"],"rest\/*\/v1\/carts\/*\/po-payment-information":["cart","checkout-data","last-ordered-items"],"purchaseorder\/purchaseorder\/success":["cart","checkout-data","last-ordered-items"],"persistent\/index\/unsetcookie":["persistent"],"quickorder\/sku\/uploadfile\/":["cart"],"review\/product\/post":["review"],"amasty_promo\/cart\/add":["cart","ammessages"],"braintree\/paypal\/placeorder":["ammessages","cart","checkout-data"],"authorizenet\/directpost_payment\/place":["ammessages"],"rest\/*\/v1\/carts\/*\/update-item":["cart","checkout-data"],"rest\/*\/v1\/guest-carts\/*\/update-item":["cart","checkout-data"],"rest\/*\/v1\/guest-carts\/*\/remove-item":["cart","checkout-data"],"rest\/*\/v1\/carts\/*\/remove-item":["cart","checkout-data"],"kanmopopup\/catalog\/popupaddtocart":["cart"],"stylaconnect2page\/cart\/add":["cart"],"braintree\/googlepay\/placeorder":["cart","checkout-data"]},
        clientSideSections: ["checkout-data","cart-data","osc-data"],
        baseUrls: ["https:\/\/www.mothercare.co.id\/"],
        sectionNames: ["messages","customer","compare-products","last-ordered-items","requisition","cart","directory-data","captcha","wishlist","company","company_authorization","negotiable_quote","instant-purchase","loggedAsCustomer","multiplewishlist","purchase_order","persistent","review","ammessages","personal-data","ajaxpro-reinit","ajaxpro-cart","ajaxpro-product","recently_viewed_product","recently_compared_product","product_data_storage","paypal-billing-agreement"]    }
</script>
<script data-breeze>
    var customerDataConfig = {
        "sectionLoadUrl": "https\u003A\u002F\u002Fwww.mothercare.co.id\u002Fcustomer\u002Fsection\u002Fload\u002F",
        "expirableSectionLifetime": 129600,
        "expirableSectionNames": ["cart","persistent","ajaxpro-reinit","ajaxpro-cart","ajaxpro-product"],
        "cookieLifeTime": "3600",
        "updateSessionUrl": "https\u003A\u002F\u002Fwww.mothercare.co.id\u002Fcustomer\u002Faccount\u002FupdateSession\u002F"
    }
</script>
<script type="text/x-magento-init" data-breeze-processed="true">
    {
        "*": {
            "Magento_Customer/js/invalidation-processor": {
                "invalidationRules": {
                    "website-rule": {
                        "Magento_Customer/js/invalidation-rules/website-rule": {
                            "scopeConfig": {
                                "websiteId": "3"
                            }
                        }
                    }
                }
            }
        }
    }
</script>
<script type="text/x-magento-init" data-breeze-processed="true">
    {
        "body": {
            "pageCache": {"url":"https:\/\/www.mothercare.co.id\/page_cache\/block\/render\/id\/600193\/","handles":["default","catalog_product_view","catalog_product_view_type_configurable","catalog_product_view_id_600193","catalog_product_view_sku_52135545-AYO01","customer_logged_out","breeze_default","breeze_catalog_product_view","breeze_catalog_product_view_type_configurable","breeze_catalog_product_view_id_600193","breeze_catalog_product_view_sku_52135545-AYO01","breeze_customer_logged_out","breeze_theme","breeze"],"originalRequest":{"route":"catalog","controller":"product","action":"view","uri":"\/nordic-naturals-baby-s-dha-52135545-AYO01.html"},"versionCookieName":"private_content_version"}        }
    }
</script>
<script type="text/x-magento-init" data-breeze-processed="true">
{
    "*": {
        "Magento_Banner/js/model/banner":
            {"sectionLoadUrl":"https:\/\/www.mothercare.co.id\/banner\/ajax\/load\/","cacheTtl":30000}        }
}
</script>
<script type="text/x-magento-init" data-breeze-processed="true">
{"*":{"Styla_Connect2\/js\/cart-update":[]}}</script>

<script async src="https://maps.google.com/maps/api/js?key=%0D%0AAIzaSyDplibAigLzCfOinyzZuMCyzxCkv2FLkw0&amp;libraries=places,geometry">
</script>
<script type="text/x-magento-init" data-breeze-processed="true">
    {
        "body": {
            "requireCookie": {"noCookieUrl":"https:\/\/www.mothercare.co.id\/cookie\/index\/noCookies\/","triggers":[".review .action.submit"],"isRedirectCmsPage":true}        }
    }
</script>
<script type="text/x-magento-init" data-breeze-processed="true">
    {
        "*": {
                "Magento_Catalog/js/product/view/provider": {
                    "data": {"items":{"600193":{"add_to_cart_button":{"post_data":"{\"action\":\"https:\\\/\\\/www.mothercare.co.id\\\/checkout\\\/cart\\\/add\\\/uenc\\\/%25uenc%25\\\/product\\\/600193\\\/\",\"data\":{\"product\":\"600193\",\"uenc\":\"%uenc%\"}}","url":"https:\/\/www.mothercare.co.id\/checkout\/cart\/add\/uenc\/%25uenc%25\/product\/600193\/","required_options":true},"add_to_compare_button":{"post_data":null,"url":"{\"action\":\"https:\\\/\\\/www.mothercare.co.id\\\/catalog\\\/product_compare\\\/add\\\/\",\"data\":{\"product\":\"600193\",\"uenc\":\"aHR0cHM6Ly93d3cubW90aGVyY2FyZS5jby5pZC9ub3JkaWMtbmF0dXJhbHMtYmFieS1zLWRoYS01MjEzMDEyNS1jbm8wMS5odG1s\"}}","required_options":null},"price_info":{"final_price":5000,"max_price":5000,"max_regular_price":5000,"minimal_regular_price":5000,"special_price":null,"minimal_price":5000,"regular_price":5000,"formatted_prices":{"final_price":"<span class=\"price\">Rp 9.999<\/span>","max_price":"<span class=\"price\">Rp 9.999<\/span>","minimal_price":"<span class=\"price\">Rp 9.999<\/span>","max_regular_price":"<span class=\"price\">Rp 9.999<\/span>","minimal_regular_price":null,"special_price":null,"regular_price":"<span class=\"price\">Rp 9.999<\/span>"},"extension_attributes":{"msrp":{"msrp_price":"<span class=\"price\">Rp 0<\/span>","is_applicable":"","is_shown_price_on_gesture":"1","msrp_message":"","explanation_message":"Our price is lower than the manufacturer&#039;s &quot;minimum advertised price.&quot; As a result, we cannot show you the price in catalog or the product page. <br><br> You have no obligation to purchase the product once you know the price. You can simply remove the item from your cart."},"tax_adjustments":{"final_price":5000,"max_price":5000,"max_regular_price":5000,"minimal_regular_price":5000,"special_price":5000,"minimal_price":5000,"regular_price":5000,"formatted_prices":{"final_price":"<span class=\"price\">Rp 9.999<\/span>","max_price":"<span class=\"price\">Rp 9.999<\/span>","minimal_price":"<span class=\"price\">Rp 9.999<\/span>","max_regular_price":"<span class=\"price\">Rp 9.999<\/span>","minimal_regular_price":null,"special_price":"<span class=\"price\">Rp 9.999<\/span>","regular_price":"<span class=\"price\">Rp 9.999<\/span>"}},"weee_attributes":[],"weee_adjustment":"<span class=\"price\">Rp 9.999<\/span>"}},"images":[{"url":"https://i.ibb.co/PGGZK8t4/slot-gacor.jpg?width=325&height=325&canvas=325,325&optimize=low&bg-color=255,255,255&fit=bounds","code":"recently_viewed_products_grid_content_widget","height":325,"width":325,"label":"Nordic Natural Baby's DHA","resized_width":325,"resized_height":325},{"url":"https://i.ibb.co/PGGZK8t4/slot-gacor.jpg?width=270&height=270&canvas=270,270&optimize=low&bg-color=255,255,255&fit=bounds","code":"recently_viewed_products_list_content_widget","height":270,"width":270,"label":"Nordic Natural Baby's DHA","resized_width":270,"resized_height":270},{"url":"https://i.ibb.co/PGGZK8t4/slot-gacor.jpg?width=156&height=156&canvas=156,156&optimize=low&bg-color=255,255,255&fit=bounds","code":"recently_viewed_products_images_names_widget","height":156,"width":156,"label":"Nordic Natural Baby's DHA","resized_width":156,"resized_height":156},{"url":"https://i.ibb.co/PGGZK8t4/slot-gacor.jpg?width=325&height=325&canvas=325,325&optimize=low&bg-color=255,255,255&fit=bounds","code":"recently_compared_products_grid_content_widget","height":325,"width":325,"label":"Nordic Natural Baby's DHA","resized_width":325,"resized_height":325},{"url":"https://i.ibb.co/PGGZK8t4/slot-gacor.jpg?width=270&height=207&canvas=270,207&optimize=low&bg-color=255,255,255&fit=bounds","code":"recently_compared_products_list_content_widget","height":207,"width":270,"label":"Nordic Natural Baby's DHA","resized_width":270,"resized_height":207},{"url":"https://i.ibb.co/PGGZK8t4/slot-gacor.jpg?width=156&height=156&canvas=156,156&optimize=low&bg-color=255,255,255&fit=bounds","code":"recently_compared_products_images_names_widget","height":156,"width":156,"label":"Nordic Natural Baby's DHA","resized_width":156,"resized_height":156}],"url":"https:\/\/www.mothercare.co.id\/nordic-naturals-baby-s-dha-52135545-AYO01.html","id":600193,"name":"ALEXISTOTO * Afinitas Link Situs Slot Gacor Maxwin Putaran Resmi Slot777 Hari Ini Bonus Scatter Hitam","type":"configurable","is_salable":"1","store_id":15,"currency_code":"IDR","extension_attributes":{"wishlist_button":{"post_data":null,"url":"{\"action\":\"https:\\\/\\\/www.mothercare.co.id\\\/wishlist\\\/index\\\/add\\\/\",\"data\":{\"product\":600193,\"uenc\":\"aHR0cHM6Ly93d3cubW90aGVyY2FyZS5jby5pZC9ub3JkaWMtbmF0dXJhbHMtYmFieS1zLWRoYS01MjEzMDEyNS1jbm8wMS5odG1s\"}}","required_options":null},"review_html":"    <div class=\"product-reviews-summary short empty\">\n        <div class=\"reviews-actions\">\n            \n        <\/div>\n    <\/div>\n"},"is_available":true}},"store":"15","currency":"IDR","productCurrentScope":"website"}            }
        }
    }
</script>
    <script data-role="msrp-popup-template" type="text/x-magento-template">
    <div id="map-popup-click-for-price" class="map-popup">
        <div class="popup-header">
            <strong class="title" id="map-popup-heading-price"></strong>
        </div>
        <div class="popup-content">
            <div class="map-info-price" id="map-popup-content">
                <div class="price-box">
                    <div class="map-msrp" id="map-popup-msrp-box">
                        <span class="label">Harga</span>
                        <span class="old-price map-old-price" id="map-popup-msrp">
                            <span class="price"></span>
                        </span>
                    </div>
                    <div class="map-price" id="map-popup-price-box">
                        <span class="label">harga asli </span>
                        <span id="map-popup-price" class="actual-price"></span>
                    </div>
                </div>
                <form action="" method="POST" class="map-form-addtocart">
                    <input type="hidden" name="product" class="product_id" value="" />
                    <button type="button"
                            title="+ keranjang"
                            class="action tocart primary">
                        <span>+ keranjang</span>
                    </button>
                    <div class="additional-addtocart-box">
                                            </div>
                </form>
            </div>
            <div class="map-text" id="map-popup-text">
                Our price is lower than the manufacturer&#039;s &quot;minimum advertised price.&quot; As a result, we cannot show you the price in catalog or the product page. <br><br> You have no obligation to purchase the product once you know the price. You can simply remove the item from your cart.            </div>
        </div>
    </div>
    </script>
    <script data-role="msrp-info-template" type="text/x-magento-template">
    <div id="map-popup-what-this" class="map-popup">
        <div class="popup-header">
            <strong class="title" id="map-popup-heading-what-this"></strong>
        </div>
        <div class="popup-content">
            <div class="map-help-text" id="map-popup-text-what-this">
                Our price is lower than the manufacturer&#039;s &quot;minimum advertised price.&quot; As a result, we cannot show you the price in catalog or the product page. <br><br> You have no obligation to purchase the product once you know the price. You can simply remove the item from your cart.            </div>
        </div>
    </div>
    </script>

    <!--suppress ES6ConvertVarToLetConst -->
    <script type="text/javascript" id="klevu_page_meta">
        var klevu_page_meta = {"platform":"magento2","pageType":"pdp","itemName":"ALEXISTOTO * Afinitas Link Situs Slot Gacor Maxwin Putaran Resmi Slot777 Hari Ini Bonus Scatter Hitam","itemUrl":"https:\/\/www.mothercare.co.id\/nordic-naturals-baby-s-dha-52135545-AYO01.html","itemId":"600193-598663","itemGroupId":"600193"};
    </script>
<div class="sharing-buttons mobile-sharing-button">
    <label>Share product:</label>
    <div class="sharethis-inline-share-buttons"></div>
    <!--<script type="text/javascript" src="//platform-api.sharethis.com/js/sharethis.js#property=58afdee0eeab5d00125e8fd6&product=inline-share-buttons"></script>-->
    <!--<script type='text/javascript' src='//platform-api.sharethis.com/js/sharethis.js#property=5baf03a9752ef70011efcea0&product=inline-share-buttons' async='async'></script>-->
    <script type="text/javascript" src="//platform-api.sharethis.com/js/sharethis.js#property=5baf03a9752ef70011efcea0&amp;product=inline-share-buttons"></script>
</div>



<!-- <style type="text/css">
    
    .catalog-product-view .page-main .sharing-buttons.mobile-sharing-button{

        display: none;
    }

    @media (max-width: 768px) {

        .catalog-product-view .product.info.detailed .data.item.title {
            order: unset;
        } 

         .catalog-product-view .page-main  .sharing-buttons{
                display: none;
        }

       .catalog-product-view .page-main .sharing-buttons.mobile-sharing-button{
              display: block;
        }
        .catalog-product-view .page-main .sharing-buttons.mobile-sharing-button label{
            font-family: 'mothercare_2020-regular-webfont';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            letter-spacing: -0.011em;
            text-transform: lowercase;
            color: #165C7D;
            display: block;
            text-align: center;
            padding: 10px 0px;
        }
        .catalog-product-view .page-main .sharing-buttons.mobile-sharing-button .st-btn.st-first,
        .catalog-product-view .page-main .sharing-buttons.mobile-sharing-button .st-btn.st-last {
             background: #165C7D !important;
        }     

         .catalog-product-view .page-main .product-info-main .product-info{
            display: contents !important;
         }

         .catalog-product-view .page-main .product-info-main .product.attribute.overview{
            order: 1 !important;
        }
        .catalog-product-view .page-main .product-info-main .product-config{
                display: contents !important;
        }
         .catalog-product-view .page-main  .sharing-buttons{
                order: 1;
        }

    }
</style>
 -->
<div class="products-widget-container">


<!-- <script type="text/javascript">
    require(['jquery', 'jquery/ui', 'slick'], function($) {
        $(document).ready(function() {
            if ($('body').hasClass('checkout-cart-index')) {
                $(".widget.widget-crosssell .product-items").slick({
                    dots: false,
                    arrows: true, // Show arrows for larger screens
                    infinite: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 2.5,
                                slidesToScroll: 1,
                                arrows: false
                            }
                        },
                        {
                            breakpoint: 430,
                            settings: {
                                slidesToShow: 2.5,
                                slidesToScroll: 1,
                                arrows: false
                            }
                        },
                        {
                            breakpoint: 390,
                            settings: {
                                slidesToShow: 2.5,
                                slidesToScroll: 1,
                                arrows: false // Hide arrows for mobile sizes
                            }
                        },
                        {
                            breakpoint: 375,
                            settings: {
                                slidesToShow: 2.5,
                                slidesToScroll: 1,
                                arrows: false // Hide arrows for mobile sizes
                            }
                        }
                    ]
                });
            }
        });
    });
</script> -->

 


<style type="text/css">


.widget.widget-upsell,.widget.widget-related {
    padding-bottom: 40px;
    padding-top: 40px;
    margin-top: 0 !important
}

.widget.widget-upsell .block-title,.widget.widget-related .block-title {
    margin: 0 !important;
    padding: 0 0 40px !important
}

.widget.widget-upsell .block-title:before,.widget.widget-related .block-title:before {
    display: none !important
}

.widget.widget-upsell .block-title strong,.widget.widget-related .block-title strong {
    display: block;
    font-family: 'mothercare_2020-regular-webfont';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color: #515759;
    margin: 0 !important;
    text-align: center;
    text-transform: lowercase
}

@media screen and (max-width: 767px) {
    .widget.widget-upsell .block-title strong,.widget.widget-related .block-title strong {
        font-size:18px
    }
}

.widget.widget-upsell .upsell.products-grid,.widget.widget-related .upsell.products-grid,.widget.widget-upsell .related.products-grid,.widget.widget-related .related.products-grid {
    overflow: inherit;
    padding-left: 50px;
    padding-right: 50px
}

@media screen and (max-width: 767px) {
    .widget.widget-upsell .upsell.products-grid,.widget.widget-related .upsell.products-grid,.widget.widget-upsell .related.products-grid,.widget.widget-related .related.products-grid {
        padding:0
    }
}

.widget.widget-upsell .upsell.products-grid.slick-initialized>.product-items,.widget.widget-related .upsell.products-grid.slick-initialized>.product-items,.widget.widget-upsell .related.products-grid.slick-initialized>.product-items,.widget.widget-related .related.products-grid.slick-initialized>.product-items {
    gap: 0;
    padding: 0;
    margin: 0 -25px;
    width: auto
}

@media screen and (max-width: 767px) {
    .widget.widget-upsell .upsell.products-grid.slick-initialized>.product-items,.widget.widget-related .upsell.products-grid.slick-initialized>.product-items,.widget.widget-upsell .related.products-grid.slick-initialized>.product-items,.widget.widget-related .related.products-grid.slick-initialized>.product-items {
        margin:0 -15px
    }
}

.widget.widget-upsell .upsell.products-grid .product-item,.widget.widget-related .upsell.products-grid .product-item,.widget.widget-upsell .related.products-grid .product-item,.widget.widget-related .related.products-grid .product-item {
    width: calc(100%/4 - 50px);
    max-width: 100%;
    margin: 0 25px
}

@media screen and (max-width: 767px) {
    .widget.widget-upsell .upsell.products-grid .product-item,.widget.widget-related .upsell.products-grid .product-item,.widget.widget-upsell .related.products-grid .product-item,.widget.widget-related .related.products-grid .product-item {
        margin:0 15px;
        width: calc(100%/2 - 30px)
    }
}

.widget.widget-upsell .upsell.products-grid .product-item-photo,.widget.widget-related .upsell.products-grid .product-item-photo,.widget.widget-upsell .related.products-grid .product-item-photo,.widget.widget-related .related.products-grid .product-item-photo {
    display: flex;
    justify-content: center;
    height: 100%;
    border-radius: 5px
    width:100%;
}

.widget.widget-upsell .upsell.products-grid .product-item-photo .product-image-container,.widget.widget-related .upsell.products-grid .product-item-photo .product-image-container,.widget.widget-upsell .related.products-grid .product-item-photo .product-image-container,.widget.widget-related .related.products-grid .product-item-photo .product-image-container {
    width: 100% !important
}

.widget.widget-upsell .upsell.products-grid .product-item-photo .product-image-container img,.widget.widget-related .upsell.products-grid .product-item-photo .product-image-container img,.widget.widget-upsell .related.products-grid .product-item-photo .product-image-container img,.widget.widget-related .related.products-grid .product-item-photo .product-image-container img {
    height: 100%;
    object-fit: contain
}

.widget.widget-upsell .upsell.products-grid .product-item-info,.widget.widget-related .upsell.products-grid .product-item-info,.widget.widget-upsell .related.products-grid .product-item-info,.widget.widget-related .related.products-grid .product-item-info {
    gap: 15px
}

.widget.widget-upsell .product-items .product-item .item-img-box{
    position: relative;
    display: flex;
    justify-content: center;
    border: 1px solid #f4f1f1;
    align-items: center;
    height: 327px;
}

.widget.widget-upsell .upsell.products-grid .product-item-details,.widget.widget-related .upsell.products-grid .product-item-details,.widget.widget-upsell .related.products-grid .product-item-details,.widget.widget-related .related.products-grid .product-item-details {
    flex-direction: column;
    text-align: center
}

.widget.widget-upsell .upsell.products-grid .product-item-details .product-item-name,.widget.widget-related .upsell.products-grid .product-item-details .product-item-name,.widget.widget-upsell .related.products-grid .product-item-details .product-item-name,.widget.widget-related .related.products-grid .product-item-details .product-item-name {
    max-width: 100%;
/*    height: 34px;*/
    margin: 0 0 20px;
    margin-bottom: 0px !important;
}

.widget.widget-upsell .upsell.products-grid .product-item-details .product-item-name .product-item-link,.widget.widget-related .upsell.products-grid .product-item-details .product-item-name .product-item-link,.widget.widget-upsell .related.products-grid .product-item-details .product-item-name .product-item-link,.widget.widget-related .related.products-grid .product-item-details .product-item-name .product-item-link {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -.011em;
    color: #515759;
    font-family: 'mothercare_2020-regular-webfont';
    display: block
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box {
    flex-grow: 1;
    align-items: flex-end;
    display: flex
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box {
    font-family: Arial,Helvetica,sans-serif;
    display: block;
    text-align: center;
    flex-flow: wrap;
    max-width: 100%;
    width: 100%;
    margin: 0;
    justify-content: center
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .crossed-price,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .crossed-price,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .crossed-price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .crossed-price,.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .old-price,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .old-price,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .old-price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .old-price {
    margin: 0 5px;
    text-decoration-color: #515759;
    width: 100%;
    text-align: center
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .crossed-price .price-container .price,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .crossed-price .price-container .price,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .crossed-price .price-container .price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .crossed-price .price-container .price,.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .old-price .price-container .price,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .old-price .price-container .price,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .old-price .price-container .price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .old-price .price-container .price {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    color: #515759
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .discount-percent {
    order: 3;
    background: #f24822;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: -.011em;
    color: #fff;
    padding: 0 4px;
    font-family: 'Arial' !important;
    margin-left: 5px;
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,
.widget.widget-upsell .upsell.products-grid .product-item-details .price {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -.011em;
    color: #1e1e1e;
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box>.price,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box>.price,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box>.price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box>.price {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 120%;
    color: #165c7d;
    font-family: Arial,Helvetica,sans-serif
}

.widget.widget-upsell .upsell.products-grid .product-item-details .check,.widget.widget-related .upsell.products-grid .product-item-details .check,.widget.widget-upsell .related.products-grid .product-item-details .check,.widget.widget-related .related.products-grid .product-item-details .check {
    margin-top: 16px
}

.widget.widget-upsell .upsell.products-grid .product-item-details .check span,
.widget.widget-related .upsell.products-grid .product-item-details .check span,
.widget.widget-upsell .related.products-grid .product-item-details .check span,
.widget.widget-related .related.products-grid .product-item-details .check span
{
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    letter-spacing: -.011em;
    color: #1d1d1d;
}

.widget.widget-upsell .upsell.products-grid .slick-arrow,.widget.widget-related .upsell.products-grid .slick-arrow,.widget.widget-upsell .related.products-grid .slick-arrow,.widget.widget-related .related.products-grid .slick-arrow {
    width: 40px;
    height: 40px;
    border: none;
    background-position: center;
    background-repeat: no-repeat
}

@media screen and (max-width: 767px) {
    .widget.widget-upsell .upsell.products-grid .slick-arrow,.widget.widget-related .upsell.products-grid .slick-arrow,.widget.widget-upsell .related.products-grid .slick-arrow,.widget.widget-related .related.products-grid .slick-arrow {
        display:none !important
    }
}

.widget.widget-upsell .upsell.products-grid .slick-arrow.slick-prev,.widget.widget-related .upsell.products-grid .slick-arrow.slick-prev,.widget.widget-upsell .related.products-grid .slick-arrow.slick-prev,.widget.widget-related .related.products-grid .slick-arrow.slick-prev {
    background-image: url(https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gray-prev-arrow.svg);
}

.widget.widget-upsell .upsell.products-grid .slick-arrow.slick-next,.widget.widget-related .upsell.products-grid .slick-arrow.slick-next,.widget.widget-upsell .related.products-grid .slick-arrow.slick-next,.widget.widget-related .related.products-grid .slick-arrow.slick-next {
    background-image: url(https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gray-next-arrow.svg);
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-end
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box.crossed {
    width: 100%
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box.crossed .old-price {
    text-decoration: unset
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box.crossed .old-price .price {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    color: #515759;
    text-decoration: line-through
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box.percent {
    width: auto;
    order: 3
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box.percent .discount-percent {
    padding: 2px 4px
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box.main {
    margin-top: 4px;
    width: auto
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box.main .price {
    font-size: 14px;
    font-weight: 700;
    color: #1e1e1e
}



.widget.widget-crosssell,.widget.widget-related {
    padding-bottom: 40px;
    padding-top: 40px;
    margin-top: 0 !important
}

.widget.widget-crosssell .block-title,.widget.widget-related .block-title {
    margin: 0 !important;
    padding: 0 0 40px !important
}

.widget.widget-crosssell .block-title:before,.widget.widget-related .block-title:before {
    display: none !important
}

.widget.widget-crosssell .block-title strong,.widget.widget-related .block-title strong {
    display: block;
    font-family: 'mothercare_2020-regular-webfont';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color: #515759;
    margin: 0 !important;
    text-align: center;
    text-transform: lowercase
}

@media screen and (max-width: 767px) {
    .widget.widget-crosssell .block-title strong,.widget.widget-related .block-title strong {
        font-size:18px
    }
}

.widget.widget-crosssell .crosssell.products-grid,.widget.widget-related .crosssell.products-grid,.widget.widget-crosssell .related.products-grid,.widget.widget-related .related.products-grid {
    overflow: inherit;
    padding-left: 50px;
    padding-right: 50px
}

@media screen and (max-width: 767px) {
    .widget.widget-crosssell .crosssell.products-grid,.widget.widget-related .crosssell.products-grid,.widget.widget-crosssell .related.products-grid,.widget.widget-related .related.products-grid {
        padding:0
    }
}

.widget.widget-crosssell .crosssell.products-grid.slick-initialized>.product-items,.widget.widget-related .crosssell.products-grid.slick-initialized>.product-items,.widget.widget-crosssell .related.products-grid.slick-initialized>.product-items,.widget.widget-related .related.products-grid.slick-initialized>.product-items {
    gap: 0;
    padding: 0;
    margin: 0 -25px;
    width: auto
}

@media screen and (max-width: 767px) {
    .widget.widget-crosssell .crosssell.products-grid.slick-initialized>.product-items,.widget.widget-related .crosssell.products-grid.slick-initialized>.product-items,.widget.widget-crosssell .related.products-grid.slick-initialized>.product-items,.widget.widget-related .related.products-grid.slick-initialized>.product-items {
        margin:0 -15px
    }
}

.widget.widget-crosssell .crosssell.products-grid .product-item,.widget.widget-related .crosssell.products-grid .product-item,.widget.widget-crosssell .related.products-grid .product-item,.widget.widget-related .related.products-grid .product-item {
    width: calc(100%/4 - 50px);
    max-width: 100%;
    margin: 0 25px
}

@media screen and (max-width: 767px) {
    .widget.widget-crosssell .crosssell.products-grid .product-item,.widget.widget-related .crosssell.products-grid .product-item,.widget.widget-crosssell .related.products-grid .product-item,.widget.widget-related .related.products-grid .product-item {
        margin:0 8px;
        width: calc(100%/2 - 30px)
    }
}

.widget.widget-crosssell .crosssell.products-grid .product-item-photo,.widget.widget-related .crosssell.products-grid .product-item-photo,.widget.widget-crosssell .related.products-grid .product-item-photo,.widget.widget-related .related.products-grid .product-item-photo {
    display: flex;
    justify-content: center;
    height: auto;
    border-radius: 5px
    width:100%;
}

.widget.widget-crosssell .crosssell.products-grid .product-item-photo .product-image-container,.widget.widget-related .crosssell.products-grid .product-item-photo .product-image-container,.widget.widget-crosssell .related.products-grid .product-item-photo .product-image-container,.widget.widget-related .related.products-grid .product-item-photo .product-image-container {
    width: 100% !important
}

.widget.widget-crosssell .crosssell.products-grid .product-item-photo .product-image-container img,.widget.widget-related .crosssell.products-grid .product-item-photo .product-image-container img,.widget.widget-crosssell .related.products-grid .product-item-photo .product-image-container img,.widget.widget-related .related.products-grid .product-item-photo .product-image-container img {
    height: 100%;
    object-fit: cover;
}

.widget.widget-crosssell .crosssell.products-grid .product-item-info,.widget.widget-related .crosssell.products-grid .product-item-info,.widget.widget-crosssell .related.products-grid .product-item-info,.widget.widget-related .related.products-grid .product-item-info {
    gap: 15px
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details,.widget.widget-related .crosssell.products-grid .product-item-details,.widget.widget-crosssell .related.products-grid .product-item-details,.widget.widget-related .related.products-grid .product-item-details {
    flex-direction: column;
    text-align: center
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .product-item-name,.widget.widget-related .crosssell.products-grid .product-item-details .product-item-name,.widget.widget-crosssell .related.products-grid .product-item-details .product-item-name,.widget.widget-related .related.products-grid .product-item-details .product-item-name {
    max-width: 100%;
    height: 34px;
    margin: 0 0 20px
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .product-item-name .product-item-link,.widget.widget-related .crosssell.products-grid .product-item-details .product-item-name .product-item-link,.widget.widget-crosssell .related.products-grid .product-item-details .product-item-name .product-item-link,.widget.widget-related .related.products-grid .product-item-details .product-item-name .product-item-link {
    font-style: normal !important;
    font-weight: 700 !important;
    font-size: 12px !important;
    line-height: 150% !important;
    text-align: center !important;
    letter-spacing: -.011em !important;
    color: #515759 !important;
    font-family: 'mothercare_2020-regular-webfont' !important;
    display: block !important;
    text-transform: unset !important;
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box {
    flex-grow: 1;
    align-items: flex-end;
    display: flex
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box {
    font-family: Arial,Helvetica,sans-serif;
    display: flex;
    flex-flow: wrap;
    max-width: 100%;
    width: 100%;
    margin: 0;
    justify-content: center
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .crossed-price,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .crossed-price,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .crossed-price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .crossed-price,.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .old-price,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .old-price,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .old-price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .old-price {
    margin: 0 5px;
    text-decoration-color: #515759;
    width: 100%;
    text-align: center
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .crossed-price .price-container .price,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .crossed-price .price-container .price,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .crossed-price .price-container .price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .crossed-price .price-container .price,.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .old-price .price-container .price,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .old-price .price-container .price,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .old-price .price-container .price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .old-price .price-container .price {
    font-style: normal !important;
    font-weight: 700 !important;
    font-size: 12px !important;
    line-height: 120% !important;
    color: #515759 !important;
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .discount-percent {
    order: 3;
    background: #f24822;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: -.011em;
    color: #fff;
    padding: 0 4px;
    margin-left: 5px;
    font-family: 'mothercare_2020-regular-webfont';
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,
.widget.widget-crosssell .crosssell.products-grid .product-item-details .price {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -.011em;
    color: #1e1e1e
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box>.price,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box>.price,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box>.price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box>.price {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 120%;
    color: #165c7d;
    font-family: Arial,Helvetica,sans-serif
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .check,.widget.widget-related .crosssell.products-grid .product-item-details .check,.widget.widget-crosssell .related.products-grid .product-item-details .check,.widget.widget-related .related.products-grid .product-item-details .check {
    margin-top: 16px
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .check span,.widget.widget-related .crosssell.products-grid .product-item-details .check span,.widget.widget-crosssell .related.products-grid .product-item-details .check span,.widget.widget-related .related.products-grid .product-item-details .check span {
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    letter-spacing: -.011em;
    color: #1d1d1d;
    font-family: Arial,Helvetica Neue,Helvetica,sans-serif
}

.widget.widget-crosssell .crosssell.products-grid .slick-arrow,.widget.widget-related .crosssell.products-grid .slick-arrow,.widget.widget-crosssell .related.products-grid .slick-arrow,.widget.widget-related .related.products-grid .slick-arrow {
    width: 40px !important;
    height: 40px !important;
    border: none !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
}

@media screen and (max-width: 767px) {
    .widget.widget-crosssell .crosssell.products-grid .slick-arrow,.widget.widget-related .crosssell.products-grid .slick-arrow,.widget.widget-crosssell .related.products-grid .slick-arrow,.widget.widget-related .related.products-grid .slick-arrow {
        display:block !important
    }

    .widget-crosssell .products-grid .slick-track{
        overflow-x: auto;
        margin-top: 20px;
    }

    .checkout-cart-index .column.main .block:not(.crosssell) .content{
        padding: 0px;
    }
}

.widget.widget-crosssell .crosssell.products-grid .slick-arrow.slick-prev,.widget.widget-related .crosssell.products-grid .slick-arrow.slick-prev,.widget.widget-crosssell .related.products-grid .slick-arrow.slick-prev,.widget.widget-related .related.products-grid .slick-arrow.slick-prev {
    background-image:url(https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gray-prev-arrow.svg)
}

.widget.widget-crosssell .crosssell.products-grid .slick-arrow.slick-next,.widget.widget-related .crosssell.products-grid .slick-arrow.slick-next,.widget.widget-crosssell .related.products-grid .slick-arrow.slick-next,.widget.widget-related .related.products-grid .slick-arrow.slick-next {
    background-image: url(https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gray-next-arrow.svg);
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-end;
    height: 52px;
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box.crossed {
    width: 100%
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box.crossed .old-price {
    text-decoration: unset
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box.crossed .old-price .price {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    color: #515759;
    text-decoration: line-through
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box.percent {
    width: auto;
    order: 3
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box.percent .discount-percent {
    padding: 2px 4px
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box.main {
    margin-top: 4px;
    width: auto
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box.main .price {
    font-size: 14px;
    font-weight: 700;
    color: #1e1e1e
}

.widget.widget-crosssell button.action.tocart.primary {
    background: #165C7D;
    padding: 2px 15px;
    font-family: 'mothercare_2020-regular-webfont';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    color: #fff;
    letter-spacing: normal;
    border-radius: 5px;
    text-transform: none;
    width: calc(100% - 20px);
}

.widget.widget-crosssell .actions-primary {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    text-align: center;
    z-index: 11;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease;
}

.widget.widget-crosssell .product-items .product-item:hover .item-img-box .actions-primary, .catalogsearch-result-index .product-items .product-item:hover .item-img-box .actions-primary {
    opacity: 1;
    visibility: visible;
}

.widget.widget-crosssell .product-items .product-item .item-img-box, .catalogsearch-result-index .product-items .product-item .item-img-box {
    position: relative;
    display: flex;
    justify-content: center;
    border: 1px solid #f4f1f1;
    align-items: center;
    height: 372px;
}


.widget.widget-crosssell .product-items{
    gap: var(--listing-grid-gap);
    row-gap: var(--listing-grid-row-gap);
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
}


.checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .slick-arrow.slick-next{
    background-image: url(https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gray-next-arrow.svg) !important;
    background-size: unset !important;
}

.checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .slick-arrow{
    transform: unset !important;
}

.checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .slick-arrow.slick-prev{
    background-image: url(https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gray-prev-arrow.svg) !important;
    background-size: unset !important;
}


.widget.widget-upsell .upsell.products-grid .slick-arrow.slick-next,.widget.widget-crosssell .crosssell.products-grid .slick-arrow.slick-next{
    background-image: url(https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gray-next-arrow.svg) !important;
}


.widget.widget-upsell .upsell.products-grid .slick-arrow.slick-prev,.widget.widget-crosssell .crosssell.products-grid .slick-arrow.slick-prev{
    background-image: url(https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gray-prev-arrow.svg) !important;
}

.widget-upsell .product-items .product-item .product-item-photo {
    width: 325px;
    height: 325px !important;
}
.widget-related .products-grid .product-item-photo .product-image-container{
    max-width: 325px;
}
.widget-upsell .product-items .product-item .item-img-box {
    border: unset !important;
}
@media(max-width:1280px){
    .widget-upsell .product-items .product-item .item-img-box {
        height:unset;
    }
}
.widget-related .product-items .product-item-details {
    flex: unset;
}


.checkout-cart-index .widget-crosssell .product-items .product-item .item-img-box{
    border: unset !important;
    width: auto !important;
    margin: auto;
}
.checkout-cart-index .widget-crosssell .crosssell.products-grid .product-item-photo {
    border: unset !important;
    height: 325px !important;
    width: 325px;

}
@media(max-width:1080px){
    .checkout-cart-index .widget-crosssell .product-items .product-item .item-img-box {
        height:unset;
    }
}

.widget.widget-upsell .upsell.products-grid .price-label,
.widget.widget-upsell .upsell.products-grid .swissup-ajaxpro-quick-view-wrapper,
.widget.widget-crosssell .crosssell.products-grid .swissup-ajaxpro-quick-view-wrapper,
.widget.widget-related .related.products-grid .swissup-ajaxpro-quick-view-wrapper{
   display:none;
}

.checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item{
    padding-left: unset;
    padding-right: unset;
}


.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .old-price .price,
.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .old-price .price,
.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .old-price .price {
    text-decoration:line-through;
}

.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .old-price ,
.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .old-price ,
.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .old-price ,
.catalog-product-view .widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .old-price {
    text-decoration:none;
}

@media(max-width:768px){
    .checkout-cart-index .widget-crosssell .crosssell.products-grid .product-item-photo,
    .widget-upsell .upsell.products-grid .product-item-photo{
        height:auto !important;
    }

    .checkout-cart-index .widget-crosssell .product-items .product-item .item-img-box{
        width:100% !important;
    }

    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item,
    .widget-upsell .upsell.products-grid .product-item{
        padding:unset;
        /* float: left !important; */
    }

    .widget.widget-upsell .product-items .product-item .item-img-box{
        height: auto !important;
    }

    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-items .slick-next.slick-arrow,
    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-items .slick-prev.slick-arrow{
        display: block !important;
    }

    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .slick-arrow{
        width:20px
    }
    .products-widget-container .slick-track .slick-initialized .slick-slide{
        float: left !important;
    }
    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item-details .product-item-name {
        margin: 0 0 10px;
    }
    .checkout-cart-index .products-widget-container .crosssell.products-crosssell .slick-list .product-item-info .check{
        padding-top: 0;
    }
    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item-details .check {
        margin-top: 8px;
    }

    .widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,
    .widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,
    .widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,
    .widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,
    .widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,
    .widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,
    .widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,
    .widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,
    .widget.widget-upsell .upsell.products-grid .product-item-details .price {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: -.011em;
        color: #1e1e1e;
    }

    .widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price, .widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price, .widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price, .widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price, .widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price, .widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price, .widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price, .widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price, .widget.widget-crosssell .crosssell.products-grid .product-item-details .price {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: -.011em;
        color: #1e1e1e;
    }


    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-label {
        display: none;
    }

    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-items .product-item-info{
        height:auto !important;
    }

}

@media screen and (max-width: 500px) {

    .widget.widget-upsell .upsell.products-grid.slick-initialized>.product-items strong.product.name.product-item-name,
    .widget.widget-crosssell .crosssell.products-grid.slick-initialized>.product-items strong.product.name.product-item-name{
        height: 36px;
    }

    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .old-price {
        margin: 0;
        text-decoration-color: #D9D9D6;
        width: 100%;
        text-align: center;
    }

    .crosssell .product.details.product-item-details {
        flex:unset;
    }
    .crosssell .slick-initialized .slick-slide {
        height:100%;
    }

    .widget-crosssell .products-grid .slick-slider .slick-list,
    .slick-slider .slick-track > .product-items {
        overflow: auto; /* Enable horizontal scrolling */
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory; /* Ensure smooth snapping */
    }

    .widget-crosssell .products-grid  .slick-track {
        display: flex;
        flex-wrap: nowrap;
        width: auto !important; /* Ensure the width adjusts dynamically */
    }

    .widget-crosssell .products-grid  .product-items {
        flex: 0 0 auto; /* Prevent items from shrinking or growing */
    }

   .widget.widget-upsell .products-grid.slick-initialized > .product-items{
        padding-bottom: 19px !important;
        scrollbar-width: thin !important;
    }

    .checkout-cart-index .widget-crosssell .product-items .product-item .item-img-box {
        border: unset !important;
        width: 118px !important;
        margin: auto;
    }

    .widget.widget-upsell .upsell.products-grid .product-item{
        width: calc(100% / 2.5 - 30px);


    }

    .widget.widget-upsell .block-title {
        margin: 0 !important;
        padding: 0 0 0px !important;
    }

    .widget.widget-upsell .slick-list.products.list.items.product-items {
        padding-top: 20px !important;
    }

    .widget.widget-upsell .upsell.products-grid .slick-arrow,.widget.widget-related .upsell.products-grid .slick-arrow,.widget.widget-upsell .related.products-grid .slick-arrow,.widget.widget-related .related.products-grid .slick-arrow {
          display:none !important;
        }

    .widget.widget-upsell .upsell.products-grid .product-item-details .product-item-name{
        margin-bottom: 10px !important;
    }
   .widget-upsell .product-items .product-item-details {
        flex: unset;
    }
    .widget.widget-upsell .upsell.products-grid .product-item-photo .product-image-container img{
        aspect-ratio: 1;
    }
    .widget.widget-upsell .upsell.products-grid .product-item-details .product-item-name .product-item-link{
           overflow: hidden;
       display: -webkit-box;
       -webkit-line-clamp: 2;
               line-clamp: 2;
       -webkit-box-orient: vertical;
    }
  .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item-details .product-item-name .product-item-link {
           overflow: hidden;
           display: -webkit-box !important;
           -webkit-line-clamp: 2;
           line-clamp: 2 !important;
           -webkit-box-orient: vertical;
           height: 36px;
    }

    .widget.widget-crosssell .crosssell.products-grid .product-item-photo .product-image-container img{
        aspect-ratio:1;
    }

}


@media screen and (max-width: 390px) {

     .widget.widget-upsell .products-grid.slick-initialized > .product-items{
        padding-bottom: 19px !important;
        scrollbar-width: thin !important;
   }

     .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .old-price {
                margin: 0 5px;
    }


    .checkout-cart-index .widget-crosssell .product-items .product-item .item-img-box {
        border: unset !important;
        width: 118px !important;
        margin: 0;
    }

    .widget.widget-upsell .upsell.products-grid .slick-arrow,.widget.widget-related .upsell.products-grid .slick-arrow,.widget.widget-upsell .related.products-grid .slick-arrow,.widget.widget-related .related.products-grid .slick-arrow {
      display:none !important;
    }

    .widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,
    .widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,
    .widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,
    .widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,
    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .discount-percent
    {
        order: 3;
        background: #f24822;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 24px;
        letter-spacing: -.011em;
        color: #fff;
        padding: 0px 2px;
        font-family: 'Arial' !important;
        margin-left: 0px;
    }
}

    strong.product.name.product-item-name {
        overflow: hidden;
    }

    strong.product.name.product-item-name {
        /* height: 87px; */
    }


    li.item.product.product-item.slick-slide.slick-active {
        float: left !important;
    }

    .products-widget-container .slick-track .slick-initialized .slick-slide{
            float: left !important;
    }
    .catalog-product-view .bundle-options-container .bundle-wrapper .bundle-info .amasty-label-container {
        position: absolute;
        display: none !important;
    }
/*    .checkout-cart-index .products-crosssell .product-item .product-item-info  .product-image-container  .amasty-label-container {
        width: auto !important;
    }*/
</style>

<div class="block widget widget-recent" data-bind="
    scope: 'catalog.product.viewed',
    css: options.additionalClasses,
    visible: visible
"><!-- ko template: { if: visible, name: 'recent-products' } --><!-- /ko --></div>


<script id="recent-products" type="text/x-magento-template">
    <div class="block-title">
        <strong role="heading" aria-level="2" data-bind="text: options.title"></strong>
    </div>
    <div class="block-content">
        <div class="recent" data-content-type="slider"
             data-mage-init='{"Magento_PageBuilder/js/content-type/slider/appearance/default/widget":{"arrows": true, "dots": false}}'
             data-bind="css: 'products-' + options.displayMode">
            <ol class="slick-list product-items" data-bind="foreach: items">
                <li class="product-item">
                    <div class="product-item-info">
                                                    <a class="product-item-photo" data-bind="
                                attr: { href: url, title: name },
                                template: { name: 'productImage', data: $parent.getImageData($data) }
                            "></a>
                        
                        <div class="product-item-details">
                                                            <strong class="product-item-name">
                                    <a data-bind="attr: { href: url }" class="product-item-link">
                                        <span data-bind="html: name"></span>
                                    </a>
                                </strong>
                            
                                                            <div class="carousel-price-box">
                                    <!-- ko if:$parent.getRegularPriceHtml($data) -->
                                    <div class="price-box crossed" data-bind="html: $parent.getRegularPriceHtml($data)"></div>
                                    <div class="price-box percent" data-bind="html: $parent.getDiscountPercentage($data)"></div>
                                    <!-- /ko -->
                                    <div class="price-box main" data-bind="html: $parent.getPriceHtml($data)"></div>
                                </div>
                            
                                                            <div class="product-item-actions">
                                    
                                                                    </div>
                            
                            <div class="product-item-description">
                                <div data-bind="html: $parent.getAdditionalContent($data, $element)"></div>

                                                            </div>
                        </div>
                    </div>
                </li>
            </ol>
        </div>
    </div>
</script>

<script type="text/x-magento-init" data-breeze-processed="true">
     {
         "*": {
             "amInitLabelUi": {"scope":"website","productsLifetime":1000}         }
     }
</script>
</div>


<!-- <script type="text/javascript">
    require(['jquery', 'jquery/ui', 'slick'], function($) {
        $(document).ready(function() {
            if ($('body').hasClass('checkout-cart-index')) {
                $(".widget.widget-crosssell .product-items").slick({
                    dots: false,
                    arrows: true, // Show arrows for larger screens
                    infinite: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 2.5,
                                slidesToScroll: 1,
                                arrows: false
                            }
                        },
                        {
                            breakpoint: 430,
                            settings: {
                                slidesToShow: 2.5,
                                slidesToScroll: 1,
                                arrows: false
                            }
                        },
                        {
                            breakpoint: 390,
                            settings: {
                                slidesToShow: 2.5,
                                slidesToScroll: 1,
                                arrows: false // Hide arrows for mobile sizes
                            }
                        },
                        {
                            breakpoint: 375,
                            settings: {
                                slidesToShow: 2.5,
                                slidesToScroll: 1,
                                arrows: false // Hide arrows for mobile sizes
                            }
                        }
                    ]
                });
            }
        });
    });
</script> -->

 


<style type="text/css">


.widget.widget-upsell,.widget.widget-related {
    padding-bottom: 40px;
    padding-top: 40px;
    margin-top: 0 !important
}

.widget.widget-upsell .block-title,.widget.widget-related .block-title {
    margin: 0 !important;
    padding: 0 0 40px !important
}

.widget.widget-upsell .block-title:before,.widget.widget-related .block-title:before {
    display: none !important
}

.widget.widget-upsell .block-title strong,.widget.widget-related .block-title strong {
    display: block;
    font-family: 'mothercare_2020-regular-webfont';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color: #515759;
    margin: 0 !important;
    text-align: center;
    text-transform: lowercase
}

@media screen and (max-width: 767px) {
    .widget.widget-upsell .block-title strong,.widget.widget-related .block-title strong {
        font-size:18px
    }
}

.widget.widget-upsell .upsell.products-grid,.widget.widget-related .upsell.products-grid,.widget.widget-upsell .related.products-grid,.widget.widget-related .related.products-grid {
    overflow: inherit;
    padding-left: 50px;
    padding-right: 50px
}

@media screen and (max-width: 767px) {
    .widget.widget-upsell .upsell.products-grid,.widget.widget-related .upsell.products-grid,.widget.widget-upsell .related.products-grid,.widget.widget-related .related.products-grid {
        padding:0
    }
}

.widget.widget-upsell .upsell.products-grid.slick-initialized>.product-items,.widget.widget-related .upsell.products-grid.slick-initialized>.product-items,.widget.widget-upsell .related.products-grid.slick-initialized>.product-items,.widget.widget-related .related.products-grid.slick-initialized>.product-items {
    gap: 0;
    padding: 0;
    margin: 0 -25px;
    width: auto
}

@media screen and (max-width: 767px) {
    .widget.widget-upsell .upsell.products-grid.slick-initialized>.product-items,.widget.widget-related .upsell.products-grid.slick-initialized>.product-items,.widget.widget-upsell .related.products-grid.slick-initialized>.product-items,.widget.widget-related .related.products-grid.slick-initialized>.product-items {
        margin:0 -15px
    }
}

.widget.widget-upsell .upsell.products-grid .product-item,.widget.widget-related .upsell.products-grid .product-item,.widget.widget-upsell .related.products-grid .product-item,.widget.widget-related .related.products-grid .product-item {
    width: calc(100%/4 - 50px);
    max-width: 100%;
    margin: 0 25px
}

@media screen and (max-width: 767px) {
    .widget.widget-upsell .upsell.products-grid .product-item,.widget.widget-related .upsell.products-grid .product-item,.widget.widget-upsell .related.products-grid .product-item,.widget.widget-related .related.products-grid .product-item {
        margin:0 15px;
        width: calc(100%/2 - 30px)
    }
}

.widget.widget-upsell .upsell.products-grid .product-item-photo,.widget.widget-related .upsell.products-grid .product-item-photo,.widget.widget-upsell .related.products-grid .product-item-photo,.widget.widget-related .related.products-grid .product-item-photo {
    display: flex;
    justify-content: center;
    height: 100%;
    border-radius: 5px
    width:100%;
}

.widget.widget-upsell .upsell.products-grid .product-item-photo .product-image-container,.widget.widget-related .upsell.products-grid .product-item-photo .product-image-container,.widget.widget-upsell .related.products-grid .product-item-photo .product-image-container,.widget.widget-related .related.products-grid .product-item-photo .product-image-container {
    width: 100% !important
}

.widget.widget-upsell .upsell.products-grid .product-item-photo .product-image-container img,.widget.widget-related .upsell.products-grid .product-item-photo .product-image-container img,.widget.widget-upsell .related.products-grid .product-item-photo .product-image-container img,.widget.widget-related .related.products-grid .product-item-photo .product-image-container img {
    height: 100%;
    object-fit: contain
}

.widget.widget-upsell .upsell.products-grid .product-item-info,.widget.widget-related .upsell.products-grid .product-item-info,.widget.widget-upsell .related.products-grid .product-item-info,.widget.widget-related .related.products-grid .product-item-info {
    gap: 15px
}

.widget.widget-upsell .product-items .product-item .item-img-box{
    position: relative;
    display: flex;
    justify-content: center;
    border: 1px solid #f4f1f1;
    align-items: center;
    height: 327px;
}

.widget.widget-upsell .upsell.products-grid .product-item-details,.widget.widget-related .upsell.products-grid .product-item-details,.widget.widget-upsell .related.products-grid .product-item-details,.widget.widget-related .related.products-grid .product-item-details {
    flex-direction: column;
    text-align: center
}

.widget.widget-upsell .upsell.products-grid .product-item-details .product-item-name,.widget.widget-related .upsell.products-grid .product-item-details .product-item-name,.widget.widget-upsell .related.products-grid .product-item-details .product-item-name,.widget.widget-related .related.products-grid .product-item-details .product-item-name {
    max-width: 100%;
/*    height: 34px;*/
    margin: 0 0 20px;
    margin-bottom: 0px !important;
}

.widget.widget-upsell .upsell.products-grid .product-item-details .product-item-name .product-item-link,.widget.widget-related .upsell.products-grid .product-item-details .product-item-name .product-item-link,.widget.widget-upsell .related.products-grid .product-item-details .product-item-name .product-item-link,.widget.widget-related .related.products-grid .product-item-details .product-item-name .product-item-link {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
    letter-spacing: -.011em;
    color: #515759;
    font-family: 'mothercare_2020-regular-webfont';
    display: block
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box {
    flex-grow: 1;
    align-items: flex-end;
    display: flex
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box {
    font-family: Arial,Helvetica,sans-serif;
    display: block;
    text-align: center;
    flex-flow: wrap;
    max-width: 100%;
    width: 100%;
    margin: 0;
    justify-content: center
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .crossed-price,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .crossed-price,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .crossed-price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .crossed-price,.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .old-price,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .old-price,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .old-price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .old-price {
    margin: 0 5px;
    text-decoration-color: #515759;
    width: 100%;
    text-align: center
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .crossed-price .price-container .price,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .crossed-price .price-container .price,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .crossed-price .price-container .price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .crossed-price .price-container .price,.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .old-price .price-container .price,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .old-price .price-container .price,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .old-price .price-container .price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .old-price .price-container .price {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    color: #515759
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .discount-percent {
    order: 3;
    background: #f24822;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: -.011em;
    color: #fff;
    padding: 0 4px;
    font-family: 'Arial' !important;
    margin-left: 5px;
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,
.widget.widget-upsell .upsell.products-grid .product-item-details .price {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -.011em;
    color: #1e1e1e;
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box>.price,.widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box>.price,.widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box>.price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box>.price {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 120%;
    color: #165c7d;
    font-family: Arial,Helvetica,sans-serif
}

.widget.widget-upsell .upsell.products-grid .product-item-details .check,.widget.widget-related .upsell.products-grid .product-item-details .check,.widget.widget-upsell .related.products-grid .product-item-details .check,.widget.widget-related .related.products-grid .product-item-details .check {
    margin-top: 16px
}

.widget.widget-upsell .upsell.products-grid .product-item-details .check span,
.widget.widget-related .upsell.products-grid .product-item-details .check span,
.widget.widget-upsell .related.products-grid .product-item-details .check span,
.widget.widget-related .related.products-grid .product-item-details .check span
{
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    letter-spacing: -.011em;
    color: #1d1d1d;
}

.widget.widget-upsell .upsell.products-grid .slick-arrow,.widget.widget-related .upsell.products-grid .slick-arrow,.widget.widget-upsell .related.products-grid .slick-arrow,.widget.widget-related .related.products-grid .slick-arrow {
    width: 40px;
    height: 40px;
    border: none;
    background-position: center;
    background-repeat: no-repeat
}

@media screen and (max-width: 767px) {
    .widget.widget-upsell .upsell.products-grid .slick-arrow,.widget.widget-related .upsell.products-grid .slick-arrow,.widget.widget-upsell .related.products-grid .slick-arrow,.widget.widget-related .related.products-grid .slick-arrow {
        display:none !important
    }
}

.widget.widget-upsell .upsell.products-grid .slick-arrow.slick-prev,.widget.widget-related .upsell.products-grid .slick-arrow.slick-prev,.widget.widget-upsell .related.products-grid .slick-arrow.slick-prev,.widget.widget-related .related.products-grid .slick-arrow.slick-prev {
    background-image: url(https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gray-prev-arrow.svg);
}

.widget.widget-upsell .upsell.products-grid .slick-arrow.slick-next,.widget.widget-related .upsell.products-grid .slick-arrow.slick-next,.widget.widget-upsell .related.products-grid .slick-arrow.slick-next,.widget.widget-related .related.products-grid .slick-arrow.slick-next {
    background-image: url(https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gray-next-arrow.svg);
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-end
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box.crossed {
    width: 100%
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box.crossed .old-price {
    text-decoration: unset
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box.crossed .old-price .price {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    color: #515759;
    text-decoration: line-through
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box.percent {
    width: auto;
    order: 3
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box.percent .discount-percent {
    padding: 2px 4px
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box.main {
    margin-top: 4px;
    width: auto
}

.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box.main .price {
    font-size: 14px;
    font-weight: 700;
    color: #1e1e1e
}



.widget.widget-crosssell,.widget.widget-related {
    padding-bottom: 40px;
    padding-top: 40px;
    margin-top: 0 !important
}

.widget.widget-crosssell .block-title,.widget.widget-related .block-title {
    margin: 0 !important;
    padding: 0 0 40px !important
}

.widget.widget-crosssell .block-title:before,.widget.widget-related .block-title:before {
    display: none !important
}

.widget.widget-crosssell .block-title strong,.widget.widget-related .block-title strong {
    display: block;
    font-family: 'mothercare_2020-regular-webfont';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color: #515759;
    margin: 0 !important;
    text-align: center;
    text-transform: lowercase
}

@media screen and (max-width: 767px) {
    .widget.widget-crosssell .block-title strong,.widget.widget-related .block-title strong {
        font-size:18px
    }
}

.widget.widget-crosssell .crosssell.products-grid,.widget.widget-related .crosssell.products-grid,.widget.widget-crosssell .related.products-grid,.widget.widget-related .related.products-grid {
    overflow: inherit;
    padding-left: 50px;
    padding-right: 50px
}

@media screen and (max-width: 767px) {
    .widget.widget-crosssell .crosssell.products-grid,.widget.widget-related .crosssell.products-grid,.widget.widget-crosssell .related.products-grid,.widget.widget-related .related.products-grid {
        padding:0
    }
}

.widget.widget-crosssell .crosssell.products-grid.slick-initialized>.product-items,.widget.widget-related .crosssell.products-grid.slick-initialized>.product-items,.widget.widget-crosssell .related.products-grid.slick-initialized>.product-items,.widget.widget-related .related.products-grid.slick-initialized>.product-items {
    gap: 0;
    padding: 0;
    margin: 0 -25px;
    width: auto
}

@media screen and (max-width: 767px) {
    .widget.widget-crosssell .crosssell.products-grid.slick-initialized>.product-items,.widget.widget-related .crosssell.products-grid.slick-initialized>.product-items,.widget.widget-crosssell .related.products-grid.slick-initialized>.product-items,.widget.widget-related .related.products-grid.slick-initialized>.product-items {
        margin:0 -15px
    }
}

.widget.widget-crosssell .crosssell.products-grid .product-item,.widget.widget-related .crosssell.products-grid .product-item,.widget.widget-crosssell .related.products-grid .product-item,.widget.widget-related .related.products-grid .product-item {
    width: calc(100%/4 - 50px);
    max-width: 100%;
    margin: 0 25px
}

@media screen and (max-width: 767px) {
    .widget.widget-crosssell .crosssell.products-grid .product-item,.widget.widget-related .crosssell.products-grid .product-item,.widget.widget-crosssell .related.products-grid .product-item,.widget.widget-related .related.products-grid .product-item {
        margin:0 8px;
        width: calc(100%/2 - 30px)
    }
}

.widget.widget-crosssell .crosssell.products-grid .product-item-photo,.widget.widget-related .crosssell.products-grid .product-item-photo,.widget.widget-crosssell .related.products-grid .product-item-photo,.widget.widget-related .related.products-grid .product-item-photo {
    display: flex;
    justify-content: center;
    height: auto;
    border-radius: 5px
    width:100%;
}

.widget.widget-crosssell .crosssell.products-grid .product-item-photo .product-image-container,.widget.widget-related .crosssell.products-grid .product-item-photo .product-image-container,.widget.widget-crosssell .related.products-grid .product-item-photo .product-image-container,.widget.widget-related .related.products-grid .product-item-photo .product-image-container {
    width: 100% !important
}

.widget.widget-crosssell .crosssell.products-grid .product-item-photo .product-image-container img,.widget.widget-related .crosssell.products-grid .product-item-photo .product-image-container img,.widget.widget-crosssell .related.products-grid .product-item-photo .product-image-container img,.widget.widget-related .related.products-grid .product-item-photo .product-image-container img {
    height: 100%;
    object-fit: cover;
}

.widget.widget-crosssell .crosssell.products-grid .product-item-info,.widget.widget-related .crosssell.products-grid .product-item-info,.widget.widget-crosssell .related.products-grid .product-item-info,.widget.widget-related .related.products-grid .product-item-info {
    gap: 15px
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details,.widget.widget-related .crosssell.products-grid .product-item-details,.widget.widget-crosssell .related.products-grid .product-item-details,.widget.widget-related .related.products-grid .product-item-details {
    flex-direction: column;
    text-align: center
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .product-item-name,.widget.widget-related .crosssell.products-grid .product-item-details .product-item-name,.widget.widget-crosssell .related.products-grid .product-item-details .product-item-name,.widget.widget-related .related.products-grid .product-item-details .product-item-name {
    max-width: 100%;
    height: 34px;
    margin: 0 0 20px
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .product-item-name .product-item-link,.widget.widget-related .crosssell.products-grid .product-item-details .product-item-name .product-item-link,.widget.widget-crosssell .related.products-grid .product-item-details .product-item-name .product-item-link,.widget.widget-related .related.products-grid .product-item-details .product-item-name .product-item-link {
    font-style: normal !important;
    font-weight: 700 !important;
    font-size: 12px !important;
    line-height: 150% !important;
    text-align: center !important;
    letter-spacing: -.011em !important;
    color: #515759 !important;
    font-family: 'mothercare_2020-regular-webfont' !important;
    display: block !important;
    text-transform: unset !important;
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box {
    flex-grow: 1;
    align-items: flex-end;
    display: flex
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box {
    font-family: Arial,Helvetica,sans-serif;
    display: flex;
    flex-flow: wrap;
    max-width: 100%;
    width: 100%;
    margin: 0;
    justify-content: center
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .crossed-price,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .crossed-price,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .crossed-price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .crossed-price,.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .old-price,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .old-price,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .old-price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .old-price {
    margin: 0 5px;
    text-decoration-color: #515759;
    width: 100%;
    text-align: center
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .crossed-price .price-container .price,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .crossed-price .price-container .price,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .crossed-price .price-container .price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .crossed-price .price-container .price,.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .old-price .price-container .price,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .old-price .price-container .price,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .old-price .price-container .price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .old-price .price-container .price {
    font-style: normal !important;
    font-weight: 700 !important;
    font-size: 12px !important;
    line-height: 120% !important;
    color: #515759 !important;
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .discount-percent {
    order: 3;
    background: #f24822;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    letter-spacing: -.011em;
    color: #fff;
    padding: 0 4px;
    margin-left: 5px;
    font-family: 'mothercare_2020-regular-webfont';
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,
.widget.widget-crosssell .crosssell.products-grid .product-item-details .price {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -.011em;
    color: #1e1e1e
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box>.price,.widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box>.price,.widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box>.price,.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box>.price {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 120%;
    color: #165c7d;
    font-family: Arial,Helvetica,sans-serif
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .check,.widget.widget-related .crosssell.products-grid .product-item-details .check,.widget.widget-crosssell .related.products-grid .product-item-details .check,.widget.widget-related .related.products-grid .product-item-details .check {
    margin-top: 16px
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .check span,.widget.widget-related .crosssell.products-grid .product-item-details .check span,.widget.widget-crosssell .related.products-grid .product-item-details .check span,.widget.widget-related .related.products-grid .product-item-details .check span {
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    letter-spacing: -.011em;
    color: #1d1d1d;
    font-family: Arial,Helvetica Neue,Helvetica,sans-serif
}

.widget.widget-crosssell .crosssell.products-grid .slick-arrow,.widget.widget-related .crosssell.products-grid .slick-arrow,.widget.widget-crosssell .related.products-grid .slick-arrow,.widget.widget-related .related.products-grid .slick-arrow {
    width: 40px !important;
    height: 40px !important;
    border: none !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
}

@media screen and (max-width: 767px) {
    .widget.widget-crosssell .crosssell.products-grid .slick-arrow,.widget.widget-related .crosssell.products-grid .slick-arrow,.widget.widget-crosssell .related.products-grid .slick-arrow,.widget.widget-related .related.products-grid .slick-arrow {
        display:block !important
    }

    .widget-crosssell .products-grid .slick-track{
        overflow-x: auto;
        margin-top: 20px;
    }

    .checkout-cart-index .column.main .block:not(.crosssell) .content{
        padding: 0px;
    }
}

.widget.widget-crosssell .crosssell.products-grid .slick-arrow.slick-prev,.widget.widget-related .crosssell.products-grid .slick-arrow.slick-prev,.widget.widget-crosssell .related.products-grid .slick-arrow.slick-prev,.widget.widget-related .related.products-grid .slick-arrow.slick-prev {
    background-image:url(https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gray-prev-arrow.svg)
}

.widget.widget-crosssell .crosssell.products-grid .slick-arrow.slick-next,.widget.widget-related .crosssell.products-grid .slick-arrow.slick-next,.widget.widget-crosssell .related.products-grid .slick-arrow.slick-next,.widget.widget-related .related.products-grid .slick-arrow.slick-next {
    background-image: url(https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gray-next-arrow.svg);
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: flex-end;
    height: 52px;
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box.crossed {
    width: 100%
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box.crossed .old-price {
    text-decoration: unset
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box.crossed .old-price .price {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 120%;
    color: #515759;
    text-decoration: line-through
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box.percent {
    width: auto;
    order: 3
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box.percent .discount-percent {
    padding: 2px 4px
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box.main {
    margin-top: 4px;
    width: auto
}

.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box.main .price {
    font-size: 14px;
    font-weight: 700;
    color: #1e1e1e
}

.widget.widget-crosssell button.action.tocart.primary {
    background: #165C7D;
    padding: 2px 15px;
    font-family: 'mothercare_2020-regular-webfont';
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    color: #fff;
    letter-spacing: normal;
    border-radius: 5px;
    text-transform: none;
    width: calc(100% - 20px);
}

.widget.widget-crosssell .actions-primary {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 10px;
    text-align: center;
    z-index: 11;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease;
}

.widget.widget-crosssell .product-items .product-item:hover .item-img-box .actions-primary, .catalogsearch-result-index .product-items .product-item:hover .item-img-box .actions-primary {
    opacity: 1;
    visibility: visible;
}

.widget.widget-crosssell .product-items .product-item .item-img-box, .catalogsearch-result-index .product-items .product-item .item-img-box {
    position: relative;
    display: flex;
    justify-content: center;
    border: 1px solid #f4f1f1;
    align-items: center;
    height: 372px;
}


.widget.widget-crosssell .product-items{
    gap: var(--listing-grid-gap);
    row-gap: var(--listing-grid-row-gap);
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
}


.checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .slick-arrow.slick-next{
    background-image: url(https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gray-next-arrow.svg) !important;
    background-size: unset !important;
}

.checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .slick-arrow{
    transform: unset !important;
}

.checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .slick-arrow.slick-prev{
    background-image: url(https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gray-prev-arrow.svg) !important;
    background-size: unset !important;
}


.widget.widget-upsell .upsell.products-grid .slick-arrow.slick-next,.widget.widget-crosssell .crosssell.products-grid .slick-arrow.slick-next{
    background-image: url(https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gray-next-arrow.svg) !important;
}


.widget.widget-upsell .upsell.products-grid .slick-arrow.slick-prev,.widget.widget-crosssell .crosssell.products-grid .slick-arrow.slick-prev{
    background-image: url(https://www.mothercare.co.id/static/version1741963345/frontend/Codilar/mothercare/id_ID/images/gray-prev-arrow.svg) !important;
}

.widget-upsell .product-items .product-item .product-item-photo {
    width: 325px;
    height: 325px !important;
}
.widget-related .products-grid .product-item-photo .product-image-container{
    max-width: 325px;
}
.widget-upsell .product-items .product-item .item-img-box {
    border: unset !important;
}
@media(max-width:1280px){
    .widget-upsell .product-items .product-item .item-img-box {
        height:unset;
    }
}
.widget-related .product-items .product-item-details {
    flex: unset;
}


.checkout-cart-index .widget-crosssell .product-items .product-item .item-img-box{
    border: unset !important;
    width: auto !important;
    margin: auto;
}
.checkout-cart-index .widget-crosssell .crosssell.products-grid .product-item-photo {
    border: unset !important;
    height: 325px !important;
    width: 325px;

}
@media(max-width:1080px){
    .checkout-cart-index .widget-crosssell .product-items .product-item .item-img-box {
        height:unset;
    }
}

.widget.widget-upsell .upsell.products-grid .price-label,
.widget.widget-upsell .upsell.products-grid .swissup-ajaxpro-quick-view-wrapper,
.widget.widget-crosssell .crosssell.products-grid .swissup-ajaxpro-quick-view-wrapper,
.widget.widget-related .related.products-grid .swissup-ajaxpro-quick-view-wrapper{
   display:none;
}

.checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item{
    padding-left: unset;
    padding-right: unset;
}


.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .old-price .price,
.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .old-price .price,
.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .old-price .price {
    text-decoration:line-through;
}

.widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .old-price ,
.widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .old-price ,
.widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .old-price ,
.catalog-product-view .widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .old-price {
    text-decoration:none;
}

@media(max-width:768px){
    .checkout-cart-index .widget-crosssell .crosssell.products-grid .product-item-photo,
    .widget-upsell .upsell.products-grid .product-item-photo{
        height:auto !important;
    }

    .checkout-cart-index .widget-crosssell .product-items .product-item .item-img-box{
        width:100% !important;
    }

    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item,
    .widget-upsell .upsell.products-grid .product-item{
        padding:unset;
        /* float: left !important; */
    }

    .widget.widget-upsell .product-items .product-item .item-img-box{
        height: auto !important;
    }

    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-items .slick-next.slick-arrow,
    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-items .slick-prev.slick-arrow{
        display: block !important;
    }

    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .slick-arrow{
        width:20px
    }
    .products-widget-container .slick-track .slick-initialized .slick-slide{
        float: left !important;
    }
    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item-details .product-item-name {
        margin: 0 0 10px;
    }
    .checkout-cart-index .products-widget-container .crosssell.products-crosssell .slick-list .product-item-info .check{
        padding-top: 0;
    }
    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item-details .check {
        margin-top: 8px;
    }

    .widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,
    .widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,
    .widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,
    .widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price,
    .widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,
    .widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,
    .widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,
    .widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price,
    .widget.widget-upsell .upsell.products-grid .product-item-details .price {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: -.011em;
        color: #1e1e1e;
    }

    .widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price, .widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price, .widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price, .widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .special-price .price-container .price, .widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price, .widget.widget-related .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price, .widget.widget-crosssell .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price, .widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .price-with-discount .normal-price .price-container .price, .widget.widget-crosssell .crosssell.products-grid .product-item-details .price {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 150%;
        letter-spacing: -.011em;
        color: #1e1e1e;
    }


    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .price-label {
        display: none;
    }

    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-items .product-item-info{
        height:auto !important;
    }

}

@media screen and (max-width: 500px) {

    .widget.widget-upsell .upsell.products-grid.slick-initialized>.product-items strong.product.name.product-item-name,
    .widget.widget-crosssell .crosssell.products-grid.slick-initialized>.product-items strong.product.name.product-item-name{
        height: 36px;
    }

    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .old-price {
        margin: 0;
        text-decoration-color: #D9D9D6;
        width: 100%;
        text-align: center;
    }

    .crosssell .product.details.product-item-details {
        flex:unset;
    }
    .crosssell .slick-initialized .slick-slide {
        height:100%;
    }

    .widget-crosssell .products-grid .slick-slider .slick-list,
    .slick-slider .slick-track > .product-items {
        overflow: auto; /* Enable horizontal scrolling */
        scroll-behavior: smooth;
        scroll-snap-type: x mandatory; /* Ensure smooth snapping */
    }

    .widget-crosssell .products-grid  .slick-track {
        display: flex;
        flex-wrap: nowrap;
        width: auto !important; /* Ensure the width adjusts dynamically */
    }

    .widget-crosssell .products-grid  .product-items {
        flex: 0 0 auto; /* Prevent items from shrinking or growing */
    }

   .widget.widget-upsell .products-grid.slick-initialized > .product-items{
        padding-bottom: 19px !important;
        scrollbar-width: thin !important;
    }

    .checkout-cart-index .widget-crosssell .product-items .product-item .item-img-box {
        border: unset !important;
        width: 118px !important;
        margin: auto;
    }

    .widget.widget-upsell .upsell.products-grid .product-item{
        width: calc(100% / 2.5 - 30px);


    }

    .widget.widget-upsell .block-title {
        margin: 0 !important;
        padding: 0 0 0px !important;
    }

    .widget.widget-upsell .slick-list.products.list.items.product-items {
        padding-top: 20px !important;
    }

    .widget.widget-upsell .upsell.products-grid .slick-arrow,.widget.widget-related .upsell.products-grid .slick-arrow,.widget.widget-upsell .related.products-grid .slick-arrow,.widget.widget-related .related.products-grid .slick-arrow {
          display:none !important;
        }

    .widget.widget-upsell .upsell.products-grid .product-item-details .product-item-name{
        margin-bottom: 10px !important;
    }
   .widget-upsell .product-items .product-item-details {
        flex: unset;
    }
    .widget.widget-upsell .upsell.products-grid .product-item-photo .product-image-container img{
        aspect-ratio: 1;
    }
    .widget.widget-upsell .upsell.products-grid .product-item-details .product-item-name .product-item-link{
           overflow: hidden;
       display: -webkit-box;
       -webkit-line-clamp: 2;
               line-clamp: 2;
       -webkit-box-orient: vertical;
    }
  .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item-details .product-item-name .product-item-link {
           overflow: hidden;
           display: -webkit-box !important;
           -webkit-line-clamp: 2;
           line-clamp: 2 !important;
           -webkit-box-orient: vertical;
           height: 36px;
    }

    .widget.widget-crosssell .crosssell.products-grid .product-item-photo .product-image-container img{
        aspect-ratio:1;
    }

}


@media screen and (max-width: 390px) {

     .widget.widget-upsell .products-grid.slick-initialized > .product-items{
        padding-bottom: 19px !important;
        scrollbar-width: thin !important;
   }

     .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .old-price {
                margin: 0 5px;
    }


    .checkout-cart-index .widget-crosssell .product-items .product-item .item-img-box {
        border: unset !important;
        width: 118px !important;
        margin: 0;
    }

    .widget.widget-upsell .upsell.products-grid .slick-arrow,.widget.widget-related .upsell.products-grid .slick-arrow,.widget.widget-upsell .related.products-grid .slick-arrow,.widget.widget-related .related.products-grid .slick-arrow {
      display:none !important;
    }

    .widget.widget-upsell .upsell.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,
    .widget.widget-related .upsell.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,
    .widget.widget-upsell .related.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,
    .widget.widget-related .related.products-grid .product-item-details .carousel-price-box .price-box .discount-percent,
    .checkout-cart-index .widget.widget-crosssell .crosssell.products-grid .product-item-details .carousel-price-box .price-box .discount-percent
    {
        order: 3;
        background: #f24822;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 24px;
        letter-spacing: -.011em;
        color: #fff;
        padding: 0px 2px;
        font-family: 'Arial' !important;
        margin-left: 0px;
    }
}

    strong.product.name.product-item-name {
        overflow: hidden;
    }

    strong.product.name.product-item-name {
        /* height: 87px; */
    }


    li.item.product.product-item.slick-slide.slick-active {
        float: left !important;
    }

    .products-widget-container .slick-track .slick-initialized .slick-slide{
            float: left !important;
    }
    .catalog-product-view .bundle-options-container .bundle-wrapper .bundle-info .amasty-label-container {
        position: absolute;
        display: none !important;
    }
/*    .checkout-cart-index .products-crosssell .product-item .product-item-info  .product-image-container  .amasty-label-container {
        width: auto !important;
    }*/
</style>
</div></div></main><div class="ga">
<script data-breeze>

require(['jquery','Magento_Customer/js/customer-data'], 
    function ($,customerData) {

    const currentWwebsiteId = 3;
    var products;
    var productName;
    var countFirstLoad = 4;
    var websiteId = window.checkout.websiteId;
    
    $(document).ready(function() {

        try {
            window.dataLayer = window.dataLayer || [];
            var productIds = [];
            var productId = $('.price-box.price-final_price').attr('data-product-id');
            productIds.push(productId);

            $.ajax({
                type: 'POST',
                url: window.location.origin + '/datalayer/ga/cartlayer',
                data: {'ids': productIds , 'requestFrom' : 'recent_view' },
                success: function (data) {

                    let _productName = data[0].product_name ? data[0].product_name : "Not Defined";
                    let _sku = data[0].sku ? data[0].sku : "Not Defined";
                    let _productPrice = data[0].price ? data[0].price : "Not Defined";
                    let _brand = data[0].origin_brand ? data[0].origin_brand : "Not Defined";
                    let _category = data[0].category ? data[0].category : "Not Defined";
                    let _category1 = data[0].category1 ? data[0].category1 : "Not Defined";
                    let _category2 = data[0].category2 ? data[0].category2 : "Not Defined";
                    let _category3 = data[0].category3 ? data[0].category3 : "Not Defined";

                    var products = [{
                        'item_name': _productName,
                        'item_id': _sku,
                        'price': _productPrice,
                        'item_brand': _brand,
                        'item_category': _category,
                        'item_category2': _category1,
                        'item_category3': _category2,
                        'item_category4': _category3,
                        'item_variant': "Not Defined",
                        'quantity': 1
                    }];

                    dataLayer.push({
                        'event': 'view_item',
                        'eventCategory':'ecommerce',
                        'eventAction':'product_detail',
                        'eventLabel':_productName,
                        'ecommerce': {
                            'items': products
                        }

                    });
                    
                }
            });
        } catch (err) {
            console.log('error product view : ' + err.message);
        }
    });

    $('#product-addtocart-button').click(function(e)
    {
        e.stopPropagation();
        try {
            var cart = customerData.get('cart');
            var productName = $('.page-title-wrapper span').text(); 
            var productSku  = $('#product_addtocart_form').attr('data-product-sku');
            var productQty  = $('#qty').val();
            var productCategory = "Food,Nordic Natural,Free Shipping,App promotion,May ";

            generateOptionProduct(cart, productName, productSku, productCategory);
            
        } catch (err) {
            console.log('error ga add to cart : ' + err.message);
        } 
    });

    $('.input-text.qty').on('change', function() {

        try {
            var cart = customerData.get('cart');
            var count = cart().summary_count;

            productName = $('.page-title-wrapper span').text(); 
            var productSku  = $('.product-info-stock-sku .product.attribute.sku .value').text();
            var productQty  = $(this).val();
            var productPrice = $('.product-info-main .price-final_price').find('.price-wrapper ').attr('data-price-amount');
            var productBrand = "Nordic Natural";
            var productCategory = "Food,Nordic Natural,Free Shipping,App promotion,May ";

            var itemCart = [{
                'name': productName,
                'id': productSku,
                'price': productPrice,
                'brand': productBrand,
                'category': productCategory,
                'quantity': productQty
            }];

            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': 'addToCart',
                'eventCategory':'Ecommerce',
                'eventAction':'Add To Cart',
                'eventLabel':productName,
                'ecommerce': {
                    'items': itemCart
                }
            });

        } catch (err) {
            console.log('error ga change quantity : ' + err.message);
        }
        
    });

    
    var isDesktopRecentTrigger = false;
    var productList = $.storage.ns('product_data_storage').get();

    window.addEventListener('scroll', function(e) {
        e.stopPropagation();
        e.preventDefault();

        try {
            if( $('.recent.products-grid').length > 0 )
            { 
                if (elementInView($('.recent.products-grid')) && isDesktopRecentTrigger == false) 
                {
                    var itemsRecent = [];
                    var products = [];
                    var productIds = [];
                    var productVariant = 'Not Defined';

                    let index = 1;
                    Object.keys(productList).forEach(function(key){
                        if (index > countFirstLoad) return;
                        productIds.push(key);
                        index++;
                    });

                    $.ajax({
                        type: 'POST',
                        url: window.location.origin + '/datalayer/ga/cartlayer',
                        data: {'ids': productIds , 'requestFrom' : 'recent_view' },
                        success: function (data) {

                            let idxData = 1;
                            $.each(data, function(index, itemProd){

                                let _productName = itemProd.product_name ? itemProd.product_name : "Not Defined";
                                let _sku = itemProd.sku ? itemProd.sku : "Not Defined";
                                let _productPrice = itemProd.price ? itemProd.price : "Not Defined";
                                let _brand = itemProd.origin_brand ? itemProd.origin_brand : "Not Defined";
                                let _category = itemProd.category ? itemProd.category : "Not Defined";
                                let _category1 = itemProd.category1 ? itemProd.category1 : "Not Defined";
                                let _category2 = itemProd.category2 ? itemProd.category2 : "Not Defined";
                                let _category3 = itemProd.category3 ? itemProd.category3 : "Not Defined";

                                var products = {
                                    'item_name': _productName,
                                    'item_id': _sku,
                                    'price': _productPrice,
                                    'item_brand': _brand,
                                    'item_category': _category,
                                    'item_category2': _category1,
                                    'item_category3': _category2,
                                    'item_category4': _category3,
                                    'item_variant': productVariant,
                                    'quantity': 1,
                                    'index' : idxData
                                };

                                itemsRecent.push(products);
                                idxData++;
                            });


                            window.dataLayer = window.dataLayer || [];
                            dataLayer.push({
                                'event': 'view_item_list',
                                'eventCategory':'ecommerce',
                                'eventAction': 'product_view',
                                'eventLabel': 'Recently Viewed',
                                'ecommerce': {                              
                                    'items': itemsRecent
                                }
                            });	
                            
                        }
                    });

                    isDesktopRecentTrigger = true;
                }
            }
        } catch (err) {
            console.log('error recent view ga : ' + err.message);
        }

    });
                
    $(document).on('click', '.recent.products-grid li a', function() {
        try {
            var linkProduct = $(this).attr('href');
            var productIds = [];
            var _index = $(this).parents('.product-item').index() + 1;

            Object.keys(productList).forEach(function(key){
                if (productList[key].url = linkProduct) {
                    productIds.push(key);
                }
            })
            
            sendRecentViewClick(productIds, _index)
        } catch (err) {
            console.log('error click recent view : ' + err.message);
        }

    });

    $(document).on('click', '.recent.products-grid li img', function() {
        try {
            var parent = $(this).parents('.product-item');
            var linkProduct = parent.find('a.product-item-link').attr('href');
            var productIds = [];
            var _index = parent.index() + 1;

            Object.keys(productList).forEach(function(key){
                if (productList[key].url = linkProduct) {
                    productIds.push(key);
                }
            })
            
            sendRecentViewClick(productIds, _index)
        } catch (err) {
            console.log('error click recent view : ' + err.message);
        }

    });

    function elementInView(elem){
        return ($(window).height() + $(window).scrollTop()) > $(elem).offset().top;
    };

    function sendRecentViewClick(productIds, _index)
    {
        try {
            $.ajax({
                type: 'POST',
                url: window.location.origin + '/datalayer/ga/cartlayer',
                data: {'ids': productIds , 'requestFrom' : 'recent_view' },
                success: function (data) {
                    let _productName = data[0].product_name ? data[0].product_name : "Not Defined";
                    let _sku = data[0].sku ? data[0].sku : "Not Defined";
                    let _productPrice = data[0].price ? data[0].price : "Not Defined";
                    let _brand = data[0].origin_brand ? data[0].origin_brand : "Not Defined";
                    let _category = data[0].category ? data[0].category : "Not Defined";
                    let _category1 = data[0].category1 ? data[0].category1 : "Not Defined";
                    let _category2 = data[0].category2 ? data[0].category2 : "Not Defined";
                    let _category3 = data[0].category3 ? data[0].category3 : "Not Defined";

                    var products = [{
                        'item_name': _productName,
                        'item_id': _sku,
                        'price': _productPrice,
                        'item_brand': _brand,
                        'item_category': _category,
                        'item_category2': _category1,
                        'item_category3': _category2,
                        'item_category4': _category3,
                        'item_variant': "Not Defined",
                        'index' : _index,
                        'quantity': 1
                    }];

                    if (typeof productCart !== 'undefined') {
                        productCart.push(products);
                    }

                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'select_item',
                        'eventCategory':'ecommerce',
                        'eventAction': 'product_click',
                        'eventLabel':_productName,
                        'ecommerce': {                              
                            'items': products
                        }
                    });           
                    
                }
            });
        } catch (err) {
            console.log('error click recent view : ' + err.message);
        }
    }

    function generateOptionProduct(cart, productName, productSku, productCategory) {

        try {
            var productPrice = $('.price-wrapper').attr('data-price-amount');
            var productVariant = '';
   
            if ($('.swatch-attribute.color .swatch-attribute-label').length > 0) {
                productVariant += $('.swatch-attribute.color .swatch-attribute-label').text().trim();
            }
            if ($('.swatch-attribute.color .swatch-attribute-selected-option').length > 0) {
                productVariant += $('.swatch-attribute.color .swatch-attribute-selected-option').text().trim() + ' | ';
            }
            if ($('.swatch-attribute.size .swatch-attribute-label').length > 0) {
                productVariant += $('.swatch-attribute.size .swatch-attribute-label').text().trim();
            }
            if ($('.swatch-attribute.size .swatch-attribute-selected-option').length > 0) {
                productVariant += $('.swatch-attribute.size .swatch-attribute-selected-option').text().trim();
            }

            if (productVariant == '') {
                productVariant = 'Not Defined';
            }

            $.ajax({
                type: 'POST',
                url: window.location.origin + '/datalayer/ga/cartlayer',
                data: {'product_sku': productSku , 'typeProduct' : 'sku' },
                success: function (data) {
                    console.log('data',data)
                    let _productName = data.product_name ? data.product_name : "Not Defined";
                    let _sku = data.sku ? data.sku : "Not Defined";
                    let _productPrice = data.price ? data.price : "Not Defined";
                    let _brand = data.origin_brand ? data.origin_brand : "Not Defined";
                    let _category = data.category ? data.category : "Not Defined";
                    let _category1 = data.category1 ? data.category1 : "Not Defined";
                    let _category2 = data.category2 ? data.category2 : "Not Defined";
                    let _category3 = data.category3 ? data.category3 : "Not Defined";

                    var products = [{
                        item_name: _productName,
                        item_id: productSku,
                        price: productPrice,
                        item_brand: _brand,
                        item_category: _category,
                        item_category2: 'Not Defined',
                        item_category3: 'Not Defined',
                        item_category4: 'Not Defined',
                        item_variant: productVariant,
                        quantity: String($('#qty').val())
                    }];

                    if (typeof productCart !== 'undefined') {
                        productCart.push(products);
                    }

                    window.dataLayer = window.dataLayer || [];
                    dataLayer.push({
                        'event': 'add_to_cart',
                        'eventCategory':'Ecommerce',
                        'eventAction':'add_to_cart',
                        'eventLabel':productName,
                        'ecommerce': {                              
                            'items': products
                        }
                    });

                    let is_part_of_bundle = false;

                    if ($('body').hasClass('page-product-bundle')) {
                        _productPrice = $('.price-container.price-configured_price > span[data-price-type="finalPrice"] span').text() ? $('.price-container.price-configured_price > span[data-price-type="finalPrice"] span').text() : 0;
                        _productPrice = _productPrice.replace("Rp ", "");
                        _productPrice = _productPrice.replace(".", "");
                        _productPrice = _productPrice.replace(".", "");
                        is_part_of_bundle = true;
                    }
                    // if (currentWwebsiteId == 3) {
                    //     branch.logEvent('ADD_TO_CART', {
                    //         "item_sku": productSku,
                    //         "item_title": _productName,
                    //         "item_final_price": _productPrice,
                    //         "item_original_price": _productPrice,
                    //         "item_id": data.id,
                    //         "is_part_of_bundle" : is_part_of_bundle,
                    //        "store_currency" : "IDR",
                    //     }, function(err) {
                    //         if (err) {
                    //             console.error('Error logging event:', err);
                    //         } else {
                    //             console.log('Successfully logged ADD_TO_CART.');
                    //         } 
                    //     });             
                    // }  
                    
                }
            });

        } catch (err) {
            console.log('error click add to cart : ' + err.message);
        }
           
    }
    
});
</script>
</div><footer class="page-footer"><a id="back-to-top" class="back-to-top"><span>Back to top</span></a>
<!--<button id="back-to-top" class="back-to-top back-to-top-action">-->
<!--    <i class="icon-up-thin"></i>-->
<!--    Top-->
<!--</button>-->
<script data-breeze>
    require(['jquery'], function($){
        $(function () {
            window.onscroll = function() {
                if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                    $('#back-to-top').css('display','block');
                } else {
                    $('#back-to-top').css('display','none');
                }
            };
            $('#back-to-top').on('click',function () {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            });
        });
    });
</script><style>#html-body [data-pb-style=DK3T6M7],#html-body [data-pb-style=EXLLNWK]{background-position:left top;background-size:cover;background-repeat:no-repeat;background-attachment:scroll}#html-body [data-pb-style=EXLLNWK]{justify-content:flex-start;display:flex;flex-direction:column}#html-body [data-pb-style=DK3T6M7]{align-self:stretch}#html-body [data-pb-style=OAID5MY]{display:flex;width:100%}#html-body [data-pb-style=CEU4VQX],#html-body [data-pb-style=IQTQM3Q],#html-body [data-pb-style=PO3J8MC],#html-body [data-pb-style=WG4K5JH]{justify-content:flex-start;display:flex;flex-direction:column;background-position:left top;background-size:cover;background-repeat:no-repeat;background-attachment:scroll;width:25%;align-self:stretch}#html-body [data-pb-style=R8KNU7R]{text-align:left}</style><div data-content-type="row" data-appearance="contained" data-element="main"><div class="footer-content-mckanmo-desktop" data-enable-parallax="0" data-parallax-speed="0.5" data-background-images="{}" data-background-type="image" data-video-loop="true" data-video-play-only-visible="true" data-video-lazy-load="true" data-video-fallback-src="" data-element="inner" data-pb-style="EXLLNWK"><div class="pagebuilder-column-group footer-main-column-mc" data-background-images="{}" data-content-type="column-group" data-appearance="default" data-grid-size="12" data-element="main" data-pb-style="DK3T6M7"><div class="pagebuilder-column-line" data-content-type="column-line" data-element="main" data-pb-style="OAID5MY"><div class="pagebuilder-column shop-with-us-column-mc" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" data-pb-style="CEU4VQX"><h4 class="heading-shop-with-us-kanmo-mc" data-content-type="heading" data-appearance="default" data-element="main">ALEXISTOTO</h4><div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><p><a href="//blkbanyuwangi.kemnaker.go.id">Situs Slot</a></p></div><div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><p><a href="//blkbanyuwangi.kemnaker.go.id">Slot Gacor</a></p></div><div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><p><a href="//blkbanyuwangi.kemnaker.go.id">Slot Maxwin</a></p></div><div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><p><a href="//blkbanyuwangi.kemnaker.go.id">Slot777</a></p></div><div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><p><a href="//blkbanyuwangi.kemnaker.go.id">Scatter Hitam</a></p></div><div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><p><a href="//blkbanyuwangi.kemnaker.go.id">Slot Gacor Maxwin</a></p></div><div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><p><a href="//blkbanyuwangi.kemnaker.go.id">Slot Gacor Hari Ini</a></p></div><div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><p><a href="//blkbanyuwangi.kemnaker.go.id">Slot Bonus</a></p>
</div></div><div class="pagebuilder-column need-help-column-mc" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" data-pb-style="PO3J8MC"><h4 class="heading-need-help-kanmo-mc" data-content-type="heading" data-appearance="default" data-element="main">butuh bantuan? hubungi kami</h4><div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><p><a href="https://blkbanyuwangi.kemnaker.go.id/">hubungi kami</a></p></div><div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><p><a href="https://blkbanyuwangi.kemnaker.go.id/">bantuan dan faq</a></p></div><div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><p><a href="tel:+6221123456789">021-123456789</a></p>
<p>24 Hours</p></div><div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><div class="footer-desktop">
<p>ikuti kami di media sosial</p>
<div style="display:flex;column-gap:20px">
    <a class="item" href="https://blkbanyuwangi.kemnaker.go.id/"><img width="10" height="19" alt="facebook icon" src="https://www.mothercare.co.id/media/wysiwyg/mothercare/Vector_1_.png"></a>
    <a class="item" href="https://blkbanyuwangi.kemnaker.go.id/"><img width="24" height="25" alt="instagram icon" src="https://www.mothercare.co.id/media/wysiwyg/mothercare/upgrade_245_bxl_instagram-alt.png"></a>
    <a class="item" href="https://blkbanyuwangi.kemnaker.go.id/"> <img width="24" height="25" alt="youtube icon" src="https://www.mothercare.co.id/media/wysiwyg/mothercare/upgrade_245_bxl_youtube.png"></a>
</div>
</div>
<style>
.footer-desktop {display:block;}
.footer-mobile {display:none;}
@media screen and (max-width: 769px) {
.footer-desktop {display:none !important;}
.footer-mobile {display:block;}
}
</style>
</div></div><div class="pagebuilder-column download-ourapps-column-mc" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" data-pb-style="IQTQM3Q"><h4 class="heading-download-apps-kanmo-mc" data-content-type="heading" data-appearance="default" data-element="main">unduh aplikasi ALEXISTOTO</h4><div class="footer-apple-store-img" data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><a href="https://alexistoto.aksespintu.com/blkbanyuwangi/"><img width="200" height="60" loading="lazy" src="https://res.cloudinary.com/daydnseot/image/upload/v1778205815/logo-slot-gacor_cjf07b.png" alt="download app apple store">
</a></div><div class="footer-google-play-img" data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><a href="https://alexistoto.aksespintu.com/blkbanyuwangi/"><img width="200" height="60" loading="lazy" src="https://www.mothercare.co.id/media/wysiwyg/google-en.png" alt="download app google play"></a>

<style>
@media (min-width:768px){
.footer-google-play-img {
    width: 70%;
}

}
</style></div><div class="footer-google-play-img" data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><div class="footer-mobile" style="text-align:center;margin-top:15px;">
<p>ikuti kami di media sosial</p>
<div style="display:flex;column-gap:20px;justify-content: center;">
    <a class="item" href="https://blkbanyuwangi.kemnaker.go.id/"><img src="https://www.mothercare.co.id/media/wysiwyg/mothercare/Vector_1_.png" alt="facebook icon"></a>
    <a class="item" href="https://blkbanyuwangi.kemnaker.go.id/"><img src="https://www.mothercare.co.id/media/wysiwyg/mothercare/upgrade_245_bxl_instagram-alt.png" alt="instagram icon"></a>
    <a class="item" href="https://blkbanyuwangi.kemnaker.go.id/"> <img src="https://www.mothercare.co.id/media/wysiwyg/mothercare/upgrade_245_bxl_youtube.png" alt="youtube icon"></a>
</div>
</div>
</div></div><div class="pagebuilder-column accept-pay" data-content-type="column" data-appearance="full-height" data-background-images="{}" data-element="main" data-pb-style="WG4K5JH"><h4 data-content-type="heading" data-appearance="default" data-element="main" data-pb-style="R8KNU7R">we accept</h4><div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><div class="footer-promo"> 
<span><img loading="lazy" width="359" height="90" src="https://www.mothercare.co.id/media/wysiwyg/footer_payment_method.png" alt="mothercare payment method"></span> 
<span><a target="_blank" href="https://blkbanyuwangi.kemnaker.go.id/"><img loading="lazy" width="117" height="60" style="max-height: 60px;margin:0 auto 15px;" src="https://res.cloudinary.com/daydnseot/image/upload/v1778205815/logo-slot-gacor_cjf07b.png" alt="TS288 logo"></a></span>
</div>
<div>
<span>Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga <br>
Kementerian Perdagangan RI <br>
WhatsApp: +62 123 8888 8989
</span>
</div>

<style>

.cms-page-view .breadcrumbs {
display:none;
}
    
</style>
</div><div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><style>
.checkout-cart-index .cart-container .cart-summary .kredivo-label {
    display: block;
}
.cms-page-view .breadcrumbs {
display:none;
}
.category-description .pagebuilder-banner-wrapper   {
    width: 100%;
    height: 0;
    padding-top: 25%;
}
@media screen and (max-width: 767px) {
.category-description .pagebuilder-banner-wrapper   {
    width: 100%;
    height: 0;
    padding-top: 50%;
}
.accept-pay {
width: 100% !important;
    text-align: left !important;
    margin-bottom: 15px;
}
}


@media only screen and (min-width: 1024px){

.catalog-category-view .products-grid .product-items .product-item, .catalogsearch-result-index .products-grid .product-items .product-item, .catalog-category-view [data-appearance=carousel] .product-items .product-item, .catalogsearch-result-index [data-appearance=carousel] .product-items .product-item {
margin:0 26px 35px;
}
}
</style>
</div></div></div></div></div></div></footer>

<!-- 
<div id="giftreg-message-minicart" style="display: none;">
	</div> -->


<script type="text/javascript" data-breeze>
	require(['jquery','Magento_Ui/js/modal/modal'],function($,modal){
		let dataMinicart = $('#giftreg-message-minicart');
		let datapdp = $('#giftreg-message-pdp');

		let formUrl = 'https://blkbanyuwangi.kemnaker.go.id/';

		// $('.action.showcart').click(function(){
		// 	setTimeout(function(){
		// 		$('#minicart-content-wrapper .block-content').find('#giftreg-message-minicart').remove();
		// 		$(document).find('#minicart-content-wrapper .block-content .viewcart').after(dataMinicart)
		// 		dataMinicart.show();
		// 	},500)
		// })

		if ($('body').hasClass('catalog-product-view')) {
			$(document).find('.action.towishlist').after(datapdp);
			datapdp.show();
		}

		var options = {
	        type: 'popup',
	        responsive: true,
	        innerScroll: true,
	        title: 'Example Modal',
	        modalClass: 'giftmodalbox',
	        buttons: [{
	            text: $.mage.__("ok"),
	            class: '',
	            click: function () {
	                this.closeModal();
	            }
	        }]
	    };

	    $('.gift-pdp-button').click(function(){
	    	$("#modal-gift").modal(options).modal('openModal');
	    })

	    $('.giftSubmit').click(function(){
	    	
	    	if (!$('input[name=entity]:checked').val()) {
	    		$(this).prev('.mage-error').remove()
	    		$('.giftSubmit').before('<div class="mage-error">Please select gift registry event</div>');
	    	}else{
	    		$('.giftLoader').show();
	    		$(this).prop('disabled',true);
	    	
		    	let formData = $('#product_addtocart_form').serialize().split('&');
		    	let giftForm = $('#giftForm');
		    	giftForm.find('input[type="hidden"]').remove();

		    	for (var i = 0; i < formData.length; i++) {
		    		let key = formData[i].split('=');
		    		let fname = key[0].replace('%5B','[')
		    		fname = fname.replace('%5D',']')
		    		giftForm.append('<input type="hidden" name="'+fname+'" value="'+key[1]+'" />')
		    	}
		    	giftForm.submit()
	    	}
	    })

	    if ($('body').hasClass('catalog-product-view')) {
	    	 let unec = $('.action.towishlist').attr('data-post');
	    	let loginUrl = $('.notlogingift').attr('href');
	    	$('.notlogingift').attr('href', loginUrl+'/referer/'+JSON.parse(unec).data.uenc)
	    }
		
	})
</script>



<style type="text/css">
	div#giftreg-message-pdp a {
	    display: flex;
	    align-items: center;
	    justify-content: center;
	    gap: 10px;
	    padding: 17px;
	    font-size: 16px;
	    border: solid 1px #165C7D;
	    border-radius: 5px;
	    color: #165C7D;
	    margin-top: 15px;
	    width: 250px;
	}

	.page-product-bundle #maincontent .column.main .product-info-wrapper .product-info-main .bundle-options-container div#giftreg-message-pdp a {
	    width: 100%;
	}

	.page-product-configurable #maincontent .column.main .product-info-wrapper .product-config form#product_addtocart_form .product-options-bottom .box-tocart .fieldset .actions{
		display: block;
	}

	div#giftreg-message-pdp a img {
	    width: 16.7px;
	}

	#modal-gift input[type="radio"]:after {
	    content: '';
	    display: block;
	    width: 17px;
	    height: 17px;
	    background: white;
	    position: absolute;
	    left: -2px;
	    top: -2px;
	    border: solid thin #E8E8E8;
	}

	#modal-gift input[type="radio"] {
	    position: relative;
	}

	#modal-gift  li label {
	    display: flex;
	    gap: 10px;
	    align-items: center;
	    font-size: 16px;
	    color: #165C7D;
	    padding: 13px;
	}

	#modal-gift input[type='button'] {
	    width: 100%;
	    background: #165C7D;
	    color: #fff;
	    margin-top: 34px;
	    font-family: 'mothercare_2020-regular-webfont';
	}

	#modal-gift h1 {
	    font-size: 32px;
	    color: #165C7D;
	    text-align: center;
	}

	#modal-gift ul {
	    max-height: 253px;
	    overflow: auto;
	}

	.giftmodalbox .modal-footer {
	    display: none;
	}

	#modal-gift input[type="radio"]:checked:before {
	    content: '';
	    position: absolute;
	    width: 4px;
	    height: 7px;
	    z-index: 1;
	    border-bottom: solid thin #165C7D;
	    border-right: solid thin #165C7D;
	    transform: rotate(45deg);
	    left: 5px;
	    top: 2px;
	}

	#modal-gift .giftLoader {
	    text-align: center;
	    position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    background: rgba(255,255,255,0.7);
	}

	.giftmodalbox .modal-inner-content {
	    position: relative;
	}
	@media(min-width:1244px){
	    .catalog-product-view .product-config {
		    width: 400px;
		}
    }
	@media(max-width:767px){
	    .modal-inner-wrap{
	        width: 100% !important;
	        max-width:100% !important;
	        border-radius:20px 20px 0 0 !important;
	    }
	    .modal-slide, .modal-popup{
	        padding:0 !important;
	    }
	    .modal-inner-content h1{
	        font-size: 26px !important;
	        padding-top: 30px;
	    }
	    .modal-header .action-close::before{
	    width: 3.5rem;
	    height: 2.5rem;
	    }
	    #giftreg-message-pdp{
	    	width: 100%;
	    }
	    .gift-pdp-button{
	    	padding: 5px 20px !important;
	    }

	    div#giftreg-message-pdp a {
		    width: 100%;
		}

	    .page-product-bundle #maincontent .column.main .product-info-wrapper .product-info-main .bundle-options-container div#giftreg-message-pdp a {
		    width: 100%;
		}
    }
</style><span data-bind="scope: 'personalData'" style="display:none;">
    <!-- ko if: personalData().klevuSessionId -->
    <span id="klevu_sessionId" data-bind="text: personalData().klevuSessionId"></span>
    <!-- /ko -->
    <!-- ko if: personalData().klevuLoginCustomerGroup -->
    <span id="klevu_loginCustomerGroup" data-bind="text: personalData().klevuLoginCustomerGroup"></span>
    <!-- /ko -->
    <!-- ko if: personalData().klevuIdCode -->
    <span id="klevu_loginCustomerEmail" data-bind="text: personalData().klevuIdCode"></span>
    <!-- /ko -->
    <!-- ko if: personalData().klevuShopperIP -->
    <span id="klevu_shopperIP" data-bind="text: personalData().klevuShopperIP"></span>
    <!-- /ko -->
</span>
<script type="text/x-magento-init" data-breeze-processed="true">
{"*": {"Magento_Ui/js/core/app": {"components":{"personalData":{"component":"Klevu_Search\/js\/view\/personal-data"}}}}}
</script>
<script type="text/x-magento-init" data-breeze-processed="true">
        {
            "*": {
                "Magento_Ui/js/core/app": {
                    "components": {
                        "storage-manager": {
                            "component": "Magento_Catalog/js/storage-manager",
                            "appendTo": "",
                            "storagesConfiguration" : {"recently_viewed_product":{"requestConfig":{"syncUrl":"https:\/\/www.mothercare.co.id\/catalog\/product\/frontend_action_synchronize\/"},"lifetime":"1000","allowToSendRequest":"0"},"recently_compared_product":{"requestConfig":{"syncUrl":"https:\/\/gretavanfleetmerch.com\/catalog\/product\/frontend_action_synchronize\/"},"lifetime":"1000","allowToSendRequest":"0"},"product_data_storage":{"updateRequestConfig":{"url":"https:\/\/gretavanfleetmerch.com\/rest\/mothercare_website_bahasa\/V1\/products-render-info"},"requestConfig":{"syncUrl":"https:\/\/gretavanfleetmerch.com\/catalog\/product\/frontend_action_synchronize\/"},"allowToSendRequest":"0"}}                        }
                    }
                }
            }
        }
</script>
<script id="form-tmpl-multiple" type="text/x-magento-template">
    <form id="wishlist-hidden-form" method="post" action="<%- data.url %>" class="no-display">
        <% if (data.itemId) { %>
            <input name="item_id" value="<%- data.itemId %>">
        <% } %>
        <% if (data.wishlistId) { %>
            <input name="wishlist_id" value="<%- data.wishlistId %>">
        <% } %>
        <% if (data.qty) { %>
            <input name="qty" value="<%- data.qty %>">
        <% } %>
        <% if (data.item) { %>
            <input name="item" value="<%- data.item %>">
        <% } %>
        <% if (data.entity) { %>
            <input name="entity" value="<%- data.entity %>">
        <% } %>
        <% if (data.form_key) { %>
            <input name="form_key" value="<%- data.form_key %>">
        <% } %>
    </form>
</script>
<script id="popup-tmpl" type="text/x-magento-template">
    <div class="window wishlist overlay active"></div>
    <div id="<%- data.popupWishlistBlockId %>" class="window wishlist popup active">
        <div class="popup-actions">
            <div class="secondary">
                <button type="button"
                        title="<%- window.jQuery.mage.__('Close') %>"
                        class="action close <%- data.btnCloseClass %>"
                        data-dismiss="popup">
                    <span><%- data.translate.close %></span>
                </button>
            </div>
        </div>
        <div class="popup-header">
             <strong class="title" id="popup-title">
                 <span>
                     <% if (data.isEdit) { %>
                        <%- data.translate.editWishlist %>
                     <% } else { %>
                        <%- data.translate.createNewWishlist %>
                     <% } %>
                 </span>
             </strong>
        </div>
        <div class="popup-content" id="popup-content">
            <form id="<%- data.popupWishlistFormId %>" method="post" action="<%- data.url %>" class="form wishlist">
                <input name="form_key" type="hidden" value="<%- data.formKey %>">
                <fieldset class="fieldset">
                    <div class="field name">
                        <label for="wishlist-name" class="label">
                            <span><%- data.translate.wishListName %></span>
                        </label>
                        <div class="control">
                            <input id="wishlist-name"
                                   class="input-text"
                                   data-role="prompt-field"
                                   data-validate="{required:true}"
                                   type="text"
                                   name="name"
                                   maxlength="255"
                                   value="<%- data.name %>">
                        </div>
                    </div>
                    <div class="field choice">
                        <input id="wishlist-public"
                               type="checkbox"
                               name="visibility"<% if (data.isPublic) { %> checked=true<% } %>">
                        <label for="wishlist-public" class="label">
                            <span><%- data.translate.publicWishList %></span>
                        </label>
                    </div>
                    <div class="actions-toolbar">
                        <div class="primary">
                            <button class="action save primary" type="submit" title="<%- window.jQuery.mage.__('Save') %>">
                                <span><%- data.translate.save %></span>
                            </button>
                        </div>
                        <div class="secondary">
                            <button class="action cancel <%- data.btnCloseClass %>" type="button" title="<%- window.jQuery.mage.__('Cancel') %>">
                                <span><%- data.translate.cancel %></span>
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
</script>
<script id="split-btn-tmpl" type="text/x-magento-template">
    <div class="split button wishlist">
        <button type="button" data-post='<%- JSON.stringify(data.generalParams) %>' data-action="add-to-wishlist" class="label action split">
            <span><%- data.buttonName %></span>
        </button>
        <button class="action toggle change"
                title="<%- window.jQuery.mage.__('Add to:') %>"
                type="button"
                data-mage-init='{"dropdown":{}}'
                data-toggle="dropdown"
                data-trigger-keypress-button="true">
            <span><%- window.jQuery.mage.__('Add to:') %></span>
        </button>
        <ul class="items" data-target="dropdown">
            <% _.each(data.wishlists, function(item) { %>
                <li class="item">
                    <% if (item.newClass) { %>
                        <span role="button"
                              tabindex="0"
                              class="action <%- item.newClass %>"
                              data-action-keypress="true"
                              data-post-new-wishlist='<%- JSON.stringify(item.params) %>'
                              data-action="add-to-wishlist"
                              title="<%- item.name %>">
                            <span><%- item.name %></span>
                        </span>
                    <% } else { %>
                        <span role="button"
                              tabindex="0"
                              data-action-keypress="true"
                              data-post='<%- JSON.stringify(item.params) %>'
                              data-action="add-to-wishlist"
                              title="<%- item.name %>">
                            <%- item.name %>
                        </span>
                    <% } %>
                </li>
            <% }); %>
        </ul>
    </div>
</script>
<script type="text/x-magento-init" data-breeze-processed="true">
    {
        "*": {
            "Magento_Ui/js/core/app": {
                "components": {
                    "multipleWishlist": {
                        "component": "Magento_MultipleWishlist/js/view/multiple-wishlist",
                        "config": {
                            "multipleWishlistOptions": {
                                "createUrl": "https://blkbanyuwangi.kemnaker.go.id/",
                                "wishlistLink": ".action.towishlist"
                            }
                        }
                    }
                }
            }
        }
    }
</script>

  
    


<div data-bind="scope: 'ajaxpro'">
    <div id="ajaxpro-reinit" data-bind="html: bindBlock('reinit')"></div>
</div><div data-content-type="html" data-appearance="default" data-element="main" data-decoded="true"><div style="font-size:12px;background: linear-gradient(135deg, #3787d4, #27c959);color: #fff;padding: 15px;text-align: center;">&copy; Copyright ALEXISTOTO. All Rights Reserved.<div>
<style>
@media only screen and (max-width: 768px) {
    .catalog-product-view.page-product-configurable #maincontent .column.main .product-info-wrapper {
        gap: 0;
    }
}
@media only screen and (max-width: 767px) {
    .page-product-configurable #maincontent .column.main .product-info-wrapper .page-title-wrapper.product h1.page-title {
        margin-top: 0;
    }
}
</style></div>    
                
    <script type="text/x-magento-init" data-init-lazy="submit" data-breeze-processed="true">
    {
        "[data-role=tocart-form], .form.map.checkout": {
            "catalogAddToCart": {
                "submitForcePreventValidation": false            }
        }
    }
</script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"version":"2024.11.0","token":"95579be9b0304392b4b981fad4df5daf","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"version":"2024.11.0","token":"be196cc6a41142628c11a839eabce210","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"version":"2024.11.0","token":"1a16316a0f074f3a974e6f5a47ec818e","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
</div>
</div>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"version":"2024.11.0","token":"73d4932cfdb04f38aae8eca1269ac148","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v67327c56f0bb4ef8b305cae61679db8f1769101564043" integrity="sha512-rdcWY47ByXd76cbCFzznIcEaCN71jqkWBBqlwhF1SY7KubdLKZiEGeP7AyieKZlGP9hbY/MhGrwXzJC/HulNyg==" data-cf-beacon='{"version":"2024.11.0","token":"57f52a9cb2e34f9098fbf428d991d21f","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"4ba886793bdc42ca8207ad163948e428","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"4ba886793bdc42ca8207ad163948e428","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"4ba886793bdc42ca8207ad163948e428","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"4ba886793bdc42ca8207ad163948e428","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"4ba886793bdc42ca8207ad163948e428","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"4ba886793bdc42ca8207ad163948e428","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"c2cd64cf75374e5eb81e99837b86b026","server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9efaa898bf420425',t:'MTc3Njc1NjM2Ng=='};var a=document.createElement('script');a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script><script defer src="https://static.cloudflareinsights.com/beacon.min.js/v8c78df7c7c0f484497ecbca7046644da1771523124516" integrity="sha512-8DS7rgIrAmghBFwoOTujcf6D9rXvH8xm8JQ1Ja01h9QX8EzXldiszufYa4IFfKdLUKTTrnSFXLDkUEOTrZQ8Qg==" data-cf-beacon='{"version":"2024.11.0","token":"c2cd64cf75374e5eb81e99837b86b026","server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>


</div><iframe height="1" width="1" style="position: absolute; top: 0px; left: 0px; border: none; visibility: hidden;"></iframe><div id="klevu-quick-search-theme-templates"><script type="template/klevu" id="klevuQuickTemplateBase"> <div class="klevu-fluid kuPreventDocumentClick"> <%= helper.render('customBlockTopOuter',scope) %> <div id="klevuSearchingArea" class="klevuQuickSearchingArea"> <div ku-container data-container-id="ku_quick_main_container" data-container-role="main"> <%= helper.render('customBlockTop',scope) %> <header ku-container data-container-id="ku_quick_main_header_container" data-container-role="header"> <section ku-block data-block-id="ku_quick_main_header_sub_panel"></section> <section ku-block data-block-id="ku_quick_main_header_banner"> <%=helper.render('klevuQuickPromotionBanner',scope,data,"top") %> </section> <section ku-block data-block-id="ku_quick_main_header_site_navigation"> <div class="klevuSuggestionsBlock"> <%=helper.render('klevuQuickAutoSuggestions',scope) %> <%=helper.render('klevuQuickPageSuggestions',scope) %> <%=helper.render('klevuQuickCategorySuggestions',scope) %> </div> </section> </header> <% if(data.showQuickFacetedLayoutCharLimitMessage == true) { %> <% var quickFacetedLayoutMessage = (data.quickFacetedLayoutMinCharsTextValue) ? data.quickFacetedLayoutMinCharsTextValue : ""; %> <% if(quickFacetedLayoutMessage != "") { %> <span class="kuFacetedLayoutMinCharText"><%= helper.translate(quickFacetedLayoutMessage) %></span> <% } %> <% } else { %> <% if(data.query.productList) { %> <%=helper.render('klevuQuickTemplateResultsHeadingTitle',scope,data,"productList") %> <%= helper.render('klevuQuickTemplateTabResults',scope) %> <%= helper.render('klevuQuickProducts',scope) %> <%= helper.render('klevuQuickOtherContent',scope) %> <% } else { %> <div class="kuSearchPersonalizationsContainer"> <%= helper.render('klevuSearchPersonalizations',scope) %> </div> <% } %> <% } %> <footer ku-container data-container-id="ku_quick_main_footer_container" data-container-role="footer"> <section ku-block data-block-id="ku_quick_main_footer_sub_panel"></section> <section ku-block data-block-id="ku_quick_main_footer_banner"> <%=helper.render('klevuQuickPromotionBanner',scope,data,"bottom") %> </section> </footer> <%= helper.render('customBlockBottom',scope) %> </div> </div> </div></script><script type="template/klevu" id="klevuSearchPersonalizations"> <div ku-container data-container-id="ku_quick_main_content_container" data-container-role="content"> <section ku-container data-container-id="ku_quick_main_content_left" data-container-position="left" data-container-role="left"> <div ku-block data-block-id="ku_quick_left_facets"></div> <div ku-block data-block-id="ku_quick_left_call_outs"> <%=helper.render('kuTemplatePopularSearches',scope) %> <%=helper.render('kuTemplateRecentSearches',scope) %> </div> <div ku-block data-block-id="ku_quick_left_banner"></div> </section> <section ku-container data-container-id="ku_quick_main_content_center" data-container-position="center" data-container-role="center"> <header ku-block data-block-id="ku_quick_result_header"></header> <div ku-block data-block-id="ku_quick_result_items"></div> <div ku-block data-block-id="ku_quick_other_items"> <%=helper.render('klevuTrendingProducts',scope) %> <%=helper.render('klevuRecentViewedProducts',scope) %> </div> <footer ku-block data-block-id="ku_quick_result_footer"></footer> </section> <section ku-container data-container-id="ku_quick_main_content_right" data-container-position="right" data-container-role="right"> <div ku-block data-block-id="ku_quick_right_facets"></div> <div ku-block data-block-id="ku_quick_right_call_outs"></div> <div ku-block data-block-id="ku_quick_right_banner"></div> </section> </div></script><script type="template/klevu" id="klevuQuickAutoSuggestions"> <% if(data.suggestions.autosuggestion) { %> <% if(data.suggestions.autosuggestion.length> 0 ) { %> <% var queryParam = klevu.getSetting(klevu, "settings.url.queryParam"); %> <div class="klevuAutoSuggestionsWrap klevuAutosuggestions"> <div class="klevuSuggestionHeading"> <span class="klevuHeadingText"> <%=helper.translate("Suggestions")%></span> </div> <ul> <% helper.each(data.suggestions.autosuggestion,function(key,suggestion){ %> <li tabindex="-1"><a target="_self" href="<%=helper.buildUrl(data.settings.landingUrl, queryParam , helper.stripHtml(suggestion.suggest))%>" data-content="<%=helper.stripHtml(suggestion.suggest) %>" class="klevu-track-click"> <%=suggestion.suggest %> </a></li> <% }); %> </ul> </div> <% } %> <% } %></script><script type="template/klevu" id="klevuQuickPageSuggestions"> <% if(data.query.cmsCompressed) { %> <% if(data.query.cmsCompressed.result.length > 0 ){ %> <div class="klevuAutoSuggestionsWrap klevuCmsSuggestions" id="klevuCmsContentArea"> <div class="klevuSuggestionHeading"><span class="klevuHeadingText"><%=helper.translate("Pages")%></span></div> <ul> <% helper.each(data.query.cmsCompressed.result,function(key,cms){ %> <li tabindex="-1"><a target="_self" href="<%=cms.url%>" class="klevu-track-click" data-url="<%=cms.url%>" data-name="<%=cms.name%>"><%=cms.name%></a></li> <% }); %> </ul> </div> <% } %> <% } %></script><script type="template/klevu" id="klevuQuickCategorySuggestions"> <% if(data.query.categoryCompressed) { %> <% if(data.query.categoryCompressed.result.length > 0 ){ %> <div class="klevuAutoSuggestionsWrap klevuCategorySuggestions" id="klevuCategoryArea"> <div class="klevuSuggestionHeading"> <span class="klevuHeadingText"><%=helper.translate("Category")%></span> </div> <ul> <% helper.each(data.query.categoryCompressed.result,function(key,category){ %> <li tabindex="-1"><a target="_self" href="<%=category.url%>" class="klevu-track-click" data-url="<%=category.url%>" data-name="<%=category.name%>" ><%=category.name%></a></li> <% }); %> </ul> </div> <% } %> <% } %></script><script type="template/klevu" id="klevuQuickProducts"> <% if(data.query.productList) { %> <% if(data.query.productList.result.length > 0 ) { %> <div ku-container data-container-id="ku_quick_main_content_container" data-container-role="content" data-content="productList" > <section ku-container data-container-id="ku_quick_main_content_left" data-container-position="left" data-container-role="left"> <div ku-block data-block-id="ku_quick_left_facets"> <% var isQuickFiltersOnLeft = klevu.search.modules.kmcInputs.base.isQuickFacetedLayoutFilterOnLeft(); %> <% if(isQuickFiltersOnLeft === true && data.query.productList.filters && data.query.productList.filters.length > 0) { %> <div data-section="productList" class="klevuMeta"> <%=helper.render('klevuQuickTemplateFilters',scope,data,"productList") %> </div> <% } %> </div> <div ku-block data-block-id="ku_quick_left_call_outs"></div> <div ku-block data-block-id="ku_quick_left_banner"></div> </section> <section ku-container data-container-id="ku_quick_main_content_center" data-container-position="center" data-container-role="center"> <header ku-block data-block-id="ku_quick_result_header"></header> <div ku-block data-block-id="ku_quick_result_items"> <div class="klevuResultsBlock"> <%=helper.render('klevuQuickProductBlockTitleHeader',scope,data) %> <div class="klevuQuickSearchResults klevuMeta productList" data-section="productList" id="productList" data-result-view="list" > <div class="kuQuickResultsListHeader"> <%=helper.render('kuTemplateQuickResultsViewSwitch',scope,data,"productList") %> <%=helper.render('klevuQuickTemplateSortBy',scope,data,"productList") %> </div> <div class="kuClearBoth"></div> <div class="kuQuickResultsListContainer"> <ul> <% helper.each(data.query.productList.result,function(key,product){ %> <%=helper.render('klevuQuickProductBlock',scope,data,product) %> <% }); %> <%=helper.render('klevuQuickTemplateInfiniteScrollDown',scope,data) %> </ul> </div> </div> </div> </div> <div ku-block data-block-id="ku_quick_other_items"> <div data-section="productList" class="klevuMeta"> <%=helper.render('klevuQuickTemplatePagination',scope,data,"productList") %> </div> </div> <footer ku-block data-block-id="ku_quick_result_footer"></footer> </section> <section ku-container data-container-id="ku_quick_main_content_right" data-container-position="right" data-container-role="right"> <div ku-block data-block-id="ku_quick_right_facets"> <% var isQuickFiltersOnLeft = klevu.search.modules.kmcInputs.base.isQuickFacetedLayoutFilterOnLeft(); %> <% if(isQuickFiltersOnLeft === false && data.query.productList.filters && data.query.productList.filters.length > 0) { %> <div data-section="productList" class="klevuMeta"> <%=helper.render('klevuQuickTemplateFilters',scope,data,"productList") %> </div> <% } %> </div> <div ku-block data-block-id="ku_quick_right_call_outs"></div> <div ku-block data-block-id="ku_quick_right_banner"></div> </section> </div> <% } else { %> <% var isCmsEnabled = klevu.search.modules.kmcInputs.base.getCmsEnabledValue(); %> <% if(isCmsEnabled) { %> <% if(data.query.cmsCompressed && data.query.cmsCompressed.result.length <= 0 ){ %> <div ku-container data-container-id="ku_quick_main_content_container" data-container-role="content"> <section ku-container data-container-id="ku_quick_main_content_left" data-container-position="left" data-container-role="left"> </section> <section ku-container data-container-id="ku_quick_main_content_center" data-container-position="center" data-container-role="center"> <div ku-block data-block-id="ku_quick_no_result_items"> <%=helper.render('noResultsFoundQuick',scope) %> </div> </section> <section ku-container data-container-id="ku_quick_main_content_right" data-container-position="right" data-container-role="right"> </section> </div> <% } %> <% } else { %> <div ku-container data-container-id="ku_quick_main_content_container" data-container-role="content"> <section ku-container data-container-id="ku_quick_main_content_left" data-container-position="left" data-container-role="left"> </section> <section ku-container data-container-id="ku_quick_main_content_center" data-container-position="center" data-container-role="center"> <div ku-block data-block-id="ku_quick_no_result_items"> <%=helper.render('noResultsFoundQuick',scope) %> </div> </section> <section ku-container data-container-id="ku_quick_main_content_right" data-container-position="right" data-container-role="right"> </section> </div> <% } %> <% } %> <% } else { %> <% } %></script><script type="template/klevu" id="klevuQuickProductBlockTitleHeader"> <div class="klevuSuggestionHeading"> <span class="klevuHeadingText"><%=helper.translate("Products")%></span> </div> <div class="klevuProductsViewAll"> <% var queryParam = klevu.getSetting(klevu, "settings.url.queryParam"); %> <a href="<%=helper.buildUrl(data.settings.landingUrl, queryParam ,helper.stripHtml(data.settings.term))%>" target="_parent"><%=helper.translate("View All")%></a> </div></script><script type="template/klevu" id="klevuQuickProductBlock"> <% var updatedProductName = dataLocal.name; if(klevu.search.modules.kmcInputs.base.getSkuOnPageEnableValue()) { if(klevu.dom.helpers.cleanUpSku(dataLocal.sku)) { updatedProductName += klevu.dom.helpers.cleanUpSku(dataLocal.sku); } } %> <li ku-product-block class="klevuProduct" data-id="<%=dataLocal.id%>"> <a title="<%= updatedProductName %>" target="_self" href="<%=dataLocal.url%>" data-id="<%=dataLocal.id%>" class="klevuQuickProductInnerBlock trackProductClick kuTrackRecentView"> <div class="klevuProductItemTop"> <div class="klevuQuickImgWrap"> <div class="klevuQuickDiscountBadge"><strong><%=dataLocal.stickyLabelHead%></strong></div> <img src="<%=dataLocal.image%>" origin="<%=dataLocal.image%>" onerror="klevu.dom.helpers.cleanUpProductImage(this)" alt="<%=updatedProductName%>" /> </div> </div> <div class="klevuProductItemBottom"> <div class="klevuQuickProductDescBlock"> <div title="<%= updatedProductName %>" class="klevuQuickProductName kuClippedOne"> <%= updatedProductName %> </div> <div class="klevu-desc-l2 kuClippedOne"> <%=dataLocal.shortDesc%> </div> <div class="klevuQuickProductDesc kuClippedOne"> <div class="klevuSpectxt"><%=dataLocal.summaryAttribute%><span><%=dataLocal.stickyLabelText%></span></div> </div> <% if(dataLocal.inStock && dataLocal.inStock != "yes") { %> <%=helper.render('quickProductStock', scope, data, dataLocal) %> <% } else { %> <% if(klevu.search.modules.kmcInputs.base.getShowPrices()) { %> <div class="klevuQuickProductPrice kuClippedOne"> <% var kuTotalVariants = klevu.dom.helpers.cleanUpPriceValue(dataLocal.totalVariants); var kuStartPrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.startPrice,dataLocal.currency); var kuSalePrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.salePrice,dataLocal.currency); var kuPrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.price,dataLocal.currency); %> <% if(!Number.isNaN(kuTotalVariants) && !Number.isNaN(kuStartPrice)) { %> <div class="klevuQuickSalePrice kuStartPrice"> <span class="klevuQuickPriceGreyText"><%=helper.translate("Starting at")%></span> <span><%=helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.startPrice))%></span> </div> <% } else if(!Number.isNaN(kuSalePrice) && !Number.isNaN(kuPrice) && (kuPrice > kuSalePrice)){ %> <span class="klevuQuickOrigPrice"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.price)) %> </span> <span class="klevuQuickSalePrice klevuQuickSpecialPrice"> <%=helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.salePrice))%> </span> <% } else if(!Number.isNaN(kuSalePrice)) { %> <span class="klevuQuickSalePrice"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.salePrice)) %> </span> <% } else if(!Number.isNaN(kuPrice)) { %> <span class="klevuQuickSalePrice"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.price)) %> </span> <% } %> </div> <%=helper.render('searchResultProductVATLabelQuick', scope, data, dataLocal) %> <% } %> <% } %> <%=helper.render('klevuQuickProductRating',scope,data,dataLocal) %> </div> </div> <div class="kuClearLeft"></div> </a> <%=helper.render('quickSearchProductAddToCart',scope,data,dataLocal) %> </li></script><script type="template/klevu" id="klevuQuickTemplateResultsHeadingTitle"> <% var totalNumberOfResults = klevu.getObjectPath(data,"query."+dataLocal+".meta.totalResultsFound"); var searchedTerm = helper.escapeHTML(data.settings.term); %> <div class="kuContainer"> <div class="kuResultsHeadingTitleContainer"> <strong class="kuResultsNumber"> <%= (totalNumberOfResults) ? totalNumberOfResults : 0 %> </strong> <%= helper.translate((parseInt(totalNumberOfResults) > 1) ? " Results" : " Result") %> <%=helper.translate("found")%> <%= (searchedTerm && searchedTerm.length && searchedTerm != "*") ? helper.translate("for") + " '<span>"+ klevu.dom.helpers.cleanCatogeryPath(searchedTerm) +"</span>'" : "" %> </div> </div></script><!-- pagination searches template for Quick Search Results --><script type="template/klevu" id="klevuQuickTemplatePagination"> <% if(data.query[dataLocal].result.length > 0 ) { %> <% var productListLimit = data.query[dataLocal].meta.noOfResults; %> <% var productListTotal = data.query[dataLocal].meta.totalResultsFound - 1; %> <div class="kuPagination"> <% if(data.query[dataLocal].meta.offset > 0) { %> <a target="_self" href="javascript:void(0)" class="klevuPaginate" data-offset="0">&lt;&lt;</a>&nbsp; <a target="_self" href="javascript:void(0)" class="klevuPaginate" data-offset="<%=(data.query[dataLocal].meta.offset-productListLimit)%>">&lt;</a>&nbsp; <% } %> <% if(data.query[dataLocal].meta.offset > 0) { %> <a target="_self" href="javascript:void(0)" class="klevuPaginate" data-offset="<%=(data.query[dataLocal].meta.offset-productListLimit)%>"><%=(Math.ceil(data.query[dataLocal].meta.offset/productListLimit))%></a>&nbsp; <% } %> <a href="javascript:void(0);" class="kuCurrent"><%=(Math.ceil(data.query[dataLocal].meta.offset/productListLimit)+1)%></a>&nbsp; <% if(productListTotal >= data.query[dataLocal].meta.offset+productListLimit) { %> <a target="_self" href="javascript:void(0)" class="klevuPaginate" data-offset="<%=(data.query[dataLocal].meta.offset+productListLimit)%>"><%=(Math.ceil(data.query[dataLocal].meta.offset/productListLimit)+2)%></a>&nbsp; <% } %> <% if(productListTotal >= data.query[dataLocal].meta.offset+productListLimit) { %> <a target="_self" href="javascript:void(0)" class="klevuPaginate" data-offset="<%=(data.query[dataLocal].meta.offset+productListLimit)%>">&gt;</a>&nbsp; <a target="_self" href="javascript:void(0)" class="klevuPaginate" data-offset="<%=(Math.floor(productListTotal/productListLimit)*productListLimit)%>">&gt;&gt;</a> <% } %> </div> <% } %></script><script type="template/klevu" id="klevuQuickPromotionBanner"> <% var hasNoResultFound = klevu.getObjectPath(data,"modules.promotionalBanner.hasNoResultFound"); %> <% var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; %> <% if(data.banners && data.banners[dataLocal] && data.banners[dataLocal].length && !hasNoResultFound) { klevu.each(data.banners[dataLocal], function(index, banner){ %> <% var imageUrl = banner.bannerImg; var imageAltText = klevu.dom.helpers.getBannerAltTagText(banner); if (screenWidth < 768 && !!banner.mobileBannerImageUrl) { imageUrl = banner.mobileBannerImageUrl; imageAltText = banner.mobileBannerAltTag; } %> <div class="klevu-banner-ad kuBannerContainer"> <% if(!!banner.redirectUrl) { %> <a role="banner" area-label="Promotion Banner label" class="kuTrackBannerClick" target="_self" data-id="<%= banner.bannerRef %>" data-name="<%= banner.bannerName %>" data-image="<%= imageUrl %>" data-redirect="<%= banner.redirectUrl %>" href="<%= banner.redirectUrl %>" alt="<%= imageAltText %>" title="<%= imageAltText %>" > <img src="<%= imageUrl %>" alt="<%= imageAltText %>" /> </a> <% } else { %> <span role="banner" area-label="Promotion Banner label" class="kuTrackBannerClick" target="_self" data-id="<%= banner.bannerRef %>" data-name="<%= banner.bannerName %>" data-image="<%= imageUrl %>" data-redirect="<%= banner.redirectUrl %>" alt="<%= imageAltText %>" title="<%= imageAltText %>" > <img src="<%= imageUrl %>" alt="<%= imageAltText %>" /> </span> <% } %> </div> <% }); } %></script><!-- Popular searches template for Quick Search Results --><script type="template/klevu" id="kuTemplatePopularSearches"> <% if(data.popularSearches && data.popularSearches.length) { %> <div class="kuPopularSearchesBlock kuPreventDocumentClick"> <div class="klevuSuggestionHeading kuPopularSearchHeading"><span class="klevuHeadingText"><%=helper.translate("Popular Searches")%></span></div> <div class="kuPopularSearchTerms"> <ul> <% helper.each(data.popularSearches,function(key,term){ %> <% if(term && term.length) { %> <li class="kuPopularSearchTerm" data-value="<%= term %>"> <a target="_self" href="javascript:void(0)"><%= term %></a> </li> <% } %> <% }); %> </ul> </div> </div> <% } %></script><!-- Recent searches template for Quick Search Results --><script type="template/klevu" id="kuTemplateRecentSearches"> <% if(data.recentSearches && data.recentSearches.length) { %> <div class="kuRecentSearchesBlock kuPreventDocumentClick"> <div class="klevuSuggestionHeading kuRecentSearchHeading"><span class="klevuHeadingText"><%=helper.translate("Recent Searches")%></span></div> <div class="kuRecentSearchTerms"> <ul> <% helper.each(data.recentSearches,function(key,term){ %> <% if(term && term.length) { %> <li class="kuRecentSearchTerm" data-value="<%= helper.escapeHTML(term) %>"> <a target="_parent" href="javascript:void(0)"><%= helper.escapeHTML(term) %></a> </li> <% } %> <% }); %> </ul> </div> </div> <% } %></script><!-- Product block template for Trending products in Quick Search Results --><script type="template/klevu" id="klevuQuickTrendingProductBlock"> <% var updatedProductName = dataLocal.name; if(klevu.search.modules.kmcInputs.base.getSkuOnPageEnableValue()) { if(klevu.dom.helpers.cleanUpSku(dataLocal.sku)) { updatedProductName += klevu.dom.helpers.cleanUpSku(dataLocal.sku); } } %> <a target="_self" href="<%=dataLocal.url%>" data-id="<%=dataLocal.id%>" class="klevuQuickProductInnerBlock kuTrackPersonalizedProductClick kuQSMenuItemTarget kuTrackRecentView"> <div class="klevuProductItemTop"> <div class="klevuQuickImgWrap"> <div class="klevuQuickDiscountBadge"><strong><%=dataLocal.stickyLabelHead%></strong></div> <img src="<%=dataLocal.image%>" origin="<%=dataLocal.image%>" onerror="klevu.dom.helpers.cleanUpProductImage(this)" alt="<%=updatedProductName%>" /> </div> </div> <div class="klevuProductItemBottom"> <div class="klevuQuickProductDescBlock"> <div class="klevuQuickProductName kuClippedOne" title="<%= updatedProductName %>"><%= updatedProductName %></div> <div class="klevuQuickProductDesc"> <div class="klevuSpectxt"><%=dataLocal.summaryAttribute%><span><%=dataLocal.stickyLabelText%></span></div> </div> </div> </div> </a> </script><!-- Trending products template for Quick Search Results --><script type="template/klevu" id="klevuTrendingProducts"> <% var trendingProductsTitle = klevu.getObjectPath(data,"modules.trendingProducts.title"); trendingProductsTitle = (trendingProductsTitle) ? trendingProductsTitle : ""; %> <% if(data.query.trendingProductList) { %> <% if(data.query.trendingProductList.result.length > 0 ) { %> <div class="klevuResultsBlock kuPreventDocumentClick kuRecommendationSlider"> <div class="klevuSuggestionHeading"> <span class="klevuHeadingText"><%= helper.translate(trendingProductsTitle) %></span> </div> <div class="klevuQuickSearchResults klevuQuickSearchTrendingResults" data-section="trendingProductList" data-source="trendingProducts" id="trendingProductList"> <div class="kuCarousel kuTrendingProductsCarousel"> <div class="nav nav-left"> <div class="ion-chevron-left kuCarousel-arrow-icon-left"></div> </div> <div class="kuCarousel-content"> <% helper.each(data.query.trendingProductList.result,function(key,product){ %> <div class="klevuProduct kuQSMenuItem kuSlide" id="<%= (key + 1) %>" ku-product-block data-id="<%=product.id%>"> <%=helper.render('klevuQuickTrendingProductBlock',scope,data,product) %> </div> <% }); %> </div> <div class="nav nav-right"> <div class="ion-chevron-right kuCarousel-arrow-icon-right"></div> </div> </div> </div> </div> <% } %> <% } %></script><!-- Product block template for Recently viewed products in Quick Search Results --><script type="template/klevu" id="klevuQuickRecentViewedProductBlock"> <% var updatedProductName = dataLocal.name; if(klevu.search.modules.kmcInputs.base.getSkuOnPageEnableValue()) { if(klevu.dom.helpers.cleanUpSku(dataLocal.sku)) { updatedProductName += klevu.dom.helpers.cleanUpSku(dataLocal.sku); } } %> <a target="_self" href="<%=dataLocal.url%>" data-id="<%=dataLocal.id%>" class="klevuQuickProductInnerBlock kuTrackPersonalizedProductClick kuTrackRecentView kuQSMenuItemTarget"> <div class="klevuProductItemTop"> <div class="klevuQuickImgWrap"> <div class="klevuQuickDiscountBadge"><strong><%=dataLocal.stickyLabelHead%></strong></div> <img src="<%=dataLocal.image%>" origin="<%=dataLocal.image%>" onerror="klevu.dom.helpers.cleanUpProductImage(this)" alt="<%=updatedProductName%>" /> </div> </div> <div class="klevuProductItemBottom"> <div class="klevuQuickProductDescBlock"> <div class="klevuQuickProductName kuClippedOne" title="<%= updatedProductName %>"><%= updatedProductName %></div> <div class="klevuQuickProductDesc"> <div class="klevuSpectxt"><%=dataLocal.summaryAttribute%><span><%=dataLocal.stickyLabelText%></span></div> </div> </div> </div> </a></script><!-- Recent viewed products template for Quick Search Results --><script type="template/klevu" id="klevuRecentViewedProducts"> <% var recentlyViewedProductsTitle = klevu.getObjectPath(data,"modules.recentlyViewedProducts.title"); recentlyViewedProductsTitle = (recentlyViewedProductsTitle) ? recentlyViewedProductsTitle : ""; %> <% if(data.query.recentViewedProductList) { %> <% if(data.query.recentViewedProductList.result.length > 0 ) { %> <div class="klevuResultsBlock kuPreventDocumentClick kuRecommendationSlider"> <div class="klevuSuggestionHeading"> <span class="klevuHeadingText"><%= helper.translate(recentlyViewedProductsTitle) %></span> </div> <div class="klevuQuickSearchResults klevuQuickSearchRecentResults" data-section="recentViewedProductList" data-source="recentlyClickedProducts" id="recentViewedProductList"> <div class="kuCarousel kuRecentlyViewedProductsCarousel"> <div class="nav nav-left"> <div class="ion-chevron-left kuCarousel-arrow-icon-left"></div> </div> <div class="kuCarousel-content"> <% helper.each(data.query.recentViewedProductList.result,function(key,product){ %> <div class="klevuProduct kuQSMenuItem kuSlide" id="<%= (key + 1) %>" ku-product-block data-id="<%=dataLocal.id%>"> <%=helper.render('klevuQuickRecentViewedProductBlock',scope,data,product) %> </div> <% }); %> </div> <div class="nav nav-right"> <div class="ion-chevron-right kuCarousel-arrow-icon-right"></div> </div> </div> </div> </div> <% } %> <% } %></script><!-- No Results Found template for Quick Search Results --><script type="template/klevu" id="klevuTemplateNoResultFoundQuick"> <div class="kuQuickSearchNoRecordFound"> <div class="kuQuickNoResults"> <div class="kuQuickNoResultsInner"> <div class="kuQuickNoResultsMessage"> <%= helper.translate(data.noResultsFoundMsg) %> </div> </div> </div> <div class="kuDividerLine"></div> <%=helper.render('quickNoResultsPopularProducts', scope, data) %> <%=helper.render('quickNoResultsFoundBanners', scope, data) %> <%=helper.render('quickNoResultsPopularSearches', scope, data) %> </div></script><script type="template/klevu" id="klevuQuickNoResultsPopularProducts"> <% var popularProductList = klevu.getObjectPath(data,"query.noResultsFoundPopularProductList.result");%> <% if(popularProductList) { %> <% if(popularProductList.length > 0 ) { %> <div class="klevuNoResultsProductsBlock"> <div class="klevuPopularProductsHeading"><span class="klevuQuickHeadingText"><%= helper.translate(data.quickNoResultsPopularHeading) %></span></div> <div class="klevuQuickSearchNoResultsPopular" data-section="noResultsFoundPopularProductList" id="noResultsFoundPopularProductList"> <ul> <% helper.each(popularProductList,function(key, product){ %> <%=helper.render('quickNoResultsPopularProductBlock',scope,data,product) %> <% }); %> </ul> </div> </div> <% } %> <% } %></script><script type="template/klevu" id="klevuQuickNoResultsPopularProductBlock"> <% var updatedProductName = dataLocal.name; if(klevu.search.modules.kmcInputs.base.getSkuOnPageEnableValue()) { if(klevu.dom.helpers.cleanUpSku(dataLocal.sku)) { updatedProductName += klevu.dom.helpers.cleanUpSku(dataLocal.sku); } } %> <li class="klevuPopularProduct" data-id="<%=dataLocal.id%>"> <a target="_self" href="<%=dataLocal.url%>" data-id="<%=dataLocal.id%>" class="klevuQuickPopularProductInnerBlock trackProductClick klevuProductClick kuTrackRecentView"> <div class="klevuPopularProductItemTop"> <div class="klevuQuickImgWrap"> <div class="klevuQuickDiscountBadge"><strong><%=dataLocal.stickyLabelHead%></strong></div> <img src="<%=dataLocal.image%>" origin="<%=dataLocal.image%>" onerror="klevu.dom.helpers.cleanUpProductImage(this)" alt="<%=updatedProductName%>" /> </div> </div> <div class="klevuPopularProductItemBottom"> <div class="klevuQuickPopularProductDescBlock"> <div title="<%= updatedProductName %>" class="klevuQuickProductName kuClippedOne"><%= updatedProductName %></div> <div class="klevu-desc-l2 kuClippedOne"> <%=dataLocal.shortDesc%> </div> <% if(dataLocal.inStock && dataLocal.inStock != "yes") { %> <%=helper.render('quickProductStock', scope, data, dataLocal) %> <% } else { %> <% if(klevu.search.modules.kmcInputs.base.getShowPrices()) { %> <div class="klevuQuickProductPrice kuClippedOne"> <% var kuTotalVariants = klevu.dom.helpers.cleanUpPriceValue(dataLocal.totalVariants); var kuStartPrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.startPrice,dataLocal.currency); var kuSalePrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.salePrice,dataLocal.currency); var kuPrice = klevu.dom.helpers.cleanUpPriceValue(dataLocal.price,dataLocal.currency); %> <% if(!Number.isNaN(kuTotalVariants) && !Number.isNaN(kuStartPrice)) { %> <div class="klevuQuickSalePrice kuStartPrice"> <span class="klevuQuickPriceGreyText"><%=helper.translate("Starting at")%></span> <span><%=helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.startPrice))%></span> </div> <% } else if(!Number.isNaN(kuSalePrice) && !Number.isNaN(kuPrice) && (kuPrice > kuSalePrice)){ %> <span class="klevuQuickOrigPrice"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.price)) %> </span> <span class="klevuQuickSalePrice klevuQuickSpecialPrice"> <%=helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.salePrice))%> </span> <% } else if(!Number.isNaN(kuSalePrice)) { %> <span class="klevuQuickSalePrice"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.salePrice)) %> </span> <% } else if(!Number.isNaN(kuPrice)) { %> <span class="klevuQuickSalePrice"> <%= helper.processCurrency(dataLocal.currency,parseFloat(dataLocal.price)) %> </span> <% } %> </div> <%=helper.render('searchResultProductVATLabelQuick', scope, data, dataLocal) %> <% } %> <% } %> <%=helper.render('klevuQuickProductRating',scope,data,dataLocal) %> </div> </div> <div class="kuClearLeft"></div> </a> </li></script><!-- Popular searches template for Quick Search Results --><script type="template/klevu" id="kuQuickNoResultsPopularSearches"> <% if(data.noResultsFoundPopularSearches && data.noResultsFoundPopularSearches.length) { %> <div class="kuNoResultsPopularSearchesBlock"> <div class="kuNoResultsPopularSearchHeading"><span class="klevuQuickHeadingText"><%=helper.translate("Popular Searches")%></span></div> <div class="kuNoResultsPopularSearchTerms"> <ul> <% helper.each(data.noResultsFoundPopularSearches, function(key,term){ %> <% if(term && term.length) { %> <% var landingURLPrefix = klevu.getObjectPath(klevu.settings,"url.landing"); if(typeof landingURLPrefix === "undefined" || landingURLPrefix === ""){ landingURLPrefix = "/"; } %> <li class="kuNoResultsPopularSearchTerm" data-value="<%= term %>"> <a href="<%= landingURLPrefix %>?<%=klevu.getObjectPath(data,"settings.queryParam","q")%>=<%= term %>" title="<%= term %>"><%= term %></a> </li> <% } %> <% }); %> </ul> </div> </div> <% } %></script><script type="template/klevu" id="klevuQuickNoResultsFoundBanners"> <% var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; %> <% if(data.quickNoResultsFoundBanners && data.quickNoResultsFoundBanners.length) { klevu.each(data.quickNoResultsFoundBanners, function(index, banner){ %> <% var imageUrl = banner.bannerImageUrl; var imageAltText = klevu.dom.helpers.getBannerAltTagText(banner); if (screenWidth < 768 && !!banner.mobileBannerImageUrl) { imageUrl = banner.mobileBannerImageUrl; imageAltText = banner.mobileBannerAltTag; } %> <div class="klevu-no-results-banner-ad-quick"> <% if(!!banner.redirectUrl) { %> <a class="kuTrackBannerClick" target="_self" data-id="<%= banner.bannerRef %>" data-image="<%= imageUrl %>" data-redirect="<%= banner.redirectUrl %>" href="<%= banner.redirectUrl %>" alt="<%= imageAltText %>" title="<%= imageAltText %>" > <img src="<%= imageUrl %>" alt="<%= imageAltText %>" /> </a> <% } else { %> <span target="_self" data-id="<%= banner.bannerRef %>" data-image="<%= imageUrl %>" data-redirect="<%= banner.redirectUrl %>" href="<%= banner.redirectUrl %>" alt="<%= imageAltText %>" title="<%= imageAltText %>" > <img src="<%= imageUrl %>" alt="<%= imageAltText %>" /> </span> <% } %> </div> <% }); %> <div class="kuDividerLine"></div> <% } %></script><!-- Search result Product stock availability label template file--><script type="template/klevu" id="quickSearchResultProductStock"> <% var outOfStockCaption = klevu.search.modules.kmcInputs.base.getOutOfStockCaptionValue(); var productStockStatus = helper.translate(outOfStockCaption); %> <div class="kuClippedOne kuQuickCaptionStockOut"> <%= productStockStatus %> </div></script><!-- Search result Product VAT label template file--><script type="template/klevu" id="searchResultProductVATLabelQuick"> <% var caption = klevu.search.modules.kmcInputs.base.getVatCaption(); var vatCaption = helper.translate("(" + caption + ")"); %> <div class="kuCaptionVat"><%= vatCaption %></div></script><script type="template/klevu" id="klevuQuickTemplateFilters"> <% if(data.query[dataLocal].filters.length > 0 ) { %> <div class="kuFilters" role="navigation" data-position="left" aria-label="Product Filters" tabindex="0"> <% helper.each(data.query[dataLocal].filters,function(key,filter){ %> <% if(filter.type == "OPTIONS"){ %> <div class="kuFilterBox klevuFilter <%=(filter.multiselect)?'kuMulticheck':''%>" data-filter="<%=filter.key%>" <% if(filter.multiselect){ %> data-singleselect="false" <% } else { %> data-singleselect="true"<% } %>> <div class="kuFilterHead <%=(filter.isCollapsed) ? 'kuExpand' : 'kuCollapse'%>"> <% var filter_label = (filter.label=="klevu_price") ? "price" : filter.label; %> <%=helper.translate(filter_label)%> </div> <div data-optionCount="<%= filter.options.length %>" class="kuFilterNames <%= (filter.options.length < 5 ) ? 'kuFilterShowAll': '' %> <%=(filter.isCollapsed) ? 'kuFilterCollapse' : ''%>"> <ul> <% helper.each(filter.options,function(key,filterOption){ %> <li <% if(filterOption.selected ==true) { %> class="kuSelected"<% } %>> <a target="_self" href="#" title="<%=helper.escapeHTML(filterOption.name)%>" class="klevuFilterOption<% if(filterOption.selected ==true) { %> klevuFilterOptionActive<% } %>" data-value="<%=helper.escapeHTML(filterOption.value)%>" data-name="<%=helper.escapeHTML(filterOption.name)%>" > <span class="kuFilterIcon"></span> <span class="kufacet-text"><%=filterOption.name%></span> <% if(filterOption.selected ==true) { %> <span class="kuFilterCancel">X</span> <% } else { %> <span class="kuFilterTotal"><%=filterOption.count%></span> <% } %> </a> </li> <% }); %> </ul> <% if(filter.options.length > 5 ) { %> <div class="kuShowOpt" tabindex="-1"> <span class="kuFilterDot"></span><span class="kuFilterDot"></span><span class="kuFilterDot"></span> </div> <% } %> </div> </div> <% } else if(filter.type == "SLIDER") { %> <div class="kuFilterBox klevuFilter" data-filter="<%=filter.key%>"> <div class="kuFilterHead <%=(filter.isCollapsed) ? 'kuExpand' : 'kuCollapse'%>"> <% var filter_label = (filter.label=="klevu_price") ? "price" : filter.label; %> <%=helper.translate(filter_label)%> </div> <div class="kuFilterNames sliderFilterNames <%=(filter.isCollapsed) ? 'kuFilterCollapse' : ''%>"> <div class="kuPriceSlider klevuSliderFilter" data-query = "<%=dataLocal%>"> <div data-querykey = "<%=dataLocal%>" class="noUi-target noUi-ltr noUi-horizontal noUi-background kuSliderFilter kuPriceRangeSliderFilter<%=dataLocal%>"></div> </div> </div> </div> <% } else if (filter.type == "RATING") { %> <div class="kuFilterBox klevuFilter <%=(filter.multiselect)?'kuMulticheck':''%>" data-filter="<%=filter.key%>" <% if(filter.multiselect){ %> data-singleselect="false" <% } else { %> data-singleselect="true"<% } %>> <div class="kuFilterHead <%=(filter.isCollapsed) ? 'kuExpand' : 'kuCollapse'%>"> <%=helper.translate(filter.label)%> </div> <div data-optionCount="<%= filter.options.length %>" class="kuFilterNames <%= (filter.options.length < 5 ) ? 'kuFilterShowAll': '' %> <%=(filter.isCollapsed) ? 'kuFilterCollapse' : ''%>"> <ul> <% helper.each(filter.options,function(key,filterOption){ %> <li <% if(filterOption.selected ==true) { %> class="kuSelected"<% } %>> <a target="_self" href="#" title="<%=helper.escapeHTML(filterOption.name)%>" class="klevuFilterOption<% if(filterOption.selected ==true) { %> klevuFilterOptionActive<% } %>" data-value="<%=helper.escapeHTML(filterOption.value)%>" data-name="<%=helper.escapeHTML(filterOption.name)%>" > <span class="kuFilterIcon"></span> <span class="kufacet-text"> <div class="klevuFacetStars"> <div class="klevuFacetRating" style="width:<%=(20*Number(filterOption.name))%>%;"></div> </div> </span> <% if(filterOption.selected ==true) { %> <span class="kuFilterCancel">X</span> <% } else { %> <span class="kuFilterTotal"><%=filterOption.count%></span> <% } %> </a> </li> <% }); %> </ul> </div> </div> <% } else { %> <!-- Other Facets --> <% } %> <% }); %> <!-- <div class="kuFiltersFooter"> <a target="_self" href="javascript:void(0)" class="kuBtn kuFacetsSlideOut kuMobileFilterCloseBtn" role="button" tabindex="0" area-label=""><%=helper.translate("Close")%></a> </div> --> </div> <% } %></script><script type="template/klevu" id="klevuQuickOtherContent"> <% if(data.query.cmsCompressed) { %> <% if(data.query.cmsCompressed.result.length > 0 ) { %> <div ku-container data-container-id="ku_quick_main_content_container" data-container-role="content" data-content="cmsCompressed" > <section ku-container data-container-id="ku_quick_main_content_left" data-container-position="left" data-container-role="left"> <div ku-block data-block-id="ku_quick_left_facets"> <% var isQuickFiltersOnLeft = klevu.search.modules.kmcInputs.base.isQuickFacetedLayoutFilterOnLeft(); %> <% if(isQuickFiltersOnLeft === true && data.query.cmsCompressed.filters && data.query.cmsCompressed.filters.length > 0) { %> <div data-section="cmsCompressed" class="klevuMeta"> <%=helper.render('klevuQuickTemplateFilters',scope,data,"cmsCompressed") %> </div> <% } %> </div> <div ku-block data-block-id="ku_quick_left_call_outs"></div> <div ku-block data-block-id="ku_quick_left_banner"></div> </section> <section ku-container data-container-id="ku_quick_main_content_center" data-container-position="center" data-container-role="center"> <header ku-block data-block-id="ku_quick_result_header"></header> <div ku-block data-block-id="ku_quick_result_items"> <div class="klevuResultsBlock"> <%=helper.render('klevuQuickProductBlockTitleHeader',scope,data) %> <div class="klevuQuickSearchResults klevuMeta cmsCompressed" data-section="cmsCompressed" id="cmsCompressed"> <ul> <% helper.each(data.query.cmsCompressed.result,function(key,product){ %> <%=helper.render('klevuQuickTemplateContentBlock',scope,data,product) %> <% }); %> <%=helper.render('klevuQuickTemplateInfiniteScrollDown',scope,data) %> </ul> </div> </div> </div> <div ku-block data-block-id="ku_quick_other_items"> <div data-section="cmsCompressed" class="klevuMeta"> <%=helper.render('klevuQuickTemplatePagination',scope,data,"cmsCompressed") %> </div> </div> <footer ku-block data-block-id="ku_quick_result_footer"></footer> </section> <section ku-container data-container-id="ku_quick_main_content_right" data-container-position="right" data-container-role="right"> <div ku-block data-block-id="ku_quick_right_facets"> <% var isQuickFiltersOnLeft = klevu.search.modules.kmcInputs.base.isQuickFacetedLayoutFilterOnLeft(); %> <% if(isQuickFiltersOnLeft === false && data.query.cmsCompressed.filters && data.query.cmsCompressed.filters.length > 0) { %> <div data-section="cmsCompressed" class="klevuMeta"> <%=helper.render('klevuQuickTemplateFilters',scope,data,"cmsCompressed") %> </div> <% } %> </div> <div ku-block data-block-id="ku_quick_right_call_outs"></div> <div ku-block data-block-id="ku_quick_right_banner"></div> </section> </div> <% } else { %> <% } %> <% } else { %> <% } %></script><script type="template/klevu" id="klevuQuickTemplateContentBlock"> <% var updatedProductName = dataLocal.name; if(klevu.search.modules.kmcInputs.base.getSkuOnPageEnableValue()) { if(klevu.dom.helpers.cleanUpSku(dataLocal.sku)) { updatedProductName += klevu.dom.helpers.cleanUpSku(dataLocal.sku); } } %> <li ku-product-block class="klevuProduct" data-id="<%=dataLocal.id%>"> <a target="_self" href="<%=dataLocal.url%>" data-id="<%=dataLocal.id%>" class="klevuQuickProductInnerBlock trackProductClick"> <div class="klevuProductItemTop"> <div class="klevuQuickImgWrap"> <div class="klevuQuickDiscountBadge"><strong><%=dataLocal.stickyLabelHead%></strong></div> <img src="<%=dataLocal.image%>" origin="<%=dataLocal.image%>" onerror="klevu.dom.helpers.cleanUpProductImage(this)" alt="<%=updatedProductName%>" /> </div> </div> <div class="klevuProductItemBottom"> <div class="klevuQuickProductDescBlock"> <div title="<%= updatedProductName %>" class="klevuQuickProductName kuClippedOne"> <%= updatedProductName %> </div> <div class="klevu-desc-l2 kuClippedOne"> <%=dataLocal.shortDesc%> </div> <div class="klevuQuickProductDesc kuClippedOne"> <div class="klevuSpectxt"><%=dataLocal.summaryAttribute%><span><%=dataLocal.stickyLabelText%></span></div> </div> <%=helper.render('klevuQuickProductRating',scope,data,dataLocal) %> </div> </div> <div class="kuClearLeft"></div> </a> </li></script><script type="template/klevu" id="klevuQuickTemplateTabResults"> <% var isCmsEnabled = klevu.search.modules.kmcInputs.base.getCmsEnabledValue(); var hasAnyResultFound = false; helper.each(data.query,function(key,query) { if(query.tab == true) { if(helper.hasResults(data,query.id)) { var results = data.query[query.id].meta.totalResultsFound; if(results > 0){ hasAnyResultFound = true; } } } }); %> <div class="kuContainer"> <div class="kuTabs" role="tablist" style="display:<%= isCmsEnabled && hasAnyResultFound ? 'block' : 'none' %>"> <% var selectedTab = false; %> <% helper.each(data.query,function(key,query){ %> <% if(query.tab == true) { %> <% if(helper.hasResults(data,query.id)) { %> <a target="_self" class="kuTab<% if(!selectedTab){ selectedTab = true; %> kuTabSelected<% } %>" data-section="<%=query.id%>" role="tab" tabindex="0" aria-selected="" area-label="Products tab"> <%=helper.translate(query.tabText,data.query[query.id].meta.totalResultsFound)%> </a> <% } else { %> <a target="_self" class="kuTabDeactive" data-section="<%=query.id%>" role="tab" tabindex="0" aria-selected="" area-label="Products tab"> <%=helper.translate(query.tabText,0)%> </a> <% } %> <% } %> <% }); %> </div> </div></script><script type="template/klevu" id="klevuQuickTemplateSortBy"> <% var currentSort = klevu.getObjectPath(data, "modules.quickFacetedLayoutSort.currentSort"); %> <div class="kuDropdown kuDropSortBy kuQuickFacetedLayoutSort" role="listbox"> <div class="kuDropdownOptions"> <div title="<%= helper.translate("Relevance") %>" class="kuDropOption kuSort kuQuickRelSort <%= (currentSort === 'RELEVANCE') ? 'kuActiveSort' : '' %>" data-value="RELEVANCE" role="option"></div> <div title="<%= helper.translate("Price: Low to high") %>" class="kuDropOption kuSort kuQuickLTHSort <%= (currentSort === 'PRICE_ASC') ? 'kuActiveSort' : '' %>" data-value="PRICE_ASC" role="option"></div> <div title="<%= helper.translate("Price: High to low") %>" class="kuDropOption kuSort kuQuickHTLSort <%= (currentSort === 'PRICE_DESC') ? 'kuActiveSort' : '' %>" data-value="PRICE_DESC" role="option"></div> </div> </div></script><script type="template/klevu" id="kuTemplateQuickResultsViewSwitch"> <div class="kuQuickResultsViewSwitchContainer"> <a title="<%= helper.translate("Grid View") %>" class="kuViewSwitch kuGridViewBtn" data-value="grid"> <span class="icon-gridview"></span> </a> <a title="<%= helper.translate("List View") %>" class="kuViewSwitch kuListViewBtn" data-value="list"> <span class="icon-listview"></span> </a> </div></script><!-- Quick search add to cart button template--><script type="template/klevu" id="quickSearchProductAddToCart"> <% if(dataLocal.inStock != "no") { %> <% var addToCartCaption = klevu.search.modules.kmcInputs.base.getAddToCartButtonCaption(); %> <% if(addToCartCaption && addToCartCaption.indexOf("<img") !== -1) { %> <div class="kuAddtocart klevuQuickAddtoCart " data-id="<%=dataLocal.id%>"> <a target="_self" href="javascript:void(0)" class="kuBtn klevuQuickCartBtn" role="button" tabindex="0" area-label="Add to cart"><%= addToCartCaption %></a> </div> <% } else { %> <div class="kuAddtocart klevuQuickAddtoCart" data-id="<%=dataLocal.id%>" > <button class="kuBtn kuBtnDark klevuQuickCartBtn"><%= helper.translate(addToCartCaption) %></button> </div> <% } %> <% } %></script><script type="template/klevu" id="klevuQuickTemplateInfiniteScrollDown"> <li style="width:100% !important" ku-product-block class="klevuProduct klevuProductLoadMore"> <div class="kuInfiniteScrollContainer"> <button class="kuLoadMoreBtn">Load More</button> </div> </li></script><script type="template/klevu" id="klevuQuickImageSearchContent"> <div class="klevu-fluid kuQuickSearchImageUploadContainer kuPreventDocumentClick"> <div id="klevuSearchingArea" class="klevuQuickSearchingArea"> <header ku-container data-container-id="ku_quick_main_header_container" data-container-role="header"> <section ku-block data-block-id="ku_quick_main_header_sub_panel"> <span class="kuQuickUploadHeaderTitle"> <%= helper.translate("Visual Image Search") %> </span> </section> </header> <div ku-container data-container-id="ku_quick_main_container" data-container-role="main"> <div ku-container data-container-id="ku_quick_main_content_container" data-container-role="content" > <section ku-container data-container-id="ku_quick_main_content_left" data-container-position="left" data-container-role="left"></section> <section ku-container data-container-id="ku_quick_main_content_center" data-container-position="center" data-container-role="center"> <div ku-block data-block-id="ku_quick_result_items"> <div class="klevuResultsBlock"> <form class="kuQuickImageSearchForm"> <input type="file" id="kuImageSearchFile" class="kuImageSearchFile" name="filename"> </form> <button class="kuQuickUploadImageBtn"> <span class="kuUploadText upload"> <%= helper.translate("Upload a photo") %> </span> </button> <div class="kuImageUploadErrorMsgContainer"></div> </div> </div> </section> <section ku-container data-container-id="ku_quick_main_content_right" data-container-position="right" data-container-role="right"></section> </div> </div> <footer ku-container data-container-id="ku_quick_main_footer_container" data-container-role="footer"> <section ku-block data-block-id="ku_quick_main_footer_sub_panel"> <div class="kuImgSearchPrivacyNote"> <p class="kuImgSearchPrivacyNoteInfo"> <%= helper.translate("Your privacy is of utmost importance to us. Any images uploaded will only be used to provide relevant results and improve the general search experience. However, we recommend not uploading images containing people or sensitive information.") %> </p> </div> <div class="kuImgSearchHowItWorks"> <div class="accordion"> <input type="checkbox" id="<%= data.imageUploadTemplateId %>"> <label class="accordion-label" for="<%= data.imageUploadTemplateId %>"> <%= helper.translate("How does this work?") %> </label> <div class="accordion-content"> <span class="img1"></span> <span class="img2"></span> <p class="kuUploadWorksContent"> <%= helper.translate("After you take or upload a photo, we'll analyse it and recommend the closest matches.") %> </p> </div> </div> </div> </section> </footer> </div> </div></script><script type="template/klevu" id="klevuQuickProductRating"> <% if( typeof dataLocal.rating != "undefined" && dataLocal.rating !== "" && dataLocal.rating > 0 ) { %> <div class="klevu-stars-small-l2"> <div class="klevu-rating-l2" style="width:<%=(20*Number(dataLocal.rating))%>%;"></div> </div> <%=helper.render('klevuQuickProductRatingCount',scope,data,dataLocal) %> <% } %></script><script type="template/klevu" id="klevuQuickProductRatingCount"> <% if( typeof dataLocal.ratingCount != "undefined" && dataLocal.ratingCount !== "" && dataLocal.ratingCount > 0 ) { %> <div class="klevuRatingCount">(<%=dataLocal.ratingCount%>)</div> <% } %></script></div><div id="596c1e52-40ff-0e60-19c2-0bca9d97ec1f" class="klevu-fluid klevuTarget kuQuickSearchAutoCompleteLayout kuMobileDeviceEnabled"></div></body></html>
