import{r as l,R as e}from"./index-DCEVbkbO.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as u}from"./factory-B-vprWl1.js";import{H as o}from"./Header-CNYloSpy.js";import{M as k}from"./Main-C6_P3jkE.js";import{H as f}from"./Heading-CxtVkFr9.js";import{C as h}from"./Container-DsMVoRsj.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Base-CSr0pwnM.js";import"./polymorphic-factory-Bh8XY5CE.js";import"./VisuallyHidden-Bp_pe3qy.js";const g=()=>{const n=document.querySelector("h1"),r=document.querySelector(".nhsuk-skip-link");n&&r&&(()=>{r.addEventListener("click",t=>{t.preventDefault(),n.setAttribute("tabIndex","-1"),n.focus()}),n.addEventListener("blur",t=>{t.preventDefault(),n.removeAttribute("tabIndex")})})()},i=u(({children:n,className:r,...s},t)=>(l.useEffect(()=>{setTimeout(()=>{g()},500)}),e.createElement("a",{className:d("nhsuk-skip-link",r),href:"#maincontent",tabIndex:0,...s,ref:t},n)));i.displayName="SkipLink";i.__docgenInfo={description:"",methods:[],displayName:"SkipLink"};const I={title:"Components/Navigation/Skip Link",component:i,parameters:{layout:"fullscreen",docs:{description:{component:`Use a skip link to help keyboard-only users skip to the main content on a page.

https://service-manual.nhs.uk/design-system/components/skip-link`}}}},a={render:n=>e.createElement(e.Fragment,null,e.createElement(i,{...n},"Skip to main content"),e.createElement(o,{serviceName:"Find your NHS number"},e.createElement(o.Container,null,e.createElement(o.Logo,{href:"/","aria-label":"NHS homepage"}))),e.createElement(h,null,e.createElement(k,null,e.createElement(f,null,"This is where the main content is"))))};var m,c,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <>
      <SkipLink {...args}>Skip to main content</SkipLink>
      <Header serviceName="Find your NHS number">
        <Header.Container>
          <Header.Logo href="/" aria-label="NHS homepage" />
        </Header.Container>
      </Header>
      <Container>
        <Main>
          <Heading>This is where the main content is</Heading>
        </Main>
      </Container>
    </>
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const M=["Default"];export{a as Default,M as __namedExportsOrder,I as default};
