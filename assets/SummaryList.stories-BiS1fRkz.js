import{R as e}from"./index-uCp2LrAq.js";import{B as h}from"./Base-CQ_ipzy_.js";import{V as p}from"./VisuallyHidden-io1tb15n.js";import{f as S}from"./factory-Dl037jXY.js";import{p as f}from"./polymorphic-factory-C1jPlyAy.js";import{c as i}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";const t=S(({className:n,...m},s)=>e.createElement("dl",{className:i("nhsuk-summary-list",n),...m,ref:s})),a=S(({className:n,...m},s)=>e.createElement("div",{className:i("nhsuk-summary-list__row",n),...m,ref:s})),r=({className:n,...m})=>e.createElement("dt",{className:i("nhsuk-summary-list__key",n),...m}),l=({className:n,...m})=>e.createElement("dd",{className:i("nhsuk-summary-list__value",n),...m}),u=({className:n,...m})=>e.createElement("dd",{className:i("nhsuk-summary-list__actions",n),...m}),c=f(({children:n,as:m="a",visuallyHiddenText:s,...w},L)=>e.createElement(h,{as:m,ref:L,...w},n,e.createElement(p,null," ",s)));t.displayName="SummaryList";a.displayName="SummaryList.Row";r.displayName="SummaryList.Row.Key";l.displayName="SummaryList.Row.Value";u.displayName="SummaryList.Row.Actions";c.displayName="SummaryList.Row.ActionLink";a.Key=r;a.Value=l;a.Actions=u;a.ActionLink=c;t.Row=a;t.__docgenInfo={description:"",methods:[],displayName:"SummaryList"};a.__docgenInfo={description:"",methods:[],displayName:"SummaryList.Row"};r.__docgenInfo={description:"",methods:[],displayName:"SummaryList.Row.Key"};l.__docgenInfo={description:"",methods:[],displayName:"SummaryList.Row.Value"};u.__docgenInfo={description:"",methods:[],displayName:"SummaryList.Row.Actions"};c.__docgenInfo={description:"",methods:[],displayName:"SummaryList.Row.ActionLink",props:{visuallyHiddenText:{required:!0,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};const K={title:"Components/Content Presentation/Summary List",component:t,parameters:{docs:{description:{component:`Use the summary list to summarise information, for example, a user's responses at the end of a form.

https://service-manual.nhs.uk/design-system/components/summary-list`}}}},o={render:n=>e.createElement(t,{...n},e.createElement(t.Row,null,e.createElement(t.Row.Key,null,"Name"),e.createElement(t.Row.Value,null,"John Smith"),e.createElement(t.Row.Actions,null,e.createElement(t.Row.ActionLink,{visuallyHiddenText:"name",href:"#"},"Change"))),e.createElement(t.Row,null,e.createElement(t.Row.Key,null,"Date of birth "),e.createElement(t.Row.Value,null,"1 January 1990"),e.createElement(t.Row.Actions,null,e.createElement(t.Row.ActionLink,{visuallyHiddenText:"date of birth",href:"#"},"Change"))),e.createElement(t.Row,null,e.createElement(t.Row.Key,null,"Address"),e.createElement(t.Row.Value,null,"1 Smith Street, Smithville, ",e.createElement("br",null),"Smithfield, ",e.createElement("br",null),"Smithshire, ",e.createElement("br",null),"SM1 1SM"),e.createElement(t.Row.Actions,null,e.createElement(t.Row.ActionLink,{visuallyHiddenText:"address",href:"#"},"Change"))),e.createElement(t.Row,null,e.createElement(t.Row.Key,null,"Contact details"),e.createElement(t.Row.Value,null,"07000 000000 ",e.createElement("br",null),"john.smith@email.com"),e.createElement(t.Row.Actions,null,e.createElement(t.Row.ActionLink,{visuallyHiddenText:"contact details",href:"#"},"Change"))))};var y,d,R;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Row.Key>Name</SummaryList.Row.Key>
        <SummaryList.Row.Value>John Smith</SummaryList.Row.Value>
        <SummaryList.Row.Actions>
          <SummaryList.Row.ActionLink visuallyHiddenText="name" href="#">
            Change
          </SummaryList.Row.ActionLink>
        </SummaryList.Row.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Row.Key>Date of birth </SummaryList.Row.Key>
        <SummaryList.Row.Value>1 January 1990</SummaryList.Row.Value>
        <SummaryList.Row.Actions>
          <SummaryList.Row.ActionLink visuallyHiddenText="date of birth" href="#">
            Change
          </SummaryList.Row.ActionLink>
        </SummaryList.Row.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Row.Key>Address</SummaryList.Row.Key>
        <SummaryList.Row.Value>
          1 Smith Street, Smithville, <br />
          Smithfield, <br />
          Smithshire, <br />
          SM1 1SM
        </SummaryList.Row.Value>
        <SummaryList.Row.Actions>
          <SummaryList.Row.ActionLink visuallyHiddenText="address" href="#">
            Change
          </SummaryList.Row.ActionLink>
        </SummaryList.Row.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Row.Key>Contact details</SummaryList.Row.Key>
        <SummaryList.Row.Value>
          07000 000000 <br />
          john.smith@email.com
        </SummaryList.Row.Value>
        <SummaryList.Row.Actions>
          <SummaryList.Row.ActionLink visuallyHiddenText="contact details" href="#">
            Change
          </SummaryList.Row.ActionLink>
        </SummaryList.Row.Actions>
      </SummaryList.Row>
    </SummaryList>
}`,...(R=(d=o.parameters)==null?void 0:d.docs)==null?void 0:R.source}}};const v=["Default"];export{o as Default,v as __namedExportsOrder,K as default};
