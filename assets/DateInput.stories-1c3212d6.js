import{j as a}from"./jsx-runtime-94f6e698.js";import{D as e}from"./DateInput-899a3fe7.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./FormGroup-9ac8a814.js";import"./clsx-1229b3e0.js";import"./Label-fb36fd45.js";import"./ErrorMessage-086bc295.js";import"./Hint-57b83903.js";import"./Fieldset-6d5da384.js";const W={component:e,title:"Components/Form Elements/Date Input",tags:["autodocs"]},r={args:{label:"What is your date of birth?",labelProps:{size:"l"},hint:"For example, 15 3 1984",error:""},render:s=>a.jsx(e,{...s})},t={args:{label:"What is your date of birth?",hint:"For example, 15 3 1984"},render:s=>a.jsxs(e,{...s,children:[a.jsx(e.Day,{}),a.jsx(e.Month,{}),a.jsx(e.Year,{})]})};var o,n,p,i,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'What is your date of birth?',
    labelProps: {
      size: 'l'
    },
    hint: 'For example, 15 3 1984',
    error: ''
  },
  render: args => <DateInput {...args} />
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source},description:{story:"The basic usage of the Date Input component.",...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.description}}};var d,c,l,u,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'What is your date of birth?',
    hint: 'For example, 15 3 1984'
  },
  render: args => <DateInput {...args}>
      <DateInput.Day />
      <DateInput.Month />
      <DateInput.Year />
    </DateInput>
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:"Date Input with separate day, month and year fields.",...(h=(u=t.parameters)==null?void 0:u.docs)==null?void 0:h.description}}};const E=["Basic","SeparateFields"];export{r as Basic,t as SeparateFields,E as __namedExportsOrder,W as default};
//# sourceMappingURL=DateInput.stories-1c3212d6.js.map
