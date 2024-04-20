import{j as a}from"./jsx-runtime-DRTy3Uxn.js";import{R as b}from"./index-BBkUAzwr.js";import{c as l}from"./clsx-CH7BE6MN.js";const o=({className:r,children:n,asElement:s="a",...t})=>a.jsx("li",{className:"nhsuk-breadcrumb__item",children:a.jsx(s,{className:l("nhsuk-breadcrumb__link",r),...t,children:n})}),u=({children:r,className:n,asElement:s="a",...t})=>a.jsx("p",{className:"nhsuk-breadcrumb__back",children:a.jsxs(s,{className:l("nhsuk-breadcrumb__backlink",n),...t,children:[a.jsx("span",{className:"nhsuk-u-visually-hidden",children:"Back to  "}),r]})}),c=({children:r,className:n,"aria-label":s="Breadcrumb",...t})=>{const{Items:d,Back:p,Others:i}=b.Children.toArray(r).reduce((m,e)=>(e&&typeof e=="object"&&"type"in e?e.type===o?m.Items.push(e):e.type===u?m.Back=e:m.Others.push(e):m.Others.push(e),m),{Items:[],Back:void 0,Others:[]});return a.jsx("nav",{className:l("nhsuk-breadcrumb",n),"aria-label":s,...t,children:a.jsxs("div",{className:"nhsuk-width-container",children:[a.jsx("ol",{className:"nhsuk-breadcrumb__list",children:d}),p,i]})})};c.displayName="Breadcrumb";o.displayName="Breadcrumb.Item";u.displayName="Breadcrumb.Back";c.Back=u;c.Item=o;c.__docgenInfo={description:`Use breadcrumbs to help users understand where they are in the website.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/breadcrumb).

@param {string} [props.className] - An optional class name to apply to the container.
@param {string} [props.aria-label] - An optional label for the breadcrumb. Defaults to \`Breadcrumb\`.

@example
\`\`\`tsx
<Breadcrumb>
 <Breadcrumb.Item href="/start">Home</Breadcrumb.Item>
 <Breadcrumb.Item href="/step-1">Step 1</Breadcrumb.Item>
 <Breadcrumb.Item href="/step-2">Step 2</Breadcrumb.Item>
 <Breadcrumb.Back href="/step-2">Step 2</Breadcrumb.Back>
</Breadcrumb>`,methods:[{name:"Back",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  asElement: Component = 'a',
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"Item",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  children,
  asElement: Component = 'a',
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}}],displayName:"Breadcrumb",props:{"aria-label":{defaultValue:{value:"'Breadcrumb'",computed:!1},required:!1}}};Breadcrumb.__docgenInfo={description:`Use breadcrumbs to help users understand where they are in the website.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/breadcrumb).

@param {string} [props.className] - An optional class name to apply to the container.
@param {string} [props.aria-label] - An optional label for the breadcrumb. Defaults to \`Breadcrumb\`.

@example
\`\`\`tsx
<Breadcrumb>
 <Breadcrumb.Item href="/start">Home</Breadcrumb.Item>
 <Breadcrumb.Item href="/step-1">Step 1</Breadcrumb.Item>
 <Breadcrumb.Item href="/step-2">Step 2</Breadcrumb.Item>
 <Breadcrumb.Back href="/step-2">Step 2</Breadcrumb.Back>
</Breadcrumb>`,methods:[{name:"Back",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  asElement: Component = 'a',
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"Item",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  children,
  asElement: Component = 'a',
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}}],displayName:"Breadcrumb",props:{"aria-label":{defaultValue:{value:"'Breadcrumb'",computed:!1},required:!1}}};export{c as B};
