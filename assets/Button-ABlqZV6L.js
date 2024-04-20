import{j as u}from"./jsx-runtime-DRTy3Uxn.js";import{c as l}from"./clsx-CH7BE6MN.js";const p=({children:n,className:t,disabled:e,secondary:o,reverse:a,type:s="submit",...r})=>u.jsx("button",{className:l("nhsuk-button",{"nhsuk-button--disabled":e,"nhsuk-button--secondary":o,"nhsuk-button--reverse":a},t),disabled:e,"aria-disabled":e,type:s,...r,children:n}),i=({className:n,disabled:t,secondary:e,reverse:o,children:a,asElement:s="a",role:r="button",draggable:m=!1,...b})=>u.jsx(s,{className:l("nhsuk-button",{"nhsuk-button--disabled":t,"nhsuk-button--secondary":e,"nhsuk-button--reverse":o},n),disabled:t,"aria-disabled":t,role:r,draggable:m,...b,children:a});p.displayName="Button";i.displayName="ButtonLink";p.__docgenInfo={description:`Use buttons to help users carry out an action on a page like starting an application or saving their progress.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/button).

@param {string} [props.className] - Optional additional classes to add to the button.
@param {boolean} [props.disabled] - Disables the button, preventing user interaction.
@param {boolean} [props.secondary] - Changes the button to a secondary style.
@param {boolean} [props.reverse] - Changes the button to a reverse style.
@param {string} [props.type] - The type of button. Defaults to \`submit\`.

@example
\`\`\`tsx
<Button>Default button</Button>
<Button secondary>Secondary button</Button>
<Button reverse>Reverse button</Button>
\`\`\``,methods:[],displayName:"Button",props:{type:{defaultValue:{value:"'submit'",computed:!1},required:!1}}};i.__docgenInfo={description:`Use buttons to help users carry out an action on a page like starting an application or saving their progress.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/button).

@param {string} [props.className] - Optional additional classes to add to the button.
@param {boolean} [props.disabled] - Disables the button, preventing user interaction.
@param {boolean} [props.secondary] - Changes the button to a secondary style.
@param {boolean} [props.reverse] - Changes the button to a reverse style.
@param {React.ElementType} [props.asElement] - The element to render the button as. Defaults to \`a\`.
@param {string} [props.role] - The role of the button. Defaults to \`button\`.
@param {boolean} [props.draggable] - Whether the button is draggable. Defaults to \`false\`.

@example
\`\`\`tsx
<ButtonLink href="https://www.nhs.uk">Default button</ButtonLink>
<ButtonLink asElement={Link} to="/somewhere">Default button</ButtonLink>
\`\`\``,methods:[],displayName:"ButtonLink",props:{asElement:{defaultValue:{value:"'a'",computed:!1},required:!1},role:{defaultValue:{value:"'button'",computed:!1},required:!1},draggable:{defaultValue:{value:"false",computed:!1},required:!1}}};export{p as B,i as a};
