import{j as r}from"./jsx-runtime-DRTy3Uxn.js";import{c as a}from"./clsx-CH7BE6MN.js";import{r as i}from"./index-BBkUAzwr.js";const f=(e,{type:n,data:s})=>{switch(n){case"set_error":return{...e,errored:s.error?e.errored.concat(s.id):e.errored.filter(t=>t!==s.id)};case"register_component":return{...e,registered:s.unregister?e.registered.filter(t=>t!==s.id):e.registered.concat(s.id)}}},m=i.createContext({isFieldset:!1,dispatch:()=>{}});m.displayName="FieldsetContext";const _=()=>i.useContext(m),p=({className:e,children:n,isPageHeading:s,asElement:t="h1",size:o,...d})=>r.jsx("legend",{className:a("nhsuk-legend",{"nhsuk-fieldset__legend--xl":s&&!o},{[`nhsuk-fieldset__legend--${o}`]:o},e),...d,children:s?r.jsx(t,{className:"nhsuk-fieldset__heading",children:n}):n}),F=({className:e,children:n,...s})=>r.jsx("fieldset",{className:a("nhsuk-fieldset",e),...s,children:n}),c=i.memo(F),l=({className:e,children:n,disableErrorLine:s,...t})=>{const[o,d]=i.useReducer(f,{registered:[],errored:[]}),u={isFieldset:!0,dispatch:d},g=o.registered.length>0,h=o.errored.length>0;return r.jsx(m.Provider,{value:u,children:g?r.jsx("div",{className:a("nhsuk-form-group",{"nhsuk-form-group--error":s?!1:h}),children:r.jsx(c,{className:e,...t,children:n})}):r.jsx(c,{className:e,...t,children:n})})};l.displayName="Fieldset";p.displayName="Fieldset.Legend";l.Legend=p;l.__docgenInfo={description:`Use a fieldset to group related form inputs.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/fieldset).

@param {string} [props.className] - Optional additional classes to add to the fieldset.
@param {boolean} [props.disableErrorLine] - Disables the error line on the fieldset.

@example
\`\`\`tsx
<Fieldset>
 <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
</Fieldset>
\`\`\``,methods:[{name:"Legend",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  children,
  isPageHeading,
  asElement: Component = 'h1',
  size,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}}],displayName:"Fieldset"};l.__docgenInfo={description:`Use a fieldset to group related form inputs.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/fieldset).

@param {string} [props.className] - Optional additional classes to add to the fieldset.
@param {boolean} [props.disableErrorLine] - Disables the error line on the fieldset.

@example
\`\`\`tsx
<Fieldset>
 <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
</Fieldset>
\`\`\``,methods:[{name:"Legend",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  children,
  isPageHeading,
  asElement: Component = 'h1',
  size,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}}],displayName:"Fieldset"};export{l as F,_ as u};
