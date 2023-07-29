import{j as o}from"./jsx-runtime-ffb262ed.js";import{C as e}from"./Textarea-30ba2b39.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-1229b3e0.js";import"./Label-94ff57cd.js";import"./ErrorMessage-cf6b4293.js";import"./Hint-cd3b1cad.js";import"./ContentsList-3b833301.js";import"./Details-9b728b87.js";import"./ActionLink-4610739a.js";import"./BackLink-782f368f.js";import"./Breadcrumb-cf8af239.js";import"./Button-b5bb98ff.js";import"./ErrorSummary-0920367b.js";import"./Fieldset-93d4b52d.js";const W={component:e,title:"Components/Form Elements/Checkboxes",tags:["autodocs"]},s={args:{label:"This is a label",hint:"This is a hint",error:""},render:i=>o.jsxs(e,{...i,children:[o.jsx(e.Box,{value:"yes",hint:"some hint",children:"Yes"}),o.jsx(e.Box,{value:"no",children:"No"})]})},r={render:i=>o.jsxs(e,{label:"Checkboxes with conditional",...i,children:[o.jsx(e.Box,{value:"yes",conditional:"Conditional content",children:"Yes"}),o.jsx(e.Box,{value:"no",children:"No"})]})};var t,n,a,c,h;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'This is a label',
    hint: 'This is a hint',
    error: ''
  },
  render: args => <Checkboxes {...args}>
      <Checkboxes.Box value="yes" hint="some hint">
        Yes
      </Checkboxes.Box>
      <Checkboxes.Box value="no">No</Checkboxes.Box>
    </Checkboxes>
}`,...(a=(n=s.parameters)==null?void 0:n.docs)==null?void 0:a.source},description:{story:"The basic usage of the Checkboxes component.",...(h=(c=s.parameters)==null?void 0:c.docs)==null?void 0:h.description}}};var l,x,m,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Checkboxes label="Checkboxes with conditional" {...args}>
      <Checkboxes.Box value="yes" conditional="Conditional content">
        Yes
      </Checkboxes.Box>
      <Checkboxes.Box value="no">No</Checkboxes.Box>
    </Checkboxes>
}`,...(m=(x=r.parameters)==null?void 0:x.docs)==null?void 0:m.source},description:{story:"The basic usage of the Checkboxes component with a conditional.",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.description}}};const _=["Basic","WithConditional"];export{s as Basic,r as WithConditional,_ as __namedExportsOrder,W as default};
//# sourceMappingURL=Checkboxes.stories-084b1ef1.js.map
