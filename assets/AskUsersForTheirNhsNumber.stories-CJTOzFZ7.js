import{R as e}from"./index-B-o1Wr-g.js";import{I as m}from"./Input-DJ5nfYDc.js";import{H as r}from"./Header-Cue94pGZ.js";import{C as i}from"./Container-c3IPUby6.js";import{M as l}from"./Main-3ZbZgkHM.js";import{R as u,C as p}from"./Grid-5lmrEX4S.js";import{B as h}from"./Button-TirBU1w6.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./FormGroup-D_26nBz9.js";import"./Hint-DDx-Otz9.js";import"./clsx-B-dksMZM.js";import"./Label-bpxqvAJI.js";import"./Base-CnK7ZbQQ.js";import"./ErrorMessage-DFLaGWdk.js";import"./VisuallyHidden-gAc-M_QR.js";import"./polymorphic-factory-BWZvvV2j.js";import"./use-id-with-prefix-ZJulv10g.js";import"./factory-CTMjB8rz.js";const M={title:"Patterns/Tasks/Ask users for their NHS number",parameters:{layout:"fullscreen",docs:{description:{component:`Use this pattern to ask people for their NHS number and help them find it.

https://service-manual.nhs.uk/design-system/patterns/ask-users-for-their-nhs-number`}}}},t={render:s=>e.createElement(e.Fragment,null,e.createElement(r,{...s},e.createElement(r.Container,null,e.createElement(r.Logo,{variant:"logo-only",href:"/","aria-label":"NHS homepage"})),e.createElement(r.Nav,null)),e.createElement(i,null,e.createElement(l,null,e.createElement(u,null,e.createElement(p,{width:"two-thirds"},e.createElement("form",null,e.createElement(m,{label:"What is your NHS number?",labelProps:{variant:"page-heading",size:"l"},width:"10",hint:e.createElement(e.Fragment,null,"Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example,"," ",e.createElement("span",{className:"nhsuk-u-nowrap"},"485 777 3456"),".")}),e.createElement(h,null,"Continue")))))))};var a,n,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
              <form>
                <Input label="What is your NHS number?" labelProps={{
                variant: 'page-heading',
                size: 'l'
              }} width="10" hint={<>
                      Your NHS number is a 10 digit number that you find on any
                      letter the NHS has sent you. For example,{' '}
                      <span className="nhsuk-u-nowrap">485 777 3456</span>.
                    </>} />
                <Button>Continue</Button>
              </form>
            </Column>
          </Row>
        </Main>
      </Container>
    </>
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const A=["AskUsersForTheirNhsNumber"];export{t as AskUsersForTheirNhsNumber,A as __namedExportsOrder,M as default};
