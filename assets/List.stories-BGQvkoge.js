import{R as e}from"./index-uCp2LrAq.js";import{L as t}from"./List-DKAKbPCX.js";import{H as E}from"./Heading-DbjV9X_b.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Base-CQ_ipzy_.js";import"./polymorphic-factory-C1jPlyAy.js";import"./clsx-B-dksMZM.js";const B={title:"Styles/Typography/List",component:t,parameters:{docs:{description:{component:`Use lists to make blocks of text easier to read, and to break information into manageable chunks.

https://service-manual.nhs.uk/design-system/styles/typography#lists`}}}},a={render:r=>e.createElement(t,{...r},e.createElement(t.Item,null,e.createElement("a",{href:"#"},"Money, work and benefits")),e.createElement(t.Item,null,e.createElement("a",{href:"#"},"Care after a hospital stay")),e.createElement(t.Item,null,e.createElement("a",{href:"#"},"Support and benefits for carers")))},n={args:{variant:"unordered"},render:r=>e.createElement(e.Fragment,null,e.createElement("p",null,"Symptoms can include:"),e.createElement(t,{...r},e.createElement(t.Item,null,"tiredness and lack of energy"),e.createElement(t.Item,null,"shortness of breath"),e.createElement(t.Item,null,"noticeable heartbeats (heart palpitations)"),e.createElement(t.Item,null,"pale skin")))},s={args:{variant:"ordered"},render:r=>e.createElement(e.Fragment,null,e.createElement(E,{as:"h3"},"How to gargle with salt water"),e.createElement(t,{...r},e.createElement(t.Item,null,"Dissolve half a teaspoon of salt in a glass of warm water."),e.createElement(t.Item,null,"Gargle with the solution then spit it out – don't swallow it."),e.createElement(t.Item,null,"Repeat as often as you like.")))},o={args:{variant:"unordered",border:!0},render:r=>e.createElement(t,{...r},e.createElement(t.Item,null,"Money, work and benefits"),e.createElement(t.Item,null,"Care after a hospital stay"),e.createElement(t.Item,null,"Support and benefits for carers"))};var i,l,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <List {...args}>
      <List.Item>
        <a href="#">Money, work and benefits</a>
      </List.Item>
      <List.Item>
        <a href="#">Care after a hospital stay</a>
      </List.Item>
      <List.Item>
        <a href="#">Support and benefits for carers</a>
      </List.Item>
    </List>
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'unordered'
  },
  render: args => <>
      <p>Symptoms can include:</p>
      <List {...args}>
        <List.Item>tiredness and lack of energy</List.Item>
        <List.Item>shortness of breath</List.Item>
        <List.Item>noticeable heartbeats (heart palpitations)</List.Item>
        <List.Item>pale skin</List.Item>
      </List>
    </>
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,f,I;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'ordered'
  },
  render: args => <>
      <Heading as="h3">How to gargle with salt water</Heading>
      <List {...args}>
        <List.Item>
          Dissolve half a teaspoon of salt in a glass of warm water.
        </List.Item>
        <List.Item>
          Gargle with the solution then spit it out – don't swallow it.
        </List.Item>
        <List.Item>Repeat as often as you like.</List.Item>
      </List>
    </>
}`,...(I=(f=s.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var g,h,L;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'unordered',
    border: true
  },
  render: args => <List {...args}>
      <List.Item>Money, work and benefits</List.Item>
      <List.Item>Care after a hospital stay</List.Item>
      <List.Item>Support and benefits for carers</List.Item>
    </List>
}`,...(L=(h=o.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};const C=["Default","Bulleted","Numbered","WithBorders"];export{n as Bulleted,a as Default,s as Numbered,o as WithBorders,C as __namedExportsOrder,B as default};
