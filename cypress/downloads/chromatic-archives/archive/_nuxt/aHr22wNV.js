import{u as C,d as q,a as R,c as y,h as T,r as _,o as z,b as A,e as E,f as k,g as B,p as j,i as I,j as S,n as $,w as L,k as V,_ as U,l as D,m as O,q as v,t as x,s as H,v as M,x as F}from"./CSO6D75D.js";import{u as w}from"./BFux36HU.js";async function N(t,n=C()){const{path:a,matched:u}=n.resolve(t);if(!u.length||(n._routePreloaded||(n._routePreloaded=new Set),n._routePreloaded.has(a)))return;const e=n._preloadPromises=n._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>N(t,n));n._routePreloaded.add(a);const s=u.map(r=>{var o;return(o=r.components)==null?void 0:o.default}).filter(r=>typeof r=="function");for(const r of s){const o=Promise.resolve(r()).catch(()=>{}).finally(()=>e.splice(e.indexOf(o)));e.push(o)}await Promise.all(e)}const G=(...t)=>t.find(n=>n!==void 0),Q="noopener noreferrer",X=globalThis.requestIdleCallback||(t=>{const n=Date.now(),a={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-n))};return setTimeout(()=>{t(a)},1)}),J=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)});/*! @__NO_SIDE_EFFECTS__ */function K(t){const n=t.componentName||"NuxtLink",a=(e,s,r)=>{e[s]!==void 0&&e[r]!==void 0&&console.warn(`[${n}] \`${s}\` and \`${r}\` cannot be used together. \`${r}\` will be ignored.`)},u=(e,s)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const r=t.trailingSlash==="append"?L:V;if(typeof e=="string")return r(e,!0);const o="path"in e?e.path:s(e).path;return{...e,name:void 0,path:r(o,!0)}};return q({name:n,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:s}){const r=C()??R(),o=y(()=>{a(e,"to","href");const i=e.to||e.href||"";return u(i,r.resolve)}),d=y(()=>e.external||e.target&&e.target!=="_self"?!0:typeof o.value=="object"?!1:o.value===""||T(o.value,{acceptRelative:!0})),m=_(!1),f=_(null),P=i=>{var h;f.value=e.custom?(h=i==null?void 0:i.$el)==null?void 0:h.nextElementSibling:i==null?void 0:i.$el};if(a(e,"prefetch","noPrefetch"),e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!Z()){const h=S();let p,l=null;z(()=>{const b=Y();A(()=>{p=X(()=>{var g;(g=f==null?void 0:f.value)!=null&&g.tagName&&(l=b.observe(f.value,async()=>{l==null||l(),l=null;const c=typeof o.value=="string"?o.value:r.resolve(o.value).fullPath;await Promise.all([h.hooks.callHook("link:prefetch",c).catch(()=>{}),!d.value&&N(o.value,r).catch(()=>{})]),m.value=!0}))})})}),E(()=>{p&&J(p),l==null||l(),l=null})}return()=>{var b,g;if(!d.value){const c={ref:P,to:o.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(m.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel),k(B("RouterLink"),c,s.default)}const i=typeof o.value=="object"?((b=r.resolve(o.value))==null?void 0:b.href)??null:o.value||null,h=e.target||null;a(e,"noRel","rel");const p=e.noRel?null:G(e.rel,t.externalRelAttribute,i?Q:"")||null,l=()=>$(i,{replace:e.replace});return e.custom?s.default?s.default({href:i,navigate:l,get route(){if(!i)return;const c=j(i);return{path:c.pathname,fullPath:c.pathname,get query(){return I(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:i}},rel:p,target:h,isExternal:d.value,isActive:!1,isExactActive:!1}):null:k("a",{ref:f,href:i,rel:p,target:h},(g=s.default)==null?void 0:g.call(s))}}})}const W=K({componentName:"NuxtLink"});function Y(){const t=S();if(t._observer)return t._observer;let n=null;const a=new Map,u=(s,r)=>(n||(n=new IntersectionObserver(o=>{for(const d of o){const m=a.get(d.target);(d.isIntersecting||d.intersectionRatio>0)&&m&&m()}})),a.set(s,r),n.observe(s),()=>{a.delete(s),n.unobserve(s),a.size===0&&(n.disconnect(),n=null)});return t._observer={observe:u}}function Z(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}const ee={__name:"error-404",props:{appName:{type:String,default:"Nuxt"},version:{type:String,default:""},statusCode:{type:Number,default:404},statusMessage:{type:String,default:"Not Found"},description:{type:String,default:"Sorry, the page you are looking for could not be found."},backHome:{type:String,default:"Go back home"}},setup(t,{expose:n}){n();const a=t;w({title:`${a.statusCode} - ${a.statusMessage} | ${a.appName}`,script:[],style:[{children:'*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}h1{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,p{margin:0}*,:before,:after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / .5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }'}]});const u={props:a,get useHead(){return w}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}},te={class:"font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"},ne={class:"max-w-520px text-center z-20"},ae=["textContent"],re=["textContent"],oe={class:"w-full flex items-center justify-center"};function se(t,n,a,u,e,s){const r=W;return D(),O("div",te,[n[0]||(n[0]=v("div",{class:"fixed left-0 right-0 spotlight z-10"},null,-1)),v("div",ne,[v("h1",{class:"text-8xl sm:text-10xl font-medium mb-8",textContent:x(a.statusCode)},null,8,ae),v("p",{class:"text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight",textContent:x(a.description)},null,8,re),v("div",oe,[H(r,{to:"/",class:"gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"},{default:M(()=>[F(x(a.backHome),1)]),_:1})])])])}const ue=U(ee,[["render",se],["__scopeId","data-v-bc8852ab"],["__file","/home/enyew/aladia/frontend-qa-selection/testing/node_modules/@nuxt/ui-templates/dist/templates/error-404.vue"]]);export{ue as default};
//# sourceMappingURL=aHr22wNV.js.map