import{r as ne,R as e}from"./index-uCp2LrAq.js";import{f as ie}from"./factory-Dl037jXY.js";import{c as i}from"./clsx-B-dksMZM.js";import{p as re}from"./polymorphic-factory-C1jPlyAy.js";import{B as k}from"./Base-CQ_ipzy_.js";import{H as de}from"./Heading-DbjV9X_b.js";import{R as ce,C as me}from"./Grid-C4lDuMyn.js";import{V as le}from"./VisuallyHidden-io1tb15n.js";import{L as t}from"./List-DKAKbPCX.js";import{L as f}from"./Link-C7jhgo-3.js";import{P as E}from"./Paragraph-CJ_RiSc1.js";import"./_commonjsHelpers-BosuxZz1.js";const ae=ne.createContext({}),te=()=>ne.useContext(ae),ue=ae.Provider,L=({width:r=27,height:a=27,className:s,...o})=>e.createElement("svg",{className:i("nhsuk-icon nhsuk-icon__chevron-right-circle",s),xmlns:"http://www.w3.org/2000/svg",width:r,height:a,"aria-hidden":"true",focusable:"false",...o},e.createElement("circle",{cx:"13.333",cy:"13.333",r:"13.333",fill:""}),e.createElement("g",{"data-name":"Group 1",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2.667"},e.createElement("path",{d:"M15.438 13l-3.771 3.771"}),e.createElement("path",{"data-name":"Path",d:"M11.667 9.229L15.438 13"})));L.displayName="ChevronRightCircleIcon";L.__docgenInfo={description:"",methods:[],displayName:"ChevronRightCircleIcon",props:{width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"27",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"27",computed:!1}}}};const v=["non-urgent","urgent","emergency"],n=ie(({variant:r,clickable:a,className:s,...o},I)=>e.createElement(ue,{value:{variant:r}},e.createElement("div",{className:i("nhsuk-card",{"nhsuk-card--clickable":a,[`nhsuk-card--${r}`]:r&&!v.includes(r),[`nhsuk-card--care nhsuk-card--care--${r}`]:r&&v.includes(r)},s),...o,ref:I}))),w=re(({className:r,as:a="img",...s},o)=>e.createElement(k,{as:a,className:i("nhsuk-card__img",r),ref:o,...s})),_=({className:r,children:a,...s})=>{const{variant:o}=te();return e.createElement("div",{className:i("nhsuk-card__content",{[`nhsuk-card__content--${o}`]:o},r),...s},a,o==="primary"&&e.createElement(L,null))},b=({className:r,children:a,as:s="h2",visuallyHiddenText:o,...I})=>{const{variant:c}=te(),d=c&&v.includes(c),oe={as:d?"div":e.Fragment,...d?{className:"nhsuk-card--care__heading-container"}:{}},se={as:d?"span":e.Fragment,...d?{role:"text"}:{}};return e.createElement(k,{...oe},e.createElement(de,{as:s,className:i({"nhsuk-card__heading":!c||!v.includes(c),"nhsuk-card--care__heading":d,"nhsuk-card__heading--feature nhsuk-u-font-size-24":c==="feature"},r),...I},e.createElement(k,{...se},d&&e.createElement(le,null,o),a)),d&&e.createElement("span",{className:"nhsuk-card--care__arrow","aria-hidden":"true"}))},G=({className:r,...a})=>e.createElement("p",{className:i("nhsuk-card__description",r),...a}),x=re(({className:r,as:a="a",...s},o)=>e.createElement(k,{as:a,className:i("nhsuk-card__link",r),ref:o,...s})),H=({className:r,...a})=>e.createElement(ce,{className:i("nhsuk-card-group",r),...a}),N=({className:r,...a})=>e.createElement(me,{className:i("nhsuk-card-group__item",r),...a});n.displayName="Card";w.displayName="Card.Image";_.displayName="Card.Content";b.displayName="Card.Heading";G.displayName="Card.Description";x.displayName="Card.Link";H.displayName="Card.Group";N.displayName="Card.GroupItem";n.Image=w;n.Content=_;n.Heading=b;n.Description=G;n.Link=x;n.Group=H;n.GroupItem=N;n.__docgenInfo={description:"",methods:[],displayName:"Card"};w.__docgenInfo={description:"",methods:[],displayName:"Card.Image",props:{as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'img'",computed:!1}}}};_.__docgenInfo={description:"",methods:[],displayName:"Card.Content"};b.__docgenInfo={description:"",methods:[],displayName:"Card.Heading",props:{visuallyHiddenText:{required:!1,tsType:{name:"string"},description:"This will only be used if the Card variant is either 'non-urgent', 'urgent' or 'emergency'."},size:{required:!1,tsType:{name:"union",raw:"'xl' | 'l' | 'm' | 's' | 'xs'",elements:[{name:"literal",value:"'xl'"},{name:"literal",value:"'l'"},{name:"literal",value:"'m'"},{name:"literal",value:"'s'"},{name:"literal",value:"'xs'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'h2'",computed:!1}}}};G.__docgenInfo={description:"",methods:[],displayName:"Card.Description"};x.__docgenInfo={description:"",methods:[],displayName:"Card.Link",props:{as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};H.__docgenInfo={description:"",methods:[],displayName:"Card.Group"};N.__docgenInfo={description:"",methods:[],displayName:"Card.GroupItem",props:{width:{required:!0,tsType:{name:"union",raw:`| 'full'
| 'one-half'
| 'one-third'
| 'two-thirds'
| 'one-quarter'
| 'three-quarters'`,elements:[{name:"literal",value:"'full'"},{name:"literal",value:"'one-half'"},{name:"literal",value:"'one-third'"},{name:"literal",value:"'two-thirds'"},{name:"literal",value:"'one-quarter'"},{name:"literal",value:"'three-quarters'"}]},description:""}}};const _e={title:"Components/Navigation/Card",component:n,subcomponents:{"Card.Content":n.Content,"Card.Description":n.Description,"Card.Heading":n.Heading,"Card.Image":n.Image,"Card.Link":n.Link,"Card.Group":n.Group,"Card.GroupItem":n.GroupItem},parameters:{docs:{description:{component:`Use a card to give users a brief summary of content or a task, often with a link to more detail. You can display a card alongside other cards to group related content or tasks.

https://service-manual.nhs.uk/design-system/components/card`}}}},m={render:r=>e.createElement(n.Group,null,e.createElement(n.GroupItem,{width:"one-third"},e.createElement(n,{clickable:!0,...r},e.createElement(n.Content,null,e.createElement(n.Heading,{as:"h5",size:"xs"},e.createElement(n.Link,{href:"#"},"Order a repeat prescription"))))))},l={render:r=>e.createElement(n.Group,null,e.createElement(n.GroupItem,{width:"two-thirds"},e.createElement(n,{clickable:!0,variant:"primary",...r},e.createElement(n.Content,null,e.createElement(n.Heading,{as:"h2",size:"m"},e.createElement(n.Link,{href:"#"},"Introduction to care and support")),e.createElement(n.Description,null,"A quick guide for people who have care and support needs and their carers")))))},u={render:r=>e.createElement(n.Group,null,e.createElement(n.GroupItem,{width:"two-thirds"},e.createElement(n,{clickable:!0,variant:"secondary",...r},e.createElement(n.Content,null,e.createElement(n.Heading,{as:"h2",size:"m"},e.createElement(n.Link,{href:"#"},"Urgent and emergency care services")),e.createElement(n.Description,null,"Services the NHS provides if you need urgent or emergency medical help")))))},p={render:r=>e.createElement(n.Group,null,e.createElement(n.GroupItem,{width:"one-third"},e.createElement(n,{clickable:!0,...r},e.createElement(n.Image,{src:"https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg",alt:"A person wearing a face mask"}),e.createElement(n.Content,null,e.createElement(n.Heading,{as:"h2",size:"m"},e.createElement(n.Link,{href:"#"},"Exercise")),e.createElement(n.Description,null,"Programmes, workouts and tips to get you moving and improve your fitness and wellbeing")))))},h={render:r=>e.createElement("div",null,e.createElement(n,{variant:"feature",...r},e.createElement(n.Content,null,e.createElement(n.Heading,null,"A"),e.createElement(t,{border:!0},e.createElement(t.Item,null,e.createElement(f,{href:"#"},"AAA")),e.createElement(t.Item,null,e.createElement(f,{href:"#"},"Abdominal aortic aneurysm")),e.createElement(t.Item,null,e.createElement(f,{href:"#"},"Abscess"))))))},g={args:{variant:"non-urgent"},render:r=>e.createElement(n,{...r},e.createElement(n.Heading,{visuallyHiddenText:"Non-urgent advice: "},"Speak to a GP if:"),e.createElement(n.Content,null,e.createElement(t,{variant:"unordered"},e.createElement(t.Item,null,"you're not sure it's chickenpox"),e.createElement(t.Item,null,"the skin around the blisters is red, hot or painful (signs of infection)"),e.createElement(t.Item,null,"your child is ",e.createElement("a",{href:"#"},"dehydrated")),e.createElement(t.Item,null,"you're concerned about your child or they get worse")),e.createElement(E,null,"Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.")))},C={args:{variant:"urgent"},render:r=>e.createElement(n,{...r},e.createElement(n.Heading,{visuallyHiddenText:"Urgent advice: "},"Ask for an urgent GP appointment if:"),e.createElement(n.Content,null,e.createElement(t,{variant:"unordered"},e.createElement(t.Item,null,"you're an adult and have chickenpox"),e.createElement(t.Item,null,"you're pregnant and haven't had chickenpox before and you've been near someone with it"),e.createElement(t.Item,null,"you have a weakened immune system and you've been near someone with chickenpox"),e.createElement(t.Item,null,"you think your newborn baby has chickenpox")),e.createElement(E,null,"In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out.")))},y={args:{variant:"emergency"},render:r=>e.createElement(n,{...r},e.createElement(n.Heading,{visuallyHiddenText:"Emergency advice: "},"Go to A&E or call 999 if:"),e.createElement(n.Content,null,e.createElement(t,{variant:"unordered"},e.createElement(t.Item,null,"you or someone you know needs immediate help"),e.createElement(t.Item,null,"you have seriously harmed yourself – for example, by taking a drug overdose")),e.createElement(E,null,"A mental health emergency should be taken as seriously as a medical emergency."),e.createElement(E,null,e.createElement(f,{href:"#"},"Find your nearest A&E"))))};var T,A,P;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(P=(A=m.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var S,q,D;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(q=l.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var z,U,V;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(V=(U=u.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var F,R,W;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(W=(R=p.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var M,O,Y;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => <div>
      <Card variant="feature" {...args}>
        <Card.Content>
          <Card.Heading>A</Card.Heading>
          <List border>
            <List.Item>
              <Link href="#">AAA</Link>
            </List.Item>
            <List.Item>
              <Link href="#">Abdominal aortic aneurysm</Link>
            </List.Item>
            <List.Item>
              <Link href="#">Abscess</Link>
            </List.Item>
          </List>
        </Card.Content>
      </Card>
    </div>
}`,...(Y=(O=h.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var $,j,B;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'non-urgent'
  },
  render: args => <Card {...args}>
      <Card.Heading visuallyHiddenText="Non-urgent advice: ">
        Speak to a GP if:
      </Card.Heading>
      <Card.Content>
        <List variant="unordered">
          <List.Item>you're not sure it's chickenpox</List.Item>
          <List.Item>
            the skin around the blisters is red, hot or painful (signs of
            infection)
          </List.Item>
          <List.Item>
            your child is <a href="#">dehydrated</a>
          </List.Item>
          <List.Item>
            you're concerned about your child or they get worse
          </List.Item>
        </List>
        <Paragraph>
          Tell the receptionist you think it's chickenpox before going in. They
          may recommend a special appointment time if other patients are at
          risk.
        </Paragraph>
      </Card.Content>
    </Card>
}`,...(B=(j=g.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var K,X,Z;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'urgent'
  },
  render: args => <Card {...args}>
      <Card.Heading visuallyHiddenText="Urgent advice: ">
        Ask for an urgent GP appointment if:
      </Card.Heading>
      <Card.Content>
        <List variant="unordered">
          <List.Item>you're an adult and have chickenpox</List.Item>
          <List.Item>
            you're pregnant and haven't had chickenpox before and you've been
            near someone with it
          </List.Item>
          <List.Item>
            you have a weakened immune system and you've been near someone with
            chickenpox
          </List.Item>
          <List.Item>you think your newborn baby has chickenpox</List.Item>
        </List>
        <Paragraph>
          In these situations, your GP can prescribe medicine to prevent
          complications. You need to take it within 24 hours of the spots coming
          out.
        </Paragraph>
      </Card.Content>
    </Card>
}`,...(Z=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var J,Q,ee;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'emergency'
  },
  render: args => <Card {...args}>
      <Card.Heading visuallyHiddenText="Emergency advice: ">
        Go to A&E or call 999 if:
      </Card.Heading>
      <Card.Content>
        <List variant="unordered">
          <List.Item>you or someone you know needs immediate help</List.Item>
          <List.Item>
            you have seriously harmed yourself – for example, by taking a drug
            overdose
          </List.Item>
        </List>
        <Paragraph>
          A mental health emergency should be taken as seriously as a medical
          emergency.
        </Paragraph>
        <Paragraph>
          <Link href="#">Find your nearest A&E</Link>
        </Paragraph>
      </Card.Content>
    </Card>
}`,...(ee=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};const be=["TopTask","Primary","Secondary","WithImage","AToZ","NonUrgentCareCard","UrgentCareCard","EmergencyCareCard"];export{h as AToZ,y as EmergencyCareCard,g as NonUrgentCareCard,l as Primary,u as Secondary,m as TopTask,C as UrgentCareCard,p as WithImage,be as __namedExportsOrder,_e as default};
