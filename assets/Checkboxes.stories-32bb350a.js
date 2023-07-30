import{j as o}from"./jsx-runtime-ffb262ed.js";import{b as e}from"./Row-c3346682.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-1229b3e0.js";import"./Label-94ff57cd.js";import"./ErrorMessage-7fb437da.js";import"./Hint-fa47fa6a.js";import"./Details-3bda738e.js";import"./ActionLink-89adb048.js";import"./BackLink-8dfe342e.js";import"./Breadcrumbs-44813de0.js";import"./Card-84220d37.js";import"./ContentsList-47721945.js";import"./Footer-db7b4b7e.js";import"./Button-c27bbde9.js";import"./ErrorSummary-0920367b.js";import"./Fieldset-3b2b35c4.js";const F={component:e,title:"Components/Form Elements/Checkboxes",tags:["autodocs"]},s={args:{label:"This is a label",hint:"This is a hint",error:""},render:i=>o.jsxs(e,{...i,children:[o.jsx(e.Box,{value:"yes",hint:"some hint",children:"Yes"}),o.jsx(e.Box,{value:"no",children:"No"})]})},r={render:i=>o.jsxs(e,{label:"Checkboxes with conditional",...i,children:[o.jsx(e.Box,{value:"yes",conditional:"Conditional content",children:"Yes"}),o.jsx(e.Box,{value:"no",children:"No"})]})};var t,n,a,c,h;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(a=(n=s.parameters)==null?void 0:n.docs)==null?void 0:a.source},description:{story:"The basic usage of the Checkboxes component.",...(h=(c=s.parameters)==null?void 0:c.docs)==null?void 0:h.description}}};var m,l,x,p,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Checkboxes label="Checkboxes with conditional" {...args}>
      <Checkboxes.Box value="yes" conditional="Conditional content">
        Yes
      </Checkboxes.Box>
      <Checkboxes.Box value="no">No</Checkboxes.Box>
    </Checkboxes>
}`,...(x=(l=r.parameters)==null?void 0:l.docs)==null?void 0:x.source},description:{story:"The basic usage of the Checkboxes component with a conditional.",...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.description}}};const O=["Basic","WithConditional"];export{s as Basic,r as WithConditional,O as __namedExportsOrder,F as default};
//# sourceMappingURL=Checkboxes.stories-32bb350a.js.map
