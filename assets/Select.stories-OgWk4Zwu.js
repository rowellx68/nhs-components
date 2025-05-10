import{R as t}from"./index-CgfFrydU.js";import{F as x}from"./FormGroup-B2R0rSFg.js";import{f as y}from"./factory-CyDOap8W.js";import{c as L}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Hint-DPDm5fq9.js";import"./Label-DM9NU5un.js";import"./Base-CpCQsTc1.js";import"./ErrorMessage-fi7UHUU4.js";import"./VisuallyHidden-s_dKiGqE.js";import"./polymorphic-factory-YJ8dk4Mh.js";import"./use-id-with-prefix-VupyVmxJ.js";const e=y((o,g)=>t.createElement(x,{as:"select",inputType:"select",withErrorLine:!0,...o,ref:g,render:({id:h,name:E,className:v,withError:b,...f})=>t.createElement("select",{id:h,name:E,className:L("nhsuk-select",{"nhsuk-select--error":b},v),...f})})),i=o=>t.createElement("option",{...o});e.displayName="Select";i.displayName="SelectOption";e.Option=i;e.__docgenInfo={description:"",methods:[],displayName:"Select"};i.__docgenInfo={description:"",methods:[],displayName:"SelectOption"};const T={title:"Components/Form Elements/Select",component:e,parameters:{docs:{description:{component:`Use select to let users choose an option from a long list but only use it as a last resort.

https://service-manual.nhs.uk/design-system/components/select`}}}},r={args:{label:"Label text goes here"},render:o=>t.createElement(e,{...o},t.createElement(e.Option,{value:"option-1"},"Option 1"),t.createElement(e.Option,{value:"option-2"},"Option 2"),t.createElement(e.Option,{value:"option-3"},"Option 3"))},n={args:{label:"Label text goes here",hint:"Hint text goes here"},render:o=>t.createElement(e,{...o},t.createElement(e.Option,{value:"option-1"},"Option 1"),t.createElement(e.Option,{value:"option-2"},"Option 2"),t.createElement(e.Option,{value:"option-3"},"Option 3"))},a={args:{label:"Label text goes here",error:"Error message goes here"},render:o=>t.createElement(e,{...o},t.createElement(e.Option,{value:"option-1"},"Option 1"),t.createElement(e.Option,{value:"option-2"},"Option 2"),t.createElement(e.Option,{value:"option-3"},"Option 3"))};var p,l,s;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Label text goes here'
  },
  render: args => <Select {...args}>
      <Select.Option value="option-1">Option 1</Select.Option>
      <Select.Option value="option-2">Option 2</Select.Option>
      <Select.Option value="option-3">Option 3</Select.Option>
    </Select>
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var c,m,O;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Label text goes here',
    hint: 'Hint text goes here'
  },
  render: args => <Select {...args}>
      <Select.Option value="option-1">Option 1</Select.Option>
      <Select.Option value="option-2">Option 2</Select.Option>
      <Select.Option value="option-3">Option 3</Select.Option>
    </Select>
}`,...(O=(m=n.parameters)==null?void 0:m.docs)==null?void 0:O.source}}};var u,S,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Label text goes here',
    error: 'Error message goes here'
  },
  render: args => <Select {...args}>
      <Select.Option value="option-1">Option 1</Select.Option>
      <Select.Option value="option-2">Option 2</Select.Option>
      <Select.Option value="option-3">Option 3</Select.Option>
    </Select>
}`,...(d=(S=a.parameters)==null?void 0:S.docs)==null?void 0:d.source}}};const U=["Default","WithHint","WithError"];export{r as Default,a as WithError,n as WithHint,U as __namedExportsOrder,T as default};
