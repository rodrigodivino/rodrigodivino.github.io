import{_ as t,a as n,b as r,c as a,i as e,s as i,d as o,S as u,f,r as s,e as l,j as c,k as h,u as g,h as p,g as v,m,n as b,v as d,o as y,p as $,w as j,x as C,y as D,z as R,A,B as x,C as B,D as E}from"./client.65884fb5.js";import{C as N}from"./Card.4bba71a5.js";function P(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,i=n(t);if(a){var o=n(this).constructor;e=Reflect.construct(i,arguments,o)}else e=i.apply(this,arguments);return r(this,e)}}function S(t,n,r){var a=t.slice();return a[1]=n[r].title,a[2]=n[r].subtitle,a[3]=n[r].ref,a[4]=n[r].thumb,a}function k(t){var n,r,a,e=new N({props:{title:t[1],subtitle:t[2],thumb:t[4]}});return{c:function(){n=f("a"),s(e.$$.fragment),r=l(),this.h()},l:function(t){n=c(t,"A",{href:!0});var a=h(n);g(e.$$.fragment,a),r=p(a),a.forEach(v),this.h()},h:function(){m(n,"href",t[3])},m:function(t,i){b(t,n,i),d(e,n,null),y(n,r),a=!0},p:$,i:function(t){a||(j(e.$$.fragment,t),a=!0)},o:function(t){C(e.$$.fragment,t),a=!1},d:function(t){t&&v(n),D(e)}}}function q(t){for(var n,r,a=t[0],e=[],i=0;i<a.length;i+=1)e[i]=k(S(t,a,i));var o=function(t){return C(e[t],1,1,(function(){e[t]=null}))};return{c:function(){for(var t=0;t<e.length;t+=1)e[t].c();n=R()},l:function(t){for(var r=0;r<e.length;r+=1)e[r].l(t);n=R()},m:function(t,a){for(var i=0;i<e.length;i+=1)e[i].m(t,a);b(t,n,a),r=!0},p:function(t,r){var i=A(r,1)[0];if(1&i){var u;for(a=t[0],u=0;u<a.length;u+=1){var f=S(t,a,u);e[u]?(e[u].p(f,i),j(e[u],1)):(e[u]=k(f),e[u].c(),j(e[u],1),e[u].m(n.parentNode,n))}for(E(),u=a.length;u<e.length;u+=1)o(u);x()}},i:function(t){if(!r){for(var n=0;n<a.length;n+=1)j(e[n]);r=!0}},o:function(t){e=e.filter(Boolean);for(var n=0;n<e.length;n+=1)C(e[n]);r=!1},d:function(t){B(e,t),t&&v(n)}}}function w(t){return[[{title:"VAST Challenge 2019",subtitle:"Fictional Earthquake Data Analysis",ref:"./projects/vast-challenge",thumb:"vast-challenge-prints/main_screen.PNG"},{title:"Edge Bundling in Parallel Coordinates",subtitle:"Novel Data Visualization Technique",ref:"./projects/parallel-bundling",thumb:"parallel-bundling-prints/bundled.png"}]]}var z=function(n){t(f,u);var r=P(f);function f(t){var n;return a(this,f),n=r.call(this),e(o(n),t,w,q,i,{}),n}return f}();export default z;
