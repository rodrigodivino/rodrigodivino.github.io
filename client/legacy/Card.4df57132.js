import{_ as t,a as r,b as s,c as i,i as n,s as a,d as e,S as c,f as o,e as u,t as l,j as f,k as h,h as v,l as p,g as d,m,E as b,n as y,o as E,A as D,F as R,p as g}from"./client.2736d903.js";function x(t){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=r(t);if(i){var e=r(this).constructor;n=Reflect.construct(a,arguments,e)}else n=a.apply(this,arguments);return s(this,n)}}function j(t){var r,s,i,n,a,e,c,x,j,I,P;return{c:function(){r=o("div"),s=o("img"),n=u(),a=o("div"),e=o("h4"),c=o("b"),x=l(t[0]),j=u(),I=o("p"),P=l(t[1]),this.h()},l:function(i){r=f(i,"DIV",{class:!0});var o=h(r);s=f(o,"IMG",{src:!0,alt:!0,style:!0}),n=v(o),a=f(o,"DIV",{class:!0});var u=h(a);e=f(u,"H4",{});var l=h(e);c=f(l,"B",{});var m=h(c);x=p(m,t[0]),m.forEach(d),l.forEach(d),j=v(u),I=f(u,"P",{});var b=h(I);P=p(b,t[1]),b.forEach(d),u.forEach(d),o.forEach(d),this.h()},h:function(){s.src!==(i=t[2])&&m(s,"src",i),m(s,"alt","Project"),b(s,"width","100%"),m(a,"class","container svelte-1x2pulm"),m(r,"class","card svelte-1x2pulm")},m:function(t,i){y(t,r,i),E(r,s),E(r,n),E(r,a),E(a,e),E(e,c),E(c,x),E(a,j),E(a,I),E(I,P)},p:function(t,r){var n=D(r,1)[0];4&n&&s.src!==(i=t[2])&&m(s,"src",i),1&n&&R(x,t[0]),2&n&&R(P,t[1])},i:g,o:g,d:function(t){t&&d(r)}}}function I(t,r,s){var i=r.title,n=void 0===i?"Title":i,a=r.subtitle,e=void 0===a?"Description":a,c=r.file,o=void 0===c?"empty":c,u=r.thumb,l=void 0===u?"placeholder.png":u;return t.$set=function(t){"title"in t&&s(0,n=t.title),"subtitle"in t&&s(1,e=t.subtitle),"file"in t&&s(3,o=t.file),"thumb"in t&&s(2,l=t.thumb)},[n,e,l,o]}var P=function(r){t(o,c);var s=x(o);function o(t){var r;return i(this,o),r=s.call(this),n(e(r),t,I,j,a,{title:0,subtitle:1,file:3,thumb:2}),r}return o}();export{P as C};
