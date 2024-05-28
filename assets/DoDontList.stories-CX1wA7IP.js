import{r as I,R as e}from"./index-uCp2LrAq.js";import{c as r}from"./clsx-B-dksMZM.js";import{B as k}from"./Base-CQ_ipzy_.js";import{p as E}from"./polymorphic-factory-C1jPlyAy.js";import{f as w}from"./factory-Dl037jXY.js";import"./_commonjsHelpers-BosuxZz1.js";const y=I.createContext({variant:"do"}),v=()=>I.useContext(y),_=y.Provider,d=({width:s=24,height:n=24,className:a,...o})=>e.createElement("svg",{className:r("nhsuk-icon nhsuk-icon__tick",a),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",width:s,height:n,...o},e.createElement("path",{strokeWidth:"4",strokeLinecap:"round",d:"M18.4 7.8l-8.5 8.4L5.6 12",stroke:"#007f3b"}));d.displayName="TickIcon";d.__docgenInfo={description:"",methods:[],displayName:"TickIcon",props:{width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}}}};const c=({width:s=24,height:n=24,className:a,...o})=>e.createElement("svg",{className:r("nhsuk-icon nhsuk-icon__cross",a),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",height:n,width:s,...o},e.createElement("path",{d:"M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z",fill:"#d5281b"}),e.createElement("path",{d:"M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z",fill:"#d5281b"}));c.displayName="CrossIcon";c.__docgenInfo={description:"",methods:[],displayName:"CrossIcon",props:{width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}}}};const t=w(({variant:s,className:n,...a},o)=>e.createElement(_,{value:{variant:s}},e.createElement("div",{ref:o,className:r("nhsuk-do-dont-list",n),...a}))),m=E(({className:s,as:n="h2",...a},o)=>e.createElement(k,{as:n,className:r("nhsuk-do-dont-list__label",s),...a,ref:o})),u=({className:s,role:n="list",...a})=>{const{variant:o}=v();return e.createElement("ul",{className:r("nhsuk-list",{"nhsuk-list nhsuk-list--tick":o==="do","nhsuk-list nhsuk-list--cross":o==="dont"},s),role:n,...a})},p=({className:s,children:n,...a})=>{const{variant:o}=v();return e.createElement("li",{className:s,...a},o==="do"&&e.createElement(d,null),o==="dont"&&e.createElement(c,null),n)};t.displayName="DoDontList";m.displayName="DoDontListLabel";u.displayName="DoDontListList";p.displayName="DoDontListListItem";t.Label=m;t.List=u;t.Item=p;t.__docgenInfo={description:"",methods:[],displayName:"DoDontList",props:{variant:{required:!0,tsType:{name:"union",raw:"'do' | 'dont'",elements:[{name:"literal",value:"'do'"},{name:"literal",value:"'dont'"}]},description:""}}};m.__docgenInfo={description:"",methods:[],displayName:"DoDontListLabel",props:{className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'h2'",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"DoDontListList",props:{role:{defaultValue:{value:"'list'",computed:!1},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"DoDontListListItem"};const B={title:"Components/Content Presentation/Do Don't List",component:t,parameters:{docs:{description:{component:`Use Do and Don't lists to help users understand more easily what they should and shouldn't do.

https://service-manual.nhs.uk/design-system/components/do-and-dont-lists`}}}},i={args:{variant:"do"},render:s=>e.createElement(t,{...s},e.createElement(t.Label,{as:"h2"},"Do"),e.createElement(t.List,null,e.createElement(t.Item,null,"cover blisters that are likely to burst with a soft plaster or dressing"),e.createElement(t.Item,null,"wash your hands before touching a burst blister"," "),e.createElement(t.Item,null,"allow the fluid in a burst blister to drain before covering it with a plaster or dressing"," ")))},l={args:{variant:"dont"},render:s=>e.createElement(t,{...s},e.createElement(t.Label,{as:"h2"},"Don't"),e.createElement(t.List,null,e.createElement(t.Item,null,"do not burst a blister yourself"),e.createElement(t.Item,null,"do not peel the skin off a burst blister"),e.createElement(t.Item,null,"do not pick at the edges of the remaining skin"),e.createElement(t.Item,null,"do not wear the shoes or use the equipment that caused your blister until it heals")))};var D,h,L;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(L=(h=i.parameters)==null?void 0:h.docs)==null?void 0:L.source}}};var f,b,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const M=["DoList","DontList"];export{i as DoList,l as DontList,M as __namedExportsOrder,B as default};
