import{j as r}from"./jsx-runtime-DRTy3Uxn.js";import{F as X}from"./FormGroup-10nvBGAl.js";import"./index-GwSuHVHi.js";import"./index-YMjqK2a4.js";import{c as d}from"./clsx-CH7BE6MN.js";import{r as L}from"./index-BBkUAzwr.js";import{H as E}from"./Hint-BZ4h_WhZ.js";import{E as Z}from"./ErrorMessage-qXgaBtKk.js";import"./use-id-with-prefix-Dzx8tZmb.js";import"./Label-BNiKYQQA.js";import"./index-BVDTxkrF.js";const ee=(e,U)=>{const{mode:G,limit:c,threshold:l,containerProps:P,countError:C,countHint:q,countRemaining:w,...z}=e,{className:D,...J}=P||{},[t,K]=L.useState({remaining:c,thresholdHit:!1}),Q=h=>{const{value:m}=h.target,p=G==="word"?m.split(" ").filter(g=>!!g).length:m.length,u=c-p;K({remaining:u,thresholdHit:!!l&&u/c<=l/100})};return r.jsx("div",{className:d("nhsuk-character-count",D),...J,children:r.jsx(X,{...z,inputType:"textarea",render:({id:h,name:m,error:p,className:u,rows:g,onChange:x,...V})=>r.jsxs(r.Fragment,{children:[r.jsx("textarea",{id:h,name:m,className:d("nhsuk-textarea","nhsuk-js-character-count",{"nhsuk-textarea--error":p||t.remaining<0},u),ref:U,rows:g,onChange:f=>{Q(f),x==null||x(f)},...V}),r.jsx(E,{className:"nhsuk-character-count__message nhsuk-u-visually-hidden",id:`${h}-info`,children:q(c)}),t.remaining<0?r.jsx(Z,{className:d("nhsuk-character-count__message nhsuk-character-count__status"),"aria-hidden":"true",children:C(Math.abs(t.remaining))}):r.jsx(E,{className:d("nhsuk-character-count__message nhsuk-character-count__status",{"nhsuk-character-count__message--disabled":!!l&&!t.thresholdHit}),"aria-hidden":"true",children:w(Math.abs(t.remaining))}),r.jsx("div",{className:"nhsuk-character-count__sr-status nhsuk-u-visually-hidden","aria-live":"polite",children:t.remaining<0?C(Math.abs(t.remaining)):w(Math.abs(t.remaining))})]})})})},a=L.forwardRef(ee);a.displayName="CharacterCount";a.__docgenInfo={description:`Use textarea to let users enter more than 1 line of text.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/textarea).

@param {CharacterCount} props - The props of the component.
@param {React.ForwardedRef<HTMLTextAreaElement>} ref - Optional ref to be passed to the textarea.

@example
\`\`\`tsx
<CharacterCount  id="example" label="Example" />
\`\`\``,methods:[],displayName:"CharacterCount"};CharacterCountForwardRef.__docgenInfo={description:`Use textarea to let users enter more than 1 line of text.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/textarea).

@param {CharacterCount} props - The props of the component.
@param {React.ForwardedRef<HTMLTextAreaElement>} ref - Optional ref to be passed to the textarea.

@example
\`\`\`tsx
<CharacterCount  id="example" label="Example" />
\`\`\``,methods:[],displayName:"CharacterCount"};const de={component:a,title:"Experimental/Components/Form Elements/Character Count",tags:["autodocs"]},n={args:{label:"Example",hint:"This is a hint",rows:5,mode:"character",limit:10,countHint:e=>`You can enter up to ${e} characters`,countRemaining:e=>`You have ${e} characters remaining`,countError:e=>`You have ${e} characters too many`},render:e=>r.jsx(a,{...e})},o={args:{label:"Example",hint:"This is a hint",rows:5,mode:"word",limit:5,countHint:e=>`You can enter up to ${e} words`,countRemaining:e=>`You have ${e} words remaining`,countError:e=>`You have ${e} words too many`},render:e=>r.jsx(a,{...e})},s={args:{label:"Example",hint:"This is a hint",rows:5,mode:"character",limit:10,threshold:75,countHint:e=>`You can enter up to ${e} characters`,countRemaining:e=>`You have ${e} characters remaining`,countError:e=>`You have ${e} characters too many`},render:e=>r.jsx(a,{...e})},i={args:{label:"Example",hint:"This is a hint",rows:5,mode:"word",limit:5,threshold:75,countHint:e=>`You can enter up to ${e} words`,countRemaining:e=>`You have ${e} words remaining`,countError:e=>`You have ${e} words too many`},render:e=>r.jsx(a,{...e})};var $,v,Y,T,b;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Example',
    hint: 'This is a hint',
    rows: 5,
    mode: 'character',
    limit: 10,
    countHint: limit => \`You can enter up to \${limit} characters\`,
    countRemaining: remaining => \`You have \${remaining} characters remaining\`,
    countError: excess => \`You have \${excess} characters too many\`
  },
  render: args => <CharacterCount {...args} />
}`,...(Y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:Y.source},description:{story:"The basic usage of the Character Count component.",...(b=(T=n.parameters)==null?void 0:T.docs)==null?void 0:b.description}}};var y,_,R,H,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Example',
    hint: 'This is a hint',
    rows: 5,
    mode: 'word',
    limit: 5,
    countHint: limit => \`You can enter up to \${limit} words\`,
    countRemaining: remaining => \`You have \${remaining} words remaining\`,
    countError: excess => \`You have \${excess} words too many\`
  },
  render: args => <CharacterCount {...args} />
}`,...(R=(_=o.parameters)==null?void 0:_.docs)==null?void 0:R.source},description:{story:"The usage of the Character Count component in word count.",...(j=(H=o.parameters)==null?void 0:H.docs)==null?void 0:j.description}}};var k,N,F,S,M;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Example',
    hint: 'This is a hint',
    rows: 5,
    mode: 'character',
    limit: 10,
    threshold: 75,
    countHint: limit => \`You can enter up to \${limit} characters\`,
    countRemaining: remaining => \`You have \${remaining} characters remaining\`,
    countError: excess => \`You have \${excess} characters too many\`
  },
  render: args => <CharacterCount {...args} />
}`,...(F=(N=s.parameters)==null?void 0:N.docs)==null?void 0:F.source},description:{story:"The usage of the Character Count component with a threshold.",...(M=(S=s.parameters)==null?void 0:S.docs)==null?void 0:M.description}}};var W,O,A,B,I;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Example',
    hint: 'This is a hint',
    rows: 5,
    mode: 'word',
    limit: 5,
    threshold: 75,
    countHint: limit => \`You can enter up to \${limit} words\`,
    countRemaining: remaining => \`You have \${remaining} words remaining\`,
    countError: excess => \`You have \${excess} words too many\`
  },
  render: args => <CharacterCount {...args} />
}`,...(A=(O=i.parameters)==null?void 0:O.docs)==null?void 0:A.source},description:{story:"The usage of the Character Count component with a threshold.",...(I=(B=i.parameters)==null?void 0:B.docs)==null?void 0:I.description}}};const le=["Basic","WordCount","Threshold","ThresholdWordCount"];export{n as Basic,s as Threshold,i as ThresholdWordCount,o as WordCount,le as __namedExportsOrder,de as default};
