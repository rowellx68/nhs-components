import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-d_1BVJsF.js";import{n as r,r as i,t as a}from"./Grid-3wOR_bDQ.js";import{n as o,t as s}from"./Footer-BnXDlgVh.js";import{n as c,t as l}from"./Header-B5mjsIco.js";import{n as u,t as d}from"./SkipLink-BHMWsvkj.js";import{n as f,t as p}from"./Container-CwofXnKc.js";import{n as m,t as h}from"./Main-B91xbXfz.js";import{n as g,t as _}from"./Button-sjvISuZK.js";import{n as v,t as y}from"./Panel-DttQ3YpE.js";import{n as b,t as x}from"./BackLink-CSKLT4Xg.js";var S,C,w,T;t((()=>{S=e(n(),1),v(),g(),b(),o(),c(),u(),f(),i(),m(),C={title:`Patterns/Pages/Interruption page`,parameters:{layout:`fullscreen`,docs:{description:{component:`Use an interruption page to stop users in a transaction when they need to
read important information before continuing, or to confirm an action that
may have significant consequences.

https://service-manual.nhs.uk/patterns/interruption-page`}}}},w={render:e=>S.createElement(S.Fragment,null,S.createElement(d,null),S.createElement(l,e,S.createElement(l.Container,null,S.createElement(l.ServiceLogo,{variant:`logo-only`,href:`/`,"aria-label":`NHS homepage`})),S.createElement(l.Nav,null)),S.createElement(p,null,S.createElement(x,{href:`#`},`Back`),S.createElement(h,{size:`s`},S.createElement(r,null,S.createElement(a,{width:`two-thirds`},S.createElement(y,{variant:`interruption`},S.createElement(y.Title,{size:`l`},`Jodie Brown had a COVID-19 vaccine less than 3 months ago`),S.createElement(y.Body,null,S.createElement(`p`,null,`They had a COVID-19 vaccine on 25 December 2025.`),S.createElement(`p`,null,`For most people, the minimum recommended gap between COVID-19 vaccine doses is 3 months.`),S.createElement(`div`,{className:`nhsuk-button-group`},S.createElement(_,{as:`a`,variant:`reverse`,href:`#`},`Continue anyway`),S.createElement(`a`,{href:`#`},`Cancel`)))))))),S.createElement(s,null,S.createElement(s.Meta,null,S.createElement(s.Copyright,null,`© NHS England`))))},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <>
      <SkipLink />
      <Header {...args}>
        <Header.Container>
          <Header.ServiceLogo variant="logo-only" href="/" aria-label="NHS homepage" />
        </Header.Container>
        <Header.Nav />
      </Header>

      <Container>
        <BackLink href="#">Back</BackLink>
        <Main size="s">
          <Row>
            <Column width="two-thirds">
              <Panel variant="interruption">
                <Panel.Title size="l">
                  Jodie Brown had a COVID-19 vaccine less than 3 months ago
                </Panel.Title>
                <Panel.Body>
                  <p>They had a COVID-19 vaccine on 25 December 2025.</p>
                  <p>
                    For most people, the minimum recommended gap between COVID-19 vaccine doses is 3
                    months.
                  </p>
                  <div className="nhsuk-button-group">
                    <Button as="a" variant="reverse" href="#">
                      Continue anyway
                    </Button>
                    <a href="#">Cancel</a>
                  </div>
                </Panel.Body>
              </Panel>
            </Column>
          </Row>
        </Main>
      </Container>

      <Footer>
        <Footer.Meta>
          <Footer.Copyright>© NHS England</Footer.Copyright>
        </Footer.Meta>
      </Footer>
    </>
}`,...w.parameters?.docs?.source}}},T=[`InterruptionPage`]}))();export{w as InterruptionPage,T as __namedExportsOrder,C as default};