import{r as g,R as e}from"./index-uCp2LrAq.js";import{c as r}from"./clsx-B-dksMZM.js";import{B as E}from"./Base-CQ_ipzy_.js";import{p as k}from"./polymorphic-factory-C1jPlyAy.js";import{f as w}from"./factory-Dl037jXY.js";import"./_commonjsHelpers-BosuxZz1.js";const y=g.createContext({variant:"do"}),v=()=>g.useContext(y),_=y.Provider,d=({width:o=24,height:n=24,className:a,...s})=>e.createElement("svg",{className:r("nhsuk-icon nhsuk-icon__tick",a),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",width:o,height:n,...s},e.createElement("path",{strokeWidth:"4",strokeLinecap:"round",d:"M18.4 7.8l-8.5 8.4L5.6 12",stroke:"#007f3b"}));d.displayName="TickIcon";d.__docgenInfo={description:"",methods:[],displayName:"TickIcon",props:{width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}}}};const m=({width:o=24,height:n=24,className:a,...s})=>e.createElement("svg",{className:r("nhsuk-icon nhsuk-icon__cross",a),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",height:n,width:o,...s},e.createElement("path",{d:"M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z",fill:"#d5281b"}),e.createElement("path",{d:"M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z",fill:"#d5281b"}));m.displayName="CrossIcon";m.__docgenInfo={description:"",methods:[],displayName:"CrossIcon",props:{width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}}}};const t=w(({variant:o,className:n,...a},s)=>e.createElement(_,{value:{variant:o}},e.createElement("div",{ref:s,className:r("nhsuk-do-dont-list",n),...a}))),c=k(({className:o,as:n="h2",...a},s)=>e.createElement(E,{as:n,className:r("nhsuk-do-dont-list__label",o),...a,ref:s})),u=({className:o,role:n="list",...a})=>{const{variant:s}=v();return e.createElement("ul",{className:r("nhsuk-list",{"nhsuk-list--tick":s==="do","nhsuk-list--cross":s==="dont"},o),role:n,...a})},D=({className:o,children:n,...a})=>{const{variant:s}=v();return e.createElement("li",{className:o,...a},s==="do"&&e.createElement(d,null),s==="dont"&&e.createElement(m,null),n)};t.displayName="DoDontList";c.displayName="DoDontList.Label";u.displayName="DoDontList.List";D.displayName="DoDontList.Item";t.Label=c;t.List=u;t.Item=D;t.__docgenInfo={description:"",methods:[],displayName:"DoDontList",props:{variant:{required:!0,tsType:{name:"union",raw:"'do' | 'dont'",elements:[{name:"literal",value:"'do'"},{name:"literal",value:"'dont'"}]},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"DoDontList.Label",props:{className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'h2'",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"DoDontList.List",props:{role:{defaultValue:{value:"'list'",computed:!1},required:!1}}};D.__docgenInfo={description:"",methods:[],displayName:"DoDontList.Item"};const B={title:"Components/Content Presentation/Do Don't List",component:t,subcomponents:{"DoDontList.Label":t.Label,"DoDontList.List":t.List,"DoDontList.Item":t.Item},parameters:{docs:{description:{component:`Use Do and Don't lists to help users understand more easily what they should and shouldn't do.

https://service-manual.nhs.uk/design-system/components/do-and-dont-lists`}}}},i={args:{variant:"do"},render:o=>e.createElement(t,{...o},e.createElement(t.Label,{as:"h2"},"Do"),e.createElement(t.List,null,e.createElement(t.Item,null,"cover blisters that are likely to burst with a soft plaster or dressing"),e.createElement(t.Item,null,"wash your hands before touching a burst blister"," "),e.createElement(t.Item,null,"allow the fluid in a burst blister to drain before covering it with a plaster or dressing"," ")))},l={args:{variant:"dont"},render:o=>e.createElement(t,{...o},e.createElement(t.Label,{as:"h2"},"Don't"),e.createElement(t.List,null,e.createElement(t.Item,null,"do not burst a blister yourself"),e.createElement(t.Item,null,"do not peel the skin off a burst blister"),e.createElement(t.Item,null,"do not pick at the edges of the remaining skin"),e.createElement(t.Item,null,"do not wear the shoes or use the equipment that caused your blister until it heals")))};var p,L,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(h=(L=i.parameters)==null?void 0:L.docs)==null?void 0:h.source}}};var f,b,I;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(I=(b=l.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};const M=["DoList","DontList"];export{i as DoList,l as DontList,M as __namedExportsOrder,B as default};
