import{R as e}from"./index-uCp2LrAq.js";import{I as l}from"./Input-D5FbzKIn.js";import{H as r}from"./Header-C2OHkozq.js";import{C as i}from"./Container-BiuL1FC2.js";import{M as s}from"./Main-DvcfE7KG.js";import{R as u,C as p}from"./Grid-C4lDuMyn.js";import{B as h}from"./Button-D0r3PsTe.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FormGroup-Mw6IClvX.js";import"./Hint-Cy41Y5xV.js";import"./clsx-B-dksMZM.js";import"./Label-BVxFGFqs.js";import"./Base-CQ_ipzy_.js";import"./ErrorMessage-C5IFgkMq.js";import"./VisuallyHidden-SShDg0Sg.js";import"./polymorphic-factory-C1jPlyAy.js";import"./use-id-with-prefix-ctfEntwL.js";import"./factory-Dl037jXY.js";const M={title:"Patterns/Ask users for their NHS number",parameters:{layout:"fullscreen"}},n={render:m=>e.createElement(e.Fragment,null,e.createElement(r,{...m},e.createElement(r.Container,null,e.createElement(r.Logo,{variant:"logo-only",href:"/","aria-label":"NHS homepage"})),e.createElement(r.Nav,null)),e.createElement(i,null,e.createElement(s,null,e.createElement(u,null,e.createElement(p,{width:"two-thirds"},e.createElement("form",null,e.createElement(l,{label:"What is your NHS number?",labelProps:{variant:"page-heading",size:"l"},width:"10",hint:e.createElement(e.Fragment,null,"Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example,"," ",e.createElement("span",{className:"nhsuk-u-nowrap"},"485 777 3456"),".")}),e.createElement(h,null,"Continue")))))))};var t,a,o;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(o=(a=n.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const A=["AskUsersForTheirNhsNumber"];export{n as AskUsersForTheirNhsNumber,A as __namedExportsOrder,M as default};
