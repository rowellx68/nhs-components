import{j as o}from"./jsx-runtime-ffb262ed.js";import{R as i}from"./Textarea-e18f20df.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-1229b3e0.js";import"./Label-94ff57cd.js";import"./ErrorMessage-7fb437da.js";import"./Hint-fa47fa6a.js";import"./ContentsList-47721945.js";import"./Details-3bda738e.js";import"./ActionLink-89adb048.js";import"./BackLink-8dfe342e.js";import"./Breadcrumbs-44813de0.js";import"./Card-84220d37.js";import"./Button-7ff1e2ab.js";import"./ErrorSummary-0920367b.js";import"./Fieldset-3b2b35c4.js";const q={component:i,title:"Components/Form Elements/Radios",tags:["autodocs"]},e={args:{label:"This is a label",hint:"This is a hint",inline:!1,error:""},render:a=>o.jsxs(i,{...a,children:[o.jsx(i.Radio,{value:"yes",hint:"some hint",children:"Yes"}),o.jsx(i.Radio,{value:"no",children:"No"})]})},s={render:a=>o.jsxs(i,{label:"Radios with divider",...a,children:[o.jsx(i.Radio,{value:"yes",children:"Yes"}),o.jsx(i.Radio,{value:"no",children:"No"}),o.jsx(i.Divider,{children:"or"}),o.jsx(i.Radio,{value:"maybe",children:"Maybe"})]})},r={render:a=>o.jsxs(i,{label:"Radios with conditional",...a,children:[o.jsx(i.Radio,{value:"yes",conditional:"Conditional content",children:"Yes"}),o.jsx(i.Radio,{value:"no",children:"No"})]})};var d,n,t,c,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(t=(n=e.parameters)==null?void 0:n.docs)==null?void 0:t.source},description:{story:"The basic usage of the Radios component.",...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.description}}};var R,m,p,h,u;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <Radios label="Radios with divider" {...args}>
      <Radios.Radio value="yes">Yes</Radios.Radio>
      <Radios.Radio value="no">No</Radios.Radio>
      <Radios.Divider>or</Radios.Divider>
      <Radios.Radio value="maybe">Maybe</Radios.Radio>
    </Radios>
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"The basic usage of the Radios component with a divider.",...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.description}}};var v,b,g,x,j;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Radios label="Radios with conditional" {...args}>
      <Radios.Radio value="yes" conditional="Conditional content">
        Yes
      </Radios.Radio>
      <Radios.Radio value="no">No</Radios.Radio>
    </Radios>
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source},description:{story:"The basic usage of the Radios component with a conditional.",...(j=(x=r.parameters)==null?void 0:x.docs)==null?void 0:j.description}}};const z=["Basic","WithDivider","WithConditional"];export{e as Basic,r as WithConditional,s as WithDivider,z as __namedExportsOrder,q as default};
//# sourceMappingURL=Radios.stories-47de947b.js.map
