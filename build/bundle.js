var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function i(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function o(t,e,n,i){return t[1]&&i?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](i(e))):n.ctx}function l(t,e,n,i,s,r,l){const a=function(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let i=0;i<n;i+=1)t[i]=e.dirty[i]|s[i];return t}return e.dirty|s}return e.dirty}(e,i,s,r);if(a){const s=o(e,n,i,l);t.p(s,a)}}let a,c=!1;function u(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function d(t,e){c?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const r=u(1,s+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;i[t]=n[r]+1;const o=r+1;n[o]=t,s=Math.max(o,s)}const r=[],o=[];let l=e.length-1;for(let t=n[s]+1;0!=t;t=i[t-1]){for(r.push(e[t-1]);l>=t;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);r.reverse(),o.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<o.length;e++){for(;n<r.length&&o[e].claim_order>=r[n].claim_order;)n++;const i=n<r.length?r[n]:null;t.insertBefore(o[e],i)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function h(t,e,n){c&&!n?d(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function v(){return g(" ")}function y(){return g("")}function b(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e){t.value=null==e?"":e}function _(t,e,n){t.classList[n?"add":"remove"](e)}function C(t){a=t}function k(){const t=function(){if(!a)throw new Error("Function called outside component initialization");return a}();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);i.slice().forEach((e=>{e.call(t,s)}))}}}const E=[],I=[],T=[],M=[],j=Promise.resolve();let A=!1;function N(t){T.push(t)}function P(t){M.push(t)}let S=!1;const H=new Set;function R(){if(!S){S=!0;do{for(let t=0;t<E.length;t+=1){const e=E[t];C(e),B(e.$$)}for(C(null),E.length=0;I.length;)I.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];H.has(e)||(H.add(e),e())}T.length=0}while(E.length);for(;M.length;)M.pop()();A=!1,S=!1,H.clear()}}function B(t){if(null!==t.fragment){t.update(),i(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const W=new Set;let O;function U(t,e){t&&t.i&&(W.delete(t),t.i(e))}function D(t,e,n,i){if(t&&t.o){if(W.has(t))return;W.add(t),O.c.push((()=>{W.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}function L(t,e,n){const i=t.$$.props[e];void 0!==i&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function z(t){t&&t.c()}function F(t,n,r,o){const{fragment:l,on_mount:a,on_destroy:c,after_update:u}=t.$$;l&&l.m(n,r),o||N((()=>{const n=a.map(e).filter(s);c?c.push(...n):i(n),t.$$.on_mount=[]})),u.forEach(N)}function V(t,e){const n=t.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Y(t,e){-1===t.$$.dirty[0]&&(E.push(t),A||(A=!0,j.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,s,r,o,l,u,d=[-1]){const h=a;C(e);const p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:s.context||[]),callbacks:n(),dirty:d,skip_bound:!1};let m=!1;if(p.ctx=r?r(e,s.props||{},((t,n,...i)=>{const s=i.length?i[0]:n;return p.ctx&&l(p.ctx[t],p.ctx[t]=s)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](s),m&&Y(e,t)),n})):[],p.update(),m=!0,i(p.before_update),p.fragment=!!o&&o(p.ctx),s.target){if(s.hydrate){c=!0;const t=function(t){return Array.from(t.childNodes)}(s.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();s.intro&&U(e.$$.fragment),F(e,s.target,s.anchor,s.customElement),c=!1,R()}C(h)}class q{$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}
/*! pym.js - v1.3.2 - 2018-02-13 */
var G,J=(function(t){!function(e){t.exports?t.exports=e():window.pym=e.call(this)}((function(){var t="xPYMx",e={},n=function(t){var e=document.createEvent("Event");e.initEvent("pym:"+t,!0,!0),document.dispatchEvent(e)},i=function(t){var e=new RegExp("[\\?&]"+t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]")+"=([^&#]*)").exec(location.search);return null===e?"":decodeURIComponent(e[1].replace(/\+/g," "))},s=function(t,e){if(("*"===e.xdomain||t.origin.match(new RegExp(e.xdomain+"$")))&&"string"==typeof t.data)return!0},r=function(e,n,i){return["pym",e,n,i].join(t)},o=Date.now||function(){return(new Date).getTime()},l=function(){for(var t=e.autoInitInstances.length-1;t>=0;t--){var n=e.autoInitInstances[t];n.el.getElementsByTagName("iframe").length&&n.el.getElementsByTagName("iframe")[0].contentWindow||e.autoInitInstances.splice(t,1)}};return e.autoInitInstances=[],e.autoInit=function(t){var i=document.querySelectorAll("[data-pym-src]:not([data-pym-auto-initialized])"),s=i.length;l();for(var r=0;r<s;++r){var o=i[r];o.setAttribute("data-pym-auto-initialized",""),""===o.id&&(o.id="pym-"+r+"-"+Math.random().toString(36).substr(2,5));var a=o.getAttribute("data-pym-src"),c={xdomain:"string",title:"string",name:"string",id:"string",sandbox:"string",allowfullscreen:"boolean",parenturlparam:"string",parenturlvalue:"string",optionalparams:"boolean",trackscroll:"boolean",scrollwait:"number"},u={};for(var d in c)if(null!==o.getAttribute("data-pym-"+d))switch(c[d]){case"boolean":u[d]=!("false"===o.getAttribute("data-pym-"+d));break;case"string":u[d]=o.getAttribute("data-pym-"+d);break;case"number":var h=Number(o.getAttribute("data-pym-"+d));isNaN(h)||(u[d]=h);break;default:console.err("unrecognized attribute type")}var f=new e.Parent(o.id,a,u);e.autoInitInstances.push(f)}return t||n("pym-initialized"),e.autoInitInstances},e.Parent=function(e,n,i){for(var a in this.id=e,this.url=n,this.el=document.getElementById(e),this.iframe=null,this.settings={xdomain:"*",optionalparams:!0,parenturlparam:"parentUrl",parenturlvalue:window.location.href,trackscroll:!1,scrollwait:100},this.messageRegex=function(e){return new RegExp("^"+["pym",e,"(\\S+)","(.*)"].join(t)+"$")}(this.id),this.messageHandlers={},i=i||{},this._constructIframe=function(){var t=this.el.offsetWidth.toString();this.iframe=document.createElement("iframe");var e="",n=this.url.indexOf("#");for(n>-1&&(e=this.url.substring(n,this.url.length),this.url=this.url.substring(0,n)),this.url.indexOf("?")<0?this.url+="?":this.url+="&",this.iframe.src=this.url+"initialWidth="+t+"&childId="+this.id,this.settings.optionalparams&&(this.iframe.src+="&parentTitle="+encodeURIComponent(document.title),this.iframe.src+="&"+this.settings.parenturlparam+"="+encodeURIComponent(this.settings.parenturlvalue)),this.iframe.src+=e,this.iframe.setAttribute("width","100%"),this.iframe.setAttribute("scrolling","no"),this.iframe.setAttribute("marginheight","0"),this.iframe.setAttribute("frameborder","0"),this.settings.title&&this.iframe.setAttribute("title",this.settings.title),void 0!==this.settings.allowfullscreen&&!1!==this.settings.allowfullscreen&&this.iframe.setAttribute("allowfullscreen",""),void 0!==this.settings.sandbox&&"string"==typeof this.settings.sandbox&&this.iframe.setAttribute("sandbox",this.settings.sandbox),this.settings.id&&(document.getElementById(this.settings.id)||this.iframe.setAttribute("id",this.settings.id)),this.settings.name&&this.iframe.setAttribute("name",this.settings.name);this.el.firstChild;)this.el.removeChild(this.el.firstChild);this.el.appendChild(this.iframe),window.addEventListener("resize",this._onResize),this.settings.trackscroll&&window.addEventListener("scroll",this._throttleOnScroll)},this._onResize=function(){this.sendWidth(),this.settings.trackscroll&&this.sendViewportAndIFramePosition()}.bind(this),this._onScroll=function(){this.sendViewportAndIFramePosition()}.bind(this),this._fire=function(t,e){if(t in this.messageHandlers)for(var n=0;n<this.messageHandlers[t].length;n++)this.messageHandlers[t][n].call(this,e)},this.remove=function(){window.removeEventListener("message",this._processMessage),window.removeEventListener("resize",this._onResize),this.el.removeChild(this.iframe),l()},this._processMessage=function(t){if(s(t,this.settings)&&"string"==typeof t.data){var e=t.data.match(this.messageRegex);if(!e||3!==e.length)return!1;var n=e[1],i=e[2];this._fire(n,i)}}.bind(this),this._onHeightMessage=function(t){var e=parseInt(t);this.iframe.setAttribute("height",e+"px")},this._onNavigateToMessage=function(t){(function(t){if(t.match(/^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/gi))return!0})(t)&&(document.location.href=t)},this._onScrollToChildPosMessage=function(t){var e=document.getElementById(this.id).getBoundingClientRect().top+window.pageYOffset+parseInt(t);window.scrollTo(0,e)},this.onMessage=function(t,e){t in this.messageHandlers||(this.messageHandlers[t]=[]),this.messageHandlers[t].push(e)},this.sendMessage=function(t,e){this.el.getElementsByTagName("iframe").length&&(this.el.getElementsByTagName("iframe")[0].contentWindow?this.el.getElementsByTagName("iframe")[0].contentWindow.postMessage(r(this.id,t,e),"*"):this.remove())},this.sendWidth=function(){var t=this.el.offsetWidth.toString();this.sendMessage("width",t)},this.sendViewportAndIFramePosition=function(){var t=this.iframe.getBoundingClientRect(),e=(window.innerWidth||document.documentElement.clientWidth)+" "+(window.innerHeight||document.documentElement.clientHeight);e+=" "+t.top+" "+t.left,e+=" "+t.bottom+" "+t.right,this.sendMessage("viewport-iframe-position",e)},i)this.settings[a]=i[a];return this._throttleOnScroll=function(t,e,n){var i,s,r,l=null,a=0;n||(n={});var c=function(){a=!1===n.leading?0:o(),l=null,r=t.apply(i,s),l||(i=s=null)};return function(){var u=o();a||!1!==n.leading||(a=u);var d=e-(u-a);return i=this,s=arguments,d<=0||d>e?(l&&(clearTimeout(l),l=null),a=u,r=t.apply(i,s),l||(i=s=null)):l||!1===n.trailing||(l=setTimeout(c,d)),r}}(this._onScroll.bind(this),this.settings.scrollwait),this.onMessage("height",this._onHeightMessage),this.onMessage("navigateTo",this._onNavigateToMessage),this.onMessage("scrollToChildPos",this._onScrollToChildPosMessage),this.onMessage("parentPositionInfo",this.sendViewportAndIFramePosition),window.addEventListener("message",this._processMessage,!1),this._constructIframe(),this},e.Child=function(t){for(var e in this.parentWidth=null,this.id=null,this.parentTitle=null,this.parentUrl=null,this.settings={renderCallback:null,xdomain:"*",polling:0,parenturlparam:"parentUrl"},this.timerId=null,this.messageRegex=null,this.messageHandlers={},t=t||{},this.onMessage=function(t,e){t in this.messageHandlers||(this.messageHandlers[t]=[]),this.messageHandlers[t].push(e)},this._fire=function(t,e){if(t in this.messageHandlers)for(var n=0;n<this.messageHandlers[t].length;n++)this.messageHandlers[t][n].call(this,e)},this._processMessage=function(t){if(s(t,this.settings)&&"string"==typeof t.data){var e=t.data.match(this.messageRegex);if(e&&3===e.length){var n=e[1],i=e[2];this._fire(n,i)}}}.bind(this),this._onWidthMessage=function(t){var e=parseInt(t);e!==this.parentWidth&&(this.parentWidth=e,this.settings.renderCallback&&this.settings.renderCallback(e),this.sendHeight())},this.sendMessage=function(t,e){window.parent.postMessage(r(this.id,t,e),"*")},this.sendHeight=function(){var t=document.getElementsByTagName("body")[0].offsetHeight.toString();return this.sendMessage("height",t),t}.bind(this),this.getParentPositionInfo=function(){this.sendMessage("parentPositionInfo")},this.scrollParentTo=function(t){this.sendMessage("navigateTo","#"+t)},this.navigateParentTo=function(t){this.sendMessage("navigateTo",t)},this.scrollParentToChildEl=function(t){var e=document.getElementById(t).getBoundingClientRect().top+window.pageYOffset;this.scrollParentToChildPos(e)},this.scrollParentToChildPos=function(t){this.sendMessage("scrollToChildPos",t.toString())},this.remove=function(){window.removeEventListener("message",this._processMessage),this.timerId&&clearInterval(this.timerId)},t)this.settings[e]=t[e];this.id=i("childId")||t.id,this.messageRegex=new RegExp("^pymxPYMx"+this.id+"xPYMx(\\S+)xPYMx(.*)$");var o=parseInt(i("initialWidth"));return this.parentUrl=i(this.settings.parenturlparam),this.parentTitle=i("parentTitle"),this.onMessage("width",this._onWidthMessage),window.addEventListener("message",this._processMessage,!1),this.settings.renderCallback&&this.settings.renderCallback(o),this.sendHeight(),this.settings.polling&&(this.timerId=window.setInterval(this.sendHeight,this.settings.polling)),function(t){var e,i=document.getElementsByTagName("html")[0],s=i.className;try{e=window.self!==window.top?"embedded":"not-embedded"}catch(t){e="embedded"}s.indexOf(e)<0&&(i.className=s?s+" "+e:e,t&&t(e),n("marked-embedded"))}(t.onMarkedEmbeddedStatus),this},"undefined"!=typeof document&&e.autoInit(!0),e}))}(G={exports:{}},G.exports),G.exports);const K="https://bothness.github.io/embed-profile/#/",Q="https://raw.githubusercontent.com/ONSvisual/census-data/main/csv/lists/places_2020.csv",X={population:{label:"Population",options:{}},density:{label:"Density",options:{}},agemed:{label:"Median age",options:{}},age10yr:{label:"Age profile",options:{}},economic:{label:"Economic activity",options:{}},travel:{label:"Travel to work",options:{}}},tt={ew:{name:"",pl:""},wd:{name:"Ward",pl:"Wards"},lad:{name:"District",pl:"Districts"},rgn:{name:"Region",pl:"Regions"},ctry:{name:"Country",pl:"Countries"}};var et={},nt={};function it(t){return new Function("d","return {"+t.map((function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'})).join(",")+"}")}function st(t){var e=Object.create(null),n=[];return t.forEach((function(t){for(var i in t)i in e||n.push(e[i]=i)})),n}function rt(t,e){var n=t+"",i=n.length;return i<e?new Array(e-i+1).join(0)+n:n}function ot(t){var e,n=t.getUTCHours(),i=t.getUTCMinutes(),s=t.getUTCSeconds(),r=t.getUTCMilliseconds();return isNaN(t)?"Invalid Date":((e=t.getUTCFullYear())<0?"-"+rt(-e,6):e>9999?"+"+rt(e,6):rt(e,4))+"-"+rt(t.getUTCMonth()+1,2)+"-"+rt(t.getUTCDate(),2)+(r?"T"+rt(n,2)+":"+rt(i,2)+":"+rt(s,2)+"."+rt(r,3)+"Z":s?"T"+rt(n,2)+":"+rt(i,2)+":"+rt(s,2)+"Z":i||n?"T"+rt(n,2)+":"+rt(i,2)+"Z":"")}var lt=function(t){var e=new RegExp('["'+t+"\n\r]"),n=t.charCodeAt(0);function i(t,e){var i,s=[],r=t.length,o=0,l=0,a=r<=0,c=!1;function u(){if(a)return nt;if(c)return c=!1,et;var e,i,s=o;if(34===t.charCodeAt(s)){for(;o++<r&&34!==t.charCodeAt(o)||34===t.charCodeAt(++o););return(e=o)>=r?a=!0:10===(i=t.charCodeAt(o++))?c=!0:13===i&&(c=!0,10===t.charCodeAt(o)&&++o),t.slice(s+1,e-1).replace(/""/g,'"')}for(;o<r;){if(10===(i=t.charCodeAt(e=o++)))c=!0;else if(13===i)c=!0,10===t.charCodeAt(o)&&++o;else if(i!==n)continue;return t.slice(s,e)}return a=!0,t.slice(s,r)}for(10===t.charCodeAt(r-1)&&--r,13===t.charCodeAt(r-1)&&--r;(i=u())!==nt;){for(var d=[];i!==et&&i!==nt;)d.push(i),i=u();e&&null==(d=e(d,l++))||s.push(d)}return s}function s(e,n){return e.map((function(e){return n.map((function(t){return o(e[t])})).join(t)}))}function r(e){return e.map(o).join(t)}function o(t){return null==t?"":t instanceof Date?ot(t):e.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:function(t,e){var n,s,r=i(t,(function(t,i){if(n)return n(t,i-1);s=t,n=e?function(t,e){var n=it(t);return function(i,s){return e(n(i),s,t)}}(t,e):it(t)}));return r.columns=s||[],r},parseRows:i,format:function(e,n){return null==n&&(n=st(e)),[n.map(o).join(t)].concat(s(e,n)).join("\n")},formatBody:function(t,e){return null==e&&(e=st(t)),s(t,e).join("\n")},formatRows:function(t){return t.map(r).join("\n")},formatRow:r,formatValue:o}}(",").parse;function at(t){for(var e in t){var n,i,s=t[e].trim();if(s)if("true"===s)s=!0;else if("false"===s)s=!1;else if("NaN"===s)s=NaN;else if(isNaN(n=+s)){if(!(i=s.match(/^([-+]\d{2})?\d{4}(-\d{2}(-\d{2})?)?(T\d{2}:\d{2}(:\d{2}(\.\d{3})?)?(Z|[-+]\d{2}:\d{2})?)?$/)))continue;ct&&i[4]&&!i[7]&&(s=s.replace(/-/g,"/").replace(/T/," ")),s=new Date(s)}else s=n;else s=null;t[e]=s}return t}const ct=new Date("2019-01-01T00:00").getHours()||new Date("2019-07-01T00:00").getHours();function ut(t,e,n){const i=t.slice();return i[32]=e[n],i[35]=e,i[34]=n,i}function dt(t,e,n){const i=t.slice();return i[32]=e[n],i[33]=e,i[34]=n,i}function ht(t){let e,n,i,s,r,o,l,a=(t[0]?t[0]:"Select one")+"";return{c(){e=m("a"),n=m("span"),i=g(a),s=v(),r=m("span"),r.textContent=" ",w(n,"class","svelte-1r1xd93"),w(r,"class","button svelte-1r1xd93"),_(r,"search",t[3]),_(r,"down",!t[3]),w(e,"id","toggle"),w(e,"class","svelte-1r1xd93")},m(a,c){h(a,e,c),d(e,n),d(n,i),d(e,s),d(e,r),o||(l=b(e,"click",t[12]),o=!0)},p(t,e){1&e[0]&&a!==(a=(t[0]?t[0]:"Select one")+"")&&$(i,a),8&e[0]&&_(r,"search",t[3]),8&e[0]&&_(r,"down",!t[3])},d(t){t&&f(e),o=!1,l()}}}function ft(t){let e,n,s,r,o,l,a,c,u=t[6][t[1]]+"",p=t[2]&&pt(t);return{c(){e=m("a"),n=m("span"),s=g(u),r=v(),p&&p.c(),o=v(),l=m("span"),l.textContent=" ",w(n,"class","selection svelte-1r1xd93"),w(l,"class","button close svelte-1r1xd93"),w(e,"id","toggle"),w(e,"class","selected svelte-1r1xd93")},m(i,u){h(i,e,u),d(e,n),d(n,s),d(n,r),p&&p.m(n,null),d(e,o),d(e,l),a||(c=[b(l,"click",t[14]),b(e,"click",t[12])],a=!0)},p(t,e){66&e[0]&&u!==(u=t[6][t[1]]+"")&&$(s,u),t[2]?p?p.p(t,e):(p=pt(t),p.c(),p.m(n,null)):p&&(p.d(1),p=null)},d(t){t&&f(e),p&&p.d(),a=!1,i(c)}}}function pt(t){let e,n,i=t[6][t[2]]+"";return{c(){e=m("small"),n=g(i),w(e,"class","svelte-1r1xd93")},m(t,i){h(t,e,i),d(e,n)},p(t,e){68&e[0]&&i!==(i=t[6][t[2]]+"")&&$(n,i)},d(t){t&&f(e)}}}function mt(t){let e,n,s,r,o,l;function a(t,e){return t[4].length<3?bt:t[9][0]&&t[2]?yt:t[9][0]?vt:gt}let c=a(t),u=c(t);return{c(){var t,i,o;e=m("div"),n=m("input"),s=v(),r=m("ul"),u.c(),w(n,"type","text"),w(n,"placeholder",""),w(n,"autocomplete","false"),w(n,"class","svelte-1r1xd93"),w(r,"class","svelte-1r1xd93"),w(e,"id","dropdown"),t="top",i="0",e.style.setProperty(t,i,o?"important":""),w(e,"class","svelte-1r1xd93")},m(i,a){h(i,e,a),d(e,n),x(n,t[4]),t[23](n),d(e,s),d(e,r),u.m(r,null),t[30](e),o||(l=[b(n,"input",t[22]),b(n,"keyup",t[16])],o=!0)},p(t,e){16&e[0]&&n.value!==t[4]&&x(n,t[4]),c===(c=a(t))&&u?u.p(t,e):(u.d(1),u=c(t),u&&(u.c(),u.m(r,null)))},d(n){n&&f(e),t[23](null),u.d(),t[30](null),o=!1,i(l)}}}function gt(e){let n;return{c(){n=m("li"),n.textContent="No results",w(n,"class","svelte-1r1xd93")},m(t,e){h(t,n,e)},p:t,d(t){t&&f(n)}}}function vt(t){let e,n=t[9],i=[];for(let e=0;e<n.length;e+=1)i[e]=wt(ut(t,n,e));return{c(){for(let t=0;t<i.length;t+=1)i[t].c();e=y()},m(t,n){for(let e=0;e<i.length;e+=1)i[e].m(t,n);h(t,e,n)},p(t,s){if(11010&s[0]){let r;for(n=t[9],r=0;r<n.length;r+=1){const o=ut(t,n,r);i[r]?i[r].p(o,s):(i[r]=wt(o),i[r].c(),i[r].m(e.parentNode,e))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},d(t){p(i,t),t&&f(e)}}}function yt(t){let e,n=t[9],i=[];for(let e=0;e<n.length;e+=1)i[e]=$t(dt(t,n,e));return{c(){for(let t=0;t<i.length;t+=1)i[t].c();e=y()},m(t,n){for(let e=0;e<i.length;e+=1)i[e].m(t,n);h(t,e,n)},p(t,s){if(11014&s[0]){let r;for(n=t[9],r=0;r<n.length;r+=1){const o=dt(t,n,r);i[r]?i[r].p(o,s):(i[r]=$t(o),i[r].c(),i[r].m(e.parentNode,e))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},d(t){p(i,t),t&&f(e)}}}function bt(e){let n;return{c(){n=m("li"),n.textContent="Type a name...",w(n,"class","svelte-1r1xd93")},m(t,e){h(t,n,e)},p:t,d(t){t&&f(n)}}}function wt(t){let e,n,s,r,o,l=t[32][t[1]]+"",a=t[34];function c(){return t[27](t[32])}function u(){return t[28](t[34])}const p=()=>t[29](e,a),y=()=>t[29](null,a);return{c(){e=m("li"),n=g(l),s=v(),w(e,"class","svelte-1r1xd93"),_(e,"highlight",t[8]==t[34])},m(t,i){h(t,e,i),d(e,n),d(e,s),p(),r||(o=[b(e,"click",c),b(e,"mouseover",u)],r=!0)},p(i,s){t=i,514&s[0]&&l!==(l=t[32][t[1]]+"")&&$(n,l),a!==t[34]&&(y(),a=t[34],p()),256&s[0]&&_(e,"highlight",t[8]==t[34])},d(t){t&&f(e),y(),r=!1,i(o)}}}function $t(t){let e,n,s,r,o,l,a,c,u=t[32][t[1]]+"",p=t[32][t[2]]+"",y=t[34];function x(){return t[24](t[32])}function C(){return t[25](t[34])}const k=()=>t[26](e,y),E=()=>t[26](null,y);return{c(){e=m("li"),n=g(u),s=v(),r=m("small"),o=g(p),l=v(),w(r,"class","svelte-1r1xd93"),w(e,"class","svelte-1r1xd93"),_(e,"highlight",t[8]==t[34])},m(t,i){h(t,e,i),d(e,n),d(e,s),d(e,r),d(r,o),d(e,l),k(),a||(c=[b(e,"click",x),b(e,"mouseover",C)],a=!0)},p(i,s){t=i,514&s[0]&&u!==(u=t[32][t[1]]+"")&&$(n,u),516&s[0]&&p!==(p=t[32][t[2]]+"")&&$(o,p),y!==t[34]&&(E(),y=t[34],k()),256&s[0]&&_(e,"highlight",t[8]==t[34])},d(t){t&&f(e),E(),a=!1,i(c)}}}function xt(e){let n,i,s,r;function o(t,e){return t[6]&&!t[3]?ft:ht}let l=o(e),a=l(e),c=e[7]&&mt(e);return{c(){n=m("div"),a.c(),i=v(),c&&c.c(),w(n,"id","select"),w(n,"class","svelte-1r1xd93"),_(n,"active",e[7])},m(t,o){h(t,n,o),a.m(n,null),d(n,i),c&&c.m(n,null),s||(r=b(n,"keydown",e[15]),s=!0)},p(t,e){l===(l=o(t))&&a?a.p(t,e):(a.d(1),a=l(t),a&&(a.c(),a.m(n,i))),t[7]?c?c.p(t,e):(c=mt(t),c.c(),c.m(n,null)):c&&(c.d(1),c=null),128&e[0]&&_(n,"active",t[7])},i:t,o:t,d(t){t&&f(n),a.d(),c&&c.d(),s=!1,r()}}}function _t(t,e,n){let i;const s=k();let r,o,l,{options:a}=e,{selected:c=null}=e,{placeholder:u="Find an area..."}=e,{value:d="code"}=e,{label:h="name"}=e,{group:f=null}=e,{search:p=!1}=e,m=c,g=c?a.find((t=>t[d]==c)):null,v=!1,y="",b=null,w=[];function $(t){n(17,c=t[d]),n(7,v=!1),s("select",{selected:t,value:t[d]})}return t.$$set=t=>{"options"in t&&n(18,a=t.options),"selected"in t&&n(17,c=t.selected),"placeholder"in t&&n(0,u=t.placeholder),"value"in t&&n(19,d=t.value),"label"in t&&n(1,h=t.label),"group"in t&&n(2,f=t.group),"search"in t&&n(3,p=t.search)},t.$$.update=()=>{16&t.$$.dirty[0]&&n(21,i=y?new RegExp(y,"i"):null),2359298&t.$$.dirty[0]&&(n(9,r=i?a.filter((t=>i.test(t[h]))):a),n(8,b=0)),32&t.$$.dirty[0]&&(document.onclick=function(t){t.target!==o&&(n(7,v=!1),n(8,b=0))}),1966080&t.$$.dirty[0]&&m!=c&&(n(6,g=a.find((t=>t[d]==c))),n(20,m=c))},[u,h,f,p,y,o,g,v,b,r,l,w,function(t){var e;t.stopPropagation(),n(4,y=""),n(7,v=!v),(e=10,new Promise((t=>setTimeout(t,e)))).then((()=>{l&&v&&l.focus()}))},$,function(t){t.stopPropagation(),n(17,c=null),n(20,m=null),n(6,g=null),s("select",{selected:null,value:null})},function(t){v&&r[0]&&Number.isInteger(b)&&(38===t.keyCode?(n(8,b-=b>0?1:0),w[b].scrollIntoView({block:"nearest",inline:"start"})):40===t.keyCode&&(n(8,b+=b<r.length-1?1:0),w[b].scrollIntoView({block:"nearest",inline:"end"})))},function(t){r[0]&&Number.isInteger(b)&&13===t.keyCode&&$(r[b])},c,a,d,m,i,function(){y=this.value,n(4,y)},function(t){I[t?"unshift":"push"]((()=>{l=t,n(10,l)}))},t=>$(t),t=>n(8,b=t),function(t,e){I[t?"unshift":"push"]((()=>{w[e]=t,n(11,w)}))},t=>$(t),t=>n(8,b=t),function(t,e){I[t?"unshift":"push"]((()=>{w[e]=t,n(11,w)}))},function(t){I[t?"unshift":"push"]((()=>{o=t,n(5,o)}))}]}class Ct extends q{constructor(t){super(),Z(this,t,_t,xt,r,{options:18,selected:17,placeholder:0,value:19,label:1,group:2,search:3},[-1,-1])}}function kt(t){let e,n,i,s,r,a,c;const u=t[4].default,p=function(t,e,n,i){if(t){const s=o(t,e,n,i);return t[0](s)}}(u,t,t[3],null);return{c(){e=m("div"),n=m("input"),i=v(),s=m("label"),p&&p.c(),w(n,"id",t[1]),w(n,"type","checkbox"),w(n,"class","switch-input svelte-nov6g7"),w(n,"tabindex","0"),w(s,"for",t[1]),w(s,"class","switch-label svelte-nov6g7"),_(s,"mono",t[2]),w(e,"class","switch svelte-nov6g7")},m(o,l){h(o,e,l),d(e,n),n.checked=t[0],d(e,i),d(e,s),p&&p.m(s,null),r=!0,a||(c=b(n,"change",t[5]),a=!0)},p(t,[e]){(!r||2&e)&&w(n,"id",t[1]),1&e&&(n.checked=t[0]),p&&p.p&&(!r||8&e)&&l(p,u,t,t[3],r?e:-1,null,null),(!r||2&e)&&w(s,"for",t[1]),4&e&&_(s,"mono",t[2])},i(t){r||(U(p,t),r=!0)},o(t){D(p,t),r=!1},d(t){t&&f(e),p&&p.d(t),a=!1,c()}}}function Et(t,e,n){let{$$slots:i={},$$scope:s}=e,{id:r="switch"}=e,{mono:o=!1}=e,{checked:l}=e;return t.$$set=t=>{"id"in t&&n(1,r=t.id),"mono"in t&&n(2,o=t.mono),"checked"in t&&n(0,l=t.checked),"$$scope"in t&&n(3,s=t.$$scope)},[l,r,o,s,i,function(){l=this.checked,n(0,l)}]}class It extends q{constructor(t){super(),Z(this,t,Et,kt,r,{id:1,mono:2,checked:0})}}function Tt(t,e,n){const i=t.slice();return i[24]=e[n],i}function Mt(t,e,n){const i=t.slice();return i[24]=e[n],i}function jt(t){let e,n,i;function s(e){t[13](e)}let r={options:t[6],group:"typenm"};return void 0!==t[2]&&(r.selected=t[2]),e=new Ct({props:r}),I.push((()=>L(e,"selected",s))),{c(){z(e.$$.fragment)},m(t,n){F(e,t,n),i=!0},p(t,i){const s={};64&i&&(s.options=t[6]),!n&&4&i&&(n=!0,s.selected=t[2],P((()=>n=!1))),e.$set(s)},i(t){i||(U(e.$$.fragment,t),i=!0)},o(t){D(e.$$.fragment,t),i=!1},d(t){V(e,t)}}}function At(t){let e,n,i,s,r,o,l=X[t[24]].label+"";function a(){return t[14](t[24])}return{c(){e=m("div"),n=m("button"),i=g(l),s=v(),w(n,"class","btn svelte-1y2vnja"),w(n,"prevent",""),_(n,"btn-active",t[1].includes(t[24])),w(e,"class","btn-group svelte-1y2vnja")},m(t,l){h(t,e,l),d(e,n),d(n,i),d(e,s),r||(o=b(n,"click",a),r=!0)},p(e,i){t=e,258&i&&_(n,"btn-active",t[1].includes(t[24]))},d(t){t&&f(e),r=!1,o()}}}function Nt(t){let e;return{c(){e=g("Include change over time toggle")},m(t,n){h(t,e,n)},d(t){t&&f(e)}}}function Pt(t){let e;return{c(){e=g("Allow selection of other areas")},m(t,n){h(t,e,n)},d(t){t&&f(e)}}}function St(e){let n;return{c(){n=m("span"),n.textContent="No components selected",w(n,"class","muted svelte-1y2vnja")},m(t,e){h(t,n,e)},p:t,d(t){t&&f(n)}}}function Ht(t){let e,n=t[1],i=[];for(let e=0;e<n.length;e+=1)i[e]=Rt(Tt(t,n,e));return{c(){for(let t=0;t<i.length;t+=1)i[t].c();e=y()},m(t,n){for(let e=0;e<i.length;e+=1)i[e].m(t,n);h(t,e,n)},p(t,s){if(1538&s){let r;for(n=t[1],r=0;r<n.length;r+=1){const o=Tt(t,n,r);i[r]?i[r].p(o,s):(i[r]=Rt(o),i[r].c(),i[r].m(e.parentNode,e))}for(;r<i.length;r+=1)i[r].d(1);i.length=n.length}},d(t){p(i,t),t&&f(e)}}}function Rt(t){let e,n,s,r,o,l,a,c,u,p,y=X[t[24]].label+"";function x(){return t[17](t[24])}function _(){return t[18](t[24])}function C(){return t[19](t[24])}return{c(){e=m("div"),n=m("button"),n.textContent="<",s=v(),r=m("button"),o=g(y),l=v(),a=m("button"),a.textContent=">",c=v(),w(n,"class","btn btn-active svelte-1y2vnja"),w(r,"class","btn btn-active svelte-1y2vnja"),w(a,"class","btn btn-active svelte-1y2vnja"),w(e,"class","btn-group svelte-1y2vnja")},m(t,i){h(t,e,i),d(e,n),d(e,s),d(e,r),d(r,o),d(e,l),d(e,a),d(e,c),u||(p=[b(n,"click",x),b(r,"click",_),b(a,"click",C)],u=!0)},p(e,n){t=e,2&n&&y!==(y=X[t[24]].label+"")&&$(o,y)},d(t){t&&f(e),u=!1,i(p)}}}function Bt(t){let e,n,i,s=`<div id="profile"></div><script src="http://cdn.ons.gov.uk/vendor/pym/1.3.2/pym.min.js"><\/script><script>var pymParent = new pym.Parent("profile", "${t[5]}", {name: "profile"});<\/script>`;return{c(){e=m("div"),n=m("code"),i=g(s),w(e,"id","code"),w(e,"class","svelte-1y2vnja")},m(t,s){h(t,e,s),d(e,n),d(n,i)},p(t,e){32&e&&s!==(s=`<div id="profile"></div><script src="http://cdn.ons.gov.uk/vendor/pym/1.3.2/pym.min.js"><\/script><script>var pymParent = new pym.Parent("profile", "${t[5]}", {name: "profile"});<\/script>`)&&$(i,s)},d(t){t&&f(e)}}}function Wt(t){let e,n,s,r,o,l,a,c,u,y,x,C,k,E,T,M,j,A,N,S,H,R,B,W,Y,Z,q,G,J,K,Q,X,tt,et,nt,it,st,rt,ot,lt,at,ct,ut,dt=t[7]?"Hide":"Show",ht=t[6]&&jt(t),ft=t[8],pt=[];for(let e=0;e<ft.length;e+=1)pt[e]=At(Mt(t,ft,e));function mt(e){t[15](e)}let gt={id:"change",$$slots:{default:[Nt]},$$scope:{ctx:t}};function vt(e){t[16](e)}void 0!==t[4]&&(gt.checked=t[4]),A=new It({props:gt}),I.push((()=>L(A,"checked",mt)));let yt={id:"selector",$$slots:{default:[Pt]},$$scope:{ctx:t}};function bt(t,e){return t[1][0]?Ht:St}void 0!==t[3]&&(yt.checked=t[3]),H=new It({props:yt}),I.push((()=>L(H,"checked",vt)));let wt=bt(t),$t=wt(t),xt=t[7]&&Bt(t);return{c(){e=m("header"),e.innerHTML='<div class="col-wide"><h1>Build your area profile</h1></div>',n=v(),s=m("section"),r=m("div"),o=m("h3"),o.textContent="Select your area",l=v(),ht&&ht.c(),a=v(),c=m("section"),u=m("div"),y=m("h3"),y.textContent="Select profile components",x=v(),C=m("div");for(let t=0;t<pt.length;t+=1)pt[t].c();k=v(),E=m("section"),T=m("div"),M=m("h3"),M.textContent="Select options",j=v(),z(A.$$.fragment),S=v(),z(H.$$.fragment),B=v(),W=m("section"),Y=m("div"),Z=m("h3"),Z.textContent="Selected components",q=v(),G=m("div"),$t.c(),J=v(),K=m("section"),Q=m("div"),X=v(),tt=m("section"),et=m("div"),nt=m("button"),it=g(dt),st=g(" embed code"),rt=v(),ot=m("button"),ot.textContent="Download PNG",lt=v(),xt&&xt.c(),w(o,"class","svelte-1y2vnja"),w(r,"class","col-wide"),w(s,"class","svelte-1y2vnja"),w(y,"class","svelte-1y2vnja"),w(C,"id","options"),w(C,"class","svelte-1y2vnja"),w(u,"class","col-wide"),w(c,"class","svelte-1y2vnja"),w(M,"class","svelte-1y2vnja"),w(T,"class","col-wide"),w(E,"class","svelte-1y2vnja"),w(Z,"class","svelte-1y2vnja"),w(G,"id","selected"),w(G,"class","svelte-1y2vnja"),w(Y,"class","col-wide"),w(W,"class","svelte-1y2vnja"),w(Q,"id","profile"),w(Q,"class","col-wide"),w(K,"class","svelte-1y2vnja"),w(nt,"class","btn svelte-1y2vnja"),_(nt,"btn-active",!t[7]),w(ot,"class","btn btn-active svelte-1y2vnja"),w(et,"class","col-wide"),w(tt,"class","svelte-1y2vnja")},m(i,f){h(i,e,f),h(i,n,f),h(i,s,f),d(s,r),d(r,o),d(r,l),ht&&ht.m(r,null),h(i,a,f),h(i,c,f),d(c,u),d(u,y),d(u,x),d(u,C);for(let t=0;t<pt.length;t+=1)pt[t].m(C,null);h(i,k,f),h(i,E,f),d(E,T),d(T,M),d(T,j),F(A,T,null),d(T,S),F(H,T,null),h(i,B,f),h(i,W,f),d(W,Y),d(Y,Z),d(Y,q),d(Y,G),$t.m(G,null),h(i,J,f),h(i,K,f),d(K,Q),t[20](Q),h(i,X,f),h(i,tt,f),d(tt,et),d(et,nt),d(nt,it),d(nt,st),d(et,rt),d(et,ot),d(et,lt),xt&&xt.m(et,null),at=!0,ct||(ut=[b(nt,"click",t[21]),b(ot,"click",t[11])],ct=!0)},p(t,[e]){if(t[6]?ht?(ht.p(t,e),64&e&&U(ht,1)):(ht=jt(t),ht.c(),U(ht,1),ht.m(r,null)):ht&&(O={r:0,c:[],p:O},D(ht,1,1,(()=>{ht=null})),O.r||i(O.c),O=O.p),770&e){let n;for(ft=t[8],n=0;n<ft.length;n+=1){const i=Mt(t,ft,n);pt[n]?pt[n].p(i,e):(pt[n]=At(i),pt[n].c(),pt[n].m(C,null))}for(;n<pt.length;n+=1)pt[n].d(1);pt.length=ft.length}const n={};536870912&e&&(n.$$scope={dirty:e,ctx:t}),!N&&16&e&&(N=!0,n.checked=t[4],P((()=>N=!1))),A.$set(n);const s={};536870912&e&&(s.$$scope={dirty:e,ctx:t}),!R&&8&e&&(R=!0,s.checked=t[3],P((()=>R=!1))),H.$set(s),wt===(wt=bt(t))&&$t?$t.p(t,e):($t.d(1),$t=wt(t),$t&&($t.c(),$t.m(G,null))),(!at||128&e)&&dt!==(dt=t[7]?"Hide":"Show")&&$(it,dt),128&e&&_(nt,"btn-active",!t[7]),t[7]?xt?xt.p(t,e):(xt=Bt(t),xt.c(),xt.m(et,null)):xt&&(xt.d(1),xt=null)},i(t){at||(U(ht),U(A.$$.fragment,t),U(H.$$.fragment,t),at=!0)},o(t){D(ht),D(A.$$.fragment,t),D(H.$$.fragment,t),at=!1},d(r){r&&f(e),r&&f(n),r&&f(s),ht&&ht.d(),r&&f(a),r&&f(c),p(pt,r),r&&f(k),r&&f(E),V(A),V(H),r&&f(B),r&&f(W),$t.d(),r&&f(J),r&&f(K),t[20](null),r&&f(X),r&&f(tt),xt&&xt.d(),ct=!1,i(ut)}}}function Ot(t,e,n){let i,s,r,o,l=!1,a=Object.keys(X),c=!1,u=["population","agemed","age10yr"],d="E07000087",h=!1,f=!1;function p(t){u.includes(t)?n(1,u=u.filter((e=>e!=t))):n(1,u=[...u,t])}function m(t,e){let i=u.indexOf(t)+e;if(i>=0&&i<=u.length-1){let e=u.filter((e=>e!=t));e.splice(i,0,t),n(1,u=e)}}(async function(t){let e=await fetch(t),n=await e.text();return await lt(n,at)})(Q).then((t=>{t.forEach((t=>{t.typepl=tt[t.type].pl,t.typenm=tt[t.type].name})),n(6,o=t.sort(((t,e)=>t.name.localeCompare(e.name))))}));return t.$$.update=()=>{30&t.$$.dirty&&n(5,i=`${K}${d||""}/${h?"select":""}/${f?"change":""}/${u.join(",")}`),4129&t.$$.dirty&&!l&&r&&i&&(s=new J.Parent("profile",i,{name:"profile",id:"iframe"}),n(12,l=!0)),4128&t.$$.dirty&&l&&i&&window.open(i,"profile")},[r,u,d,h,f,i,o,c,a,p,m,function(){s.sendMessage("makePNG",null)},l,function(t){d=t,n(2,d)},t=>p(t),function(t){f=t,n(4,f)},function(t){h=t,n(3,h)},t=>m(t,-1),t=>p(t),t=>m(t,1),function(t){I[t?"unshift":"push"]((()=>{r=t,n(0,r)}))},()=>n(7,c=!c)]}return new class extends q{constructor(t){super(),Z(this,t,Ot,Wt,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
