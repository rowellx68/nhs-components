import{r as p,R as e}from"./index-CgfFrydU.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as k}from"./factory-CyDOap8W.js";import{s as u}from"./common-DWRT4DfN.js";import{H as o}from"./Header-BlXgkAD_.js";import{M as f}from"./Main-CRh746NW.js";import{H as h}from"./Heading-C3nlIeLd.js";import{C as E}from"./Container-CobGYYfl.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Base-CpCQsTc1.js";import"./polymorphic-factory-YJ8dk4Mh.js";import"./VisuallyHidden-s_dKiGqE.js";const g=()=>{const n=document.querySelector(".nhsuk-skip-link");if(!n||!(n instanceof HTMLAnchorElement))return;const r=n.hash.split("#").pop(),t=r?document.getElementById(r):null;t&&n.addEventListener("click",()=>u(t,{onBeforeFocus(){t.classList.add("nhsuk-skip-link-focused-element")},onBlur(){t.classList.remove("nhsuk-skip-link-focused-element")}}))},a=k(({children:n,className:r,...t},l)=>(p.useEffect(()=>{setTimeout(()=>{g()},500)}),e.createElement("a",{className:d("nhsuk-skip-link",r),href:"#maincontent",tabIndex:0,...t,ref:l},n)));a.displayName="SkipLink";a.__docgenInfo={description:"",methods:[],displayName:"SkipLink"};const T={title:"Components/Navigation/Skip Link",component:a,parameters:{layout:"fullscreen",docs:{description:{component:`Use a skip link to help keyboard-only users skip to the main content on a page.

https://service-manual.nhs.uk/design-system/components/skip-link`}}}},i={render:n=>e.createElement(e.Fragment,null,e.createElement(a,{...n},"Skip to main content"),e.createElement(o,{serviceName:"Find your NHS number"},e.createElement(o.Container,null,e.createElement(o.Logo,{href:"/","aria-label":"NHS homepage"}))),e.createElement(E,null,e.createElement(f,null,e.createElement(h,null,"This is where the main content is"))))};var s,m,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const _=["Default"];export{i as Default,_ as __namedExportsOrder,T as default};
