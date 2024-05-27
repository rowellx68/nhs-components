import{R as a}from"./index-uCp2LrAq.js";import{H as e}from"./Header-C2OHkozq.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Base-CQ_ipzy_.js";import"./polymorphic-factory-C1jPlyAy.js";import"./clsx-B-dksMZM.js";import"./factory-Dl037jXY.js";import"./VisuallyHidden-SShDg0Sg.js";const T={title:"Components/Navigation/Header",component:e,parameters:{layout:"fullscreen",docs:{description:{component:`Use the appropriate header at the top of every page to show users they are on an NHS service and help them get started in finding what they need.

https://service-manual.nhs.uk/design-system/components/header`}}},argTypes:{variant:{control:{type:"select"},options:["blue-header-blue-nav","blue-header-white-nav","white-header-blue-nav","white-header-white-nav"]}}},t={render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.Content,null,a.createElement(e.Search,{inputProps:{visuallyHiddenText:"Search the NHS website"},buttonProps:{visuallyHiddenText:"Search"}}))),a.createElement(e.Nav,null,a.createElement(e.NavList,null,a.createElement(e.NavItem,{href:"#"},"Health A-Z"),a.createElement(e.NavItem,{href:"#"},"Live Well"),a.createElement(e.NavItem,{href:"#"},"Mental health"),a.createElement(e.NavItem,{href:"#"},"Care and support"),a.createElement(e.NavItem,{href:"#"},"Pregnancy"),a.createElement(e.NavItem,{href:"#"},"NHS services"),a.createElement(e.NavItem,{href:"#",variant:"home-link"},"Home"),a.createElement(e.MobileMenu,null))))},n={args:{serviceName:"Digital service manual"},render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.Content,null,a.createElement(e.Search,{inputProps:{visuallyHiddenText:"Search the NHS website"},buttonProps:{visuallyHiddenText:"Search"}}))),a.createElement(e.Nav,null,a.createElement(e.NavList,null,a.createElement(e.NavItem,{href:"#"},"Health A-Z"),a.createElement(e.NavItem,{href:"#"},"Live Well"),a.createElement(e.NavItem,{href:"#"},"Mental health"),a.createElement(e.NavItem,{href:"#"},"Care and support"),a.createElement(e.NavItem,{href:"#"},"Pregnancy"),a.createElement(e.NavItem,{href:"#"},"NHS services"),a.createElement(e.NavItem,{href:"#",variant:"home-link"},"Home"),a.createElement(e.MobileMenu,null))))},l={args:{transactional:!0},render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.TransactionLink,{href:"#"},"Find your NHS number")))},o={args:{organisationName:"Anytown Anyplace",organisationSplit:"Anywhere",organisationDescriptor:"NHS Foundation Trust",variant:"white-header-blue-nav"},render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.Content,null,a.createElement(e.Search,{inputProps:{visuallyHiddenText:"Search the NHS website"},buttonProps:{visuallyHiddenText:"Search"}}))),a.createElement(e.Nav,null,a.createElement(e.NavList,null,a.createElement(e.NavItem,{href:"#"},"Health A-Z"),a.createElement(e.NavItem,{href:"#"},"Live Well"),a.createElement(e.NavItem,{href:"#"},"Mental health"),a.createElement(e.NavItem,{href:"#"},"Care and support"),a.createElement(e.NavItem,{href:"#"},"Pregnancy"),a.createElement(e.NavItem,{href:"#"},"NHS services"),a.createElement(e.NavItem,{href:"#",variant:"home-link"},"Home"),a.createElement(e.MobileMenu,null))))};var i,m,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Header {...args}>
      <Header.Container>
        <Header.Logo href="#" aria-label="NHS homepage" />
        <Header.Content>
          <Header.Search inputProps={{
          visuallyHiddenText: 'Search the NHS website'
        }} buttonProps={{
          visuallyHiddenText: 'Search'
        }} />
        </Header.Content>
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">Health A-Z</Header.NavItem>
          <Header.NavItem href="#">Live Well</Header.NavItem>
          <Header.NavItem href="#">Mental health</Header.NavItem>
          <Header.NavItem href="#">Care and support</Header.NavItem>
          <Header.NavItem href="#">Pregnancy</Header.NavItem>
          <Header.NavItem href="#">NHS services</Header.NavItem>
          <Header.NavItem href="#" variant="home-link">
            Home
          </Header.NavItem>
          <Header.MobileMenu />
        </Header.NavList>
      </Header.Nav>
    </Header>
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var s,H,h;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    serviceName: 'Digital service manual'
  },
  render: args => <Header {...args}>
      <Header.Container>
        <Header.Logo href="#" aria-label="NHS homepage" />
        <Header.Content>
          <Header.Search inputProps={{
          visuallyHiddenText: 'Search the NHS website'
        }} buttonProps={{
          visuallyHiddenText: 'Search'
        }} />
        </Header.Content>
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">Health A-Z</Header.NavItem>
          <Header.NavItem href="#">Live Well</Header.NavItem>
          <Header.NavItem href="#">Mental health</Header.NavItem>
          <Header.NavItem href="#">Care and support</Header.NavItem>
          <Header.NavItem href="#">Pregnancy</Header.NavItem>
          <Header.NavItem href="#">NHS services</Header.NavItem>
          <Header.NavItem href="#" variant="home-link">
            Home
          </Header.NavItem>
          <Header.MobileMenu />
        </Header.NavList>
      </Header.Nav>
    </Header>
}`,...(h=(H=n.parameters)==null?void 0:H.docs)==null?void 0:h.source}}};var c,v,N;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    transactional: true
  },
  render: args => <Header {...args}>
      <Header.Container>
        <Header.Logo href="#" aria-label="NHS homepage" />
        <Header.TransactionLink href="#">
          Find your NHS number
        </Header.TransactionLink>
      </Header.Container>
    </Header>
}`,...(N=(v=l.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var u,p,I;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    organisationName: 'Anytown Anyplace',
    organisationSplit: 'Anywhere',
    organisationDescriptor: 'NHS Foundation Trust',
    variant: 'white-header-blue-nav'
  },
  render: args => <Header {...args}>
      <Header.Container>
        <Header.Logo href="#" aria-label="NHS homepage" />
        <Header.Content>
          <Header.Search inputProps={{
          visuallyHiddenText: 'Search the NHS website'
        }} buttonProps={{
          visuallyHiddenText: 'Search'
        }} />
        </Header.Content>
      </Header.Container>
      <Header.Nav>
        <Header.NavList>
          <Header.NavItem href="#">Health A-Z</Header.NavItem>
          <Header.NavItem href="#">Live Well</Header.NavItem>
          <Header.NavItem href="#">Mental health</Header.NavItem>
          <Header.NavItem href="#">Care and support</Header.NavItem>
          <Header.NavItem href="#">Pregnancy</Header.NavItem>
          <Header.NavItem href="#">NHS services</Header.NavItem>
          <Header.NavItem href="#" variant="home-link">
            Home
          </Header.NavItem>
          <Header.MobileMenu />
        </Header.NavList>
      </Header.Nav>
    </Header>
}`,...(I=(p=o.parameters)==null?void 0:p.docs)==null?void 0:I.source}}};const w=["Default","WithServiceName","Transactional","WithOrgansation"];export{t as Default,l as Transactional,o as WithOrgansation,n as WithServiceName,w as __namedExportsOrder,T as default};
