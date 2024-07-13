import{R as e}from"./index-Cs7sjTYM.js";import{a as r}from"./FormGroup-xcUOKacG.js";import{I as t}from"./Input-DnQkhJVW.js";import{V as l}from"./VisuallyHidden-DonKESKA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Hint-BOkj5kLS.js";import"./clsx-B-dksMZM.js";import"./Label-DmVPi9oB.js";import"./Base-fHV16vWU.js";import"./ErrorMessage-DpQgiRoT.js";import"./use-id-with-prefix-gaKPBBex.js";import"./factory-DehWrhRO.js";import"./polymorphic-factory-23vJzvkj.js";const I={title:"Components/Form Elements/Fieldset",component:r,subcomponents:{"Fieldset.Legend":r.Legend},parameters:{docs:{description:{component:`Use a fieldset to group related form inputs.

https://service-manual.nhs.uk/design-system/components/fieldset`}}}},n={render:o=>e.createElement(r,{...o},e.createElement(r.Legend,{size:"l",variant:"page-heading"},"What is your address?"),e.createElement(t,{label:e.createElement(e.Fragment,null,"Building and street ",e.createElement(l,null,"line 1 of 2"))}),e.createElement(t,{label:e.createElement(l,null,"Building and street line 2 of 2")}),e.createElement(t,{label:"Town or city",width:"two-thirds"}),e.createElement(t,{label:"County",width:"two-thirds"}),e.createElement(t,{label:"Postcode",width:"10"}))};var i,a,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(s=(a=n.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const V=["Example"];export{n as Example,V as __namedExportsOrder,I as default};
