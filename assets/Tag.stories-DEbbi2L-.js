import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-DUBK-3MB.js";import{n as r,t as i}from"./Tag-Ch_eYtnd.js";var a,o,s,c,l,u,d;t((()=>{a=e(n(),1),r(),o={title:`Components/Content Presentation/Tag`,component:i,argTypes:{colour:{control:`select`,options:[void 0,`white`,`grey`,`green`,`aqua-green`,`blue`,`purple`,`pink`,`red`,`orange`,`yellow`]},children:{control:`text`}},parameters:{docs:{description:{component:`Use the tag component to show the status of something, such as a task in a task list.

https://service-manual.nhs.uk/design-system/components/tag`}}}},s={args:{children:`Active`},render:e=>a.createElement(i,e)},c=[{label:`Active`},{colour:`white`,label:`In progress`},{colour:`grey`,label:`Inactive`},{colour:`green`,label:`New`},{colour:`aqua-green`,label:`Active`},{colour:`blue`,label:`Pending`},{colour:`purple`,label:`Received`},{colour:`pink`,label:`Sent`},{colour:`red`,label:`Rejected`},{colour:`orange`,label:`Declined`},{colour:`yellow`,label:`Delayed`}],l={render:()=>a.createElement(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`}},c.map(({colour:e,label:t})=>a.createElement(i,{key:e??`default`,colour:e},t)))},u={args:{noBorder:!0,children:`Active`},render:e=>a.createElement(i,e)},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Active'
  },
  render: args => <Tag {...args} />
}`,...s.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  }}>
      {COLOUR_LABELS.map(({
      colour,
      label
    }) => <Tag key={colour ?? 'default'} colour={colour}>
          {label}
        </Tag>)}
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    noBorder: true,
    children: 'Active'
  },
  render: args => <Tag {...args} />
}`,...u.parameters?.docs?.source}}},d=[`Default`,`AllColours`,`NoBorder`]}))();export{l as AllColours,s as Default,u as NoBorder,d as __namedExportsOrder,o as default};