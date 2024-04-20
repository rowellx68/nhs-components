import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{c as l}from"./clsx-CH7BE6MN.js";const m=({className:a,children:i,current:e,asElement:s="a",...t})=>{let r={};return e&&(r={"aria-current":"page"},s="span",delete t.to,delete t.href),n.jsx("li",{className:l("nhsuk-contents-list__item",a),...r,children:n.jsx(s,{className:l({"nhsuk-contents-list__current":e,"nhsuk-contents-list__link":!e}),...t,children:i})})},o=({className:a,children:i,visuallyHiddenText:e="Contents",role:s="navigation",...t})=>n.jsxs("nav",{className:l("nhsuk-contents-list",a),role:s,...t,children:[n.jsx("h2",{className:"nhsuk-u-visually-hidden",children:e}),n.jsx("ul",{className:"nhsuk-contents-list__list",children:i})]});o.displayName="ContentsList";m.displayName="ContentsList.Item";o.Item=m;o.__docgenInfo={description:`Use contents lists to allow users to navigate between related pages, for example about a single condition.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/contents-list).

@param {string} [props.className] - An optional class name to add to the component.
@param {string} [props.visuallyHiddenText] - The header text to display to screen readers.
@param {string} [props.role] - The role of the component.

@example
\`\`\`tsx
<ContentsList>
 <ContentsList.Item href="#section-1">Section 1</ContentsList.Item>
 <ContentsList.Item href="#section-2">Section 2</ContentsList.Item>
</ContentsList>
\`\`\``,methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  children,
  current,
  asElement: Component = 'a',
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}}],displayName:"ContentsList",props:{visuallyHiddenText:{defaultValue:{value:"'Contents'",computed:!1},required:!1},role:{defaultValue:{value:"'navigation'",computed:!1},required:!1}}};o.__docgenInfo={description:`Use contents lists to allow users to navigate between related pages, for example about a single condition.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/contents-list).

@param {string} [props.className] - An optional class name to add to the component.
@param {string} [props.visuallyHiddenText] - The header text to display to screen readers.
@param {string} [props.role] - The role of the component.

@example
\`\`\`tsx
<ContentsList>
 <ContentsList.Item href="#section-1">Section 1</ContentsList.Item>
 <ContentsList.Item href="#section-2">Section 2</ContentsList.Item>
</ContentsList>
\`\`\``,methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  children,
  current,
  asElement: Component = 'a',
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}}],displayName:"ContentsList",props:{visuallyHiddenText:{defaultValue:{value:"'Contents'",computed:!1},required:!1},role:{defaultValue:{value:"'navigation'",computed:!1},required:!1}}};export{o as C};
