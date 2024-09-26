import{R as e}from"./index-Cs7sjTYM.js";import{I as m}from"./Input-BJX2G2ww.js";import{H as r}from"./Header-Cf-fYG7g.js";import{C as i}from"./Container-CLMOXAcg.js";import{M as l}from"./Main-SfhCX5gI.js";import{R as u,C as p}from"./Grid-ByltY6Yt.js";import{B as h}from"./Button-DyX-YaNQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FormGroup-B9DHxyUj.js";import"./Hint-BOkj5kLS.js";import"./clsx-B-dksMZM.js";import"./Label-DmVPi9oB.js";import"./Base-fHV16vWU.js";import"./ErrorMessage-DpQgiRoT.js";import"./VisuallyHidden-DonKESKA.js";import"./polymorphic-factory-23vJzvkj.js";import"./use-id-with-prefix-gaKPBBex.js";import"./factory-DehWrhRO.js";const M={title:"Patterns/Tasks/Ask users for their NHS number",parameters:{layout:"fullscreen",docs:{description:{component:`Use this pattern to ask people for their NHS number and help them find it.

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
