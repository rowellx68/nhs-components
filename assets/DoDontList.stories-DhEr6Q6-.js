import{r as g,R as t}from"./index-DCEVbkbO.js";import{c as r}from"./clsx-B-dksMZM.js";import{B as E}from"./Base-DkqVgamr.js";import{p as k}from"./polymorphic-factory-Bh8XY5CE.js";import{f as w}from"./factory-B-vprWl1.js";import"./_commonjsHelpers-CqkleIqs.js";const y=g.createContext({variant:"do"}),v=()=>g.useContext(y),_=y.Provider,c=({className:o,...s})=>t.createElement("svg",{className:r("nhsuk-icon nhsuk-icon__tick",o),...s,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",width:"24",height:"24"},t.createElement("path",{strokeWidth:"4",strokeLinecap:"round",d:"M18.4 7.8l-8.5 8.4L5.6 12",stroke:"#007f3b"}));c.displayName="TickIcon";c.__docgenInfo={description:"",methods:[],displayName:"TickIcon"};const d=({className:o,...s})=>t.createElement("svg",{className:r("nhsuk-icon nhsuk-icon__cross",o),...s,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",height:"24",width:"24"},t.createElement("path",{d:"M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z",fill:"#d5281b"}),t.createElement("path",{d:"M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z",fill:"#d5281b"}));d.displayName="CrossIcon";d.__docgenInfo={description:"",methods:[],displayName:"CrossIcon"};const e=w(({variant:o,className:s,...a},n)=>t.createElement(_,{value:{variant:o}},t.createElement("div",{ref:n,className:r("nhsuk-do-dont-list",s),...a}))),m=k(({className:o,as:s="h2",...a},n)=>t.createElement(E,{as:s,className:r("nhsuk-do-dont-list__label",o),...a,ref:n})),D=({className:o,role:s="list",...a})=>{const{variant:n}=v();return t.createElement("ul",{className:r("nhsuk-list",{"nhsuk-list--tick":n==="do","nhsuk-list--cross":n==="dont"},o),role:s,...a})},u=({className:o,children:s,...a})=>{const{variant:n}=v();return t.createElement("li",{className:o,...a},n==="do"&&t.createElement(c,null),n==="dont"&&t.createElement(d,null),s)};e.displayName="DoDontList";m.displayName="DoDontList.Label";D.displayName="DoDontList.List";u.displayName="DoDontList.Item";e.Label=m;e.List=D;e.Item=u;e.__docgenInfo={description:"",methods:[],displayName:"DoDontList",props:{variant:{required:!0,tsType:{name:"union",raw:"'do' | 'dont'",elements:[{name:"literal",value:"'do'"},{name:"literal",value:"'dont'"}]},description:""}}};m.__docgenInfo={description:"",methods:[],displayName:"DoDontList.Label",props:{className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'h2'",computed:!1}}}};D.__docgenInfo={description:"",methods:[],displayName:"DoDontList.List",props:{role:{defaultValue:{value:"'list'",computed:!1},required:!1}}};u.__docgenInfo={description:"",methods:[],displayName:"DoDontList.Item"};const M={title:"Components/Content Presentation/Do Don't List",component:e,subcomponents:{"DoDontList.Label":e.Label,"DoDontList.List":e.List,"DoDontList.Item":e.Item},parameters:{docs:{description:{component:`Use Do and Don't lists to help users understand more easily what they should and shouldn't do.

https://service-manual.nhs.uk/design-system/components/do-and-dont-lists`}}}},i={args:{variant:"do"},render:o=>t.createElement(e,{...o},t.createElement(e.Label,{as:"h2"},"Do"),t.createElement(e.List,null,t.createElement(e.Item,null,"cover blisters that are likely to burst with a soft plaster or dressing"),t.createElement(e.Item,null,"wash your hands before touching a burst blister"," "),t.createElement(e.Item,null,"allow the fluid in a burst blister to drain before covering it with a plaster or dressing"," ")))},l={args:{variant:"dont"},render:o=>t.createElement(e,{...o},t.createElement(e.Label,{as:"h2"},"Don't"),t.createElement(e.List,null,t.createElement(e.Item,null,"do not burst a blister yourself"),t.createElement(e.Item,null,"do not peel the skin off a burst blister"),t.createElement(e.Item,null,"do not pick at the edges of the remaining skin"),t.createElement(e.Item,null,"do not wear the shoes or use the equipment that caused your blister until it heals")))};var p,L,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'do'
  },
  render: args => <DoDontList {...args}>
      <DoDontList.Label as="h2">Do</DoDontList.Label>
      <DoDontList.List>
        <DoDontList.Item>
          cover blisters that are likely to burst with a soft plaster or
          dressing
        </DoDontList.Item>
        <DoDontList.Item>
          wash your hands before touching a burst blister{' '}
        </DoDontList.Item>
        <DoDontList.Item>
          allow the fluid in a burst blister to drain before covering it with a
          plaster or dressing{' '}
        </DoDontList.Item>
      </DoDontList.List>
    </DoDontList>
}`,...(h=(L=i.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var b,f,I;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: 'dont'
  },
  render: args => <DoDontList {...args}>
      <DoDontList.Label as="h2">Don't</DoDontList.Label>
      <DoDontList.List>
        <DoDontList.Item>do not burst a blister yourself</DoDontList.Item>
        <DoDontList.Item>
          do not peel the skin off a burst blister
        </DoDontList.Item>
        <DoDontList.Item>
          do not pick at the edges of the remaining skin
        </DoDontList.Item>
        <DoDontList.Item>
          do not wear the shoes or use the equipment that caused your blister
          until it heals
        </DoDontList.Item>
      </DoDontList.List>
    </DoDontList>
}`,...(I=(f=l.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};const P=["DoList","DontList"];export{i as DoList,l as DontList,P as __namedExportsOrder,M as default};
