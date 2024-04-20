import{j as s}from"./jsx-runtime-DRTy3Uxn.js";import{r as d}from"./index-BBkUAzwr.js";import{c as a}from"./clsx-CH7BE6MN.js";import"./index-BNAbGPPW.js";import"./index-BJZX35FI.js";import"./index-DCz-pOyH.js";import{T as D,C as u}from"./index-BWzVQ7MN.js";const c=({children:t,className:o,asElement:n="h3",...i})=>s.jsx(n,{className:a("nhsuk-do-dont-list__label",o),...i,children:t}),m=({children:t,...o})=>{const n=d.useContext(l);return s.jsxs("li",{...o,children:[n==="do"?s.jsx(D,{}):s.jsx(u,{}),t]})},l=d.createContext("do"),e=({type:t="do",className:o,headingProps:n,children:i,...r})=>s.jsxs("div",{className:a("nhsuk-do-dont-list",o),...r,children:[s.jsx(c,{...n,children:t==="do"?"Do":"Don't"}),s.jsx("ul",{className:a("nhsuk-list",{"nhsuk-list--tick":t==="do","nhsuk-list--cross":t!=="do"}),role:"list",children:s.jsx(l.Provider,{value:t,children:i})})]});l.displayName="DoDontListContext";m.displayName="DoDontList.Item";e.displayName="DoDontList";e.Item=m;e.__docgenInfo={description:`Use Do and Don't lists to help users understand more easily what they should and shouldn't do.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/do-and-dont-lists).

@link https://service-manual.nhs.uk/design-system/components/do-and-dont-lists

@example
\`\`\`tsx
<DoDontList type="do">
 <DoDontList.Item>Do this</DoDontList.Item>
 <DoDontList.Item>Do that</DoDontList.Item>
</DoDontList>
\`\`\``,methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}}],displayName:"DoDontList",props:{type:{defaultValue:{value:"'do'",computed:!1},required:!1}}};e.__docgenInfo={description:`Use Do and Don't lists to help users understand more easily what they should and shouldn't do.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/do-and-dont-lists).

@link https://service-manual.nhs.uk/design-system/components/do-and-dont-lists

@example
\`\`\`tsx
<DoDontList type="do">
 <DoDontList.Item>Do this</DoDontList.Item>
 <DoDontList.Item>Do that</DoDontList.Item>
</DoDontList>
\`\`\``,methods:[{name:"Item",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}}],displayName:"DoDontList",props:{type:{defaultValue:{value:"'do'",computed:!1},required:!1}}};export{e as D};
