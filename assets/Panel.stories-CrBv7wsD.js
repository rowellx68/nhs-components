import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-Co2kQL1W.js";import{n as r,t as i}from"./Button-C6UWa0RM.js";import{n as a,t as o}from"./Panel-CiIBhEl7.js";var s,c,l,u,d,f,p,m,h,g,_;t((()=>{s=e(n(),1),r(),a(),c={title:`Components/Content Presentation/Panel`,component:o,subcomponents:{"Panel.Title":o.Title,"Panel.Body":o.Body},parameters:{docs:{description:{component:`Use a panel to highlight that users have done something successfully.

https://service-manual.nhs.uk/design-system/components/panel`}}}},l={render:()=>s.createElement(o,null,s.createElement(o.Title,null,`Booking complete`),s.createElement(o.Body,null,`We have sent you a confirmation email`))},u={render:()=>s.createElement(o,{variant:`interruption`},s.createElement(o.Title,{size:`l`},`Jodie Brown had a COVID-19 vaccine less than 3 months ago`),s.createElement(o.Body,null,s.createElement(`p`,null,`They had a COVID-19 vaccine on 25 September 2025.`),s.createElement(`p`,null,`For most people, the minimum recommended gap between COVID-19 vaccine doses is 3 months.`),s.createElement(`div`,{className:`nhsuk-button-group`},s.createElement(i,{as:`a`,variant:`reverse`,href:`#`},`Continue anyway`),s.createElement(`a`,{href:`#`},`Cancel`))))},d={name:`interruption for confirmation to cancel`,render:()=>s.createElement(o,{variant:`interruption`},s.createElement(o.Title,{size:`l`},`Confirm you want to cancel your hospital appointment`),s.createElement(o.Body,null,s.createElement(`p`,null,`You will be able to reschedule your appointment for another time, but this may delay your treatment.`),s.createElement(`p`,null,`Cancelling your appointment cannot be undone.`),s.createElement(`div`,{className:`nhsuk-button-group`},s.createElement(i,{as:`a`,variant:`reverse`,href:`#`},`Cancel appointment`),s.createElement(`a`,{href:`#`},`Change my weight`))))},f={name:`interruption for confirmation to continue`,render:()=>s.createElement(o,{variant:`interruption`},s.createElement(o.Title,{size:`l`},`Is your weight correct?`),s.createElement(o.Body,null,s.createElement(`p`,null,`You entered your weight as `,s.createElement(`b`,null,`21.4 kilograms`),`. This is lower than expected.`),s.createElement(`div`,{className:`nhsuk-button-group`},s.createElement(i,{as:`a`,variant:`reverse`,href:`#`},`Yes, this is correct`),s.createElement(`a`,{href:`#`},`Change my weight`))))},p={name:`title with size M`,render:()=>s.createElement(o,null,s.createElement(o.Title,{size:`m`},`Booking complete`),s.createElement(o.Body,null,`We have sent you a confirmation email`))},m={name:`title with size L`,render:()=>s.createElement(o,null,s.createElement(o.Title,{size:`l`},`Booking complete`),s.createElement(o.Body,null,`We have sent you a confirmation email`))},h={name:`title with size XL`,render:()=>s.createElement(o,null,s.createElement(o.Title,{size:`xl`},`Booking complete`),s.createElement(o.Body,null,`We have sent you a confirmation email`))},g={name:`with title classes and heading level`,render:()=>s.createElement(o,null,s.createElement(o.Title,{as:`h2`,size:`l`},`Booking complete`),s.createElement(o.Body,null,`We have sent you a confirmation email`))},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Panel>
      <Panel.Title>Booking complete</Panel.Title>
      <Panel.Body>We have sent you a confirmation email</Panel.Body>
    </Panel>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Panel variant="interruption">
      <Panel.Title size="l">Jodie Brown had a COVID-19 vaccine less than 3 months ago</Panel.Title>
      <Panel.Body>
        <p>They had a COVID-19 vaccine on 25 September 2025.</p>
        <p>
          For most people, the minimum recommended gap between COVID-19 vaccine doses is 3 months.
        </p>
        <div className="nhsuk-button-group">
          <Button as="a" variant="reverse" href="#">
            Continue anyway
          </Button>
          <a href="#">Cancel</a>
        </div>
      </Panel.Body>
    </Panel>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'interruption for confirmation to cancel',
  render: () => <Panel variant="interruption">
      <Panel.Title size="l">Confirm you want to cancel your hospital appointment</Panel.Title>
      <Panel.Body>
        <p>
          You will be able to reschedule your appointment for another time, but this may delay your
          treatment.
        </p>
        <p>Cancelling your appointment cannot be undone.</p>
        <div className="nhsuk-button-group">
          <Button as="a" variant="reverse" href="#">
            Cancel appointment
          </Button>
          <a href="#">Change my weight</a>
        </div>
      </Panel.Body>
    </Panel>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'interruption for confirmation to continue',
  render: () => <Panel variant="interruption">
      <Panel.Title size="l">Is your weight correct?</Panel.Title>
      <Panel.Body>
        <p>
          You entered your weight as <b>21.4 kilograms</b>. This is lower than expected.
        </p>
        <div className="nhsuk-button-group">
          <Button as="a" variant="reverse" href="#">
            Yes, this is correct
          </Button>
          <a href="#">Change my weight</a>
        </div>
      </Panel.Body>
    </Panel>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'title with size M',
  render: () => <Panel>
      <Panel.Title size="m">Booking complete</Panel.Title>
      <Panel.Body>We have sent you a confirmation email</Panel.Body>
    </Panel>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'title with size L',
  render: () => <Panel>
      <Panel.Title size="l">Booking complete</Panel.Title>
      <Panel.Body>We have sent you a confirmation email</Panel.Body>
    </Panel>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'title with size XL',
  render: () => <Panel>
      <Panel.Title size="xl">Booking complete</Panel.Title>
      <Panel.Body>We have sent you a confirmation email</Panel.Body>
    </Panel>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'with title classes and heading level',
  render: () => <Panel>
      <Panel.Title as="h2" size="l">
        Booking complete
      </Panel.Title>
      <Panel.Body>We have sent you a confirmation email</Panel.Body>
    </Panel>
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Interruption`,`InterruptionConfirmCancel`,`InterruptionConfirmContinue`,`TitleSizeM`,`TitleSizeL`,`TitleSizeXL`,`WithHeadingLevel`]}))();export{l as Default,u as Interruption,d as InterruptionConfirmCancel,f as InterruptionConfirmContinue,m as TitleSizeL,p as TitleSizeM,h as TitleSizeXL,g as WithHeadingLevel,_ as __namedExportsOrder,c as default};