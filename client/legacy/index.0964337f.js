import{_ as t,a as n,b as r,c as e,i as a,s as f,d as o,S as i,r as u,u as c,v as l,p as s,w as h,x as p,y as v,z as g,n as m,A as d,B as y,C as $,g as b,D as R}from"./client.2736d903.js";import{C}from"./Card.4df57132.js";function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,f=n(t);if(e){var o=n(this).constructor;a=Reflect.construct(f,arguments,o)}else a=f.apply(this,arguments);return r(this,a)}}function j(t,n,r){var e=t.slice();return e[1]=n[r].title,e[2]=n[r].subtitle,e[3]=n[r].file,e[4]=n[r].thumb,e}function x(t){var n,r=new C({props:{title:t[1],subtitle:t[2],file:t[3],thumb:t[4]}});return{c:function(){u(r.$$.fragment)},l:function(t){c(r.$$.fragment,t)},m:function(t,e){l(r,t,e),n=!0},p:s,i:function(t){n||(h(r.$$.fragment,t),n=!0)},o:function(t){p(r.$$.fragment,t),n=!1},d:function(t){v(r,t)}}}function A(t){for(var n,r,e=t[0],a=[],f=0;f<e.length;f+=1)a[f]=x(j(t,e,f));var o=function(t){return p(a[t],1,1,(function(){a[t]=null}))};return{c:function(){for(var t=0;t<a.length;t+=1)a[t].c();n=g()},l:function(t){for(var r=0;r<a.length;r+=1)a[r].l(t);n=g()},m:function(t,e){for(var f=0;f<a.length;f+=1)a[f].m(t,e);m(t,n,e),r=!0},p:function(t,r){var f=d(r,1)[0];if(1&f){var i;for(e=t[0],i=0;i<e.length;i+=1){var u=j(t,e,i);a[i]?(a[i].p(u,f),h(a[i],1)):(a[i]=x(u),a[i].c(),h(a[i],1),a[i].m(n.parentNode,n))}for(R(),i=e.length;i<a.length;i+=1)o(i);y()}},i:function(t){if(!r){for(var n=0;n<e.length;n+=1)h(a[n]);r=!0}},o:function(t){a=a.filter(Boolean);for(var n=0;n<a.length;n+=1)p(a[n]);r=!1},d:function(t){$(a,t),t&&b(n)}}}function S(t){return[[{title:"VAST Challenge 2019",subtitle:"Fictional Earthquake Data Analysis",file:"project1",thumb:"placeholder.png"}]]}var w=function(n){t(u,i);var r=D(u);function u(t){var n;return e(this,u),n=r.call(this),a(o(n),t,S,A,f,{}),n}return u}();export default w;
