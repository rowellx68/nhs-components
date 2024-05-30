import{r as b,R as r}from"./index-uCp2LrAq.js";import{f as P}from"./factory-Dl037jXY.js";import{c as s}from"./clsx-B-dksMZM.js";import{p as D}from"./polymorphic-factory-C1jPlyAy.js";import{B as q}from"./Base-CQ_ipzy_.js";import{H as R}from"./Heading-DbjV9X_b.js";import{R as A,C as V}from"./Grid-C4lDuMyn.js";import"./_commonjsHelpers-BosuxZz1.js";const S=b.createContext({}),W=()=>b.useContext(S),F=S.Provider,l=({width:a=27,height:n=27,className:t,...o})=>r.createElement("svg",{className:s("nhsuk-icon nhsuk-icon__chevron-right-circle",t),xmlns:"http://www.w3.org/2000/svg",width:a,height:n,"aria-hidden":"true",focusable:"false",...o},r.createElement("circle",{cx:"13.333",cy:"13.333",r:"13.333",fill:""}),r.createElement("g",{"data-name":"Group 1",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2.667"},r.createElement("path",{d:"M15.438 13l-3.771 3.771"}),r.createElement("path",{"data-name":"Path",d:"M11.667 9.229L15.438 13"})));l.displayName="ChevronRightCircleIcon";l.__docgenInfo={description:"",methods:[],displayName:"ChevronRightCircleIcon",props:{width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"27",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"27",computed:!1}}}};const e=P(({variant:a,clickable:n,className:t,...o},z)=>r.createElement(F,{value:{variant:a}},r.createElement("div",{className:s("nhsuk-card",{"nhsuk-card--clickable":n,[`nhsuk-card--${a}`]:a},t),...o,ref:z}))),p=D(({className:a,as:n="img",...t},o)=>r.createElement(q,{as:n,className:s("nhsuk-card__img",a),ref:o,...t})),u=({className:a,children:n,...t})=>{const{variant:o}=W();return r.createElement("div",{className:s("nhsuk-card__content",{[`nhsuk-card__content--${o}`]:o},a),...t},n,o==="primary"&&r.createElement(l,null))},C=({className:a,as:n="h2",...t})=>r.createElement(R,{as:n,className:s("nhsuk-card__heading",a),...t}),h=({className:a,...n})=>r.createElement("p",{className:s("nhsuk-card__description",a),...n}),g=D(({className:a,as:n="a",...t},o)=>r.createElement(q,{as:n,className:s("nhsuk-card__link",a),ref:o,...t})),f=({className:a,...n})=>r.createElement(A,{className:s("nhsuk-card-group",a),...n}),k=({className:a,...n})=>r.createElement(V,{className:s("nhsuk-card-group__item",a),...n});e.displayName="Card";p.displayName="Card.Image";u.displayName="Card.Content";C.displayName="Card.Heading";h.displayName="Card.Description";g.displayName="Card.Link";f.displayName="Card.Group";k.displayName="Card.GroupItem";e.Image=p;e.Content=u;e.Heading=C;e.Description=h;e.Link=g;e.Group=f;e.GroupItem=k;e.__docgenInfo={description:"",methods:[],displayName:"Card"};p.__docgenInfo={description:"",methods:[],displayName:"Card.Image",props:{as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'img'",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"Card.Content"};C.__docgenInfo={description:"",methods:[],displayName:"Card.Heading",props:{size:{required:!1,tsType:{name:"union",raw:"'xl' | 'l' | 'm' | 's' | 'xs'",elements:[{name:"literal",value:"'xl'"},{name:"literal",value:"'l'"},{name:"literal",value:"'m'"},{name:"literal",value:"'s'"},{name:"literal",value:"'xs'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'h2'",computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"Card.Description"};g.__docgenInfo={description:"",methods:[],displayName:"Card.Link",props:{as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};f.__docgenInfo={description:"",methods:[],displayName:"Card.Group"};k.__docgenInfo={description:"",methods:[],displayName:"Card.GroupItem",props:{width:{required:!0,tsType:{name:"union",raw:`| 'full'
| 'one-half'
| 'one-third'
| 'two-thirds'
| 'one-quarter'
| 'three-quarters'`,elements:[{name:"literal",value:"'full'"},{name:"literal",value:"'one-half'"},{name:"literal",value:"'one-third'"},{name:"literal",value:"'two-thirds'"},{name:"literal",value:"'one-quarter'"},{name:"literal",value:"'three-quarters'"}]},description:""}}};const Y={title:"Components/Navigation/Card",component:e,subcomponents:{"Card.Content":e.Content,"Card.Description":e.Description,"Card.Heading":e.Heading,"Card.Image":e.Image,"Card.Link":e.Link,"Card.Group":e.Group,"Card.GroupItem":e.GroupItem},parameters:{docs:{description:{component:`Use a card to give users a brief summary of content or a task, often with a link to more detail. You can display a card alongside other cards to group related content or tasks.

https://service-manual.nhs.uk/design-system/components/card`}}}},d={render:a=>r.createElement(e.Group,null,r.createElement(e.GroupItem,{width:"one-third"},r.createElement(e,{clickable:!0,...a},r.createElement(e.Content,null,r.createElement(e.Heading,{as:"h5",size:"xs"},r.createElement(e.Link,{href:"#"},"Order a repeat prescription"))))))},i={render:a=>r.createElement(e.Group,null,r.createElement(e.GroupItem,{width:"two-thirds"},r.createElement(e,{clickable:!0,variant:"primary",...a},r.createElement(e.Content,null,r.createElement(e.Heading,{as:"h2",size:"m"},r.createElement(e.Link,{href:"#"},"Introduction to care and support")),r.createElement(e.Description,null,"A quick guide for people who have care and support needs and their carers")))))},c={render:a=>r.createElement(e.Group,null,r.createElement(e.GroupItem,{width:"two-thirds"},r.createElement(e,{clickable:!0,variant:"secondary",...a},r.createElement(e.Content,null,r.createElement(e.Heading,{as:"h2",size:"m"},r.createElement(e.Link,{href:"#"},"Urgent and emergency care services")),r.createElement(e.Description,null,"Services the NHS provides if you need urgent or emergency medical help")))))},m={render:a=>r.createElement(e.Group,null,r.createElement(e.GroupItem,{width:"one-third"},r.createElement(e,{clickable:!0,...a},r.createElement(e.Image,{src:"https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg",alt:"A person wearing a face mask"}),r.createElement(e.Content,null,r.createElement(e.Heading,{as:"h2",size:"m"},r.createElement(e.Link,{href:"#"},"Exercise")),r.createElement(e.Description,null,"Programmes, workouts and tips to get you moving and improve your fitness and wellbeing")))))};var y,E,v;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(E=d.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var I,_,G;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(G=(_=i.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var w,N,H;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(H=(N=c.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var x,L,T;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(T=(L=m.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const J=["TopTask","Primary","Secondary","WithImage"];export{i as Primary,c as Secondary,d as TopTask,m as WithImage,J as __namedExportsOrder,Y as default};
