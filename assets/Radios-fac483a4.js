import{j as i}from"./jsx-runtime-94f6e698.js";import{L as M}from"./Label-fb36fd45.js";import{c as m}from"./clsx-1229b3e0.js";import{r}from"./index-8db94870.js";import{H as T}from"./Hint-57b83903.js";import{F as U}from"./FormGroup-ed59bfc4.js";import{g as V}from"./random-1d94713f.js";const q=(o,{type:n,data:e})=>{switch(n){case"set_conditional":return{...o,conditional:e.hasConditional?o.conditional.filter(a=>a!==e.refId).concat(e.refId):o.conditional.concat(e.refId)};case"set_selected":return{...o,selected:e.refId}}},b=r.createContext({name:"",selectedRadio:"",dispatch:()=>{},getRadioId:()=>"",leaseReference:()=>"",releaseReference:()=>{}});b.displayName="RadiosContext";const z=()=>r.useContext(b),D=({children:o,className:n,...e})=>i.jsx("div",{className:m("nhsuk-radios__divider",n),...e,children:o}),A=({children:o,className:n,id:e,hint:a,hintProps:u,labelProps:_,conditional:c,forceShowConditional:x,conditionalWrapperProps:R,checked:l,defaultChecked:h,onChange:s,type:t="radio",...N},v)=>{const{name:y,getRadioId:I,leaseReference:j,releaseReference:F,selectedRadio:S,dispatch:C}=z(),[d]=r.useState(j()),f=e||I(d),E=S===d&&l!==!1,{className:$,...H}=_||{},{className:L,...P}=u||{},{className:B,...G}=R||{},g=w=>{C({type:"set_selected",data:{refId:w}})};return r.useEffect(()=>(h&&g(d),()=>F(d)),[]),r.useEffect(()=>{l&&g(d)},[l]),r.useEffect(()=>(C({type:"set_conditional",data:{refId:d,hasConditional:!!c}}),()=>C({type:"set_conditional",data:{refId:d,hasConditional:!1}})),[c]),i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:m("nhsuk-radios__item",n),children:[i.jsx("input",{className:"nhsuk-radios__input",id:f,name:y,type:t,checked:l,defaultChecked:h,ref:v,onChange:w=>{g(d),s==null||s(w)},...N}),o&&i.jsx(M,{className:m("nhsuk-radios__label",$),id:`${f}--label`,htmlFor:f,...H,children:o}),a&&i.jsx(T,{className:m("nhsuk-radios__hint",L),id:`${f}--hint`,...P,children:a})]}),c&&(E||x)&&i.jsx("div",{className:m("nhsuk-radios__conditional",B),id:`${f}--conditional`,...G,children:c})]})},k=r.forwardRef(A),p=({children:o,...n})=>{let e={},a=[],u=0;const[_,c]=r.useReducer(q,{selected:"",conditional:[]}),x=r.useCallback((s,t)=>(t in e||(u+=1,e[t]=`${n.idPrefix||s}-${u}`),e[t]),[]),R=()=>{const s=V();return a.includes(s)?R():(a.push(s),s)},l=s=>{a=a.filter(t=>t!==s)},h=()=>{e={},u=0};return i.jsx(U,{...n,inputType:"radios",render:({id:s,name:t,inline:N,className:v,...y})=>{h();const I={name:t,getRadioId:j=>x(s,j),selectedRadio:_.selected,leaseReference:R,releaseReference:l,dispatch:c};return i.jsx("div",{className:m("nhsuk-radios",{"nhsuk-radios--inline":N},v),id:s,...y,children:i.jsx(b.Provider,{value:I,children:o})})}})};D.displayName="Radios.Divider";k.displayName="Radios.Radio";p.displayName="Radios";p.Divider=D;p.Radio=k;try{p.Divider.displayName="Radios.Divider",p.Divider.__docgenInfo={description:`Use radios when you want users to select only 1 option from a list.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/radios).`,displayName:"Radios.Divider",props:{}}}catch{}export{p as R};
//# sourceMappingURL=Radios-fac483a4.js.map