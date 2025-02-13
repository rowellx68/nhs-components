import{R as r}from"./index-DCEVbkbO.js";import{B as e}from"./Breadcrumb-BDKoX7VT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./VisuallyHidden-Ms4sRGqF.js";import"./Base-DkqVgamr.js";import"./polymorphic-factory-Bh8XY5CE.js";import"./clsx-B-dksMZM.js";import"./factory-B-vprWl1.js";const b={title:"Components/Navigation/Breadcrumb",component:e,subcomponents:{"Breadcrumb.List":e.List,"Breadcrumb.ListItem":e.ListItem,"Breadcrumb.BackLink":e.BackLink},parameters:{docs:{description:{component:`Use breadcrumbs to help users understand where they are in the website.

https://service-manual.nhs.uk/design-system/components/breadcrumbs`}}}},t={render:a=>r.createElement(e,{...a},r.createElement(e.List,null,r.createElement(e.ListItem,{href:"/level-one"},"Level one"),r.createElement(e.ListItem,{href:"/level-one/level-two"},"Level two"),r.createElement(e.ListItem,{href:"/level-one/level-two/level-three"},"Level three")),r.createElement(e.BackLink,{href:"/level-one/level-two/level-three"},"Level three"))};var n,m,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args}>
      <Breadcrumb.List>
        <Breadcrumb.ListItem href="/level-one">Level one</Breadcrumb.ListItem>
        <Breadcrumb.ListItem href="/level-one/level-two">
          Level two
        </Breadcrumb.ListItem>
        <Breadcrumb.ListItem href="/level-one/level-two/level-three">
          Level three
        </Breadcrumb.ListItem>
      </Breadcrumb.List>
      <Breadcrumb.BackLink href="/level-one/level-two/level-three">
        Level three
      </Breadcrumb.BackLink>
    </Breadcrumb>
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const p=["Default"];export{t as Default,p as __namedExportsOrder,b as default};
