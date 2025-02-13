import{R as e}from"./index-DCEVbkbO.js";import{f as N}from"./factory-B-vprWl1.js";import{c as m}from"./clsx-B-dksMZM.js";import{C as w}from"./Container-DsMVoRsj.js";import{B as I}from"./Base-DkqVgamr.js";import{R as W,C as b}from"./Grid-PG6IAAhE.js";import{H as S}from"./Heading-CC_RIS_G.js";import{P as F}from"./Paragraph-CLfGdzjD.js";import"./_commonjsHelpers-CqkleIqs.js";import"./polymorphic-factory-Bh8XY5CE.js";const a=N(({className:r,children:o,imageUrl:t,variant:n="content-only",...c},P)=>{const h=(n==null?void 0:n.includes("image-"))&&t;return e.createElement("section",{className:m("nhsuk-hero",{"nhsuk-hero--image":h,"nhsuk-hero--image-description":n==="image-and-content"&&t},r),...c,style:h?{backgroundImage:`url('${t}')`}:{},ref:P},n==="image-only"?e.createElement("div",{className:"nhsuk-hero__overlay"}):o)}),p=({children:r,variant:o="full",className:t,...n})=>{const c=o==="overlay"?{as:"div",className:"nhsuk-hero__overlay"}:{as:e.Fragment};return e.createElement(I,{...c},e.createElement(w,{...n},e.createElement(W,null,e.createElement(b,{width:"two-thirds"},e.createElement("div",{className:m({"nhsuk-hero__wrapper":o!=="overlay","nhsuk-hero-content":o==="overlay"},t)},r,o==="overlay"&&e.createElement("span",{className:"nhsuk-hero__arrow","aria-hidden":"true"}))))))},g=({className:r,...o})=>e.createElement(S,{as:"h1",className:m("nhsuk-u-margin-bottom-3",r),...o}),d=({className:r,...o})=>e.createElement(F,{variant:"lead",className:m("nhsuk-u-margin-bottom-0",r),...o});a.displayName="Hero";p.displayName="Hero.Container";g.displayName="Hero.Heading";d.displayName="Hero.Paragraph";a.Container=p;a.Heading=g;a.Paragraph=d;a.__docgenInfo={description:"",methods:[],displayName:"Hero",props:{variant:{defaultValue:{value:"'content-only'",computed:!1},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"Hero.Container",props:{variant:{required:!1,tsType:{name:"union",raw:"'overlay' | 'full'",elements:[{name:"literal",value:"'overlay'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'full'",computed:!1}}}};g.__docgenInfo={description:"",methods:[],displayName:"Hero.Heading"};d.__docgenInfo={description:"",methods:[],displayName:"Hero.Paragraph"};const z={title:"Components/Content Presentation/Hero",component:a,parameters:{layout:"fullscreen"},argTypes:{variant:{control:{type:"select"},options:["content-only","image-and-content","image-only"]},imageUrl:{control:{type:"text"}}},subcomponents:{"Hero.Container":a.Container,"Hero.Heading":a.Heading,"Hero.Paragraph":a.Paragraph}},s={render:r=>e.createElement(a,{...r},e.createElement(a.Container,null,e.createElement(a.Heading,null,"We're here for you"),e.createElement(a.Paragraph,null,"Helping you take control of your health and wellbeing.")))},l={args:{variant:"image-and-content",imageUrl:"https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"},render:r=>e.createElement(a,{...r},e.createElement(a.Container,{variant:"overlay"},e.createElement(a.Heading,null,"We're here for you"),e.createElement(a.Paragraph,null,"Helping you take control of your health and wellbeing.")))},i={args:{variant:"image-only",imageUrl:"https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg"},render:r=>e.createElement(a,{...r})};var u,H,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(C=(f=l.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var E,k,v;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'image-only',
    imageUrl: 'https://assets.nhs.uk/prod/images/S_0818_homepage_hero_1_F0147446.width-1000.jpg'
  },
  render: args => <Hero {...args} />
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const A=["WithContentOnly","WithImageContent","WithImageOnly"];export{s as WithContentOnly,l as WithImageContent,i as WithImageOnly,A as __namedExportsOrder,z as default};
