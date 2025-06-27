import{r as m,R as a}from"./index-CgfFrydU.js";import{F as oe}from"./FormGroup-B2R0rSFg.js";import{f as l}from"./factory-CyDOap8W.js";import{c as I}from"./clsx-B-dksMZM.js";import{I as se}from"./Input-QdD2xi0S.js";import{fn as me}from"./index-Cf3xVBfy.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Hint-DPDm5fq9.js";import"./Label-DM9NU5un.js";import"./Base-CpCQsTc1.js";import"./ErrorMessage-fi7UHUU4.js";import"./VisuallyHidden-s_dKiGqE.js";import"./polymorphic-factory-YJ8dk4Mh.js";import"./use-id-with-prefix-VupyVmxJ.js";const Y=m.createContext({id:"",name:"",handleChange:()=>{}});Y.displayName="DateInputContext";const ie=()=>m.useContext(Y),pe=Y.Provider,r=l(({onChange:e,value:t,disabled:d,..._},F)=>{const[p,c]=m.useState({day:(t==null?void 0:t.day)??"",month:(t==null?void 0:t.month)??"",year:(t==null?void 0:t.year)??""}),u=m.useMemo(()=>({values:{day:(t==null?void 0:t.day)??"",month:(t==null?void 0:t.month)??"",year:(t==null?void 0:t.year)??""}}),[]),h=m.useCallback((s,n)=>{n.stopPropagation();const o={...u.values,[s]:n.target.value};if(e){const i={...n,target:{...n.target,value:o},currentTarget:{...n.currentTarget,value:o}};e(i)}c(o),u.values={...o}},[p,c,e]);return a.createElement(oe,{as:"div",withErrorLine:!0,..._,ref:F,fieldsetProps:{role:"group"},inputType:"dateinput",render:({id:s,className:n,withError:o,errorMap:i,children:C})=>{const M=m.useMemo(()=>({id:s,name:s,error:o,errorMap:i,handleChange:h,value:p,disabled:d}),[s,o,i,p,h,d]);return a.createElement("div",{className:I("nhsuk-date-input",n),id:s},a.createElement(pe,{value:M},C??a.createElement(a.Fragment,null,a.createElement(E,null),a.createElement(P,null),a.createElement(N,null))))}})}),le={day:"Day",month:"Month",year:"Year"},x=l(({part:e,label:t,error:d,className:_,name:F,id:p,width:c,labelProps:u={},value:h,disabled:s,onChange:n,itemProps:o={},...i},C)=>{const{id:M,name:q,value:k,handleChange:A,error:J,errorMap:S,disabled:K}=ie(),Q=m.useCallback(y=>{y.persist(),n==null||n(y),y.isPropagationStopped()||A(e,y)},[]),{className:X,...Z}=u,{className:v,...ee}=o,te=t||le[e],W=p||`${M}-${e}`,ae=F||`${q}-${e}`;let w="4";(e==="day"||e==="month")&&(w="2");const re=h||(k==null?void 0:k[e]),ne=d||S&&S[e]||J&&!S;return a.createElement("div",{className:I("nhsuk-date-input__item",v),...ee},a.createElement(se,{labelProps:{className:I("nhsuk-date-input__label",X),...Z,htmlFor:W},label:te,id:W,name:ae,width:w||c,value:re,className:I("nhsuk-date-input__input",{"nhsuk-input--error":ne},_),type:"text",inputMode:"numeric",pattern:"[0-9]*",...i,onChange:Q,disabled:s||K,ref:C}))}),E=l((e,t)=>a.createElement(x,{part:"day",...e,ref:t})),P=l((e,t)=>a.createElement(x,{part:"month",...e,ref:t})),N=l((e,t)=>a.createElement(x,{part:"year",...e,ref:t}));x.displayName="BaseDatePart";r.displayName="DateInput";E.displayName="DateInput.Day";P.displayName="DateInput.Month";N.displayName="DateInput.Year";r.Day=E;r.Month=P;r.Year=N;r.__docgenInfo={description:"",methods:[],displayName:"DateInput"};E.__docgenInfo={description:"",methods:[],displayName:"DateInput.Day"};P.__docgenInfo={description:"",methods:[],displayName:"DateInput.Month"};N.__docgenInfo={description:"",methods:[],displayName:"DateInput.Year"};const _e={title:"Components/Form Elements/Date Input",component:r,subcomponents:{"DateInput.Day":r.Day,"DateInput.Month":r.Month,"DateInput.Year":r.Year},args:{onChange:me()},argTypes:{value:{control:!1,table:{type:{summary:"DateInputValue"}}}},parameters:{docs:{description:{component:`Use date input to help users enter a memorable date, like their date of birth.

https://service-manual.nhs.uk/design-system/components/date-input`}}}},D={args:{label:"Date of birth",hint:"For example, 31 3 1980",namePrefix:"date-of-birth",value:{day:"31",month:"3",year:"1980"}},render:e=>a.createElement(r,{...e})},b={args:{label:"Date of birth",hint:"For example, 31 3 1980",error:"Please enter a valid date of birth",namePrefix:"date-of-birth",value:{day:"",month:"",year:""}},render:e=>a.createElement(r,{...e})},f={args:{label:"Date of birth",hint:"For example, 31 3 1980",namePrefix:"date-of-birth",error:{day:"Please enter a valid day.",month:"Please enter a valid month."},value:{day:"",month:"",year:""}},render:e=>a.createElement(r,{...e})},g={args:{label:"Date of birth",hint:"For example, 31 3 1980",disabled:!0,value:{day:"31",month:"3",year:"1980"}},render:e=>a.createElement(r,{...e})};var T,$,L;D.parameters={...D.parameters,docs:{...(T=D.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Date of birth',
    hint: 'For example, 31 3 1980',
    namePrefix: 'date-of-birth',
    value: {
      day: '31',
      month: '3',
      year: '1980'
    }
  },
  render: args => <DateInput {...args} />
}`,...(L=($=D.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var O,V,j;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Date of birth',
    hint: 'For example, 31 3 1980',
    error: 'Please enter a valid date of birth',
    namePrefix: 'date-of-birth',
    value: {
      day: '',
      month: '',
      year: ''
    }
  },
  render: args => <DateInput {...args} />
}`,...(j=(V=b.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var B,R,z;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'Date of birth',
    hint: 'For example, 31 3 1980',
    namePrefix: 'date-of-birth',
    error: {
      day: 'Please enter a valid day.',
      month: 'Please enter a valid month.'
    },
    value: {
      day: '',
      month: '',
      year: ''
    }
  },
  render: args => <DateInput {...args} />
}`,...(z=(R=f.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var G,H,U;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Date of birth',
    hint: 'For example, 31 3 1980',
    disabled: true,
    value: {
      day: '31',
      month: '3',
      year: '1980'
    }
  },
  render: args => <DateInput {...args} />
}`,...(U=(H=g.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const Fe=["Default","WithError","WithErrorObject","Disabled"];export{D as Default,g as Disabled,b as WithError,f as WithErrorObject,Fe as __namedExportsOrder,_e as default};
