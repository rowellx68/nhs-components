import{j as r}from"./jsx-runtime-ffb262ed.js";import{H as e}from"./Row-8f6f5b67.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-1229b3e0.js";import"./Label-94ff57cd.js";import"./ErrorMessage-7fb437da.js";import"./Hint-fa47fa6a.js";import"./Details-3bda738e.js";import"./DoDontList-c9d5ccab.js";import"./index-32a1c154.js";import"./index-b109e4e1.js";import"./index-149b7452.js";import"./index-49b2d0ee.js";import"./Image-6a997706.js";import"./InsetText-679dda7d.js";import"./SummaryList-700e977e.js";import"./Table-abfb9231.js";import"./Tag-8d0caf20.js";import"./WarningCallout-6787373a.js";import"./ActionLink-92d9554a.js";import"./BackLink-ddeb1684.js";import"./Breadcrumbs-44813de0.js";import"./Card-de649efd.js";import"./ContentsList-47721945.js";import"./Footer-ccd1a6a5.js";import"./Pagination-9a45d4cd.js";import"./SkipLink-1b15983e.js";import"./Button-c27bbde9.js";import"./ErrorSummary-06368e4f.js";import"./Fieldset-3b2b35c4.js";const Z={component:e,title:"Components/Navigation/Header",tags:["autodocs"],parameters:{layout:"fullscreen"}},o={args:{orgName:"Anytown Anyplace",orgSplit:"Anywhere",orgDescriptor:"NHS Foundation Trust",white:!1},render:a=>r.jsxs(e,{...a,children:[r.jsxs(e.Container,{children:[r.jsx(e.Logo,{}),r.jsx(e.Content,{children:r.jsx(e.MenuToggle,{})})]}),r.jsxs(e.Nav,{children:[r.jsx(e.NavItem,{mobileOnly:!0,href:"#",children:"Home"}),r.jsx(e.NavItem,{href:"#",children:"Get involved"}),r.jsx(e.NavItem,{href:"#",children:"About us"}),r.jsx(e.NavItem,{href:"#",children:"About us"})]})]})},t={args:{serviceName:"Service name"},render:a=>r.jsx(e,{...a,children:r.jsxs(e.Container,{children:[r.jsx(e.Logo,{}),r.jsx(e.Content,{children:r.jsx(e.Search,{})})]})})},n={args:{transactional:!0,serviceName:"Service name"},render:a=>r.jsx(e,{...a,children:r.jsxs(e.Container,{children:[r.jsx(e.Logo,{}),r.jsx(e.TransactionalLink,{})]})})};var s,i,d,m,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    orgName: 'Anytown Anyplace',
    orgSplit: 'Anywhere',
    orgDescriptor: 'NHS Foundation Trust',
    white: false
  },
  render: args => <Header {...args}>
      <Header.Container>
        <Header.Logo />
        <Header.Content>
          <Header.MenuToggle />
        </Header.Content>
      </Header.Container>
      <Header.Nav>
        <Header.NavItem mobileOnly href="#">Home</Header.NavItem>
        <Header.NavItem href="#">Get involved</Header.NavItem>
        <Header.NavItem href="#">About us</Header.NavItem>
        <Header.NavItem href="#">About us</Header.NavItem>
      </Header.Nav>
    </Header>
}`,...(d=(i=o.parameters)==null?void 0:i.docs)==null?void 0:d.source},description:{story:"The basic usage of the Header component.",...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.description}}};var p,l,H,g,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    serviceName: 'Service name'
  },
  render: args => <Header {...args}>
      <Header.Container>
        <Header.Logo />
        <Header.Content>
          <Header.Search />
        </Header.Content>
      </Header.Container>
    </Header>
}`,...(H=(l=t.parameters)==null?void 0:l.docs)==null?void 0:H.source},description:{story:"Usage of header with service name styling.",...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var u,v,N,x,j;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    transactional: true,
    serviceName: 'Service name'
  },
  render: args => <Header {...args}>
      <Header.Container>
        <Header.Logo />
        <Header.TransactionalLink />
      </Header.Container>
    </Header>
}`,...(N=(v=n.parameters)==null?void 0:v.docs)==null?void 0:N.source},description:{story:"Usage of header with transactional styling.",...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.description}}};const $=["Basic","Service","Transactional"];export{o as Basic,t as Service,n as Transactional,$ as __namedExportsOrder,Z as default};
//# sourceMappingURL=Header.stories-393c50c9.js.map
