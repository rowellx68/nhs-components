import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-Co2kQL1W.js";import{n as r,t as i}from"./clsx-keIqec4B.js";import{n as a,t as o}from"./Base-D8qVFz7v.js";import{n as s,t as c}from"./factory-BtzG2lhR.js";import{n as l,t as u}from"./polymorphic-factory-CfNDVxws.js";import{n as d,t as f}from"./VisuallyHidden-ToMc32Nf.js";var p,m,h,g,_=t((()=>{r(),p=e(n(),1),a(),d(),s(),u(),m=c(({className:e,children:t,...n},r)=>p.createElement(`div`,{className:i(`nhsuk-card nhsuk-card--warning`,e),...n,ref:r},p.createElement(`div`,{className:`nhsuk-card__content`},t))),h=l(({className:e,children:t,as:n=`h3`,visuallyHiddenText:r,...a},s)=>p.createElement(o,{as:n,className:i(`nhsuk-card__heading`,e),...a,ref:s},r?p.createElement(`span`,{role:`text`},p.createElement(f,null,r),t):t)),g=l(({className:e,as:t=`p`,...n},r)=>p.createElement(o,{as:t,className:i(`nhsuk-card__description`,e),...n,ref:r})),m.displayName=`WarningCallout`,h.displayName=`WarningCallout.Label`,g.displayName=`WarningCallout.Description`,m.Label=h,m.Description=g})),v,y,b,x,S,C;t((()=>{v=e(n(),1),_(),y={title:`Components/Content Presentation/Warning Callout`,component:m,subcomponents:{"WarningCallout.Label":m.Label,"WarningCallout.Description":m.Description},parameters:{docs:{description:{component:`Use a warning callout to help users identify and understand warning content on the page, even if they do not read the whole page.

https://service-manual.nhs.uk/design-system/components/warning-callout`}}}},b={render:e=>v.createElement(m,e,v.createElement(m.Label,null,`Important`),v.createElement(m.Description,null,`For safety, tell your doctor or pharmacist if you're taking any other medicines, including herbal medicines, vitamins or supplements.`))},x={render:e=>v.createElement(m,e,v.createElement(m.Label,{visuallyHiddenText:`Important: `},`School, nursery or work`),v.createElement(m.Description,null,`Stay away from school, nursery or work until all the spots have crusted over. This is usually 5 days after the spots first appeared.`))},S={render:e=>v.createElement(m,e,v.createElement(m.Label,{as:`h2`},`Important`),v.createElement(m.Description,null,`For safety, tell your doctor or pharmacist if you're taking any other medicines, including herbal medicines, vitamins or supplements.`))},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <WarningCallout {...args}>
      <WarningCallout.Label>Important</WarningCallout.Label>
      <WarningCallout.Description>
        For safety, tell your doctor or pharmacist if you&apos;re taking any other medicines,
        including herbal medicines, vitamins or supplements.
      </WarningCallout.Description>
    </WarningCallout>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <WarningCallout {...args}>
      <WarningCallout.Label visuallyHiddenText="Important: ">
        School, nursery or work
      </WarningCallout.Label>
      <WarningCallout.Description>
        Stay away from school, nursery or work until all the spots have crusted over. This is
        usually 5 days after the spots first appeared.
      </WarningCallout.Description>
    </WarningCallout>
}`,...x.parameters?.docs?.source},description:{story:`When the label is not simply the word "Important", prepend visually hidden text so screen reader users still hear the "Important:" prefix.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <WarningCallout {...args}>
      <WarningCallout.Label as="h2">Important</WarningCallout.Label>
      <WarningCallout.Description>
        For safety, tell your doctor or pharmacist if you&apos;re taking any other medicines,
        including herbal medicines, vitamins or supplements.
      </WarningCallout.Description>
    </WarningCallout>
}`,...S.parameters?.docs?.source},description:{story:"Use the `as` prop on `WarningCallout.Label` to change the heading level to fit the page hierarchy.",...S.parameters?.docs?.description}}},C=[`Default`,`WithCustomHeading`,`WithDifferentHeadingLevels`]}))();export{b as Default,x as WithCustomHeading,S as WithDifferentHeadingLevels,C as __namedExportsOrder,y as default};