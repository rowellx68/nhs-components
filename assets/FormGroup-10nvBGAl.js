import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{r as s}from"./index-BBkUAzwr.js";import{c as k}from"./clsx-CH7BE6MN.js";import{u as w}from"./use-id-with-prefix-Dzx8tZmb.js";import{L as G}from"./Label-BNiKYQQA.js";import{E as N}from"./ErrorMessage-qXgaBtKk.js";import{H as _}from"./Hint-BZ4h_WhZ.js";import{u as L}from"./index-BVDTxkrF.js";const p=u=>{const{render:d,hint:a,label:i,id:c,labelProps:f,error:r,hintProps:g,errorProps:h,formGroupProps:y,inputType:b,disableErrorLine:v,name:x,...P}=u,[E]=s.useState(w(b)),{isFieldset:o,dispatch:t}=L(),e=c||E,l=`${e}--label`,m=`${e}--hint`,F=`${e}--error-message`,T={"aria-describedby":a?m:void 0,"aria-labelledby":i?l:void 0,error:r,name:x||e,id:e,...P};s.useEffect(()=>{if(o)return t({type:"set_error",data:{id:e,error:!!r}}),()=>t({type:"set_error",data:{id:e,error:!1}})},[e,r,o]),s.useEffect(()=>(t({type:"register_component",data:{id:e,unregister:!1}}),()=>t({type:"register_component",data:{id:e,unregister:!0}})),[]);const{className:j,...I}=y||{};return n.jsxs("div",{className:k("nhsuk-form-group",{"nhsuk-form-group--error":!v&&r},j),...I,children:[i&&n.jsx(G,{id:l,htmlFor:e,...f,children:i}),a&&n.jsx(_,{id:m,htmlFor:e,...g,children:a}),r&&typeof r=="string"&&n.jsx(N,{id:F,htmlFor:e,...h,children:r}),d(T)]})};p.displayName="FormGroup";p.__docgenInfo={description:"",methods:[],displayName:"FormGroup",props:{render:{required:!0,tsType:{name:"signature",type:"function",raw:"(props: FormElementRenderProps<T>) => ReactNode",signature:{arguments:[{type:{name:"intersection",raw:`Omit<T, ExcludedProps> & {
  id: string
  name: string
}`,elements:[{name:"Omit",elements:[{name:"T"},{name:"union",raw:`| 'hint'
| 'label'
| 'labelProps'
| 'hintProps'
| 'errorProps'
| 'inputType'
| 'disableErrorLine'`,elements:[{name:"literal",value:"'hint'"},{name:"literal",value:"'label'"},{name:"literal",value:"'labelProps'"},{name:"literal",value:"'hintProps'"},{name:"literal",value:"'errorProps'"},{name:"literal",value:"'inputType'"},{name:"literal",value:"'disableErrorLine'"}]}],raw:"Omit<T, ExcludedProps>"},{name:"signature",type:"object",raw:`{
  id: string
  name: string
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}]},name:"props"}],return:{name:"ReactNode"}}},description:""},inputType:{required:!0,tsType:{name:"union",raw:`| 'input'
| 'radios'
| 'select'
| 'checkboxes'
| 'dateinput'
| 'textarea'
| string`,elements:[{name:"literal",value:"'input'"},{name:"literal",value:"'radios'"},{name:"literal",value:"'select'"},{name:"literal",value:"'checkboxes'"},{name:"literal",value:"'dateinput'"},{name:"literal",value:"'textarea'"},{name:"string"}]},description:""}}};export{p as F};
