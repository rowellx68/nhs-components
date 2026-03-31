import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-opzFqeq4.js";import{n as r,t as i}from"./Heading-DW9V1ebL.js";import{n as a,t as o}from"./TaskList-DzbKTpC_.js";import{n as s,t as c}from"./Tag-BZm1oEtZ.js";var l,u,d,f,p;t((()=>{l=e(n(),1),s(),r(),a(),u={title:`Components/Content Presentation/Task List`,component:o,subcomponents:{"TaskList.Item":o.Item,"TaskList.Item.NameAndHint":o.Item.NameAndHint,"TaskList.Item.Status":o.Item.Status},parameters:{docs:{description:{component:`Use the task list component to give users a visual overview of a multi-page process broken into tasks.

https://service-manual.nhs.uk/design-system/components/task-list`}}}},d={render:e=>l.createElement(o,e,l.createElement(o.Item,{variant:`with-link`},l.createElement(o.Item.NameAndHint,{href:`#`},`Exercise`),l.createElement(o.Item.Status,{variant:`completed`},`Completed`)),l.createElement(o.Item,{variant:`with-link`},l.createElement(o.Item.NameAndHint,{href:`#`},`Personal health`),l.createElement(o.Item.Status,{variant:`completed`},`Completed`)),l.createElement(o.Item,{variant:`with-link`},l.createElement(o.Item.NameAndHint,{href:`#`,hint:`Details of your parents, brothers and sisters`},`Family health history`),l.createElement(o.Item.Status,null,l.createElement(c,{colour:`blue`},`Incomplete`))),l.createElement(o.Item,{variant:`with-link`},l.createElement(o.Item.NameAndHint,{href:`#`},`Smoking history`),l.createElement(o.Item.Status,null,l.createElement(c,{colour:`blue`},`Incomplete`))),l.createElement(o.Item,null,l.createElement(o.Item.NameAndHint,null,`Blood test`),l.createElement(o.Item.Status,{variant:`cannot-start-yet`},`Cannot start yet`)))},f={render:e=>l.createElement(`div`,null,l.createElement(i,{size:`l`},`Service name`),l.createElement(i,{size:`m`,as:`h2`},`Check before you start`),l.createElement(o,e,l.createElement(o.Item,{variant:`with-link`},l.createElement(o.Item.NameAndHint,{href:`#`},`Check eligibility`),l.createElement(o.Item.Status,{variant:`completed`},`Completed`)),l.createElement(o.Item,{variant:`with-link`},l.createElement(o.Item.NameAndHint,{href:`#`},`Read declaration`),l.createElement(o.Item.Status,null,l.createElement(c,{colour:`blue`},`Incomplete`)))),l.createElement(i,{size:`m`,as:`h2`},`Prepare application`),l.createElement(o,e,l.createElement(o.Item,{variant:`with-link`},l.createElement(o.Item.NameAndHint,{href:`#`},`Exercise`),l.createElement(o.Item.Status,{variant:`completed`},`Completed`)),l.createElement(o.Item,{variant:`with-link`},l.createElement(o.Item.NameAndHint,{href:`#`},`Personal health`),l.createElement(o.Item.Status,{variant:`completed`},`Completed`)),l.createElement(o.Item,{variant:`with-link`},l.createElement(o.Item.NameAndHint,{href:`#`,hint:`Details of your parents, brothers and sisters`},`Family health history`),l.createElement(o.Item.Status,null,l.createElement(c,{colour:`blue`},`Incomplete`))),l.createElement(o.Item,{variant:`with-link`},l.createElement(o.Item.NameAndHint,{href:`#`},`Smoking history`),l.createElement(o.Item.Status,null,l.createElement(c,{colour:`blue`},`Incomplete`))),l.createElement(o.Item,null,l.createElement(o.Item.NameAndHint,null,`Blood test`),l.createElement(o.Item.Status,{variant:`cannot-start-yet`},`Cannot start yet`))))},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <TaskList {...args}>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint href="#">Exercise</TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="completed">Completed</TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint href="#">Personal health</TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="completed">Completed</TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint href="#" hint="Details of your parents, brothers and sisters">
          Family health history
        </TaskList.Item.NameAndHint>
        <TaskList.Item.Status>
          <Tag colour="blue">Incomplete</Tag>
        </TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint href="#">Smoking history</TaskList.Item.NameAndHint>
        <TaskList.Item.Status>
          <Tag colour="blue">Incomplete</Tag>
        </TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item>
        <TaskList.Item.NameAndHint>Blood test</TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="cannot-start-yet">Cannot start yet</TaskList.Item.Status>
      </TaskList.Item>
    </TaskList>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <div>
      <Heading size="l">Service name</Heading>
      <Heading size="m" as="h2">
        Check before you start
      </Heading>
      <TaskList {...args}>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">Check eligibility</TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="completed">Completed</TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">Read declaration</TaskList.Item.NameAndHint>
          <TaskList.Item.Status>
            <Tag colour="blue">Incomplete</Tag>
          </TaskList.Item.Status>
        </TaskList.Item>
      </TaskList>

      <Heading size="m" as="h2">
        Prepare application
      </Heading>
      <TaskList {...args}>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">Exercise</TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="completed">Completed</TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">Personal health</TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="completed">Completed</TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#" hint="Details of your parents, brothers and sisters">
            Family health history
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status>
            <Tag colour="blue">Incomplete</Tag>
          </TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">Smoking history</TaskList.Item.NameAndHint>
          <TaskList.Item.Status>
            <Tag colour="blue">Incomplete</Tag>
          </TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item>
          <TaskList.Item.NameAndHint>Blood test</TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="cannot-start-yet">Cannot start yet</TaskList.Item.Status>
        </TaskList.Item>
      </TaskList>
    </div>
}`,...f.parameters?.docs?.source}}},p=[`Default`,`MultipleSections`]}))();export{d as Default,f as MultipleSections,p as __namedExportsOrder,u as default};