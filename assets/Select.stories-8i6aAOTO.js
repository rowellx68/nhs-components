import{R as t}from"./index-uCp2LrAq.js";import{S as e}from"./Select-CBZpFw6c.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FormGroup-Cq6fdTws.js";import"./Hint-Cy41Y5xV.js";import"./clsx-B-dksMZM.js";import"./Label-BVxFGFqs.js";import"./Base-CQ_ipzy_.js";import"./ErrorMessage-P3iC7fh_.js";import"./VisuallyHidden-io1tb15n.js";import"./polymorphic-factory-C1jPlyAy.js";import"./use-id-with-prefix-ctfEntwL.js";import"./factory-Dl037jXY.js";const R={title:"Components/Form Elements/Select",component:e,parameters:{docs:{description:{component:`Use select to let users choose an option from a long list but only use it as a last resort.

https://service-manual.nhs.uk/design-system/components/select`}}}},n={args:{label:"Label text goes here"},render:o=>t.createElement(e,{...o},t.createElement(e.Option,{value:"option-1"},"Option 1"),t.createElement(e.Option,{value:"option-2"},"Option 2"),t.createElement(e.Option,{value:"option-3"},"Option 3"))},r={args:{label:"Label text goes here",hint:"Hint text goes here"},render:o=>t.createElement(e,{...o},t.createElement(e.Option,{value:"option-1"},"Option 1"),t.createElement(e.Option,{value:"option-2"},"Option 2"),t.createElement(e.Option,{value:"option-3"},"Option 3"))},a={args:{label:"Label text goes here",error:"Error message goes here"},render:o=>t.createElement(e,{...o},t.createElement(e.Option,{value:"option-1"},"Option 1"),t.createElement(e.Option,{value:"option-2"},"Option 2"),t.createElement(e.Option,{value:"option-3"},"Option 3"))};var i,p,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Label text goes here'
  },
  render: args => <Select {...args}>
      <Select.Option value="option-1">Option 1</Select.Option>
      <Select.Option value="option-2">Option 2</Select.Option>
      <Select.Option value="option-3">Option 3</Select.Option>
    </Select>
}`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var s,c,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Label text goes here',
    hint: 'Hint text goes here'
  },
  render: args => <Select {...args}>
      <Select.Option value="option-1">Option 1</Select.Option>
      <Select.Option value="option-2">Option 2</Select.Option>
      <Select.Option value="option-3">Option 3</Select.Option>
    </Select>
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var O,u,S;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Label text goes here',
    error: 'Error message goes here'
  },
  render: args => <Select {...args}>
      <Select.Option value="option-1">Option 1</Select.Option>
      <Select.Option value="option-2">Option 2</Select.Option>
      <Select.Option value="option-3">Option 3</Select.Option>
    </Select>
}`,...(S=(u=a.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const _=["Default","WithHint","WithError"];export{n as Default,a as WithError,r as WithHint,_ as __namedExportsOrder,R as default};
