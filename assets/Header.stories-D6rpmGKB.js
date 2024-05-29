import{R as a}from"./index-uCp2LrAq.js";import{H as e}from"./Header-DZ6pp1lm.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Base-CQ_ipzy_.js";import"./polymorphic-factory-C1jPlyAy.js";import"./clsx-B-dksMZM.js";import"./factory-Dl037jXY.js";import"./VisuallyHidden-io1tb15n.js";const M={title:"Components/Navigation/Header",component:e,subcomponents:{"Header.Container":e.Container,"Header.Logo":e.Logo,"Header.Content":e.Content,"Header.Search":e.Search,"Header.Nav":e.Nav,"Header.NavList":e.NavList,"Header.NavItem":e.NavItem,"Header.MobileMenu":e.MobileMenu,"Header.TransactionLink":e.TransactionLink},parameters:{layout:"fullscreen",docs:{description:{component:`Use the appropriate header at the top of every page to show users they are on an NHS service and help them get started in finding what they need.

https://service-manual.nhs.uk/design-system/components/header`}}},argTypes:{variant:{control:{type:"select"},options:["blue-header-blue-nav","blue-header-white-nav","white-header-blue-nav","white-header-white-nav"]}}},n={render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.Content,null,a.createElement(e.Search,{inputProps:{visuallyHiddenText:"Search the NHS website"},buttonProps:{visuallyHiddenText:"Search"}}))),a.createElement(e.Nav,null,a.createElement(e.NavList,null,a.createElement(e.NavItem,{href:"#"},"Health A-Z"),a.createElement(e.NavItem,{href:"#"},"Live Well"),a.createElement(e.NavItem,{href:"#"},"Mental health"),a.createElement(e.NavItem,{href:"#"},"Care and support"),a.createElement(e.NavItem,{href:"#"},"Pregnancy"),a.createElement(e.NavItem,{href:"#"},"NHS services"),a.createElement(e.NavItem,{href:"#",variant:"home-link"},"Home"),a.createElement(e.MobileMenu,null))))},t={args:{serviceName:"Digital service manual"},render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.Content,null,a.createElement(e.Search,{inputProps:{visuallyHiddenText:"Search the NHS website"},buttonProps:{visuallyHiddenText:"Search"}}))),a.createElement(e.Nav,null,a.createElement(e.NavList,null,a.createElement(e.NavItem,{href:"#"},"Health A-Z"),a.createElement(e.NavItem,{href:"#"},"Live Well"),a.createElement(e.NavItem,{href:"#"},"Mental health"),a.createElement(e.NavItem,{href:"#"},"Care and support"),a.createElement(e.NavItem,{href:"#"},"Pregnancy"),a.createElement(e.NavItem,{href:"#"},"NHS services"),a.createElement(e.NavItem,{href:"#",variant:"home-link"},"Home"),a.createElement(e.MobileMenu,null))))},o={args:{transactional:!0},render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.TransactionLink,{href:"#"},"Find your NHS number")))},l={args:{organisationName:"Anytown Anyplace",organisationSplit:"Anywhere",organisationDescriptor:"NHS Foundation Trust",variant:"white-header-blue-nav"},render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.Content,null,a.createElement(e.Search,{inputProps:{visuallyHiddenText:"Search the NHS website"},buttonProps:{visuallyHiddenText:"Search"}}))),a.createElement(e.Nav,null,a.createElement(e.NavList,null,a.createElement(e.NavItem,{href:"#"},"Health A-Z"),a.createElement(e.NavItem,{href:"#"},"Live Well"),a.createElement(e.NavItem,{href:"#"},"Mental health"),a.createElement(e.NavItem,{href:"#"},"Care and support"),a.createElement(e.NavItem,{href:"#"},"Pregnancy"),a.createElement(e.NavItem,{href:"#"},"NHS services"),a.createElement(e.NavItem,{href:"#",variant:"home-link"},"Home"),a.createElement(e.MobileMenu,null))))};var i,m,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var s,H,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(H=t.parameters)==null?void 0:H.docs)==null?void 0:c.source}}};var h,v,N;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(N=(v=o.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var u,p,I;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(I=(p=l.parameters)==null?void 0:p.docs)==null?void 0:I.source}}};const T=["Default","WithServiceName","Transactional","WithOrgansation"];export{n as Default,o as Transactional,l as WithOrgansation,t as WithServiceName,T as __namedExportsOrder,M as default};
