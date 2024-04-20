import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{F as S}from"./FormGroup-10nvBGAl.js";import{c as j}from"./clsx-CH7BE6MN.js";import{r as l}from"./index-BBkUAzwr.js";import{L as U}from"./Label-BNiKYQQA.js";const w=l.createContext({id:"",name:"",handleChange:()=>{},registerInput:()=>{}});w.displayName="DateInputContext";const G=()=>l.useContext(w),q={day:"Day",month:"Month",year:"Year"},z=({id:i,className:t,name:f,onChange:m,labelProps:h={},label:x,part:a,error:d,value:p,defaultValue:y,...g},D)=>{const{id:s,name:e,value:r,defaultValue:o,registerInput:b,handleChange:I}=G(),M=l.useCallback(c=>{c.persist(),m==null||m(c),c.isPropagationStopped()||I(a,c)},[]),k=D,T=c=>{b(a,c),k==null||k(c)},Y=p??(r==null?void 0:r[a]),$=y??(o==null?void 0:o[a]),N=i||`${s}-${a}`,L=f||`${e}-${a}`,E=`${N}--label`,{className:H,id:C,...V}=h;return n.jsx("div",{className:"nhsuk-date-input__item",children:n.jsxs("div",{className:"nhsuk-form-group",children:[n.jsx(U,{className:j("nhsuk-date-input__label",H),id:E,htmlFor:N,...V,children:x||q[a]}),n.jsx("input",{className:j("nhsuk-input nhsuk-date-input__input",{"nhsuk-input--width-2":a!=="year","nhsuk-input--width-4":a==="year","nhsuk-input--error":d||!1},t),id:N,value:Y,defaultValue:$,"aria-labelledby":C||C,name:L,onChange:M,ref:T,...g})]})})},_=l.forwardRef(z),P=l.forwardRef((i,t)=>n.jsx(_,{...i,part:"day",ref:t})),F=l.forwardRef((i,t)=>n.jsx(_,{...i,part:"month",ref:t})),R=l.forwardRef((i,t)=>n.jsx(_,{...i,part:"year",ref:t})),u=({children:i,value:t,defaultValue:f,autoSelectNext:m,onChange:h,...x})=>{let a={values:{day:(t==null?void 0:t.day)??"",month:(t==null?void 0:t.month)??"",year:(t==null?void 0:t.year)??""}};const d=l.useRef(null),p=l.useRef(null),y=(s,e)=>{var r,o;m&&(s==="day"&&e.length===2?(r=d==null?void 0:d.current)==null||r.focus():s==="month"&&e.length===2&&((o=p==null?void 0:p.current)==null||o.focus()))},g=(s,e)=>{switch(s){case"month":d.current=e;break;case"year":p.current=e;break}},D=(s,e)=>{y(s,e.target.value),e.stopPropagation();const r={...a.values,[s]:e.target.value};if(h){const o={...e,target:{...e.target,value:r},currentTarget:{...e.currentTarget,value:r}};h(o)}a={values:r}};return n.jsx(S,{...x,inputType:"dateinput",render:({id:s,name:e,className:r,error:o,...b})=>{const I={id:s,name:e,error:o,defaultValue:f,handleChange:D,registerInput:g};return n.jsx("div",{className:j("nhsuk-date-input",r),id:s,...b,children:n.jsx(w.Provider,{value:I,children:i||n.jsxs(n.Fragment,{children:[n.jsx(u.Day,{}),n.jsx(u.Month,{}),n.jsx(u.Year,{})]})})})}})};u.displayName="DateInput";P.displayName="DateInput.Day";F.displayName="DateInput.Month";R.displayName="DateInput.Year";u.Day=P;u.Month=F;u.Year=R;u.__docgenInfo={description:`Use date input to help users enter a memorable date, like their date of birth.

For more information on when to use this component, go to the [HTN Digital service manual](https://service-manual.nhs.uk/design-system/components/date-input).

@link https://service-manual.nhs.uk/design-system/components/date-input

@example
\`\`\`tsx
<DateInput label="Date of birth" />
\`\`\``,methods:[],displayName:"DateInput"};u.__docgenInfo={description:`Use date input to help users enter a memorable date, like their date of birth.

For more information on when to use this component, go to the [HTN Digital service manual](https://service-manual.nhs.uk/design-system/components/date-input).

@link https://service-manual.nhs.uk/design-system/components/date-input

@example
\`\`\`tsx
<DateInput label="Date of birth" />
\`\`\``,methods:[],displayName:"DateInput"};export{u as D};
