import{j as r}from"./jsx-runtime-94f6e698.js";import{D as e}from"./Details-36813976.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx-1229b3e0.js";const w={component:e,title:"Components/Content Presentation/Details",tags:["autodocs"]},a={render:n=>r.jsxs(e,{...n,children:[r.jsx(e.Summary,{children:"How to find your NHS number"}),r.jsx(e.Text,{children:"You can find your NHS number..."})]})},s={args:{expander:!0},render:n=>r.jsxs(e,{...n,children:[r.jsx(e.Summary,{children:"How to find your NHS number"}),r.jsx(e.Text,{children:"You can find your NHS number..."})]})},t={render:n=>r.jsxs(e.ExpanderGroup,{children:[r.jsxs(e,{expander:!0,...n,children:[r.jsx(e.Summary,{children:"How to find your NHS number"}),r.jsx(e.Text,{children:"You can find your NHS number..."})]}),r.jsxs(e,{expander:!0,children:[r.jsx(e.Summary,{children:"How to find your NHS number"}),r.jsx(e.Text,{children:"You can find your NHS number..."})]})]})};var o,i,u,d,m;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <Details {...args}>
      <Details.Summary>How to find your NHS number</Details.Summary>
      <Details.Text>You can find your NHS number...</Details.Text>
    </Details>
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source},description:{story:"The basic usage of the Details component.",...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.description}}};var p,c,l,x,D;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    expander: true
  },
  render: args => <Details {...args}>
      <Details.Summary>How to find your NHS number</Details.Summary>
      <Details.Text>You can find your NHS number...</Details.Text>
    </Details>
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:"The Details component with the expander prop set to true. This will render the component as an expander.",...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.description}}};var y,S,H,h,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Details.ExpanderGroup>
      <Details expander {...args}>
        <Details.Summary>How to find your NHS number</Details.Summary>
        <Details.Text>You can find your NHS number...</Details.Text>
      </Details>
      <Details expander>
        <Details.Summary>How to find your NHS number</Details.Summary>
        <Details.Text>You can find your NHS number...</Details.Text>
      </Details>
    </Details.ExpanderGroup>
}`,...(H=(S=t.parameters)==null?void 0:S.docs)==null?void 0:H.source},description:{story:"A group of Details components with the expander prop set to true and wrapped in an `Details.ExpanderGroup` component.",...(f=(h=t.parameters)==null?void 0:h.docs)==null?void 0:f.description}}};const E=["Basic","Expander","ExpanderGroup"];export{a as Basic,s as Expander,t as ExpanderGroup,E as __namedExportsOrder,w as default};
//# sourceMappingURL=Details.stories-d6cc9b6f.js.map
