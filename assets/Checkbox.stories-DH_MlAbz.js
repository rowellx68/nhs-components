import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-Co2kQL1W.js";import{n as r,t as i}from"./clsx-keIqec4B.js";import{n as a,t as o}from"./factory-BtzG2lhR.js";import{l as s,t as c}from"./nhsuk-CX7Kufhn.js";import{n as l,t as u}from"./FormGroup-Bt7mR26Z.js";import{n as d,t as f}from"./Hint-DO_q2u7l.js";import{n as p,t as m}from"./use-id-with-prefix-ByQebZ-f.js";import{n as h,t as g}from"./Label-CgviZ3RV.js";import{n as _,t as v}from"./Input-D5LgrhXI.js";var y,b,x,S,C=t((()=>{r(),c(),y=e(n(),1),l(),h(),a(),m(),d(),b=o(({children:e,small:t,...n},r)=>{let a=(0,y.useRef)(null),o=(0,y.useRef)(null),c=(0,y.useRef)(null);return(0,y.useImperativeHandle)(r,()=>a.current),(0,y.useEffect)(()=>{if(o.current&&!c.current)return setTimeout(()=>{c.current=new s(o.current)},0),()=>{o.current?.removeAttribute(`data-nhsuk-checkboxes-init`)}},[]),y.createElement(u,{as:`div`,withErrorLine:!0,...n,ref:a,inputType:`checkboxes`,render:({className:n,withError:r,ref:a,...s})=>y.createElement(`div`,{className:i(`nhsuk-checkboxes`,{"nhsuk-checkboxes--small":t},n),"data-module":`nhsuk-checkboxes`,ref:o,...s},e)})}),x=o(({id:e,hint:t,conditional:n,exclusive:r,exclusiveGroup:a,className:o,children:s,...c},l)=>{let u=!!n,d=e||p(`checkbox-item`),m=`${d}-item-hint`,h=`${d}-conditional`;return y.createElement(y.Fragment,null,y.createElement(`div`,{className:`nhsuk-checkboxes__item`},y.createElement(`input`,{className:i(`nhsuk-checkboxes__input`,o),id:d,...c,ref:l,"aria-describedby":t?m:void 0,...u?{"data-aria-controls":h}:{},"data-checkbox-exclusive-group":a||void 0,"data-checkbox-exclusive":r?`true`:void 0,type:`checkbox`}),y.createElement(g,{htmlFor:d,className:`nhsuk-checkboxes__label`},s),t&&y.createElement(f,{className:`nhsuk-checkboxes__hint`,id:m},t)),u&&y.createElement(`div`,{className:`nhsuk-checkboxes__conditional nhsuk-checkboxes__conditional--hidden`,id:h},n))}),S=({children:e=`or`,className:t,...n})=>y.createElement(`div`,{className:i(`nhsuk-checkboxes__divider`,t),...n},e),b.displayName=`Checkbox`,x.displayName=`Checkbox.Item`,S.displayName=`Checkbox.Divider`,b.Item=x,b.Divider=S})),w,T,E,D,O,k,A,j,M;t((()=>{w=e(n(),1),_(),C(),T={title:`Components/Form Elements/Checkbox`,component:b,argTypes:{labelProps:{control:!1,table:{type:{summary:`LabelProps`}}}},args:{labelProps:{size:`l`,variant:`page-heading`}},decorators:[e=>w.createElement(`form`,null,w.createElement(e,null))],parameters:{docs:{description:{component:`Use checkboxes to let users select 1 or more options on a form.

