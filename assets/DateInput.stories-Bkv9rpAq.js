import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-Co2kQL1W.js";import{n as r,t as i}from"./clsx-keIqec4B.js";import{n as a,t as o}from"./factory-BtzG2lhR.js";import{n as s,t as c}from"./FormGroup-Bt7mR26Z.js";import{n as l,t as u}from"./Input-D5LgrhXI.js";var d,f,p,m,h=t((()=>{d=e(n(),1),f=(0,d.createContext)({id:``,name:``,handleChange:()=>{}}),f.displayName=`DateInputContext`,p=()=>(0,d.useContext)(f),m=f.Provider}));function g({id:e,className:t,withError:n,errorMap:r,children:a,handleChange:o,state:s,disabled:c}){let l=(0,_.useMemo)(()=>({id:e,name:e,error:n,errorMap:r,handleChange:o,value:s,disabled:c}),[e,n,r,o,s,c]);return _.createElement(`div`,{className:i(`nhsuk-date-input`,t),id:e},_.createElement(m,{value:l},a??_.createElement(_.Fragment,null,_.createElement(x,null),_.createElement(S,null),_.createElement(C,null))))}var _,v,y,b,x,S,C,w=t((()=>{r(),_=e(n(),1),s(),a(),l(),h(),v=o(({onChange:e,value:t,disabled:n,...r},i)=>{let[a,o]=(0,_.useState)({day:t?.day??``,month:t?.month??``,year:t?.year??``}),s=(0,_.useMemo)(()=>({values:{day:t?.day??``,month:t?.month??``,year:t?.year??``}}),[]),l=(0,_.useCallback)((t,n)=>{n.stopPropagation();let r={...s.values,[t]:n.target.value};e&&e({...n,target:{...n.target,value:r},currentTarget:{...n.currentTarget,value:r}}),o(r),s.values={...r}},[s,e]);return _.createElement(c,{as:`div`,withErrorLine:!0,...r,ref:i,fieldsetProps:{role:`group`},inputType:`dateinput`,render:({id:e,className:t,withError:r,errorMap:i,children:o})=>_.createElement(g,{id:e,className:t,withError:r,errorMap:i,handleChange:l,state:a,disabled:n},o)})}),y={day:`Day`,month:`Month`,year:`Year`},b=o(({part:e,label:t,error:n,className:r,name:a,id:o,width:s,labelProps:c={},value:l,disabled:d,onChange:f,itemProps:m={},...h},g)=>{let{id:v,name:b,value:x,handleChange:S,error:C,errorMap:w,disabled:T}=p(),E=(0,_.useCallback)(t=>{t.persist(),f?.(t),t.isPropagationStopped()||S(e,t)},[]),{className:D,...O}=c,{className:k,...A}=m,j=t||y[e],M=o||`${v}-${e}`,N=a||`${b}-${e}`,P=`4`;(e===`day`||e===`month`)&&(P=`2`);let F=l||x?.[e],I=n||w?.[e]||C&&!w;return _.createElement(`div`,{className:i(`nhsuk-date-input__item`,k),...A},_.createElement(u,{labelProps:{className:i(`nhsuk-date-input__label`,D),...O,htmlFor:M},label:j,id:M,name:N,width:P||s,value:F,className:i(`nhsuk-date-input__input`,{"nhsuk-input--error":I},r),type:`text`,inputMode:`numeric`,pattern:`[0-9]*`,...h,onChange:E,disabled:d||T,ref:g}))}),x=o((e,t)=>_.createElement(b,{part:`day`,...e,ref:t})),S=o((e,t)=>_.createElement(b,{part:`month`,...e,ref:t})),C=o((e,t)=>_.createElement(b,{part:`year`,...e,ref:t})),b.displayName=`BaseDatePart`,v.displayName=`DateInput`,x.displayName=`DateInput.Day`,S.displayName=`DateInput.Month`,C.displayName=`DateInput.Year`,v.Day=x,v.Month=S,v.Year=C})),T,E,D,O,k,A,j,M,N;t((()=>{T=e(n(),1),w(),{fn:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/Form Elements/Date Input`,component:v,subcomponents:{"DateInput.Day":v.Day,"DateInput.Month":v.Month,"DateInput.Year":v.Year},args:{onChange:E()},argTypes:{value:{control:!1,table:{type:{summary:`DateInputValue`}}}},parameters:{docs:{description:{component:`Use date input to help users enter a memorable date, like their date of birth.

