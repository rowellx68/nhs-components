import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-Co2kQL1W.js";import{n as r,t as i}from"./Table-BaYb8fF8.js";import{i as a,t as o}from"./Details-DE3qgWVv.js";var s,c,l,u,d,f,p,m,h,g;t((()=>{s=e(n(),1),r(),a(),c={title:`Components/Content Presentation/Details`,component:o,subcomponents:{"Details.Summary":o.Summary,"Details.Text":o.Text},parameters:{docs:{description:{component:`Make a page easier to scan by letting users reveal more detailed information only if they need it.

https://service-manual.nhs.uk/design-system/components/details`}}}},l=()=>s.createElement(s.Fragment,null,s.createElement(`p`,null,`An NHS number is a 10 digit number, like `,s.createElement(`span`,{className:`nhsuk-u-nowrap`},`999 123 4567`),`.`),s.createElement(`p`,null,`You can find your NHS number by logging in to the NHS App or on any document the NHS has sent you, such as your:`),s.createElement(`ul`,null,s.createElement(`li`,null,`prescriptions`),s.createElement(`li`,null,`test results`),s.createElement(`li`,null,`hospital referral letters`),s.createElement(`li`,null,`appointment letters`)),s.createElement(`p`,null,`Ask your GP surgery for help if you cannot find your NHS number.`)),u={render:e=>s.createElement(o,e,s.createElement(o.Summary,null,`How to find your NHS number`),s.createElement(o.Text,null,s.createElement(l,null)))},d=[[`Monday`,`9am to 6pm`],[`Tuesday`,`9am to 6pm`],[`Wednesday`,`9am to 6pm`],[`Thursday`,`9am to 6pm`],[`Friday`,`9am to 6pm`],[`Saturday`,`9am to 1pm`],[`Sunday`,`Closed`]],f=()=>s.createElement(i,{firstCellIsHeader:!0},s.createElement(i.Head,null,s.createElement(i.Row,null,s.createElement(i.Cell,null,`Day of the week`),s.createElement(i.Cell,null,`Opening hours`))),s.createElement(i.Body,null,d.map(([e,t])=>s.createElement(i.Row,{key:e},s.createElement(i.Cell,null,e),s.createElement(i.Cell,null,t))))),p={render:e=>s.createElement(o,{...e,variant:`expander`},s.createElement(o.Summary,null,`Opening times`),s.createElement(o.Text,null,s.createElement(f,null)))},m={name:`Expander open`,render:e=>s.createElement(o,{...e,variant:`expander`,open:!0},s.createElement(o.Summary,null,`Opening times`),s.createElement(o.Text,null,s.createElement(f,null)))},h={render:e=>s.createElement(o,{...e,open:!0},s.createElement(o.Summary,null,`How to find your NHS number`),s.createElement(o.Text,null,s.createElement(l,null)))},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <Details {...args}>
      <Details.Summary>How to find your NHS number</Details.Summary>
      <Details.Text>
        <NhsNumberContent />
      </Details.Text>
    </Details>
}`,...u.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Details {...args} variant="expander">
      <Details.Summary>Opening times</Details.Summary>
      <Details.Text>
        <OpeningTimesTable />
      </Details.Text>
    </Details>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Expander open',
  render: args => <Details {...args} variant="expander" open>
      <Details.Summary>Opening times</Details.Summary>
      <Details.Text>
        <OpeningTimesTable />
      </Details.Text>
    </Details>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Details {...args} open>
      <Details.Summary>How to find your NHS number</Details.Summary>
      <Details.Text>
        <NhsNumberContent />
      </Details.Text>
    </Details>
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Expander`,`ExpanderOpen`,`Open`]}))();export{u as Default,p as Expander,m as ExpanderOpen,h as Open,g as __namedExportsOrder,c as default};