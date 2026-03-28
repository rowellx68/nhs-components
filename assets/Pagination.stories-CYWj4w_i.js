import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-Co2kQL1W.js";import{n as r,t as i}from"./Pagination-D_tlEJyR.js";var a,o,s,c,l,u,d;t((()=>{a=e(n(),1),r(),o={title:`Components/Navigation/Pagination`,component:i,subcomponents:{"Pagination.Previous":i.Previous,"Pagination.Next":i.Next,"Pagination.List":i.List,"Pagination.Item":i.Item,"Pagination.Ellipsis":i.Ellipsis},parameters:{docs:{description:{component:`Use pagination to allow users to navigate between related pages, for example about a single condition.

https://service-manual.nhs.uk/design-system/components/pagination`}}}},s={render:e=>a.createElement(i,e,a.createElement(i.Previous,{href:`#`,pageTitle:`Treatments`}),a.createElement(i.Next,{href:`#`,pageTitle:`Symptoms`}))},c={render:e=>a.createElement(i,e,a.createElement(i.Next,{href:`#`,pageTitle:`Symptoms`}))},l={render:e=>a.createElement(i,e,a.createElement(i.Previous,{href:`#`,pageTitle:`Treatments`}))},u={args:{numbered:!0},render:e=>a.createElement(i,e,a.createElement(i.Previous,{href:`#`,numbered:!0}),a.createElement(i.List,null,a.createElement(i.Item,{page:1,href:`#`}),a.createElement(i.Item,{page:2,href:`#`,current:!0}),a.createElement(i.Item,{page:3,href:`#`})),a.createElement(i.Next,{href:`#`,numbered:!0}))},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Pagination {...args}>
      <Pagination.Previous href="#" pageTitle="Treatments" />
      <Pagination.Next href="#" pageTitle="Symptoms" />
    </Pagination>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Pagination {...args}>
      <Pagination.Next href="#" pageTitle="Symptoms" />
    </Pagination>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <Pagination {...args}>
      <Pagination.Previous href="#" pageTitle="Treatments" />
    </Pagination>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    numbered: true
  },
  render: args => <Pagination {...args}>
      <Pagination.Previous href="#" numbered />
      <Pagination.List>
        <Pagination.Item page={1} href="#" />
        <Pagination.Item page={2} href="#" current />
        <Pagination.Item page={3} href="#" />
      </Pagination.List>
      <Pagination.Next href="#" numbered />
    </Pagination>
}`,...u.parameters?.docs?.source}}},d=[`Default`,`WithOnlyNext`,`WithOnlyPrevious`,`Numbered`]}))();export{s as Default,u as Numbered,c as WithOnlyNext,l as WithOnlyPrevious,d as __namedExportsOrder,o as default};