import{j as o}from"./jsx-runtime-DRTy3Uxn.js";import{C as e}from"./index-D2jAb2ZP.js";import"./index-BBkUAzwr.js";import"./FormGroup-10nvBGAl.js";import"./clsx-CH7BE6MN.js";import"./use-id-with-prefix-Dzx8tZmb.js";import"./Label-BNiKYQQA.js";import"./ErrorMessage-qXgaBtKk.js";import"./Hint-BZ4h_WhZ.js";import"./index-BVDTxkrF.js";import"./random-Cu-dbJeB.js";import"./index-YMjqK2a4.js";const Y={component:e,title:"Components/Form Elements/Checkboxes",tags:["autodocs"]},s={args:{label:"This is a label",hint:"This is a hint",error:""},render:r=>o.jsxs(e,{...r,children:[o.jsx(e.Box,{value:"yes",hint:"some hint",children:"Yes"}),o.jsx(e.Box,{value:"no",children:"No"})]})},n={render:r=>o.jsxs(e,{label:"Checkboxes with conditional",...r,children:[o.jsx(e.Box,{value:"yes",conditional:"Conditional content",children:"Yes"}),o.jsx(e.Box,{value:"no",children:"No"})]})};var i,t,a,c,h;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(a=(t=s.parameters)==null?void 0:t.docs)==null?void 0:a.source},description:{story:"The basic usage of the Checkboxes component.",...(h=(c=s.parameters)==null?void 0:c.docs)==null?void 0:h.description}}};var l,x,d,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Checkboxes label="Checkboxes with conditional" {...args}>
      <Checkboxes.Box value="yes" conditional="Conditional content">
        Yes
      </Checkboxes.Box>
      <Checkboxes.Box value="no">No</Checkboxes.Box>
    </Checkboxes>
}`,...(d=(x=n.parameters)==null?void 0:x.docs)==null?void 0:d.source},description:{story:"The basic usage of the Checkboxes component with a conditional.",...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.description}}};const w=["Basic","WithConditional"];export{s as Basic,n as WithConditional,w as __namedExportsOrder,Y as default};
