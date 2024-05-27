import{R as t}from"./index-uCp2LrAq.js";import{C as e}from"./ContentsList-DzGczxmM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Base-CQ_ipzy_.js";import"./VisuallyHidden-SShDg0Sg.js";import"./polymorphic-factory-C1jPlyAy.js";import"./clsx-B-dksMZM.js";import"./factory-Dl037jXY.js";const f={title:"Components/Navigation/Contents List/ContentsList.Item",component:e.Item,tags:["polymorphic"],argTypes:{active:{control:{type:"boolean"},table:{type:{summary:"boolean"}}}},parameters:{docs:{description:{component:"This is a polymorphic component that renders an anchor element by default. You can change the element type by using the `as` prop."}}}},n={args:{active:!0,href:"#",children:"What is AMD?"},render:a=>t.createElement(e,{"aria-label":"Pages in this guide"},t.createElement(e.Item,{...a}),t.createElement(e.Item,{href:"#"},"Symptoms"),t.createElement(e.Item,{href:"#"},"Getting diagnosed"),t.createElement(e.Item,{href:"#"},"Treatment"),t.createElement(e.Item,{href:"#"},"Living with AMD"))};var r,s,o;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    active: true,
    href: '#',
    children: 'What is AMD?'
  },
  render: args => <ContentsList aria-label="Pages in this guide">
      <ContentsList.Item {...args} />
      <ContentsList.Item href="#">Symptoms</ContentsList.Item>
      <ContentsList.Item href="#">Getting diagnosed</ContentsList.Item>
      <ContentsList.Item href="#">Treatment</ContentsList.Item>
      <ContentsList.Item href="#">Living with AMD</ContentsList.Item>
    </ContentsList>
}`,...(o=(s=n.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};const C=["Default"];export{n as Default,C as __namedExportsOrder,f as default};
