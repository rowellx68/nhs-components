import{R as e}from"./index-B0WjJBI_.js";import{I as s}from"./Input-Ddp_0lhb.js";import{H as r}from"./Header-BEmMII2V.js";import{C as i}from"./Container-CQDIrLBl.js";import{M as l}from"./Main-Ckjmxh_8.js";import{R as u,C as p}from"./Grid-DiqxuPYP.js";import{B as h}from"./Button-DbO0_BP9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FormGroup-ChQq2RMb.js";import"./Hint-0ExilH4f.js";import"./clsx-B-dksMZM.js";import"./Label-CLTtE-g3.js";import"./Base-EFgxhl8G.js";import"./ErrorMessage-ByH0T-HL.js";import"./VisuallyHidden-DJ0EhpIr.js";import"./polymorphic-factory-Cbd1gfW5.js";import"./use-id-with-prefix-B1wYhCnI.js";import"./factory-DuYveBF_.js";const M={title:"Patterns/Ask users for/NHS number",parameters:{layout:"fullscreen",docs:{description:{component:`Use this pattern to ask people for their NHS number and help them find it.

https://service-manual.nhs.uk/design-system/patterns/ask-users-for-their-nhs-number`}}}},t={name:"NHS number",render:m=>e.createElement(e.Fragment,null,e.createElement(r,{...m},e.createElement(r.Container,null,e.createElement(r.Logo,{variant:"logo-only",href:"/","aria-label":"NHS homepage"})),e.createElement(r.Nav,null)),e.createElement(i,null,e.createElement(l,null,e.createElement(u,null,e.createElement(p,{width:"two-thirds"},e.createElement("form",null,e.createElement(s,{label:"What is your NHS number?",labelProps:{variant:"page-heading",size:"l"},width:"10",hint:e.createElement(e.Fragment,null,"Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example,"," ",e.createElement("span",{className:"nhsuk-u-nowrap"},"485 777 3456"),".")}),e.createElement(h,null,"Continue")))))))};var a,n,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'NHS number',
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
