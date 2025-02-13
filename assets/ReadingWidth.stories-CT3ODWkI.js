import{R as t}from"./index-DCEVbkbO.js";import{c as d}from"./clsx-B-dksMZM.js";import{C as o}from"./Container-DsMVoRsj.js";import"./_commonjsHelpers-CqkleIqs.js";const n=({className:a,...l})=>t.createElement("div",{className:d("nhsuk-u-reading-width",a),...l});n.displayName="ReadingWidth";n.__docgenInfo={description:"",methods:[],displayName:"ReadingWidth"};const p={title:"Styles/Layout/Reading Width",component:n,argTypes:{id:{control:!1,table:{type:{summary:"string"}}}},parameters:{docs:{description:{component:`To make it easy to read, lines of text should be no longer than 70 to 80 characters.

When using the fluid-width container or wider grid columns, wrap text content with \`.nhsuk-u-reading-width\` to apply a maximum width and limit the number of characters per line.

https://service-manual.nhs.uk/design-system/styles/layout#utility-classes`}}}},e={render:a=>t.createElement(o,null,t.createElement(n,{...a},t.createElement("p",null,"This is example content which would exceed 70-80 characters per line, if used within a full width column. The .nhsuk-u-reading-width utility class will apply a maximum width and limit the number of characters per line.")))};var i,r,s;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Container>
      <ReadingWidth {...args}>
        <p>
          This is example content which would exceed 70-80 characters per line,
          if used within a full width column. The .nhsuk-u-reading-width utility
          class will apply a maximum width and limit the number of characters
          per line.
        </p>
      </ReadingWidth>
    </Container>
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const w=["Default"];export{e as Default,w as __namedExportsOrder,p as default};
