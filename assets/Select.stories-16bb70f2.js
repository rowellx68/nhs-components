import{j as n}from"./jsx-runtime-ffb262ed.js";import{S as e}from"./Textarea-30ba2b39.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-1229b3e0.js";import"./Label-94ff57cd.js";import"./ErrorMessage-cf6b4293.js";import"./Hint-cd3b1cad.js";import"./ContentsList-3b833301.js";import"./Details-9b728b87.js";import"./ActionLink-4610739a.js";import"./BackLink-782f368f.js";import"./Breadcrumb-cf8af239.js";import"./Button-b5bb98ff.js";import"./ErrorSummary-0920367b.js";import"./Fieldset-93d4b52d.js";const M={component:e,title:"Components/Form Elements/Select",tags:["autodocs"]},t={args:{label:"Select a country or territory",hint:"If you are from the Guernsey or Jersey, please select Channel Islands",error:"",disabled:!1},render:r=>n.jsxs(e,{...r,children:[n.jsx(e.Option,{value:"england",children:"England"}),n.jsx(e.Option,{value:"northern-ireland",children:"Northern Ireland"}),n.jsx(e.Option,{value:"scotland",children:"Scotland"}),n.jsx(e.Option,{value:"wales",children:"Wales"}),n.jsx(e.Option,{value:"channel-islands",children:"Channel Islands"}),n.jsx(e.Option,{value:"isle-of-man",children:"Isle of Man"})]})},l={args:{label:"Select a country or territory",hint:"If you are from the Guernsey or Jersey, please select Channel Islands",error:""},render:r=>n.jsxs(e,{...r,children:[n.jsx(e.Option,{value:"england",children:"England"}),n.jsx(e.Option,{value:"northern-ireland",children:"Northern Ireland"}),n.jsx(e.Option,{value:"scotland",children:"Scotland"}),n.jsx(e.Option,{value:"wales",children:"Wales"}),n.jsx(e.Option,{value:"channel-islands",children:"Channel Islands"}),n.jsx(e.Option,{value:"isle-of-man",disabled:!0,children:"Isle of Man"})]})};var a,o,s,i,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    label: 'Select a country or territory',
    hint: 'If you are from the Guernsey or Jersey, please select Channel Islands',
    error: '',
    disabled: false
  },
  render: args => <Select {...args}>
      <Select.Option value="england">England</Select.Option>
      <Select.Option value="northern-ireland">Northern Ireland</Select.Option>
      <Select.Option value="scotland">Scotland</Select.Option>
      <Select.Option value="wales">Wales</Select.Option>
      <Select.Option value="channel-islands">Channel Islands</Select.Option>
      <Select.Option value="isle-of-man">Isle of Man</Select.Option>
    </Select>
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source},description:{story:"The basic usage of the Select component.",...(c=(i=t.parameters)==null?void 0:i.docs)==null?void 0:c.description}}};var d,p,h,u,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Select a country or territory',
    hint: 'If you are from the Guernsey or Jersey, please select Channel Islands',
    error: ''
  },
  render: args => <Select {...args}>
      <Select.Option value="england">England</Select.Option>
      <Select.Option value="northern-ireland">Northern Ireland</Select.Option>
      <Select.Option value="scotland">Scotland</Select.Option>
      <Select.Option value="wales">Wales</Select.Option>
      <Select.Option value="channel-islands">Channel Islands</Select.Option>
      <Select.Option value="isle-of-man" disabled>
        Isle of Man
      </Select.Option>
    </Select>
}`,...(h=(p=l.parameters)==null?void 0:p.docs)==null?void 0:h.source},description:{story:"The Select component with a disabled option.",...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.description}}};const N=["Basic","WithDisabledOption"];export{t as Basic,l as WithDisabledOption,N as __namedExportsOrder,M as default};
//# sourceMappingURL=Select.stories-16bb70f2.js.map
