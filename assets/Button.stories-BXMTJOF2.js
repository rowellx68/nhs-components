import{R as o}from"./index-uCp2LrAq.js";import{w as r,e as a}from"./index-DEh8bWyY.js";import{B as s}from"./Button-D0r3PsTe.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-Bqoxw6Vv.js";import"./Base-CQ_ipzy_.js";import"./polymorphic-factory-C1jPlyAy.js";import"./clsx-B-dksMZM.js";const q={title:"Components/Form Elements/Button",component:s,argTypes:{type:{control:{type:"select"},options:["button","submit","reset"],table:{type:{summary:"union"}}},variant:{control:{type:"select"},options:["primary","secondary","reverse"],table:{type:{summary:"union"}}},as:{control:!1,description:"The element to render the `Button` as. This can be a `button`, a anchor or a anchor-like component.",table:{type:{summary:"React.ElementType"},defaultValue:{summary:"button"}}}},parameters:{docs:{description:{component:`Use buttons to help users carry out an action on a page like starting an application or saving their progress.

https://service-manual.nhs.uk/design-system/components/buttons`}}}},i={args:{type:"button",children:"Primary Button",disabled:!1},render:({type:e,children:n,disabled:t,...S})=>o.createElement(s,{type:e,children:n,disabled:t,...S,"data-testid":"button"}),play:async({canvasElement:e})=>{const t=await r(e).findByTestId("button");await a(t).toHaveAttribute("type"),await a(t).toHaveClass("nhsuk-button")}},c={args:{type:"button",children:"Secondary Button",disabled:!1},render:({type:e,children:n,disabled:t})=>o.createElement(s,{variant:"secondary",type:e,children:n,disabled:t,"data-testid":"button"}),play:async({canvasElement:e})=>{const t=await r(e).findByTestId("button");await a(t).toHaveAttribute("type"),await a(t).toHaveClass("nhsuk-button--secondary")}},d={args:{type:"button",children:"Reverse Button",disabled:!1},render:({type:e,children:n,disabled:t})=>o.createElement(s,{variant:"reverse",type:e,children:n,disabled:t,"data-testid":"button"}),play:async({canvasElement:e})=>{const t=await r(e).findByTestId("button");await a(t).toHaveAttribute("type"),await a(t).toHaveClass("nhsuk-button--reverse")}},u={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:n})=>o.createElement(s,{as:"a",href:"#","data-testid":"button",children:e,disabled:n}),play:async({canvasElement:e})=>{const t=await r(e).findByTestId("button");await a(t).not.toHaveAttribute("type"),await a(t).toHaveClass("nhsuk-button"),await a(t).toHaveAttribute("href"),await a(t).toHaveAttribute("role","button"),await a(t).toHaveAttribute("draggable","false")}},l={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:n})=>o.createElement(s,{as:"a",href:"#",variant:"secondary","data-testid":"button",children:e,disabled:n}),play:async({canvasElement:e})=>{const t=await r(e).findByTestId("button");await a(t).not.toHaveAttribute("type"),await a(t).toHaveClass("nhsuk-button--secondary"),await a(t).toHaveAttribute("href"),await a(t).toHaveAttribute("role","button"),await a(t).toHaveAttribute("draggable","false")}},b={args:{children:"Button as Link",disabled:!1},render:({children:e,disabled:n})=>o.createElement(s,{as:"a",href:"#",variant:"reverse","data-testid":"button",children:e,disabled:n}),play:async({canvasElement:e})=>{const t=await r(e).findByTestId("button");await a(t).not.toHaveAttribute("type"),await a(t).toHaveClass("nhsuk-button--reverse"),await a(t).toHaveAttribute("href"),await a(t).toHaveAttribute("role","button"),await a(t).toHaveAttribute("draggable","false")}};var p,v,y;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
  }) => <Button type={type} children={children} disabled={disabled} {...props} data-testid="button" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByTestId('button');
    await expect(button).toHaveAttribute('type');
    await expect(button).toHaveClass('nhsuk-button');
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var m,h,w;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: 'button',
    children: 'Secondary Button',
    disabled: false
  },
  render: ({
    type,
    children,
    disabled
  }) => <Button variant="secondary" type={type} children={children} disabled={disabled} data-testid="button" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByTestId('button');
    await expect(button).toHaveAttribute('type');
    await expect(button).toHaveClass('nhsuk-button--secondary');
  }
}`,...(w=(h=c.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var f,H,B;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'button',
    children: 'Reverse Button',
    disabled: false
  },
  render: ({
    type,
    children,
    disabled
  }) => <Button variant="reverse" type={type} children={children} disabled={disabled} data-testid="button" />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByTestId('button');
    await expect(button).toHaveAttribute('type');
    await expect(button).toHaveClass('nhsuk-button--reverse');
  }
}`,...(B=(H=d.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var g,A,k;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled
  }) => <Button as="a" href="#" data-testid="button" children={children} disabled={disabled} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByTestId('button');
    await expect(button).not.toHaveAttribute('type');
    await expect(button).toHaveClass('nhsuk-button');
    await expect(button).toHaveAttribute('href');
    await expect(button).toHaveAttribute('role', 'button');
    await expect(button).toHaveAttribute('draggable', 'false');
  }
}`,...(k=(A=u.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var x,E,T;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled
  }) => <Button as="a" href="#" variant="secondary" data-testid="button" children={children} disabled={disabled} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByTestId('button');
    await expect(button).not.toHaveAttribute('type');
    await expect(button).toHaveClass('nhsuk-button--secondary');
    await expect(button).toHaveAttribute('href');
    await expect(button).toHaveAttribute('role', 'button');
    await expect(button).toHaveAttribute('draggable', 'false');
  }
}`,...(T=(E=l.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var C,I,L;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Button as Link',
    disabled: false
  },
  render: ({
    children,
    disabled
  }) => <Button as="a" href="#" variant="reverse" data-testid="button" children={children} disabled={disabled} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByTestId('button');
    await expect(button).not.toHaveAttribute('type');
    await expect(button).toHaveClass('nhsuk-button--reverse');
    await expect(button).toHaveAttribute('href');
    await expect(button).toHaveAttribute('role', 'button');
    await expect(button).toHaveAttribute('draggable', 'false');
  }
}`,...(L=(I=b.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const z=["Primary","Secondary","Reverse","PrimaryButtonAsLink","SecondaryButtonAsLink","ReverseButtonAsLink"];export{i as Primary,u as PrimaryButtonAsLink,d as Reverse,b as ReverseButtonAsLink,c as Secondary,l as SecondaryButtonAsLink,z as __namedExportsOrder,q as default};
