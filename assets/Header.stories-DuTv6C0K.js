import{R as a,r as s}from"./index-CgfFrydU.js";import{H as e}from"./Header-BlXgkAD_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Base-CpCQsTc1.js";import"./polymorphic-factory-YJ8dk4Mh.js";import"./clsx-B-dksMZM.js";import"./factory-CyDOap8W.js";import"./VisuallyHidden-s_dKiGqE.js";const R={title:"Components/Navigation/Header",component:e,subcomponents:{"Header.Container":e.Container,"Header.Logo":e.Logo,"Header.Content":e.Content,"Header.Search":e.Search,"Header.Nav":e.Nav,"Header.NavList":e.NavList,"Header.NavItem":e.NavItem,"Header.MobileMenu":e.MobileMenu,"Header.TransactionLink":e.TransactionLink},parameters:{layout:"fullscreen",docs:{description:{component:`Use the appropriate header at the top of every page to show users they are on an NHS service and help them get started in finding what they need.

https://service-manual.nhs.uk/design-system/components/header`}}},argTypes:{variant:{control:{type:"select"},options:["blue-header-blue-nav","blue-header-white-nav","white-header-blue-nav","white-header-white-nav"]}}},t={render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.Content,null,a.createElement(e.Search,{inputProps:{visuallyHiddenText:"Search the NHS website"},buttonProps:{visuallyHiddenText:"Search"}}))),a.createElement(e.Nav,null,a.createElement(e.NavList,null,a.createElement(e.NavItem,{href:"#"},"Health A-Z"),a.createElement(e.NavItem,{href:"#"},"Live Well"),a.createElement(e.NavItem,{href:"#"},"Mental health"),a.createElement(e.NavItem,{href:"#"},"Care and support"),a.createElement(e.NavItem,{href:"#"},"Pregnancy"),a.createElement(e.NavItem,{href:"#"},"NHS services"),a.createElement(e.NavItem,{href:"#",variant:"home-link"},"Home"),a.createElement(e.MobileMenu,null))))},n={args:{serviceName:"Digital service manual"},render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.Content,null,a.createElement(e.Search,{inputProps:{visuallyHiddenText:"Search the NHS website"},buttonProps:{visuallyHiddenText:"Search"}}))),a.createElement(e.Nav,null,a.createElement(e.NavList,null,a.createElement(e.NavItem,{href:"#"},"Health A-Z"),a.createElement(e.NavItem,{href:"#"},"Live Well"),a.createElement(e.NavItem,{href:"#"},"Mental health"),a.createElement(e.NavItem,{href:"#"},"Care and support"),a.createElement(e.NavItem,{href:"#"},"Pregnancy"),a.createElement(e.NavItem,{href:"#"},"NHS services"),a.createElement(e.NavItem,{href:"#",variant:"home-link"},"Home"),a.createElement(e.MobileMenu,null))))},l={args:{serviceName:"Digital service manual"},render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.Content,null,a.createElement(e.Search,{inputProps:{visuallyHiddenText:"Search the NHS website"},buttonProps:{visuallyHiddenText:"Search"}}))),a.createElement(e.Nav,null,a.createElement(e.NavList,null,a.createElement(e.NavItem,{href:"#"},"Health A-Z"),a.createElement(e.NavItem,{href:"#"},"Live Well"),a.createElement(e.NavItem,{href:"#"},"Mental health"),a.createElement(e.MobileMenu,null))))},o={args:{transactional:!0},render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.TransactionLink,{href:"#"},"Find your NHS number")))},i={args:{organisationName:"Anytown Anyplace",organisationSplit:"Anywhere",organisationDescriptor:"NHS Foundation Trust",variant:"white-header-blue-nav"},render:r=>a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.Content,null,a.createElement(e.Search,{inputProps:{visuallyHiddenText:"Search the NHS website"},buttonProps:{visuallyHiddenText:"Search"}}))),a.createElement(e.Nav,null,a.createElement(e.NavList,null,a.createElement(e.NavItem,{href:"#"},"Health A-Z"),a.createElement(e.NavItem,{href:"#"},"Live Well"),a.createElement(e.NavItem,{href:"#"},"Mental health"),a.createElement(e.NavItem,{href:"#"},"Care and support"),a.createElement(e.NavItem,{href:"#"},"Pregnancy"),a.createElement(e.NavItem,{href:"#"},"NHS services"),a.createElement(e.NavItem,{href:"#",variant:"home-link"},"Home"),a.createElement(e.MobileMenu,null))))},P=r=>{const[M,w]=s.useState(!1);return s.useEffect(()=>{setTimeout(()=>{w(!0)},2e3)},[]),a.createElement(e,{...r},a.createElement(e.Container,null,a.createElement(e.Logo,{href:"#","aria-label":"NHS homepage"}),a.createElement(e.Content,null,a.createElement(e.Search,{inputProps:{visuallyHiddenText:"Search the NHS website"},buttonProps:{visuallyHiddenText:"Search"}}))),a.createElement(e.Nav,null,a.createElement(e.NavList,null,M?a.createElement(a.Fragment,null,a.createElement(e.NavItem,{href:"#"},"Health A-Z"),a.createElement(e.NavItem,{href:"#"},"Live Well"),a.createElement(e.NavItem,{href:"#"},"Mental health"),a.createElement(e.NavItem,{href:"#"},"Care and support"),a.createElement(e.NavItem,{href:"#"},"Pregnancy"),a.createElement(e.NavItem,{href:"#"},"NHS services"),a.createElement(e.NavItem,{href:"#",variant:"home-link"},"Home"),a.createElement(e.MobileMenu,null)):a.createElement(e.NavItem,{href:"#"},"Health A-Z"))))},m={args:{organisationName:"Anytown Anyplace",organisationSplit:"Anywhere",organisationDescriptor:"NHS Foundation Trust"},render:r=>a.createElement(P,{...r})};var d,c,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(c=t.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var H,v,N;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(N=(v=n.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var u,p,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
          <Header.MobileMenu />
        </Header.NavList>
      </Header.Nav>
    </Header>
}`,...(g=(p=l.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var I,E,f;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(f=(E=o.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var S,b,y;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var L,C,T;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    organisationName: 'Anytown Anyplace',
    organisationSplit: 'Anywhere',
    organisationDescriptor: 'NHS Foundation Trust'
  },
  render: args => <SampleNav {...args} />
}`,...(T=(C=m.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};const V=["Default","WithServiceName","WithServiceNameAndLessThanFourLinks","Transactional","WithOrgansation","WithDelayedNav"];export{t as Default,o as Transactional,m as WithDelayedNav,i as WithOrgansation,n as WithServiceName,l as WithServiceNameAndLessThanFourLinks,V as __namedExportsOrder,R as default};
