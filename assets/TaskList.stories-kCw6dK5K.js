import{r as y,R as t}from"./index-DCEVbkbO.js";import{c as m}from"./clsx-B-dksMZM.js";import{B as O}from"./Base-DkqVgamr.js";import{f as S}from"./factory-B-vprWl1.js";import{u as W}from"./use-id-with-prefix-JqmxMMgI.js";import{p as z}from"./polymorphic-factory-Bh8XY5CE.js";import{T as B}from"./Tag-5bbu7dN8.js";import{H as d}from"./Heading-CC_RIS_G.js";import"./_commonjsHelpers-CqkleIqs.js";const H=y.createContext({}),A=()=>y.useContext(H),D=H.Provider,e=S(({className:a,...n},s)=>t.createElement("ul",{ref:s,className:m("nhsuk-task-list",a),...n})),o=S(({variant:a,className:n,...s},r)=>{const i=W("task-list-item");return t.createElement(D,{value:{variant:a,rowId:i}},t.createElement("li",{ref:r,className:m("nhsuk-task-list__item",{[`nhsuk-task-list__item--${a}`]:a},n),...s}))}),p=z(({children:a,hint:n,as:s="a",containerProps:r={},hintProps:i={},...C},w)=>{const{variant:k,rowId:u}=A(),{className:g,...P}=r,{className:_,...R}=i,T=`${u}-hint`,x=`${u}-status`,b=k==="with-link"?s:"div",q=k==="with-link"?{ref:w,...C,"aria-described-by":m(x,{[T]:n})}:{};return t.createElement("div",{className:m("nhsuk-task-list__item-name-and-hint",g),...P},t.createElement(O,{as:b,...q},a),n&&t.createElement("div",{id:T,className:m("nhsuk-task-list__hint",_),...R},n))}),I=({variant:a="in-complete",children:n,...s})=>{const{rowId:r}=A(),i=`${r}-status`;return t.createElement("div",{id:i,className:m("nhsuk-task-list__status",`nhsuk-task-list__status--${a}`),...s},a==="in-complete"?t.createElement(B,{id:i,variant:"blue",...s},n):n)};e.Item=o;o.NameAndHint=p;o.Status=I;e.displayName="TaskList";o.displayName="TaskList.Item";p.displayName="TaskList.Item.NameAndHint";I.displayName="TaskList.Item.Status";e.__docgenInfo={description:"",methods:[],displayName:"TaskList"};o.__docgenInfo={description:"",methods:[],displayName:"TaskList.Item",props:{variant:{required:!1,tsType:{name:"literal",value:"'with-link'"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"TaskList.Item.NameAndHint",props:{hint:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},containerProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'div'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"never"}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>"},description:"",defaultValue:{value:"{}",computed:!1}},hintProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'div'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"never"}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>"},description:"",defaultValue:{value:"{}",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};I.__docgenInfo={description:"",methods:[],displayName:"TaskList.Item.Status",props:{variant:{required:!1,tsType:{name:"union",raw:"'completed' | 'cannot-start-yet' | 'in-complete'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'cannot-start-yet'"},{name:"literal",value:"'in-complete'"}]},description:"",defaultValue:{value:"'in-complete'",computed:!1}}}};const U={title:"Components/Content Presentation/Task List",component:e,subcomponents:{"TaskList.Item":e.Item,"TaskList.Item.NameAndHint":e.Item.NameAndHint,"TaskList.Item.Status":e.Item.Status},parameters:{docs:{description:{component:"https://service-manual.nhs.uk/design-system/components/task-list"}}}},l={render:a=>t.createElement(e,{...a},t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#"},"Exercise"),t.createElement(e.Item.Status,{variant:"completed"},"Completed")),t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#"},"Personal health"),t.createElement(e.Item.Status,{variant:"completed"},"Completed")),t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#",hint:"Details of your parents and siblings"},"Family health history"),t.createElement(e.Item.Status,{variant:"in-complete"},"Incomplete")),t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#"},"Smoking history"),t.createElement(e.Item.Status,{variant:"in-complete"},"Incomplete")),t.createElement(e.Item,null,t.createElement(e.Item.NameAndHint,{href:"#"},"Blood test"),t.createElement(e.Item.Status,{variant:"cannot-start-yet"},"Cannot start yet")))},c={render:a=>t.createElement("div",null,t.createElement(d,{size:"l"},"Service name"),t.createElement(d,{size:"m",as:"h2"},"Check before you start"),t.createElement(e,{...a},t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#"},"Check eligibility"),t.createElement(e.Item.Status,{variant:"completed"},"Completed")),t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#"},"Read declaration"),t.createElement(e.Item.Status,{variant:"in-complete"},"Incomplete"))),t.createElement(d,{size:"m",as:"h2"},"Prepare application"),t.createElement(e,{...a},t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#"},"Exercise"),t.createElement(e.Item.Status,{variant:"completed"},"Completed")),t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#"},"Personal health"),t.createElement(e.Item.Status,{variant:"completed"},"Completed")),t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#",hint:"Details of your parents and siblings"},"Family health history"),t.createElement(e.Item.Status,{variant:"in-complete"},"Incomplete")),t.createElement(e.Item,{variant:"with-link"},t.createElement(e.Item.NameAndHint,{href:"#"},"Smoking history"),t.createElement(e.Item.Status,{variant:"in-complete"},"Incomplete")),t.createElement(e.Item,null,t.createElement(e.Item.NameAndHint,{href:"#"},"Blood test"),t.createElement(e.Item.Status,{variant:"cannot-start-yet"},"Cannot start yet"))))};var h,L,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
        <TaskList.Item.Status variant="in-complete">
          Incomplete
        </TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint href="#">
          Smoking history
        </TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="in-complete">
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
}`,...(v=(L=l.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};var f,N,E;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
          <TaskList.Item.Status variant="in-complete">
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
          <TaskList.Item.Status variant="in-complete">
            Incomplete
          </TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">
            Smoking history
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="in-complete">
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
}`,...(E=(N=c.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};const X=["Default","MultipleSections"];export{l as Default,c as MultipleSections,X as __namedExportsOrder,U as default};
