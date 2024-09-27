import{R as n}from"./index-Cs7sjTYM.js";import{c as E}from"./clsx-B-dksMZM.js";import{H as l}from"./Heading-BQHCnUj7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Base-fHV16vWU.js";import"./polymorphic-factory-23vJzvkj.js";const s=({size:e,className:a,...y})=>n.createElement("span",{className:E(`nhsuk-caption-${e}`,a),...y});s.displayName="HeadingCaption";s.__docgenInfo={description:"",methods:[],displayName:"HeadingCaption",props:{size:{required:!0,tsType:{name:"Extract",elements:[{name:"union",raw:"'s' | 'm' | 'l' | 'xl'",elements:[{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"},{name:"literal",value:"'xl'"}]},{name:"union",raw:"'xl' | 'l' | 'm'",elements:[{name:"literal",value:"'xl'"},{name:"literal",value:"'l'"},{name:"literal",value:"'m'"}]}],raw:"Extract<Size, 'xl' | 'l' | 'm'>"},description:""}}};const w={title:"Styles/Typography/HeadingCaption",component:s,argTypes:{size:{control:{type:"select"},options:["xl","l","m"],table:{type:{summary:"union"}}}},parameters:{docs:{description:{component:"https://service-manual.nhs.uk/design-system/styles/typography#headings"}}}},t={args:{size:"xl"},render:e=>n.createElement(s,{...e},"nhsuk-caption-",e.size)},r={args:{size:"xl"},render:({size:e,...a})=>n.createElement(n.Fragment,null,n.createElement(s,{size:e,...a},"nhsuk-caption-",e),n.createElement(l,{size:e},"nhsuk-heading-",e))},i={args:{size:"xl"},render:({size:e,...a})=>n.createElement(n.Fragment,null,n.createElement(l,{variant:"caption-bottom",size:e},"nhsuk-heading-",e),n.createElement(s,{size:e,...a},"nhsuk-caption-",e))},o={args:{size:"xl"},render:({size:e,...a})=>n.createElement(l,{size:e},n.createElement(s,{size:e,...a},"nhsuk-caption-",e),"nhsuk-heading-",e)};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'xl'
  },
  render: args => <HeadingCaption {...args}>
      nhsuk-caption-
      {args.size}
    </HeadingCaption>
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,g,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,H,z;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(z=(H=i.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var x,k,C;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(k=o.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};const I=["XL","WithHeading","WithHeadingCaptionBottom","WithCaptionInsideHeading"];export{o as WithCaptionInsideHeading,r as WithHeading,i as WithHeadingCaptionBottom,t as XL,I as __namedExportsOrder,w as default};
