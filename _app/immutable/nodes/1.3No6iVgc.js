import{s as E,n as b,d as S}from"../chunks/scheduler.ilaHe8UV.js";import{S as x,i as j,e as _,b as d,s as k,c as f,d as g,f as h,g as p,h as q,j as u,k as v,l as $}from"../chunks/index.lvn1ufO3.js";import{s as y}from"../chunks/entry.GAnXx4I0.js";const C=()=>{const s=y;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},H={subscribe(s){return C().page.subscribe(s)}};function P(s){let t,r=s[0].status+"",o,n,i,c=s[0].error?.message+"",l;return{c(){t=_("h1"),o=d(r),n=k(),i=_("p"),l=d(c)},l(e){t=f(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(p),n=q(e),i=f(e,"P",{});var m=g(i);l=h(m,c),m.forEach(p)},m(e,a){u(e,t,a),v(t,o),u(e,n,a),u(e,i,a),v(i,l)},p(e,[a]){a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=e[0].error?.message+"")&&$(l,c)},i:b,o:b,d(e){e&&(p(t),p(n),p(i))}}}function w(s,t,r){let o;return S(s,H,n=>r(0,o=n)),[o]}let D=class extends x{constructor(t){super(),j(this,t,w,P,E,{})}};export{D as component};