https://service-manual.nhs.uk/design-system/components/date-input`}}}},O={args:{label:`What is your date of birth?`,hint:`For example, 31 3 1980`,namePrefix:`dob`,labelProps:{size:`l`,variant:`page-heading`}},render:e=>T.createElement(v,e)},k={args:{label:`What is your date of birth?`,hint:`For example, 31 3 1980`,error:`Date of birth must be in the past`,namePrefix:`dob`,labelProps:{size:`l`,variant:`page-heading`},value:{day:``,month:``,year:``}},render:e=>T.createElement(v,e)},A={args:{label:`What is your date of birth?`,hint:`For example, 31 3 1980`,namePrefix:`dob`,labelProps:{size:`l`,variant:`page-heading`},error:{day:`Enter a day`,month:`Enter a month`},value:{day:``,month:``,year:``}},render:e=>T.createElement(v,e)},j={args:{label:`What is your birthday?`,hint:`For example, 5 12`,namePrefix:`birthday`,labelProps:{size:`l`,variant:`page-heading`}},render:e=>T.createElement(v,e,T.createElement(v.Day,null),T.createElement(v.Month,null))},M={args:{label:`What is your date of birth?`,hint:`For example, 31 3 1980`,namePrefix:`dob`,labelProps:{size:`l`,variant:`page-heading`},disabled:!0,value:{day:`31`,month:`3`,year:`1980`}},render:e=>T.createElement(v,e)},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'What is your date of birth?',
    hint: 'For example, 31 3 1980',
    namePrefix: 'dob',
    labelProps: {
      size: 'l',
      variant: 'page-heading'
    }
  },
  render: args => <DateInput {...args} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'What is your date of birth?',
    hint: 'For example, 31 3 1980',
    error: 'Date of birth must be in the past',
    namePrefix: 'dob',
    labelProps: {
      size: 'l',
      variant: 'page-heading'
    },
    value: {
      day: '',
      month: '',
      year: ''
    }
  },
  render: args => <DateInput {...args} />
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'What is your date of birth?',
    hint: 'For example, 31 3 1980',
    namePrefix: 'dob',
    labelProps: {
      size: 'l',
      variant: 'page-heading'
    },
    error: {
      day: 'Enter a day',
      month: 'Enter a month'
    },
    value: {
      day: '',
      month: '',
      year: ''
    }
  },
  render: args => <DateInput {...args} />
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'What is your birthday?',
    hint: 'For example, 5 12',
    namePrefix: 'birthday',
    labelProps: {
      size: 'l',
      variant: 'page-heading'
    }
  },
  render: args => <DateInput {...args}>
      <DateInput.Day />
      <DateInput.Month />
    </DateInput>
}`,...j.parameters?.docs?.source},description:{story:`Use the compound component API to render only specific date parts.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'What is your date of birth?',
    hint: 'For example, 31 3 1980',
    namePrefix: 'dob',
    labelProps: {
      size: 'l',
      variant: 'page-heading'
    },
    disabled: true,
    value: {
      day: '31',
      month: '3',
      year: '1980'
    }
  },
  render: args => <DateInput {...args} />
}`,...M.parameters?.docs?.source}}},N=[`Default`,`WithError`,`WithErrorObject`,`DayAndMonth`,`Disabled`]}))();export{j as DayAndMonth,O as Default,M as Disabled,k as WithError,A as WithErrorObject,N as __namedExportsOrder,D as default};