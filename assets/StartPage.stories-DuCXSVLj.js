import{R as e}from"./index-DCEVbkbO.js";import{H as r}from"./Header-CNYloSpy.js";import{C as u}from"./Container-DsMVoRsj.js";import{M as g}from"./Main-C6_P3jkE.js";import{R as d,C as h}from"./Grid-PG6IAAhE.js";import{H as l}from"./Heading-CxtVkFr9.js";import{F as a}from"./Footer-3nMpO6ej.js";import{B as t}from"./Breadcrumb-rLwjbzJY.js";import{P as o}from"./Paragraph-CLfGdzjD.js";import{P as p}from"./Pagination-CUo4xeo8.js";import{B as E}from"./Button-3ldVbQu-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Base-CSr0pwnM.js";import"./polymorphic-factory-Bh8XY5CE.js";import"./clsx-B-dksMZM.js";import"./factory-B-vprWl1.js";import"./VisuallyHidden-Bp_pe3qy.js";const x={title:"Patterns/Page types/Start page",parameters:{layout:"fullscreen"}},n={render:c=>e.createElement(e.Fragment,null,e.createElement(r,{...c},e.createElement(r.Container,null,e.createElement(r.Logo,{variant:"logo-only",href:"/","aria-label":"NHS homepage"})),e.createElement(r.Nav,null)),e.createElement(t,null,e.createElement(t.List,null,e.createElement(t.ListItem,null,"Home"),e.createElement(t.ListItem,null,"Section"),e.createElement(t.ListItem,null,"Subsection")),e.createElement(t.BackLink,null,"Subsection")),e.createElement(u,null,e.createElement(g,null,e.createElement(d,null,e.createElement(h,{width:"two-thirds"},e.createElement(l,null,"Service name goes here"),e.createElement(o,null,"Use this service to do something."),e.createElement(p,null,"You can use this service if you:"),e.createElement("ul",null,e.createElement("li",null,"live in England"),e.createElement("li",null,"need to get a thing"),e.createElement("li",null,"need to change a thing")),e.createElement(l,{as:"h2"},"Before you start"),e.createElement(o,null,"We'll ask you for: ..."),e.createElement(E,{as:"a",href:"#"},"Start now"),e.createElement(o,null,"By using this service you are agreeing to our"," ",e.createElement("a",{href:"#"},"terms of use")," and ",e.createElement("a",{href:"#"},"privacy policy"),"."))))),e.createElement(a,null,e.createElement(a.Content,null,e.createElement(a.List,null),e.createElement(a.Copyright,null,"NHS England"))))};var i,m,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <>
      <Header {...args}>
        <Header.Container>
          <Header.Logo variant="logo-only" href="/" aria-label="NHS homepage" />
        </Header.Container>
        <Header.Nav />
      </Header>

      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.ListItem>Home</Breadcrumb.ListItem>
          <Breadcrumb.ListItem>Section</Breadcrumb.ListItem>
          <Breadcrumb.ListItem>Subsection</Breadcrumb.ListItem>
        </Breadcrumb.List>
        <Breadcrumb.BackLink>Subsection</Breadcrumb.BackLink>
      </Breadcrumb>

      <Container>
        <Main>
          <Row>
            <Column width="two-thirds">
              <Heading>Service name goes here</Heading>

              <Paragraph>Use this service to do something.</Paragraph>
              <Pagination>You can use this service if you:</Pagination>

              <ul>
                <li>live in England</li>
                <li>need to get a thing</li>
                <li>need to change a thing</li>
              </ul>

              <Heading as="h2">Before you start</Heading>

              <Paragraph>We'll ask you for: ...</Paragraph>

              <Button as="a" href="#">
                Start now
              </Button>

              <Paragraph>
                By using this service you are agreeing to our{' '}
                <a href="#">terms of use</a> and <a href="#">privacy policy</a>.
              </Paragraph>
            </Column>
          </Row>
        </Main>
      </Container>

      <Footer>
        <Footer.Content>
          <Footer.List />
          <Footer.Copyright>NHS England</Footer.Copyright>
        </Footer.Content>
      </Footer>
    </>
}`,...(s=(m=n.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const U=["MiniHub"];export{n as MiniHub,U as __namedExportsOrder,x as default};
