import{R as t}from"./index-CgfFrydU.js";import{T as e}from"./TaskList-B2H8CaHp.js";import{H as i}from"./Heading-C3nlIeLd.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./Base-CpCQsTc1.js";import"./factory-CyDOap8W.js";import"./use-id-with-prefix-VupyVmxJ.js";import"./polymorphic-factory-YJ8dk4Mh.js";import"./Tag-D6Q_RyEn.js";const H={title:"Components/Content Presentation/Task List",component:e,subcomponents:{"TaskList.Item":e.Item,"TaskList.Item.NameAndHint":e.Item.NameAndHint,"TaskList.Item.Status":e.Item.Status},parameters:{docs:{description:{component:"https://service-manual.nhs.uk/design-system/components/task-list"}}}},a={render:n=>t.createElement(e,{...n},t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#"},"Exercise"),t.createElement(e.Item.Status,{variant:"completed"},"Completed")),t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#"},"Personal health"),t.createElement(e.Item.Status,{variant:"completed"},"Completed")),t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#",hint:"Details of your parents and siblings"},"Family health history"),t.createElement(e.Item.Status,{variant:"incomplete"},"Incomplete")),t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#"},"Smoking history"),t.createElement(e.Item.Status,{variant:"incomplete"},"Incomplete")),t.createElement(e.Item,null,t.createElement(e.Item.NameAndHint,{href:"#"},"Blood test"),t.createElement(e.Item.Status,{variant:"cannot-start-yet"},"Cannot start yet")))},s={render:n=>t.createElement("div",null,t.createElement(i,{size:"l"},"Service name"),t.createElement(i,{size:"m",as:"h2"},"Check before you start"),t.createElement(e,{...n},t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#"},"Check eligibility"),t.createElement(e.Item.Status,{variant:"completed"},"Completed")),t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#"},"Read declaration"),t.createElement(e.Item.Status,{variant:"incomplete"},"Incomplete"))),t.createElement(i,{size:"m",as:"h2"},"Prepare application"),t.createElement(e,{...n},t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#"},"Exercise"),t.createElement(e.Item.Status,{variant:"completed"},"Completed")),t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#"},"Personal health"),t.createElement(e.Item.Status,{variant:"completed"},"Completed")),t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#",hint:"Details of your parents and siblings"},"Family health history"),t.createElement(e.Item.Status,{variant:"incomplete"},"Incomplete")),t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#"},"Smoking history"),t.createElement(e.Item.Status,{variant:"incomplete"},"Incomplete")),t.createElement(e.Item,null,t.createElement(e.Item.NameAndHint,{href:"#"},"Blood test"),t.createElement(e.Item.Status,{variant:"cannot-start-yet"},"Cannot start yet"))))};var m,r,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <TaskList {...args}>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint href="#">Exercise</TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="completed">
          Completed
        </TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint href="#">
          Personal health
        </TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="completed">
          Completed
        </TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint href="#" hint="Details of your parents and siblings">
          Family health history
        </TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="incomplete">
          Incomplete
        </TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint href="#">
          Smoking history
        </TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="incomplete">
          Incomplete
        </TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item>
        <TaskList.Item.NameAndHint href="#">
          Blood test
        </TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="cannot-start-yet">
          Cannot start yet
        </TaskList.Item.Status>
      </TaskList.Item>
    </TaskList>
}`,...(l=(r=a.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};var o,I,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div>
      <Heading size="l">Service name</Heading>
      <Heading size="m" as="h2">
        Check before you start
      </Heading>
      <TaskList {...args}>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">
            Check eligibility
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="completed">
            Completed
          </TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">
            Read declaration
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="incomplete">
            Incomplete
          </TaskList.Item.Status>
        </TaskList.Item>
      </TaskList>

      <Heading size="m" as="h2">
        Prepare application
      </Heading>
      <TaskList {...args}>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">
            Exercise
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="completed">
            Completed
          </TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">
            Personal health
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="completed">
            Completed
          </TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#" hint="Details of your parents and siblings">
            Family health history
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="incomplete">
            Incomplete
          </TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">
            Smoking history
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="incomplete">
            Incomplete
          </TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item>
          <TaskList.Item.NameAndHint href="#">
            Blood test
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="cannot-start-yet">
            Cannot start yet
          </TaskList.Item.Status>
        </TaskList.Item>
      </TaskList>
    </div>
}`,...(c=(I=s.parameters)==null?void 0:I.docs)==null?void 0:c.source}}};const A=["Default","MultipleSections"];export{a as Default,s as MultipleSections,A as __namedExportsOrder,H as default};
