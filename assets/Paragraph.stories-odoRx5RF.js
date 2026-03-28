import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-Co2kQL1W.js";import{n as r,t as i}from"./Paragraph-C2CcF50p.js";var a,o,s,c,l,u,d,f,p;t((()=>{a=e(n(),1),r(),o={title:`Styles/Typography/Paragraph`,component:i,parameters:{docs:{description:{component:`https://service-manual.nhs.uk/design-system/styles/typography#paragraphs`}}}},s={args:{children:`nhsuk-body`},render:e=>a.createElement(i,e)},c={args:{variant:`lead`,children:`nhsuk-body-l`},render:e=>a.createElement(i,e)},l={args:{variant:`small`,children:`nhsuk-body-s`},render:e=>a.createElement(i,e)},u={args:{fontSize:`64`},argTypes:{fontSize:{control:{type:`select`},options:[`64`,`48`,`32`,`24`,`22`,`19`,`16`,`14`]}},render:e=>a.createElement(i,e,`nhsuk-u-font-size-`,e.fontSize)},d={args:{fontWeight:`bold`},argTypes:{fontWeight:{control:{type:`select`},options:[`bold`,`normal`]}},render:e=>a.createElement(i,e,`nhsuk-u-font-weight-`,e.fontWeight)},f={args:{textAlignRight:!0,children:`تعديل اتجاه الكتابة باللغة العربية ليكون من اليمين الى اليسار`},render:e=>a.createElement(a.Fragment,null,a.createElement(i,e),a.createElement(i,null,`Modify the direction of writing in Arabic to be from right to left`))},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'nhsuk-body'
  },
  render: args => <Paragraph {...args} />
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'lead',
    children: 'nhsuk-body-l'
  },
  render: args => <Paragraph {...args} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'small',
    children: 'nhsuk-body-s'
  },
  render: args => <Paragraph {...args} />
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    fontSize: '64'
  },
  argTypes: {
    fontSize: {
      control: {
        type: 'select'
      },
      options: ['64', '48', '32', '24', '22', '19', '16', '14']
    }
  },
  render: args => <Paragraph {...args}>
      nhsuk-u-font-size-
      {args.fontSize}
    </Paragraph>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    fontWeight: 'bold'
  },
  argTypes: {
    fontWeight: {
      control: {
        type: 'select'
      },
      options: ['bold', 'normal']
    }
  },
  render: args => <Paragraph {...args}>
      nhsuk-u-font-weight-
      {args.fontWeight}
    </Paragraph>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    textAlignRight: true,
    children: 'تعديل اتجاه الكتابة باللغة العربية ليكون من اليمين الى اليسار'
  },
  render: args => <>
      <Paragraph {...args} />
      <Paragraph>Modify the direction of writing in Arabic to be from right to left</Paragraph>
    </>
}`,...f.parameters?.docs?.source}}},p=[`Default`,`Lead`,`Small`,`FontSizes`,`FontWeights`,`TextAlignRight`]}))();export{s as Default,u as FontSizes,d as FontWeights,c as Lead,l as Small,f as TextAlignRight,p as __namedExportsOrder,o as default};