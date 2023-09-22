import{j as r}from"./jsx-runtime-94f6e698.js";import{D as t}from"./DateInput-735d9680.js";import{r as C}from"./index-8db94870.js";import"./FormGroup-ed59bfc4.js";import"./clsx-1229b3e0.js";import"./Label-fb36fd45.js";import"./ErrorMessage-086bc295.js";import"./Hint-57b83903.js";import"./Fieldset-742b488e.js";import"./_commonjsHelpers-042e6b4d.js";const Y={component:t,title:"Components/Form Elements/Date Input",tags:["autodocs"]},a={args:{label:"What is your date of birth?",labelProps:{size:"l"},hint:"For example, 15 3 1984",error:""},render:e=>r.jsx(t,{...e})},n={args:{label:"What is your date of birth?",hint:"For example, 15 3 1984"},render:e=>r.jsxs(t,{...e,children:[r.jsx(t.Day,{}),r.jsx(t.Month,{}),r.jsx(t.Year,{})]})},F=()=>{const[e,I]=C.useState();return r.jsxs(r.Fragment,{children:[r.jsxs("p",{children:["Value: ",e==null?void 0:e.day," ",e==null?void 0:e.month," ",e==null?void 0:e.year]}),r.jsx(t,{value:e,onChange:f=>I(f.target.value)})]})},s={render:()=>r.jsx(F,{})};var o,p,i,m,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    label: 'What is your date of birth?',
    labelProps: {
      size: 'l'
    },
    hint: 'For example, 15 3 1984',
    error: ''
  },
  render: args => <DateInput {...args} />
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source},description:{story:"The basic usage of the Date Input component.",...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.description}}};var d,h,l,u,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'What is your date of birth?',
    hint: 'For example, 15 3 1984'
  },
  render: args => <DateInput {...args}>
      <DateInput.Day />
      <DateInput.Month />
      <DateInput.Year />
    </DateInput>
}`,...(l=(h=n.parameters)==null?void 0:h.docs)==null?void 0:l.source},description:{story:"Date Input with separate day, month and year fields.",...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};var x,D,y,b,j;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <WithOnChangeComponent />
}`,...(y=(D=s.parameters)==null?void 0:D.docs)==null?void 0:y.source},description:{story:"Date Input with onChange handler.",...(j=(b=s.parameters)==null?void 0:b.docs)==null?void 0:j.description}}};const _=["Basic","SeparateFields","WithOnChange"];export{a as Basic,n as SeparateFields,s as WithOnChange,_ as __namedExportsOrder,Y as default};
//# sourceMappingURL=DateInput.stories-5bc5f6ff.js.map
