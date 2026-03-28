import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-Co2kQL1W.js";import{n as r,t as i}from"./VisuallyHidden-ToMc32Nf.js";import{i as a,r as o}from"./FormGroup-Bt7mR26Z.js";import{n as s,t as c}from"./Input-D5LgrhXI.js";var l,u,d,f,p;t((()=>{l=e(n(),1),r(),s(),a(),u={title:`Components/Form Elements/Fieldset`,component:o,subcomponents:{"Fieldset.Legend":o.Legend},parameters:{docs:{description:{component:`Use a fieldset to group related form inputs.

https://service-manual.nhs.uk/design-system/components/fieldset`}}}},d={render:e=>l.createElement(o,e,l.createElement(o.Legend,{size:`l`,variant:`page-heading`},`What is your address?`),l.createElement(c,{label:l.createElement(l.Fragment,null,`Building and street `,l.createElement(i,null,`line 1 of 2`))}),l.createElement(c,{label:l.createElement(i,null,`Building and street line 2 of 2`)}),l.createElement(c,{label:`Town or city`,width:`two-thirds`}),l.createElement(c,{label:`County`,width:`two-thirds`}),l.createElement(c,{label:`Postcode`,width:`10`}))},f={render:e=>l.createElement(o,e,l.createElement(o.Legend,{size:`l`,variant:`page-heading`},`What is your address?`))},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Fieldset {...args}>
      <Fieldset.Legend size="l" variant="page-heading">
        What is your address?
      </Fieldset.Legend>
    </Fieldset>
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithPageHeadingLegend`]}))();export{d as Default,f as WithPageHeadingLegend,p as __namedExportsOrder,u as default};