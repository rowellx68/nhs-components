import{r as m,R as a}from"./index-Cs7sjTYM.js";import{F as ae}from"./FormGroup-DV2bfChl.js";import{f as i}from"./factory-DehWrhRO.js";import{c as I}from"./clsx-B-dksMZM.js";import{I as re}from"./Input-DNP51cEX.js";import{f as ne}from"./index-zZQ7-8LH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Hint-BOkj5kLS.js";import"./Label-DmVPi9oB.js";import"./Base-fHV16vWU.js";import"./ErrorMessage-DpQgiRoT.js";import"./VisuallyHidden-DonKESKA.js";import"./polymorphic-factory-23vJzvkj.js";import"./use-id-with-prefix-gaKPBBex.js";const Y=m.createContext({id:"",name:"",handleChange:()=>{}});Y.displayName="DateInputContext";const oe=()=>m.useContext(Y),se=Y.Provider,r=i(({onChange:e,value:t,disabled:d,...P},F)=>{const[p,c]=m.useState({day:(t==null?void 0:t.day)??"",month:(t==null?void 0:t.month)??"",year:(t==null?void 0:t.year)??""}),u=m.useMemo(()=>({values:{day:(t==null?void 0:t.day)??"",month:(t==null?void 0:t.month)??"",year:(t==null?void 0:t.year)??""}}),[]),h=m.useCallback((s,n)=>{n.stopPropagation();const o={...u.values,[s]:n.target.value};if(e){const l={...n,target:{...n.target,value:o},currentTarget:{...n.currentTarget,value:o}};e(l)}c(o),u.values={...o}},[p,c,e]);return a.createElement(ae,{as:"div",...P,ref:F,fieldsetProps:{role:"group"},inputType:"dateinput",render:({id:s,className:n,withError:o,errorMap:l,children:C})=>{const M=m.useMemo(()=>({id:s,name:s,error:o,errorMap:l,handleChange:h,value:p,disabled:d}),[s,o,l,p,h,d]);return a.createElement("div",{className:I("nhsuk-date-input",n),id:s},a.createElement(se,{value:M},C??a.createElement(a.Fragment,null,a.createElement(x,null),a.createElement(N,null),a.createElement(_,null))))}})}),me={day:"Day",month:"Month",year:"Year"},E=i(({part:e,label:t,error:d,className:P,name:F,id:p,width:c,labelProps:u={},value:h,disabled:s,onChange:n,...o},l)=>{const{id:C,name:M,value:k,handleChange:q,error:A,errorMap:S,disabled:J}=oe(),K=m.useCallback(y=>{y.persist(),n==null||n(y),y.isPropagationStopped()||q(e,y)},[]),{className:Q,...X}=u,Z=t||me[e],T=p||`${C}-${e}`,v=F||`${M}-${e}`;let W="4";(e==="day"||e==="month")&&(W="2");const ee=h||(k==null?void 0:k[e]),te=d||S&&S[e]||A&&!S;return a.createElement("div",{className:I("nhsuk-date-input__item"),...o},a.createElement(re,{labelProps:{className:I("nhsuk-date-input__label",Q),...X,htmlFor:T},label:Z,id:T,name:v,width:W||c,value:ee,className:I("nhsuk-date-input__input",{"nhsuk-input--error":te},P),type:"text",inputMode:"numeric",pattern:"[0-9]*",onChange:K,disabled:s||J,ref:l}))}),x=i((e,t)=>a.createElement(E,{part:"day",...e,ref:t})),N=i((e,t)=>a.createElement(E,{part:"month",...e,ref:t})),_=i((e,t)=>a.createElement(E,{part:"year",...e,ref:t}));E.displayName="BaseDatePart";r.displayName="DateInput";x.displayName="DateInput.Day";N.displayName="DateInput.Month";_.displayName="DateInput.Year";r.Day=x;r.Month=N;r.Year=_;r.__docgenInfo={description:"",methods:[],displayName:"DateInput"};x.__docgenInfo={description:"",methods:[],displayName:"DateInput.Day"};N.__docgenInfo={description:"",methods:[],displayName:"DateInput.Month"};_.__docgenInfo={description:"",methods:[],displayName:"DateInput.Year"};const xe={title:"Components/Form Elements/Date Input",component:r,subcomponents:{"DateInput.Day":r.Day,"DateInput.Month":r.Month,"DateInput.Year":r.Year},args:{onChange:ne()},argTypes:{value:{control:!1,table:{type:{summary:"DateInputValue"}}}},parameters:{docs:{description:{component:`Use date input to help users enter a memorable date, like their date of birth.

https://service-manual.nhs.uk/design-system/components/date-input`}}}},D={args:{label:"Date of birth",hint:"For example, 31 3 1980",value:{day:"31",month:"3",year:"1980"}},render:e=>a.createElement(r,{...e})},b={args:{label:"Date of birth",hint:"For example, 31 3 1980",error:"Please enter a valid date of birth",value:{day:"",month:"",year:""}},render:e=>a.createElement(r,{...e})},g={args:{label:"Date of birth",hint:"For example, 31 3 1980",error:{day:"Please enter a valid day.",month:"Please enter a valid month."},value:{day:"",month:"",year:""}},render:e=>a.createElement(r,{...e})},f={args:{label:"Date of birth",hint:"For example, 31 3 1980",disabled:!0,value:{day:"31",month:"3",year:"1980"}},render:e=>a.createElement(r,{...e})};var $,O,V;D.parameters={...D.parameters,docs:{...($=D.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(V=(O=D.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var j,w,B;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Date of birth',
    hint: 'For example, 31 3 1980',
    error: 'Please enter a valid date of birth',
    value: {
      day: '',
      month: '',
      year: ''
    }
  },
  render: args => <DateInput {...args} />
}`,...(B=(w=b.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var L,R,z;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Date of birth',
    hint: 'For example, 31 3 1980',
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
}`,...(z=(R=g.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var G,H,U;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(U=(H=f.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};const Ne=["Default","WithError","WithErrorObject","Disabled"];export{D as Default,f as Disabled,b as WithError,g as WithErrorObject,Ne as __namedExportsOrder,xe as default};
