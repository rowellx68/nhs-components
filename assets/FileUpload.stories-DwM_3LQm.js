import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-opzFqeq4.js";import{n as r,t as i}from"./clsx-keIqec4B.js";import{n as a,t as o}from"./factory-OHWVIE0r.js";import{s,t as c}from"./nhsuk-CX7Kufhn.js";import{n as l,t as u}from"./FormGroup-BiXetg1q.js";var d,f,p=t((()=>{r(),c(),d=e(n(),1),l(),a(),f=o(({i18n:e,...t},n)=>{let r=(0,d.useRef)(null),a=(0,d.useRef)(null);return(0,d.useImperativeHandle)(n,()=>r.current),(0,d.useEffect)(()=>{let t=r.current?.closest(`.nhsuk-file-upload`);if(t&&!a.current)return a.current=new s(t,{i18n:e}),()=>{t.removeAttribute(`data-nhsuk-file-upload-init`)}},[]),d.createElement(u,{as:`input`,withErrorLine:!0,...t,inputType:`input`,formGroupProps:{className:`nhsuk-file-upload`,"data-module":`nhsuk-file-upload`},render:({id:e,name:t,className:n,withError:a,...o})=>d.createElement(`input`,{id:e,name:t,className:i(`nhsuk-file-upload__input`,n),type:`file`,...o,ref:r})})}),f.displayName=`FileUpload`})),m,h,g,_,v,y,b;t((()=>{p(),m={title:`Components/Form Elements/File Upload`,component:f,parameters:{docs:{description:{component:`Use the file upload component to let users select and upload a file.

https://service-manual.nhs.uk/design-system/components/file-upload`}}}},h={args:{id:`file-upload`,name:`file-upload`,label:`Upload a file`,labelProps:{variant:`page-heading`}}},g={args:{id:`file-upload`,name:`file-upload`,label:`Upload your photo`,labelProps:{variant:`page-heading`},hint:`Your photo may be in your Pictures, Photos, Downloads or Desktop folder`}},_={args:{id:`file-upload`,name:`file-upload`,label:`Upload a file`,labelProps:{variant:`page-heading`},error:`The selected file must be a JPG, BMP or TIF`}},v={args:{id:`file-upload`,name:`file-upload`,label:`Upload multiple files`,labelProps:{variant:`page-heading`},multiple:!0}},y={args:{id:`file-upload`,name:`file-upload`,label:`Upload a file`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'file-upload',
    name: 'file-upload',
    label: 'Upload a file',
    labelProps: {
      variant: 'page-heading'
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'file-upload',
    name: 'file-upload',
    label: 'Upload your photo',
    labelProps: {
      variant: 'page-heading'
    },
    hint: 'Your photo may be in your Pictures, Photos, Downloads or Desktop folder'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'file-upload',
    name: 'file-upload',
    label: 'Upload a file',
    labelProps: {
      variant: 'page-heading'
    },
    error: 'The selected file must be a JPG, BMP or TIF'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'file-upload',
    name: 'file-upload',
    label: 'Upload multiple files',
    labelProps: {
      variant: 'page-heading'
    },
    multiple: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'file-upload',
    name: 'file-upload',
    label: 'Upload a file'
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithHint`,`WithError`,`Multiple`,`WithoutPageHeading`]}))();export{h as Default,v as Multiple,_ as WithError,g as WithHint,y as WithoutPageHeading,b as __namedExportsOrder,m as default};