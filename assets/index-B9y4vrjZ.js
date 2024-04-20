import{j as a}from"./jsx-runtime-DRTy3Uxn.js";import{L as U}from"./Label-BNiKYQQA.js";import{c as m}from"./clsx-CH7BE6MN.js";import{r as t}from"./index-BBkUAzwr.js";import"./index-YMjqK2a4.js";import{F as X}from"./FormGroup-10nvBGAl.js";import{g as Y}from"./random-Cu-dbJeB.js";import{H as B}from"./Hint-BZ4h_WhZ.js";const G=(o,{type:d,data:e})=>{switch(d){case"set_conditional":return{...o,conditional:e.hasConditional?o.conditional.filter(i=>i!==e.refId).concat(e.refId):o.conditional.concat(e.refId)};case"set_selected":return{...o,selected:e.refId}}},C=t.createContext({name:"",selectedRadio:"",dispatch:()=>{},getRadioId:()=>"",leaseReference:()=>"",releaseReference:()=>{}});C.displayName="RadiosContext";const T=()=>t.useContext(C),S=({children:o,className:d,...e})=>a.jsx("div",{className:m("nhsuk-radios__divider",d),...e,children:o}),V=({children:o,className:d,id:e,hint:i,hintProps:u,labelProps:x,conditional:l,forceShowConditional:y,conditionalWrapperProps:f,checked:c,defaultChecked:h,onChange:s,type:n="radio",...N},v)=>{const{name:_,getRadioId:I,leaseReference:g,releaseReference:D,selectedRadio:E,dispatch:b}=T(),[r]=t.useState(g()),R=e||I(r),F=E===r&&c!==!1,{className:$,...H}=x||{},{className:J,...L}=u||{},{className:M,...P}=f||{},j=w=>{b({type:"set_selected",data:{refId:w}})};return t.useEffect(()=>(h&&j(r),()=>D(r)),[]),t.useEffect(()=>{c&&j(r)},[c]),t.useEffect(()=>(b({type:"set_conditional",data:{refId:r,hasConditional:!!l}}),()=>b({type:"set_conditional",data:{refId:r,hasConditional:!1}})),[l]),a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:m("nhsuk-radios__item",d),children:[a.jsx("input",{className:"nhsuk-radios__input",id:R,name:_,type:n,checked:c,defaultChecked:h,ref:v,onChange:w=>{j(r),s==null||s(w)},...N}),o&&a.jsx(U,{className:m("nhsuk-radios__label",$),id:`${R}--label`,htmlFor:R,...H,children:o}),i&&a.jsx(B,{className:m("nhsuk-radios__hint",J),id:`${R}--hint`,...L,children:i})]}),l&&(F||y)&&a.jsx("div",{className:m("nhsuk-radios__conditional",M),id:`${R}--conditional`,...P,children:l})]})},k=t.forwardRef(V),p=({children:o,...d})=>{let e={},i=[],u=0;const[x,l]=t.useReducer(G,{selected:"",conditional:[]}),y=t.useCallback((s,n)=>(n in e||(u+=1,e[n]=`${d.idPrefix||s}-${u}`),e[n]),[]),f=()=>{const s=Y();return i.includes(s)?f():(i.push(s),s)},c=s=>{i=i.filter(n=>n!==s)},h=()=>{e={},u=0};return a.jsx(X,{...d,inputType:"radios",render:({id:s,name:n,inline:N,className:v,..._})=>{h();const I={name:n,getRadioId:g=>y(s,g),selectedRadio:x.selected,leaseReference:f,releaseReference:c,dispatch:l};return a.jsx("div",{className:m("nhsuk-radios",{"nhsuk-radios--inline":N},v),id:s,..._,children:a.jsx(C.Provider,{value:I,children:o})})}})};S.displayName="Radios.Divider";k.displayName="Radios.Radio";p.displayName="Radios";p.Divider=S;p.Radio=k;p.__docgenInfo={description:`Use radios when you want users to select only 1 option from a list.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/radios).

@example
\`\`\`tsx
<Radios label="Do you have any allergies?">
 <Radios.Radio value="yes" hint="some hint">
  Yes
 </Radios.Radio>
 <Radios.Radio value="no">No</Radios.Radio>
</Radios>
\`\`\``,methods:[{name:"Divider",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}}],displayName:"Radios"};p.__docgenInfo={description:`Use radios when you want users to select only 1 option from a list.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/radios).

@example
\`\`\`tsx
<Radios label="Do you have any allergies?">
 <Radios.Radio value="yes" hint="some hint">
  Yes
 </Radios.Radio>
 <Radios.Radio value="no">No</Radios.Radio>
</Radios>
\`\`\``,methods:[{name:"Divider",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}}],displayName:"Radios"};export{p as R};
