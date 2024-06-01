import{F as Q}from"./FormGroup-Cq6fdTws.js";import{L as X}from"./Label-BVxFGFqs.js";import{f as B}from"./factory-Dl037jXY.js";import{u as w}from"./use-id-with-prefix-ctfEntwL.js";import{c as E}from"./clsx-B-dksMZM.js";import{r as i,R as e}from"./index-uCp2LrAq.js";import{H as Z}from"./Hint-Cy41Y5xV.js";import{a as $}from"./common-fnmo4YYw.js";import{I as N}from"./Input-BW9TQTHM.js";import"./ErrorMessage-P3iC7fh_.js";import"./VisuallyHidden-io1tb15n.js";import"./Base-CQ_ipzy_.js";import"./polymorphic-factory-C1jPlyAy.js";import"./_commonjsHelpers-BosuxZz1.js";const J=i.createContext({withConditionals:!1,setWithConditionals:()=>{}}),ee=()=>i.useContext(J),ne=J.Provider,ae=({scope:a=document}={})=>{const o=a.querySelectorAll(".nhsuk-radios--conditional .nhsuk-radios__input"),t=()=>{o.forEach(r=>$(r,"nhsuk-radios__conditional--hidden"))};"onpageshow"in window?window.addEventListener("pageshow",t):window.addEventListener("DOMContentLoaded",t),t(),o.forEach(r=>{r.addEventListener("change",t)})},n=B(({children:a,inline:o,...t},r)=>{const s=i.useRef(null);i.useImperativeHandle(r,()=>s.current);const[c,u]=i.useState(!1);i.useEffect(()=>{var d;if(!s.current)return;const l=(d=s.current.closest("form"))==null?void 0:d.parentElement;l&&ae({scope:l})},[s]);const m=i.useMemo(()=>({withConditionals:c,setWithConditionals:u}),[c,u]),f=i.useMemo(()=>a,[a]);return e.createElement(ne,{value:m},e.createElement(Q,{as:"div",...t,ref:s,inputType:"radios",render:({className:l,withError:d,...h})=>e.createElement("div",{className:E("nhsuk-radios",{"nhsuk-radios--inline":o,"nhsuk-radios--conditional":c},l),...h},f)}))}),_=B(({id:a,hint:o,conditional:t,className:r,children:s,...c},u)=>{const m=!!t,{setWithConditionals:f}=ee();i.useEffect(()=>{f(m)},[]);const l=a||w("radio-item"),d=w("radio-item-hint"),h=w("radio-item-conditional");return e.createElement(e.Fragment,null,e.createElement("div",{className:"nhsuk-radios__item"},e.createElement("input",{className:E("nhsuk-radios__input",r),id:l,...c,ref:u,"aria-describedby":o?d:void 0,"aria-controls":m?h:void 0,"aria-expanded":m?"false":void 0,type:"radio"}),e.createElement(X,{htmlFor:l,className:"nhsuk-radios__label"},s),o&&e.createElement(Z,{className:"nhsuk-radios__hint",id:d},o)),m&&e.createElement("div",{className:E("nhsuk-radios__conditional nhsuk-radios__conditional--hidden"),id:h},t))}),k=({children:a="or",className:o,...t})=>e.createElement("div",{className:E("nhsuk-radios__divider",o),...t},a);n.displayName="Radio";_.displayName="Radio.Item";k.displayName="Radio.Divider";n.Item=_;n.Divider=k;n.__docgenInfo={description:"",methods:[],displayName:"Radio"};k.__docgenInfo={description:"",methods:[],displayName:"Radio.Divider",props:{children:{defaultValue:{value:"'or'",computed:!1},required:!1}}};_.__docgenInfo={description:"",methods:[],displayName:"Radio.Item"};const Ie={title:"Components/Form Elements/Radio",component:n,argTypes:{labelProps:{control:!1,table:{type:{summary:"LabelProps"}}}},args:{labelProps:{size:"l",variant:"page-heading"}},decorators:[a=>e.createElement("form",null,e.createElement(a,null))],parameters:{docs:{description:{component:`Use radios when you want users to select only 1 option from a list.

https://service-manual.nhs.uk/design-system/components/radios`}}}},p={args:{label:"Are you 18 or over?",labelProps:{size:"l",variant:"page-heading"}},render:a=>e.createElement(n,{...a},e.createElement(n.Item,{value:"yes",name:"adult"},"Yes"),e.createElement(n.Item,{value:"no",name:"adult"},"No"))},g={args:{label:"Are you 18 or over?",inline:!0},render:a=>e.createElement(n,{...a},e.createElement(n.Item,{value:"yes",name:"adult"},"Yes"),e.createElement(n.Item,{value:"no",name:"adult"},"No"))},y={args:{label:"Do you know your NHS number?",hint:["This is a 10 digit number, like 485 777 3456.","You can find it on any letter the NHS has sent you, on a prescription or by logging in to a GP practice online service."]},render:a=>e.createElement(n,{...a},e.createElement(n.Item,{value:"yes",name:"nhs-number"},"Yes, I know my NHS number"),e.createElement(n.Item,{value:"no",name:"nhs-number"},"No, I do not know my NHS number"),e.createElement(n.Item,{value:"not sure",name:"nhs-number"},"I'm not sure"))},I={args:{label:"Have you changed your name?",hint:"This includes changing your last name or spelling your name differently.",error:"Select yes if you have changed your name"},render:a=>e.createElement(n,{...a},e.createElement(n.Item,{value:"yes",name:"change-name"},"Yes"),e.createElement(n.Item,{value:"no",name:"change-name"},"No"))},v={args:{label:"Do you have a mobile phone with signal?"},render:a=>e.createElement(n,{...a},e.createElement(n.Item,{value:"yes",name:"mobile-signal",hint:"We will text you a 6 digit security code"},"Yes, I have a mobile phone with signal"),e.createElement(n.Item,{value:"no",name:"mobile-signal",hint:"We will call you to give you a 6 digit security code"},"No, I want to use my landline"))},R={args:{label:"How do you want to sign in?"},render:a=>e.createElement(n,{...a},e.createElement(n.Item,{value:"nhs-login",name:"sign-in"},"NHS login"),e.createElement(n.Item,{value:"gov-uk",name:"sign-in"},"GOV.UK Verify"),e.createElement(n.Divider,null),e.createElement(n.Item,{value:"create account",name:"sign-in"},"Create an account"))},b={args:{label:"How would you like to be contacted?",hint:"Select one option"},render:a=>e.createElement(n,{...a},e.createElement(n.Item,{name:"contact-method",value:"email",conditional:e.createElement(N,{type:"email",label:"Email address",width:"two-thirds"})},"Email"),e.createElement(n.Item,{name:"contact-method",value:"phone",conditional:e.createElement(N,{type:"tel",label:"Phone number",width:"two-thirds"})},"Phone"),e.createElement(n.Item,{name:"contact-method",value:"sms",conditional:e.createElement(N,{label:"Mobile number",width:"two-thirds"})},"Text message"))};var H,S,C;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(x=(D=g.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var P,Y,T;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(T=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:T.source}}};var L,A,F;I.parameters={...I.parameters,docs:{...(L=I.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
