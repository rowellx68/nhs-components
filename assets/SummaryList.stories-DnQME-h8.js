import{R as e}from"./index-uCp2LrAq.js";import{B as f}from"./Base-CQ_ipzy_.js";import{V as A}from"./VisuallyHidden-io1tb15n.js";import{f as L}from"./factory-Dl037jXY.js";import{p as E}from"./polymorphic-factory-C1jPlyAy.js";import{c as s}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";const t=L(({className:n,...m},a)=>e.createElement("dl",{className:s("nhsuk-summary-list",n),...m,ref:a})),r=L(({className:n,...m},a)=>e.createElement("div",{className:s("nhsuk-summary-list__row",n),...m,ref:a})),l=({className:n,...m})=>e.createElement("dt",{className:s("nhsuk-summary-list__key",n),...m}),o=({className:n,...m})=>e.createElement("dd",{className:s("nhsuk-summary-list__value",n),...m}),u=({className:n,...m})=>e.createElement("dd",{className:s("nhsuk-summary-list__actions",n),...m}),c=E(({children:n,as:m="a",visuallyHiddenText:a,...h},p)=>e.createElement(f,{as:m,ref:p,...h},n,e.createElement(A,null," ",a)));t.displayName="SummaryList";r.displayName="SummaryList.Row";l.displayName="SummaryList.Key";o.displayName="SummaryList.Value";u.displayName="SummaryList.Actions";c.displayName="SummaryList.ActionLink";t.Row=r;t.Key=l;t.Value=o;t.Actions=u;t.ActionLink=c;t.__docgenInfo={description:"",methods:[],displayName:"SummaryList"};r.__docgenInfo={description:"",methods:[],displayName:"SummaryList.Row"};l.__docgenInfo={description:"",methods:[],displayName:"SummaryList.Key"};o.__docgenInfo={description:"",methods:[],displayName:"SummaryList.Value"};u.__docgenInfo={description:"",methods:[],displayName:"SummaryList.Actions"};c.__docgenInfo={description:"",methods:[],displayName:"SummaryList.ActionLink",props:{visuallyHiddenText:{required:!0,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};const K={title:"Components/Content Presentation/Summary List",component:t,subcomponents:{"SummaryList.Row":t.Row},parameters:{docs:{description:{component:`Use the summary list to summarise information, for example, a user's responses at the end of a form.

https://service-manual.nhs.uk/design-system/components/summary-list`}}}},i={render:n=>e.createElement(t,{...n},e.createElement(t.Row,null,e.createElement(t.Key,null,"Name"),e.createElement(t.Value,null,"John Smith"),e.createElement(t.Actions,null,e.createElement(t.ActionLink,{visuallyHiddenText:"name",href:"#"},"Change"))),e.createElement(t.Row,null,e.createElement(t.Key,null,"Date of birth "),e.createElement(t.Value,null,"1 January 1990"),e.createElement(t.Actions,null,e.createElement(t.ActionLink,{visuallyHiddenText:"date of birth",href:"#"},"Change"))),e.createElement(t.Row,null,e.createElement(t.Key,null,"Address"),e.createElement(t.Value,null,"1 Smith Street, Smithville, ",e.createElement("br",null),"Smithfield, ",e.createElement("br",null),"Smithshire, ",e.createElement("br",null),"SM1 1SM"),e.createElement(t.Actions,null,e.createElement(t.ActionLink,{visuallyHiddenText:"address",href:"#"},"Change"))),e.createElement(t.Row,null,e.createElement(t.Key,null,"Contact details"),e.createElement(t.Value,null,"07000 000000 ",e.createElement("br",null),"john.smith@email.com"),e.createElement(t.Actions,null,e.createElement(t.ActionLink,{visuallyHiddenText:"contact details",href:"#"},"Change"))))};var y,d,S;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>John Smith</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="name" href="#">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth </SummaryList.Key>
        <SummaryList.Value>1 January 1990</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="date of birth" href="#">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Address</SummaryList.Key>
        <SummaryList.Value>
          1 Smith Street, Smithville, <br />
          Smithfield, <br />
          Smithshire, <br />
          SM1 1SM
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="address" href="#">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          07000 000000 <br />
          john.smith@email.com
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="contact details" href="#">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
    </SummaryList>
}`,...(S=(d=i.parameters)==null?void 0:d.docs)==null?void 0:S.source}}};const v=["Default"];export{i as Default,v as __namedExportsOrder,K as default};
