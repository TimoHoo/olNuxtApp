import B from"./BIFoEP89.js";import C from"./UbilZkxu.js";import{K as U,L as v,_ as h,i as P,M as q,A as n,S as w,U as d,o as u,D as c,w as A,l as g,O as f,B as m,c as M,t as D,R}from"./CWvnpu3D.js";import{u as T}from"./Dgu_NOG_.js";import{a as p}from"./Cd0ASaHY.js";import{b as E}from"./blSOxsGD.js";import{n as G,g as J}from"./aPxrJPp6.js";import"./DhKcbZJJ.js";import"./qsMMcMsd.js";import"./Cg7Lj_Om.js";const l=U(v.ui.strategy,v.ui.button,E),K=P({components:{UIcon:B,ULink:C},inheritAttrs:!1,props:{...G,type:{type:String,default:"button"},block:{type:Boolean,default:!1},label:{type:String,default:null},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},padded:{type:Boolean,default:!0},size:{type:String,default:()=>l.default.size,validator(e){return Object.keys(l.size).includes(e)}},color:{type:String,default:()=>l.default.color,validator(e){return[...v.ui.colors,...Object.keys(l.color)].includes(e)}},variant:{type:String,default:()=>l.default.variant,validator(e){return[...Object.keys(l.variant),...Object.values(l.color).flatMap(o=>Object.keys(o))].includes(e)}},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>l.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:null},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},square:{type:Boolean,default:!1},truncate:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:o}){const{ui:a,attrs:y}=T("button",q(e,"ui"),l),{size:t,rounded:b}=p({ui:a,props:e}),i=n(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),s=n(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),I=n(()=>e.square||!o.default&&!e.label),j=n(()=>{var k,S;const r=((S=(k=a.value.color)==null?void 0:k[e.color])==null?void 0:S[e.variant])||a.value.variant[e.variant];return w(d(a.value.base,a.value.font,b.value,a.value.size[t.value],a.value.gap[t.value],e.padded&&a.value[I.value?"square":"padding"][t.value],r==null?void 0:r.replaceAll("{color}",e.color),e.block?a.value.block:a.value.inline),e.class)}),z=n(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),N=n(()=>e.loading&&!i.value?e.loadingIcon:e.trailingIcon||e.icon),O=n(()=>d(a.value.icon.base,a.value.icon.size[t.value],e.loading&&a.value.icon.loading)),L=n(()=>d(a.value.icon.base,a.value.icon.size[t.value],e.loading&&!i.value&&a.value.icon.loading)),$=n(()=>J(e));return{ui:a,attrs:y,isLeading:i,isTrailing:s,isSquare:I,buttonClass:j,leadingIconName:z,trailingIconName:N,leadingIconClass:O,trailingIconClass:L,linkProps:$}}});function V(e,o,a,y,t,b){const i=B,s=C;return u(),c(s,R({type:e.type,disabled:e.disabled||e.loading,class:e.buttonClass},{...e.linkProps,...e.attrs}),{default:A(()=>[g(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[e.isLeading&&e.leadingIconName?(u(),c(i,{key:0,name:e.leadingIconName,class:f(e.leadingIconClass),"aria-hidden":"true"},null,8,["name","class"])):m("",!0)]),g(e.$slots,"default",{},()=>[e.label?(u(),M("span",{key:0,class:f([e.truncate?e.ui.truncate:""])},D(e.label),3)):m("",!0)]),g(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[e.isTrailing&&e.trailingIconName?(u(),c(i,{key:0,name:e.trailingIconName,class:f(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])):m("",!0)])]),_:3},16,["type","disabled","class"])}const ae=h(K,[["render",V]]);export{ae as default};