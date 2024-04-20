import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{c as l}from"./clsx-CH7BE6MN.js";const o=({children:e,className:n,...a})=>t.jsx("summary",{className:l("nhsuk-details__summary",n),...a,children:t.jsx("span",{className:"nhsuk-details__summary-text",children:e})}),r=({children:e,className:n,...a})=>t.jsx("div",{className:l("nhsuk-details__text",n),...a,children:e}),m=({className:e,children:n,...a})=>t.jsx("div",{className:l("nhsuk-expander-group",e),...a,children:n}),s=({children:e,expander:n,className:a,...i})=>t.jsx("details",{className:l("nhsuk-details",{"nhsuk-expander":n},a),...i,children:e});s.displayName="Details";o.displayName="Details.Summary";r.displayName="Details.Text";m.displayName="Details.ExpanderGroup";s.Summary=o;s.Text=r;s.ExpanderGroup=m;s.__docgenInfo={description:`Make a page easier to scan by letting users reveal more detailed information only if they need it.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/details).

@param {boolean} [props.expander] - If true, the component will be styled as an expander.
@param {string} [props.className] - An optional class name to add to the component.

@example

\`\`\`tsx
<Details>
 <Details.Summary>How to find your NHS number</Details.Summary>
 <Details.Text>You can find your NHS number...</Details.Text>
</Details>
\`\`\``,methods:[{name:"Summary",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"Text",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"ExpanderGroup",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  children,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}}],displayName:"Details"};s.__docgenInfo={description:`Make a page easier to scan by letting users reveal more detailed information only if they need it.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/details).

@param {boolean} [props.expander] - If true, the component will be styled as an expander.
@param {string} [props.className] - An optional class name to add to the component.

@example

\`\`\`tsx
<Details>
 <Details.Summary>How to find your NHS number</Details.Summary>
 <Details.Text>You can find your NHS number...</Details.Text>
</Details>
\`\`\``,methods:[{name:"Summary",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"Text",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"ExpanderGroup",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  children,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}}],displayName:"Details"};export{s as D};
