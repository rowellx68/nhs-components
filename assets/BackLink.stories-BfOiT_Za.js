import{R as a}from"./index-CgfFrydU.js";import{fn as g}from"./index-BgJgh-x_.js";import{B as b}from"./Base-CpCQsTc1.js";import{p as v}from"./polymorphic-factory-YJ8dk4Mh.js";import{c as k}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-CqkleIqs.js";const o=({className:e,...t})=>a.createElement("svg",{className:k("nhsuk-icon nhsuk-icon__chevron-left",e),...t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",height:"24",width:"24"},a.createElement("path",{d:"M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"}));o.displayName="ChevronLeftIcon";o.__docgenInfo={description:"",methods:[],displayName:"ChevronLeftIcon"};const n=v(({className:e,children:t,as:u="a",...h},f)=>a.createElement("div",{className:"nhsuk-back-link"},a.createElement(b,{as:u,className:k("nhsuk-back-link__link",e),...h,ref:f},a.createElement(o,null),t)));n.displayName="BackLink";n.__docgenInfo={description:"",methods:[],displayName:"BackLink",props:{className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};const C={title:"Components/Navigation/Back Link",component:n,argTypes:{as:{control:!1,description:"The component to render the `BackLink` as. This can be an anchor or a link-like component.",table:{defaultValue:{summary:"a"}}}},parameters:{docs:{description:{component:`Use back links to help users go back to the previous page in a multi-page transaction.

https://service-manual.nhs.uk/design-system/components/back-link`}}}},r={args:{children:"Go back",href:"#"},render:e=>a.createElement(n,{...e})},s={args:{children:"Go back",as:"button",onClick:g()},render:e=>a.createElement(n,{...e})};var c,i,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Go back',
    href: '#'
  },
  render: args => <BackLink {...args} />
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Go back',
    as: 'button',
    onClick: fn()
  },
  render: args => <BackLink {...args} />
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const T=["Default","AsButton"];export{s as AsButton,r as Default,T as __namedExportsOrder,C as default};
