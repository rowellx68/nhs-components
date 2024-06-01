import{F as Q}from"./FormGroup-Cq6fdTws.js";import{L as X}from"./Label-BVxFGFqs.js";import{f as V}from"./factory-Dl037jXY.js";import{u as y}from"./use-id-with-prefix-ctfEntwL.js";import{c as v}from"./clsx-B-dksMZM.js";import{r,R as e}from"./index-uCp2LrAq.js";import{H as Y}from"./Hint-Cy41Y5xV.js";import{a as J}from"./common-fnmo4YYw.js";import{I as f}from"./Input-BW9TQTHM.js";import"./ErrorMessage-P3iC7fh_.js";import"./VisuallyHidden-io1tb15n.js";import"./Base-CQ_ipzy_.js";import"./polymorphic-factory-C1jPlyAy.js";import"./_commonjsHelpers-BosuxZz1.js";const K=r.createContext({withConditionals:!1,setWithConditionals:()=>{}}),Z=()=>r.useContext(K),ee=K.Provider,m=function(a){a.form.querySelectorAll('input[type="checkbox"]').forEach(o=>J(o,"nhsuk-checkboxes__conditional--hidden"))},te=function(a){a.form.querySelectorAll(`input[type="checkbox"][data-checkbox-exclusive-group="${a.getAttribute("data-checkbox-exclusive-group")}"]`).forEach(o=>{a.form===o.form&&o!==a&&(o.checked=!1)}),m(a)},oe=function(a){a.form.querySelectorAll(`input[type="checkbox"][data-checkbox-exclusive][data-checkbox-exclusive-group="${a.getAttribute("data-checkbox-exclusive-group")}"]`).forEach(o=>{a.form===o.form&&(o.checked=!1)}),m(a)},ne=({scope:n=document}={})=>{const a=n.querySelectorAll(".nhsuk-checkboxes .nhsuk-checkboxes__input"),s=o=>{J(o.target,"nhsuk-checkboxes__conditional--hidden"),o.target.checked&&(o.target.hasAttribute("data-checkbox-exclusive")?te(o.target):oe(o.target))};"onpageshow"in window?window.addEventListener("pageshow",()=>a.forEach(o=>m(o))):window.addEventListener("DOMContentLoaded",()=>a.forEach(o=>m(o))),a.forEach(o=>m(o)),a.forEach(o=>{o.addEventListener("change",s)})},t=V(({children:n,...a},s)=>{const o=r.useRef(null);r.useImperativeHandle(s,()=>o.current);const[c,h]=r.useState(!1);r.useEffect(()=>{var l;if(!o.current)return;const i=(l=o.current.closest("form"))==null?void 0:l.parentElement;i&&ne({scope:i})},[o]);const I=r.useMemo(()=>({withConditionals:c,setWithConditionals:h}),[c,h]),C=r.useMemo(()=>n,[n]);return e.createElement(ee,{value:I},e.createElement(Q,{as:"div",...a,ref:o,inputType:"checkboxes",render:({className:i,withError:l,...E})=>e.createElement("div",{className:v("nhsuk-checkboxes",{"nhsuk-checkboxes--conditional":c},i),...E},C)}))}),g=V(({id:n,hint:a,conditional:s,exclusive:o,exclusiveGroup:c,className:h,children:I,...C},i)=>{const l=!!s,{setWithConditionals:E}=Z();r.useEffect(()=>{E(l)},[]);const S=n||y("checkbox-item"),_=y("checkbox-item-hint"),P=y("checkbox-item-conditional");return e.createElement(e.Fragment,null,e.createElement("div",{className:"nhsuk-checkboxes__item"},e.createElement("input",{className:v("nhsuk-checkboxes__input",h),id:S,...C,ref:i,"aria-describedby":a?_:void 0,"aria-controls":l?P:void 0,"aria-expanded":l?"false":void 0,"data-checkbox-exclusive-group":c||void 0,"data-checkbox-exclusive":o?"true":void 0,type:"checkbox"}),e.createElement(X,{htmlFor:S,className:"nhsuk-checkboxes__label"},I),a&&e.createElement(Y,{className:"nhsuk-checkboxes__hint",id:_},a)),l&&e.createElement("div",{className:v("nhsuk-checkboxes__conditional nhsuk-checkboxes__conditional--hidden"),id:P},s))}),w=({children:n="or",className:a,...s})=>e.createElement("div",{className:v("nhsuk-checkboxes__divider",a),...s},n);t.displayName="Checkbox";g.displayName="Checkbox.Item";w.displayName="Checkbox.Divider";t.Item=g;t.Divider=w;t.__docgenInfo={description:`This is the main wrapper for the Checkbox component.

It should contain one or more {@link Checkbox.Item} or {@link CheckboxItem} components and optionally a {@link Checkbox.Divider} or {@link CheckboxDivider} component.`,methods:[],displayName:"Checkbox"};w.__docgenInfo={description:"This component is used to add a separator between checkboxes.",methods:[],displayName:"Checkbox.Divider",props:{children:{defaultValue:{value:"'or'",computed:!1},required:!1}}};g.__docgenInfo={description:"This component is used to create a single checkbox item.\n\nIf the `conditional` prop is provided, a conditional content will be displayed when the checkbox is checked.\n\nIf the `exclusive` and `exclusiveGroup` props are provided, the checkbox will be exclusive to other checkboxes in the same group.",methods:[],displayName:"Checkbox.Item"};const ve={title:"Components/Form Elements/Checkbox",component:t,argTypes:{labelProps:{control:!1,table:{type:{summary:"LabelProps"}}}},args:{labelProps:{size:"l",variant:"page-heading"}},decorators:[n=>e.createElement("form",null,e.createElement(n,null))],parameters:{docs:{description:{component:`Use checkboxes to let users select 1 or more options on a form.

https://service-manual.nhs.uk/design-system/components/checkboxes`}}}},u={args:{label:"How would you like to be contacted?"},render:n=>e.createElement(t,{...n},e.createElement(t.Item,{value:"email"},"Email"),e.createElement(t.Item,{value:"phone"},"Phone"),e.createElement(t.Item,{value:"sms"},"Text message"))},d={args:{label:"How would you like to be contacted?",hint:"Select all options that are relevant to you."},render:n=>e.createElement(t,{...n},e.createElement(t.Item,{value:"email"},"Email"),e.createElement(t.Item,{value:"phone"},"Phone"),e.createElement(t.Item,{value:"sms"},"Text message"))},p={args:{label:"How would you like to be contacted?",error:"Select one option"},render:n=>e.createElement(t,{...n},e.createElement(t.Item,{value:"email"},"Email"),e.createElement(t.Item,{value:"phone"},"Phone"),e.createElement(t.Item,{value:"sms"},"Text message"))},x={args:{label:"What is your nationality?",hint:"If you have dual nationality, select all options that are relevant to you."},render:n=>e.createElement(t,{...n},e.createElement(t.Item,{value:"email",hint:"including English, Scottish, Welsh and Northern Irish"},"British"),e.createElement(t.Item,{value:"phone"},"Irish"),e.createElement(t.Item,{value:"sms"},"Citizen of another country"))},b={args:{label:"Do you have any of these symptoms?",hint:"Select all the symptoms you have."},render:n=>e.createElement(t,{...n},e.createElement(t.Item,{value:"sore throat",exclusiveGroup:"symptoms-list"},"Sore throat"),e.createElement(t.Item,{value:"runny nose",exclusiveGroup:"symptoms-list"},"Runny nose"),e.createElement(t.Item,{value:"muscle or joint pain",exclusiveGroup:"symptoms-list"},"Muscle or joint pain"),e.createElement(t.Divider,null),e.createElement(t.Item,{value:"none",exclusive:!0,exclusiveGroup:"symptoms-list"},"No, I do not have any of these symptoms"))},k={args:{label:"How would you like to be contacted?",hint:"Select all options that are relevant to you."},render:n=>e.createElement(t,{...n},e.createElement(t.Item,{value:"email",conditional:e.createElement(f,{type:"email",label:"Email address",width:"two-thirds"})},"Email"),e.createElement(t.Item,{value:"phone",conditional:e.createElement(f,{type:"tel",label:"Phone number",width:"two-thirds"})},"Phone"),e.createElement(t.Item,{value:"sms",conditional:e.createElement(f,{label:"Mobile number",width:"two-thirds"})},"Text message"))};var W,H,N;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'How would you like to be contacted?'
  },
  render: args => <Checkbox {...args}>
      <Checkbox.Item value="email">Email</Checkbox.Item>
      <Checkbox.Item value="phone">Phone</Checkbox.Item>
      <Checkbox.Item value="sms">Text message</Checkbox.Item>
    </Checkbox>
}`,...(N=(H=u.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var D,G,T;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'How would you like to be contacted?',
    hint: 'Select all options that are relevant to you.'
  },
  render: args => <Checkbox {...args}>
      <Checkbox.Item value="email">Email</Checkbox.Item>
      <Checkbox.Item value="phone">Phone</Checkbox.Item>
      <Checkbox.Item value="sms">Text message</Checkbox.Item>
    </Checkbox>
}`,...(T=(G=d.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var A,F,O;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    label: 'How would you like to be contacted?',
    error: 'Select one option'
  },
  render: args => <Checkbox {...args}>
      <Checkbox.Item value="email">Email</Checkbox.Item>
      <Checkbox.Item value="phone">Phone</Checkbox.Item>
      <Checkbox.Item value="sms">Text message</Checkbox.Item>
    </Checkbox>
}`,...(O=(F=p.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var R,L,M;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'What is your nationality?',
    hint: 'If you have dual nationality, select all options that are relevant to you.'
  },
  render: args => <Checkbox {...args}>
      <Checkbox.Item value="email" hint="including English, Scottish, Welsh and Northern Irish">
        British
      </Checkbox.Item>
      <Checkbox.Item value="phone">Irish</Checkbox.Item>
      <Checkbox.Item value="sms">Citizen of another country</Checkbox.Item>
    </Checkbox>
}`,...(M=(L=x.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var q,j,z;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Do you have any of these symptoms?',
    hint: 'Select all the symptoms you have.'
  },
  render: args => <Checkbox {...args}>
      <Checkbox.Item value="sore throat" exclusiveGroup="symptoms-list">
        Sore throat
      </Checkbox.Item>
      <Checkbox.Item value="runny nose" exclusiveGroup="symptoms-list">
        Runny nose
      </Checkbox.Item>
      <Checkbox.Item value="muscle or joint pain" exclusiveGroup="symptoms-list">
        Muscle or joint pain
      </Checkbox.Item>
      <Checkbox.Divider />
      <Checkbox.Item value="none" exclusive exclusiveGroup="symptoms-list">
        No, I do not have any of these symptoms
      </Checkbox.Item>
    </Checkbox>
}`,...(z=(j=b.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var B,$,U;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'How would you like to be contacted?',
    hint: 'Select all options that are relevant to you.'
  },
  render: args => <Checkbox {...args}>
      <Checkbox.Item value="email" conditional={<Input type="email" label="Email address" width="two-thirds" />}>
        Email
      </Checkbox.Item>
      <Checkbox.Item value="phone" conditional={<Input type="tel" label="Phone number" width="two-thirds" />}>
        Phone
      </Checkbox.Item>
      <Checkbox.Item value="sms" conditional={<Input label="Mobile number" width="two-thirds" />}>
        Text message
      </Checkbox.Item>
    </Checkbox>
}`,...(U=($=k.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};const Ie=["Default","WithHint","WithError","WithItemHint","WithExclusiveOption","WithConditionalContent"];export{u as Default,k as WithConditionalContent,p as WithError,b as WithExclusiveOption,d as WithHint,x as WithItemHint,Ie as __namedExportsOrder,ve as default};
