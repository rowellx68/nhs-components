import{r as p,R as t}from"./index-uCp2LrAq.js";import{F as K}from"./FormGroup-Mw6IClvX.js";import{f as i}from"./factory-Dl037jXY.js";import{c as f}from"./clsx-B-dksMZM.js";import{I as Q}from"./Input-D5FbzKIn.js";import{f as X}from"./index-DEh8bWyY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Hint-Cy41Y5xV.js";import"./Label-BVxFGFqs.js";import"./Base-CQ_ipzy_.js";import"./ErrorMessage-C5IFgkMq.js";import"./VisuallyHidden-SShDg0Sg.js";import"./polymorphic-factory-C1jPlyAy.js";import"./use-id-with-prefix-ctfEntwL.js";import"./index-Bqoxw6Vv.js";const C=p.createContext({id:"",name:"",handleChange:()=>{}});C.displayName="DateInputContext";const Z=()=>p.useContext(C),ee=C.Provider,te={day:"",month:"",year:""},o=i(({onChange:e,value:r=te,...x},v)=>{const[l,c]=p.useState(r),u=p.useCallback((s,n)=>{n.stopPropagation();const a={...l,[s]:n.target.value};if(e){const m={...n,target:{...n.target,value:a},currentTarget:{...n.currentTarget,value:a}};e(m)}c(a)},[e,l,c]);return t.createElement(K,{as:"div",...x,ref:v,fieldsetProps:{role:"group"},inputType:"dateinput",render:({id:s,className:n,withError:a,errorMap:m,children:N})=>{const _=p.useMemo(()=>({id:s,name:s,error:a,errorMap:m,handleChange:u,value:l}),[s,a,m,l,u]);return t.createElement("div",{className:f("nhsuk-date-input",n),id:s},t.createElement(ee,{value:_},N??t.createElement(t.Fragment,null,t.createElement(I,null),t.createElement(b,null),t.createElement(E,null))))}})}),ae={day:"Day",month:"Month",year:"Year"},g=i(({part:e,label:r,error:x,className:v,name:l,id:c,width:u,labelProps:s={},value:n,onChange:a,...m},N)=>{const{id:_,name:B,value:P,handleChange:L,error:R,errorMap:F}=Z(),q=p.useCallback(d=>{d.persist(),a==null||a(d),d.isPropagationStopped()||L(e,d)},[]),{className:z,...G}=s,H=r||ae[e],k=c||`${_}-${e}`,U=l||`${B}-${e}`;let M="4";(e==="day"||e==="month")&&(M="2");const A=n||(P==null?void 0:P[e]),J=x||F&&F[e]||R&&!F;return t.createElement("div",{className:f("nhsuk-date-input__item"),...m},t.createElement(Q,{labelProps:{className:f("nhsuk-date-input__label",z),...G,htmlFor:k},label:H,id:k,name:U,width:M||u,value:A,className:f("nhsuk-date-input__input",{"nhsuk-input--error":J},v),type:"text",inputMode:"numeric",pattern:"[0-9]*",onChange:q,ref:N}))}),I=i((e,r)=>t.createElement(g,{part:"day",...e,ref:r})),b=i((e,r)=>t.createElement(g,{part:"month",...e,ref:r})),E=i((e,r)=>t.createElement(g,{part:"year",...e,ref:r}));g.displayName="BaseDatePart";o.displayName="DateInput";I.displayName="DateInput.Day";b.displayName="DateInput.Month";E.displayName="DateInput.Year";o.Day=I;o.Month=b;o.Year=E;o.__docgenInfo={description:"",methods:[],displayName:"DateInput",props:{value:{defaultValue:{value:`{
  day: '',
  month: '',
  year: '',
}`,computed:!1},required:!1}}};I.__docgenInfo={description:"",methods:[],displayName:"DateInput.Day"};b.__docgenInfo={description:"",methods:[],displayName:"DateInput.Month"};E.__docgenInfo={description:"",methods:[],displayName:"DateInput.Year"};const ge={title:"Components/Form Elements/Date Input",component:o,args:{onChange:X()},argTypes:{value:{control:!1,table:{type:{summary:"DateInputValue"}}}},parameters:{docs:{description:{component:`Use date input to help users enter a memorable date, like their date of birth.

https://service-manual.nhs.uk/design-system/components/date-input`}}}},h={args:{label:"Date of birth",hint:"For example, 31 3 1980",value:{day:"31",month:"3",year:"1980"}},render:e=>t.createElement(o,{...e})},y={args:{label:"Date of birth",hint:"For example, 31 3 1980",error:"Please enter a valid date of birth"},render:e=>t.createElement(o,{...e})},D={args:{label:"Date of birth",hint:"For example, 31 3 1980",error:{day:"Please enter a valid day.",month:"Please enter a valid month."}},render:e=>t.createElement(o,{...e})};var S,V,Y;h.parameters={...h.parameters,docs:{...(S=h.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Date of birth',
    hint: 'For example, 31 3 1980',
    value: {
      day: '31',
      month: '3',
      year: '1980'
    }
  },
  render: args => <DateInput {...args} />
}`,...(Y=(V=h.parameters)==null?void 0:V.docs)==null?void 0:Y.source}}};var T,W,$;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Date of birth',
    hint: 'For example, 31 3 1980',
    error: 'Please enter a valid date of birth'
  },
  render: args => <DateInput {...args} />
}`,...($=(W=y.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var O,j,w;D.parameters={...D.parameters,docs:{...(O=D.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Date of birth',
    hint: 'For example, 31 3 1980',
    error: {
      day: 'Please enter a valid day.',
      month: 'Please enter a valid month.'
    }
  },
  render: args => <DateInput {...args} />
}`,...(w=(j=D.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};const Ie=["Default","WithError","WithErrorObject"];export{h as Default,y as WithError,D as WithErrorObject,Ie as __namedExportsOrder,ge as default};
