function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,a=function(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}((function(e){var r=function(e){var r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,a=Object.create(o.prototype),i=new E(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return S()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var f={};function l(){}function p(){}function h(){}var v={};v[a]=function(){return this};var d=Object.getPrototypeOf,m=d&&d(d(_([])));m&&m!==r&&n.call(m,a)&&(v=m);var y=h.prototype=l.prototype=Object.create(v);function g(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function b(e,r){var o;this._invoke=function(a,i){function c(){return new r((function(o,c){!function o(a,i,c,u){var f=s(e[a],e,i);if("throw"!==f.type){var l=f.arg,p=l.value;return p&&"object"===t(p)&&n.call(p,"__await")?r.resolve(p.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):r.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(f.arg)}(a,i,o,c)}))}return o=o?o.then(c,c):c()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=y.constructor=h,h.constructor=p,h[c]=p.displayName="GeneratorFunction",e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(y),t},e.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[i]=function(){return this},e.AsyncIterator=b,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new b(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),y[c]="Generator",y[a]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=_,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;$(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}));function i(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?l(e):r}function h(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(){}function y(t,e){for(var r in e)t[r]=e[r];return t}function g(t){return t()}function b(){return Object.create(null)}function x(t){t.forEach(g)}function w(t){return"function"==typeof t}function $(e,r){return e!=e?r==r:e!==r||e&&"object"===t(e)||"function"==typeof e}function E(t,e,r,n){return t[1]&&n?y(r.ctx.slice(),t[1](n(e))):r.ctx}function _(e,r,n,o,a,i,c){var u=function(e,r,n,o){if(e[2]&&o){var a=e[2](o(n));if(void 0===r.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(r.dirty.length,a.length),u=0;u<c;u+=1)i[u]=r.dirty[u]|a[u];return i}return r.dirty|a}return r.dirty}(r,o,a,i);if(u){var s=E(r,n,o,c);e.p(s,u)}}function S(t,e){t.appendChild(e)}function j(t,e,r){t.insertBefore(e,r||null)}function L(t){t.parentNode.removeChild(t)}function R(t,e){for(var r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function P(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function k(){return A(" ")}function O(){return A("")}function C(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function N(t){return Array.from(t.childNodes)}function D(t,e,r,n){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0;i<a.attributes.length;){var c=a.attributes[i];r[c.name]?i++:a.removeAttribute(c.name)}return t.splice(o,1)[0]}}return n?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):P(e)}function q(t,e){for(var r=0;r<t.length;r+=1){var n=t[r];if(3===n.nodeType)return n.data=""+e,t.splice(r,1)[0]}return A(e)}function I(t){return q(t," ")}function T(t,e){e=""+e,t.data!==e&&(t.data=e)}function U(t,e,r,n){t.style.setProperty(e,r,n?"important":"")}function G(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function H(t){o=t}function F(){if(!o)throw new Error("Function called outside component initialization");return o}var B=[],J=[],M=[],V=[],Y=Promise.resolve(),z=!1;function K(t){M.push(t)}var W=!1,X=new Set;function Q(){if(!W){W=!0;do{for(var t=0;t<B.length;t+=1){var e=B[t];H(e),Z(e.$$)}for(B.length=0;J.length;)J.pop()();for(var r=0;r<M.length;r+=1){var n=M[r];X.has(n)||(X.add(n),n())}M.length=0}while(B.length);for(;V.length;)V.pop()();z=!1,W=!1,X.clear()}}function Z(t){if(null!==t.fragment){t.update(),x(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}var tt,et=new Set;function rt(){tt={r:0,c:[],p:tt}}function nt(){tt.r||x(tt.c),tt=tt.p}function ot(t,e){t&&t.i&&(et.delete(t),t.i(e))}function at(t,e,r,n){if(t&&t.o){if(et.has(t))return;et.add(t),tt.c.push((function(){et.delete(t),n&&(r&&t.d(1),n())})),t.o(e)}}function it(t,e){for(var r={},n={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(n[u]=1);for(var s in c)o[s]||(r[s]=c[s],o[s]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in n)l in r||(r[l]=void 0);return r}function ct(e){return"object"===t(e)&&null!==e?e:{}}function ut(t){t&&t.c()}function st(t,e){t&&t.l(e)}function ft(t,e,r){var n=t.$$,o=n.fragment,a=n.on_mount,i=n.on_destroy,c=n.after_update;o&&o.m(e,r),K((function(){var e=a.map(g).filter(w);i?i.push.apply(i,h(e)):x(e),t.$$.on_mount=[]})),c.forEach(K)}function lt(t,e){var r=t.$$;null!==r.fragment&&(x(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function pt(t,e){-1===t.$$.dirty[0]&&(B.push(t),z||(z=!0,Y.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ht(t,e,r,n,a,i){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=o;H(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:a,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:c},l=!1;if(f.ctx=r?r(t,s,(function(e,r){var n=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:r;return f.ctx&&a(f.ctx[e],f.ctx[e]=n)&&(f.bound[e]&&f.bound[e](n),l&&pt(t,e)),r})):[],f.update(),l=!0,x(f.before_update),f.fragment=!!n&&n(f.ctx),e.target){if(e.hydrate){var p=N(e.target);f.fragment&&f.fragment.l(p),p.forEach(L)}else f.fragment&&f.fragment.c();e.intro&&ot(t.$$.fragment),ft(t,e.target,e.anchor),Q()}H(u)}var vt=function(){function t(){v(this,t)}var e,r,n;return e=t,(r=[{key:"$destroy",value:function(){lt(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}}},{key:"$set",value:function(){}}])&&d(e.prototype,r),n&&d(e,n),t}(),dt=[];function mt(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=[];function o(r){if($(t,r)&&(t=r,e)){for(var o=!dt.length,a=0;a<n.length;a+=1){var i=n[a];i[1](),dt.push(i,t)}if(o){for(var c=0;c<dt.length;c+=2)dt[c][0](dt[c+1]);dt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[a,i];return n.push(c),1===n.length&&(e=r(o)||m),a(t),function(){var t=n.indexOf(c);-1!==t&&n.splice(t,1),0===n.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var yt={},gt=function(){return{}};function bt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function xt(t){var e,r,o,a,i,c,u,s,f,l,p,h,v,d,y,g;return{c:function(){e=P("nav"),r=P("ul"),o=P("li"),a=P("a"),i=A("Home"),u=k(),s=P("li"),f=P("a"),l=A("Projects"),h=k(),v=P("li"),d=P("a"),y=A("Blog"),this.h()},l:function(t){var n=N(e=D(t,"NAV",{class:!0})),c=N(r=D(n,"UL",{class:!0})),p=N(o=D(c,"LI",{class:!0})),m=N(a=D(p,"A",{"aria-current":!0,href:!0,class:!0}));i=q(m,"Home"),m.forEach(L),p.forEach(L),u=I(c);var g=N(s=D(c,"LI",{class:!0})),b=N(f=D(g,"A",{"aria-current":!0,href:!0,class:!0}));l=q(b,"Projects"),b.forEach(L),g.forEach(L),h=I(c);var x=N(v=D(c,"LI",{class:!0})),w=N(d=D(x,"A",{"aria-current":!0,href:!0,class:!0}));y=q(w,"Blog"),w.forEach(L),x.forEach(L),c.forEach(L),n.forEach(L),this.h()},h:function(){C(a,"aria-current",c=void 0===t[0]?"page":void 0),C(a,"href","."),C(a,"class","svelte-17bn9a"),C(o,"class","svelte-17bn9a"),C(f,"aria-current",p="projects"===t[0]?"page":void 0),C(f,"href","projects"),C(f,"class","svelte-17bn9a"),C(s,"class","svelte-17bn9a"),C(d,"aria-current",g="blog"===t[0]?"page":void 0),C(d,"href","blog"),C(d,"class","svelte-17bn9a"),C(v,"class","svelte-17bn9a"),C(r,"class","svelte-17bn9a"),C(e,"class","svelte-17bn9a")},m:function(t,n){j(t,e,n),S(e,r),S(r,o),S(o,a),S(a,i),S(r,u),S(r,s),S(s,f),S(f,l),S(r,h),S(r,v),S(v,d),S(d,y)},p:function(t,e){var r=n(e,1)[0];1&r&&c!==(c=void 0===t[0]?"page":void 0)&&C(a,"aria-current",c),1&r&&p!==(p="projects"===t[0]?"page":void 0)&&C(f,"aria-current",p),1&r&&g!==(g="blog"===t[0]?"page":void 0)&&C(d,"aria-current",g)},i:m,o:m,d:function(t){t&&L(e)}}}function wt(t,e,r){var n=e.segment;return t.$set=function(t){"segment"in t&&r(0,n=t.segment)},[n]}var $t=function(t){f(r,vt);var e=bt(r);function r(t){var n;return v(this,r),ht(l(n=e.call(this)),t,wt,xt,$,{segment:0}),n}return r}();function Et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function _t(t){var e,r,o,a=new $t({props:{segment:t[0]}}),i=t[2].default,c=function(t,e,r,n){if(t){var o=E(t,e,r,n);return t[0](o)}}(i,t,t[1],null);return{c:function(){ut(a.$$.fragment),e=k(),r=P("main"),c&&c.c(),this.h()},l:function(t){st(a.$$.fragment,t),e=I(t);var n=N(r=D(t,"MAIN",{class:!0}));c&&c.l(n),n.forEach(L),this.h()},h:function(){C(r,"class","svelte-4biz2u")},m:function(t,n){ft(a,t,n),j(t,e,n),j(t,r,n),c&&c.m(r,null),o=!0},p:function(t,e){var r=n(e,1)[0],o={};1&r&&(o.segment=t[0]),a.$set(o),c&&c.p&&2&r&&_(c,i,t,t[1],r,null,null)},i:function(t){o||(ot(a.$$.fragment,t),ot(c,t),o=!0)},o:function(t){at(a.$$.fragment,t),at(c,t),o=!1},d:function(t){lt(a,t),t&&L(e),t&&L(r),c&&c.d(t)}}}function St(t,e,r){var n=e.segment,o=e.$$slots,a=void 0===o?{}:o,i=e.$$scope;return t.$set=function(t){"segment"in t&&r(0,n=t.segment),"$$scope"in t&&r(1,i=t.$$scope)},[n,i,a]}var jt=function(t){f(r,vt);var e=Et(r);function r(t){var n;return v(this,r),ht(l(n=e.call(this)),t,St,_t,$,{segment:0}),n}return r}();function Lt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function Rt(t){var e,r,n=t[1].stack+"";return{c:function(){e=P("pre"),r=A(n)},l:function(t){var o=N(e=D(t,"PRE",{}));r=q(o,n),o.forEach(L)},m:function(t,n){j(t,e,n),S(e,r)},p:function(t,e){2&e&&n!==(n=t[1].stack+"")&&T(r,n)},d:function(t){t&&L(e)}}}function Pt(t){var e,r,o,a,i,c,u,s,f,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&Rt(t);return{c:function(){r=k(),o=P("h1"),a=A(t[0]),i=k(),c=P("p"),u=A(l),s=k(),p&&p.c(),f=O(),this.h()},l:function(e){G('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(L),r=I(e);var n=N(o=D(e,"H1",{class:!0}));a=q(n,t[0]),n.forEach(L),i=I(e);var h=N(c=D(e,"P",{class:!0}));u=q(h,l),h.forEach(L),s=I(e),p&&p.l(e),f=O(),this.h()},h:function(){C(o,"class","svelte-8od9u6"),C(c,"class","svelte-8od9u6")},m:function(t,e){j(t,r,e),j(t,o,e),S(o,a),j(t,i,e),j(t,c,e),S(c,u),j(t,s,e),p&&p.m(t,e),j(t,f,e)},p:function(t,r){var o=n(r,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&T(a,t[0]),2&o&&l!==(l=t[1].message+"")&&T(u,l),t[2]&&t[1].stack?p?p.p(t,o):((p=Rt(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&L(r),t&&L(o),t&&L(i),t&&L(c),t&&L(s),p&&p.d(t),t&&L(f)}}}function At(t,e,r){var n=e.status,o=e.error;return t.$set=function(t){"status"in t&&r(0,n=t.status),"error"in t&&r(1,o=t.error)},[n,o,!1]}var kt=function(t){f(r,vt);var e=Lt(r);function r(t){var n;return v(this,r),ht(l(n=e.call(this)),t,At,Pt,$,{status:0,error:1}),n}return r}();function Ot(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function Ct(t){var e,r,n=[t[4].props],o=t[4].component;function a(t){for(var e={},r=0;r<n.length;r+=1)e=y(e,n[r]);return{props:e}}if(o)var i=new o(a());return{c:function(){i&&ut(i.$$.fragment),e=O()},l:function(t){i&&st(i.$$.fragment,t),e=O()},m:function(t,n){i&&ft(i,t,n),j(t,e,n),r=!0},p:function(t,r){var c=16&r?it(n,[ct(t[4].props)]):{};if(o!==(o=t[4].component)){if(i){rt();var u=i;at(u.$$.fragment,1,0,(function(){lt(u,1)})),nt()}o?(ut((i=new o(a())).$$.fragment),ot(i.$$.fragment,1),ft(i,e.parentNode,e)):i=null}else o&&i.$set(c)},i:function(t){r||(i&&ot(i.$$.fragment,t),r=!0)},o:function(t){i&&at(i.$$.fragment,t),r=!1},d:function(t){t&&L(e),i&&lt(i,t)}}}function Nt(t){var e,r=new kt({props:{error:t[0],status:t[1]}});return{c:function(){ut(r.$$.fragment)},l:function(t){st(r.$$.fragment,t)},m:function(t,n){ft(r,t,n),e=!0},p:function(t,e){var n={};1&e&&(n.error=t[0]),2&e&&(n.status=t[1]),r.$set(n)},i:function(t){e||(ot(r.$$.fragment,t),e=!0)},o:function(t){at(r.$$.fragment,t),e=!1},d:function(t){lt(r,t)}}}function Dt(t){var e,r,n,o,a=[Nt,Ct],i=[];function c(t,e){return t[0]?0:1}return e=c(t),r=i[e]=a[e](t),{c:function(){r.c(),n=O()},l:function(t){r.l(t),n=O()},m:function(t,r){i[e].m(t,r),j(t,n,r),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(rt(),at(i[u],1,1,(function(){i[u]=null})),nt(),(r=i[e])||(r=i[e]=a[e](t)).c(),ot(r,1),r.m(n.parentNode,n))},i:function(t){o||(ot(r),o=!0)},o:function(t){at(r),o=!1},d:function(t){i[e].d(t),t&&L(n)}}}function qt(t){for(var e,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[Dt]},$$scope:{ctx:t}},a=0;a<r.length;a+=1)o=y(o,r[a]);var i=new jt({props:o});return{c:function(){ut(i.$$.fragment)},l:function(t){st(i.$$.fragment,t)},m:function(t,r){ft(i,t,r),e=!0},p:function(t,e){var o=n(e,1)[0],a=12&o?it(r,[4&o&&{segment:t[2][0]},8&o&&ct(t[3].props)]):{};147&o&&(a.$$scope={dirty:o,ctx:t}),i.$set(a)},i:function(t){e||(ot(i.$$.fragment,t),e=!0)},o:function(t){at(i.$$.fragment,t),e=!1},d:function(t){lt(i,t)}}}function It(t,e,r){var n,o,a,i=e.stores,c=e.error,u=e.status,s=e.segments,f=e.level0,l=e.level1,p=void 0===l?null:l,h=e.notify;return n=h,F().$$.after_update.push(n),o=yt,a=i,F().$$.context.set(o,a),t.$set=function(t){"stores"in t&&r(5,i=t.stores),"error"in t&&r(0,c=t.error),"status"in t&&r(1,u=t.status),"segments"in t&&r(2,s=t.segments),"level0"in t&&r(3,f=t.level0),"level1"in t&&r(4,p=t.level1),"notify"in t&&r(6,h=t.notify)},[c,u,s,f,p,i,h]}var Tt=function(t){f(r,vt);var e=Ot(r);function r(t){var n;return v(this,r),ht(l(n=e.call(this)),t,It,qt,$,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),n}return r}(),Ut=[],Gt=[{js:function(){return import("./index.b8e85d00.js")},css:[]},{js:function(){return import("./index.0964337f.js")},css:[]},{js:function(){return import("./index.0cf30061.js")},css:[]},{js:function(){return import("./about.e28f0382.js")},css:[]},{js:function(){return import("./index.0ea49391.js")},css:[]},{js:function(){return import("./index.e9b12536.js")},css:[]}],Ht=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/projects\/?$/,parts:[{i:1}]},{pattern:/^\/projects\/project1\/?$/,parts:[null,{i:2}]},{pattern:/^\/about\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/?$/,parts:[{i:4}]},{pattern:/^\/blog\/multivariate-introduction\/?$/,parts:[null,{i:5}]}];function Ft(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=ue(new URL(t,document.baseURI));return r?(ae[e.replaceState?"replaceState":"pushState"]({id:ee},"",t),fe(r,null).then((function(){}))):(location.href=t,new Promise((function(t){})))}var Bt,Jt,Mt,Vt,Yt,zt="undefined"!=typeof __SAPPER__&&__SAPPER__,Kt=!1,Wt=[],Xt="{}",Qt={page:function(t){var e=mt(t),r=!0;return{notify:function(){r=!0,e.update((function(t){return t}))},set:function(t){r=!1,e.set(t)},subscribe:function(t){var n;return e.subscribe((function(e){(void 0===n||r&&e!==n)&&t(n=e)}))}}}({}),preloading:mt(null),session:mt(zt&&zt.session)};Qt.session.subscribe(function(){var t=c(a.mark((function t(e){var r,n,o,i,c,u;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Vt=e,Kt){t.next=3;break}return t.abrupt("return");case 3:return Yt=!0,r=ue(new URL(location.href)),n=Jt={},t.next=8,de(r);case 8:if(o=t.sent,i=o.redirect,c=o.props,u=o.branch,n===Jt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,pe(i,u,c,r.page);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var Zt,te=null;var ee,re=1;var ne,oe,ae="undefined"!=typeof history?history:{pushState:function(t,e,r){},replaceState:function(t,e,r){},scrollRestoration:""},ie={};function ce(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=n(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],c=void 0===i?"":i;"string"==typeof r[a]&&(r[a]=[r[a]]),"object"===t(r[a])?r[a].push(c):r[a]=c})),r}function ue(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(zt.baseUrl))return null;var e=t.pathname.slice(zt.baseUrl.length);if(""===e&&(e="/"),!Ut.some((function(t){return t.test(e)})))for(var r=0;r<Ht.length;r+=1){var n=Ht[r],o=n.pattern.exec(e);if(o){var a=ce(t.search),i=n.parts[n.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:n,match:o,page:u}}}}function se(){return{x:pageXOffset,y:pageYOffset}}function fe(t,e,r,n){return le.apply(this,arguments)}function le(){return(le=c(a.mark((function t(e,r,n,o){var i,c,u,s,f,l,p,h,v;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r?ee=r:(i=se(),ie[ee]=i,r=ee=++re,ie[ee]=n?i:{x:0,y:0}),ee=r,Bt&&Qt.preloading.set(!0),c=te&&te.href===e.href?te.promise:de(e),te=null,u=Jt={},t.next=8,c;case 8:if(s=t.sent,f=s.redirect,l=s.props,p=s.branch,u===Jt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,pe(f,p,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),n||(h=ie[r],o&&(v=document.getElementById(o.slice(1)))&&(h={x:0,y:v.getBoundingClientRect().top+scrollY}),ie[ee]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function pe(t,e,r,n){return he.apply(this,arguments)}function he(){return(he=c(a.mark((function t(e,r,n,o){var i,c;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Ft(e.location,{replaceState:!0}));case 2:if(Qt.page.set(o),Qt.preloading.set(!1),!Bt){t.next=8;break}Bt.$set(n),t.next=18;break;case 8:return n.stores={page:{subscribe:Qt.page.subscribe},preloading:{subscribe:Qt.preloading.subscribe},session:Qt.session},t.next=11,Mt;case 11:if(t.t0=t.sent,n.level0={props:t.t0},n.notify=Qt.page.notify,i=document.querySelector("#sapper-head-start"),c=document.querySelector("#sapper-head-end"),i&&c){for(;i.nextSibling!==c;)be(i.nextSibling);be(i),be(c)}Bt=new Tt({target:Zt,props:n,hydrate:!0});case 18:Wt=r,Xt=JSON.stringify(o.query),Kt=!0,Yt=!1;case 22:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ve(t,e,r,n){if(n!==Xt)return!0;var o=Wt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function de(t){return me.apply(this,arguments)}function me(){return(me=c(a.mark((function t(e){var r,n,o,i,u,s,f,l,p,h,v;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route,n=e.page,o=n.path.split("/").filter(Boolean),i=null,u={error:null,status:200,segments:[o[0]]},s={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){u.error="string"==typeof e?new Error(e):e,u.status=t}},Mt||(Mt=zt.preloaded[0]||gt.call(s,{host:n.host,path:n.path,query:n.query,params:{}},Vt)),l=1,t.prev=7,p=JSON.stringify(n.query),h=r.pattern.exec(n.path),v=!1,t.next=13,Promise.all(r.parts.map(function(){var t=c(a.mark((function t(r,i){var c,f,d,m,y,g;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=o[i],ve(i,c,h,p)&&(v=!0),u.segments[l]=o[i+1],r){t.next=5;break}return t.abrupt("return",{segment:c});case 5:if(f=l++,Yt||v||!Wt[i]||Wt[i].part!==r.i){t.next=8;break}return t.abrupt("return",Wt[i]);case 8:return v=!1,t.next=11,ge(Gt[r.i]);case 11:if(d=t.sent,m=d.default,y=d.preload,!Kt&&zt.preloaded[i+1]){t.next=25;break}if(!y){t.next=21;break}return t.next=18,y.call(s,{host:n.host,path:n.path,query:n.query,params:r.params?r.params(e.match):{}},Vt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=zt.preloaded[i+1];case 26:return t.abrupt("return",u["level".concat(f)]={component:m,props:g,segment:c,match:h,part:r.i});case 27:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()));case 13:f=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),u.error=t.t0,u.status=500,f=[];case 21:return t.abrupt("return",{redirect:i,props:u,branch:f});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function ye(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise((function(t,r){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=function(){return t()},n.onerror=r,document.head.appendChild(n)}))}function ge(t){var e="string"==typeof t.css?[]:t.css.map(ye);return e.unshift(t.js()),Promise.all(e).then((function(t){return t[0]}))}function be(t){t.parentNode.removeChild(t)}function xe(t){var e=ue(new URL(t,document.baseURI));if(e)return te&&t===te.href||function(t,e){te={href:t,promise:e}}(t,de(e)),te.promise}function we(t){clearTimeout(ne),ne=setTimeout((function(){$e(t)}),20)}function $e(t){var e=_e(t.target);e&&"prefetch"===e.rel&&xe(e.href)}function Ee(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var r=_e(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&!(n?r.target.baseVal:r.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=ue(a);if(i)fe(i,null,r.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),ae.pushState({id:ee},"",a.href)}}}else location.hash||e.preventDefault()}}}function _e(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Se(t){if(ie[ee]=se(),t.state){var e=ue(new URL(location.href));e?fe(e,t.state.id):location.href=location.href}else(function(t){ee=t})(re=re+1),ae.replaceState({id:ee},"",location.href)}oe={target:document.querySelector("#sapper")},"scrollRestoration"in ae&&(ae.scrollRestoration="manual"),addEventListener("beforeunload",(function(){ae.scrollRestoration="auto"})),addEventListener("load",(function(){ae.scrollRestoration="manual"})),function(t){Zt=t}(oe.target),addEventListener("click",Ee),addEventListener("popstate",Se),addEventListener("touchstart",$e),addEventListener("mousemove",we),Promise.resolve().then((function(){var t=location,e=t.hash,r=t.href;ae.replaceState({id:re},"",r);var n,o,a,i,c,u,s,f,l=new URL(location.href);if(zt.error)return n=location,o=n.host,a=n.pathname,i=n.search,c=zt.session,u=zt.preloaded,s=zt.status,f=zt.error,Mt||(Mt=u&&u[0]),void pe(null,[],{error:f,status:s,session:c,level0:{props:Mt},level1:{props:{status:s,error:f},component:kt},segments:u},{host:o,path:a,query:ce(i),params:{}});var p=ue(l);return p?fe(p,re,!0,e):void 0}));export{n as A,nt as B,R as C,rt as D,U as E,T as F,vt as S,f as _,u as a,p as b,v as c,l as d,k as e,P as f,L as g,I as h,ht as i,D as j,N as k,q as l,C as m,j as n,S as o,m as p,G as q,ut as r,$ as s,A as t,st as u,ft as v,ot as w,at as x,lt as y,O as z};
