import{R as e}from"./index-DCEVbkbO.js";import{P as o}from"./Panel-C3wZNY2o.js";import{H as a}from"./Header-D5Ob_U5t.js";import{C as c}from"./Container-DsMVoRsj.js";import{M as p}from"./Main-C6_P3jkE.js";import{R as d,C as y}from"./Grid-PG6IAAhE.js";import{H as E}from"./Heading-CC_RIS_G.js";import{L as l}from"./Link-CbGFlGFT.js";import{F as r}from"./Footer-ClDk7udP.js";import{S as t}from"./SummaryList-CvGteKLn.js";import{P as g}from"./Paragraph-CLfGdzjD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./factory-B-vprWl1.js";import"./Base-DkqVgamr.js";import"./polymorphic-factory-Bh8XY5CE.js";import"./VisuallyHidden-Ms4sRGqF.js";const V={title:"Patterns/Page types/Confirmation page",parameters:{layout:"fullscreen",docs:{description:{component:`Use a confirmation page to show users they have completed a task.

https://service-manual.nhs.uk/design-system/patterns/confirmation-page`}}}},n={render:u=>e.createElement(e.Fragment,null,e.createElement(a,{...u},e.createElement(a.Container,null,e.createElement(a.Logo,{variant:"logo-only",href:"/","aria-label":"NHS homepage"})),e.createElement(a.Nav,null)),e.createElement(c,null,e.createElement(p,null,e.createElement(d,null,e.createElement(y,{width:"two-thirds"},e.createElement(o,null,e.createElement(o.Title,null,"Booking complete"),e.createElement(o.Body,null,"Confirmation has been sent to you by email")),e.createElement(E,{as:"h2"},"Your appointment details"),e.createElement(t,{variant:"no-border"},e.createElement(t.Row,null,e.createElement(t.Key,null,"Site location"),e.createElement(t.Value,null,"St Georges Pharmacy",e.createElement("br",null),"46 St George's Rd,",e.createElement("br",null),"Elephant and Castle,",e.createElement("br",null),"London",e.createElement("br",null),"SE1 6ET",e.createElement("br",null),e.createElement(l,{href:"#"},"Map and directions (opens in a new tab)"))),e.createElement(t.Row,null,e.createElement(t.Key,null,"Date and time"),e.createElement(t.Value,null,"Thursday 15 June at 9:10am"))),e.createElement(g,null,e.createElement(l,{href:"#"},"Tell us about your experience using this service (opens in a new tab)")))))),e.createElement(r,null,e.createElement(r.Content,null,e.createElement(r.List,null),e.createElement(r.Copyright,null,"NHS England"))))};var m,i,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
            <Column width="two-thirds">
              <Panel>
                <Panel.Title>Booking complete</Panel.Title>
                <Panel.Body>
                  Confirmation has been sent to you by email
                </Panel.Body>
              </Panel>

              <Heading as="h2">Your appointment details</Heading>
              <SummaryList variant="no-border">
                <SummaryList.Row>
                  <SummaryList.Key>Site location</SummaryList.Key>
                  <SummaryList.Value>
                    St Georges Pharmacy
                    <br />
                    46 St George's Rd,
                    <br />
                    Elephant and Castle,
                    <br />
                    London
                    <br />
                    SE1 6ET
                    <br />
                    <Link href="#">
                      Map and directions (opens in a new tab)
                    </Link>
                  </SummaryList.Value>
                </SummaryList.Row>
                <SummaryList.Row>
                  <SummaryList.Key>Date and time</SummaryList.Key>
                  <SummaryList.Value>
                    Thursday 15 June at 9:10am
                  </SummaryList.Value>
                </SummaryList.Row>
              </SummaryList>

              <Paragraph>
                <Link href="#">
                  Tell us about your experience using this service (opens in a
                  new tab)
                </Link>
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
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const B=["ConfirmationPage"];export{n as ConfirmationPage,B as __namedExportsOrder,V as default};
