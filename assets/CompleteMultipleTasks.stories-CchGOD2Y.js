import{R as e}from"./index-DCEVbkbO.js";import{H as n}from"./Header-CNYloSpy.js";import{C as c}from"./Container-DsMVoRsj.js";import{M as p}from"./Main-C6_P3jkE.js";import{R as d,C as I}from"./Grid-PG6IAAhE.js";import{H as m}from"./Heading-CxtVkFr9.js";import{F as a}from"./Footer-3nMpO6ej.js";import{T as t}from"./TaskList-CrOXD7sW.js";import{B as k}from"./Button-3ldVbQu-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Base-CSr0pwnM.js";import"./polymorphic-factory-Bh8XY5CE.js";import"./clsx-B-dksMZM.js";import"./factory-B-vprWl1.js";import"./VisuallyHidden-Bp_pe3qy.js";import"./use-id-with-prefix-JqmxMMgI.js";import"./Tag-5bbu7dN8.js";const B={title:"Patterns/Help users to/Complete multiple tasks",parameters:{layout:"fullscreen",docs:{description:{component:`Use this pattern to give users more control over how they complete long, complex services.

https://service-manual.nhs.uk/design-system/patterns/complete-multiple-tasks`}}}},i={render:o=>e.createElement(e.Fragment,null,e.createElement(n,{...o},e.createElement(n.Container,null,e.createElement(n.Logo,{variant:"logo-only",href:"/","aria-label":"NHS homepage"})),e.createElement(n.Nav,null)),e.createElement(c,null,e.createElement(p,null,e.createElement(d,null,e.createElement(I,{width:"two-thirds"},e.createElement(m,{size:"l"},"Service name"),e.createElement(m,{as:"h2",size:"m"},"Your details"),e.createElement(t,null,e.createElement(t.Item,{variant:"with-link"},e.createElement(t.Item.NameAndHint,{as:"a",href:"#"},"Name"),e.createElement(t.Item.Status,{variant:"completed"},"Completed")),e.createElement(t.Item,{variant:"with-link"},e.createElement(t.Item.NameAndHint,{as:"a",href:"#"},"Contact details"),e.createElement(t.Item.Status,{variant:"incomplete"},"Incomplete"))),e.createElement(m,{as:"h2",size:"m"},"Your health"),e.createElement(t,null,e.createElement(t.Item,{variant:"with-link"},e.createElement(t.Item.NameAndHint,{as:"a",href:"#"},"Physical activity"),e.createElement(t.Item.Status,{variant:"completed"},"Completed")),e.createElement(t.Item,{variant:"with-link"},e.createElement(t.Item.NameAndHint,{as:"a",href:"#"},"Smoking history"),e.createElement(t.Item.Status,{variant:"incomplete"},"Incomplete")),e.createElement(t.Item,{variant:"with-link"},e.createElement(t.Item.NameAndHint,{as:"a",href:"#"},"Vaccination history"),e.createElement(t.Item.Status,{variant:"completed"},"Completed")),e.createElement(t.Item,{variant:"with-link"},e.createElement(t.Item.NameAndHint,{as:"a",href:"#"},"Alcohol use"),e.createElement(t.Item.Status,{variant:"incomplete"},"Incomplete")),e.createElement(t.Item,{variant:"with-link"},e.createElement(t.Item.NameAndHint,{as:"a",href:"#"},"Body measurements"),e.createElement(t.Item.Status,{variant:"incomplete"},"Incomplete"))),e.createElement(k,null,"Send"))))),e.createElement(a,null,e.createElement(a.Content,null,e.createElement(a.List,null),e.createElement(a.Copyright,null,"NHS England"))))};var s,r,l;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
              <Heading size="l">Service name</Heading>

              <Heading as="h2" size="m">
                Your details
              </Heading>
              <TaskList>
                <TaskList.Item variant="with-link">
                  <TaskList.Item.NameAndHint as="a" href="#">
                    Name
                  </TaskList.Item.NameAndHint>
                  <TaskList.Item.Status variant="completed">
                    Completed
                  </TaskList.Item.Status>
                </TaskList.Item>
                <TaskList.Item variant="with-link">
                  <TaskList.Item.NameAndHint as="a" href="#">
                    Contact details
                  </TaskList.Item.NameAndHint>
                  <TaskList.Item.Status variant="incomplete">
                    Incomplete
                  </TaskList.Item.Status>
                </TaskList.Item>
              </TaskList>

              <Heading as="h2" size="m">
                Your health
              </Heading>
              <TaskList>
                <TaskList.Item variant="with-link">
                  <TaskList.Item.NameAndHint as="a" href="#">
                    Physical activity
                  </TaskList.Item.NameAndHint>
                  <TaskList.Item.Status variant="completed">
                    Completed
                  </TaskList.Item.Status>
                </TaskList.Item>
                <TaskList.Item variant="with-link">
                  <TaskList.Item.NameAndHint as="a" href="#">
                    Smoking history
                  </TaskList.Item.NameAndHint>
                  <TaskList.Item.Status variant="incomplete">
                    Incomplete
                  </TaskList.Item.Status>
                </TaskList.Item>
                <TaskList.Item variant="with-link">
                  <TaskList.Item.NameAndHint as="a" href="#">
                    Vaccination history
                  </TaskList.Item.NameAndHint>
                  <TaskList.Item.Status variant="completed">
                    Completed
                  </TaskList.Item.Status>
                </TaskList.Item>
                <TaskList.Item variant="with-link">
                  <TaskList.Item.NameAndHint as="a" href="#">
                    Alcohol use
                  </TaskList.Item.NameAndHint>
                  <TaskList.Item.Status variant="incomplete">
                    Incomplete
                  </TaskList.Item.Status>
                </TaskList.Item>
                <TaskList.Item variant="with-link">
                  <TaskList.Item.NameAndHint as="a" href="#">
                    Body measurements
                  </TaskList.Item.NameAndHint>
                  <TaskList.Item.Status variant="incomplete">
                    Incomplete
                  </TaskList.Item.Status>
                </TaskList.Item>
              </TaskList>

              <Button>Send</Button>
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
}`,...(l=(r=i.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const M=["CompleteMultipleTasks"];export{i as CompleteMultipleTasks,M as __namedExportsOrder,B as default};
