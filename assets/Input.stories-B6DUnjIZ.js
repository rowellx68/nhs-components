import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-DUBK-3MB.js";import{n as r,t as i}from"./Input-BIF4vcGK.js";var a,o,s,c,l,u,d,f,p,m,h,g,_;t((()=>{a=e(n(),1),r(),o={title:`Components/Form Elements/Input`,component:i,argTypes:{width:{control:`select`,options:[`2`,`3`,`4`,`5`,`10`,`20`,`30`,`full`,`one-half`,`one-third`,`two-thirds`,`one-quarter`,`three-quarters`]}},parameters:{docs:{description:{component:`Use text input to let users enter a single line of text.

https://service-manual.nhs.uk/design-system/components/text-input`}}}},s={args:{label:`What is your full name?`},render:e=>a.createElement(i,e)},c={render:e=>a.createElement(a.Fragment,null,a.createElement(i,{...e,label:`30 character width`,width:`30`}),a.createElement(i,{...e,label:`20 character width`,width:`20`}),a.createElement(i,{...e,label:`10 character width`,width:`10`}),a.createElement(i,{...e,label:`5 character width`,width:`5`}),a.createElement(i,{...e,label:`4 character width`,width:`4`}),a.createElement(i,{...e,label:`3 character width`,width:`3`}),a.createElement(i,{...e,label:`2 character width`,width:`2`}))},l={render:e=>a.createElement(a.Fragment,null,a.createElement(i,{...e,label:`Full width`,width:`full`}),a.createElement(i,{...e,label:`Three-quarters width`,width:`three-quarters`}),a.createElement(i,{...e,label:`Two-thirds width`,width:`two-thirds`}),a.createElement(i,{...e,label:`One-half width`,width:`one-half`}),a.createElement(i,{...e,label:`One-third width`,width:`one-third`}),a.createElement(i,{...e,label:`One-quarter width`,width:`one-quarter`}))},u={args:{label:`Enter a full postcode in England`,hint:`For example, LS1 1AB`,width:`10`},render:e=>a.createElement(i,e)},d={args:{label:`What is your NHS number?`,error:`Enter NHS number`},render:e=>a.createElement(i,e)},f={args:{label:`What is your NHS number?`,hint:`Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 485 777 3456.`,width:`10`},render:e=>a.createElement(i,{...e,type:`text`,inputMode:`numeric`,pattern:`[0-9]*`})},p={args:{label:`Cost per item, in pounds`,prefix:`£`,suffix:`per item`,width:`5`},render:e=>a.createElement(i,e)},m={args:{label:`Cost in pounds`,prefix:`£`,width:`5`},render:e=>a.createElement(i,e)},h={args:{label:`Weight in kilograms`,suffix:`kg`,width:`5`},render:e=>a.createElement(i,e)},g={args:{label:`Cost per item, in pounds`,prefix:`£`,suffix:`per item`,width:`5`,error:`Enter a cost per item, in pounds`},render:e=>a.createElement(i,e)},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'What is your full name?'
  },
  render: args => <Input {...args} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <Input {...args} label="30 character width" width="30" />
      <Input {...args} label="20 character width" width="20" />
      <Input {...args} label="10 character width" width="10" />
      <Input {...args} label="5 character width" width="5" />
      <Input {...args} label="4 character width" width="4" />
      <Input {...args} label="3 character width" width="3" />
      <Input {...args} label="2 character width" width="2" />
    </>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <Input {...args} label="Full width" width="full" />
      <Input {...args} label="Three-quarters width" width="three-quarters" />
      <Input {...args} label="Two-thirds width" width="two-thirds" />
      <Input {...args} label="One-half width" width="one-half" />
      <Input {...args} label="One-third width" width="one-third" />
      <Input {...args} label="One-quarter width" width="one-quarter" />
    </>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enter a full postcode in England',
    hint: 'For example, LS1 1AB',
    width: '10'
  },
  render: args => <Input {...args} />
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'What is your NHS number?',
    error: 'Enter NHS number'
  },
  render: args => <Input {...args} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'What is your NHS number?',
    hint: 'Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 485 777 3456.',
    width: '10'
  },
  render: args => <Input {...args} type="text" inputMode="numeric" pattern="[0-9]*" />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Cost per item, in pounds',
    prefix: '£',
    suffix: 'per item',
    width: '5'
  },
  render: args => <Input {...args} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Cost in pounds',
    prefix: '£',
    width: '5'
  },
  render: args => <Input {...args} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Weight in kilograms',
    suffix: 'kg',
    width: '5'
  },
  render: args => <Input {...args} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Cost per item, in pounds',
    prefix: '£',
    suffix: 'per item',
    width: '5',
    error: 'Enter a cost per item, in pounds'
  },
  render: args => <Input {...args} />
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithFixedWidth`,`WithFluidWidth`,`WithHint`,`WithError`,`WholeNumbers`,`WithPrefixAndSuffix`,`WithPrefix`,`WithSuffix`,`WithPrefixSuffixAndError`]}))();export{s as Default,f as WholeNumbers,d as WithError,c as WithFixedWidth,l as WithFluidWidth,u as WithHint,m as WithPrefix,p as WithPrefixAndSuffix,g as WithPrefixSuffixAndError,h as WithSuffix,_ as __namedExportsOrder,o as default};