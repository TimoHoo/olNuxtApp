import S from"./BIFoEP89.js";import{_ as j}from"./cS0j_ik-.js";import U from"./CelS9bXk.js";import{_ as z,K as V,L as k,i as I,M as N,A as D,S as w,U as F,o,c as n,a as $,D as u,O as l,B as r,R as c,l as B,d as h,t as C,F as A,C as O,V as f}from"./CWvnpu3D.js";import{u as L}from"./Dgu_NOG_.js";import"./DhKcbZJJ.js";import"./qsMMcMsd.js";import"./UbilZkxu.js";import"./Cg7Lj_Om.js";import"./aPxrJPp6.js";import"./Cd0ASaHY.js";import"./blSOxsGD.js";const R={wrapper:"w-full relative overflow-hidden",inner:"w-0 flex-1",title:"text-sm font-medium",description:"mt-1 text-sm leading-4 opacity-90",actions:"flex items-center gap-2 mt-3 flex-shrink-0",shadow:"",rounded:"rounded-lg",padding:"p-4",gap:"gap-3",icon:{base:"flex-shrink-0 w-5 h-5"},avatar:{base:"flex-shrink-0 self-center",size:"md"},color:{white:{solid:"text-gray-900 dark:text-white bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800"}},variant:{solid:"bg-{color}-500 dark:bg-{color}-400 text-white dark:text-gray-900",outline:"text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400",soft:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400",subtle:"bg-{color}-50 dark:bg-{color}-400 dark:bg-opacity-10 text-{color}-500 dark:text-{color}-400 ring-1 ring-inset ring-{color}-500 dark:ring-{color}-400 ring-opacity-25 dark:ring-opacity-25"},default:{color:"white",variant:"solid",icon:null,closeButton:null,actionButton:{size:"xs",color:"primary",variant:"link"}}},i=V(k.ui.strategy,k.ui.alert,R),E=I({components:{UIcon:S,UAvatar:j,UButton:U},inheritAttrs:!1,props:{title:{type:String,default:null},description:{type:String,default:null},icon:{type:String,default:()=>i.default.icon},avatar:{type:Object,default:null},closeButton:{type:Object,default:()=>i.default.closeButton},actions:{type:Array,default:()=>[]},color:{type:String,default:()=>i.default.color,validator(e){return[...k.ui.colors,...Object.keys(i.color)].includes(e)}},variant:{type:String,default:()=>i.default.variant,validator(e){return[...Object.keys(i.variant),...Object.values(i.color).flatMap(t=>Object.keys(t))].includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["close"],setup(e){const{ui:t,attrs:y}=L("alert",N(e,"ui"),i),v=D(()=>{var d,p;const a=((p=(d=t.value.color)==null?void 0:d[e.color])==null?void 0:p[e.variant])||t.value.variant[e.variant];return w(F(t.value.wrapper,t.value.rounded,t.value.shadow,t.value.padding,a==null?void 0:a.replaceAll("{color}",e.color)),e.class)});function b(a){a.click&&a.click()}return{ui:t,attrs:y,alertClass:v,onAction:b,twMerge:w}}});function J(e,t,y,v,b,a){const d=S,p=j,g=U;return o(),n("div",c({class:e.alertClass},e.attrs),[$("div",{class:l(["flex",[e.ui.gap,{"items-start":e.description||e.$slots.description,"items-center":!e.description&&!e.$slots.description}]])},[e.icon?(o(),u(d,{key:0,name:e.icon,class:l(e.ui.icon.base)},null,8,["name","class"])):r("",!0),e.avatar?(o(),u(p,c({key:1},{size:e.ui.avatar.size,...e.avatar},{class:e.ui.avatar.base}),null,16,["class"])):r("",!0),$("div",{class:l(e.ui.inner)},[e.title||e.$slots.title?(o(),n("p",{key:0,class:l(e.ui.title)},[B(e.$slots,"title",{title:e.title},()=>[h(C(e.title),1)])],2)):r("",!0),e.description||e.$slots.description?(o(),n("p",{key:1,class:l(e.twMerge(e.ui.description,!(e.title&&e.$slots.title)&&"mt-0 leading-5"))},[B(e.$slots,"description",{description:e.description},()=>[h(C(e.description),1)])],2)):r("",!0),(e.description||e.$slots.description)&&e.actions.length?(o(),n("div",{key:2,class:l(e.ui.actions)},[(o(!0),n(A,null,O(e.actions,(s,m)=>(o(),u(g,c({key:m},{...e.ui.default.actionButton||{},...s},{onClick:f(M=>e.onAction(s),["stop"])}),null,16,["onClick"]))),128))],2)):r("",!0)],2),e.closeButton||!e.description&&!e.$slots.description&&e.actions.length?(o(),n("div",{key:2,class:l(e.twMerge(e.ui.actions,"mt-0"))},[!e.description&&!e.$slots.description&&e.actions.length?(o(!0),n(A,{key:0},O(e.actions,(s,m)=>(o(),u(g,c({key:m},{...e.ui.default.actionButton||{},...s},{onClick:f(M=>e.onAction(s),["stop"])}),null,16,["onClick"]))),128)):r("",!0),e.closeButton?(o(),u(g,c({key:1,"aria-label":"Close"},{...e.ui.default.closeButton||{},...e.closeButton},{onClick:t[0]||(t[0]=f(s=>e.$emit("close"),["stop"]))}),null,16)):r("",!0)],2)):r("",!0)],2)],16)}const _=z(E,[["render",J]]);export{_ as default};