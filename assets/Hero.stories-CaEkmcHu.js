import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-DUBK-3MB.js";import{n as r,t as i}from"./clsx-keIqec4B.js";import{n as a,t as o}from"./Base-CjSiYLIs.js";import{n as s,t as c}from"./factory-CE4OYqv3.js";import{n as l,r as u,t as d}from"./Grid-UG1q6OEW.js";import{n as f,t as p}from"./Container-Cc_Hq8gU.js";import{n as m,t as h}from"./Button-G4bMlAkx.js";import{n as g,t as _}from"./Paragraph-CUUyxS3Y.js";var v,y,b,x,S,C=t((()=>{r(),v=e(n(),1),a(),f(),u(),g(),s(),y=c(({className:e,children:t,imageUrl:n,variant:r=`content-only`,...a},o)=>{let s=r?.includes(`image-`)&&n;return v.createElement(`section`,{className:i(`nhsuk-hero`,{"nhsuk-hero--image":s,"nhsuk-hero--image-description":r===`image-and-content`&&n},e),...a,style:s?{backgroundImage:`url('${n}')`}:void 0,ref:o},r===`image-only`?v.createElement(`div`,{className:`nhsuk-hero__overlay`}):t)}),b=({children:e,variant:t=`full`,className:n,...r})=>{let a=t===`overlay`?{as:`div`,className:`nhsuk-hero__overlay`}:{as:v.Fragment};return v.createElement(o,a,v.createElement(p,{className:i({"nhsuk-hero--border":t!==`overlay`}),...r},v.createElement(l,null,v.createElement(d,{width:`two-thirds`},v.createElement(`div`,{className:i({"nhsuk-hero__wrapper":t!==`overlay`,"nhsuk-hero-content":t===`overlay`},n)},e,t===`overlay`&&v.createElement(`span`,{className:`nhsuk-hero__arrow`,"aria-hidden":`true`}))))))},x=({className:e,size:t,...n})=>v.createElement(`h1`,{className:i(`nhsuk-hero__heading`,{[`nhsuk-heading-${t}`]:t},e),...n}),S=({className:e,...t})=>v.createElement(_,{size:`l`,className:i(`nhsuk-u-margin-bottom-0`,e),...t}),y.displayName=`Hero`,b.displayName=`Hero.Container`,x.displayName=`Hero.Heading`,S.displayName=`Hero.Paragraph`,y.Container=b,y.Heading=x,y.Paragraph=S})),w,T,E,D,O,k,A;t((()=>{w=e(n(),1),m(),C(),T={title:`Components/Content Presentation/Hero`,component:y,parameters:{layout:`fullscreen`},argTypes:{variant:{control:{type:`select`},options:[`content-only`,`image-and-content`,`image-only`]},imageUrl:{control:{type:`text`}}},subcomponents:{"Hero.Container":y.Container,"Hero.Heading":y.Heading,"Hero.Paragraph":y.Paragraph}},E={render:e=>w.createElement(y,e,w.createElement(y.Container,null,w.createElement(y.Heading,null,`We're here for you`),w.createElement(y.Paragraph,null,`Helping you take control of your health and wellbeing.`)))},D={name:`with html content`,render:e=>w.createElement(y,e,w.createElement(y.Container,null,w.createElement(y.Heading,{size:`l`,className:`nhsuk-u-margin-top-5`},`This is a header for the product or service`),w.createElement(`p`,{className:`nhsuk-body-l`},`This is some more content which explains the product or service.`),w.createElement(h,{as:`a`,variant:`reverse`,href:`#`},`Sign up`)))},O={name:`with image`,args:{variant:`image-only`,imageUrl:`https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg`},render:e=>w.createElement(y,e)},k={name:`with image, content`,args:{variant:`image-and-content`,imageUrl:`https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg`},render:e=>w.createElement(y,e,w.createElement(y.Container,{variant:`overlay`},w.createElement(y.Heading,null,`We're here for you`),w.createElement(y.Paragraph,null,`Helping you take control of your health and wellbeing.`)))},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => <Hero {...args}>
      <Hero.Container>
        <Hero.Heading>We're here for you</Hero.Heading>
        <Hero.Paragraph>Helping you take control of your health and wellbeing.</Hero.Paragraph>
      </Hero.Container>
    </Hero>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'with html content',
  render: args => <Hero {...args}>
      <Hero.Container>
        <Hero.Heading size="l" className="nhsuk-u-margin-top-5">
          This is a header for the product or service
        </Hero.Heading>
        <p className="nhsuk-body-l">
          This is some more content which explains the product or service.
        </p>
        <Button as="a" variant="reverse" href="#">
          Sign up
        </Button>
      </Hero.Container>
    </Hero>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'with image',
  args: {
    variant: 'image-only',
    imageUrl: 'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg'
  },
  render: args => <Hero {...args} />
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'with image, content',
  args: {
    variant: 'image-and-content',
    imageUrl: 'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg'
  },
  render: args => <Hero {...args}>
      <Hero.Container variant="overlay">
        <Hero.Heading>We're here for you</Hero.Heading>
        <Hero.Paragraph>Helping you take control of your health and wellbeing.</Hero.Paragraph>
      </Hero.Container>
    </Hero>
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithHtmlContent`,`WithImage`,`WithImageContent`]}))();export{E as Default,D as WithHtmlContent,O as WithImage,k as WithImageContent,A as __namedExportsOrder,T as default};