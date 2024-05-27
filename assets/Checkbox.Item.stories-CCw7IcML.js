import{C as t,D as k,m as i,a as E,W as y,b as f}from"./Checkbox.stories-Ce6bs7dt.js";import{R as e}from"./index-uCp2LrAq.js";import{I as m}from"./Input-D5FbzKIn.js";import"./FormGroup-Mw6IClvX.js";import"./Hint-Cy41Y5xV.js";import"./clsx-B-dksMZM.js";import"./Label-BVxFGFqs.js";import"./Base-CQ_ipzy_.js";import"./ErrorMessage-C5IFgkMq.js";import"./VisuallyHidden-SShDg0Sg.js";import"./polymorphic-factory-C1jPlyAy.js";import"./use-id-with-prefix-ctfEntwL.js";import"./factory-Dl037jXY.js";import"./common-DS4CpZRv.js";import"./_commonjsHelpers-BosuxZz1.js";const B={title:"Components/Form Elements/Checkbox/Checkbox.Item",component:t.Item,argTypes:{conditional:{description:"Conditional content to show when the checkbox is selected",control:!1,table:{type:{summary:"ReactNode"}}}},decorators:[n=>e.createElement("form",null,e.createElement(n,null))]},o={args:{value:"email",children:"Email"},render:n=>e.createElement(t,{...Object.assign({},k.args,i.args)},e.createElement(t.Item,{...n}),e.createElement(t.Item,{value:"phone"},"Phone"),e.createElement(t.Item,{value:"sms"},"Text message"))},r={args:{value:"british",hint:"including English, Scottish, Welsh and Northern Irish",children:"British"},render:n=>e.createElement(t,{...Object.assign({},E.args,i.args)},e.createElement(t.Item,{...n}),e.createElement(t.Item,{value:"irish"},"Irish"),e.createElement(t.Item,{value:"other"},"Citizen of another country"))},s={args:{exclusive:!0,exclusiveGroup:"symptoms-list",children:"No, I do not have any of these symptoms",value:"none"},render:n=>e.createElement(t,{...Object.assign({},y.args,i.args)},e.createElement(t.Item,{value:"sore throat",exclusiveGroup:"symptoms-list"},"Sore throat"),e.createElement(t.Item,{value:"runny nose",exclusiveGroup:"symptoms-list"},"Runny nose"),e.createElement(t.Item,{value:"muscle or joint pain",exclusiveGroup:"symptoms-list"},"Muscle or joint pain"),e.createElement(t.Divider,null),e.createElement(t.Item,{...n}))},a={args:{value:"sms",conditional:e.createElement(m,{label:"Mobile number",width:"two-thirds"}),children:"Text message"},render:n=>e.createElement(t,{...Object.assign({},f.args,i.args)},e.createElement(t.Item,{value:"email",conditional:e.createElement(m,{label:"Email address",width:"two-thirds"})},"Email"),e.createElement(t.Item,{value:"phone",conditional:e.createElement(m,{label:"Phone number",width:"two-thirds"})},"Phone"),e.createElement(t.Item,{...n}))};var c,l,h;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    value: 'email',
    children: 'Email'
  },
  render: args => <Checkbox {...Object.assign({}, CheckboxStories.Default.args, CheckboxStories.default.args)}>
      <Checkbox.Item {...args} />
      <Checkbox.Item value="phone">Phone</Checkbox.Item>
      <Checkbox.Item value="sms">Text message</Checkbox.Item>
    </Checkbox>
}`,...(h=(l=o.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var u,d,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    value: 'british',
    hint: 'including English, Scottish, Welsh and Northern Irish',
    children: 'British'
  },
  render: args => <Checkbox {...Object.assign({}, CheckboxStories.WithItemHint.args, CheckboxStories.default.args)}>
      <Checkbox.Item {...args} />
      <Checkbox.Item value="irish">Irish</Checkbox.Item>
      <Checkbox.Item value="other">Citizen of another country</Checkbox.Item>
    </Checkbox>
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,x,C;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    exclusive: true,
    exclusiveGroup: 'symptoms-list',
    children: 'No, I do not have any of these symptoms',
    value: 'none'
  },
  render: args => <Checkbox {...Object.assign({}, CheckboxStories.WithExclusiveOption.args, CheckboxStories.default.args)}>
      <Checkbox.Item value="sore throat" exclusiveGroup="symptoms-list">
        Sore throat
      </Checkbox.Item>
      <Checkbox.Item value="runny nose" exclusiveGroup="symptoms-list">
        Runny nose
      </Checkbox.Item>
      <Checkbox.Item value="muscle or joint pain" exclusiveGroup="symptoms-list">
        Muscle or joint pain
      </Checkbox.Item>
      <Checkbox.Divider />
      <Checkbox.Item {...args} />
    </Checkbox>
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var g,I,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    value: 'sms',
    conditional: <Input label="Mobile number" width="two-thirds" />,
    children: 'Text message'
  },
  render: args => <Checkbox {...Object.assign({}, CheckboxStories.WithConditionalContent.args, CheckboxStories.default.args)}>
      <Checkbox.Item value="email" conditional={<Input label="Email address" width="two-thirds" />}>
        Email
      </Checkbox.Item>
      <Checkbox.Item value="phone" conditional={<Input label="Phone number" width="two-thirds" />}>
        Phone
      </Checkbox.Item>
      <Checkbox.Item {...args} />
    </Checkbox>
}`,...(v=(I=a.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};const _=["Default","WithItemHint","WithExclusiveOption","WithConditionalContent"];export{o as Default,a as WithConditionalContent,s as WithExclusiveOption,r as WithItemHint,_ as __namedExportsOrder,B as default};
