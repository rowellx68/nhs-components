import{R as e}from"./index-CgfFrydU.js";import{L as t}from"./List-DzMKbZfz.js";import{H as E}from"./Heading-C3nlIeLd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Base-CpCQsTc1.js";import"./polymorphic-factory-YJ8dk4Mh.js";import"./clsx-B-dksMZM.js";const B={title:"Styles/Typography/List",component:t,parameters:{docs:{description:{component:`Use lists to make blocks of text easier to read, and to break information into manageable chunks.

https://service-manual.nhs.uk/design-system/styles/typography#lists`}}}},a={render:r=>e.createElement(t,{...r},e.createElement(t.Item,null,e.createElement("a",{href:"#"},"Money, work and benefits")),e.createElement(t.Item,null,e.createElement("a",{href:"#"},"Care after a hospital stay")),e.createElement(t.Item,null,e.createElement("a",{href:"#"},"Support and benefits for carers")))},s={args:{variant:"unordered"},render:r=>e.createElement(e.Fragment,null,e.createElement("p",null,"Symptoms can include:"),e.createElement(t,{...r},e.createElement(t.Item,null,"tiredness and lack of energy"),e.createElement(t.Item,null,"shortness of breath"),e.createElement(t.Item,null,"noticeable heartbeats (heart palpitations)"),e.createElement(t.Item,null,"pale skin")))},n={args:{variant:"ordered"},render:r=>e.createElement(e.Fragment,null,e.createElement(E,{as:"h3"},"How to gargle with salt water"),e.createElement(t,{...r},e.createElement(t.Item,null,"Dissolve half a teaspoon of salt in a glass of warm water."),e.createElement(t.Item,null,"Gargle with the solution then spit it out – don't swallow it."),e.createElement(t.Item,null,"Repeat as often as you like.")))},o={args:{variant:"unordered",border:!0},render:r=>e.createElement(t,{...r},e.createElement(t.Item,null,"Money, work and benefits"),e.createElement(t.Item,null,"Care after a hospital stay"),e.createElement(t.Item,null,"Support and benefits for carers"))};var i,l,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var c,d,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,f,I;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(I=(f=n.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var g,h,L;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'unordered',
    border: true
  },
  render: args => <List {...args}>
      <List.Item>Money, work and benefits</List.Item>
      <List.Item>Care after a hospital stay</List.Item>
      <List.Item>Support and benefits for carers</List.Item>
    </List>
}`,...(L=(h=o.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};const C=["Default","Bulleted","Numbered","WithBorders"];export{s as Bulleted,a as Default,n as Numbered,o as WithBorders,C as __namedExportsOrder,B as default};
