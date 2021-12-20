var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i;const l="undefined"!=typeof window;let u=l?()=>window.performance.now():()=>Date.now(),a=l?t=>requestAnimationFrame(t):t;const f=new Set;function d(t){f.forEach((e=>{e.c(t)||(f.delete(e),e.f())})),0!==f.size&&a(d)}function m(t,e){t.appendChild(e)}function p(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function h(t){const e=y("style");return function(t,e){m(t.head||t,e)}(p(t),e),e}function $(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function _(){return v(" ")}function w(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function x(t){return function(e){return e.preventDefault(),t.call(this,e)}}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const k=new Set;let C,E=0;function j(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),E-=r,E||a((()=>{E||(k.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),k.clear())})))}function P(t){C=t}const R=[],z=[],A=[],I=[],q=Promise.resolve();let D=!1;function O(t){A.push(t)}const S=new Set;let T,N=0;function H(){const t=C;do{for(;N<R.length;){const t=R[N];N++,P(t),L(t.$$)}for(P(null),R.length=0,N=0;z.length;)z.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];S.has(e)||(S.add(e),e())}A.length=0}while(R.length);for(;I.length;)I.pop()();D=!1,S.clear(),P(t)}function L(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}function B(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const F=new Set;let M;function G(){M={r:0,c:[],p:M}}function J(){M.r||r(M.c),M=M.p}function K(t,e){t&&t.i&&(F.delete(t),t.i(e))}function Q(t,e,n,o){if(t&&t.o){if(F.has(t))return;F.add(t),M.c.push((()=>{F.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const U={duration:0};function V(n,o,r){let s,i,l=o(n,r),m=!1,$=0;function g(){s&&j(n,s)}function y(){const{delay:o=0,duration:r=300,easing:c=e,tick:y=t,css:v}=l||U;v&&(s=function(t,e,n,o,r,c,s,i=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*c(t);u+=100*t+`%{${s(o,1-o)}}\n`}const a=u+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${i}`,d=p(t);k.add(d);const m=d.__svelte_stylesheet||(d.__svelte_stylesheet=h(t).sheet),$=d.__svelte_rules||(d.__svelte_rules={});$[f]||($[f]=!0,m.insertRule(`@keyframes ${f} ${a}`,m.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${o}ms linear ${r}ms 1 both`,E+=1,f}(n,0,1,r,o,c,v,$++)),y(0,1);const _=u()+o,w=_+r;i&&i.abort(),m=!0,O((()=>B(n,!0,"start"))),i=function(t){let e;return 0===f.size&&a(d),{promise:new Promise((n=>{f.add(e={c:t,f:n})})),abort(){f.delete(e)}}}((t=>{if(m){if(t>=w)return y(1,0),B(n,!0,"end"),g(),m=!1;if(t>=_){const e=c((t-_)/r);y(e,1-e)}}return m}))}let v=!1;return{start(){v||(v=!0,j(n),c(l)?(l=l(),(T||(T=Promise.resolve(),T.then((()=>{T=null}))),T).then(y)):y())},invalidate(){v=!1},end(){m&&(g(),m=!1)}}}function W(t){t&&t.c()}function X(t,e,o,s){const{fragment:i,on_mount:l,on_destroy:u,after_update:a}=t.$$;i&&i.m(e,o),s||O((()=>{const e=l.map(n).filter(c);u?u.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(O)}function Y(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(R.push(t),D||(D=!0,q.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,c,s,i,l,u,a=[-1]){const f=C;P(e);const d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:n.target||f.$$.root};u&&u(d.root);let m=!1;if(d.ctx=c?c(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),m&&Z(e,t)),n})):[],d.update(),m=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(g)}else d.fragment&&d.fragment.c();n.intro&&K(e.$$.fragment),X(e,n.target,n.anchor,n.customElement),H()}P(f)}class et{$destroy(){Y(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function nt(t,{delay:n=0,duration:o=400,easing:r=e}={}){const c=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*c}}function ot(t,e,n){const o=t.slice();return o[2]=e[n].id,o[3]=e[n].title,o[4]=e[n].desc,o[5]=e[n].myRole,o[6]=e[n].type,o[7]=e[n].src,o}function rt(e){let n,o,r,c,s,l,u,a,f,d,p,h,w,x,k,C=e[3]+"",E=e[6]+"",j=e[4]+"";return{c(){var t,m;n=y("div"),o=y("div"),r=y("h1"),c=v(C),s=_(),l=y("h5"),u=v(E),a=_(),f=y("p"),d=v(j),p=_(),h=y("div"),w=y("img"),k=_(),b(o,"class","projectDesc svelte-i4x0sd"),t=w.src,m=x=e[7],i||(i=document.createElement("a")),i.href=m,t!==i.href&&b(w,"src",x),b(w,"alt",""),b(h,"class","projectImage svelte-i4x0sd"),b(n,"class","container svelte-i4x0sd")},m(t,e){$(t,n,e),m(n,o),m(o,r),m(r,c),m(o,s),m(o,l),m(l,u),m(o,a),m(o,f),m(f,d),m(n,p),m(n,h),m(h,w),m(n,k)},p:t,d(t){t&&g(n)}}}function ct(e){let n,o,r,c=e[0],s=[];for(let t=0;t<c.length;t+=1)s[t]=rt(ot(e,c,t));return{c(){n=y("main"),o=y("h1"),o.textContent="Projects:",r=_();for(let t=0;t<s.length;t+=1)s[t].c()},m(t,e){$(t,n,e),m(n,o),m(n,r);for(let t=0;t<s.length;t+=1)s[t].m(n,null)},p(t,[e]){if(1&e){let o;for(c=t[0],o=0;o<c.length;o+=1){const r=ot(t,c,o);s[o]?s[o].p(r,e):(s[o]=rt(r),s[o].c(),s[o].m(n,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=c.length}},i:t,o:t,d(t){t&&g(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(s,t)}}}function st(t){return[[{id:1,title:"SushiPay",desc:"This is a description",myRole:"I design the logo",type:"Prototype Online Restaurant",link:"https://sushipay-pemweb.xyz/",src:"https://clarkpaintings.com/wp-content/uploads/2014/12/Pencil_Cat_3.jpg"},{id:2,title:"ConsolePay",desc:"This is a description",myRole:"I design the logo",type:"Prototype Game Console Rental",link:"http://console.sushipay-pemweb.xyz/",src:"http://console.sushipay-pemweb.xyz/"},{id:3,title:"Paycation",desc:"This is a description",myRole:"I design the logo",type:"Prototype ",src:"https://hotel.sushipay-pemweb.xyz/"}]]}class it extends et{constructor(t){super(),tt(this,t,st,ct,s,{})}}function lt(e){let n,o,r,c;return{c(){n=y("span"),o=v(e[1]),r=v(".")},m(t,e){$(t,n,e),m(n,o),m(n,r)},p(t,e){2&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(o,t[1])},i(t){c||O((()=>{c=V(n,nt,{}),c.start()}))},o:t,d(t){t&&g(n)}}}function ut(e){let n,o,r,c,i,l,u,a,f,d,p,h=e[1],w=lt(e);return{c(){n=y("main"),o=y("nav"),r=_(),c=y("div"),i=y("div"),l=y("h1"),l.textContent=`Hello, I'm ${e[0]}.`,u=_(),a=y("h3"),f=v("A\r\n\t\t\t\t"),w.c(),d=_(),p=y("div"),p.innerHTML='<img src="https://clarkpaintings.com/wp-content/uploads/2014/12/Pencil_Cat_3.jpg" alt=""/>',b(a,"class","svelte-1j7chyc"),b(i,"class","item1 svelte-1j7chyc"),b(p,"class","item2 svelte-1j7chyc"),b(c,"class","container svelte-1j7chyc")},m(t,e){$(t,n,e),m(n,o),m(n,r),m(n,c),m(c,i),m(i,l),m(i,u),m(i,a),m(a,f),w.m(a,null),m(c,d),m(c,p)},p(e,[n]){2&n&&s(h,h=e[1])?(G(),Q(w,1,1,t),J(),w=lt(e),w.c(),K(w),w.m(a,null)):w.p(e,n)},i(t){K(w)},o(t){Q(w)},d(t){t&&g(n),w.d(t)}}}function at(t,e,n){let o,r="front-end developer",c=["front-end developer","human","college student","B C D"],s=0,i=()=>{3===s?(n(1,r=c[s]),s=0):(n(1,r=c[s]),s++)};return t.$$.update=()=>{4&t.$$.dirty&&(clearInterval(o),n(2,o=setInterval(i,1e3)))},["Jonathan Franzeli",r,o]}class ft extends et{constructor(t){super(),tt(this,t,at,ut,s,{name:0})}get name(){return this.$$.ctx[0]}}function dt(t){let e,n,o,r;return e=new ft({}),o=new it({}),{c(){W(e.$$.fragment),n=_(),W(o.$$.fragment)},m(t,c){X(e,t,c),$(t,n,c),X(o,t,c),r=!0},i(t){r||(K(e.$$.fragment,t),K(o.$$.fragment,t),r=!0)},o(t){Q(e.$$.fragment,t),Q(o.$$.fragment,t),r=!1},d(t){Y(e,t),t&&g(n),Y(o,t)}}}function mt(t){let e,n;return e=new it({}),{c(){W(e.$$.fragment)},m(t,o){X(e,t,o),n=!0},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function pt(t){let e,n;return e=new ft({}),{c(){W(e.$$.fragment)},m(t,o){X(e,t,o),n=!0},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){Q(e.$$.fragment,t),n=!1},d(t){Y(e,t)}}}function ht(t){let e,n,o,c,s,i,l,u,a,f,d,p,h;const k=[pt,mt,dt],C=[];function E(t,e){return 0===t[0]?0:1===t[0]?1:2}return a=E(t),f=C[a]=k[a](t),{c(){e=y("main"),n=y("ul"),o=y("li"),c=y("a"),c.textContent="Home",s=v(" |\n\t\t"),i=y("li"),l=y("a"),l.textContent="Profile",u=_(),f.c(),b(c,"href","/"),b(o,"class","svelte-pqwk8c"),b(l,"href","/"),b(i,"class","svelte-pqwk8c"),b(n,"id","navbar"),b(n,"class","svelte-pqwk8c"),b(e,"class","svelte-pqwk8c")},m(r,f){$(r,e,f),m(e,n),m(n,o),m(o,c),m(n,s),m(n,i),m(i,l),m(e,u),C[a].m(e,null),d=!0,p||(h=[w(c,"click",x(t[1])),w(l,"click",x(t[2]))],p=!0)},p(t,[n]){let o=a;a=E(t),a!==o&&(G(),Q(C[o],1,1,(()=>{C[o]=null})),J(),f=C[a],f||(f=C[a]=k[a](t),f.c()),K(f,1),f.m(e,null))},i(t){d||(K(f),d=!0)},o(t){Q(f),d=!1},d(t){t&&g(e),C[a].d(),p=!1,r(h)}}}function $t(t,e,n){let o=1;return[o,()=>n(0,o=0),()=>n(0,o=1)]}return new class extends et{constructor(t){super(),tt(this,t,$t,ht,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
