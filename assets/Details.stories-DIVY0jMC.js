import{R as e}from"./index-uCp2LrAq.js";import{w as m,u}from"./index-DEh8bWyY.js";import{D as n}from"./Details-CRrkBqfo.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bqoxw6Vv.js";import"./clsx-B-dksMZM.js";import"./factory-Dl037jXY.js";const h={title:"Components/Content Presentation/Details",component:n,parameters:{docs:{description:{component:`Make a page easier to scan by letting users reveal more detailed information only if they need it.

https://service-manual.nhs.uk/design-system/components/details`}}}},t={render:a=>e.createElement(n,{...a,"data-testid":"details"},e.createElement(n.Summary,{"data-testid":"details-summary"},"How to find your NHS number"),e.createElement(n.Text,{"data-testid":"details-text"},e.createElement("p",null,"An NHS number is a 10 digit number, like 485 777 3456."),e.createElement("p",null,"You can find your NHS number by logging in to a GP online service or on any document the NHS has sent you, such as your:"),e.createElement("ul",null,e.createElement("li",null,"prescriptions"),e.createElement("li",null,"test results"),e.createElement("li",null,"hospital referral letters"),e.createElement("li",null,"appointment letters")),e.createElement("p",null,"Ask your GP surgery for help if you can't find your NHS number."))),play:async({canvasElement:a})=>{const s=m(a);await s.findByTestId("details"),await s.findByTestId("details-text");const o=await s.findByTestId("details-summary");await u.click(o)}};var i,r,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <Details {...args} data-testid="details">
      <Details.Summary data-testid="details-summary">
        How to find your NHS number
      </Details.Summary>
      <Details.Text data-testid="details-text">
        <p>An NHS number is a 10 digit number, like 485 777 3456.</p>
        <p>
          You can find your NHS number by logging in to a GP online service or
          on any document the NHS has sent you, such as your:
        </p>
        <ul>
          <li>prescriptions</li>
          <li>test results</li>
          <li>hospital referral letters</li>
          <li>appointment letters</li>
        </ul>
        <p>Ask your GP surgery for help if you can't find your NHS number.</p>
      </Details.Text>
    </Details>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByTestId('details');
    await canvas.findByTestId('details-text');
    const summary = await canvas.findByTestId('details-summary');
    await userEvent.click(summary);
  }
}`,...(l=(r=t.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,h as default};
