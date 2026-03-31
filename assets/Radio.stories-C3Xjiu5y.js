import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-DUBK-3MB.js";import{n as r,t as i}from"./clsx-keIqec4B.js";import{n as a,t as o}from"./factory-CE4OYqv3.js";import{i as s,t as c}from"./nhsuk-CX7Kufhn.js";import{n as l,t as u}from"./FormGroup-BW9-W2RN.js";import{n as d,t as f}from"./Hint-DFS-sWeh.js";import{n as p,t as m}from"./use-id-with-prefix-D057TJVD.js";import{n as h,t as g}from"./Label-Cb3WYCgl.js";import{n as _,t as v}from"./Input-BIF4vcGK.js";var y,b,x,S,C=t((()=>{r(),c(),y=e(n(),1),l(),h(),a(),m(),d(),b=o(({children:e,inline:t,small:n,...r},a)=>{let o=(0,y.useRef)(null),c=(0,y.useRef)(null),l=(0,y.useRef)(null);return(0,y.useImperativeHandle)(a,()=>o.current),(0,y.useEffect)(()=>{if(c.current&&!l.current)return setTimeout(()=>{l.current=new s(c.current)},0),()=>{c.current?.removeAttribute(`data-nhsuk-radios-init`)}},[]),y.createElement(u,{as:`div`,withErrorLine:!0,...r,ref:o,inputType:`radios`,render:({className:r,withError:a,ref:o,...s})=>y.createElement(`div`,{className:i(`nhsuk-radios`,{"nhsuk-radios--inline":t,"nhsuk-radios--small":n},r),"data-module":`nhsuk-radios`,ref:c,...s},e)})}),x=o(({id:e,hint:t,conditional:n,className:r,children:a,...o},s)=>{let c=!!n,l=e||p(`radio-item`),u=`${l}-item-hint`,d=`${l}-conditional`;return y.createElement(y.Fragment,null,y.createElement(`div`,{className:`nhsuk-radios__item`},y.createElement(`input`,{className:i(`nhsuk-radios__input`,r),id:l,...o,ref:s,"aria-describedby":t?u:void 0,...c?{"data-aria-controls":d}:{},type:`radio`}),y.createElement(g,{htmlFor:l,className:`nhsuk-radios__label`},a),t&&y.createElement(f,{className:`nhsuk-radios__hint`,id:u},t)),c&&y.createElement(`div`,{className:`nhsuk-radios__conditional nhsuk-radios__conditional--hidden`,id:d},n))}),S=({children:e=`or`,className:t,...n})=>y.createElement(`div`,{className:i(`nhsuk-radios__divider`,t),...n},e),b.displayName=`Radio`,x.displayName=`Radio.Item`,S.displayName=`Radio.Divider`,b.Item=x,b.Divider=S})),w,T,E,D,O,k,A,j,M,N;t((()=>{w=e(n(),1),_(),C(),T={title:`Components/Form Elements/Radio`,component:b,argTypes:{labelProps:{control:!1,table:{type:{summary:`LabelProps`}}}},args:{labelProps:{size:`l`,variant:`page-heading`}},decorators:[e=>w.createElement(`form`,null,w.createElement(e,null))],parameters:{docs:{description:{component:`Use radios when you want users to select only 1 option from a list.

