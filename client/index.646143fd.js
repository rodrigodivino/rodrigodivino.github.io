import{S as t,i as e,s as a,e as l,l as s,a as n,b as i,f as r,m as o,c as u,d as f,h,j as c,o as g,k as m,n as d,p,r as b,u as $,v,w as j,x as M,y as z}from"./client.41b01910.js";import{C as A}from"./Card.c7a644b6.js";function C(t,e,a){const l=t.slice();return l[1]=e[a].title,l[2]=e[a].subtitle,l[3]=e[a].ref,l[4]=e[a].thumb,l}function x(t){let e,a,v,j;const M=new A({props:{title:t[1],subtitle:t[2],thumb:t[4]}});return{c(){e=l("a"),s(M.$$.fragment),a=n(),this.h()},l(t){e=i(t,"A",{href:!0});var l=r(e);o(M.$$.fragment,l),a=u(l),l.forEach(f),this.h()},h(){h(e,"href",v=t[3])},m(t,l){c(t,e,l),g(M,e,null),m(e,a),j=!0},p:d,i(t){j||(p(M.$$.fragment,t),j=!0)},o(t){b(M.$$.fragment,t),j=!1},d(t){t&&f(e),$(M)}}}function y(t){let e,a,l=t[0],s=[];for(let e=0;e<l.length;e+=1)s[e]=x(C(t,l,e));const n=t=>b(s[t],1,1,()=>{s[t]=null});return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=v()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=v()},m(t,l){for(let e=0;e<s.length;e+=1)s[e].m(t,l);c(t,e,l),a=!0},p(t,[a]){if(1&a){let i;for(l=t[0],i=0;i<l.length;i+=1){const n=C(t,l,i);s[i]?(s[i].p(n,a),p(s[i],1)):(s[i]=x(n),s[i].c(),p(s[i],1),s[i].m(e.parentNode,e))}for(z(),i=l.length;i<s.length;i+=1)n(i);j()}},i(t){if(!a){for(let t=0;t<l.length;t+=1)p(s[t]);a=!0}},o(t){s=s.filter(Boolean);for(let t=0;t<s.length;t+=1)b(s[t]);a=!1},d(t){M(s,t),t&&f(e)}}}function B(t){return[[{title:"VAST Challenge 2019",subtitle:"Fictional Earthquake Data Analysis",ref:"./projects/vast-challenge",thumb:"vast-challenge-prints/main_screen.PNG"},{title:"Edge Bundling in Parallel Coordinates",subtitle:"Novel Data Visualization Technique",ref:"./projects/parallel-bundling",thumb:"parallel-bundling-prints/bundled.png"},{title:"A Battle of Media!",subtitle:"Visualizing The Rise and Fall Of Music Media Formats",ref:"https://rodrigodivino.github.io/MM21-music-industry-sales/",thumb:"vizzes/a-battle-of-media.png"}]]}export default class extends t{constructor(t){super(),e(this,t,B,y,a,{})}}
