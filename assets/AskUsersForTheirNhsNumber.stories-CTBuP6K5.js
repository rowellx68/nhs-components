import{R as e}from"./index-uCp2LrAq.js";import{I as m}from"./Input-BW9TQTHM.js";import{H as n}from"./Header-DZ6pp1lm.js";import{C as i}from"./Container-DcHmcJEn.js";import{M as l}from"./Main-DvcfE7KG.js";import{R as u,C as p}from"./Grid-C4lDuMyn.js";import{B as h}from"./Button-BL8rMJVn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FormGroup-Cq6fdTws.js";import"./Hint-Cy41Y5xV.js";import"./clsx-B-dksMZM.js";import"./Label-BVxFGFqs.js";import"./Base-CQ_ipzy_.js";import"./ErrorMessage-P3iC7fh_.js";import"./VisuallyHidden-io1tb15n.js";import"./polymorphic-factory-C1jPlyAy.js";import"./use-id-with-prefix-ctfEntwL.js";import"./factory-Dl037jXY.js";const M={title:"Patterns/Tasks/Ask users for their NHS number",parameters:{layout:"fullscreen",docs:{description:{component:`Use this pattern to ask people for their NHS number and help them find it.

https://service-manual.nhs.uk/design-system/patterns/ask-users-for-their-nhs-number`}}}},r={render:s=>e.createElement(e.Fragment,null,e.createElement(n,{...s},e.createElement(n.Container,null,e.createElement(n.Logo,{variant:"logo-only",href:"/","aria-label":"NHS homepage"})),e.createElement(n.Nav,null)),e.createElement(i,null,e.createElement(l,null,e.createElement(u,null,e.createElement(p,{width:"two-thirds"},e.createElement("form",null,e.createElement(m,{label:"What is your NHS number?",labelProps:{variant:"page-heading",size:"l"},width:"10",hint:e.createElement(e.Fragment,null,"Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example,"," ",e.createElement("span",{className:"nhsuk-u-nowrap"},"485 777 3456"),".")}),e.createElement(h,null,"Continue")))))))};var t,a,o;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=r.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const A=["AskUsersForTheirNhsNumber"];export{r as AskUsersForTheirNhsNumber,A as __namedExportsOrder,M as default};
