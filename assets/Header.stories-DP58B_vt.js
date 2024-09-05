import{R as a,r as m}from"./index-Cs7sjTYM.js";import{H as e}from"./Header-DvYoS66I.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Base-fHV16vWU.js";import"./polymorphic-factory-23vJzvkj.js";import"./clsx-B-dksMZM.js";import"./factory-DehWrhRO.js";import"./VisuallyHidden-DonKESKA.js";const D={title:"Components/Navigation/Header",component:e,subcomponents:{"Header.Container":e.Container,"Header.Logo":e.Logo,"Header.Content":e.Content,"Header.Search":e.Search,"Header.Nav":e.Nav,"Header.NavList":e.NavList,"Header.NavItem":e.NavItem,"Header.MobileMenu":e.MobileMenu,"Header.TransactionLink":e.TransactionLink},parameters:{layout:"fullscreen",docs:{description:{component:`Use the appropriate header at the top of every page to show users they are on an NHS service and help them get started in finding what they need.

https://service-manual.nhs.uk/design-system/components/header`}}},argTypes:{variant:{control:{type:"select"},options:["blue-header-blue-nav","blue-header-white-nav","white-header-blue-nav","white-header-white-nav"]}}},t={render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.Content,null,a.createElement(e.Search,{inputProps:{visuallyHiddenText:"Search the NHS website"},buttonProps:{visuallyHiddenText:"Search"}}))),a.createElement(e.Nav,null,a.createElement(e.NavList,null,a.createElement(e.NavItem,{href:"#"},"Health A-Z"),a.createElement(e.NavItem,{href:"#"},"Live Well"),a.createElement(e.NavItem,{href:"#"},"Mental health"),a.createElement(e.NavItem,{href:"#"},"Care and support"),a.createElement(e.NavItem,{href:"#"},"Pregnancy"),a.createElement(e.NavItem,{href:"#"},"NHS services"),a.createElement(e.NavItem,{href:"#",variant:"home-link"},"Home"),a.createElement(e.MobileMenu,null))))},n={args:{serviceName:"Digital service manual"},render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.Content,null,a.createElement(e.Search,{inputProps:{visuallyHiddenText:"Search the NHS website"},buttonProps:{visuallyHiddenText:"Search"}}))),a.createElement(e.Nav,null,a.createElement(e.NavList,null,a.createElement(e.NavItem,{href:"#"},"Health A-Z"),a.createElement(e.NavItem,{href:"#"},"Live Well"),a.createElement(e.NavItem,{href:"#"},"Mental health"),a.createElement(e.NavItem,{href:"#"},"Care and support"),a.createElement(e.NavItem,{href:"#"},"Pregnancy"),a.createElement(e.NavItem,{href:"#"},"NHS services"),a.createElement(e.NavItem,{href:"#",variant:"home-link"},"Home"),a.createElement(e.MobileMenu,null))))},l={args:{transactional:!0},render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.TransactionLink,{href:"#"},"Find your NHS number")))},o={args:{organisationName:"Anytown Anyplace",organisationSplit:"Anywhere",organisationDescriptor:"NHS Foundation Trust",variant:"white-header-blue-nav"},render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.Content,null,a.createElement(e.Search,{inputProps:{visuallyHiddenText:"Search the NHS website"},buttonProps:{visuallyHiddenText:"Search"}}))),a.createElement(e.Nav,null,a.createElement(e.NavList,null,a.createElement(e.NavItem,{href:"#"},"Health A-Z"),a.createElement(e.NavItem,{href:"#"},"Live Well"),a.createElement(e.NavItem,{href:"#"},"Mental health"),a.createElement(e.NavItem,{href:"#"},"Care and support"),a.createElement(e.NavItem,{href:"#"},"Pregnancy"),a.createElement(e.NavItem,{href:"#"},"NHS services"),a.createElement(e.NavItem,{href:"#",variant:"home-link"},"Home"),a.createElement(e.MobileMenu,null))))},L=r=>{const[b,C]=m.useState(!1);return m.useEffect(()=>{setTimeout(()=>{C(!0)},2e3)},[]),a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.Content,null,a.createElement(e.Search,{inputProps:{visuallyHiddenText:"Search the NHS website"},buttonProps:{visuallyHiddenText:"Search"}}))),a.createElement(e.Nav,null,a.createElement(e.NavList,null,b?a.createElement(a.Fragment,null,a.createElement(e.NavItem,{href:"#"},"Health A-Z"),a.createElement(e.NavItem,{href:"#"},"Live Well"),a.createElement(e.NavItem,{href:"#"},"Mental health"),a.createElement(e.NavItem,{href:"#"},"Care and support"),a.createElement(e.NavItem,{href:"#"},"Pregnancy"),a.createElement(e.NavItem,{href:"#"},"NHS services"),a.createElement(e.NavItem,{href:"#",variant:"home-link"},"Home"),a.createElement(e.MobileMenu,null)):a.createElement(e.NavItem,{href:"#"},"Health A-Z"))))},i={args:{organisationName:"Anytown Anyplace",organisationSplit:"Anywhere",organisationDescriptor:"NHS Foundation Trust"},render:r=>a.createElement(L,{...r})};var s,d,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var h,H,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(H=n.parameters)==null?void 0:H.docs)==null?void 0:v.source}}};var N,u,p;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var I,g,f;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var E,S,y;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    organisationName: 'Anytown Anyplace',
    organisationSplit: 'Anywhere',
    organisationDescriptor: 'NHS Foundation Trust'
  },
  render: args => <SampleNav {...args} />
}`,...(y=(S=i.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const Z=["Default","WithServiceName","Transactional","WithOrgansation","WithDelayedNav"];export{t as Default,l as Transactional,i as WithDelayedNav,o as WithOrgansation,n as WithServiceName,Z as __namedExportsOrder,D as default};
