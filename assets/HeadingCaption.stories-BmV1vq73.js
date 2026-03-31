import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-DUBK-3MB.js";import{n as r,t as i}from"./clsx-keIqec4B.js";import{n as a,t as o}from"./Heading-CF8iWOAl.js";var s,c,l=t((()=>{r(),s=e(n(),1),c=({size:e,variant:t,className:n,...r})=>s.createElement(`span`,{className:i(`nhsuk-caption-${e}`,{"nhsuk-caption-bottom":t===`bottom`},n),...r}),c.displayName=`HeadingCaption`})),u,d,f,p,m,h,g;t((()=>{u=e(n(),1),a(),l(),d={title:`Styles/Typography/HeadingCaption`,component:c,argTypes:{size:{control:{type:`select`},options:[`xl`,`l`,`m`],table:{type:{summary:`union`}}}},parameters:{docs:{description:{component:`https://service-manual.nhs.uk/design-system/styles/typography#headings`}}}},f={args:{size:`xl`},render:e=>u.createElement(c,e,`nhsuk-caption-`,e.size)},p={args:{size:`xl`},render:({size:e,...t})=>u.createElement(u.Fragment,null,u.createElement(c,{size:e,...t},`nhsuk-caption-`,e),u.createElement(o,{size:e},`nhsuk-heading-`,e))},m={args:{size:`xl`},render:({size:e,...t})=>u.createElement(u.Fragment,null,u.createElement(o,{variant:`caption-bottom`,size:e},`nhsuk-heading-`,e),u.createElement(c,{size:e,...t},`nhsuk-caption-`,e))},h={args:{size:`xl`},render:({size:e,...t})=>u.createElement(o,{size:e},u.createElement(c,{size:e,...t},`nhsuk-caption-`,e),`nhsuk-heading-`,e)},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  },
  render: args => <HeadingCaption {...args}>
      nhsuk-caption-
      {args.size}
    </HeadingCaption>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  },
  render: ({
    size,
    ...args
  }) => <>
      <HeadingCaption size={size} {...args}>
        nhsuk-caption-{size}
      </HeadingCaption>
      <Heading size={size}>nhsuk-heading-{size}</Heading>
    </>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  },
  render: ({
    size,
    ...args
  }) => <>
      <Heading variant="caption-bottom" size={size}>
        nhsuk-heading-{size}
      </Heading>
      <HeadingCaption size={size} {...args}>
        nhsuk-caption-{size}
      </HeadingCaption>
    </>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  },
  render: ({
    size,
    ...args
  }) => <Heading size={size}>
      <HeadingCaption size={size} {...args}>
        nhsuk-caption-{size}
      </HeadingCaption>
      nhsuk-heading-{size}
    </Heading>
}`,...h.parameters?.docs?.source}}},g=[`XL`,`WithHeading`,`WithHeadingCaptionBottom`,`WithCaptionInsideHeading`]}))();export{h as WithCaptionInsideHeading,p as WithHeading,m as WithHeadingCaptionBottom,f as XL,g as __namedExportsOrder,d as default};