import{j as o}from"./clsx-1e30d079.js";import{C as e}from"./Textarea-97247e93.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./Label-d86d123e.js";import"./ErrorMessage-892a2a54.js";import"./Hint-34882571.js";import"./ContentsList-664fd9fb.js";import"./Details-3adbbf33.js";import"./ActionLink-5e33e5bb.js";import"./BackLink-4e9f7fca.js";import"./Breadcrumb-33a00274.js";import"./Button-76fa9248.js";import"./ErrorSummary-31eba750.js";import"./Fieldset-0011b1f9.js";const S={component:e,title:"Components/Form Elements/Checkboxes",tags:["autodocs"]},s={args:{label:"This is a label",hint:"This is a hint",error:""},render:i=>o.jsxs(e,{...i,children:[o.jsx(e.Box,{value:"yes",hint:"some hint",children:"Yes"}),o.jsx(e.Box,{value:"no",children:"No"})]})},r={render:i=>o.jsxs(e,{label:"Checkboxes with conditional",...i,children:[o.jsx(e.Box,{value:"yes",conditional:"Conditional content",children:"Yes"}),o.jsx(e.Box,{value:"no",children:"No"})]})};var t,n,a,c,h;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(m=(x=r.parameters)==null?void 0:x.docs)==null?void 0:m.source},description:{story:"The basic usage of the Checkboxes component with a conditional.",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.description}}};const W=["Basic","WithConditional"];export{s as Basic,r as WithConditional,W as __namedExportsOrder,S as default};
//# sourceMappingURL=Checkboxes.stories-43c5d51b.js.map
