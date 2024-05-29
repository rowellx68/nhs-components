import{R as t}from"./index-uCp2LrAq.js";import{F as x}from"./FormGroup-Cq6fdTws.js";import{f as y}from"./factory-Dl037jXY.js";import{c as L}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Hint-Cy41Y5xV.js";import"./Label-BVxFGFqs.js";import"./Base-CQ_ipzy_.js";import"./ErrorMessage-P3iC7fh_.js";import"./VisuallyHidden-io1tb15n.js";import"./polymorphic-factory-C1jPlyAy.js";import"./use-id-with-prefix-ctfEntwL.js";const e=y((o,g)=>t.createElement(x,{as:"select",inputType:"select",...o,ref:g,render:({id:h,name:E,className:v,withError:b,...f})=>t.createElement("select",{id:h,name:E,className:L("nhsuk-select",{"nhsuk-select--error":b},v),...f})})),i=o=>t.createElement("option",{...o});e.displayName="Select";i.displayName="SelectOption";e.Option=i;e.__docgenInfo={description:"",methods:[],displayName:"Select"};i.__docgenInfo={description:"",methods:[],displayName:"SelectOption"};const U={title:"Components/Form Elements/Select",component:e,parameters:{docs:{description:{component:`Use select to let users choose an option from a long list but only use it as a last resort.

https://service-manual.nhs.uk/design-system/components/select`}}}},n={args:{label:"Label text goes here"},render:o=>t.createElement(e,{...o},t.createElement(e.Option,{value:"option-1"},"Option 1"),t.createElement(e.Option,{value:"option-2"},"Option 2"),t.createElement(e.Option,{value:"option-3"},"Option 3"))},r={args:{label:"Label text goes here",hint:"Hint text goes here"},render:o=>t.createElement(e,{...o},t.createElement(e.Option,{value:"option-1"},"Option 1"),t.createElement(e.Option,{value:"option-2"},"Option 2"),t.createElement(e.Option,{value:"option-3"},"Option 3"))},a={args:{label:"Label text goes here",error:"Error message goes here"},render:o=>t.createElement(e,{...o},t.createElement(e.Option,{value:"option-1"},"Option 1"),t.createElement(e.Option,{value:"option-2"},"Option 2"),t.createElement(e.Option,{value:"option-3"},"Option 3"))};var p,l,s;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Label text goes here'
  },
  render: args => <Select {...args}>
      <Select.Option value="option-1">Option 1</Select.Option>
      <Select.Option value="option-2">Option 2</Select.Option>
      <Select.Option value="option-3">Option 3</Select.Option>
    </Select>
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var c,m,O;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Label text goes here',
    hint: 'Hint text goes here'
  },
  render: args => <Select {...args}>
      <Select.Option value="option-1">Option 1</Select.Option>
      <Select.Option value="option-2">Option 2</Select.Option>
      <Select.Option value="option-3">Option 3</Select.Option>
    </Select>
}`,...(O=(m=r.parameters)==null?void 0:m.docs)==null?void 0:O.source}}};var u,S,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Label text goes here',
    error: 'Error message goes here'
  },
  render: args => <Select {...args}>
      <Select.Option value="option-1">Option 1</Select.Option>
      <Select.Option value="option-2">Option 2</Select.Option>
      <Select.Option value="option-3">Option 3</Select.Option>
    </Select>
}`,...(d=(S=a.parameters)==null?void 0:S.docs)==null?void 0:d.source}}};const j=["Default","WithHint","WithError"];export{n as Default,a as WithError,r as WithHint,j as __namedExportsOrder,U as default};
