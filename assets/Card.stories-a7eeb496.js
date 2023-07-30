import{j as e}from"./jsx-runtime-ffb262ed.js";import{C as r}from"./Card-84220d37.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-1229b3e0.js";const K={component:r,title:"Components/Navigation/Card",tags:["autodocs"]},n={args:{clickable:!1},render:a=>e.jsx(r,{...a,children:e.jsxs(r.Content,{children:[e.jsx(r.Heading,{children:"If you need help now, but it’s not an emergency"}),e.jsxs(r.Description,{children:["Go to ",e.jsx("a",{href:"#site",children:"111.nhs.uk"})," or ",e.jsx("a",{href:"#site",children:"call 111"})]})]})})},s={args:{clickable:!0},render:a=>e.jsx(r,{...a,children:e.jsxs(r.Content,{children:[e.jsx(r.Heading,{children:e.jsx(r.Link,{href:"#site",children:"Introduction to care and support"})}),e.jsx(r.Description,{children:"A quick guide for people who have care and support needs and their carers"})]})})},i={args:{clickable:!0},render:a=>e.jsxs(r,{...a,children:[e.jsx(r.Image,{src:"https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg",alt:"A lady smiling"}),e.jsxs(r.Content,{children:[e.jsx(r.Heading,{children:e.jsx(r.Link,{href:"#exercise",children:"Exercise"})}),e.jsx(r.Description,{children:"Programmes, workouts and tips to get you moving and improve your fitness and wellbeing"})]})]})},t={args:{clickable:!0,width:"one-half"},render:a=>e.jsxs(r.Group,{children:[e.jsx(r.GroupItem,{children:e.jsx(r,{...a,children:e.jsxs(r.Content,{children:[e.jsx(r.Heading,{children:e.jsx(r.Link,{href:"#care-support",children:"Introduction to care and support"})}),e.jsx(r.Description,{children:"A quick guide for people who have care and support needs and their carers"})]})})}),e.jsx(r.GroupItem,{children:e.jsx(r,{...a,children:e.jsxs(r.Content,{children:[e.jsx(r.Heading,{children:e.jsx(r.Link,{href:"#social-services",children:"Help from social services and charities"})}),e.jsx(r.Description,{children:"Includes helplines, needs assessments, advocacy and reporting abuse"})]})})})]})},o={args:{clickable:!1},render:a=>e.jsx(r,{...a,children:e.jsxs(r.Content,{children:[e.jsx(r.Heading,{asElement:"h3",children:"If you need help now, but it’s not an emergency"}),e.jsxs(r.Description,{children:["Go to ",e.jsx("a",{href:"#site",children:"111.nhs.uk"})," or ",e.jsx("a",{href:"#site",children:"call 111"})]})]})})};var d,c,l,p,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    clickable: false
  },
  render: args => <Card {...args}>
      <Card.Content>
        <Card.Heading>
          If you need help now, but it’s not an emergency
        </Card.Heading>
        <Card.Description>
          Go to <a href="#site">111.nhs.uk</a> or <a href="#site">call 111</a>
        </Card.Description>
      </Card.Content>
    </Card>
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source},description:{story:"The basic usage of the Card component.",...(h=(p=n.parameters)==null?void 0:p.docs)==null?void 0:h.description}}};var C,u,g,m,x;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    clickable: true
  },
  render: args => <Card {...args}>
      <Card.Content>
        <Card.Heading>
          <Card.Link href="#site">Introduction to care and support</Card.Link>
        </Card.Heading>
        <Card.Description>
          A quick guide for people who have care and support needs and their
          carers
        </Card.Description>
      </Card.Content>
    </Card>
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source},description:{story:"Card with clickable prop set to true.",...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.description}}};var k,j,f,b,H;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    clickable: true
  },
  render: args => <Card {...args}>
      <Card.Image src="https://assets.nhs.uk/prod/images/A_0218_exercise-main_FKW1X7.width-690.jpg" alt="A lady smiling" />
      <Card.Content>
        <Card.Heading>
          <Card.Link href="#exercise">Exercise</Card.Link>
        </Card.Heading>
        <Card.Description>
          Programmes, workouts and tips to get you moving and improve your
          fitness and wellbeing
        </Card.Description>
      </Card.Content>
    </Card>
}`,...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.source},description:{story:"Card with clickable prop set to true and an image.",...(H=(b=i.parameters)==null?void 0:b.docs)==null?void 0:H.description}}};var y,I,w,v,D;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    clickable: true,
    width: 'one-half'
  },
  render: args => <Card.Group>
      <Card.GroupItem>
        <Card {...args}>
          <Card.Content>
            <Card.Heading>
              <Card.Link href="#care-support">
                Introduction to care and support
              </Card.Link>
            </Card.Heading>
            <Card.Description>
              A quick guide for people who have care and support needs and their
              carers
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
      <Card.GroupItem>
        <Card {...args}>
          <Card.Content>
            <Card.Heading>
              <Card.Link href="#social-services">
                Help from social services and charities
              </Card.Link>
            </Card.Heading>
            <Card.Description>
              Includes helplines, needs assessments, advocacy and reporting
              abuse
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.GroupItem>
    </Card.Group>
}`,...(w=(I=t.parameters)==null?void 0:I.docs)==null?void 0:w.source},description:{story:"Card with clickable prop set to true and a group of items.",...(D=(v=t.parameters)==null?void 0:v.docs)==null?void 0:D.description}}};var G,L,A,_,E;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    clickable: false
  },
  render: args => <Card {...args}>
      <Card.Content>
        <Card.Heading asElement='h3'>
          If you need help now, but it’s not an emergency
        </Card.Heading>
        <Card.Description>
          Go to <a href="#site">111.nhs.uk</a> or <a href="#site">call 111</a>
        </Card.Description>
      </Card.Content>
    </Card>
}`,...(A=(L=o.parameters)==null?void 0:L.docs)==null?void 0:A.source},description:{story:"Card heading level",...(E=(_=o.parameters)==null?void 0:_.docs)==null?void 0:E.description}}};const P=["Basic","Clickable","ClickableWithImage","ClickableWithGroup","HeadingLevel"];export{n as Basic,s as Clickable,t as ClickableWithGroup,i as ClickableWithImage,o as HeadingLevel,P as __namedExportsOrder,K as default};
//# sourceMappingURL=Card.stories-a7eeb496.js.map
