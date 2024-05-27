import{F as Q}from"./FormGroup-BvpLCAgb.js";import{L as X}from"./Label-BVxFGFqs.js";import{f as B}from"./factory-Dl037jXY.js";import{u as w}from"./use-id-with-prefix-ctfEntwL.js";import{c as E}from"./clsx-B-dksMZM.js";import{r as i,R as e}from"./index-uCp2LrAq.js";import{H as Z}from"./Hint-Cy41Y5xV.js";import{t as $}from"./common-DS4CpZRv.js";import{I as N}from"./Input-DKuhsIBb.js";const J=i.createContext({withConditionals:!1,setWithConditionals:()=>{}}),ee=()=>i.useContext(J),ne=J.Provider,ae=({scope:a=document}={})=>{const t=a.querySelectorAll(".nhsuk-radios--conditional .nhsuk-radios__input"),o=()=>{t.forEach(r=>$(r,"nhsuk-radios__conditional--hidden"))};"onpageshow"in window?window.addEventListener("pageshow",o):window.addEventListener("DOMContentLoaded",o),o(),t.forEach(r=>{r.addEventListener("change",o)})},n=B(({children:a,inline:t,...o},r)=>{const l=i.useRef(null);i.useImperativeHandle(r,()=>l.current);const[c,R]=i.useState(!1);i.useEffect(()=>{var d;if(!l.current)return;const s=(d=l.current.closest("form"))==null?void 0:d.parentElement;s&&setTimeout(()=>{ae({scope:s})},0)},[]);const m=i.useMemo(()=>({withConditionals:c,setWithConditionals:R}),[c,R]),f=i.useMemo(()=>a,[a]);return e.createElement(ne,{value:m},e.createElement(Q,{as:"div",...o,ref:l,inputType:"radios",render:({className:s,withError:d,...b})=>e.createElement("div",{className:E("nhsuk-radios",{"nhsuk-radios--inline":t,"nhsuk-radios--conditional":c},s),...b},f)}))}),_=B(({id:a,hint:t,conditional:o,className:r,children:l,...c},R)=>{const m=!!o,{setWithConditionals:f}=ee();i.useEffect(()=>{f(m)},[]);const s=a||w("radio-item"),d=w("radio-item-hint"),b=w("radio-item-conditional");return e.createElement(e.Fragment,null,e.createElement("div",{className:"nhsuk-radios__item"},e.createElement("input",{className:E("nhsuk-radios__input",r),id:s,...c,ref:R,"aria-describedby":t?d:void 0,"aria-controls":m?b:void 0,"aria-expanded":m?"false":void 0,type:"radio"}),e.createElement(X,{htmlFor:s,className:"nhsuk-radios__label"},l),t&&e.createElement(Z,{className:"nhsuk-radios__hint",id:d},t)),m&&e.createElement("div",{className:E("nhsuk-radios__conditional nhsuk-radios__conditional--hidden"),id:b},o))}),k=({children:a="or",className:t,...o})=>e.createElement("div",{className:E("nhsuk-radios__divider",t),...o},a);n.displayName="Radio";_.displayName="Radio.Item";k.displayName="Radio.Divider";n.Item=_;n.Divider=k;n.__docgenInfo={description:"",methods:[],displayName:"Radio"};k.__docgenInfo={description:"",methods:[],displayName:"Radio.Divider",props:{children:{defaultValue:{value:"'or'",computed:!1},required:!1}}};_.__docgenInfo={description:"",methods:[],displayName:"Radio.Item"};const oe={title:"Components/Form Elements/Radio",component:n,argTypes:{labelProps:{control:!1,table:{type:{summary:"LabelProps"}}}},args:{labelProps:{size:"l",variant:"page-heading"}},decorators:[a=>e.createElement("form",null,e.createElement(a,null))],parameters:{docs:{description:{component:`Use radios when you want users to select only 1 option from a list.

https://service-manual.nhs.uk/design-system/components/radios`}}}},u={args:{label:"Are you 18 or over?",labelProps:{size:"l",variant:"page-heading"}},render:a=>e.createElement(n,{...a},e.createElement(n.Item,{value:"yes",name:"adult"},"Yes"),e.createElement(n.Item,{value:"no",name:"adult"},"No"))},h={args:{label:"Are you 18 or over?",inline:!0},render:a=>e.createElement(n,{...a},e.createElement(n.Item,{value:"yes",name:"adult"},"Yes"),e.createElement(n.Item,{value:"no",name:"adult"},"No"))},p={args:{label:"Do you know your NHS number?",hint:["This is a 10 digit number, like 485 777 3456.","You can find it on any letter the NHS has sent you, on a prescription or by logging in to a GP practice online service."]},render:a=>e.createElement(n,{...a},e.createElement(n.Item,{value:"yes",name:"nhs-number"},"Yes, I know my NHS number"),e.createElement(n.Item,{value:"no",name:"nhs-number"},"No, I do not know my NHS number"),e.createElement(n.Item,{value:"not sure",name:"nhs-number"},"I'm not sure"))},g={args:{label:"Have you changed your name?",hint:"This includes changing your last name or spelling your name differently.",error:"Select yes if you have changed your name"},render:a=>e.createElement(n,{...a},e.createElement(n.Item,{value:"yes",name:"change-name"},"Yes"),e.createElement(n.Item,{value:"no",name:"change-name"},"No"))},y={args:{label:"Do you have a mobile phone with signal?"},render:a=>e.createElement(n,{...a},e.createElement(n.Item,{value:"yes",name:"mobile-signal",hint:"We will text you a 6 digit security code"},"Yes, I have a mobile phone with signal"),e.createElement(n.Item,{value:"no",name:"mobile-signal",hint:"We will call you to give you a 6 digit security code"},"No, I want to use my landline"))},I={args:{label:"How do you want to sign in?"},render:a=>e.createElement(n,{...a},e.createElement(n.Item,{value:"nhs-login",name:"sign-in"},"NHS login"),e.createElement(n.Item,{value:"gov-uk",name:"sign-in"},"GOV.UK Verify"),e.createElement(n.Divider,null),e.createElement(n.Item,{value:"create account",name:"sign-in"},"Create an account"))},v={args:{label:"How would you like to be contacted?",hint:"Select one option"},render:a=>e.createElement(n,{...a},e.createElement(n.Item,{name:"contact-method",value:"email",conditional:e.createElement(N,{label:"Email address",width:"two-thirds"})},"Email"),e.createElement(n.Item,{name:"contact-method",value:"phone",conditional:e.createElement(N,{label:"Phone number",width:"two-thirds"})},"Phone"),e.createElement(n.Item,{name:"contact-method",value:"sms",conditional:e.createElement(N,{label:"Mobile number",width:"two-thirds"})},"Text message"))};var S,H,C;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(H=u.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var W,D,P;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(D=h.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var x,Y,T;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:T.source}}};var L,A,M;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(M=(A=g.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var O,F,G;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(G=(F=y.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var V,z,U;I.parameters={...I.parameters,docs:{...(V=I.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(U=(z=I.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var j,q,K;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'How would you like to be contacted?',
    hint: 'Select one option'
  },
  render: args => <Radio {...args}>
      <Radio.Item name="contact-method" value="email" conditional={<Input label="Email address" width="two-thirds" />}>
        Email
      </Radio.Item>
      <Radio.Item name="contact-method" value="phone" conditional={<Input label="Phone number" width="two-thirds" />}>
        Phone
      </Radio.Item>
      <Radio.Item name="contact-method" value="sms" conditional={<Input label="Mobile number" width="two-thirds" />}>
        Text message
      </Radio.Item>
    </Radio>
}`,...(K=(q=v.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};const te=["Default","Inline","WithHint","WithError","WithItemHint","WithDivider","WithConditionalContent"],pe=Object.freeze(Object.defineProperty({__proto__:null,Default:u,Inline:h,WithConditionalContent:v,WithDivider:I,WithError:g,WithHint:p,WithItemHint:y,__namedExportsOrder:te,default:oe},Symbol.toStringTag,{value:"Module"}));export{u as D,n as R,I as W,y as a,v as b,pe as c,oe as m};
