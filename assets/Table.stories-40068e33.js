import{j as l}from"./jsx-runtime-ffb262ed.js";import{T as e}from"./Table-abfb9231.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-1229b3e0.js";const B={component:e,title:"Components/Content Presentation/Table",tags:["autodocs"]},a={args:{caption:"Skin symptoms and possible causes"},render:s=>l.jsxs(e,{...s,children:[l.jsx(e.Head,{children:l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"Skin symptoms"}),l.jsx(e.Cell,{children:"Possible cause"})]})}),l.jsxs(e.Body,{children:[l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"Blisters on lips or around the mouth"}),l.jsx(e.Cell,{children:"cold sores"})]}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"Itchy, dry, cracked, sore"}),l.jsx(e.Cell,{children:"eczema"})]})]})]})},n={args:{caption:"Ibuprofen tablet dosages for children",isResponsive:!0},render:s=>l.jsxs(e,{...s,children:[l.jsx(e.Head,{children:l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"Age"}),l.jsx(e.Cell,{children:"How much"}),l.jsx(e.Cell,{children:"How often"})]})}),l.jsxs(e.Body,{children:[l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"7 to 9 years"}),l.jsx(e.Cell,{children:"200mg"}),l.jsx(e.Cell,{children:"Max 3 times in 24 hours"})]}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"10 to 11 years"}),l.jsx(e.Cell,{children:"200mg to 300mg"}),l.jsx(e.Cell,{children:"Max 3 times in 24 hours"})]})]})]})},r={args:{caption:"Ibuprofen tablet dosages for children"},render:s=>l.jsxs(e,{...s,children:[l.jsx(e.Head,{children:l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"Age"}),l.jsx(e.Cell,{children:"How much"}),l.jsx(e.Cell,{isNumeric:!0,children:"How often"})]})}),l.jsxs(e.Body,{children:[l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"7 to 9 years"}),l.jsx(e.Cell,{children:"200mg"}),l.jsx(e.Cell,{isNumeric:!0,children:"Max 3 times in 24 hours"})]}),l.jsxs(e.Row,{children:[l.jsx(e.Cell,{children:"10 to 11 years"}),l.jsx(e.Cell,{children:"200mg to 300mg"}),l.jsx(e.Cell,{isNumeric:!0,children:"Max 3 times in 24 hours"})]})]})]})};var o,i,c,t,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    caption: 'Skin symptoms and possible causes'
  },
  render: args => <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Skin symptoms</Table.Cell>
          <Table.Cell>Possible cause</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Blisters on lips or around the mouth</Table.Cell>
          <Table.Cell>cold sores</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Itchy, dry, cracked, sore</Table.Cell>
          <Table.Cell>eczema</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"The basic usage of the Table component.",...(d=(t=a.parameters)==null?void 0:t.docs)==null?void 0:d.description}}};var b,T,m,C,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    caption: 'Ibuprofen tablet dosages for children',
    isResponsive: true
  },
  render: args => <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Age</Table.Cell>
          <Table.Cell>How much</Table.Cell>
          <Table.Cell>How often</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>7 to 9 years</Table.Cell>
          <Table.Cell>200mg</Table.Cell>
          <Table.Cell>Max 3 times in 24 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>10 to 11 years</Table.Cell>
          <Table.Cell>200mg to 300mg</Table.Cell>
          <Table.Cell>Max 3 times in 24 hours</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
}`,...(m=(T=n.parameters)==null?void 0:T.docs)==null?void 0:m.source},description:{story:"The responsive usage of the Table component.",...(h=(C=n.parameters)==null?void 0:C.docs)==null?void 0:h.description}}};var p,u,x,j,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    caption: 'Ibuprofen tablet dosages for children'
  },
  render: args => <Table {...args}>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Age</Table.Cell>
          <Table.Cell>How much</Table.Cell>
          <Table.Cell isNumeric>How often</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>7 to 9 years</Table.Cell>
          <Table.Cell>200mg</Table.Cell>
          <Table.Cell isNumeric>Max 3 times in 24 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>10 to 11 years</Table.Cell>
          <Table.Cell>200mg to 300mg</Table.Cell>
          <Table.Cell isNumeric>Max 3 times in 24 hours</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source},description:{story:"The usage of the Table component with a numeric column",...(g=(j=r.parameters)==null?void 0:j.docs)==null?void 0:g.description}}};const M=["Basic","Responsive","NumericColumn"];export{a as Basic,r as NumericColumn,n as Responsive,M as __namedExportsOrder,B as default};
//# sourceMappingURL=Table.stories-40068e33.js.map
