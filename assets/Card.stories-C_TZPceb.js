import{R as e}from"./index-uCp2LrAq.js";import{C as n}from"./Card-JUdehDBA.js";import{L as r}from"./List-DKAKbPCX.js";import{L as u}from"./Link-C7jhgo-3.js";import{P as p}from"./Paragraph-CJ_RiSc1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-Dl037jXY.js";import"./clsx-B-dksMZM.js";import"./polymorphic-factory-C1jPlyAy.js";import"./Base-CQ_ipzy_.js";import"./Heading-DbjV9X_b.js";import"./Grid-C4lDuMyn.js";import"./VisuallyHidden-io1tb15n.js";const Q={title:"Components/Navigation/Card",component:n,subcomponents:{"Card.Content":n.Content,"Card.Description":n.Description,"Card.Heading":n.Heading,"Card.Image":n.Image,"Card.Link":n.Link,"Card.Group":n.Group,"Card.GroupItem":n.GroupItem},parameters:{docs:{description:{component:`Use a card to give users a brief summary of content or a task, often with a link to more detail. You can display a card alongside other cards to group related content or tasks.

https://service-manual.nhs.uk/design-system/components/card`}}}},a={render:t=>e.createElement(n.Group,null,e.createElement(n.GroupItem,{width:"one-third"},e.createElement(n,{clickable:!0,...t},e.createElement(n.Content,null,e.createElement(n.Heading,{as:"h5",size:"xs"},e.createElement(n.Link,{href:"#"},"Order a repeat prescription"))))))},o={render:t=>e.createElement(n.Group,null,e.createElement(n.GroupItem,{width:"two-thirds"},e.createElement(n,{clickable:!0,variant:"primary",...t},e.createElement(n.Content,null,e.createElement(n.Heading,{as:"h2",size:"m"},e.createElement(n.Link,{href:"#"},"Introduction to care and support")),e.createElement(n.Description,null,"A quick guide for people who have care and support needs and their carers")))))},i={render:t=>e.createElement(n.Group,null,e.createElement(n.GroupItem,{width:"two-thirds"},e.createElement(n,{clickable:!0,variant:"secondary",...t},e.createElement(n.Content,null,e.createElement(n.Heading,{as:"h2",size:"m"},e.createElement(n.Link,{href:"#"},"Urgent and emergency care services")),e.createElement(n.Description,null,"Services the NHS provides if you need urgent or emergency medical help")))))},s={render:t=>e.createElement(n.Group,null,e.createElement(n.GroupItem,{width:"one-third"},e.createElement(n,{clickable:!0,...t},e.createElement(n.Image,{src:"https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg",alt:"A person wearing a face mask"}),e.createElement(n.Content,null,e.createElement(n.Heading,{as:"h2",size:"m"},e.createElement(n.Link,{href:"#"},"Exercise")),e.createElement(n.Description,null,"Programmes, workouts and tips to get you moving and improve your fitness and wellbeing")))))},d={render:t=>e.createElement("div",null,e.createElement(n,{variant:"feature",...t},e.createElement(n.Content,null,e.createElement(n.Heading,null,"A"),e.createElement(r,{border:!0},e.createElement(r.Item,null,e.createElement(u,{href:"#"},"AAA")),e.createElement(r.Item,null,e.createElement(u,{href:"#"},"Abdominal aortic aneurysm")),e.createElement(r.Item,null,e.createElement(u,{href:"#"},"Abscess"))))))},c={args:{variant:"non-urgent"},render:t=>e.createElement(n,{...t},e.createElement(n.Heading,{visuallyHiddenText:"Non-urgent advice: "},"Speak to a GP if:"),e.createElement(n.Content,null,e.createElement(r,{variant:"unordered"},e.createElement(r.Item,null,"you're not sure it's chickenpox"),e.createElement(r.Item,null,"the skin around the blisters is red, hot or painful (signs of infection)"),e.createElement(r.Item,null,"your child is ",e.createElement("a",{href:"#"},"dehydrated")),e.createElement(r.Item,null,"you're concerned about your child or they get worse")),e.createElement(p,null,"Tell the receptionist you think it's chickenpox before going in. They may recommend a special appointment time if other patients are at risk.")))},m={args:{variant:"urgent"},render:t=>e.createElement(n,{...t},e.createElement(n.Heading,{visuallyHiddenText:"Urgent advice: "},"Ask for an urgent GP appointment if:"),e.createElement(n.Content,null,e.createElement(r,{variant:"unordered"},e.createElement(r.Item,null,"you're an adult and have chickenpox"),e.createElement(r.Item,null,"you're pregnant and haven't had chickenpox before and you've been near someone with it"),e.createElement(r.Item,null,"you have a weakened immune system and you've been near someone with chickenpox"),e.createElement(r.Item,null,"you think your newborn baby has chickenpox")),e.createElement(p,null,"In these situations, your GP can prescribe medicine to prevent complications. You need to take it within 24 hours of the spots coming out.")))},l={args:{variant:"emergency"},render:t=>e.createElement(n,{...t},e.createElement(n.Heading,{visuallyHiddenText:"Emergency advice: "},"Go to A&E or call 999 if:"),e.createElement(n.Content,null,e.createElement(r,{variant:"unordered"},e.createElement(r.Item,null,"you or someone you know needs immediate help"),e.createElement(r.Item,null,"you have seriously harmed yourself – for example, by taking a drug overdose")),e.createElement(p,null,"A mental health emergency should be taken as seriously as a medical emergency."),e.createElement(p,null,e.createElement(u,{href:"#"},"Find your nearest A&E"))))};var h,g,C;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(C=(g=a.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var y,k,E;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(E=(k=o.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var v,f,I;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(I=(f=i.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var L,b,w;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var G,H,x;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(x=(H=d.parameters)==null?void 0:H.docs)==null?void 0:x.source}}};var A,P,S;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(S=(P=c.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var T,D,U;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(U=(D=m.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};var z,_,N;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(N=(_=l.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const V=["TopTask","Primary","Secondary","WithImage","AToZ","NonUrgentCareCard","UrgentCareCard","EmergencyCareCard"];export{d as AToZ,l as EmergencyCareCard,c as NonUrgentCareCard,o as Primary,i as Secondary,a as TopTask,m as UrgentCareCard,s as WithImage,V as __namedExportsOrder,Q as default};
