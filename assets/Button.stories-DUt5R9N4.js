import{R as t}from"./index-CgfFrydU.js";import{B as s}from"./Button-CARHHuis.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Base-CpCQsTc1.js";import"./polymorphic-factory-YJ8dk4Mh.js";import"./clsx-B-dksMZM.js";const ae={title:"Components/Form Elements/Button",component:s,argTypes:{type:{control:{type:"select"},options:["button","submit","reset"],table:{type:{summary:"union"}}},variant:{control:{type:"select"},options:["primary","secondary","secondary-solid","reverse","warning","login"],table:{type:{summary:"union"}}},as:{control:!1,description:"The element to render the `Button` as. This can be a `button`, a anchor or a anchor-like component.",table:{type:{summary:"React.ElementType"},defaultValue:{summary:"button"}}}},parameters:{docs:{description:{component:`Use buttons to help users carry out an action on a page like starting an application or saving their progress.

https://service-manual.nhs.uk/design-system/components/buttons`}}}},d={args:{type:"button",children:"Primary Button",disabled:!1},render:({type:e,children:r,disabled:a,...n})=>t.createElement(s,{type:e,children:r,disabled:a,...n})},o={args:{type:"button",children:"Secondary Button",disabled:!1},render:({type:e,children:r,disabled:a,...n})=>t.createElement(s,{variant:"secondary",type:e,children:r,disabled:a,...n})},i={args:{type:"button",children:"Secondary Button",disabled:!1},render:({type:e,children:r,disabled:a,...n})=>t.createElement(s,{variant:"secondary-solid",type:e,children:r,disabled:a,...n})},c={args:{type:"button",children:"Reverse Button",disabled:!1},render:({type:e,children:r,disabled:a,...n})=>t.createElement(s,{variant:"reverse",type:e,children:r,disabled:a,...n})},l={args:{type:"button",children:"Warning Button",disabled:!1},render:({type:e,children:r,disabled:a,...n})=>t.createElement(s,{variant:"warning",type:e,children:r,disabled:a,...n})},p={args:{type:"button",children:"Continue",disabled:!1},render:({type:e,children:r,disabled:a,...n})=>t.createElement(s,{variant:"login",type:e,children:r,disabled:a,...n})},u={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:r,...a})=>t.createElement(s,{as:"a",href:"#",children:e,disabled:r,...a})},m={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:r,...a})=>t.createElement(s,{as:"a",href:"#",variant:"secondary",children:e,disabled:r,...a})},b={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:r,...a})=>t.createElement(s,{as:"a",href:"#",variant:"secondary-solid",children:e,disabled:r,...a})},h={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:r})=>t.createElement(s,{as:"a",href:"#",variant:"reverse",children:e,disabled:r})},y={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:r})=>t.createElement(s,{as:"a",href:"#",variant:"warning",children:e,disabled:r})};var g,B,f;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(B=d.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var v,S,k;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var L,E,A;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
  }) => <Button variant="secondary-solid" type={type} children={children} disabled={disabled} {...props} />
}`,...(A=(E=i.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var R,P,W;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(P=c.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var w,T,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(T=l.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var x,_,F;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    type: 'button',
    children: 'Continue',
    disabled: false
  },
  render: ({
    type,
    children,
    disabled,
    ...props
  }) => <Button variant="login" type={type} children={children} disabled={disabled} {...props} />
}`,...(F=(_=p.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var O,U,V;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled,
    ...props
  }) => <Button as="a" href="#" children={children} disabled={disabled} {...props} />
}`,...(V=(U=u.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var j,q,z;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled,
    ...props
  }) => <Button as="a" href="#" variant="secondary" children={children} disabled={disabled} {...props} />
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var D,G,H;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled,
    ...props
  }) => <Button as="a" href="#" variant="secondary-solid" children={children} disabled={disabled} {...props} />
}`,...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var I,J,K;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled
  }) => <Button as="a" href="#" variant="reverse" children={children} disabled={disabled} />
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,N,Q;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled
  }) => <Button as="a" href="#" variant="warning" children={children} disabled={disabled} />
}`,...(Q=(N=y.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};const se=["Primary","Secondary","SecondarySolid","Reverse","Warning","Login","PrimaryButtonAsLink","SecondaryButtonAsLink","SecondarySolidButtonAsLink","ReverseButtonAsLink","WarningButtonAsLink"];export{p as Login,d as Primary,u as PrimaryButtonAsLink,c as Reverse,h as ReverseButtonAsLink,o as Secondary,m as SecondaryButtonAsLink,i as SecondarySolid,b as SecondarySolidButtonAsLink,l as Warning,y as WarningButtonAsLink,se as __namedExportsOrder,ae as default};
