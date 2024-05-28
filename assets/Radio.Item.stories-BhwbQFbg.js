import{R as a,D as R,m as s,a as b,b as w}from"./Radio.stories-CG1MjPYp.js";import{R as e}from"./index-uCp2LrAq.js";import{I as r}from"./Input-BW9TQTHM.js";import"./FormGroup-Cq6fdTws.js";import"./Hint-Cy41Y5xV.js";import"./clsx-B-dksMZM.js";import"./Label-BVxFGFqs.js";import"./Base-CQ_ipzy_.js";import"./ErrorMessage-P3iC7fh_.js";import"./VisuallyHidden-io1tb15n.js";import"./polymorphic-factory-C1jPlyAy.js";import"./use-id-with-prefix-ctfEntwL.js";import"./factory-Dl037jXY.js";import"./common-DS4CpZRv.js";import"./_commonjsHelpers-BosuxZz1.js";const $={title:"Components/Form Elements/Radio/Radio.Item",component:a.Item,argTypes:{conditional:{description:"Conditional content to show when the checkbox is selected",control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[t=>e.createElement("form",null,e.createElement(t,null))]},n={args:{value:"yes",children:"Yes",name:"adult"},render:t=>e.createElement(a,{...Object.assign({},R.args,s.args)},e.createElement(a.Item,{...t}),e.createElement(a.Item,{value:"no",name:t.name},"No"))},o={args:{value:"yes",hint:"We will text you a 6 digit security code",children:"Yes, I have a mobile phone with signal",name:"signal"},render:t=>e.createElement(a,{...Object.assign({},b.args,s.args)},e.createElement(a.Item,{...t}),e.createElement(a.Item,{value:"no",name:t.name,hint:"We will call you to give you a 6 digit security code"},"No, I want to use my landline"))},i={args:{value:"sms",conditional:e.createElement(r,{label:"Mobile number",width:"two-thirds"}),children:"Text message",name:"contact-method"},render:t=>e.createElement(a,{...Object.assign({},w.args,s.args)},e.createElement(a.Item,{name:t.name,value:"email",conditional:e.createElement(r,{label:"Email address",width:"two-thirds"})},"Email"),e.createElement(a.Item,{name:t.name,value:"phone",conditional:e.createElement(r,{label:"Phone number",width:"two-thirds"})},"Phone"),e.createElement(a.Item,{...t}))};var m,l,d;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    value: 'yes',
    children: 'Yes',
    name: 'adult'
  },
  render: args => <Radio {...Object.assign({}, RadioStories.Default.args, RadioStories.default.args)}>
      <Radio.Item {...args} />
      <Radio.Item value="no" name={args.name}>
        No
      </Radio.Item>
    </Radio>
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,u,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: 'yes',
    hint: 'We will text you a 6 digit security code',
    children: 'Yes, I have a mobile phone with signal',
    name: 'signal'
  },
  render: args => <Radio {...Object.assign({}, RadioStories.WithItemHint.args, RadioStories.default.args)}>
      <Radio.Item {...args} />
      <Radio.Item value="no" name={args.name} hint="We will call you to give you a 6 digit security code">
        No, I want to use my landline
      </Radio.Item>
    </Radio>
}`,...(h=(u=o.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,p,I;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 'sms',
    conditional: <Input label="Mobile number" width="two-thirds" />,
    children: 'Text message',
    name: 'contact-method'
  },
  render: args => <Radio {...Object.assign({}, RadioStories.WithConditionalContent.args, RadioStories.default.args)}>
      <Radio.Item name={args.name} value="email" conditional={<Input label="Email address" width="two-thirds" />}>
        Email
      </Radio.Item>
      <Radio.Item name={args.name} value="phone" conditional={<Input label="Phone number" width="two-thirds" />}>
        Phone
      </Radio.Item>
      <Radio.Item {...args} />
    </Radio>
}`,...(I=(p=i.parameters)==null?void 0:p.docs)==null?void 0:I.source}}};const T=["Default","WithItemHint","WithConditionalContent"];export{n as Default,i as WithConditionalContent,o as WithItemHint,T as __namedExportsOrder,$ as default};
