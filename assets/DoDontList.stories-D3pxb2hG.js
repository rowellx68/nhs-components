import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-Co2kQL1W.js";import{n as r,t as i}from"./clsx-keIqec4B.js";import{n as a,t as o}from"./Base-D8qVFz7v.js";import{n as s,t as c}from"./factory-BtzG2lhR.js";import{n as l,t as u}from"./polymorphic-factory-CfNDVxws.js";var d,f,p=t((()=>{r(),d=e(n(),1),f=({className:e,...t})=>d.createElement(`svg`,{className:i(`nhsuk-icon nhsuk-icon--cross`,e),...t,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,"aria-hidden":`true`,focusable:`false`,width:`16`,height:`16`},d.createElement(`path`,{d:`M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z`})),f.displayName=`CrossIcon`})),m,h,g=t((()=>{r(),m=e(n(),1),h=({className:e,...t})=>m.createElement(`svg`,{className:i(`nhsuk-icon nhsuk-icon--tick`,e),...t,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,"aria-hidden":`true`,focusable:`false`,width:`16`,height:`16`},m.createElement(`path`,{d:`M11.4 18.8a2 2 0 0 1-2.7.1h-.1L4 14.1a1.5 1.5 0 0 1 2.1-2L10 16l8.1-8.1a1.5 1.5 0 1 1 2.2 2l-8.9 9Z`})),h.displayName=`TickIcon`})),_,v,y,b,x,S=t((()=>{r(),_=e(n(),1),a(),p(),g(),s(),u(),v=c(({className:e,children:t,...n},r)=>_.createElement(`div`,{ref:r,className:i(`nhsuk-card nhsuk-card--feature`,e),...n},_.createElement(`div`,{className:`nhsuk-card__content`},t))),y=l(({className:e,as:t=`h2`,...n},r)=>_.createElement(o,{as:t,className:i(`nhsuk-card__heading`,e),...n,ref:r})),b=({variant:e,className:t,role:n=`list`,...r})=>_.createElement(`ul`,{className:i(`nhsuk-list`,{"nhsuk-list--tick":e===`do`,"nhsuk-list--cross":e===`dont`},t),role:n,...r}),x=({variant:e,className:t,children:n,...r})=>_.createElement(`li`,{className:t,...r},e===`do`&&_.createElement(h,null),e===`dont`&&_.createElement(f,null),n),v.displayName=`DoDontList`,y.displayName=`DoDontList.Title`,b.displayName=`DoDontList.List`,x.displayName=`DoDontList.Item`,v.Title=y,v.List=b,v.Item=x})),C,w,T,E,D,O,k,A;t((()=>{C=e(n(),1),S(),w={title:`Components/Content Presentation/Do Don't List`,component:v,subcomponents:{"DoDontList.Title":v.Title,"DoDontList.List":v.List,"DoDontList.Item":v.Item},parameters:{docs:{description:{component:`Use Do and Don't lists to help users understand more easily what they should and shouldn't do.

