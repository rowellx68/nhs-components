import{R as e}from"./index-B0WjJBI_.js";import{a as t}from"./FormGroup-ChQq2RMb.js";import{I as n}from"./Input-Ddp_0lhb.js";import{V as i}from"./VisuallyHidden-DJ0EhpIr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Hint-0ExilH4f.js";import"./clsx-B-dksMZM.js";import"./Label-CLTtE-g3.js";import"./Base-EFgxhl8G.js";import"./ErrorMessage-ByH0T-HL.js";import"./use-id-with-prefix-B1wYhCnI.js";import"./factory-DuYveBF_.js";import"./polymorphic-factory-Cbd1gfW5.js";const W={title:"Components/Form Elements/Fieldset",component:t,subcomponents:{"Fieldset.Legend":t.Legend},parameters:{docs:{description:{component:`Use a fieldset to group related form inputs.

https://service-manual.nhs.uk/design-system/components/fieldset`}}}},a={render:s=>e.createElement(t,{...s},e.createElement(t.Legend,{size:"l",variant:"page-heading"},"What is your address?"),e.createElement(n,{label:e.createElement(e.Fragment,null,"Building and street ",e.createElement(i,null,"line 1 of 2"))}),e.createElement(n,{label:e.createElement(i,null,"Building and street line 2 of 2")}),e.createElement(n,{label:"Town or city",width:"two-thirds"}),e.createElement(n,{label:"County",width:"two-thirds"}),e.createElement(n,{label:"Postcode",width:"10"}))},r={render:s=>e.createElement(t,{...s},e.createElement(t.Legend,{size:"l",variant:"page-heading"},"What is your address?"))};var d,l,o;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(o=(l=a.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var m,p,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <Fieldset {...args}>
      <Fieldset.Legend size="l" variant="page-heading">
        What is your address?
      </Fieldset.Legend>
    </Fieldset>
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const v=["Example","WithPageHeadingLegend"];export{a as Example,r as WithPageHeadingLegend,v as __namedExportsOrder,W as default};
