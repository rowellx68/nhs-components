import{F as Q}from"./FormGroup-D9KF4WXA.js";import{L as X}from"./Label-CvxOZKJz.js";import{f as B}from"./factory-DehWrhRO.js";import{u as f}from"./use-id-with-prefix-gaKPBBex.js";import{c as E}from"./clsx-B-dksMZM.js";import{r as i,R as e}from"./index-Cs7sjTYM.js";import{H as Z}from"./Hint-BOkj5kLS.js";import{a as $}from"./common-fnmo4YYw.js";import{I as N}from"./Input-C_lyn_5S.js";import"./ErrorMessage-D7s2s_-I.js";import"./VisuallyHidden-DonKESKA.js";import"./Base-fHV16vWU.js";import"./polymorphic-factory-23vJzvkj.js";import"./_commonjsHelpers-BosuxZz1.js";const J=i.createContext({withConditionals:!1,setWithConditionals:()=>{}}),ee=()=>i.useContext(J),ae=J.Provider,te=({scope:t=document}={})=>{const n=t.querySelectorAll(".nhsuk-radios--conditional .nhsuk-radios__input"),o=()=>{n.forEach(r=>$(r,"nhsuk-radios__conditional--hidden"))};"onpageshow"in window?window.addEventListener("pageshow",o):window.addEventListener("DOMContentLoaded",o),o(),n.forEach(r=>{r.addEventListener("change",o)})},a=B(({children:t,inline:n,...o},r)=>{const s=i.useRef(null);i.useImperativeHandle(r,()=>s.current);const[m,u]=i.useState(!1);i.useEffect(()=>{var c;if(!s.current)return;const l=(c=s.current.closest("form"))==null?void 0:c.parentElement;l&&te({scope:l})},[s,m]);const d=i.useMemo(()=>({withConditionals:m,setWithConditionals:u}),[m,u]),w=i.useMemo(()=>t,[t]);return e.createElement(ae,{value:d},e.createElement(Q,{as:"div",withErrorLine:!0,...o,ref:s,inputType:"radios",render:({className:l,withError:c,...h})=>e.createElement("div",{className:E("nhsuk-radios",{"nhsuk-radios--inline":n,"nhsuk-radios--conditional":m},l),...h},w)}))}),_=B(({id:t,hint:n,conditional:o,className:r,children:s,...m},u)=>{const d=!!o,{setWithConditionals:w}=ee();i.useEffect(()=>{w(d)},[]);const l=t||f("radio-item"),c=f("radio-item-hint"),h=f("radio-item-conditional");return e.createElement(e.Fragment,null,e.createElement("div",{className:"nhsuk-radios__item"},e.createElement("input",{className:E("nhsuk-radios__input",r),id:l,...m,ref:u,"aria-describedby":n?c:void 0,"aria-controls":d?h:void 0,"aria-expanded":d?"false":void 0,type:"radio"}),e.createElement(X,{htmlFor:l,className:"nhsuk-radios__label"},s),n&&e.createElement(Z,{className:"nhsuk-radios__hint",id:c},n)),d&&e.createElement("div",{className:E("nhsuk-radios__conditional nhsuk-radios__conditional--hidden"),id:h},o))}),k=({children:t="or",className:n,...o})=>e.createElement("div",{className:E("nhsuk-radios__divider",n),...o},t);a.displayName="Radio";_.displayName="Radio.Item";k.displayName="Radio.Divider";a.Item=_;a.Divider=k;a.__docgenInfo={description:"",methods:[],displayName:"Radio"};k.__docgenInfo={description:"",methods:[],displayName:"Radio.Divider",props:{children:{defaultValue:{value:"'or'",computed:!1},required:!1}}};_.__docgenInfo={description:"",methods:[],displayName:"Radio.Item"};const Ie={title:"Components/Form Elements/Radio",component:a,argTypes:{labelProps:{control:!1,table:{type:{summary:"LabelProps"}}}},args:{labelProps:{size:"l",variant:"page-heading"}},decorators:[t=>e.createElement("form",null,e.createElement(t,null))],parameters:{docs:{description:{component:`Use radios when you want users to select only 1 option from a list.

https://service-manual.nhs.uk/design-system/components/radios`}}}},p={args:{label:"Are you 18 or over?",labelProps:{size:"l",variant:"page-heading"}},render:t=>e.createElement(a,{...t},e.createElement(a.Item,{value:"yes",name:"adult"},"Yes"),e.createElement(a.Item,{value:"no",name:"adult"},"No"))},g={args:{label:"Are you 18 or over?",inline:!0},render:t=>e.createElement(a,{...t},e.createElement(a.Item,{value:"yes",name:"adult"},"Yes"),e.createElement(a.Item,{value:"no",name:"adult"},"No"))},y={args:{label:"Do you know your NHS number?",hint:["This is a 10 digit number, like 485 777 3456.","You can find it on any letter the NHS has sent you, on a prescription or by logging in to a GP practice online service."]},render:t=>e.createElement(a,{...t},e.createElement(a.Item,{value:"yes",name:"nhs-number"},"Yes, I know my NHS number"),e.createElement(a.Item,{value:"no",name:"nhs-number"},"No, I do not know my NHS number"),e.createElement(a.Item,{value:"not sure",name:"nhs-number"},"I'm not sure"))},I={args:{label:"Have you changed your name?",hint:"This includes changing your last name or spelling your name differently.",error:"Select yes if you have changed your name"},render:t=>e.createElement(a,{...t},e.createElement(a.Item,{value:"yes",name:"change-name"},"Yes"),e.createElement(a.Item,{value:"no",name:"change-name"},"No"))},v={args:{label:"Do you have a mobile phone with signal?"},render:t=>e.createElement(a,{...t},e.createElement(a.Item,{value:"yes",name:"mobile-signal",hint:"We will text you a 6 digit security code"},"Yes, I have a mobile phone with signal"),e.createElement(a.Item,{value:"no",name:"mobile-signal",hint:"We will call you to give you a 6 digit security code"},"No, I want to use my landline"))},R={args:{label:"How do you want to sign in?"},render:t=>e.createElement(a,{...t},e.createElement(a.Item,{value:"nhs-login",name:"sign-in"},"NHS login"),e.createElement(a.Item,{value:"gov-uk",name:"sign-in"},"GOV.UK Verify"),e.createElement(a.Divider,null),e.createElement(a.Item,{value:"create account",name:"sign-in"},"Create an account"))},b={args:{label:"How would you like to be contacted?",hint:"Select one option"},render:t=>e.createElement(a,{...t},e.createElement(a.Item,{name:"contact-method",value:"email",conditional:e.createElement(N,{type:"email",label:"Email address",width:"two-thirds"})},"Email"),e.createElement(a.Item,{name:"contact-method",value:"phone",conditional:e.createElement(N,{type:"tel",label:"Phone number",width:"two-thirds"})},"Phone"),e.createElement(a.Item,{name:"contact-method",value:"sms",conditional:e.createElement(N,{label:"Mobile number",width:"two-thirds"})},"Text message"))};var H,S,C;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Are you 18 or over?',
    labelProps: {
      size: 'l',
      variant: 'page-heading'
    }
  },
  render: args => <Radio {...args}>
      <Radio.Item value="yes" name="adult">
        Yes
      </Radio.Item>
      <Radio.Item value="no" name="adult">
        No
      </Radio.Item>
    </Radio>
}`,...(C=(S=p.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var W,D,x;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Are you 18 or over?',
    inline: true
  },
  render: args => <Radio {...args}>
      <Radio.Item value="yes" name="adult">
        Yes
      </Radio.Item>
      <Radio.Item value="no" name="adult">
        No
      </Radio.Item>
    </Radio>
}`,...(x=(D=g.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var P,Y,L;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: 'Do you know your NHS number?',
    hint: ['This is a 10 digit number, like 485 777 3456.', 'You can find it on any letter the NHS has sent you, on a prescription or by logging in to a GP practice online service.']
  },
  render: args => <Radio {...args}>
      <Radio.Item value="yes" name="nhs-number">
        Yes, I know my NHS number
      </Radio.Item>
      <Radio.Item value="no" name="nhs-number">
        No, I do not know my NHS number
      </Radio.Item>
      <Radio.Item value="not sure" name="nhs-number">
        I'm not sure
      </Radio.Item>
    </Radio>
}`,...(L=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var T,A,F;I.parameters={...I.parameters,docs:{...(T=I.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Have you changed your name?',
    hint: 'This includes changing your last name or spelling your name differently.',
    error: 'Select yes if you have changed your name'
  },
  render: args => <Radio {...args}>
      <Radio.Item value="yes" name="change-name">
        Yes
      </Radio.Item>
      <Radio.Item value="no" name="change-name">
        No
      </Radio.Item>
    </Radio>
}`,...(F=(A=I.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var G,M,V;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Do you have a mobile phone with signal?'
  },
  render: args => <Radio {...args}>
      <Radio.Item value="yes" name="mobile-signal" hint="We will text you a 6 digit security code">
        Yes, I have a mobile phone with signal
      </Radio.Item>
      <Radio.Item value="no" name="mobile-signal" hint="We will call you to give you a 6 digit security code">
        No, I want to use my landline
      </Radio.Item>
    </Radio>
}`,...(V=(M=v.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var O,z,U;R.parameters={...R.parameters,docs:{...(O=R.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'How do you want to sign in?'
  },
  render: args => <Radio {...args}>
      <Radio.Item value="nhs-login" name="sign-in">
        NHS login
      </Radio.Item>
      <Radio.Item value="gov-uk" name="sign-in">
        GOV.UK Verify
      </Radio.Item>
      <Radio.Divider />
      <Radio.Item value="create account" name="sign-in">
        Create an account
      </Radio.Item>
    </Radio>
}`,...(U=(z=R.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var q,K,j;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'How would you like to be contacted?',
    hint: 'Select one option'
  },
  render: args => <Radio {...args}>
      <Radio.Item name="contact-method" value="email" conditional={<Input type="email" label="Email address" width="two-thirds" />}>
        Email
      </Radio.Item>
      <Radio.Item name="contact-method" value="phone" conditional={<Input type="tel" label="Phone number" width="two-thirds" />}>
        Phone
      </Radio.Item>
      <Radio.Item name="contact-method" value="sms" conditional={<Input label="Mobile number" width="two-thirds" />}>
        Text message
      </Radio.Item>
    </Radio>
}`,...(j=(K=b.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};const ve=["Default","Inline","WithHint","WithError","WithItemHint","WithDivider","WithConditionalContent"];export{p as Default,g as Inline,b as WithConditionalContent,R as WithDivider,I as WithError,y as WithHint,v as WithItemHint,ve as __namedExportsOrder,Ie as default};
