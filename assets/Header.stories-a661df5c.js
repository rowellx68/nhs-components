import{j as r}from"./jsx-runtime-94f6e698.js";import{H as e}from"./Header-6b11b51a.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./clsx-1229b3e0.js";import"./index-2c0bb8f3.js";import"./index-0ae08daa.js";import"./index-cef6b81d.js";import"./index-2b495717.js";import"./Container-411280f9.js";const O={component:e,title:"Components/Navigation/Header",tags:["autodocs"],parameters:{layout:"fullscreen"}},n={args:{orgName:"Anytown Anyplace",orgSplit:"Anywhere",orgDescriptor:"NHS Foundation Trust",white:!1},render:a=>r.jsxs(e,{...a,children:[r.jsxs(e.Container,{children:[r.jsx(e.Logo,{}),r.jsx(e.Content,{children:r.jsx(e.MenuToggle,{})})]}),r.jsxs(e.Nav,{children:[r.jsx(e.NavItem,{mobileOnly:!0,href:"#",children:"Home"}),r.jsx(e.NavItem,{href:"#",children:"Get involved"}),r.jsx(e.NavItem,{href:"#",children:"About us"}),r.jsx(e.NavItem,{href:"#",children:"About us"})]})]})},o={args:{serviceName:"Service name"},render:a=>r.jsx(e,{...a,children:r.jsxs(e.Container,{children:[r.jsx(e.Logo,{}),r.jsx(e.Content,{children:r.jsx(e.Search,{})})]})})},s={args:{transactional:!0,serviceName:"Service name"},render:a=>r.jsx(e,{...a,children:r.jsxs(e.Container,{children:[r.jsx(e.Logo,{}),r.jsx(e.TransactionalLink,{})]})})};var t,i,d,c,m;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
        <Header.NavItem mobileOnly href="#">
          Home
        </Header.NavItem>
        <Header.NavItem href="#">Get involved</Header.NavItem>
        <Header.NavItem href="#">About us</Header.NavItem>
        <Header.NavItem href="#">About us</Header.NavItem>
      </Header.Nav>
    </Header>
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source},description:{story:"The basic usage of the Header component.",...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};var l,p,H,g,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(H=(p=o.parameters)==null?void 0:p.docs)==null?void 0:H.source},description:{story:"Usage of header with service name styling.",...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var u,v,N,x,j;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(N=(v=s.parameters)==null?void 0:v.docs)==null?void 0:N.source},description:{story:"Usage of header with transactional styling.",...(j=(x=s.parameters)==null?void 0:x.docs)==null?void 0:j.description}}};const k=["Basic","Service","Transactional"];export{n as Basic,o as Service,s as Transactional,k as __namedExportsOrder,O as default};
//# sourceMappingURL=Header.stories-a661df5c.js.map
