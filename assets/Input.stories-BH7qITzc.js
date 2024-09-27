import{I as t}from"./Input-C_lyn_5S.js";import{R as r}from"./index-Cs7sjTYM.js";import"./FormGroup-D9KF4WXA.js";import"./Hint-BOkj5kLS.js";import"./clsx-B-dksMZM.js";import"./Label-CvxOZKJz.js";import"./Base-fHV16vWU.js";import"./ErrorMessage-D7s2s_-I.js";import"./VisuallyHidden-DonKESKA.js";import"./polymorphic-factory-23vJzvkj.js";import"./use-id-with-prefix-gaKPBBex.js";import"./factory-DehWrhRO.js";import"./_commonjsHelpers-BosuxZz1.js";const te={title:"Components/Form Elements/Input",component:t,argTypes:{width:{control:{type:"select"},options:["2","3","4","5","10","20","30","full","one-half","one-third","two-thirds","one-quarter","three-quarters"]}},parameters:{docs:{description:{component:`Use text input to let users enter a single line of text.

https://service-manual.nhs.uk/design-system/components/text-input`}}}},a={args:{label:"Full name"},render:e=>r.createElement(t,{...e})},n={render:e=>r.createElement(r.Fragment,null,r.createElement(t,{...e,label:"30 character width",width:"30"}),r.createElement(t,{...e,label:"20 character width",width:"20"}),r.createElement(t,{...e,label:"10 character width",width:"10"}),r.createElement(t,{...e,label:"5 character width",width:"5"}),r.createElement(t,{...e,label:"4 character width",width:"4"}),r.createElement(t,{...e,label:"3 character width",width:"3"}),r.createElement(t,{...e,label:"2 character width",width:"2"}))},i={render:e=>r.createElement(r.Fragment,null,r.createElement(t,{...e,label:"Full width",width:"full"}),r.createElement(t,{...e,label:"Three-quarters width",width:"three-quarters"}),r.createElement(t,{...e,label:"Two-thirds width",width:"two-thirds"}),r.createElement(t,{...e,label:"One-half width",width:"one-half"}),r.createElement(t,{...e,label:"One-third width",width:"one-third"}),r.createElement(t,{...e,label:"One-quarter width",width:"one-quarter"}))},s={args:{label:"Enter a full postcode in England",hint:"For example, LS1 1AB",width:"10",error:""},render:e=>r.createElement(t,{...e})},o={args:{label:"Full name",error:"Enter your full name"},render:e=>r.createElement(t,{...e})},l={args:{label:"What is your NHS number?",hint:"Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 485 777 3456.",width:"10"},render:e=>r.createElement(t,{...e,type:"text",inputMode:"numeric",pattern:"[0-9]*"})},d={args:{label:"Cost per item, in pounds",prefix:"£",suffix:"per item",width:"5"},render:e=>r.createElement(t,{...e})},c={args:{label:"Cost in pounds",prefix:"£",width:"5"},render:e=>r.createElement(t,{...e})},h={args:{label:"Weight in kilograms",suffix:"kg",width:"5"},render:e=>r.createElement(t,{...e})},u={args:{label:"Cost per item, in pounds",prefix:"£",suffix:"per item",width:"5",error:"Enter a cost per item, in pounds"},render:e=>r.createElement(t,{...e})};var p,m,w;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Full name'
  },
  render: args => <Input {...args} />
}`,...(w=(m=a.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};var g,f,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <>
      <Input {...args} label="30 character width" width="30" />
      <Input {...args} label="20 character width" width="20" />
      <Input {...args} label="10 character width" width="10" />
      <Input {...args} label="5 character width" width="5" />
      <Input {...args} label="4 character width" width="4" />
      <Input {...args} label="3 character width" width="3" />
      <Input {...args} label="2 character width" width="2" />
    </>
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,E,W;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <>
      <Input {...args} label="Full width" width="full" />
      <Input {...args} label="Three-quarters width" width="three-quarters" />
      <Input {...args} label="Two-thirds width" width="two-thirds" />
      <Input {...args} label="One-half width" width="one-half" />
      <Input {...args} label="One-third width" width="one-third" />
      <Input {...args} label="One-quarter width" width="one-quarter" />
    </>
}`,...(W=(E=i.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var I,S,F;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Enter a full postcode in England',
    hint: 'For example, LS1 1AB',
    width: '10',
    error: ''
  },
  render: args => <Input {...args} />
}`,...(F=(S=s.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var y,q,H;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Full name',
    error: 'Enter your full name'
  },
  render: args => <Input {...args} />
}`,...(H=(q=o.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var N,C,O;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'What is your NHS number?',
    hint: 'Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 485 777 3456.',
    width: '10'
  },
  render: args => <Input {...args} type="text" inputMode="numeric" pattern="[0-9]*" />
}`,...(O=(C=l.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var A,P,k;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'Cost per item, in pounds',
    prefix: '£',
    suffix: 'per item',
    width: '5'
  },
  render: args => <Input {...args} />
}`,...(k=(P=d.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var T,B,D;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Cost in pounds',
    prefix: '£',
    width: '5'
  },
  render: args => <Input {...args} />
}`,...(D=(B=c.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var L,M,R;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Weight in kilograms',
    suffix: 'kg',
    width: '5'
  },
  render: args => <Input {...args} />
}`,...(R=(M=h.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var Y,_,v;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    label: 'Cost per item, in pounds',
    prefix: '£',
    suffix: 'per item',
    width: '5',
    error: 'Enter a cost per item, in pounds'
  },
  render: args => <Input {...args} />
}`,...(v=(_=u.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};const ae=["Default","WithFixedWidth","WithFluidWidth","WithHint","WithError","WholeNumbers","WithPrefixAndSuffix","WithPrefix","WithSuffix","WithPrefixSuffixAndError"];export{a as Default,l as WholeNumbers,o as WithError,n as WithFixedWidth,i as WithFluidWidth,s as WithHint,c as WithPrefix,d as WithPrefixAndSuffix,u as WithPrefixSuffixAndError,h as WithSuffix,ae as __namedExportsOrder,te as default};
