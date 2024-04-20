import{j as n}from"./jsx-runtime-DRTy3Uxn.js";import{A as p,a as g}from"./index-BNAbGPPW.js";import{c as o}from"./clsx-CH7BE6MN.js";const l=({children:s,className:t,previous:a,next:i,asElement:r="a",...m})=>n.jsx("li",{className:o("nhsuk-pagination-item",{"nhsuk-pagination-item--previous":a,"nhsuk-pagination-item--next":i}),children:n.jsxs(r,{className:o("nhsuk-pagination__link",{"nhsuk-pagination__link--prev":a,"nhsuk-pagination__link--next":i},t),...m,children:[n.jsxs("span",{className:"nhsuk-pagination__title",children:[a&&"Previous",i&&"Next"]}),n.jsx("span",{className:"nhsuk-u-visually-hidden",children:":"}),n.jsx("span",{className:"nhsuk-pagination__page",children:s}),a&&n.jsx(p,{}),i&&n.jsx(g,{})]})}),e=({children:s,className:t,...a})=>n.jsx("nav",{className:o("nhsuk-pagination",t),...a,children:n.jsx("ul",{className:"nhsuk-list nhsuk-pagination__list",children:s})});e.displayName="Pagination";l.displayName="Pagination.Link";e.Link=l;e.__docgenInfo={description:`Use pagination to allow users to navigate between related pages, for example about a single condition.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/pagination).

@link https://service-manual.nhs.uk/design-system/components/pagination

@example
\`\`\`tsx
<Pagination>
 <Pagination.Link previous href="#previous">
  Previous
 </Pagination.Link>
 <Pagination.Link next href="#next">
  Next
 </Pagination.Link>
</Pagination>
\`\`\``,methods:[{name:"Link",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  previous,
  next,
  asElement: Component = 'a',
  ...rest
}`,optional:!1,type:null}],returns:null}],displayName:"Pagination"};e.__docgenInfo={description:`Use pagination to allow users to navigate between related pages, for example about a single condition.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/pagination).

@link https://service-manual.nhs.uk/design-system/components/pagination

@example
\`\`\`tsx
<Pagination>
 <Pagination.Link previous href="#previous">
  Previous
 </Pagination.Link>
 <Pagination.Link next href="#next">
  Next
 </Pagination.Link>
</Pagination>
\`\`\``,methods:[{name:"Link",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  previous,
  next,
  asElement: Component = 'a',
  ...rest
}`,optional:!1,type:null}],returns:null}],displayName:"Pagination"};export{e as P};
