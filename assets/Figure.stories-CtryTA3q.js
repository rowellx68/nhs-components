import{R as a}from"./index-DCEVbkbO.js";import{B as f}from"./Base-CSr0pwnM.js";import{p as F}from"./polymorphic-factory-Bh8XY5CE.js";import{c as m}from"./clsx-B-dksMZM.js";import{f as I}from"./factory-B-vprWl1.js";import"./_commonjsHelpers-CqkleIqs.js";const e=I(({children:s,className:t,...r},n)=>a.createElement("figure",{className:m("nhsuk-image",t),...r,ref:n},s)),p=F(({className:s,as:t="img",...r},n)=>a.createElement(f,{as:t,className:m("nhsuk-image__img",s),...r,ref:n})),c=({children:s,className:t,...r})=>a.createElement("figcaption",{className:m("nhsuk-image__caption",t),...r},s);e.displayName="Figure";p.displayName="Figure.Image";c.displayName="Figure.Caption";e.Image=p;e.Caption=c;e.__docgenInfo={description:"",methods:[],displayName:"Figure"};p.__docgenInfo={description:"",methods:[],displayName:"Figure.Image",props:{as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'img'",computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"Figure.Caption"};const N={title:"Components/Content Presentation/Figure",component:e,subcomponents:{"Figure.Image":e.Image,"Figure.Caption":e.Caption},parameters:{docs:{description:{component:`Use images only if there is a real user need. Avoid unnecessary decoration.

https://service-manual.nhs.uk/design-system/components/images`}}}},o={render:s=>a.createElement(e,{...s},a.createElement(e.Image,{src:"https://assets.nhs.uk/prod/images/S_0318_Bullous_pemphigoid_lesions_.2e16d0ba.fill-320x213.jpg",alt:"Lots of sore red patches with small blisters spread across white skin on a woman's chest."}),a.createElement(e.Caption,null,"It can affect large areas of the body or limbs."))},i={render:s=>a.createElement(e,{...s},a.createElement(e.Image,{src:"https://assets.nhs.uk/prod/images/S_0318_Bullous_pemphigoid_lesions_.2e16d0ba.fill-320x213.jpg",alt:`Lots of sore red patches with small blisters spread across
        white skin on a woman's chest.`}))};var l,g,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <Figure {...args}>
      <Figure.Image src="https://assets.nhs.uk/prod/images/S_0318_Bullous_pemphigoid_lesions_.2e16d0ba.fill-320x213.jpg" alt="Lots of sore red patches with small blisters spread across white skin on a woman&#39;s chest." />
      <Figure.Caption>
        It can affect large areas of the body or limbs.
      </Figure.Caption>
    </Figure>
}`,...(d=(g=o.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var u,h,_;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <Figure {...args}>
      <Figure.Image src="https://assets.nhs.uk/prod/images/S_0318_Bullous_pemphigoid_lesions_.2e16d0ba.fill-320x213.jpg" alt="Lots of sore red patches with small blisters spread across
        white skin on a woman&#39;s chest." />
    </Figure>
}`,...(_=(h=i.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};const x=["ImageWithCaption","ImageWithoutCaption"];export{o as ImageWithCaption,i as ImageWithoutCaption,x as __namedExportsOrder,N as default};
