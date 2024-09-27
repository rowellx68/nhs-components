import{r as m,R as a}from"./index-Cs7sjTYM.js";import{F as ae}from"./FormGroup-D9KF4WXA.js";import{f as d}from"./factory-DehWrhRO.js";import{c as I}from"./clsx-B-dksMZM.js";import{I as re}from"./Input-C_lyn_5S.js";import{f as ne}from"./index-CjQa9iMn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Hint-BOkj5kLS.js";import"./Label-CvxOZKJz.js";import"./Base-fHV16vWU.js";import"./ErrorMessage-D7s2s_-I.js";import"./VisuallyHidden-DonKESKA.js";import"./polymorphic-factory-23vJzvkj.js";import"./use-id-with-prefix-gaKPBBex.js";const Y=m.createContext({id:"",name:"",handleChange:()=>{}});Y.displayName="DateInputContext";const oe=()=>m.useContext(Y),se=Y.Provider,r=d(({onChange:e,value:t,disabled:p,..._},F)=>{const[l,c]=m.useState({day:(t==null?void 0:t.day)??"",month:(t==null?void 0:t.month)??"",year:(t==null?void 0:t.year)??""}),u=m.useMemo(()=>({values:{day:(t==null?void 0:t.day)??"",month:(t==null?void 0:t.month)??"",year:(t==null?void 0:t.year)??""}}),[]),h=m.useCallback((s,n)=>{n.stopPropagation();const o={...u.values,[s]:n.target.value};if(e){const i={...n,target:{...n.target,value:o},currentTarget:{...n.currentTarget,value:o}};e(i)}c(o),u.values={...o}},[l,c,e]);return a.createElement(ae,{as:"div",withErrorLine:!0,..._,ref:F,fieldsetProps:{role:"group"},inputType:"dateinput",render:({id:s,className:n,withError:o,errorMap:i,children:C})=>{const M=m.useMemo(()=>({id:s,name:s,error:o,errorMap:i,handleChange:h,value:l,disabled:p}),[s,o,i,l,h,p]);return a.createElement("div",{className:I("nhsuk-date-input",n),id:s},a.createElement(se,{value:M},C??a.createElement(a.Fragment,null,a.createElement(E,null),a.createElement(P,null),a.createElement(N,null))))}})}),me={day:"Day",month:"Month",year:"Year"},x=d(({part:e,label:t,error:p,className:_,name:F,id:l,width:c,labelProps:u={},value:h,disabled:s,onChange:n,...o},i)=>{const{id:C,name:M,value:k,handleChange:q,error:A,errorMap:S,disabled:J}=oe(),K=m.useCallback(y=>{y.persist(),n==null||n(y),y.isPropagationStopped()||q(e,y)},[]),{className:Q,...X}=u,Z=t||me[e],T=l||`${C}-${e}`,v=F||`${M}-${e}`;let W="4";(e==="day"||e==="month")&&(W="2");const ee=h||(k==null?void 0:k[e]),te=p||S&&S[e]||A&&!S;return a.createElement("div",{className:I("nhsuk-date-input__item"),...o},a.createElement(re,{labelProps:{className:I("nhsuk-date-input__label",Q),...X,htmlFor:T},label:Z,id:T,name:v,width:W||c,value:ee,className:I("nhsuk-date-input__input",{"nhsuk-input--error":te},_),type:"text",inputMode:"numeric",pattern:"[0-9]*",onChange:K,disabled:s||J,ref:i}))}),E=d((e,t)=>a.createElement(x,{part:"day",...e,ref:t})),P=d((e,t)=>a.createElement(x,{part:"month",...e,ref:t})),N=d((e,t)=>a.createElement(x,{part:"year",...e,ref:t}));x.displayName="BaseDatePart";r.displayName="DateInput";E.displayName="DateInput.Day";P.displayName="DateInput.Month";N.displayName="DateInput.Year";r.Day=E;r.Month=P;r.Year=N;r.__docgenInfo={description:"",methods:[],displayName:"DateInput"};E.__docgenInfo={description:"",methods:[],displayName:"DateInput.Day"};P.__docgenInfo={description:"",methods:[],displayName:"DateInput.Month"};N.__docgenInfo={description:"",methods:[],displayName:"DateInput.Year"};const Ee={title:"Components/Form Elements/Date Input",component:r,subcomponents:{"DateInput.Day":r.Day,"DateInput.Month":r.Month,"DateInput.Year":r.Year},args:{onChange:ne()},argTypes:{value:{control:!1,table:{type:{summary:"DateInputValue"}}}},parameters:{docs:{description:{component:`Use date input to help users enter a memorable date, like their date of birth.

https://service-manual.nhs.uk/design-system/components/date-input`}}}},D={args:{label:"Date of birth",hint:"For example, 31 3 1980",namePrefix:"date-of-birth",value:{day:"31",month:"3",year:"1980"}},render:e=>a.createElement(r,{...e})},b={args:{label:"Date of birth",hint:"For example, 31 3 1980",error:"Please enter a valid date of birth",namePrefix:"date-of-birth",value:{day:"",month:"",year:""}},render:e=>a.createElement(r,{...e})},f={args:{label:"Date of birth",hint:"For example, 31 3 1980",namePrefix:"date-of-birth",error:{day:"Please enter a valid day.",month:"Please enter a valid month."},value:{day:"",month:"",year:""}},render:e=>a.createElement(r,{...e})},g={args:{label:"Date of birth",hint:"For example, 31 3 1980",disabled:!0,value:{day:"31",month:"3",year:"1980"}},render:e=>a.createElement(r,{...e})};var $,w,L;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(L=(w=D.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var O,V,j;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(U=(H=g.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const Pe=["Default","WithError","WithErrorObject","Disabled"];export{D as Default,g as Disabled,b as WithError,f as WithErrorObject,Pe as __namedExportsOrder,Ee as default};
