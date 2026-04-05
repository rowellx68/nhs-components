import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-d_1BVJsF.js";import{n as r,r as i,t as a}from"./Grid-3wOR_bDQ.js";import{n as o,t as s}from"./Header-B5mjsIco.js";import{n as c,t as l}from"./Container-CwofXnKc.js";import{n as u,t as d}from"./Main-B91xbXfz.js";import{n as f,t as p}from"./Button-sjvISuZK.js";import{n as m,t as h}from"./Input-D_1p2Bg0.js";var g,_,v,y;t((()=>{g=e(n(),1),f(),m(),o(),c(),i(),u(),_={title:`Patterns/Ask users for/NHS number`,parameters:{layout:`fullscreen`,docs:{description:{component:`Use this pattern to ask people for their NHS number and help them find it.

https://service-manual.nhs.uk/design-system/patterns/ask-users-for-their-nhs-number`}}}},v={name:`NHS number`,render:e=>g.createElement(g.Fragment,null,g.createElement(s,e,g.createElement(s.Container,null,g.createElement(s.ServiceLogo,{variant:`logo-only`,href:`/`,"aria-label":`NHS homepage`})),g.createElement(s.Nav,null)),g.createElement(l,null,g.createElement(d,null,g.createElement(r,null,g.createElement(a,{width:`two-thirds`},g.createElement(`form`,null,g.createElement(h,{label:`What is your NHS number?`,labelProps:{variant:`page-heading`,size:`l`},width:`10`,hint:g.createElement(g.Fragment,null,`Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, `,g.createElement(`span`,{className:`nhsuk-u-nowrap`},`485 777 3456`),`.`)}),g.createElement(p,null,`Continue`)))))))},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'NHS number',
  render: args => <>
      <Header {...args}>
        <Header.Container>
          <Header.ServiceLogo variant="logo-only" href="/" aria-label="NHS homepage" />
        </Header.Container>
        <Header.Nav />
      </Header>
      <Container>
        <Main>
          <Row>
            <Column width="two-thirds">
              <form>
                <Input label="What is your NHS number?" labelProps={{
                variant: 'page-heading',
                size: 'l'
              }} width="10" hint={<>
                      Your NHS number is a 10 digit number that you find on any letter the NHS has
                      sent you. For example, <span className="nhsuk-u-nowrap">485 777 3456</span>.
                    </>} />
                <Button>Continue</Button>
              </form>
            </Column>
          </Row>
        </Main>
      </Container>
    </>
}`,...v.parameters?.docs?.source}}},y=[`AskUsersForTheirNhsNumber`]}))();export{v as AskUsersForTheirNhsNumber,y as __namedExportsOrder,_ as default};