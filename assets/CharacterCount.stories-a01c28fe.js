import{j as e}from"./jsx-runtime-94f6e698.js";import{F as Z}from"./FormGroup-7a85a743.js";import{E as rr}from"./ErrorMessage-086bc295.js";import{H as Y}from"./Hint-57b83903.js";import{c as d}from"./clsx-1229b3e0.js";import{r as U}from"./index-8db94870.js";import"./use-id-with-prefix-a03533b1.js";import"./Label-fb36fd45.js";import"./Fieldset-742b488e.js";import"./_commonjsHelpers-042e6b4d.js";const C=(r,q)=>{const{mode:z,limit:c,threshold:l,containerProps:A,countError:w,countHint:D,countRemaining:$,...J}=r,{className:K,...L}=A||{},[a,Q]=U.useState({remaining:c,thresholdHit:!1}),V=h=>{const{value:m}=h.target,p=z==="word"?m.split(" ").filter(g=>!!g).length:m.length,u=c-p;Q({remaining:u,thresholdHit:!!l&&u/c<=l/100})};return e.jsx("div",{className:d("nhsuk-character-count",K),...L,children:e.jsx(Z,{...J,inputType:"textarea",render:({id:h,name:m,error:p,className:u,rows:g,onChange:x,...X})=>e.jsxs(e.Fragment,{children:[e.jsx("textarea",{id:h,name:m,className:d("nhsuk-textarea","nhsuk-js-character-count",{"nhsuk-textarea--error":p||a.remaining<0},u),ref:q,rows:g,onChange:E=>{V(E),x==null||x(E)},...X}),e.jsx(Y,{className:"nhsuk-character-count__message nhsuk-u-visually-hidden",id:`${h}-info`,children:D(c)}),a.remaining<0?e.jsx(rr,{className:d("nhsuk-character-count__message nhsuk-character-count__status"),"aria-hidden":"true",children:w(Math.abs(a.remaining))}):e.jsx(Y,{className:d("nhsuk-character-count__message nhsuk-character-count__status",{"nhsuk-character-count__message--disabled":!!l&&!a.thresholdHit}),"aria-hidden":"true",children:$(Math.abs(a.remaining))}),e.jsx("div",{className:"nhsuk-character-count__sr-status nhsuk-u-visually-hidden","aria-live":"polite",children:a.remaining<0?w(Math.abs(a.remaining)):$(Math.abs(a.remaining))})]})})})},n=U.forwardRef(C);n.displayName="CharacterCount";try{C.displayName="CharacterCount",C.__docgenInfo={description:`Use textarea to let users enter more than 1 line of text.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/textarea).`,displayName:"CharacterCount",props:{}}}catch{}const ur={component:n,title:"Experimental/Components/Form Elements/Character Count",tags:["autodocs"]},t={args:{label:"Example",hint:"This is a hint",rows:5,mode:"character",limit:10,countHint:r=>`You can enter up to ${r} characters`,countRemaining:r=>`You have ${r} characters remaining`,countError:r=>`You have ${r} characters too many`},render:r=>e.jsx(n,{...r})},o={args:{label:"Example",hint:"This is a hint",rows:5,mode:"word",limit:5,countHint:r=>`You can enter up to ${r} words`,countRemaining:r=>`You have ${r} words remaining`,countError:r=>`You have ${r} words too many`},render:r=>e.jsx(n,{...r})},s={args:{label:"Example",hint:"This is a hint",rows:5,mode:"character",limit:10,threshold:75,countHint:r=>`You can enter up to ${r} characters`,countRemaining:r=>`You have ${r} characters remaining`,countError:r=>`You have ${r} characters too many`},render:r=>e.jsx(n,{...r})},i={args:{label:"Example",hint:"This is a hint",rows:5,mode:"word",limit:5,threshold:75,countHint:r=>`You can enter up to ${r} words`,countRemaining:r=>`You have ${r} words remaining`,countError:r=>`You have ${r} words too many`},render:r=>e.jsx(n,{...r})};var _,v,y,f,T;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(y=(v=t.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:"The basic usage of the Character Count component.",...(T=(f=t.parameters)==null?void 0:f.docs)==null?void 0:T.description}}};var b,j,H,k,R;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(H=(j=o.parameters)==null?void 0:j.docs)==null?void 0:H.source},description:{story:"The usage of the Character Count component in word count.",...(R=(k=o.parameters)==null?void 0:k.docs)==null?void 0:R.description}}};var N,S,F,M,W;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(F=(S=s.parameters)==null?void 0:S.docs)==null?void 0:F.source},description:{story:"The usage of the Character Count component with a threshold.",...(W=(M=s.parameters)==null?void 0:M.docs)==null?void 0:W.description}}};var B,G,I,O,P;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(I=(G=i.parameters)==null?void 0:G.docs)==null?void 0:I.source},description:{story:"The usage of the Character Count component with a threshold.",...(P=(O=i.parameters)==null?void 0:O.docs)==null?void 0:P.description}}};const dr=["Basic","WordCount","Threshold","ThresholdWordCount"];export{t as Basic,s as Threshold,i as ThresholdWordCount,o as WordCount,dr as __namedExportsOrder,ur as default};
//# sourceMappingURL=CharacterCount.stories-a01c28fe.js.map
