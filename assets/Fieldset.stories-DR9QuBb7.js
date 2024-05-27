import{R as e}from"./index-uCp2LrAq.js";import{a as r}from"./FormGroup-BvpLCAgb.js";import{I as t}from"./Input-DKuhsIBb.js";import{V as l}from"./VisuallyHidden-SShDg0Sg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Hint-Cy41Y5xV.js";import"./clsx-B-dksMZM.js";import"./Label-BVxFGFqs.js";import"./Base-CQ_ipzy_.js";import"./ErrorMessage-C5IFgkMq.js";import"./use-id-with-prefix-ctfEntwL.js";import"./factory-Dl037jXY.js";import"./polymorphic-factory-C1jPlyAy.js";const I={title:"Components/Form Elements/Fieldset",component:r,parameters:{docs:{description:{component:`Use a fieldset to group related form inputs.

https://service-manual.nhs.uk/design-system/components/fieldset`}}}},n={render:o=>e.createElement(r,{...o},e.createElement(r.Legend,{size:"l",variant:"page-heading"},"What is your address?"),e.createElement(t,{label:e.createElement(e.Fragment,null,"Building and street ",e.createElement(l,null,"line 1 of 2"))}),e.createElement(t,{label:e.createElement(l,null,"Building and street line 2 of 2")}),e.createElement(t,{label:"Town or city",width:"two-thirds"}),e.createElement(t,{label:"County",width:"two-thirds"}),e.createElement(t,{label:"Postcode",width:"10"}))};var a,i,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <Fieldset {...args}>
      <Fieldset.Legend size="l" variant="page-heading">
        What is your address?
      </Fieldset.Legend>
      <Input label={<>
            Building and street <VisuallyHidden>line 1 of 2</VisuallyHidden>
          </>} />
      <Input label={<VisuallyHidden>Building and street line 2 of 2</VisuallyHidden>} />
      <Input label="Town or city" width="two-thirds" />
      <Input label="County" width="two-thirds" />
      <Input label="Postcode" width="10" />
    </Fieldset>
}`,...(s=(i=n.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const V=["Example"];export{n as Example,V as __namedExportsOrder,I as default};
