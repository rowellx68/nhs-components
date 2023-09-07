import{j as o}from"./jsx-runtime-ffb262ed.js";import{a as i}from"./Row-2ae38c74.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-1229b3e0.js";import"./Label-94ff57cd.js";import"./ErrorMessage-7fb437da.js";import"./Hint-fa47fa6a.js";import"./Details-3bda738e.js";import"./DoDontList-ceb3c13d.js";import"./index-32a1c154.js";import"./index-b109e4e1.js";import"./index-149b7452.js";import"./index-a4a9c00e.js";import"./Image-6a997706.js";import"./InsetText-679dda7d.js";import"./SummaryList-700e977e.js";import"./Table-abfb9231.js";import"./Tag-d69b9a82.js";import"./WarningCallout-6787373a.js";import"./ActionLink-92d9554a.js";import"./BackLink-ddeb1684.js";import"./Breadcrumbs-44813de0.js";import"./Card-720bfc0a.js";import"./ContentsList-47721945.js";import"./Footer-ccd1a6a5.js";import"./Pagination-9a45d4cd.js";import"./SkipLink-1b15983e.js";import"./Button-c27bbde9.js";import"./ErrorSummary-06368e4f.js";import"./Fieldset-3b2b35c4.js";const Z={component:i,title:"Components/Form Elements/Radios",tags:["autodocs"]},e={args:{label:"This is a label",hint:"This is a hint",inline:!1,error:""},render:a=>o.jsxs(i,{...a,children:[o.jsx(i.Radio,{value:"yes",hint:"some hint",children:"Yes"}),o.jsx(i.Radio,{value:"no",children:"No"})]})},s={render:a=>o.jsxs(i,{label:"Radios with divider",...a,children:[o.jsx(i.Radio,{value:"yes",children:"Yes"}),o.jsx(i.Radio,{value:"no",children:"No"}),o.jsx(i.Divider,{children:"or"}),o.jsx(i.Radio,{value:"maybe",children:"Maybe"})]})},r={render:a=>o.jsxs(i,{label:"Radios with conditional",...a,children:[o.jsx(i.Radio,{value:"yes",conditional:"Conditional content",children:"Yes"}),o.jsx(i.Radio,{value:"no",children:"No"})]})};var d,t,n,m,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'This is a label',
    hint: 'This is a hint',
    inline: false,
    error: ''
  },
  render: args => <Radios {...args}>
      <Radios.Radio value="yes" hint="some hint">
        Yes
      </Radios.Radio>
      <Radios.Radio value="no">No</Radios.Radio>
    </Radios>
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source},description:{story:"The basic usage of the Radios component.",...(c=(m=e.parameters)==null?void 0:m.docs)==null?void 0:c.description}}};var l,p,R,h,u;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Radios label="Radios with divider" {...args}>
      <Radios.Radio value="yes">Yes</Radios.Radio>
      <Radios.Radio value="no">No</Radios.Radio>
      <Radios.Divider>or</Radios.Divider>
      <Radios.Radio value="maybe">Maybe</Radios.Radio>
    </Radios>
}`,...(R=(p=s.parameters)==null?void 0:p.docs)==null?void 0:R.source},description:{story:"The basic usage of the Radios component with a divider.",...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.description}}};var v,b,g,x,j;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Radios label="Radios with conditional" {...args}>
      <Radios.Radio value="yes" conditional="Conditional content">
        Yes
      </Radios.Radio>
      <Radios.Radio value="no">No</Radios.Radio>
    </Radios>
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source},description:{story:"The basic usage of the Radios component with a conditional.",...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.description}}};const $=["Basic","WithDivider","WithConditional"];export{e as Basic,r as WithConditional,s as WithDivider,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=Radios.stories-81bf0ad1.js.map
