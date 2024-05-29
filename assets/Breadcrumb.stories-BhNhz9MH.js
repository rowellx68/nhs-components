import{R as r}from"./index-uCp2LrAq.js";import{V as f}from"./VisuallyHidden-io1tb15n.js";import{B as b}from"./Base-CQ_ipzy_.js";import{p as B}from"./polymorphic-factory-C1jPlyAy.js";import{c}from"./clsx-B-dksMZM.js";import{f as v}from"./factory-Dl037jXY.js";import"./_commonjsHelpers-BosuxZz1.js";const e=v(({children:a,className:t,...s},n)=>r.createElement("nav",{className:c("nhsuk-breadcrumb",t),"aria-label":"Breadcrumb",...s,ref:n},r.createElement("div",{className:"nhsuk-width-container"},a))),l=({children:a,className:t,...s})=>r.createElement("ol",{className:c("nhsuk-breadcrumb__list",t),...s},a),o=B(({className:a,as:t="a",...s},n)=>r.createElement("li",{className:"nhsuk-breadcrumb__item"},r.createElement(b,{as:t,className:c("nhsuk-breadcrumb__link",a),...s,ref:n}))),i=B(({className:a,children:t,visuallyHiddenText:s="Back to &nbsp;",as:n="a",...L},h)=>r.createElement("p",{className:"nhsuk-breadcrumb__back"},r.createElement(b,{as:n,className:c("nhsuk-breadcrumb__backlink",a),...L,ref:h},r.createElement(f,null,s),t)));e.displayName="Breadcrumb";l.displayName="Breadcrumb.List";o.displayName="Breadcrumb.ListItem";i.displayName="Breadcrumb.BackLink";e.List=l;e.ListItem=o;e.BackLink=i;e.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};l.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb.List"};o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb.ListItem",props:{className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb.BackLink",props:{className:{required:!1,tsType:{name:"string"},description:""},visuallyHiddenText:{required:!1,tsType:{name:"string"},description:`Visually hidden text for screen readers.

@type {string | undefined}`,defaultValue:{value:"'Back to &nbsp;'",computed:!1}},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};const w={title:"Components/Navigation/Breadcrumb",component:e,subcomponents:{"Breadcrumb.List":e.List,"Breadcrumb.ListItem":e.ListItem,"Breadcrumb.BackLink":e.BackLink},parameters:{docs:{description:{component:`Use breadcrumbs to help users understand where they are in the website.

https://service-manual.nhs.uk/design-system/components/breadcrumbs`}}}},m={render:a=>r.createElement(e,{...a},r.createElement(e.List,null,r.createElement(e.ListItem,{href:"/level-one"},"Level one"),r.createElement(e.ListItem,{href:"/level-one/level-two"},"Level two"),r.createElement(e.ListItem,{href:"/level-one/level-two/level-three"},"Level three")),r.createElement(e.BackLink,{href:"/level-one/level-two/level-three"},"Level three"))};var d,u,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Breadcrumb {...args}>
      <Breadcrumb.List>
        <Breadcrumb.ListItem href="/level-one">Level one</Breadcrumb.ListItem>
        <Breadcrumb.ListItem href="/level-one/level-two">
          Level two
        </Breadcrumb.ListItem>
        <Breadcrumb.ListItem href="/level-one/level-two/level-three">
          Level three
        </Breadcrumb.ListItem>
      </Breadcrumb.List>
      <Breadcrumb.BackLink href="/level-one/level-two/level-three">
        Level three
      </Breadcrumb.BackLink>
    </Breadcrumb>
}`,...(p=(u=m.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const T=["Default"];export{m as Default,T as __namedExportsOrder,w as default};
