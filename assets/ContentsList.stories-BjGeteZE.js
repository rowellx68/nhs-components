import{R as e}from"./index-uCp2LrAq.js";import{B as g}from"./Base-CQ_ipzy_.js";import{V as h}from"./VisuallyHidden-io1tb15n.js";import{f as C}from"./factory-Dl037jXY.js";import{p as y}from"./polymorphic-factory-C1jPlyAy.js";import{c as u}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";const t=C(({children:s,className:o,role:n="navigation",visuallyHiddenText:i="Contents",...r},m)=>e.createElement("nav",{className:u("nhsuk-contents-list",o),role:n,...r,ref:m},e.createElement(h,{as:"h2"},i),e.createElement("ol",{className:"nhsuk-contents-list__list"},s))),l=y(({children:s,className:o,active:n,as:i="a",...r},m)=>{const f={as:n?"span":i,className:u({"nhsuk-contents-list__current":n,"nhsuk-contents-list__link":!n},o),...r};return e.createElement("li",{className:"nhsuk-contents-list__item","aria-current":n?"page":void 0},e.createElement(g,{...f,ref:m},s))});t.displayName="ContentsList";l.displayName="ContentsList.Item";t.Item=l;t.__docgenInfo={description:"",methods:[],displayName:"ContentsList",props:{role:{defaultValue:{value:"'navigation'",computed:!1},required:!1},visuallyHiddenText:{defaultValue:{value:"'Contents'",computed:!1},required:!1}}};l.__docgenInfo={description:"",methods:[],displayName:"ContentsList.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};const x={title:"Components/Navigation/Contents List",component:t,subcomponents:{"ContentsList.Item":t.Item},argTypes:{visuallyHiddenText:{control:{type:"text"},table:{type:{summary:"string"}}},role:{control:{type:"select"},options:["navigation"],table:{type:{summary:'"navigation"'}}}},parameters:{docs:{description:{component:`Use contents lists to allow users to navigate between related pages, for example about a single condition.

https://service-manual.nhs.uk/design-system/components/contents-list`}}}},a={args:{visuallyHiddenText:"Contents"},render:s=>e.createElement(t,{...s,"aria-label":"Pages in this guide"},e.createElement(t.Item,{href:"#",active:!0},"What is AMD?"),e.createElement(t.Item,{href:"#"},"Symptoms"),e.createElement(t.Item,{href:"#"},"Getting diagnosed"),e.createElement(t.Item,{href:"#"},"Treatment"),e.createElement(t.Item,{href:"#"},"Living with AMD"))};var c,p,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    visuallyHiddenText: 'Contents'
  },
  render: args => <ContentsList {...args} aria-label="Pages in this guide">
      <ContentsList.Item href="#" active>
        What is AMD?
      </ContentsList.Item>
      <ContentsList.Item href="#">Symptoms</ContentsList.Item>
      <ContentsList.Item href="#">Getting diagnosed</ContentsList.Item>
      <ContentsList.Item href="#">Treatment</ContentsList.Item>
      <ContentsList.Item href="#">Living with AMD</ContentsList.Item>
    </ContentsList>
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const N=["Default"];export{a as Default,N as __namedExportsOrder,x as default};
