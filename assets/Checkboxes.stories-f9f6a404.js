import{j as o}from"./jsx-runtime-94f6e698.js";import{C as e}from"./Checkboxes-0645233a.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./FormGroup-7a85a743.js";import"./clsx-1229b3e0.js";import"./use-id-with-prefix-a03533b1.js";import"./Label-fb36fd45.js";import"./ErrorMessage-086bc295.js";import"./Hint-57b83903.js";import"./Fieldset-742b488e.js";import"./random-1d94713f.js";const Y={component:e,title:"Components/Form Elements/Checkboxes",tags:["autodocs"]},s={args:{label:"This is a label",hint:"This is a hint",error:""},render:i=>o.jsxs(e,{...i,children:[o.jsx(e.Box,{value:"yes",hint:"some hint",children:"Yes"}),o.jsx(e.Box,{value:"no",children:"No"})]})},r={render:i=>o.jsxs(e,{label:"Checkboxes with conditional",...i,children:[o.jsx(e.Box,{value:"yes",conditional:"Conditional content",children:"Yes"}),o.jsx(e.Box,{value:"no",children:"No"})]})};var t,n,a,c,h;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(a=(n=s.parameters)==null?void 0:n.docs)==null?void 0:a.source},description:{story:"The basic usage of the Checkboxes component.",...(h=(c=s.parameters)==null?void 0:c.docs)==null?void 0:h.description}}};var l,x,d,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Checkboxes label="Checkboxes with conditional" {...args}>
      <Checkboxes.Box value="yes" conditional="Conditional content">
        Yes
      </Checkboxes.Box>
      <Checkboxes.Box value="no">No</Checkboxes.Box>
    </Checkboxes>
}`,...(d=(x=r.parameters)==null?void 0:x.docs)==null?void 0:d.source},description:{story:"The basic usage of the Checkboxes component with a conditional.",...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};const w=["Basic","WithConditional"];export{s as Basic,r as WithConditional,w as __namedExportsOrder,Y as default};
//# sourceMappingURL=Checkboxes.stories-f9f6a404.js.map
