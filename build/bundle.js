var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function i(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c;function s(t,e){return c||(c=document.createElement("a")),c.href=e,t===c.href}function a(t){return null==t?"":t}const u="undefined"!=typeof window;let f=u?()=>window.performance.now():()=>Date.now(),m=u?t=>requestAnimationFrame(t):t;const p=new Set;function d(t){p.forEach((e=>{e.c(t)||(p.delete(e),e.f())})),0!==p.size&&m(d)}function h(t,e){t.appendChild(e)}function g(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function $(t){const e=b("style");return function(t,e){h(t.head||t,e)}(g(t),e),e}function y(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode.removeChild(t)}function w(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function _(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function x(t){return document.createTextNode(t)}function z(){return x(" ")}function C(){return x("")}function k(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function j(t){return function(e){return e.preventDefault(),t.call(this,e)}}function O(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const E=new Set;let H,R=0;function M(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-r.length;o&&(t.style.animation=r.join(", "),R-=o,R||m((()=>{R||(E.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),E.clear())})))}function A(t){H=t}const V=[],I=[],N=[],P=[],L=Promise.resolve();let T=!1;function D(t){N.push(t)}const S=new Set;let B,q=0;function F(){const t=H;do{for(;q<V.length;){const t=V[q];q++,A(t),X(t.$$)}for(A(null),V.length=0,q=0;I.length;)I.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];S.has(e)||(S.add(e),e())}N.length=0}while(V.length);for(;P.length;)P.pop()();T=!1,S.clear(),A(t)}function X(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function Y(t,e,n){t.dispatchEvent(function(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}(`${e?"intro":"outro"}${n}`))}const G=new Set;let J;function K(){J={r:0,c:[],p:J}}function Q(){J.r||o(J.c),J=J.p}function U(t,e){t&&t.i&&(G.delete(t),t.i(e))}function W(t,e,n,r){if(t&&t.o){if(G.has(t))return;G.add(t),J.c.push((()=>{G.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const Z={duration:0};function tt(n,r,o){let l,c,s=r(n,o),a=!1,u=0;function h(){l&&M(n,l)}function y(){const{delay:r=0,duration:o=300,easing:i=e,tick:y=t,css:v}=s||Z;v&&(l=function(t,e,n,r,o,i,l,c=0){const s=16.666/r;let a="{\n";for(let t=0;t<=1;t+=s){const r=e+(n-e)*i(t);a+=100*t+`%{${l(r,1-r)}}\n`}const u=a+`100% {${l(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${c}`,m=g(t);E.add(m);const p=m.__svelte_stylesheet||(m.__svelte_stylesheet=$(t).sheet),d=m.__svelte_rules||(m.__svelte_rules={});d[f]||(d[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${r}ms linear ${o}ms 1 both`,R+=1,f}(n,0,1,o,r,i,v,u++)),y(0,1);const w=f()+r,b=w+o;c&&c.abort(),a=!0,D((()=>Y(n,!0,"start"))),c=function(t){let e;return 0===p.size&&m(d),{promise:new Promise((n=>{p.add(e={c:t,f:n})})),abort(){p.delete(e)}}}((t=>{if(a){if(t>=b)return y(1,0),Y(n,!0,"end"),h(),a=!1;if(t>=w){const e=i((t-w)/o);y(e,1-e)}}return a}))}let v=!1;return{start(){v||(v=!0,M(n),i(s)?(s=s(),(B||(B=Promise.resolve(),B.then((()=>{B=null}))),B).then(y)):y())},invalidate(){v=!1},end(){a&&(h(),a=!1)}}}function et(t){t&&t.c()}function nt(t,e,r,l){const{fragment:c,on_mount:s,on_destroy:a,after_update:u}=t.$$;c&&c.m(e,r),l||D((()=>{const e=s.map(n).filter(i);a?a.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(D)}function rt(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(t,e){-1===t.$$.dirty[0]&&(V.push(t),T||(T=!0,L.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function it(e,n,i,l,c,s,a,u=[-1]){const f=H;A(e);const m=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};a&&a(m.root);let p=!1;if(m.ctx=i?i(e,n.props||{},((t,n,...r)=>{const o=r.length?r[0]:n;return m.ctx&&c(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),p&&ot(e,t)),n})):[],m.update(),p=!0,o(m.before_update),m.fragment=!!l&&l(m.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);m.fragment&&m.fragment.l(t),t.forEach(v)}else m.fragment&&m.fragment.c();n.intro&&U(e.$$.fragment),nt(e,n.target,n.anchor,n.customElement),F()}A(f)}class lt{$destroy(){rt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ct(t,{delay:n=0,duration:r=400,easing:o=e}={}){const i=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:o,css:t=>"opacity: "+t*i}}const st=parseFloat;function at(t,e=";"){let n;if(Array.isArray(t))n=t.filter((t=>t));else{n=[];for(const e in t)t[e]&&n.push(`${e}:${t[e]}`)}return n.join(e)}function ut(t){let e,n,r,o,i,l,c;function s(t,e){return"string"==typeof t[7][4]?mt:ft}let u=s(t),f=u(t);return{c(){e=_("svg"),n=_("g"),r=_("g"),f.c(),O(r,"transform",t[10]),O(n,"transform",o=`translate(${t[7][0]/2} ${t[7][1]/2})`),O(n,"transform-origin",i=t[7][0]/4+" 0"),O(e,"id",t[0]),O(e,"class",l=a(t[8])+" svelte-1cj2gr0"),O(e,"style",t[9]),O(e,"viewBox",c=`0 0 ${t[7][0]} ${t[7][1]}`),O(e,"aria-hidden","true"),O(e,"role","img"),O(e,"xmlns","http://www.w3.org/2000/svg")},m(t,o){y(t,e,o),h(e,n),h(n,r),f.m(r,null)},p(t,m){u===(u=s(t))&&f?f.p(t,m):(f.d(1),f=u(t),f&&(f.c(),f.m(r,null))),1024&m&&O(r,"transform",t[10]),128&m&&o!==(o=`translate(${t[7][0]/2} ${t[7][1]/2})`)&&O(n,"transform",o),128&m&&i!==(i=t[7][0]/4+" 0")&&O(n,"transform-origin",i),1&m&&O(e,"id",t[0]),256&m&&l!==(l=a(t[8])+" svelte-1cj2gr0")&&O(e,"class",l),512&m&&O(e,"style",t[9]),128&m&&c!==(c=`0 0 ${t[7][0]} ${t[7][1]}`)&&O(e,"viewBox",c)},d(t){t&&v(e),f.d()}}}function ft(t){let e,n,r,o,i,l,c,s,a,u;return{c(){e=_("path"),l=_("path"),O(e,"d",n=t[7][4][0]),O(e,"fill",r=t[3]||t[1]||"currentColor"),O(e,"fill-opacity",o=0!=t[6]?t[4]:t[5]),O(e,"transform",i=`translate(${t[7][0]/-2} ${t[7][1]/-2})`),O(l,"d",c=t[7][4][1]),O(l,"fill",s=t[2]||t[1]||"currentColor"),O(l,"fill-opacity",a=0!=t[6]?t[5]:t[4]),O(l,"transform",u=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)},m(t,n){y(t,e,n),y(t,l,n)},p(t,f){128&f&&n!==(n=t[7][4][0])&&O(e,"d",n),10&f&&r!==(r=t[3]||t[1]||"currentColor")&&O(e,"fill",r),112&f&&o!==(o=0!=t[6]?t[4]:t[5])&&O(e,"fill-opacity",o),128&f&&i!==(i=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)&&O(e,"transform",i),128&f&&c!==(c=t[7][4][1])&&O(l,"d",c),6&f&&s!==(s=t[2]||t[1]||"currentColor")&&O(l,"fill",s),112&f&&a!==(a=0!=t[6]?t[5]:t[4])&&O(l,"fill-opacity",a),128&f&&u!==(u=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)&&O(l,"transform",u)},d(t){t&&v(e),t&&v(l)}}}function mt(t){let e,n,r,o;return{c(){e=_("path"),O(e,"d",n=t[7][4]),O(e,"fill",r=t[1]||t[2]||"currentColor"),O(e,"transform",o=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)},m(t,n){y(t,e,n)},p(t,i){128&i&&n!==(n=t[7][4])&&O(e,"d",n),6&i&&r!==(r=t[1]||t[2]||"currentColor")&&O(e,"fill",r),128&i&&o!==(o=`translate(${t[7][0]/-2} ${t[7][1]/-2})`)&&O(e,"transform",o)},d(t){t&&v(e)}}}function pt(e){let n,r=e[7][4]&&ut(e);return{c(){r&&r.c(),n=C()},m(t,e){r&&r.m(t,e),y(t,n,e)},p(t,[e]){t[7][4]?r?r.p(t,e):(r=ut(t),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i:t,o:t,d(t){r&&r.d(t),t&&v(n)}}}function dt(t,e,n){let r,o,i,l,{class:c=""}=e,{id:s=""}=e,{style:a=""}=e,{icon:u}=e,{size:f=""}=e,{color:m=""}=e,{fw:p=!1}=e,{pull:d=""}=e,{scale:h=1}=e,{translateX:g=0}=e,{translateY:$=0}=e,{rotate:y=""}=e,{flip:v=!1}=e,{spin:w=!1}=e,{pulse:b=!1}=e,{primaryColor:_=""}=e,{secondaryColor:x=""}=e,{primaryOpacity:z=1}=e,{secondaryOpacity:C=.4}=e,{swapOpacity:k=!1}=e;return t.$$set=t=>{"class"in t&&n(11,c=t.class),"id"in t&&n(0,s=t.id),"style"in t&&n(12,a=t.style),"icon"in t&&n(13,u=t.icon),"size"in t&&n(14,f=t.size),"color"in t&&n(1,m=t.color),"fw"in t&&n(15,p=t.fw),"pull"in t&&n(16,d=t.pull),"scale"in t&&n(17,h=t.scale),"translateX"in t&&n(18,g=t.translateX),"translateY"in t&&n(19,$=t.translateY),"rotate"in t&&n(20,y=t.rotate),"flip"in t&&n(21,v=t.flip),"spin"in t&&n(22,w=t.spin),"pulse"in t&&n(23,b=t.pulse),"primaryColor"in t&&n(2,_=t.primaryColor),"secondaryColor"in t&&n(3,x=t.secondaryColor),"primaryOpacity"in t&&n(4,z=t.primaryOpacity),"secondaryOpacity"in t&&n(5,C=t.secondaryOpacity),"swapOpacity"in t&&n(6,k=t.swapOpacity)},t.$$.update=()=>{8192&t.$$.dirty&&n(7,r=u&&u.icon||[0,0,"",[],""]),12584960&t.$$.dirty&&n(8,o=at([c,"svelte-fa",w&&"spin",b&&"pulse"]," ")),118784&t.$$.dirty&&n(9,i=function(t,e,n,r){let o,i,l,c,s,a="-.125em";return r&&(s="center",i="1.25em"),n&&(o=n),e&&("lg"==e?(c="1.33333em",l=".75em",a="-.225em"):c="xs"==e?".75em":"sm"==e?".875em":e.replace("x","em")),at([at({float:o,width:i,height:"1em","line-height":l,"font-size":c,"text-align":s,"vertical-align":a,"transform-origin":"center",overflow:"visible"}),t])}(a,f,d,p)),4063232&t.$$.dirty&&n(10,l=function(t,e,n,r,o,i=1,l="",c=""){let s=1,a=1;return o&&("horizontal"==o?s=-1:"vertical"==o?a=-1:s=a=-1),at([`translate(${st(e)*i}${l},${st(n)*i}${l})`,`scale(${s*st(t)},${a*st(t)})`,r&&`rotate(${r}${c})`]," ")}(h,g,$,y,v,512))},[s,m,_,x,z,C,k,r,o,i,l,c,a,u,f,p,d,h,g,$,y,v,w,b]}class ht extends lt{constructor(t){super(),it(this,t,dt,pt,l,{class:11,id:0,style:12,icon:13,size:14,color:1,fw:15,pull:16,scale:17,translateX:18,translateY:19,rotate:20,flip:21,spin:22,pulse:23,primaryColor:2,secondaryColor:3,primaryOpacity:4,secondaryOpacity:5,swapOpacity:6})}}
/*!
     * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */var gt={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},$t={prefix:"fab",iconName:"itch-io",icon:[512,512,[],"f83a","M71.92 34.77C50.2 47.67 7.4 96.84 7 109.73v21.34c0 27.06 25.29 50.84 48.25 50.84 27.57 0 50.54-22.85 50.54-50 0 27.12 22.18 50 49.76 50s49-22.85 49-50c0 27.12 23.59 50 51.16 50h.5c27.57 0 51.16-22.85 51.16-50 0 27.12 21.47 50 49 50s49.76-22.85 49.76-50c0 27.12 23 50 50.54 50 23 0 48.25-23.78 48.25-50.84v-21.34c-.4-12.9-43.2-62.07-64.92-75C372.56 32.4 325.76 32 256 32S91.14 33.1 71.92 34.77zm132.32 134.39c-22 38.4-77.9 38.71-99.85.25-13.17 23.14-43.17 32.07-56 27.66-3.87 40.15-13.67 237.13 17.73 269.15 80 18.67 302.08 18.12 379.76 0 31.65-32.27 21.32-232 17.75-269.15-12.92 4.44-42.88-4.6-56-27.66-22 38.52-77.85 38.1-99.85-.24-7.1 12.49-23.05 28.94-51.76 28.94a57.54 57.54 0 0 1-51.75-28.94zm-41.58 53.77c16.47 0 31.09 0 49.22 19.78a436.91 436.91 0 0 1 88.18 0C318.22 223 332.85 223 349.31 223c52.33 0 65.22 77.53 83.87 144.45 17.26 62.15-5.52 63.67-33.95 63.73-42.15-1.57-65.49-32.18-65.49-62.79-39.25 6.43-101.93 8.79-155.55 0 0 30.61-23.34 61.22-65.49 62.79-28.42-.06-51.2-1.58-33.94-63.73 18.67-67 31.56-144.45 83.88-144.45zM256 270.79s-44.38 40.77-52.35 55.21l29-1.17v25.32c0 1.55 21.34.16 23.33.16 11.65.54 23.31 1 23.31-.16v-25.28l29 1.17c-8-14.48-52.35-55.24-52.35-55.24z"]},yt={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},vt={prefix:"fas",iconName:"envelope-open-text",icon:[512,512,[],"f658","M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"]};function wt(t,e,n){const r=t.slice();return r[2]=e[n].id,r[3]=e[n].title,r[4]=e[n].desc,r[5]=e[n].myRole,r[6]=e[n].type,r[7]=e[n].link,r[8]=e[n].logo,r[9]=e[n].preview,r}function bt(t,e,n){const r=t.slice();return r[2]=e[n].id,r[3]=e[n].title,r[4]=e[n].desc,r[5]=e[n].myRole,r[6]=e[n].type,r[7]=e[n].link,r[8]=e[n].logo,r[9]=e[n].preview,r}function _t(e){let n,r,o,i,l,c,a,u,f,m,p,d,g,$,w,_,C,k,j,E,H,R,M,A,V,I=e[6]+"",N=e[4]+"",P=e[5]+"";return{c(){n=b("div"),r=b("div"),o=b("img"),c=z(),a=b("br"),u=z(),f=b("h5"),m=b("i"),p=x(I),d=z(),g=b("p"),$=x(N),w=z(),_=b("p"),C=x(P),k=z(),j=b("a"),E=x("Visit website"),R=z(),M=b("div"),A=b("img"),s(o.src,i=e[8])||O(o,"src",i),O(o,"alt",l=e[3]),O(o,"class","svelte-trnigc"),O(j,"href",H=e[7]),O(j,"target","”_blank”"),O(r,"class","projectDesc svelte-trnigc"),O(A,"class","previewImage svelte-trnigc"),s(A.src,V=e[9])||O(A,"src",V),O(A,"alt",""),O(M,"class","projectImage svelte-trnigc"),O(n,"class","container svelte-trnigc")},m(t,e){y(t,n,e),h(n,r),h(r,o),h(r,c),h(r,a),h(r,u),h(r,f),h(f,m),h(m,p),h(r,d),h(r,g),h(g,$),h(r,w),h(r,_),h(_,C),h(r,k),h(r,j),h(j,E),h(n,R),h(n,M),h(M,A)},p:t,d(t){t&&v(n)}}}function xt(e){let n,r,o,i,l,c,a,u,f,m,p,d,g,$,w,_,C,k,j,E,H,R,M,A,V,I,N=e[6]+"",P=e[4]+"",L=e[5]+"";return{c(){n=b("div"),r=b("div"),o=b("img"),c=z(),a=b("br"),u=z(),f=b("h5"),m=b("i"),p=x(N),d=z(),g=b("p"),$=x(P),w=z(),_=b("p"),C=x(L),k=z(),j=b("a"),E=x("Visit website"),R=z(),M=b("div"),A=b("img"),I=z(),s(o.src,i=e[8])||O(o,"src",i),O(o,"alt",l=e[3]),O(o,"class","svelte-trnigc"),O(j,"href",H=e[7]),O(j,"target","”_blank”"),O(r,"class","projectDesc svelte-trnigc"),O(A,"class","previewImage svelte-trnigc"),s(A.src,V=e[9])||O(A,"src",V),O(A,"alt",""),O(M,"class","projectImage svelte-trnigc"),O(n,"class","container svelte-trnigc")},m(t,e){y(t,n,e),h(n,r),h(r,o),h(r,c),h(r,a),h(r,u),h(r,f),h(f,m),h(m,p),h(r,d),h(r,g),h(g,$),h(r,w),h(r,_),h(_,C),h(r,k),h(r,j),h(j,E),h(n,R),h(n,M),h(M,A),h(n,I)},p:t,d(t){t&&v(n)}}}function zt(e){let n,r,o,i,l,c,s=e[0],a=[];for(let t=0;t<s.length;t+=1)a[t]=_t(bt(e,s,t));let u=e[1],f=[];for(let t=0;t<u.length;t+=1)f[t]=xt(wt(e,u,t));return{c(){n=b("main"),r=b("h1"),r.textContent="Front-End Projects:",o=z();for(let t=0;t<a.length;t+=1)a[t].c();i=z(),l=b("h1"),l.textContent="Game Project(s):",c=z();for(let t=0;t<f.length;t+=1)f[t].c();O(r,"class","svelte-trnigc"),O(l,"class","svelte-trnigc")},m(t,e){y(t,n,e),h(n,r),h(n,o);for(let t=0;t<a.length;t+=1)a[t].m(n,null);h(n,i),h(n,l),h(n,c);for(let t=0;t<f.length;t+=1)f[t].m(n,null)},p(t,[e]){if(1&e){let r;for(s=t[0],r=0;r<s.length;r+=1){const o=bt(t,s,r);a[r]?a[r].p(o,e):(a[r]=_t(o),a[r].c(),a[r].m(n,i))}for(;r<a.length;r+=1)a[r].d(1);a.length=s.length}if(2&e){let r;for(u=t[1],r=0;r<u.length;r+=1){const o=wt(t,u,r);f[r]?f[r].p(o,e):(f[r]=xt(o),f[r].c(),f[r].m(n,null))}for(;r<f.length;r+=1)f[r].d(1);f.length=u.length}},i:t,o:t,d(t){t&&v(n),w(a,t),w(f,t)}}}function Ct(t){return[[{id:1,title:"SushiPay",desc:"This is a description.",myRole:"I designed the logo.",type:"Online Restaurant Order",link:"https://sushipay-pemweb.xyz/",logo:"./image/sushipay.svg",preview:"./image/sushipay-preview.png"},{id:2,title:"ConsolePay",desc:"This too is a description",myRole:"I also designed the logo.",type:"Online Game Console Rental",link:"http://console.sushipay-pemweb.xyz/",logo:"./image/consolepay.svg",preview:"./image/consolepay-preview.png"},{id:3,title:"Paycation",desc:"Hi, I'm a description.",myRole:"I designed this logo too.",type:"Online Hotel Booking",link:"http://hotel.sushipay-pemweb.xyz/",logo:"./image/paycation.svg",preview:"./image/paycation-preview.png"}],[{id:1,title:"Hendry Run",desc:"Hendry Run is a 3D platformer.",myRole:"This logo too.",type:"3D Platformer",link:"https://umn.itch.io/hendry-run",logo:"./image/hendryrun.svg",preview:"./image/hendryrun-preview.png"}]]}class kt extends lt{constructor(t){super(),it(this,t,Ct,zt,l,{})}}function jt(e){let n,r,o,i;return{c(){n=b("span"),r=x(e[1]),o=x(".")},m(t,e){y(t,n,e),h(n,r),h(n,o)},p(t,e){2&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,t[1])},i(t){i||D((()=>{i=tt(n,ct,{}),i.start()}))},o:t,d(t){t&&v(n)}}}function Ot(e){let n,r,o,i,c,s,a,u,f,m,p,d=e[1],g=jt(e);return{c(){n=b("main"),r=b("nav"),o=z(),i=b("div"),c=b("div"),s=b("h1"),s.textContent=`Hello, I'm ${e[0]}.`,a=z(),u=b("h3"),f=x("A\r\n\t\t\t\t"),g.c(),m=z(),p=b("div"),p.innerHTML='<img src="https://clarkpaintings.com/wp-content/uploads/2014/12/Pencil_Cat_3.jpg" alt=""/>',O(u,"class","svelte-1j7chyc"),O(c,"class","item1 svelte-1j7chyc"),O(p,"class","item2 svelte-1j7chyc"),O(i,"class","container svelte-1j7chyc")},m(t,e){y(t,n,e),h(n,r),h(n,o),h(n,i),h(i,c),h(c,s),h(c,a),h(c,u),h(u,f),g.m(u,null),h(i,m),h(i,p)},p(e,[n]){2&n&&l(d,d=e[1])?(K(),W(g,1,1,t),Q(),g=jt(e),g.c(),U(g),g.m(u,null)):g.p(e,n)},i(t){U(g)},o(t){W(g)},d(t){t&&v(n),g.d(t)}}}function Et(t,e,n){let r,o="front-end developer",i=["front-end developer","human","college student","B C D"],l=0,c=()=>{3===l?(n(1,o=i[l]),l=0):(n(1,o=i[l]),l++)};return t.$$.update=()=>{4&t.$$.dirty&&(clearInterval(r),n(2,r=setInterval(c,1e3)))},["Jonathan Franzeli",o,r]}class Ht extends lt{constructor(t){super(),it(this,t,Et,Ot,l,{name:0})}get name(){return this.$$.ctx[0]}}function Rt(e){let n;return{c(){n=b("main"),n.innerHTML="<h1>About:</h1>"},m(t,e){y(t,n,e)},p:t,i:t,o:t,d(t){t&&v(n)}}}class Mt extends lt{constructor(t){super(),it(this,t,null,Rt,l,{})}}function At(e){let n,r,o,i,l;return{c(){n=b("li"),r=b("a"),r.textContent="Home",o=x(" |"),O(r,"href","/"),O(n,"class","svelte-nbh377")},m(t,c){y(t,n,c),h(n,r),y(t,o,c),i||(l=k(r,"click",j(e[2])),i=!0)},p:t,d(t){t&&v(n),t&&v(o),i=!1,l()}}}function Vt(e){let n,r,o,i,l;return{c(){n=b("li"),r=b("a"),r.innerHTML="<strong>Home</strong>",o=x(" |"),O(r,"href","/"),O(n,"class","svelte-nbh377")},m(t,c){y(t,n,c),h(n,r),y(t,o,c),i||(l=k(r,"click",j(e[1])),i=!0)},p:t,d(t){t&&v(n),t&&v(o),i=!1,l()}}}function It(e){let n,r,o,i,l;return{c(){n=b("li"),r=b("a"),r.textContent="Projects",o=x(" |"),O(r,"href","/"),O(n,"class","svelte-nbh377")},m(t,c){y(t,n,c),h(n,r),y(t,o,c),i||(l=k(r,"click",j(e[4])),i=!0)},p:t,d(t){t&&v(n),t&&v(o),i=!1,l()}}}function Nt(e){let n,r,o,i,l;return{c(){n=b("li"),r=b("a"),r.innerHTML="<strong>Projects</strong>",o=x(" |"),O(r,"href","/"),O(n,"class","svelte-nbh377")},m(t,c){y(t,n,c),h(n,r),y(t,o,c),i||(l=k(r,"click",j(e[3])),i=!0)},p:t,d(t){t&&v(n),t&&v(o),i=!1,l()}}}function Pt(e){let n,r,o,i;return{c(){n=b("li"),r=b("a"),r.textContent="About",O(r,"href","/"),O(n,"class","svelte-nbh377")},m(t,l){y(t,n,l),h(n,r),o||(i=k(r,"click",j(e[6])),o=!0)},p:t,d(t){t&&v(n),o=!1,i()}}}function Lt(e){let n,r,o,i;return{c(){n=b("li"),r=b("a"),r.innerHTML="<strong>About</strong>",O(r,"href","/"),O(n,"class","svelte-nbh377")},m(t,l){y(t,n,l),h(n,r),o||(i=k(r,"click",j(e[5])),o=!0)},p:t,d(t){t&&v(n),o=!1,i()}}}function Tt(t){let e,n,r,o;return n=new Mt({}),{c(){e=b("div"),et(n.$$.fragment)},m(t,r){y(t,e,r),nt(n,e,null),o=!0},i(t){o||(U(n.$$.fragment,t),r||D((()=>{r=tt(e,ct,{}),r.start()})),o=!0)},o(t){W(n.$$.fragment,t),o=!1},d(t){t&&v(e),rt(n)}}}function Dt(t){let e,n,r,o;return n=new kt({}),{c(){e=b("div"),et(n.$$.fragment)},m(t,r){y(t,e,r),nt(n,e,null),o=!0},i(t){o||(U(n.$$.fragment,t),r||D((()=>{r=tt(e,ct,{}),r.start()})),o=!0)},o(t){W(n.$$.fragment,t),o=!1},d(t){t&&v(e),rt(n)}}}function St(t){let e,n,r,o;return n=new Ht({}),{c(){e=b("div"),et(n.$$.fragment)},m(t,r){y(t,e,r),nt(n,e,null),o=!0},i(t){o||(U(n.$$.fragment,t),r||D((()=>{r=tt(e,ct,{}),r.start()})),o=!0)},o(t){W(n.$$.fragment,t),o=!1},d(t){t&&v(e),rt(n)}}}function Bt(t){let e,n,r,o;const i=[St,Dt,Tt],l=[];function c(t,e){return 0===t[0]?0:1===t[0]?1:2}return e=c(t),n=l[e]=i[e](t),{c(){n.c(),r=C()},m(t,n){l[e].m(t,n),y(t,r,n),o=!0},p(t,o){let s=e;e=c(t),e!==s&&(K(),W(l[s],1,1,(()=>{l[s]=null})),Q(),n=l[e],n||(n=l[e]=i[e](t),n.c()),U(n,1),n.m(r.parentNode,r))},i(t){o||(U(n),o=!0)},o(t){W(n),o=!1},d(t){l[e].d(t),t&&v(r)}}}function qt(e){let n,r,o,i,c,s,a,u,f,m,p,d,g,$,w,_,x,C,k,j=e[0];function E(t,e){return 0===t[0]?Vt:At}let H=E(e),R=H(e);function M(t,e){return 1===t[0]?Nt:It}let A=M(e),V=A(e);function I(t,e){return 2===t[0]?Lt:Pt}let N=I(e),P=N(e),L=Bt(e);return f=new ht({props:{icon:gt,size:"2x"}}),d=new ht({props:{icon:yt,size:"2x"}}),w=new ht({props:{icon:$t,size:"2x"}}),C=new ht({props:{icon:vt,size:"1.9x"}}),{c(){n=b("main"),r=b("ul"),R.c(),o=z(),V.c(),i=z(),P.c(),c=z(),L.c(),s=z(),a=b("footer"),u=b("a"),et(f.$$.fragment),m=z(),p=b("a"),et(d.$$.fragment),g=z(),$=b("a"),et(w.$$.fragment),_=z(),x=b("a"),et(C.$$.fragment),O(r,"id","navbar"),O(r,"class","svelte-nbh377"),O(u,"href","https://github.com/myqpalzm"),O(u,"title","Github"),O(u,"target","_blank"),O(u,"class","svelte-nbh377"),O(p,"href","https://www.linkedin.com/in/jonathan-franzeli-b15094114/"),O(p,"title","Linkedin"),O(p,"target","_blank"),O(p,"class","svelte-nbh377"),O($,"href","https://myqpalzm.itch.io/"),O($,"title","Itch.io"),O($,"target","_blank"),O($,"class","svelte-nbh377"),O(x,"href","mailto:jonathan.franzeli@student.umn.ac.id"),O(x,"title","Email"),O(x,"class","svelte-nbh377"),O(a,"class","svelte-nbh377"),O(n,"class","svelte-nbh377")},m(t,e){y(t,n,e),h(n,r),R.m(r,null),h(r,o),V.m(r,null),h(r,i),P.m(r,null),h(n,c),L.m(n,null),h(n,s),h(n,a),h(a,u),nt(f,u,null),h(a,m),h(a,p),nt(d,p,null),h(a,g),h(a,$),nt(w,$,null),h(a,_),h(a,x),nt(C,x,null),k=!0},p(e,[c]){H===(H=E(e))&&R?R.p(e,c):(R.d(1),R=H(e),R&&(R.c(),R.m(r,o))),A===(A=M(e))&&V?V.p(e,c):(V.d(1),V=A(e),V&&(V.c(),V.m(r,i))),N===(N=I(e))&&P?P.p(e,c):(P.d(1),P=N(e),P&&(P.c(),P.m(r,null))),1&c&&l(j,j=e[0])?(K(),W(L,1,1,t),Q(),L=Bt(e),L.c(),U(L),L.m(n,s)):L.p(e,c)},i(t){k||(U(L),U(f.$$.fragment,t),U(d.$$.fragment,t),U(w.$$.fragment,t),U(C.$$.fragment,t),k=!0)},o(t){W(L),W(f.$$.fragment,t),W(d.$$.fragment,t),W(w.$$.fragment,t),W(C.$$.fragment,t),k=!1},d(t){t&&v(n),R.d(),V.d(),P.d(),L.d(t),rt(f),rt(d),rt(w),rt(C)}}}function Ft(t,e,n){let r=0;return[r,()=>n(0,r=0),()=>n(0,r=0),()=>n(0,r=1),()=>n(0,r=1),()=>n(0,r=2),()=>n(0,r=2)]}return new class extends lt{constructor(t){super(),it(this,t,Ft,qt,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
