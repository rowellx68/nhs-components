import{R as e}from"./index-uCp2LrAq.js";import{V as L}from"./VisuallyHidden-io1tb15n.js";import{B as b}from"./Base-CQ_ipzy_.js";import{p as h}from"./polymorphic-factory-C1jPlyAy.js";import{c as l}from"./clsx-B-dksMZM.js";import{f as v}from"./factory-Dl037jXY.js";import"./_commonjsHelpers-BosuxZz1.js";const r=v(({children:a,className:t,...s},n)=>e.createElement("nav",{className:l("nhsuk-breadcrumb",t),"aria-label":"Breadcrumb",...s,ref:n},e.createElement("div",{className:"nhsuk-width-container"},a))),c=({children:a,className:t,...s})=>e.createElement("ol",{className:l("nhsuk-breadcrumb__list",t),...s},a),o=h(({className:a,as:t="a",...s},n)=>e.createElement("li",{className:"nhsuk-breadcrumb__item"},e.createElement(b,{as:t,className:l("nhsuk-breadcrumb__link",a),...s,ref:n}))),i=h(({className:a,children:t,visuallyHiddenText:s="Back to &nbsp;",as:n="a",...B},f)=>e.createElement("p",{className:"nhsuk-breadcrumb__back"},e.createElement(b,{as:n,className:l("nhsuk-breadcrumb__backlink",a),...B,ref:f},e.createElement(L,null,s),t)));r.displayName="Breadcrumb";c.displayName="Breadcrumb.List";o.displayName="Breadcrumb.ListItem";i.displayName="Breadcrumb.BackLink";r.List=c;r.ListItem=o;r.BackLink=i;r.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};c.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb.List"};o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb.ListItem",props:{className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb.BackLink",props:{className:{required:!1,tsType:{name:"string"},description:""},visuallyHiddenText:{required:!1,tsType:{name:"string"},description:`Visually hidden text for screen readers.

@type {string | undefined}`,defaultValue:{value:"'Back to &nbsp;'",computed:!1}},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};const w={title:"Components/Navigation/Breadcrumb",component:r,parameters:{docs:{description:{component:`Use breadcrumbs to help users understand where they are in the website.

https://service-manual.nhs.uk/design-system/components/breadcrumbs`}}}},m={render:a=>e.createElement(r,{...a},e.createElement(r.List,null,e.createElement(r.ListItem,{href:"/level-one"},"Level one"),e.createElement(r.ListItem,{href:"/level-one/level-two"},"Level two"),e.createElement(r.ListItem,{href:"/level-one/level-two/level-three"},"Level three")),e.createElement(r.BackLink,{href:"/level-one/level-two/level-three"},"Level three"))};var d,u,p;m.parameters={...m.parameters,docs:{...(d=m.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