https://service-manual.nhs.uk/design-system/components/do-and-dont-lists`}}}},T={render:()=>C.createElement(v,null,C.createElement(v.Title,null,`Do`),C.createElement(v.List,{variant:`do`},C.createElement(v.Item,{variant:`do`},`cover blisters with a soft plaster or padded dressing`),C.createElement(v.Item,{variant:`do`},`wash your hands before touching a burst blister`),C.createElement(v.Item,{variant:`do`},`allow the fluid in a burst blister to drain before covering it with a plaster or dressing`)))},E={name:`(do) with custom prefix`,render:()=>C.createElement(v,null,C.createElement(v.Title,null,`Do`),C.createElement(v.List,{variant:`do`},C.createElement(v.Item,{variant:`do`},`always cover blisters with a soft plaster or padded dressing`),C.createElement(v.Item,{variant:`do`},`always wash your hands before touching a burst blister`),C.createElement(v.Item,{variant:`do`},`always allow the fluid in a burst blister to drain before covering it with a plaster or dressing`)))},D={name:`(don't)`,render:()=>C.createElement(v,null,C.createElement(v.Title,null,`Don't`),C.createElement(v.List,{variant:`dont`},C.createElement(v.Item,{variant:`dont`},`do not burst a blister yourself`),C.createElement(v.Item,{variant:`dont`},`do not peel the skin off a burst blister`),C.createElement(v.Item,{variant:`dont`},`do not pick at the edges of the remaining skin`),C.createElement(v.Item,{variant:`dont`},`do not wear the shoes or use the equipment that caused your blister until it heals`)))},O={name:`(don't) with custom prefix`,render:()=>C.createElement(v,null,C.createElement(v.Title,null,`Never`),C.createElement(v.List,{variant:`dont`},C.createElement(v.Item,{variant:`dont`},`never burst a blister yourself`),C.createElement(v.Item,{variant:`dont`},`never peel the skin off a burst blister`),C.createElement(v.Item,{variant:`dont`},`never pick at the edges of the remaining skin`),C.createElement(v.Item,{variant:`dont`},`never wear the shoes or use the equipment that caused your blister until it heals`)))},k={name:`(don't) with hidden prefix`,render:()=>C.createElement(v,null,C.createElement(v.Title,null,`Don't`),C.createElement(v.List,{variant:`dont`},C.createElement(v.Item,{variant:`dont`},`avoid bursting a blister yourself`),C.createElement(v.Item,{variant:`dont`},`certainly don't peel the skin off a burst blister`),C.createElement(v.Item,{variant:`dont`},`absolutely do not pick at the edges of the remaining skin`),C.createElement(v.Item,{variant:`dont`},`please don't wear the shoes or use the equipment that caused your blister until it heals`)))},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <DoDontList>
      <DoDontList.Title>Do</DoDontList.Title>
      <DoDontList.List variant="do">
        <DoDontList.Item variant="do">
          cover blisters with a soft plaster or padded dressing
        </DoDontList.Item>
        <DoDontList.Item variant="do">
          wash your hands before touching a burst blister
        </DoDontList.Item>
        <DoDontList.Item variant="do">
          allow the fluid in a burst blister to drain before covering it with a plaster or dressing
        </DoDontList.Item>
      </DoDontList.List>
    </DoDontList>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '(do) with custom prefix',
  render: () => <DoDontList>
      <DoDontList.Title>Do</DoDontList.Title>
      <DoDontList.List variant="do">
        <DoDontList.Item variant="do">
          always cover blisters with a soft plaster or padded dressing
        </DoDontList.Item>
        <DoDontList.Item variant="do">
          always wash your hands before touching a burst blister
        </DoDontList.Item>
        <DoDontList.Item variant="do">
          always allow the fluid in a burst blister to drain before covering it with a plaster or
          dressing
        </DoDontList.Item>
      </DoDontList.List>
    </DoDontList>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '(don\\'t)',
  render: () => <DoDontList>
      <DoDontList.Title>Don't</DoDontList.Title>
      <DoDontList.List variant="dont">
        <DoDontList.Item variant="dont">do not burst a blister yourself</DoDontList.Item>
        <DoDontList.Item variant="dont">do not peel the skin off a burst blister</DoDontList.Item>
        <DoDontList.Item variant="dont">
          do not pick at the edges of the remaining skin
        </DoDontList.Item>
        <DoDontList.Item variant="dont">
          do not wear the shoes or use the equipment that caused your blister until it heals
        </DoDontList.Item>
      </DoDontList.List>
    </DoDontList>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: '(don\\'t) with custom prefix',
  render: () => <DoDontList>
      <DoDontList.Title>Never</DoDontList.Title>
      <DoDontList.List variant="dont">
        <DoDontList.Item variant="dont">never burst a blister yourself</DoDontList.Item>
        <DoDontList.Item variant="dont">never peel the skin off a burst blister</DoDontList.Item>
        <DoDontList.Item variant="dont">
          never pick at the edges of the remaining skin
        </DoDontList.Item>
        <DoDontList.Item variant="dont">
          never wear the shoes or use the equipment that caused your blister until it heals
        </DoDontList.Item>
      </DoDontList.List>
    </DoDontList>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '(don\\'t) with hidden prefix',
  render: () => <DoDontList>
      <DoDontList.Title>Don't</DoDontList.Title>
      <DoDontList.List variant="dont">
        <DoDontList.Item variant="dont">avoid bursting a blister yourself</DoDontList.Item>
        <DoDontList.Item variant="dont">
          certainly don't peel the skin off a burst blister
        </DoDontList.Item>
        <DoDontList.Item variant="dont">
          absolutely do not pick at the edges of the remaining skin
        </DoDontList.Item>
        <DoDontList.Item variant="dont">
          please don't wear the shoes or use the equipment that caused your blister until it heals
        </DoDontList.Item>
      </DoDontList.List>
    </DoDontList>
}`,...k.parameters?.docs?.source}}},A=[`Default`,`DoWithCustomPrefix`,`Dont`,`DontWithCustomPrefix`,`DontWithHiddenPrefix`]}))();export{T as Default,E as DoWithCustomPrefix,D as Dont,O as DontWithCustomPrefix,k as DontWithHiddenPrefix,A as __namedExportsOrder,w as default};