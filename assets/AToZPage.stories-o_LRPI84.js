import{R as e}from"./index-CgfFrydU.js";import{A as r}from"./AToZ--dGGc9aE.js";import{H as a}from"./Header-BlXgkAD_.js";import{C as u}from"./Container-CobGYYfl.js";import{C as t}from"./Card-kKDxnP3P.js";import{M as C}from"./Main-CRh746NW.js";import{R as p,C as A}from"./Grid-DpNuvWtS.js";import{H as f}from"./Heading-C3nlIeLd.js";import{L as n}from"./List-DzMKbZfz.js";import{L as l}from"./Link-DgAeQ9bc.js";import{F as o}from"./Footer-DlcjW6OJ.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./factory-CyDOap8W.js";import"./Base-CpCQsTc1.js";import"./polymorphic-factory-YJ8dk4Mh.js";import"./VisuallyHidden-s_dKiGqE.js";const S={title:"Patterns/Page types/A to Z page",parameters:{layout:"fullscreen",docs:{description:{component:`A to Z is a way of presenting a number of pages alphabetically.

https://service-manual.nhs.uk/design-system/patterns/a-to-z-page`}}}},m={render:c=>e.createElement(e.Fragment,null,e.createElement(a,{...c},e.createElement(a.Container,null,e.createElement(a.Logo,{variant:"logo-only",href:"/","aria-label":"NHS homepage"})),e.createElement(a.Nav,null)),e.createElement(u,null,e.createElement(C,null,e.createElement(p,null,e.createElement(A,{width:"full"},e.createElement(f,null,"Health A to Z"),e.createElement(r,{id:"nhsuk-nav-a-z","aria-label":"A to Z Navigation"},e.createElement(r.Item,{href:"#A"},"A"),e.createElement(r.Item,{href:"#B",noItems:!0},"B"),e.createElement(r.Item,{href:"#C"},"C"),e.createElement(r.Item,{href:"#D"},"D")),e.createElement(t,{variant:"feature"},e.createElement(t.Content,null,e.createElement(t.Heading,{id:"A"},"A"),e.createElement(n,{border:!0},e.createElement(n.Item,null,e.createElement(l,{href:"#"},"AAA")),e.createElement(n.Item,null,e.createElement(l,{href:"#"},"Abdominal aortic aneurysm")),e.createElement(n.Item,null,e.createElement(l,{href:"#"},"Abscess"))))),e.createElement(t,{variant:"feature"},e.createElement(t.Content,null,e.createElement(t.Heading,{id:"B"},"B"),e.createElement(n,{border:!0},e.createElement(n.Item,null,"There are currently no conditions listed")))))))),e.createElement(o,null,e.createElement(o.Content,null,e.createElement(o.List,null),e.createElement(o.Copyright,null,"NHS England"))))};var i,s,d;m.parameters={...m.parameters,docs:{...(i=m.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <>
      <Header {...args}>
        <Header.Container>
          <Header.Logo variant="logo-only" href="/" aria-label="NHS homepage" />
        </Header.Container>
        <Header.Nav />
      </Header>

      <Container>
        <Main>
          <Row>
            <Column width="full">
              <Heading>Health A to Z</Heading>

              <AToZ id="nhsuk-nav-a-z" aria-label="A to Z Navigation">
                <AToZ.Item href="#A">A</AToZ.Item>
                <AToZ.Item href="#B" noItems>
                  B
                </AToZ.Item>
                <AToZ.Item href="#C">C</AToZ.Item>
                <AToZ.Item href="#D">D</AToZ.Item>
              </AToZ>

              <Card variant="feature">
                <Card.Content>
                  <Card.Heading id="A">A</Card.Heading>
                  <List border>
                    <List.Item>
                      <Link href="#">AAA</Link>
                    </List.Item>
                    <List.Item>
                      <Link href="#">Abdominal aortic aneurysm</Link>
                    </List.Item>
                    <List.Item>
                      <Link href="#">Abscess</Link>
                    </List.Item>
                  </List>
                </Card.Content>
              </Card>

              <Card variant="feature">
                <Card.Content>
                  <Card.Heading id="B">B</Card.Heading>
                  <List border>
                    <List.Item>
                      There are currently no conditions listed
                    </List.Item>
                  </List>
                </Card.Content>
              </Card>
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
}`,...(d=(s=m.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};const D=["AToZPage"];export{m as AToZPage,D as __namedExportsOrder,S as default};
