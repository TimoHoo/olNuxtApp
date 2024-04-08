import N from"./BIFoEP89.js";import U from"./CelS9bXk.js";import{u as J}from"./BX-j-myY.js";import{i as O,r as v,G as R,A as I,j as M,H as V,I as W,J as F,_ as X,K as Q,L as B,M as H,N as E,o as k,c as L,F as Y,C as Z,O as S,D as x,w as h,b,z as A,l as K,P as ee,Q as te,T as oe,R as ne,v as se,a as le,d as ae,t as re,x as ue}from"./CWvnpu3D.js";import{I as z,u as T,o as g,A as P,N as j,a as D,l as ie}from"./D1fMqrGr.js";import{s as ce}from"./kbyLnVhO.js";import{t as pe,i as w,l as de}from"./QuuH8Hmt.js";import{u as fe,o as me}from"./Dgu_NOG_.js";import{b as ve}from"./blSOxsGD.js";import"./DhKcbZJJ.js";import"./qsMMcMsd.js";import"./UbilZkxu.js";import"./Cg7Lj_Om.js";import"./aPxrJPp6.js";import"./Cd0ASaHY.js";const ge={wrapper:"w-full flex flex-col",container:"w-full flex flex-col",item:{base:"",size:"text-sm",color:"text-gray-500 dark:text-gray-400",padding:"pt-1.5 pb-3",icon:"ms-auto transform transition-transform duration-200"},transition:{enterActiveClass:"overflow-hidden transition-[height] duration-200 ease-out",leaveActiveClass:"overflow-hidden transition-[height] duration-200 ease-out"},default:{openIcon:"i-heroicons-chevron-down-20-solid",closeIcon:"",class:"mb-1.5 w-full",variant:"soft"}};var ye=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ye||{});let _=Symbol("DisclosureContext");function $(e){let i=F(_,null);if(i===null){let c=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(c,$),c}return i}let q=Symbol("DisclosurePanelContext");function he(){return F(q,null)}let be=O({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(e,{slots:i,attrs:c}){let r=v(e.defaultOpen?0:1),o=v(null),d=v(null),l={buttonId:v(`headlessui-disclosure-button-${z()}`),panelId:v(`headlessui-disclosure-panel-${z()}`),disclosureState:r,panel:o,button:d,toggleDisclosure(){r.value=T(r.value,{0:1,1:0})},closeDisclosure(){r.value!==1&&(r.value=1)},close(s){l.closeDisclosure();let u=s?s instanceof HTMLElement?s:s.value instanceof HTMLElement?g(s):g(l.button):g(l.button);u==null||u.focus()}};return R(_,l),pe(I(()=>T(r.value,{0:w.Open,1:w.Closed}))),()=>{let{defaultOpen:s,...u}=e,f={open:r.value===0,close:l.close};return P({theirProps:u,ourProps:{},slot:f,slots:i,attrs:c,name:"Disclosure"})}}}),De=O({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(e,{attrs:i,slots:c,expose:r}){let o=$("DisclosureButton"),d=he(),l=I(()=>d===null?!1:d.value===o.panelId.value);M(()=>{l.value||e.id!==null&&(o.buttonId.value=e.id)}),V(()=>{l.value||(o.buttonId.value=null)});let s=v(null);r({el:s,$el:s}),l.value||W(()=>{o.button.value=s.value});let u=ce(I(()=>({as:e.as,type:i.type})),s);function f(){var t;e.disabled||(l.value?(o.toggleDisclosure(),(t=g(o.button))==null||t.focus()):o.toggleDisclosure())}function a(t){var p;if(!e.disabled)if(l.value)switch(t.key){case D.Space:case D.Enter:t.preventDefault(),t.stopPropagation(),o.toggleDisclosure(),(p=g(o.button))==null||p.focus();break}else switch(t.key){case D.Space:case D.Enter:t.preventDefault(),t.stopPropagation(),o.toggleDisclosure();break}}function n(t){switch(t.key){case D.Space:t.preventDefault();break}}return()=>{var t;let p={open:o.disclosureState.value===0},{id:y,...m}=e,G=l.value?{ref:s,type:u.value,onClick:f,onKeydown:a}:{id:(t=o.buttonId.value)!=null?t:y,ref:s,type:u.value,"aria-expanded":o.disclosureState.value===0,"aria-controls":o.disclosureState.value===0||g(o.panel)?o.panelId.value:void 0,disabled:e.disabled?!0:void 0,onClick:f,onKeydown:a,onKeyup:n};return P({ourProps:G,theirProps:m,slot:p,attrs:i,slots:c,name:"DisclosureButton"})}}}),Ie=O({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:i,slots:c,expose:r}){let o=$("DisclosurePanel");M(()=>{e.id!==null&&(o.panelId.value=e.id)}),V(()=>{o.panelId.value=null}),r({el:o.panel,$el:o.panel}),R(q,o.panelId);let d=de(),l=I(()=>d!==null?(d.value&w.Open)===w.Open:o.disclosureState.value===0);return()=>{var s;let u={open:o.disclosureState.value===0,close:o.close},{id:f,...a}=e,n={id:(s=o.panelId.value)!=null?s:f,ref:o.panel};return P({ourProps:n,theirProps:a,slot:u,attrs:i,slots:c,features:j.RenderStrategy|j.Static,visible:l.value,name:"DisclosurePanel"})}}});const C=Q(B.ui.strategy,B.ui.accordion,ge),Se=Q(B.ui.strategy,B.ui.button,ve),Be=O({components:{HDisclosure:be,HDisclosureButton:De,HDisclosurePanel:Ie,UIcon:N,UButton:U},inheritAttrs:!1,props:{items:{type:Array,default:()=>[]},defaultOpen:{type:Boolean,default:!1},openIcon:{type:String,default:()=>C.default.openIcon},closeIcon:{type:String,default:()=>C.default.closeIcon},multiple:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:i,attrs:c}=fe("accordion",H(e,"ui"),C,H(e,"class")),r=I(()=>Se),o=v([]);function d(a,n){!e.items[a].closeOthers&&e.multiple||o.value.forEach(t=>{t.open&&t.close(n.target)})}function l(a,n){const t=a;t.style.height="0",t.offsetHeight,t.style.height=t.scrollHeight+"px",t.addEventListener("transitionend",n,{once:!0})}function s(a){const n=a;n.style.height=n.scrollHeight+"px",n.offsetHeight}function u(a){const n=a;n.style.height="auto"}function f(a,n){const t=a;t.style.height="0",t.addEventListener("transitionend",n,{once:!0})}return ie(()=>J("$KSbquwWyk4")),{ui:i,uiButton:r,attrs:c,buttonRefs:o,closeOthers:d,omit:me,onEnter:l,onBeforeLeave:s,onAfterEnter:u,onLeave:f}}});function we(e,i,c,r,o,d){const l=N,s=U,u=E("HDisclosureButton"),f=E("HDisclosurePanel"),a=E("HDisclosure");return k(),L("div",{class:S(e.ui.wrapper)},[(k(!0),L(Y,null,Z(e.items,(n,t)=>(k(),x(a,{key:t,as:"div",class:S(e.ui.container),"default-open":e.defaultOpen||n.defaultOpen},{default:h(({open:p,close:y})=>[b(u,{ref_for:!0,ref:()=>e.buttonRefs[t]={open:p,close:y},as:"template",disabled:n.disabled,onClick:m=>e.closeOthers(t,m),onKeydown:[A(m=>e.closeOthers(t,m),["enter"]),A(m=>e.closeOthers(t,m),["space"])]},{default:h(()=>[K(e.$slots,"default",{item:n,index:t,open:p,close:y},()=>[b(s,ee(te({...e.omit(e.ui.default,["openIcon","closeIcon"]),...e.attrs,...e.omit(n,["slot","disabled","content","defaultOpen"])})),{trailing:h(()=>[b(l,{name:p&&e.closeIcon?e.closeIcon:e.openIcon,class:S([p&&!e.closeIcon?"-rotate-180":"",e.uiButton.icon.size[n.size||e.uiButton.default.size],e.ui.item.icon])},null,8,["name","class"])]),_:2},1040)])]),_:2},1032,["disabled","onClick","onKeydown"]),b(oe,ne(e.ui.transition,{onEnter:e.onEnter,onAfterEnter:e.onAfterEnter,onBeforeLeave:e.onBeforeLeave,onLeave:e.onLeave}),{default:h(()=>[se(le("div",null,[b(f,{class:S([e.ui.item.base,e.ui.item.size,e.ui.item.color,e.ui.item.padding]),static:""},{default:h(()=>[K(e.$slots,n.slot||"item",{item:n,index:t,open:p,close:y},()=>[ae(re(n.content),1)])]),_:2},1032,["class"])],512),[[ue,p]])]),_:2},1040,["onEnter","onAfterEnter","onBeforeLeave","onLeave"])]),_:2},1032,["class","default-open"]))),128))],2)}const Re=X(Be,[["render",we]]);export{Re as default};