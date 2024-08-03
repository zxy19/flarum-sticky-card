/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={24:(t,r,e)=>{var n=e(735).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var r,e={},a=Object.prototype,i=a.hasOwnProperty,c=Object.defineProperty||function(t,r,e){t[r]=e.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function p(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{p({},"")}catch(r){p=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var o=r&&r.prototype instanceof b?r:b,a=Object.create(o.prototype),i=new N(n||[]);return c(a,"_invoke",{value:S(t,e,i)}),a}function y(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var d="suspendedStart",m="suspendedYield",v="executing",x="completed",g={};function b(){}function w(){}function k(){}var _={};p(_,s,(function(){return this}));var L=Object.getPrototypeOf,O=L&&L(L(G([])));O&&O!==a&&i.call(O,s)&&(_=O);var E=k.prototype=b.prototype=Object.create(_);function j(t){["next","throw","return"].forEach((function(r){p(t,r,(function(t){return this._invoke(r,t)}))}))}function P(t,r){function e(o,a,c,u){var s=y(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return e("throw",t,c,u)}))}u(s.arg)}var o;c(this,"_invoke",{value:function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}})}function S(t,e,n){var o=d;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===x){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=T(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=x,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=y(t,e,n);if("normal"===s.type){if(o=n.done?x:m,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=x,n.method="throw",n.arg=s.arg)}}}function T(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,T(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=y(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,g;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function F(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function M(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function G(t){if(t||""===t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(i.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}throw new TypeError(n(t)+" is not iterable")}return w.prototype=k,c(E,"constructor",{value:k,configurable:!0}),c(k,"constructor",{value:w,configurable:!0}),w.displayName=p(k,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,p(t,f,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},j(P.prototype),p(P.prototype,l,(function(){return this})),e.AsyncIterator=P,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new P(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(E),p(E,f,"Generator"),p(E,s,(function(){return this})),p(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),M(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;M(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},735:t=>{function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},183:(t,r,e)=>{var n=e(24)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return t[n](a,a.exports,e),a.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";e.r(n);const t=flarum.core.compat["common/app"];function r(t,r,e,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}function a(t,r){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},a(t,r)}e.n(t)().initializers.add("xypp/sticky-card",(function(){console.log("[xypp/sticky-card] Hello, forum and admin!")}));var i=e(183),c=e.n(i);const u=flarum.core.compat["forum/app"];var s=e.n(u);const l={addFrontendProviders:flarum.extensions["xypp-store"].addFrontendProviders,PurchaseHelper:flarum.extensions["xypp-store"].PurchaseHelper,UseHelper:flarum.extensions["xypp-store"].UseHelper},f=flarum.core.compat["forum/utils/DiscussionControls"];var p=e.n(f);const h=flarum.core.compat["common/extend"],y=flarum.core.compat["common/components/Button"];var d=e.n(y);const v=flarum.core.compat["common/components/Modal"];var x=e.n(v);const g=flarum.core.compat["common/components/LoadingIndicator"];var b=e.n(g);const w=flarum.core.compat["common/components/Alert"];var k=e.n(w);const _=flarum.core.compat["common/utils/setRouteWithForcedRefresh"];var L=e.n(_),O=function(t){function r(){return t.apply(this,arguments)||this}var e,n;n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,a(e,n);var o=r.prototype;return o.className=function(){return"Modal"},o.title=function(){return s().translator.trans("xypp-sticky-card.forum.loading")},o.content=function(){return b().component()},r}(x());s().initializers.add("xypp/sticky-card",(function(){var t;"xypp-store"in flarum.extensions&&(t=s(),l.addFrontendProviders("sticky-card",t.translator.trans("xypp-sticky-card.forum.sticky-card"),void 0,(function(r,e){var n,o;return m("div",{style:"text-align:center;"},m("br",null),m("p",null,m("i",{class:"fas fa-hand-point-up"})),m("p",null,null!=e&&null!=(n=e.attribute("data"))&&n.usedOn?t.translator.trans("xypp-sticky-card.forum.used",[null==e||null==(o=e.attribute("data"))?void 0:o.usedOn]):t.translator.trans("xypp-sticky-card.forum.not-used")))}),function(){var t=o(c().mark((function t(r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return","");case 1:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}())),(0,h.extend)(p(),"moderationControls",(function(t,r){var e,n;null!=(e=s().session)&&e.user&&t.add("sticky-card",d().component({icon:"fas fa-hand-point-up",onclick:(n=o(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s().modal.show(O),t.next=3,flarum.extensions["xypp-store"].UseHelper.get("sticky-card");case 3:return e=t.sent,t.next=6,e.filterAvailable().filterWithData((function(t){return!t.data})).expireTime().query();case 6:if(e.hasItem()){t.next=20;break}return t.next=9,flarum.extensions["xypp-store"].PurchaseHelper.get("sticky-card");case 9:return n=t.sent,t.next=12,n.query();case 12:if(!n.hasItem()){t.next=20;break}return t.next=15,n.purchase();case 15:return t.next=17,flarum.extensions["xypp-store"].UseHelper.get("sticky-card");case 17:return e=t.sent,t.next=20,e.filterAvailable().filterWithData((function(t){return!t.data})).expireTime();case 20:if(e.hasItem()){t.next=24;break}return s().alerts.show(k(),{type:"warn"},s().translator.trans("xypp-sticky-card.forum.no-card")),s().modal.close(),t.abrupt("return");case 24:return t.next=26,e.use(r.id());case 26:s().modal.close(),s().alerts.show(k(),{type:"success"},s().translator.trans("xypp-sticky-card.forum.success")),L()(s().history.getCurrent().url);case 29:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})},s().translator.trans("xypp-sticky-card.forum.use-sticky-card")))}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map