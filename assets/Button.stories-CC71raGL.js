import{R as r}from"./index-uCp2LrAq.js";import{B as n}from"./Button-BL8rMJVn.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Base-CQ_ipzy_.js";import"./polymorphic-factory-C1jPlyAy.js";import"./clsx-B-dksMZM.js";const j={title:"Components/Form Elements/Button",component:n,argTypes:{type:{control:{type:"select"},options:["button","submit","reset"],table:{type:{summary:"union"}}},variant:{control:{type:"select"},options:["primary","secondary","reverse"],table:{type:{summary:"union"}}},as:{control:!1,description:"The element to render the `Button` as. This can be a `button`, a anchor or a anchor-like component.",table:{type:{summary:"React.ElementType"},defaultValue:{summary:"button"}}}},parameters:{docs:{description:{component:`Use buttons to help users carry out an action on a page like starting an application or saving their progress.

https://service-manual.nhs.uk/design-system/components/buttons`}}}},s={args:{type:"button",children:"Primary Button",disabled:!1},render:({type:e,children:t,disabled:a,...x})=>r.createElement(n,{type:e,children:t,disabled:a,...x,"data-testid":"button"})},d={args:{type:"button",children:"Secondary Button",disabled:!1},render:({type:e,children:t,disabled:a})=>r.createElement(n,{variant:"secondary",type:e,children:t,disabled:a,"data-testid":"button"})},o={args:{type:"button",children:"Reverse Button",disabled:!1},render:({type:e,children:t,disabled:a})=>r.createElement(n,{variant:"reverse",type:e,children:t,disabled:a,"data-testid":"button"})},i={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:t})=>r.createElement(n,{as:"a",href:"#","data-testid":"button",children:e,disabled:t})},c={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:t})=>r.createElement(n,{as:"a",href:"#",variant:"secondary","data-testid":"button",children:e,disabled:t})},l={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:t})=>r.createElement(n,{as:"a",href:"#",variant:"reverse","data-testid":"button",children:e,disabled:t})};var u,p,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
  }) => <Button type={type} children={children} disabled={disabled} {...props} data-testid="button" />
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var b,y,h;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'button',
    children: 'Secondary Button',
    disabled: false
  },
  render: ({
    type,
    children,
    disabled
  }) => <Button variant="secondary" type={type} children={children} disabled={disabled} data-testid="button" />
}`,...(h=(y=d.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var B,g,f;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'button',
    children: 'Reverse Button',
    disabled: false
  },
  render: ({
    type,
    children,
    disabled
  }) => <Button variant="reverse" type={type} children={children} disabled={disabled} data-testid="button" />
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,k,L;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled
  }) => <Button as="a" href="#" data-testid="button" children={children} disabled={disabled} />
}`,...(L=(k=i.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var S,E,R;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled
  }) => <Button as="a" href="#" variant="secondary" data-testid="button" children={children} disabled={disabled} />
}`,...(R=(E=c.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var A,P,T;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled
  }) => <Button as="a" href="#" variant="reverse" data-testid="button" children={children} disabled={disabled} />
}`,...(T=(P=l.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const q=["Primary","Secondary","Reverse","PrimaryButtonAsLink","SecondaryButtonAsLink","ReverseButtonAsLink"];export{s as Primary,i as PrimaryButtonAsLink,o as Reverse,l as ReverseButtonAsLink,d as Secondary,c as SecondaryButtonAsLink,q as __namedExportsOrder,j as default};
