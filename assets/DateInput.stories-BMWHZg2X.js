import{r as m,R as a}from"./index-uCp2LrAq.js";import{F as Q}from"./FormGroup-Cq6fdTws.js";import{f as l}from"./factory-Dl037jXY.js";import{c as f}from"./clsx-B-dksMZM.js";import{I as X}from"./Input-BW9TQTHM.js";import{f as Z}from"./index-DEh8bWyY.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Hint-Cy41Y5xV.js";import"./Label-BVxFGFqs.js";import"./Base-CQ_ipzy_.js";import"./ErrorMessage-P3iC7fh_.js";import"./VisuallyHidden-io1tb15n.js";import"./polymorphic-factory-C1jPlyAy.js";import"./use-id-with-prefix-ctfEntwL.js";import"./index-Bqoxw6Vv.js";const M=m.createContext({id:"",name:"",handleChange:()=>{}});M.displayName="DateInputContext";const v=()=>m.useContext(M),ee=M.Provider,o=l(({onChange:t,value:e,...N},_)=>{const[i,c]=m.useState({day:(e==null?void 0:e.day)??"",month:(e==null?void 0:e.month)??"",year:(e==null?void 0:e.year)??""}),d=m.useMemo(()=>({values:{day:(e==null?void 0:e.day)??"",month:(e==null?void 0:e.month)??"",year:(e==null?void 0:e.year)??""}}),[]),u=m.useCallback((s,r)=>{r.stopPropagation();const n={...d.values,[s]:r.target.value};if(t){const p={...r,target:{...r.target,value:n},currentTarget:{...r.currentTarget,value:n}};t(p)}c(n),d.values={...n}},[i,c,t]);return a.createElement(Q,{as:"div",...N,ref:_,fieldsetProps:{role:"group"},inputType:"dateinput",render:({id:s,className:r,withError:n,errorMap:p,children:P})=>{const F=m.useMemo(()=>({id:s,name:s,error:n,errorMap:p,handleChange:u,value:i}),[s,n,p,i,u]);return a.createElement("div",{className:f("nhsuk-date-input",r),id:s},a.createElement(ee,{value:F},P??a.createElement(a.Fragment,null,a.createElement(b,null),a.createElement(E,null),a.createElement(x,null))))}})}),te={day:"Day",month:"Month",year:"Year"},I=l(({part:t,label:e,error:N,className:_,name:i,id:c,width:d,labelProps:u={},value:s,onChange:r,...n},p)=>{const{id:P,name:F,value:C,handleChange:R,error:z,errorMap:k}=v(),G=m.useCallback(h=>{h.persist(),r==null||r(h),h.isPropagationStopped()||R(t,h)},[]),{className:H,...U}=u,q=e||te[t],S=c||`${P}-${t}`,A=i||`${F}-${t}`;let Y="4";(t==="day"||t==="month")&&(Y="2");const J=s||(C==null?void 0:C[t]),K=N||k&&k[t]||z&&!k;return a.createElement("div",{className:f("nhsuk-date-input__item"),...n},a.createElement(X,{labelProps:{className:f("nhsuk-date-input__label",H),...U,htmlFor:S},label:q,id:S,name:A,width:Y||d,value:J,className:f("nhsuk-date-input__input",{"nhsuk-input--error":K},_),type:"text",inputMode:"numeric",pattern:"[0-9]*",onChange:G,ref:p}))}),b=l((t,e)=>a.createElement(I,{part:"day",...t,ref:e})),E=l((t,e)=>a.createElement(I,{part:"month",...t,ref:e})),x=l((t,e)=>a.createElement(I,{part:"year",...t,ref:e}));I.displayName="BaseDatePart";o.displayName="DateInput";b.displayName="DateInput.Day";E.displayName="DateInput.Month";x.displayName="DateInput.Year";o.Day=b;o.Month=E;o.Year=x;o.__docgenInfo={description:"",methods:[],displayName:"DateInput"};b.__docgenInfo={description:"",methods:[],displayName:"DateInput.Day"};E.__docgenInfo={description:"",methods:[],displayName:"DateInput.Month"};x.__docgenInfo={description:"",methods:[],displayName:"DateInput.Year"};const ge={title:"Components/Form Elements/Date Input",component:o,args:{onChange:Z()},argTypes:{value:{control:!1,table:{type:{summary:"DateInputValue"}}}},parameters:{docs:{description:{component:`Use date input to help users enter a memorable date, like their date of birth.

https://service-manual.nhs.uk/design-system/components/date-input`}}}},y={args:{label:"Date of birth",hint:"For example, 31 3 1980",value:{day:"31",month:"3",year:"1980"}},render:t=>a.createElement(o,{...t})},D={args:{label:"Date of birth",hint:"For example, 31 3 1980",error:"Please enter a valid date of birth",value:{day:"",month:"",year:""}},render:t=>a.createElement(o,{...t})},g={args:{label:"Date of birth",hint:"For example, 31 3 1980",error:{day:"Please enter a valid day.",month:"Please enter a valid month."},value:{day:"",month:"",year:""}},render:t=>a.createElement(o,{...t})};var T,W,$;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...($=(W=y.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var O,V,j;D.parameters={...D.parameters,docs:{...(O=D.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(j=(V=D.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var w,B,L;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(L=(B=g.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};const fe=["Default","WithError","WithErrorObject"];export{y as Default,D as WithError,g as WithErrorObject,fe as __namedExportsOrder,ge as default};
