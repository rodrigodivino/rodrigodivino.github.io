import{S as t,i as e,s,e as a,l,a as n,b as r,f as o,m as i,c as h,d as f,h as u,j as c,o as m,k as d,n as g,p,r as b,u as $,v,q as j,w as x,x as y,y as A}from"./client.5b5c21b5.js";import{C as q}from"./Card.612f69fd.js";function w(t,e,s){const a=t.slice();return a[1]=e[s].title,a[2]=e[s].subtitle,a[3]=e[s].ref,a[4]=e[s].thumb,a}function B(t){let e,s,v,j;const x=new q({props:{title:t[1],subtitle:t[2],thumb:t[4]}});return{c(){e=a("a"),l(x.$$.fragment),s=n(),this.h()},l(t){e=r(t,"A",{href:!0});var a=o(e);i(x.$$.fragment,a),s=h(a),a.forEach(f),this.h()},h(){u(e,"href",v=t[3])},m(t,a){c(t,e,a),m(x,e,null),d(e,s),j=!0},p:g,i(t){j||(p(x.$$.fragment,t),j=!0)},o(t){b(x.$$.fragment,t),j=!1},d(t){t&&f(e),$(x)}}}function C(t){let e,s,a,l=t[0],r=[];for(let e=0;e<l.length;e+=1)r[e]=B(w(t,l,e));const o=t=>b(r[t],1,1,()=>{r[t]=null});return{c(){e=n();for(let t=0;t<r.length;t+=1)r[t].c();s=v(),this.h()},l(t){j('[data-svelte="svelte-10h7psl"]',document.head).forEach(f),e=h(t);for(let e=0;e<r.length;e+=1)r[e].l(t);s=v(),this.h()},h(){document.title="Blog"},m(t,l){c(t,e,l);for(let e=0;e<r.length;e+=1)r[e].m(t,l);c(t,s,l),a=!0},p(t,[e]){if(1&e){let a;for(l=t[0],a=0;a<l.length;a+=1){const n=w(t,l,a);r[a]?(r[a].p(n,e),p(r[a],1)):(r[a]=B(n),r[a].c(),p(r[a],1),r[a].m(s.parentNode,s))}for(A(),a=l.length;a<r.length;a+=1)o(a);x()}},i(t){if(!a){for(let t=0;t<l.length;t+=1)p(r[t]);a=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)b(r[t]);a=!1},d(t){t&&f(e),y(r,t),t&&f(s)}}}function E(t){return[[{title:"An Introduction to Multivariate Data Analysis",subtitle:"What is it used for, and some techniques at your disposal",ref:"multivariate-introduction",thumb:"placeholder.png"}]]}export default class extends t{constructor(t){super(),e(this,t,E,C,s,{})}}