https://service-manual.nhs.uk/design-system/components/checkboxes`}}}},E={args:{label:`How do you want to be contacted about this?`,hint:`Select all options that are relevant to you`},render:e=>w.createElement(b,e,w.createElement(b.Item,{value:`email`},`Email`),w.createElement(b.Item,{value:`phone`},`Phone`),w.createElement(b.Item,{value:`text`},`Text message`))},D={args:{label:`How do you want to be contacted about this?`,hint:`Select all options that are relevant to you`,small:!0,labelProps:{size:`m`,variant:`page-heading`}},render:e=>w.createElement(b,e,w.createElement(b.Item,{value:`email`},`Email`),w.createElement(b.Item,{value:`phone`},`Phone`),w.createElement(b.Item,{value:`text`},`Text message`))},O={args:{label:`How do you want to be contacted about this?`,error:`Select at least one option`},render:e=>w.createElement(b,e,w.createElement(b.Item,{value:`email`},`Email`),w.createElement(b.Item,{value:`phone`},`Phone`),w.createElement(b.Item,{value:`text`},`Text message`))},k={args:{label:`What is your nationality?`,hint:`If you have dual nationality, select all options that are relevant to you.`},render:e=>w.createElement(b,e,w.createElement(b.Item,{value:`british`,hint:`including English, Scottish, Welsh and Northern Irish`},`British`),w.createElement(b.Item,{value:`irish`},`Irish`),w.createElement(b.Item,{value:`other`},`Citizen of another country`))},A={args:{label:`Do you have any of these symptoms?`,hint:`Select all the symptoms you have.`},render:e=>w.createElement(b,e,w.createElement(b.Item,{value:`sore-throat`,exclusiveGroup:`symptoms-list`},`Sore throat`),w.createElement(b.Item,{value:`runny-nose`,exclusiveGroup:`symptoms-list`},`Runny nose`),w.createElement(b.Item,{value:`muscle-joint-pain`,exclusiveGroup:`symptoms-list`},`Muscle or joint pain`),w.createElement(b.Divider,null),w.createElement(b.Item,{value:`none`,exclusive:!0,exclusiveGroup:`symptoms-list`},`No, I do not have any of these symptoms`))},j={args:{label:`How do you want to be contacted about this?`,hint:`Select all options that are relevant to you`},render:e=>w.createElement(b,e,w.createElement(b.Item,{value:`email`,conditional:w.createElement(v,{type:`email`,label:`Email address`,width:`two-thirds`})},`Email`),w.createElement(b.Item,{value:`phone`,conditional:w.createElement(v,{type:`tel`,label:`Phone number`,width:`two-thirds`})},`Phone`),w.createElement(b.Item,{value:`text`,conditional:w.createElement(v,{type:`tel`,label:`Mobile phone number`,width:`two-thirds`})},`Text message`))},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'How do you want to be contacted about this?',
    hint: 'Select all options that are relevant to you'
  },
  render: args => <Checkbox {...args}>
      <Checkbox.Item value="email">Email</Checkbox.Item>
      <Checkbox.Item value="phone">Phone</Checkbox.Item>
      <Checkbox.Item value="text">Text message</Checkbox.Item>
    </Checkbox>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'How do you want to be contacted about this?',
    hint: 'Select all options that are relevant to you',
    small: true,
    labelProps: {
      size: 'm',
      variant: 'page-heading'
    }
  },
  render: args => <Checkbox {...args}>
      <Checkbox.Item value="email">Email</Checkbox.Item>
      <Checkbox.Item value="phone">Phone</Checkbox.Item>
      <Checkbox.Item value="text">Text message</Checkbox.Item>
    </Checkbox>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'How do you want to be contacted about this?',
    error: 'Select at least one option'
  },
  render: args => <Checkbox {...args}>
      <Checkbox.Item value="email">Email</Checkbox.Item>
      <Checkbox.Item value="phone">Phone</Checkbox.Item>
      <Checkbox.Item value="text">Text message</Checkbox.Item>
    </Checkbox>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'What is your nationality?',
    hint: 'If you have dual nationality, select all options that are relevant to you.'
  },
  render: args => <Checkbox {...args}>
      <Checkbox.Item value="british" hint="including English, Scottish, Welsh and Northern Irish">
        British
      </Checkbox.Item>
      <Checkbox.Item value="irish">Irish</Checkbox.Item>
      <Checkbox.Item value="other">Citizen of another country</Checkbox.Item>
    </Checkbox>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Do you have any of these symptoms?',
    hint: 'Select all the symptoms you have.'
  },
  render: args => <Checkbox {...args}>
      <Checkbox.Item value="sore-throat" exclusiveGroup="symptoms-list">
        Sore throat
      </Checkbox.Item>
      <Checkbox.Item value="runny-nose" exclusiveGroup="symptoms-list">
        Runny nose
      </Checkbox.Item>
      <Checkbox.Item value="muscle-joint-pain" exclusiveGroup="symptoms-list">
        Muscle or joint pain
      </Checkbox.Item>
      <Checkbox.Divider />
      <Checkbox.Item value="none" exclusive exclusiveGroup="symptoms-list">
        No, I do not have any of these symptoms
      </Checkbox.Item>
    </Checkbox>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'How do you want to be contacted about this?',
    hint: 'Select all options that are relevant to you'
  },
  render: args => <Checkbox {...args}>
      <Checkbox.Item value="email" conditional={<Input type="email" label="Email address" width="two-thirds" />}>
        Email
      </Checkbox.Item>
      <Checkbox.Item value="phone" conditional={<Input type="tel" label="Phone number" width="two-thirds" />}>
        Phone
      </Checkbox.Item>
      <Checkbox.Item value="text" conditional={<Input type="tel" label="Mobile phone number" width="two-thirds" />}>
        Text message
      </Checkbox.Item>
    </Checkbox>
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Small`,`WithError`,`WithItemHint`,`WithExclusiveOption`,`WithConditionalContent`]}))();export{E as Default,D as Small,j as WithConditionalContent,O as WithError,A as WithExclusiveOption,k as WithItemHint,M as __namedExportsOrder,T as default};