import{j as r}from"./jsx-runtime-DRTy3Uxn.js";import{H as e}from"./index-DObgesoT.js";import"./index-BBkUAzwr.js";import"./clsx-CH7BE6MN.js";import"./index-BNAbGPPW.js";import"./index-BJZX35FI.js";import"./index-DCz-pOyH.js";import"./index-BWzVQ7MN.js";import"./Container-C71ETtQt.js";const O={component:e,title:"Components/Navigation/Header",tags:["autodocs"],parameters:{layout:"fullscreen"}},n={args:{orgName:"Anytown Anyplace",orgSplit:"Anywhere",orgDescriptor:"NHS Foundation Trust",white:!1},render:a=>r.jsxs(e,{...a,children:[r.jsxs(e.Container,{children:[r.jsx(e.Logo,{}),r.jsx(e.Content,{children:r.jsx(e.Search,{})})]}),r.jsxs(e.Nav,{children:[r.jsx(e.NavItem,{href:"#",children:"Your hospital visit"}),r.jsx(e.NavItem,{href:"#",children:"Wards and departments"}),r.jsx(e.NavItem,{href:"#",children:"Conditions and treatments"}),r.jsx(e.NavItem,{href:"#",children:"Our people"}),r.jsx(e.NavItem,{href:"#",children:"Our research"})]})]})},s={args:{serviceName:"Service name"},render:a=>r.jsx(e,{...a,children:r.jsxs(e.Container,{children:[r.jsx(e.Logo,{}),r.jsx(e.Content,{children:r.jsx(e.Search,{})})]})})},t={args:{transactional:!0,serviceName:"Service name"},render:a=>r.jsx(e,{...a,children:r.jsxs(e.Container,{children:[r.jsx(e.Logo,{}),r.jsx(e.TransactionalLink,{})]})})};var o,i,d,c,m;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
          <Header.Search />
        </Header.Content>
      </Header.Container>
      <Header.Nav>
        <Header.NavItem href="#">Your hospital visit</Header.NavItem>
        <Header.NavItem href="#">Wards and departments</Header.NavItem>
        <Header.NavItem href="#">Conditions and treatments</Header.NavItem>
        <Header.NavItem href="#">Our people</Header.NavItem>
        <Header.NavItem href="#">Our research</Header.NavItem>
      </Header.Nav>
    </Header>
}`,...(d=(i=n.parameters)==null?void 0:i.docs)==null?void 0:d.source},description:{story:"The basic usage of the Header component.",...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};var p,h,l,H,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(h=s.parameters)==null?void 0:h.docs)==null?void 0:l.source},description:{story:"Usage of header with service name styling.",...(g=(H=s.parameters)==null?void 0:H.docs)==null?void 0:g.description}}};var v,u,N,x,j;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(N=(u=t.parameters)==null?void 0:u.docs)==null?void 0:N.source},description:{story:"Usage of header with transactional styling.",...(j=(x=t.parameters)==null?void 0:x.docs)==null?void 0:j.description}}};const k=["Basic","Service","Transactional"];export{n as Basic,s as Service,t as Transactional,k as __namedExportsOrder,O as default};