https://service-manual.nhs.uk/design-system/components/radios`}}}},E={args:{label:`Are you 18 or over?`},render:e=>w.createElement(b,e,w.createElement(b.Item,{value:`yes`,name:`adult`},`Yes`),w.createElement(b.Item,{value:`no`,name:`adult`},`No`))},D={args:{label:`Are you 18 or over?`,inline:!0},render:e=>w.createElement(b,e,w.createElement(b.Item,{value:`yes`,name:`adult`},`Yes`),w.createElement(b.Item,{value:`no`,name:`adult`},`No`))},O={args:{label:`Do you know your NHS number?`,hint:[`This is a 10 digit number, like 485 777 3456.`,`You can find it on any letter the NHS has sent you, on a prescription or by logging in to a GP practice online service.`]},render:e=>w.createElement(b,e,w.createElement(b.Item,{value:`yes`,name:`nhs-number`},`Yes, I know my NHS number`),w.createElement(b.Item,{value:`no`,name:`nhs-number`},`No, I do not know my NHS number`),w.createElement(b.Item,{value:`not-sure`,name:`nhs-number`},`I'm not sure`))},k={args:{label:`Have you changed your name?`,hint:`This includes changing your last name or spelling your name differently.`,error:`Select yes if you have changed your name`},render:e=>w.createElement(b,e,w.createElement(b.Item,{value:`yes`,name:`change-name`},`Yes`),w.createElement(b.Item,{value:`no`,name:`change-name`},`No`))},A={args:{label:`Do you have a mobile phone with signal?`},render:e=>w.createElement(b,e,w.createElement(b.Item,{value:`yes`,name:`mobile-signal`,hint:`We will text you a 6 digit security code`},`Yes, I have a mobile phone with signal`),w.createElement(b.Item,{value:`no`,name:`mobile-signal`,hint:`We will call you to give you a 6 digit security code`},`No, I want to use my landline`))},j={args:{label:`How do you want to sign in?`},render:e=>w.createElement(b,e,w.createElement(b.Item,{value:`nhs-login`,name:`sign-in`},`Use NHS login`),w.createElement(b.Item,{value:`gov-uk`,name:`sign-in`},`Use GOV.UK Verify`),w.createElement(b.Divider,null),w.createElement(b.Item,{value:`create-account`,name:`sign-in`},`Create an account`))},M={args:{label:`How do you want to be contacted about this?`,hint:`Select 1 option`},render:e=>w.createElement(b,e,w.createElement(b.Item,{name:`contact-method`,value:`email`,conditional:w.createElement(v,{type:`email`,label:`Email address`,width:`two-thirds`})},`Email`),w.createElement(b.Item,{name:`contact-method`,value:`phone`,conditional:w.createElement(v,{type:`tel`,label:`Phone number`,width:`two-thirds`})},`Phone`),w.createElement(b.Item,{name:`contact-method`,value:`text`,conditional:w.createElement(v,{type:`tel`,label:`Mobile phone number`,width:`two-thirds`})},`Text message`))},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Are you 18 or over?'
  },
  render: args => <Radio {...args}>
      <Radio.Item value="yes" name="adult">
        Yes
      </Radio.Item>
      <Radio.Item value="no" name="adult">
        No
      </Radio.Item>
    </Radio>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Are you 18 or over?',
    inline: true
  },
  render: args => <Radio {...args}>
      <Radio.Item value="yes" name="adult">
        Yes
      </Radio.Item>
      <Radio.Item value="no" name="adult">
        No
      </Radio.Item>
    </Radio>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Do you know your NHS number?',
    hint: ['This is a 10 digit number, like 485 777 3456.', 'You can find it on any letter the NHS has sent you, on a prescription or by logging in to a GP practice online service.']
  },
  render: args => <Radio {...args}>
      <Radio.Item value="yes" name="nhs-number">
        Yes, I know my NHS number
      </Radio.Item>
      <Radio.Item value="no" name="nhs-number">
        No, I do not know my NHS number
      </Radio.Item>
      <Radio.Item value="not-sure" name="nhs-number">
        I&apos;m not sure
      </Radio.Item>
    </Radio>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Have you changed your name?',
    hint: 'This includes changing your last name or spelling your name differently.',
    error: 'Select yes if you have changed your name'
  },
  render: args => <Radio {...args}>
      <Radio.Item value="yes" name="change-name">
        Yes
      </Radio.Item>
      <Radio.Item value="no" name="change-name">
        No
      </Radio.Item>
    </Radio>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Do you have a mobile phone with signal?'
  },
  render: args => <Radio {...args}>
      <Radio.Item value="yes" name="mobile-signal" hint="We will text you a 6 digit security code">
        Yes, I have a mobile phone with signal
      </Radio.Item>
      <Radio.Item value="no" name="mobile-signal" hint="We will call you to give you a 6 digit security code">
        No, I want to use my landline
      </Radio.Item>
    </Radio>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'How do you want to sign in?'
  },
  render: args => <Radio {...args}>
      <Radio.Item value="nhs-login" name="sign-in">
        Use NHS login
      </Radio.Item>
      <Radio.Item value="gov-uk" name="sign-in">
        Use GOV.UK Verify
      </Radio.Item>
      <Radio.Divider />
      <Radio.Item value="create-account" name="sign-in">
        Create an account
      </Radio.Item>
    </Radio>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'How do you want to be contacted about this?',
    hint: 'Select 1 option'
  },
  render: args => <Radio {...args}>
      <Radio.Item name="contact-method" value="email" conditional={<Input type="email" label="Email address" width="two-thirds" />}>
        Email
      </Radio.Item>
      <Radio.Item name="contact-method" value="phone" conditional={<Input type="tel" label="Phone number" width="two-thirds" />}>
        Phone
      </Radio.Item>
      <Radio.Item name="contact-method" value="text" conditional={<Input type="tel" label="Mobile phone number" width="two-thirds" />}>
        Text message
      </Radio.Item>
    </Radio>
}`,...M.parameters?.docs?.source}}},N=[`Default`,`Inline`,`WithHint`,`WithError`,`WithItemHint`,`WithDivider`,`WithConditionalContent`]}))();export{E as Default,D as Inline,M as WithConditionalContent,j as WithDivider,k as WithError,O as WithHint,A as WithItemHint,N as __namedExportsOrder,T as default};