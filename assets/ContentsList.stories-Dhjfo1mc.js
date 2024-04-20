import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{C as t}from"./index-C5AoZCoa.js";import"./index-BBkUAzwr.js";import"./clsx-CH7BE6MN.js";const x={component:t,title:"Components/Navigation/ContentsList",tags:["autodocs"]},n={args:{visuallyHiddenText:"Contents"},render:o=>e.jsxs(t,{...o,children:[e.jsx(t.Item,{href:"#section-1",children:"Section 1"}),e.jsx(t.Item,{href:"#section-2",children:"Section 2"}),e.jsx(t.Item,{href:"#section-3",children:"Section 3"})]})},s={render:o=>e.jsxs(t,{...o,children:[e.jsx(t.Item,{href:"#section-1",current:!0,children:"Section 1"}),e.jsx(t.Item,{href:"#section-2",children:"Section 2"}),e.jsx(t.Item,{href:"#section-3",children:"Section 3"})]})};var r,i,c,a,m;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    visuallyHiddenText: 'Contents'
  },
  render: args => <ContentsList {...args}>
      <ContentsList.Item href="#section-1">Section 1</ContentsList.Item>
      <ContentsList.Item href="#section-2">Section 2</ContentsList.Item>
      <ContentsList.Item href="#section-3">Section 3</ContentsList.Item>
    </ContentsList>
}`,...(c=(i=n.parameters)==null?void 0:i.docs)==null?void 0:c.source},description:{story:"The basic usage of the Contents List component.",...(m=(a=n.parameters)==null?void 0:a.docs)==null?void 0:m.description}}};var d,p,h,C,L;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <ContentsList {...args}>
      <ContentsList.Item href="#section-1" current>
        Section 1
      </ContentsList.Item>
      <ContentsList.Item href="#section-2">Section 2</ContentsList.Item>
      <ContentsList.Item href="#section-3">Section 3</ContentsList.Item>
    </ContentsList>
}`,...(h=(p=s.parameters)==null?void 0:p.docs)==null?void 0:h.source},description:{story:"The Contents List Item component with the current props set to true.",...(L=(C=s.parameters)==null?void 0:C.docs)==null?void 0:L.description}}};const S=["Basic","ListItem"];export{n as Basic,s as ListItem,S as __namedExportsOrder,x as default};
