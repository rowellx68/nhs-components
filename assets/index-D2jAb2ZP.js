import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{F as $}from"./FormGroup-10nvBGAl.js";import{c as u}from"./clsx-CH7BE6MN.js";import{r as n}from"./index-BBkUAzwr.js";import{g as L}from"./random-Cu-dbJeB.js";import"./index-YMjqK2a4.js";import{L as U}from"./Label-BNiKYQQA.js";import{H as W}from"./Hint-BZ4h_WhZ.js";const T=(a,{type:x,data:i})=>{switch(x){case"set_conditional":return{...a,conditional:i.hasConditional?a.conditional.filter(e=>e!==i.refId).concat(i.refId):a.conditional.filter(e=>e!==i.refId)}}},g=n.createContext({name:"",dispatch:()=>{},getCheckboxId:()=>"",leaseReference:()=>"",releaseReference:()=>{}});g.displayName="CheckboxesContext";const V=()=>n.useContext(g),q=({children:a,className:x,id:i,hint:e,hintProps:r,labelProps:h,conditional:l,forceShowConditional:f,conditionalWrapperProps:p,checked:c,defaultChecked:d,onChange:m,type:s="checkbox",...o},C)=>{const{name:N,getCheckboxId:_,leaseReference:v,releaseReference:P,dispatch:B}=V(),[b]=n.useState(v()),[w,I]=n.useState(!!(c||d)),R=i||_(b),{className:F,...D}=h||{},{className:S,...E}=r||{},{className:G,...H}=p||{};return n.useEffect(()=>()=>P(b),[]),n.useEffect(()=>{c!==void 0&&I(c)},[c]),n.useEffect(()=>(B({type:"set_conditional",data:{refId:b,hasConditional:!!l}}),()=>B({type:"set_conditional",data:{refId:b,hasConditional:!1}})),[l]),t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:u("nhsuk-checkboxes__item",x),children:[t.jsx("input",{className:"nhsuk-checkboxes__input",id:R,name:N,type:s,checked:c,defaultChecked:d,ref:C,onChange:j=>{c===void 0&&I(j.target.checked),m==null||m(j)},...o}),a&&t.jsx(U,{className:u("nhsuk-checkboxes__label",F),id:`${R}--label`,htmlFor:R,...D,children:a}),e&&t.jsx(W,{className:u("nhsuk-checkboxes__hint",S),...E,children:e})]}),l&&(w||f)&&t.jsx("div",{className:u("nhsuk-checkboxes__conditional",G),...H,children:l})]})},y=n.forwardRef(q),k=({children:a,idPrefix:x,...i})=>{let e={},r=[],h=0;const[l,f]=n.useReducer(T,{conditional:[]}),p=n.useCallback((s,o)=>(o in e||(h+=1,e[o]=`${x||s}-${h}`),e[o]),[]),c=()=>{const s=L();return r.includes(s)?c():(r.push(s),s)},d=s=>{r=r.filter(o=>o!==s)},m=()=>{e={},h=0};return t.jsx($,{...i,inputType:"checkboxes",render:({id:s,name:o,className:C,...N})=>{m();const _={name:o,getCheckboxId:v=>p(s,v),leaseReference:c,releaseReference:d,dispatch:f};return t.jsx("div",{className:u("nhsuk-checkboxes",{"nhsuk-checkboxes--conditional":l.conditional.length>0},C),id:s,...N,children:t.jsx(g.Provider,{value:_,children:a})})}})};y.displayName="Checkboxes.Box";k.displayName="Checkboxes";k.Box=y;k.__docgenInfo={description:`Use checkboxes to let users select 1 or more options on a form.

For more information on when to use this component, got to the [NHS Digital service manual](https://service-manual.nhs.uk/design-system/components/checkboxes).

@example
\`\`\`tsx
<Checkboxes label="Which services?" name="fruit">
 <Checkboxes.Box value="GP Practice">GP Practice</Checkboxes.Box>
 <Checkboxes.Box value="Dentist">Dentist</Checkboxes.Box>
</Checkboxes>
\`\`\``,methods:[],displayName:"Checkboxes"};k.__docgenInfo={description:`Use checkboxes to let users select 1 or more options on a form.

For more information on when to use this component, got to the [NHS Digital service manual](https://service-manual.nhs.uk/design-system/components/checkboxes).

@example
\`\`\`tsx
<Checkboxes label="Which services?" name="fruit">
 <Checkboxes.Box value="GP Practice">GP Practice</Checkboxes.Box>
 <Checkboxes.Box value="Dentist">Dentist</Checkboxes.Box>
</Checkboxes>
\`\`\``,methods:[],displayName:"Checkboxes"};export{k as C};
