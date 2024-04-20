import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{c as t}from"./clsx-CH7BE6MN.js";const s=({children:r,className:a,visuallyHiddenText:n="Error",...o})=>e.jsxs("span",{className:t("nhsuk-error-message",a),...o,children:[e.jsxs("span",{className:"nhsuk-u-visually-hidden",children:[n,":"]}),r]});s.displayName="ErrorMessage";s.__docgenInfo={description:`Use an error message when there is a validation error. Explain what went wrong and how to fix it.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/error-message).


@param {string} [props.className] - Optional additional className to add to the component.
@param {string} [props.visuallyHiddenText] - Visually hidden text for screen readers. Defaults to 'Error'.

@example
\`\`\`tsx
<ErrorMessage>Example error message</ErrorMessage>
\`\`\``,methods:[],displayName:"ErrorMessage",props:{visuallyHiddenText:{defaultValue:{value:"'Error'",computed:!1},required:!1}}};export{s as E};
