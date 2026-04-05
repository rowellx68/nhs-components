import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-d_1BVJsF.js";import{n as r,t as i}from"./clsx-keIqec4B.js";import{n as a,t as o}from"./Base-hue09ToT.js";import{n as s,t as c}from"./factory-CbgqTCxM.js";import{n as l,t as u}from"./polymorphic-factory-DwPhYMx8.js";import{n as d,t as f}from"./nhsuk-CX7Kufhn.js";import{n as p,t as m}from"./Table-kMsEbzTw.js";var h,g,_=t((()=>{r(),f(),h=e(n(),1),s(),g=c(({children:e,className:t,...n},r)=>{let a=(0,h.useRef)(null),o=(0,h.useRef)(null);return(0,h.useImperativeHandle)(r,()=>a.current),(0,h.useEffect)(()=>{if(a.current&&!o.current)return o.current=new d(a.current),()=>{a.current?.removeAttribute(`data-nhsuk-tabs-init`)}},[a]),h.createElement(`div`,{className:i(`nhsuk-tabs`,t),"data-module":`nhsuk-tabs`,ref:a,...n},e)})})),v,y,b,x,S,C,w=t((()=>{r(),v=e(n(),1),a(),u(),_(),y=l(({className:e,children:t,as:n=`h2`,...r},a)=>v.createElement(o,{as:n,className:i(`nhsuk-tabs__title`,e),...r,ref:a},t)),b=({children:e,className:t,...n})=>v.createElement(`ul`,{className:i(`nhsuk-tabs__list`,t),...n},e),x=l(({className:e,children:t,selected:n,as:r=`a`,...a},s)=>v.createElement(`li`,{className:i(`nhsuk-tabs__list-item`,{"nhsuk-tabs__list-item--selected":n})},v.createElement(o,{as:r,className:i(`nhsuk-tabs__tab`,e),...a,ref:s},t))),S=({children:e,className:t,id:n,hidden:r,...a})=>v.createElement(`div`,{className:i(`nhsuk-tabs__panel`,{"nhsuk-tabs__panel--hidden":r},t),id:n,...a},e),C=Object.assign(g,{Title:y,List:b,ListItem:x,Panel:S}),C.displayName=`Tabs`,y.displayName=`Tabs.Title`,b.displayName=`Tabs.List`,x.displayName=`Tabs.ListItem`,S.displayName=`Tabs.Panel`})),T,E,D,O,k;t((()=>{T=e(n(),1),p(),w(),E={title:`Components/Content Presentation/Tabs`,component:C,subcomponents:{"Tabs.Title":C.Title,"Tabs.List":C.List,"Tabs.ListItem":C.ListItem,"Tabs.Panel":C.Panel},argTypes:{as:{control:!1}},parameters:{docs:{description:{component:`The tabs component lets users navigate between related sections of content, displaying 1 section at a time.

https://service-manual.nhs.uk/design-system/components/tabs`}}}},D=({caption:e})=>T.createElement(m,null,T.createElement(m.Caption,null,e),T.createElement(m.Head,null,T.createElement(m.Row,null,T.createElement(m.Cell,null,`Case manager`),T.createElement(m.Cell,{variant:`numeric`},`Cases opened`),T.createElement(m.Cell,{variant:`numeric`},`Cases closed`))),T.createElement(m.Body,null,T.createElement(m.Row,null,T.createElement(m.Cell,null,`David Francis`),T.createElement(m.Cell,{variant:`numeric`},e===`Past day`?3:e===`Past week`?24:e===`Past month`?98:1380),T.createElement(m.Cell,{variant:`numeric`},e===`Past day`?0:e===`Past week`?18:e===`Past month`?95:1472)),T.createElement(m.Row,null,T.createElement(m.Cell,null,`Paul Farmer`),T.createElement(m.Cell,{variant:`numeric`},e===`Past day`?1:e===`Past week`?16:e===`Past month`?122:1129),T.createElement(m.Cell,{variant:`numeric`},e===`Past day`?0:e===`Past week`?20:e===`Past month`?131:1083)),T.createElement(m.Row,null,T.createElement(m.Cell,null,`Rita Patel`),T.createElement(m.Cell,{variant:`numeric`},e===`Past day`?2:e===`Past week`?24:e===`Past month`?126:1539),T.createElement(m.Cell,{variant:`numeric`},e===`Past day`?0:e===`Past week`?27:e===`Past month`?142:1265)))),O={render:e=>T.createElement(C,e,T.createElement(C.Title,null,`Contents`),T.createElement(C.List,null,T.createElement(C.ListItem,{href:`#past-day`,selected:!0},`Past day`),T.createElement(C.ListItem,{href:`#past-week`},`Past week`),T.createElement(C.ListItem,{href:`#past-month`},`Past month`),T.createElement(C.ListItem,{href:`#past-year`},`Past year`)),T.createElement(C.Panel,{id:`past-day`},T.createElement(D,{caption:`Past day`})),T.createElement(C.Panel,{id:`past-week`,hidden:!0},T.createElement(D,{caption:`Past week`})),T.createElement(C.Panel,{id:`past-month`,hidden:!0},T.createElement(D,{caption:`Past month`})),T.createElement(C.Panel,{id:`past-year`,hidden:!0},T.createElement(D,{caption:`Past year`})))},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => <Tabs {...args}>
      <Tabs.Title>Contents</Tabs.Title>
      <Tabs.List>
        <Tabs.ListItem href="#past-day" selected>
          Past day
        </Tabs.ListItem>
        <Tabs.ListItem href="#past-week">Past week</Tabs.ListItem>
        <Tabs.ListItem href="#past-month">Past month</Tabs.ListItem>
        <Tabs.ListItem href="#past-year">Past year</Tabs.ListItem>
      </Tabs.List>
      <Tabs.Panel id="past-day">
        <CaseManagerTable caption="Past day" />
      </Tabs.Panel>
      <Tabs.Panel id="past-week" hidden>
        <CaseManagerTable caption="Past week" />
      </Tabs.Panel>
      <Tabs.Panel id="past-month" hidden>
        <CaseManagerTable caption="Past month" />
      </Tabs.Panel>
      <Tabs.Panel id="past-year" hidden>
        <CaseManagerTable caption="Past year" />
      </Tabs.Panel>
    </Tabs>
}`,...O.parameters?.docs?.source}}},k=[`Default`]}))();export{O as Default,k as __namedExportsOrder,E as default};