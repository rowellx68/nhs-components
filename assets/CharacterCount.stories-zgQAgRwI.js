import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-Co2kQL1W.js";import{n as r,t as i}from"./factory-BtzG2lhR.js";import{n as a,t as o}from"./Textarea-CKHm0UVn.js";var s,c,l=t((()=>{s=e(n(),1),r(),a(),c=i((e,t)=>s.createElement(o,{...e,ref:t})),c.displayName=`CharacterCount`})),u,d,f,p,m,h,g;t((()=>{u=e(n(),1),l(),d={title:`Components/Form Elements/Character Count`,component:c,args:{labelProps:{size:`l`,variant:`page-heading`}},parameters:{docs:{description:{component:`Help users know how much text they can enter when there is a limit on the number of characters.

https://service-manual.nhs.uk/design-system/components/character-count`}}}},f={args:{label:`Can you provide more detail?`,hint:`Do not include personal information like your name, date of birth or NHS number`,variant:`character-count`,maxCharacterLength:200},render:e=>u.createElement(c,e)},p={args:{label:`Enter a job description`,variant:`word-count`,maxWords:150},render:e=>u.createElement(c,e)},m={args:{label:`Enter a job description`,hint:`Do not include personal information like your name, date of birth or NHS number`,error:`Job description must be 350 characters or less`,variant:`character-count`,maxCharacterLength:350,defaultValue:`A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format.`},render:e=>u.createElement(c,e)},h={args:{label:`Enter a job description`,variant:`character-count`,maxCharacterLength:350,defaultValue:`A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels.`},render:e=>u.createElement(c,e)},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Can you provide more detail?',
    hint: 'Do not include personal information like your name, date of birth or NHS number',
    variant: 'character-count',
    maxCharacterLength: 200
  },
  render: args => <CharacterCount {...args} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enter a job description',
    variant: 'word-count',
    maxWords: 150
  },
  render: args => <CharacterCount {...args} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enter a job description',
    hint: 'Do not include personal information like your name, date of birth or NHS number',
    error: 'Job description must be 350 characters or less',
    variant: 'character-count',
    maxCharacterLength: 350,
    defaultValue: 'A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels. They make sure appropriate content is shown to a user in the right place and in the best format.'
  },
  render: args => <CharacterCount {...args} />
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Enter a job description',
    variant: 'character-count',
    maxCharacterLength: 350,
    defaultValue: 'A content designer works on the end-to-end journey of a service to help users complete their goal and government deliver a policy intent. Their work may involve the creation of, or change to, a transaction, product or single piece of content that stretches across digital and offline channels.'
  },
  render: args => <CharacterCount {...args} />
}`,...h.parameters?.docs?.source}}},g=[`Default`,`WithWordCount`,`WithError`,`WithDefaultValue`]}))();export{f as Default,h as WithDefaultValue,m as WithError,p as WithWordCount,g as __namedExportsOrder,d as default};