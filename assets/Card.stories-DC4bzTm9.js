import{r as b,R as e}from"./index-uCp2LrAq.js";import{f as z}from"./factory-Dl037jXY.js";import{c as o}from"./clsx-B-dksMZM.js";import{p as q}from"./polymorphic-factory-C1jPlyAy.js";import{B as D}from"./Base-CQ_ipzy_.js";import{H as P}from"./Heading-DbjV9X_b.js";import{R,C as A}from"./Grid-C4lDuMyn.js";import"./_commonjsHelpers-BosuxZz1.js";const S=b.createContext({}),V=()=>b.useContext(S),W=S.Provider,m=({width:a=27,height:n=27,className:t,...s})=>e.createElement("svg",{className:o("nhsuk-icon nhsuk-icon__chevron-right-circle",t),xmlns:"http://www.w3.org/2000/svg",width:a,height:n,"aria-hidden":"true",focusable:"false",...s},e.createElement("circle",{cx:"13.333",cy:"13.333",r:"13.333",fill:""}),e.createElement("g",{"data-name":"Group 1",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2.667"},e.createElement("path",{d:"M15.438 13l-3.771 3.771"}),e.createElement("path",{"data-name":"Path",d:"M11.667 9.229L15.438 13"})));m.displayName="ChevronRightCircleIcon";m.__docgenInfo={description:"",methods:[],displayName:"ChevronRightCircleIcon",props:{width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"27",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"27",computed:!1}}}};const r=z(({variant:a,clickable:n,...t},s)=>e.createElement(W,{value:{variant:a}},e.createElement("div",{className:o("nhsuk-card",{"nhsuk-card--clickable":n,[`nhsuk-card--${a}`]:a}),...t,ref:s}))),p=q(({className:a,as:n="img",...t},s)=>e.createElement(D,{as:n,className:o("nhsuk-card__img",a),ref:s,...t})),u=({className:a,children:n,...t})=>{const{variant:s}=V();return e.createElement("div",{className:o("nhsuk-card__content",{[`nhsuk-card__content--${s}`]:s},a),...t},n,s==="primary"&&e.createElement(m,null))},C=({className:a,as:n="h2",...t})=>e.createElement(P,{as:n,className:o("nhsuk-card__heading",a),...t}),h=({className:a,...n})=>e.createElement("p",{className:o("nhsuk-card__description",a),...n}),g=q(({className:a,as:n="a",...t},s)=>e.createElement(D,{as:n,className:o("nhsuk-card__link",a),ref:s,...t})),f=({className:a,...n})=>e.createElement(R,{className:o("nhsuk-card-group",a),...n}),k=({className:a,...n})=>e.createElement(A,{className:o("nhsuk-card-group__item",a),...n});r.displayName="Card";p.displayName="Card.Image";u.displayName="Card.Content";C.displayName="Card.Heading";h.displayName="Card.Description";g.displayName="Card.Link";f.displayName="Card.Group";k.displayName="Card.GroupItem";r.Image=p;r.Content=u;r.Heading=C;r.Description=h;r.Link=g;r.Group=f;r.GroupItem=k;r.__docgenInfo={description:"",methods:[],displayName:"Card"};p.__docgenInfo={description:"",methods:[],displayName:"Card.Image",props:{as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'img'",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"Card.Content"};C.__docgenInfo={description:"",methods:[],displayName:"Card.Heading",props:{size:{required:!1,tsType:{name:"union",raw:"'xl' | 'l' | 'm' | 's' | 'xs'",elements:[{name:"literal",value:"'xl'"},{name:"literal",value:"'l'"},{name:"literal",value:"'m'"},{name:"literal",value:"'s'"},{name:"literal",value:"'xs'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'h2'",computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"Card.Description"};g.__docgenInfo={description:"",methods:[],displayName:"Card.Link",props:{as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};f.__docgenInfo={description:"",methods:[],displayName:"Card.Group"};k.__docgenInfo={description:"",methods:[],displayName:"Card.GroupItem",props:{width:{required:!0,tsType:{name:"union",raw:`| 'full'
| 'one-half'
| 'one-third'
| 'two-thirds'
| 'one-quarter'
| 'three-quarters'`,elements:[{name:"literal",value:"'full'"},{name:"literal",value:"'one-half'"},{name:"literal",value:"'one-third'"},{name:"literal",value:"'two-thirds'"},{name:"literal",value:"'one-quarter'"},{name:"literal",value:"'three-quarters'"}]},description:""}}};const $={title:"Components/Navigation/Card",component:r,parameters:{docs:{description:{component:`Use a card to give users a brief summary of content or a task, often with a link to more detail. You can display a card alongside other cards to group related content or tasks.

https://service-manual.nhs.uk/design-system/components/card`}}}},d={render:a=>e.createElement(r.Group,null,e.createElement(r.GroupItem,{width:"one-third"},e.createElement(r,{clickable:!0,...a},e.createElement(r.Content,null,e.createElement(r.Heading,{as:"h5",size:"xs"},e.createElement(r.Link,{href:"#"},"Order a repeat prescription"))))))},i={render:a=>e.createElement(r.Group,null,e.createElement(r.GroupItem,{width:"two-thirds"},e.createElement(r,{clickable:!0,variant:"primary",...a},e.createElement(r.Content,null,e.createElement(r.Heading,{as:"h2",size:"m"},e.createElement(r.Link,{href:"#"},"Introduction to care and support")),e.createElement(r.Description,null,"A quick guide for people who have care and support needs and their carers")))))},c={render:a=>e.createElement(r.Group,null,e.createElement(r.GroupItem,{width:"two-thirds"},e.createElement(r,{clickable:!0,variant:"secondary",...a},e.createElement(r.Content,null,e.createElement(r.Heading,{as:"h2",size:"m"},e.createElement(r.Link,{href:"#"},"Urgent and emergency care services")),e.createElement(r.Description,null,"Services the NHS provides if you need urgent or emergency medical help")))))},l={render:a=>e.createElement(r.Group,null,e.createElement(r.GroupItem,{width:"one-third"},e.createElement(r,{clickable:!0,...a},e.createElement(r.Image,{src:"https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg",alt:"A person wearing a face mask"}),e.createElement(r.Content,null,e.createElement(r.Heading,{as:"h2",size:"m"},e.createElement(r.Link,{href:"#"},"Exercise")),e.createElement(r.Description,null,"Programmes, workouts and tips to get you moving and improve your fitness and wellbeing")))))};var y,E,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Card.Group>
      <Card.GroupItem width="one-third">
        <Card clickable {...args}>
          <Card.Content>
            <Card.Heading as="h5" size="xs">
              <Card.Link href="#">Order a repeat prescription</Card.Link>
            </Card.Heading>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
}`,...(v=(E=d.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var _,I,w;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Card.Group>
      <Card.GroupItem width="two-thirds">
        <Card clickable variant="primary" {...args}>
          <Card.Content>
            <Card.Heading as="h2" size="m">
              <Card.Link href="#">Introduction to care and support</Card.Link>
            </Card.Heading>

            <Card.Description>
              A quick guide for people who have care and support needs and their
              carers
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
}`,...(w=(I=i.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var G,N,x;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: args => <Card.Group>
      <Card.GroupItem width="two-thirds">
        <Card clickable variant="secondary" {...args}>
          <Card.Content>
            <Card.Heading as="h2" size="m">
              <Card.Link href="#">Urgent and emergency care services</Card.Link>
            </Card.Heading>

            <Card.Description>
              Services the NHS provides if you need urgent or emergency medical
              help
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
}`,...(x=(N=c.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var H,L,T;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <Card.Group>
      <Card.GroupItem width="one-third">
        <Card clickable {...args}>
          <Card.Image src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg" alt="A person wearing a face mask" />
          <Card.Content>
            <Card.Heading as="h2" size="m">
              <Card.Link href="#">Exercise</Card.Link>
            </Card.Heading>

            <Card.Description>
              Programmes, workouts and tips to get you moving and improve your
              fitness and wellbeing
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
}`,...(T=(L=l.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const Y=["TopTask","Primary","Secondary","WithImage"];export{i as Primary,c as Secondary,d as TopTask,l as WithImage,Y as __namedExportsOrder,$ as default};
