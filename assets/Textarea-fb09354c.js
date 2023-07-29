import{j as t,c as R}from"./clsx-1e30d079.js";import{r as o}from"./index-76fb7be0.js";import{L as j}from"./Label-d86d123e.js";import{E as C}from"./ErrorMessage-892a2a54.js";import{H}from"./Hint-34882571.js";import"./ContentsList-664fd9fb.js";import"./Details-3adbbf33.js";import"./ActionLink-5e33e5bb.js";import"./BackLink-4e9f7fca.js";import"./Breadcrumb-33a00274.js";import"./Button-76fa9248.js";import"./ErrorSummary-31eba750.js";import{u as D}from"./Fieldset-0011b1f9.js";const G=e=>`${e}_${o.useId()}`,I=(e,i)=>t.jsx(b,{...e,inputType:"input",render:({id:r,name:n,className:u,error:m,width:a,type:c="text",...f})=>t.jsx("input",{id:r,name:n,className:R("nhsuk-input",{[`nhsuk-input--width-${a}`]:a,"nhsuk-input--error":m},u),type:c,ref:i,...f})}),$=o.forwardRef(I);$.displayName="Input";try{I.displayName="Input",I.__docgenInfo={description:"",displayName:"Input",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"HTMLInputTypeAttribute"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"10"'},{value:'"20"'},{value:'"30"'}]}},labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:"LabelProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | boolean"}},errorProps:{defaultValue:null,description:"",name:"errorProps",required:!1,type:{name:"ErrorMessageProps"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},hintProps:{defaultValue:null,description:"",name:"hintProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},formGroupProps:{defaultValue:null,description:"",name:"formGroupProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},disableErrorLine:{defaultValue:null,description:"",name:"disableErrorLine",required:!1,type:{name:"boolean"}}}}}catch{}const S=(e,{type:i,data:r})=>{switch(i){case"set_conditional":return{...e,conditional:r.hasConditional?e.conditional.filter(n=>n!==r.refId).concat(r.refId):e.conditional.concat(r.refId)};case"set_selected":return{...e,selected:r.refId}}},M=o.createContext({name:"",selectedRadio:"",dispatch:()=>{},getRadioId:()=>"",leaseReference:()=>"",releaseReference:()=>{}});M.displayName="RadiosContext";const A=()=>o.useContext(M),B=(e=8)=>[...Array(e)].map(()=>Math.random().toString(36)[2]).join(""),F=({children:e,className:i,...r})=>t.jsx("div",{className:R("nhsuk-radios__divider",i),...r,children:e}),U=({children:e,className:i,id:r,hint:n,hintProps:u,labelProps:m,conditional:a,forceShowConditional:c,conditionalWrapperProps:f,checked:y,defaultChecked:v,type:l="radio",...d},g)=>{const{name:V,getRadioId:_,leaseReference:h,releaseReference:s,selectedRadio:L,dispatch:x}=A(),[p]=o.useState(h()),P=r||_(p),E=L===p&&y!==!1,q=w=>{x({type:"set_selected",data:{refId:w}})};return o.useEffect(()=>(v&&q(p),()=>s(p)),[]),o.useEffect(()=>{y&&q(p)},[y]),o.useEffect(()=>(x({type:"set_conditional",data:{refId:p,hasConditional:!!a}}),()=>x({type:"set_conditional",data:{refId:p,hasConditional:!1}})),[a]),t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:R("nhsuk-radios__item",i),children:[t.jsx("input",{className:"nhsuk-radios__input",id:P,name:V,type:l,checked:y,ref:g,onChange:()=>{q(p)},...d}),e&&t.jsx(j,{className:"nhsuk-radios__label",id:`${P}--label`,htmlFor:P,...m,children:e}),n&&t.jsx(H,{className:"nhsuk-radios__hint",id:`${P}--hint`,...u,children:n})]}),a&&(E||c)&&t.jsx("div",{className:"nhsuk-radios__conditional",id:`${P}--conditional`,...f,children:a})]})},k=o.forwardRef(U),N=({children:e,...i})=>{let r={},n=[],u=0;const[m,a]=o.useReducer(S,{selected:"",conditional:[]}),c=o.useCallback((l,d)=>(d in r||(u+=1,r[d]=`${i.idPrefix||l}-${u}`),r[d]),[]),f=()=>{const l=B();return n.includes(l)?f():(n.push(l),l)},y=l=>{n=n.filter(d=>d!==l)},v=()=>{r={},u=0};return t.jsx(b,{...i,inputType:"radios",render:({id:l,name:d,inline:g,className:V,..._})=>{v();const h={name:d,getRadioId:s=>c(l,s),selectedRadio:m.selected,leaseReference:f,releaseReference:y,dispatch:a};return t.jsx("div",{className:R("nhsuk-radios",{"nhsuk-radios--inline":g},V),id:l,..._,children:t.jsx(M.Provider,{value:h,children:e})})}})};F.displayName="Radios.Divider";k.displayName="Radios.Radio";N.displayName="Radios";N.Divider=F;N.Radio=k;try{N.Divider.displayName="Radios.Divider",N.Divider.__docgenInfo={description:`Use radios when you want users to select only 1 option from a list.

For more information on when to use this component, go the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/radios).`,displayName:"Radios.Divider",props:{inline:{defaultValue:null,description:"",name:"inline",required:!1,type:{name:"boolean"}},idPrefix:{defaultValue:null,description:"",name:"idPrefix",required:!1,type:{name:"string"}},labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:"LabelProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | boolean"}},errorProps:{defaultValue:null,description:"",name:"errorProps",required:!1,type:{name:"ErrorMessageProps"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},hintProps:{defaultValue:null,description:"",name:"hintProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},formGroupProps:{defaultValue:null,description:"",name:"formGroupProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},disableErrorLine:{defaultValue:null,description:"",name:"disableErrorLine",required:!1,type:{name:"boolean"}}}}}catch{}const b=e=>{const{render:i,hint:r,label:n,id:u,labelProps:m,error:a,hintProps:c,errorProps:f,formGroupProps:y,inputType:v,disableErrorLine:l,name:d,...g}=e,[V]=o.useState(G(v)),{isFieldset:_,dispatch:h}=D(),s=u||V,L=`${s}--label`,x=`${s}--hint`,p=`${s}--error-message`,P={"aria-describedby":r?x:void 0,"aria-labelledby":n?L:void 0,error:a,name:d||s,id:s,...g};o.useEffect(()=>{if(_)return h({type:"set_error",data:{id:s,error:!!a}}),()=>h({type:"set_error",data:{id:s,error:!1}})},[s,a,_]),o.useEffect(()=>(h({type:"register_component",data:{id:s,unregister:!1}}),()=>h({type:"register_component",data:{id:s,unregister:!0}})),[]);const{className:E,...q}=y||{};return t.jsxs("div",{className:R("nhsuk-form-group",{"nhsuk-form-group--error":!l&&a},E),...q,children:[n&&t.jsx(j,{id:L,htmlFor:s,...m,children:n}),r&&t.jsx(H,{id:x,htmlFor:s,...c,children:r}),a&&typeof a=="string"&&t.jsx(C,{id:p,htmlFor:s,...f,children:a}),i(P)]})};b.displayName="FormGroup";try{b.displayName="FormGroup",b.__docgenInfo={description:"",displayName:"FormGroup",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:"LabelProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | boolean"}},errorProps:{defaultValue:null,description:"",name:"errorProps",required:!1,type:{name:"ErrorMessageProps"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},hintProps:{defaultValue:null,description:"",name:"hintProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},formGroupProps:{defaultValue:null,description:"",name:"formGroupProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},disableErrorLine:{defaultValue:null,description:"",name:"disableErrorLine",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},render:{defaultValue:null,description:"",name:"render",required:!0,type:{name:"(props: FormElementRenderProps<T>) => ReactNode"}},inputType:{defaultValue:null,description:"",name:"inputType",required:!0,type:{name:"enum",value:[{value:'"input"'},{value:'"select"'},{value:'"textarea"'},{value:'"radios"'},{value:'"checkboxes"'},{value:'"dateinput"'}]}}}}}catch{}const T=(e,i)=>t.jsx(b,{...e,inputType:"textarea",render:({id:r,name:n,error:u,className:m,rows:a,...c})=>t.jsx("textarea",{id:r,name:n,className:R("nhsuk-textarea",{"nhsuk-textarea--error":u},m),ref:i,rows:a,...c})}),W=o.forwardRef(T);W.displayName="Textarea";try{T.displayName="Textarea",T.__docgenInfo={description:`Use textarea to let users enter more than 1 line of text.

For more information on when to use this component, go the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/textarea).`,displayName:"Textarea",props:{labelProps:{defaultValue:null,description:"",name:"labelProps",required:!1,type:{name:"LabelProps"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string | boolean"}},errorProps:{defaultValue:null,description:"",name:"errorProps",required:!1,type:{name:"ErrorMessageProps"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"ReactNode"}},hintProps:{defaultValue:null,description:"",name:"hintProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},formGroupProps:{defaultValue:null,description:"",name:"formGroupProps",required:!1,type:{name:"HTMLProps<HTMLDivElement>"}},disableErrorLine:{defaultValue:null,description:"",name:"disableErrorLine",required:!1,type:{name:"boolean"}}}}}catch{}export{$ as I,N as R,W as T};
//# sourceMappingURL=Textarea-fb09354c.js.map