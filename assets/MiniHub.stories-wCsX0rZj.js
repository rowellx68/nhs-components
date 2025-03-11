import{R as e}from"./index-DCEVbkbO.js";import{H as r}from"./Header-CNYloSpy.js";import{C as d}from"./Container-DsMVoRsj.js";import{M as g}from"./Main-C6_P3jkE.js";import{R as h,C as p}from"./Grid-PG6IAAhE.js";import{H as f}from"./Heading-CxtVkFr9.js";import{L as a}from"./List-CEM-Vga9.js";import{F as i}from"./Footer-3nMpO6ej.js";import{B as n}from"./Breadcrumb-rLwjbzJY.js";import{V as E}from"./VisuallyHidden-Bp_pe3qy.js";import{C as t}from"./ContentsList-DQdv1DGH.js";import{P as L}from"./Paragraph-CLfGdzjD.js";import{P as s}from"./Pagination-CUo4xeo8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Base-CSr0pwnM.js";import"./polymorphic-factory-Bh8XY5CE.js";import"./clsx-B-dksMZM.js";import"./factory-B-vprWl1.js";const R={title:"Patterns/Page types/Mini-hub page",parameters:{layout:"fullscreen"}},o={render:u=>e.createElement(e.Fragment,null,e.createElement(r,{...u},e.createElement(r.Container,null,e.createElement(r.Logo,{variant:"logo-only",href:"/","aria-label":"NHS homepage"})),e.createElement(r.Nav,null)),e.createElement(n,null,e.createElement(n.List,null,e.createElement(n.ListItem,null,"Home"),e.createElement(n.ListItem,null,"Health A to Z")),e.createElement(n.BackLink,null,"Health A to Z")),e.createElement(d,null,e.createElement(g,null,e.createElement(h,null,e.createElement(p,{width:"two-thirds"},e.createElement(f,null,e.createElement("span",{role:"text"},"What is AMD?",e.createElement("span",{className:"nhsuk-caption-xl nhsuk-caption--bottom"},e.createElement(E,null,"-"),"Age-related macular degeneration (AMD)"))),e.createElement(t,{"aria-label":"Pages in this guide"},e.createElement(t.Item,{href:"#",active:!0},"What is AMD?"),e.createElement(t.Item,{href:"#"},"Symptoms"),e.createElement(t.Item,{href:"#"},"Getting diagnosed"),e.createElement(t.Item,{href:"#"},"Treatment"),e.createElement(t.Item,{href:"#"},"Living with AMD")),e.createElement(a,{variant:"unordered"},e.createElement(a.Item,null,e.createElement("strong",null,"Age-related macular degeneration (AMD) is a common condition that affects the middle part of your vision.")," ","It usually first affects people in their 50s and 60s."),e.createElement(a.Item,null,e.createElement("strong",null,"It doesn't cause total blindness.")," But it can make everyday activities like reading and recognising faces difficult."),e.createElement(a.Item,null,e.createElement("strong",null,"Without treatment, your vision may get worse.")," ",'This can happen gradually over several years ("dry AMD"), or quickly over a few weeks or months ("wet AMD").'),e.createElement(a.Item,null,e.createElement("strong",null,"The exact cause is unknown.")," It's been linked to smoking, high blood pressure, being overweight and having a family history of AMD.")),e.createElement(L,{variant:"small",className:"nhsuk-u-margin-top-7 nhsuk-u-secondary-text-color"},"Page last reviewed: 27 March 2018 ",e.createElement("br",null),"Next review due: 27 March 2021"),e.createElement(s,null,e.createElement(s.Next,{pageTitle:"Symptoms"})))))),e.createElement(i,null,e.createElement(i.Content,null,e.createElement(i.List,null),e.createElement(i.Copyright,null,"NHS England"))))};var l,m,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
          <Breadcrumb.ListItem>Health A to Z</Breadcrumb.ListItem>
        </Breadcrumb.List>
        <Breadcrumb.BackLink>Health A to Z</Breadcrumb.BackLink>
      </Breadcrumb>

      <Container>
        <Main>
          <Row>
            <Column width="two-thirds">
              <Heading>
                <span role="text">
                  What is AMD?
                  <span className="nhsuk-caption-xl nhsuk-caption--bottom">
                    <VisuallyHidden>-</VisuallyHidden>
                    Age-related macular degeneration (AMD)
                  </span>
                </span>
              </Heading>

              <ContentsList aria-label="Pages in this guide">
                <ContentsList.Item href="#" active>
                  What is AMD?
                </ContentsList.Item>
                <ContentsList.Item href="#">Symptoms</ContentsList.Item>
                <ContentsList.Item href="#">
                  Getting diagnosed
                </ContentsList.Item>
                <ContentsList.Item href="#">Treatment</ContentsList.Item>
                <ContentsList.Item href="#">Living with AMD</ContentsList.Item>
              </ContentsList>

              <List variant="unordered">
                <List.Item>
                  <strong>
                    Age-related macular degeneration (AMD) is a common condition
                    that affects the middle part of your vision.
                  </strong>{' '}
                  It usually first affects people in their 50s and 60s.
                </List.Item>
                <List.Item>
                  <strong>It doesn't cause total blindness.</strong> But it can
                  make everyday activities like reading and recognising faces
                  difficult.
                </List.Item>
                <List.Item>
                  <strong>Without treatment, your vision may get worse.</strong>{' '}
                  This can happen gradually over several years ("dry AMD"), or
                  quickly over a few weeks or months ("wet AMD").
                </List.Item>
                <List.Item>
                  <strong>The exact cause is unknown.</strong> It's been linked
                  to smoking, high blood pressure, being overweight and having a
                  family history of AMD.
                </List.Item>
              </List>

              <Paragraph variant="small" className="nhsuk-u-margin-top-7 nhsuk-u-secondary-text-color">
                Page last reviewed: 27 March 2018 <br />
                Next review due: 27 March 2021
              </Paragraph>

              <Pagination>
                <Pagination.Next pageTitle="Symptoms" />
              </Pagination>
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
}`,...(c=(m=o.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const W=["MiniHub"];export{o as MiniHub,W as __namedExportsOrder,R as default};
