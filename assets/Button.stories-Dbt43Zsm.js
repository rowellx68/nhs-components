import{R as s}from"./index-uCp2LrAq.js";import{B as a}from"./Button-BLXOO0Mk.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Base-CQ_ipzy_.js";import"./polymorphic-factory-C1jPlyAy.js";import"./clsx-B-dksMZM.js";const j={title:"Components/Form Elements/Button",component:a,argTypes:{type:{control:{type:"select"},options:["button","submit","reset"],table:{type:{summary:"union"}}},variant:{control:{type:"select"},options:["primary","secondary","reverse"],table:{type:{summary:"union"}}},as:{control:!1,description:"The element to render the `Button` as. This can be a `button`, a anchor or a anchor-like component.",table:{type:{summary:"React.ElementType"},defaultValue:{summary:"button"}}}},parameters:{docs:{description:{component:`Use buttons to help users carry out an action on a page like starting an application or saving their progress.

https://service-manual.nhs.uk/design-system/components/buttons`}}}},o={args:{type:"button",children:"Primary Button",disabled:!1},render:({type:e,children:r,disabled:n,...t})=>s.createElement(a,{type:e,children:r,disabled:n,...t})},d={args:{type:"button",children:"Secondary Button",disabled:!1},render:({type:e,children:r,disabled:n,...t})=>s.createElement(a,{variant:"secondary",type:e,children:r,disabled:n,...t})},i={args:{type:"button",children:"Reverse Button",disabled:!1},render:({type:e,children:r,disabled:n,...t})=>s.createElement(a,{variant:"reverse",type:e,children:r,disabled:n,...t})},c={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:r,...n})=>s.createElement(a,{as:"a",href:"#",children:e,disabled:r,...n})},l={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:r,...n})=>s.createElement(a,{as:"a",href:"#",variant:"secondary",children:e,disabled:r,...n})},p={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:r})=>s.createElement(a,{as:"a",href:"#",variant:"reverse",children:e,disabled:r})};var u,m,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    type: 'button',
    children: 'Primary Button',
    disabled: false
  },
  render: ({
    type,
    children,
    disabled,
    ...props
  }) => <Button type={type} children={children} disabled={disabled} {...props} />
}`,...(y=(m=o.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var b,h,B;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'button',
    children: 'Secondary Button',
    disabled: false
  },
  render: ({
    type,
    children,
    disabled,
    ...props
  }) => <Button variant="secondary" type={type} children={children} disabled={disabled} {...props} />
}`,...(B=(h=d.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var g,f,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'button',
    children: 'Reverse Button',
    disabled: false
  },
  render: ({
    type,
    children,
    disabled,
    ...props
  }) => <Button variant="reverse" type={type} children={children} disabled={disabled} {...props} />
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var k,L,S;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled,
    ...props
  }) => <Button as="a" href="#" children={children} disabled={disabled} {...props} />
}`,...(S=(L=c.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var E,R,A;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled,
    ...props
  }) => <Button as="a" href="#" variant="secondary" children={children} disabled={disabled} {...props} />
}`,...(A=(R=l.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};var P,T,x;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled
  }) => <Button as="a" href="#" variant="reverse" children={children} disabled={disabled} />
}`,...(x=(T=p.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const q=["Primary","Secondary","Reverse","PrimaryButtonAsLink","SecondaryButtonAsLink","ReverseButtonAsLink"];export{o as Primary,c as PrimaryButtonAsLink,i as Reverse,p as ReverseButtonAsLink,d as Secondary,l as SecondaryButtonAsLink,q as __namedExportsOrder,j as default};
