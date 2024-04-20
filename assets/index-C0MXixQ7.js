import{j as a}from"./jsx-runtime-DRTy3Uxn.js";import{c as s}from"./clsx-CH7BE6MN.js";import{r as l}from"./index-BBkUAzwr.js";const t=({children:r,className:m,...e})=>a.jsx("h2",{className:s("nhsuk-error-summary__title",m),...e,children:r}),n=({children:r,className:m,...e})=>a.jsx("div",{className:s("nhsuk-error-summary__body",m),...e,children:r}),u=({children:r,className:m,...e})=>a.jsx("ul",{className:s("nhsuk-list","nhsuk-error-summary__list",m),...e,children:r}),i=({children:r,asElement:m="a",...e})=>a.jsx("li",{children:a.jsx(m,{...e,children:r})}),p=({children:r,className:m,...e},y)=>a.jsx("div",{className:s("nhsuk-error-summary",m),ref:y,...e,children:r}),o=l.forwardRef(p);o.displayName="ErrorSummary";n.displayName="ErrorSummary.Body";u.displayName="ErrorSummary.List";i.displayName="ErrorSummary.Item";t.displayName="ErrorSummary.Title";o.Title=t;o.Body=n;o.List=u;o.Item=i;o.__docgenInfo={description:`Include an error summary at the top of a page to summarise any mistakes a user has made.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/error-summary).

@param {string} [props.className] - An optional class name to apply to the container.
@param {React.ForwardedRef<HTMLDivElement>} [ref] - Optional ref to be passed to the container.

@example
\`\`\`tsx
<ErrorSummary>
 <ErrorSummary.Title>Error summary title</ErrorSummary.Title>
<ErrorSummary.Body>
 <ErrorSummary.List>
  <ErrorSummary.Item href="#example-error-1">Example error 1</ErrorSummary.Item>
 </ErrorSummary.List>
</ErrorSummary.Body>
</ErrorSummary>
\`\`\``,methods:[],displayName:"ErrorSummary"};ErrorSummaryRef.__docgenInfo={description:`Include an error summary at the top of a page to summarise any mistakes a user has made.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/error-summary).

@param {string} [props.className] - An optional class name to apply to the container.
@param {React.ForwardedRef<HTMLDivElement>} [ref] - Optional ref to be passed to the container.

@example
\`\`\`tsx
<ErrorSummary>
 <ErrorSummary.Title>Error summary title</ErrorSummary.Title>
<ErrorSummary.Body>
 <ErrorSummary.List>
  <ErrorSummary.Item href="#example-error-1">Example error 1</ErrorSummary.Item>
 </ErrorSummary.List>
</ErrorSummary.Body>
</ErrorSummary>
\`\`\``,methods:[],displayName:"ErrorSummary"};export{o as E};
