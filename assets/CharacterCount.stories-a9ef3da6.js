import{j as e}from"./jsx-runtime-94f6e698.js";import{F as Z}from"./FormGroup-7a85a743.js";import{E as rr}from"./ErrorMessage-086bc295.js";import{H as E}from"./Hint-57b83903.js";import{c as d}from"./clsx-1229b3e0.js";import{r as P}from"./index-8db94870.js";import"./use-id-with-prefix-a03533b1.js";import"./Label-fb36fd45.js";import"./Fieldset-742b488e.js";import"./_commonjsHelpers-042e6b4d.js";const x=(r,U)=>{const{mode:q,limit:c,threshold:l,containerProps:z,countError:C,countHint:A,countRemaining:w,...D}=r,{className:J,...K}=z||{},[a,L]=P.useState({remaining:c,thresholdHit:!1}),Q=h=>{const{value:m}=h.target,p=q==="word"?m.split(" ").length:m.length,u=c-p;L({remaining:u,thresholdHit:!!l&&u/c<=l/100})};return e.jsx("div",{className:d("nhsuk-character-count",J),...K,children:e.jsx(Z,{...D,inputType:"textarea",render:({id:h,name:m,error:p,className:u,rows:V,onChange:g,...X})=>e.jsxs(e.Fragment,{children:[e.jsx("textarea",{id:h,name:m,className:d("nhsuk-textarea","nhsuk-js-character-count",{"nhsuk-textarea--error":p||a.remaining<0},u),ref:U,rows:V,onChange:$=>{Q($),g==null||g($)},...X}),e.jsx(E,{className:"nhsuk-character-count__message nhsuk-u-visually-hidden",id:`${h}-info`,children:A(c)}),a.remaining<0?e.jsx(rr,{className:d("nhsuk-character-count__message nhsuk-character-count__status"),"aria-hidden":"true",children:C(Math.abs(a.remaining))}):e.jsx(E,{className:d("nhsuk-character-count__message nhsuk-character-count__status",{"nhsuk-character-count__message--disabled":!!l&&!a.thresholdHit}),"aria-hidden":"true",children:w(Math.abs(a.remaining))}),e.jsx("div",{className:"nhsuk-character-count__sr-status nhsuk-u-visually-hidden","aria-live":"polite",children:a.remaining<0?C(Math.abs(a.remaining)):w(Math.abs(a.remaining))})]})})})},n=P.forwardRef(x);n.displayName="CharacterCount";try{x.displayName="CharacterCount",x.__docgenInfo={description:`Use textarea to let users enter more than 1 line of text.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/textarea).`,displayName:"CharacterCount",props:{}}}catch{}const ur={component:n,title:"Experimental/Components/Form Elements/Character Count",tags:["autodocs"]},t={args:{label:"Example",hint:"This is a hint",rows:5,mode:"character",limit:10,countHint:r=>`You can enter up to ${r} characters`,countRemaining:r=>`You have ${r} characters remaining`,countError:r=>`You have ${r} characters too many`},render:r=>e.jsx(n,{...r})},o={args:{label:"Example",hint:"This is a hint",rows:5,mode:"word",limit:5,countHint:r=>`You can enter up to ${r} words`,countRemaining:r=>`You have ${r} words remaining`,countError:r=>`You have ${r} words too many`},render:r=>e.jsx(n,{...r})},s={args:{label:"Example",hint:"This is a hint",rows:5,mode:"character",limit:10,threshold:75,countHint:r=>`You can enter up to ${r} characters`,countRemaining:r=>`You have ${r} characters remaining`,countError:r=>`You have ${r} characters too many`},render:r=>e.jsx(n,{...r})},i={args:{label:"Example",hint:"This is a hint",rows:5,mode:"word",limit:5,threshold:75,countHint:r=>`You can enter up to ${r} words`,countRemaining:r=>`You have ${r} words remaining`,countError:r=>`You have ${r} words too many`},render:r=>e.jsx(n,{...r})};var Y,_,v,y,f;t.parameters={...t.parameters,docs:{...(Y=t.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(v=(_=t.parameters)==null?void 0:_.docs)==null?void 0:v.source},description:{story:"The basic usage of the Character Count component.",...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.description}}};var T,b,j,H,k;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(j=(b=o.parameters)==null?void 0:b.docs)==null?void 0:j.source},description:{story:"The usage of the Character Count component in word count.",...(k=(H=o.parameters)==null?void 0:H.docs)==null?void 0:k.description}}};var R,N,S,F,M;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(S=(N=s.parameters)==null?void 0:N.docs)==null?void 0:S.source},description:{story:"The usage of the Character Count component with a threshold.",...(M=(F=s.parameters)==null?void 0:F.docs)==null?void 0:M.description}}};var W,B,G,I,O;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=(B=i.parameters)==null?void 0:B.docs)==null?void 0:G.source},description:{story:"The usage of the Character Count component with a threshold.",...(O=(I=i.parameters)==null?void 0:I.docs)==null?void 0:O.description}}};const dr=["Basic","WordCount","Threshold","ThresholdWordCount"];export{t as Basic,s as Threshold,i as ThresholdWordCount,o as WordCount,dr as __namedExportsOrder,ur as default};
//# sourceMappingURL=CharacterCount.stories-a9ef3da6.js.map
