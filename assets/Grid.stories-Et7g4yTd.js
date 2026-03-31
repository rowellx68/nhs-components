import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-opzFqeq4.js";import{n as r,r as i,t as a}from"./Grid-BuZxpqh7.js";var o,s,c,l,u,d,f,p,m,h;t((()=>{o=e(n(),1),i(),s={title:`Styles/Layout/Grid`,decorators:[e=>o.createElement(o.Fragment,null,o.createElement(`style`,null,`[class^="nhsuk-grid-column"] > p {
            background-color: #005eb8;
            color: #fff;
            padding: 20px;
            text-align: center;
          }`),o.createElement(e,null))],parameters:{docs:{description:{component:"The grid is structured with a `.nhsuk-grid-row` wrapper which acts as a row to contain your grid columns.\n\nYou can add columns inside this wrapper to create your layout. To define your columns, add the class beginning with `.nhsuk-grid-column-` to a new container followed by the width, for example `.nhsuk-grid-column-one-third`, to make it the width you want.\n\nhttps://service-manual.nhs.uk/design-system/styles/layout#grid"}}}},c={render:e=>o.createElement(r,e,o.createElement(a,{width:`full`},o.createElement(`p`,null,`nhsuk-grid-column-full`)))},l={render:e=>o.createElement(r,e,o.createElement(a,{width:`one-half`},o.createElement(`p`,null,`nhsuk-grid-column-one-half`)))},u={render:e=>o.createElement(r,e,o.createElement(a,{width:`one-third`},o.createElement(`p`,null,`nhsuk-grid-column-one-third`)))},d={render:e=>o.createElement(r,e,o.createElement(a,{width:`two-thirds`},o.createElement(`p`,null,`nhsuk-grid-column-two-thirds`)))},f={render:e=>o.createElement(r,e,o.createElement(a,{width:`one-quarter`},o.createElement(`p`,null,`nhsuk-grid-column-one-quarter`)))},p={render:e=>o.createElement(r,e,o.createElement(a,{width:`three-quarters`},o.createElement(`p`,null,`nhsuk-grid-column-three-quarters`)))},m={render:e=>o.createElement(r,e,o.createElement(a,{width:`two-thirds`},o.createElement(`p`,null,`nhsuk-grid-column-two-thirds`),o.createElement(r,null,o.createElement(a,{width:`one-half`},o.createElement(`p`,null,`nhsuk-grid-column-one-half`)),o.createElement(a,{width:`one-half`},o.createElement(`p`,null,`nhsuk-grid-column-one-half`)))))},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Row {...args}>
      <Column width="full">
        <p>nhsuk-grid-column-full</p>
      </Column>
    </Row>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Row {...args}>
      <Column width="one-half">
        <p>nhsuk-grid-column-one-half</p>
      </Column>
    </Row>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Row {...args}>
      <Column width="one-third">
        <p>nhsuk-grid-column-one-third</p>
      </Column>
    </Row>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Row {...args}>
      <Column width="two-thirds">
        <p>nhsuk-grid-column-two-thirds</p>
      </Column>
    </Row>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Row {...args}>
      <Column width="one-quarter">
        <p>nhsuk-grid-column-one-quarter</p>
      </Column>
    </Row>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Row {...args}>
      <Column width="three-quarters">
        <p>nhsuk-grid-column-three-quarters</p>
      </Column>
    </Row>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Row {...args}>
      <Column width="two-thirds">
        <p>nhsuk-grid-column-two-thirds</p>
        <Row>
          <Column width="one-half">
            <p>nhsuk-grid-column-one-half</p>
          </Column>
          <Column width="one-half">
            <p>nhsuk-grid-column-one-half</p>
          </Column>
        </Row>
      </Column>
    </Row>
}`,...m.parameters?.docs?.source}}},h=[`FullWidth`,`OneHalf`,`OneThird`,`TwoThirds`,`OneQuarter`,`ThreeQuarters`,`NestedGrid`]}))();export{c as FullWidth,m as NestedGrid,l as OneHalf,f as OneQuarter,u as OneThird,p as ThreeQuarters,d as TwoThirds,h as __namedExportsOrder,s as default};