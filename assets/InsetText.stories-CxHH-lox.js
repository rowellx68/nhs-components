import{R as e}from"./index-Cs7sjTYM.js";import{c as p}from"./clsx-B-dksMZM.js";import{V as m}from"./VisuallyHidden-DonKESKA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Base-fHV16vWU.js";import"./polymorphic-factory-23vJzvkj.js";const s=({visuallyHiddenText:n="Information: ",className:i,children:d,...l})=>e.createElement("div",{className:p("nhsuk-inset-text",i),...l},e.createElement(m,null,n),d);s.displayName="InsetText";s.__docgenInfo={description:"",methods:[],displayName:"InsetText",props:{visuallyHiddenText:{required:!1,tsType:{name:"string"},description:`Visually hidden text for screen readers.

@type {string | undefined}`,defaultValue:{value:"'Information: '",computed:!1}}}};const g={title:"Components/Content Presentation/Inset Text",component:s,argTypes:{visuallyHiddenText:{control:"text",table:{type:{summary:"string"}}}},parameters:{docs:{description:{component:`Use inset text to help users identify and understand important content on the page, even if they do not read the whole page.

https://service-manual.nhs.uk/design-system/components/inset-text`}}}},t={args:{visuallyHiddenText:"Important: "},render:n=>e.createElement(s,{...n},e.createElement("p",null,"You can report any suspected side effect to the"," ",e.createElement("a",{href:"https://yellowcard.mhra.gov.uk/",title:"External website"},"UK safety scheme"),"."))};var a,r,o;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    visuallyHiddenText: 'Important: '
  },
  render: args => <InsetText {...args}>
      <p>
        You can report any suspected side effect to the{' '}
        <a href="https://yellowcard.mhra.gov.uk/" title="External website">
          UK safety scheme
        </a>
        .
      </p>
    </InsetText>
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const T=["Default"];export{t as Default,T as __namedExportsOrder,g as default};
