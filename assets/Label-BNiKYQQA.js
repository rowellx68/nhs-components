import{j as s}from"./jsx-runtime-DRTy3Uxn.js";import{r as m}from"./index-BBkUAzwr.js";import{c as i}from"./clsx-CH7BE6MN.js";const n=({children:p,className:r,size:a,isPageHeading:e,...o})=>{const l=e||a==="xl"?"h1":m.Fragment,t=l==="h1"?{className:"nhsuk-label-wrapper"}:{};return s.jsx(l,{...t,children:s.jsx("label",{className:i("nhsuk-label",{"nhsuk-label--xl":e&&!a},{[`nhsuk-label--${a}`]:a},r),...o,children:p})})};n.displayName="Label";n.__docgenInfo={description:`This component is not meant to be used directly.

@param {string} [props.className] - An optional class name to apply to the label.
@param {Size} [props.size] - The size of the label.
@param {boolean} [props.isPageHeading] - Whether the label is a page heading.

@example
\`\`\`tsx
<Label size="xl">Example</Label>
<Label isPageHeading>Example</Label>
\`\`\``,methods:[],displayName:"Label"};export{n as L};
