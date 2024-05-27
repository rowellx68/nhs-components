import{R as r}from"./index-uCp2LrAq.js";import{P as n}from"./Paragraph-CJ_RiSc1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";const w={title:"Styles/Typography/Paragraph",component:n,parameters:{docs:{description:{component:"https://service-manual.nhs.uk/design-system/styles/typography#paragraphs"}}}},a={args:{children:"nhsuk-body"},render:e=>r.createElement(n,{...e})},t={args:{variant:"lead",children:"nhsuk-body-l"},render:e=>r.createElement(n,{...e})},s={args:{variant:"small",children:"nhsuk-body-s"},render:e=>r.createElement(n,{...e})},o={args:{fontSize:"64"},argTypes:{fontSize:{control:{type:"select"},options:["64","48","32","24","22","19","16","14"]}},render:e=>r.createElement(n,{...e},"nhsuk-u-font-size-",e.fontSize)},u={args:{fontWeight:"bold"},argTypes:{fontWeight:{control:{type:"select"},options:["bold","normal"]}},render:e=>r.createElement(n,{...e},"nhsuk-u-font-weight-",e.fontWeight)},i={args:{textAlignRight:!0,children:"تعديل اتجاه الكتابة باللغة العربية ليكون من اليمين الى اليسار"},render:e=>r.createElement(r.Fragment,null,r.createElement(n,{...e}),r.createElement(n,null,"Modify the direction of writing in Arabic to be from right to left"))};var c,g,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'nhsuk-body'
  },
  render: args => <Paragraph {...args} />
}`,...(l=(g=a.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var p,d,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'lead',
    children: 'nhsuk-body-l'
  },
  render: args => <Paragraph {...args} />
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var h,f,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'small',
    children: 'nhsuk-body-s'
  },
  render: args => <Paragraph {...args} />
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,A,b;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    fontSize: '64'
  },
  argTypes: {
    fontSize: {
      control: {
        type: 'select'
      },
      options: ['64', '48', '32', '24', '22', '19', '16', '14']
    }
  },
  render: args => <Paragraph {...args}>
      nhsuk-u-font-size-
      {args.fontSize}
    </Paragraph>
}`,...(b=(A=o.parameters)==null?void 0:A.docs)==null?void 0:b.source}}};var P,k,z;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    fontWeight: 'bold'
  },
  argTypes: {
    fontWeight: {
      control: {
        type: 'select'
      },
      options: ['bold', 'normal']
    }
  },
  render: args => <Paragraph {...args}>
      nhsuk-u-font-weight-
      {args.fontWeight}
    </Paragraph>
}`,...(z=(k=u.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var E,W,T;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    textAlignRight: true,
    children: 'تعديل اتجاه الكتابة باللغة العربية ليكون من اليمين الى اليسار'
  },
  render: args => <>
      <Paragraph {...args} />
      <Paragraph>
        Modify the direction of writing in Arabic to be from right to left
      </Paragraph>
    </>
}`,...(T=(W=i.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};const D=["Default","Lead","Small","FontSizes","FontWeights","TextAlignRight"];export{a as Default,o as FontSizes,u as FontWeights,t as Lead,s as Small,i as TextAlignRight,D as __namedExportsOrder,w as default};
