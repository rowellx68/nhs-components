import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-opzFqeq4.js";import{n as r,t as i}from"./clsx-keIqec4B.js";import{n as a,t as o}from"./factory-OHWVIE0r.js";import{a as s,t as c}from"./nhsuk-CX7Kufhn.js";import{n as l,t as u}from"./FormGroup-BiXetg1q.js";var d,f,p=t((()=>{r(),c(),d=e(n(),1),l(),a(),f=o(({width:e,i18n:t,...n},r)=>{let a=(0,d.useRef)(null),o=(0,d.useRef)(null);(0,d.useImperativeHandle)(r,()=>a.current),(0,d.useEffect)(()=>{let e=a.current?.closest(`.nhsuk-password-input`);if(e&&!o.current)return o.current=new s(e,{i18n:t}),()=>{e.removeAttribute(`data-nhsuk-password-input-init`)}},[]);let c=e&&!Number.isNaN(Number.parseInt(e,10));return d.createElement(u,{as:`input`,withErrorLine:!0,...n,inputType:`input`,formGroupProps:{className:`nhsuk-password-input`,"data-module":`nhsuk-password-input`},render:({id:t,name:n,className:r,withError:o,...s})=>d.createElement(`div`,{className:`nhsuk-input-wrapper`},d.createElement(`input`,{id:t,name:n,className:i(`nhsuk-input`,`nhsuk-password-input__input`,`nhsuk-js-password-input-input`,{[`nhsuk-input--width-${e}`]:c,[`nhsuk-u-width-${e}`]:!c&&e,"nhsuk-input--error":o},r),type:`password`,spellCheck:!1,autoCapitalize:`none`,autoComplete:`current-password`,...s,ref:a}),d.createElement(`button`,{className:`nhsuk-button nhsuk-button--secondary nhsuk-button--small nhsuk-password-input__toggle nhsuk-js-password-input-toggle`,"data-module":`nhsuk-button`,type:`button`,"aria-controls":t,"aria-label":`Show password`,hidden:!0},`Show`))})}),f.displayName=`PasswordInput`})),m,h,g,_,v,y,b;t((()=>{p(),m={title:`Components/Form Elements/Password Input`,component:f,parameters:{docs:{description:{component:`Use the password input component to help users reliably enter passwords.

https://service-manual.nhs.uk/design-system/components/password-input`}}}},h={args:{id:`example`,name:`example`,label:`Password`,labelProps:{variant:`page-heading`}}},g={args:{id:`with-hint-text`,name:`example`,label:`Password`,labelProps:{variant:`page-heading`},hint:`It probably has some letters, numbers and maybe even some symbols in it`}},_={args:{id:`with-error-message`,name:`example`,label:`Password`,labelProps:{variant:`page-heading`},error:`Enter a password`}},v={args:{id:`without-heading`,name:`example`,label:`Password`}},y={args:{id:`new-password`,name:`example`,label:`Create a password`,labelProps:{variant:`page-heading`},autoComplete:`new-password`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'example',
    name: 'example',
    label: 'Password',
    labelProps: {
      variant: 'page-heading'
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-hint-text',
    name: 'example',
    label: 'Password',
    labelProps: {
      variant: 'page-heading'
    },
    hint: 'It probably has some letters, numbers and maybe even some symbols in it'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'with-error-message',
    name: 'example',
    label: 'Password',
    labelProps: {
      variant: 'page-heading'
    },
    error: 'Enter a password'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'without-heading',
    name: 'example',
    label: 'Password'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'new-password',
    name: 'example',
    label: 'Create a password',
    labelProps: {
      variant: 'page-heading'
    },
    autoComplete: 'new-password'
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithHint`,`WithError`,`WithoutPageHeading`,`NewPassword`]}))();export{h as Default,y as NewPassword,_ as WithError,g as WithHint,v as WithoutPageHeading,b as __namedExportsOrder,m as default};