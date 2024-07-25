import{R as a}from"./index-Cs7sjTYM.js";import{f as g}from"./index-zZQ7-8LH.js";import{B as b}from"./Base-fHV16vWU.js";import{p as v}from"./polymorphic-factory-23vJzvkj.js";import{c as h}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";const i=({width:e=24,height:t=24,className:o,...c})=>a.createElement("svg",{className:h("nhsuk-icon nhsuk-icon__chevron-left",o),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",height:t,width:e,...c},a.createElement("path",{d:"M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"}));i.displayName="ChevronLeftIcon";i.__docgenInfo={description:"",methods:[],displayName:"ChevronLeftIcon",props:{width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}}}};const n=v(({className:e,children:t,as:o="a",...c},f)=>a.createElement("div",{className:"nhsuk-back-link"},a.createElement(b,{as:o,className:h("nhsuk-back-link__link",e),...c,ref:f},a.createElement(i,null),t)));n.displayName="BackLink";n.__docgenInfo={description:"",methods:[],displayName:"BackLink",props:{className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};const E={title:"Components/Navigation/Back Link",component:n,argTypes:{as:{control:!1,description:"The component to render the `BackLink` as. This can be an anchor or a link-like component.",table:{defaultValue:{summary:"a"}}}},parameters:{docs:{description:{component:`Use back links to help users go back to the previous page in a multi-page transaction.

https://service-manual.nhs.uk/design-system/components/back-link`}}}},r={args:{children:"Go back",href:"#"},render:e=>a.createElement(n,{...e})},s={args:{children:"Go back",as:"button",onClick:g()},render:e=>a.createElement(n,{...e})};var l,m,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Go back',
    href: '#'
  },
  render: args => <BackLink {...args} />
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,k;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Go back',
    as: 'button',
    onClick: fn()
  },
  render: args => <BackLink {...args} />
}`,...(k=(u=s.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};const C=["Default","AsButton"];export{s as AsButton,r as Default,C as __namedExportsOrder,E as default};
