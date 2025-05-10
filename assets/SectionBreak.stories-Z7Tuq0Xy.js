import{R as n}from"./index-CgfFrydU.js";import{c as b}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const s=({className:e,size:t,visible:d,...u})=>n.createElement("hr",{className:b("nhsuk-section-break",{"nhsuk-section-break--visible":d,[`nhsuk-section-break--${t}`]:t},e),...u});s.displayName="SectionBreak";s.__docgenInfo={description:"",methods:[],displayName:"SectionBreak",props:{size:{required:!1,tsType:{name:"union",raw:"'m' | 'l' | 'xl'",elements:[{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},description:""},visible:{required:!1,tsType:{name:"boolean"},description:""}}};const g={title:"Styles/Typography/Section Break",component:s,parameters:{docs:{description:{component:"You can use the `nhsuk-section-break` classes on an `<hr>` element to create a thematic break between sections of content. `nhsuk-section-break` has class-based modifiers for different size margins.\n\nBy default `nhsuk-section-break` is only visible by its margin. You can add the `nhsuk-section-break--visible` class to make it visible with a separator line.\n\nhttps://service-manual.nhs.uk/design-system/styles/typography#section-break"}}}},a={args:{visible:!1},render:e=>n.createElement(s,{...e})},r={args:{visible:!0},render:e=>n.createElement(s,{...e})};var i,o,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    visible: false
  },
  render: args => <SectionBreak {...args} />
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    visible: true
  },
  render: args => <SectionBreak {...args} />
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const y=["Default","Visible"];export{a as Default,r as Visible,y as __namedExportsOrder,g as default};
