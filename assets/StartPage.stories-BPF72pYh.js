import{R as e}from"./index-uCp2LrAq.js";import{H as t}from"./Header-DZ6pp1lm.js";import{C as u}from"./Container-BB_bURNG.js";import{M as g}from"./Main-DvcfE7KG.js";import{R as d,C as h}from"./Grid-C4lDuMyn.js";import{H as l}from"./Heading-DbjV9X_b.js";import{F as r}from"./Footer-DBVfjChT.js";import{B as n}from"./Breadcrumb-DLr4vP-o.js";import{P as o}from"./Paragraph-CJ_RiSc1.js";import{P as p}from"./Pagination-t1JPbF3H.js";import{B as E}from"./Button-BL8rMJVn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Base-CQ_ipzy_.js";import"./polymorphic-factory-C1jPlyAy.js";import"./clsx-B-dksMZM.js";import"./factory-Dl037jXY.js";import"./VisuallyHidden-io1tb15n.js";const x={title:"Patterns/Page types/Start page",parameters:{layout:"fullscreen"}},a={render:c=>e.createElement(e.Fragment,null,e.createElement(t,{...c},e.createElement(t.Container,null,e.createElement(t.Logo,{variant:"logo-only",href:"/","aria-label":"NHS homepage"})),e.createElement(t.Nav,null)),e.createElement(n,null,e.createElement(n.List,null,e.createElement(n.ListItem,null,"Home"),e.createElement(n.ListItem,null,"Section"),e.createElement(n.ListItem,null,"Subsection")),e.createElement(n.BackLink,null,"Subsection")),e.createElement(u,null,e.createElement(g,null,e.createElement(d,null,e.createElement(h,{width:"two-thirds"},e.createElement(l,null,"Service name goes here"),e.createElement(o,null,"Use this service to do something."),e.createElement(p,null,"You can use this service if you:"),e.createElement("ul",null,e.createElement("li",null,"live in England"),e.createElement("li",null,"need to get a thing"),e.createElement("li",null,"need to change a thing")),e.createElement(l,{as:"h2"},"Before you start"),e.createElement(o,null,"We'll ask you for: ..."),e.createElement(E,{as:"a",href:"#"},"Start now"),e.createElement(o,null,"By using this service you are agreeing to our"," ",e.createElement("a",{href:"#"},"terms of use")," and ",e.createElement("a",{href:"#"},"privacy policy"),"."))))),e.createElement(r,null,e.createElement(r.Content,null,e.createElement(r.List,null),e.createElement(r.Copyright,null,"NHS England"))))};var i,m,s;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(m=a.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const U=["MiniHub"];export{a as MiniHub,U as __namedExportsOrder,x as default};
