import{R as e}from"./index-B-o1Wr-g.js";import{R as t,C as n}from"./Grid-5lmrEX4S.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";const v={title:"Styles/Layout/Grid",decorators:[r=>e.createElement(e.Fragment,null,e.createElement("style",null,`[class^="nhsuk-grid-column"] > p {
            background-color: #005eb8;
            color: #fff;
            padding: 20px;
            text-align: center;
          }`),e.createElement(r,null))],parameters:{docs:{description:{component:"The grid is structured with a `.nhsuk-grid-row` wrapper which acts as a row to contain your grid columns.\n\nYou can add columns inside this wrapper to create your layout. To define your columns, add the class beginning with `.nhsuk-grid-column-` to a new container followed by the width, for example `.nhsuk-grid-column-one-third`, to make it the width you want.\n\nhttps://service-manual.nhs.uk/design-system/styles/layout#grid"}}}},o={render:r=>e.createElement(t,{...r},e.createElement(n,{width:"full"},e.createElement("p",null,"nhsuk-grid-column-full")))},a={render:r=>e.createElement(t,{...r},e.createElement(n,{width:"one-half"},e.createElement("p",null,"nhsuk-grid-column-one-half")))},s={render:r=>e.createElement(t,{...r},e.createElement(n,{width:"one-third"},e.createElement("p",null,"nhsuk-grid-column-one-third")))},l={render:r=>e.createElement(t,{...r},e.createElement(n,{width:"two-thirds"},e.createElement("p",null,"nhsuk-grid-column-two-thirds")))},u={render:r=>e.createElement(t,{...r},e.createElement(n,{width:"one-quarter"},e.createElement("p",null,"nhsuk-grid-column-one-quarter")))},c={render:r=>e.createElement(t,{...r},e.createElement(n,{width:"three-quarters"},e.createElement("p",null,"nhsuk-grid-column-three-quarters")))},d={render:r=>e.createElement(t,{...r},e.createElement(n,{width:"two-thirds"},e.createElement("p",null,"nhsuk-grid-column-two-thirds"),e.createElement(t,null,e.createElement(n,{width:"one-half"},e.createElement("p",null,"nhsuk-grid-column-one-half")),e.createElement(n,{width:"one-half"},e.createElement("p",null,"nhsuk-grid-column-one-half")))))};var m,i,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Row {...args}>
      <Column width="full">
        <p>nhsuk-grid-column-full</p>
      </Column>
    </Row>
}`,...(h=(i=o.parameters)==null?void 0:i.docs)==null?void 0:h.source}}};var p,w,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Row {...args}>
      <Column width="one-half">
        <p>nhsuk-grid-column-one-half</p>
      </Column>
    </Row>
}`,...(g=(w=a.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var E,f,k;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <Row {...args}>
      <Column width="one-third">
        <p>nhsuk-grid-column-one-third</p>
      </Column>
    </Row>
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var C,R,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => <Row {...args}>
      <Column width="two-thirds">
        <p>nhsuk-grid-column-two-thirds</p>
      </Column>
    </Row>
}`,...(y=(R=l.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var T,q,S;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Row {...args}>
      <Column width="one-quarter">
        <p>nhsuk-grid-column-one-quarter</p>
      </Column>
    </Row>
}`,...(S=(q=u.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var O,x,b;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <Row {...args}>
      <Column width="three-quarters">
        <p>nhsuk-grid-column-three-quarters</p>
      </Column>
    </Row>
}`,...(b=(x=c.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var Q,F,G;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const L=["FullWidth","OneHalf","OneThird","TwoThirds","OneQuarter","ThreeQuarters","NestedGrid"];export{o as FullWidth,d as NestedGrid,a as OneHalf,u as OneQuarter,s as OneThird,c as ThreeQuarters,l as TwoThirds,L as __namedExportsOrder,v as default};
