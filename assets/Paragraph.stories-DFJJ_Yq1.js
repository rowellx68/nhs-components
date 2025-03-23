import{R as r}from"./index-B0WjJBI_.js";import{P as n}from"./Paragraph-CiXxMI4-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";const w={title:"Styles/Typography/Paragraph",component:n,parameters:{docs:{description:{component:"https://service-manual.nhs.uk/design-system/styles/typography#paragraphs"}}}},a={args:{children:"nhsuk-body"},render:e=>r.createElement(n,{...e})},t={args:{variant:"lead",children:"nhsuk-body-l"},render:e=>r.createElement(n,{...e})},s={args:{variant:"small",children:"nhsuk-body-s"},render:e=>r.createElement(n,{...e})},o={args:{fontSize:"64"},argTypes:{fontSize:{control:{type:"select"},options:["64","48","32","24","22","19","16","14"]}},render:e=>r.createElement(n,{...e},"nhsuk-u-font-size-",e.fontSize)},i={args:{fontWeight:"bold"},argTypes:{fontWeight:{control:{type:"select"},options:["bold","normal"]}},render:e=>r.createElement(n,{...e},"nhsuk-u-font-weight-",e.fontWeight)},c={args:{textAlignRight:!0,children:"تعديل اتجاه الكتابة باللغة العربية ليكون من اليمين الى اليسار"},render:e=>r.createElement(r.Fragment,null,r.createElement(n,{...e}),r.createElement(n,null,"Modify the direction of writing in Arabic to be from right to left"))};var g,l,p;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: 'nhsuk-body'
  },
  render: args => <Paragraph {...args} />
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,m,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'lead',
    children: 'nhsuk-body-l'
  },
  render: args => <Paragraph {...args} />
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,f,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'small',
    children: 'nhsuk-body-s'
  },
  render: args => <Paragraph {...args} />
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,b,P;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(b=o.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var k,z,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(z=i.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var W,T,x;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(x=(T=c.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};const D=["Default","Lead","Small","FontSizes","FontWeights","TextAlignRight"];export{a as Default,o as FontSizes,i as FontWeights,t as Lead,s as Small,c as TextAlignRight,D as __namedExportsOrder,w as default};
