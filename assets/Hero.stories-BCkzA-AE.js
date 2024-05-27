import{R as e}from"./index-uCp2LrAq.js";import{f as w}from"./factory-Dl037jXY.js";import{c as i}from"./clsx-B-dksMZM.js";import{C as P}from"./Container-BiuL1FC2.js";import{B as I}from"./Base-CQ_ipzy_.js";import{R as W,C as b}from"./Grid-C4lDuMyn.js";import{H as S}from"./Heading-BXWwk6Gr.js";import{P as F}from"./Paragraph-CJ_RiSc1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./polymorphic-factory-C1jPlyAy.js";const a=w(({className:r,children:n,imageUrl:t,variant:o="content-only",...c},N)=>{const h=(o==null?void 0:o.includes("image-"))&&t;return e.createElement("section",{className:i("nhsuk-hero",{"nhsuk-hero--image":h,"nhsuk-hero--image-description":o==="image-and-content"&&t},r),...c,style:h?{backgroundImage:`url('${t}')`}:{},ref:N},o==="image-only"?e.createElement("div",{className:"nhsuk-hero__overlay"}):n)}),p=({children:r,variant:n="full",className:t,...o})=>{const c=n==="overlay"?{as:"div",className:"nhsuk-hero__overlay"}:{as:e.Fragment};return e.createElement(I,{...c},e.createElement(P,{...o},e.createElement(W,null,e.createElement(b,{width:"two-thirds"},e.createElement("div",{className:i({"nhsuk-hero__wrapper":n!=="overlay","nhsuk-hero-content":n==="overlay"},t)},r,n==="overlay"&&e.createElement("span",{className:"nhsuk-hero__arrow","aria-hidden":"true"}))))))},d=({className:r,...n})=>e.createElement(S,{as:"h1",className:i("nhsuk-u-margin-bottom-3",r),...n}),g=({className:r,...n})=>e.createElement(F,{variant:"lead",className:i("nhsuk-u-margin-bottom-0",r),...n});a.displayName="Hero";p.displayName="Hero.Container";d.displayName="Hero.Heading";g.displayName="Hero.Paragraph";a.Container=p;a.Heading=d;a.Paragraph=g;a.__docgenInfo={description:"",methods:[],displayName:"Hero",props:{variant:{defaultValue:{value:"'content-only'",computed:!1},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"Hero.Container",props:{variant:{required:!1,tsType:{name:"union",raw:"'overlay' | 'full'",elements:[{name:"literal",value:"'overlay'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'full'",computed:!1}}}};d.__docgenInfo={description:"",methods:[],displayName:"Hero.Heading"};g.__docgenInfo={description:"",methods:[],displayName:"Hero.Paragraph"};const z={title:"Components/Content Presentation/Hero",component:a,parameters:{layout:"fullscreen"}},s={render:r=>e.createElement(a,{...r},e.createElement(a.Container,null,e.createElement(a.Heading,null,"We're here for you"),e.createElement(a.Paragraph,null,"Helping you take control of your health and wellbeing.")))},l={args:{variant:"image-and-content",imageUrl:"https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"},render:r=>e.createElement(a,{...r},e.createElement(a.Container,{variant:"overlay"},e.createElement(a.Heading,null,"We're here for you"),e.createElement(a.Paragraph,null,"Helping you take control of your health and wellbeing.")))},m={args:{variant:"image-only",imageUrl:"https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"},render:r=>e.createElement(a,{...r})};var u,H,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Hero {...args}>
      <Hero.Container>
        <Hero.Heading>We're here for you</Hero.Heading>
        <Hero.Paragraph>
          Helping you take control of your health and wellbeing.
        </Hero.Paragraph>
      </Hero.Container>
    </Hero>
}`,...(y=(H=s.parameters)==null?void 0:H.docs)==null?void 0:y.source}}};var _,f,C;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'image-and-content',
    imageUrl: 'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg'
  },
  render: args => <Hero {...args}>
      <Hero.Container variant="overlay">
        <Hero.Heading>We're here for you</Hero.Heading>
        <Hero.Paragraph>
          Helping you take control of your health and wellbeing.
        </Hero.Paragraph>
      </Hero.Container>
    </Hero>
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var E,k,v;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'image-only',
    imageUrl: 'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg'
  },
  render: args => <Hero {...args} />
}`,...(v=(k=m.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const A=["WithContentOnly","WithImageContent","WithImageOnly"];export{s as WithContentOnly,l as WithImageContent,m as WithImageOnly,A as __namedExportsOrder,z as default};
