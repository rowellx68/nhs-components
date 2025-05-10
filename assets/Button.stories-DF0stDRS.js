import{R as n}from"./index-CgfFrydU.js";import{B as s}from"./Button-DIL8_iTv.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Base-CpCQsTc1.js";import"./polymorphic-factory-YJ8dk4Mh.js";import"./clsx-B-dksMZM.js";const I={title:"Components/Form Elements/Button",component:s,argTypes:{type:{control:{type:"select"},options:["button","submit","reset"],table:{type:{summary:"union"}}},variant:{control:{type:"select"},options:["primary","secondary","reverse"],table:{type:{summary:"union"}}},as:{control:!1,description:"The element to render the `Button` as. This can be a `button`, a anchor or a anchor-like component.",table:{type:{summary:"React.ElementType"},defaultValue:{summary:"button"}}}},parameters:{docs:{description:{component:`Use buttons to help users carry out an action on a page like starting an application or saving their progress.

https://service-manual.nhs.uk/design-system/components/buttons`}}}},o={args:{type:"button",children:"Primary Button",disabled:!1},render:({type:e,children:r,disabled:a,...t})=>n.createElement(s,{type:e,children:r,disabled:a,...t})},d={args:{type:"button",children:"Secondary Button",disabled:!1},render:({type:e,children:r,disabled:a,...t})=>n.createElement(s,{variant:"secondary",type:e,children:r,disabled:a,...t})},i={args:{type:"button",children:"Reverse Button",disabled:!1},render:({type:e,children:r,disabled:a,...t})=>n.createElement(s,{variant:"reverse",type:e,children:r,disabled:a,...t})},c={args:{type:"button",children:"Warning Button",disabled:!1},render:({type:e,children:r,disabled:a,...t})=>n.createElement(s,{variant:"warning",type:e,children:r,disabled:a,...t})},l={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:r,...a})=>n.createElement(s,{as:"a",href:"#",children:e,disabled:r,...a})},p={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:r,...a})=>n.createElement(s,{as:"a",href:"#",variant:"secondary",children:e,disabled:r,...a})},u={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:r})=>n.createElement(s,{as:"a",href:"#",variant:"reverse",children:e,disabled:r})},m={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:r})=>n.createElement(s,{as:"a",href:"#",variant:"warning",children:e,disabled:r})};var b,h,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,B,f;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(B=d.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var v,k,L;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(k=i.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var S,E,R;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'button',
    children: 'Warning Button',
    disabled: false
  },
  render: ({
    type,
    children,
    disabled,
    ...props
  }) => <Button variant="warning" type={type} children={children} disabled={disabled} {...props} />
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var A,P,W;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled,
    ...props
  }) => <Button as="a" href="#" children={children} disabled={disabled} {...props} />
}`,...(W=(P=l.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var w,T,x;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled,
    ...props
  }) => <Button as="a" href="#" variant="secondary" children={children} disabled={disabled} {...props} />
}`,...(x=(T=p.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var _,C,F;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled
  }) => <Button as="a" href="#" variant="reverse" children={children} disabled={disabled} />
}`,...(F=(C=u.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var O,U,V;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled
  }) => <Button as="a" href="#" variant="warning" children={children} disabled={disabled} />
}`,...(V=(U=m.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const J=["Primary","Secondary","Reverse","Warning","PrimaryButtonAsLink","SecondaryButtonAsLink","ReverseButtonAsLink","WarningButtonAsLink"];export{o as Primary,l as PrimaryButtonAsLink,i as Reverse,u as ReverseButtonAsLink,d as Secondary,p as SecondaryButtonAsLink,c as Warning,m as WarningButtonAsLink,J as __namedExportsOrder,I as default};
