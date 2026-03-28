import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-Co2kQL1W.js";import{n as r,t as i}from"./clsx-keIqec4B.js";import{n as a,t as o}from"./Base-D8qVFz7v.js";import{n as s,t as c}from"./factory-BtzG2lhR.js";import{n as l,t as u}from"./polymorphic-factory-CfNDVxws.js";var d,f,p,m,h,g=t((()=>{r(),d=e(n(),1),a(),s(),u(),f=c(({variant:e,disableAutoFocus:t,role:n,className:r,children:a,...o},s)=>{let c={};return typeof t==`boolean`&&(c[`data-disable-auto-focus`]=String(t)),d.createElement(`div`,{ref:s,className:i(`nhsuk-notification-banner`,{"nhsuk-notification-banner--success":e===`success`},r),"data-module":`nhsuk-notification-banner`,role:n??e?`alert`:`region`,"aria-labelledby":`nhsuk-notification-banner-title`,...c,...o},a)}),p=({variant:e,title:t,className:n,...r})=>d.createElement(`div`,{className:i(`nhsuk-notification-banner__header`,n),...r},d.createElement(`h2`,{className:`nhsuk-notification-banner__title`,id:`nhsuk-notification-banner-title`},t??e===`success`?`Success`:`Important`)),m=({className:e,children:t,...n})=>d.createElement(`div`,{className:i(`nhsuk-notification-banner__content`,e),...n},t),h=l(({className:e,as:t=`p`,...n},r)=>d.createElement(o,{as:t,className:i(`nhsuk-notification-banner__heading`,e),...n,ref:r})),f.displayName=`NotificationBanner`,p.displayName=`NotificationBanner.Header`,m.displayName=`NotificationBanner.Content`,h.displayName=`NotificationBanner.Heading`,f.Header=p,f.Content=m,f.Heading=h})),_,v,y,b,x,S,C;t((()=>{_=e(n(),1),g(),v={title:`Components/Content Presentation/Notification Banner`,component:f,subcomponents:{"NotificationBanner.Header":f.Header,"NotificationBanner.Content":f.Content,"NotificationBanner.Heading":f.Heading},parameters:{docs:{description:{component:`Use a notification banner to tell the user something they need to know that's not directly related to the page content.

https://service-manual.nhs.uk/design-system/components/notification-banners`}}}},y={render:()=>_.createElement(f,null,_.createElement(f.Header,null),_.createElement(f.Content,null,_.createElement(f.Heading,null,`You have 7 days left to confirm your email address`)))},b={render:()=>_.createElement(f,{variant:`success`},_.createElement(f.Header,{variant:`success`}),_.createElement(f.Content,null,_.createElement(f.Heading,null,`Your email address has been confirmed`)))},x={render:()=>_.createElement(f,{variant:`success`,disableAutoFocus:!0},_.createElement(f.Header,{variant:`success`}),_.createElement(f.Content,null,_.createElement(f.Heading,null,`Your details have been updated`)))},S={render:()=>_.createElement(f,{role:`region`},_.createElement(f.Header,null),_.createElement(f.Content,null,_.createElement(f.Heading,null,`This banner has a custom role`)))},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <NotificationBanner>
      <NotificationBanner.Header />
      <NotificationBanner.Content>
        <NotificationBanner.Heading>
          You have 7 days left to confirm your email address
        </NotificationBanner.Heading>
      </NotificationBanner.Content>
    </NotificationBanner>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <NotificationBanner variant="success">
      <NotificationBanner.Header variant="success" />
      <NotificationBanner.Content>
        <NotificationBanner.Heading>
          Your email address has been confirmed
        </NotificationBanner.Heading>
      </NotificationBanner.Content>
    </NotificationBanner>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <NotificationBanner variant="success" disableAutoFocus={true}>
      <NotificationBanner.Header variant="success" />
      <NotificationBanner.Content>
        <NotificationBanner.Heading>Your details have been updated</NotificationBanner.Heading>
      </NotificationBanner.Content>
    </NotificationBanner>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <NotificationBanner role="region">
      <NotificationBanner.Header />
      <NotificationBanner.Content>
        <NotificationBanner.Heading>This banner has a custom role</NotificationBanner.Heading>
      </NotificationBanner.Content>
    </NotificationBanner>
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Success`,`SuccessWithDisableAutoFocus`,`WithRoleOverride`]}))();export{y as Default,b as Success,x as SuccessWithDisableAutoFocus,S as WithRoleOverride,C as __namedExportsOrder,v as default};