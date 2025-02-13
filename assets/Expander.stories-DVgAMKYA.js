import{R as e}from"./index-DCEVbkbO.js";import{D as l}from"./Details-B68aEoyl.js";import{c as h}from"./clsx-B-dksMZM.js";import{L as g}from"./Link-CbGFlGFT.js";import"./_commonjsHelpers-CqkleIqs.js";import"./factory-B-vprWl1.js";import"./common-fnmo4YYw.js";import"./Base-DkqVgamr.js";import"./polymorphic-factory-Bh8XY5CE.js";const n=({...r})=>e.createElement(l,{...r,variant:"expander"}),o=({...r})=>e.createElement(l.Summary,{...r}),s=({...r})=>e.createElement(l.Text,{...r}),m=({children:r,className:x,...y})=>e.createElement("div",{className:h("nhsuk-expander-group",x),...y},r);n.displayName="Expander";o.displayName="Expander.Summary";s.displayName="Expander.Text";m.displayName="Expander.Group";n.Summary=o;n.Text=s;n.Group=m;n.__docgenInfo={description:"",methods:[{name:"Summary",docblock:null,modifiers:["static"],params:[{name:"{ ...props }: ExpanderSummaryProps",optional:!1,type:{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'summary'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"never"}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>",alias:"ExpanderSummaryProps"}}],returns:null},{name:"Text",docblock:null,modifiers:["static"],params:[{name:"{ ...props }: ExpanderTextProps",optional:!1,type:{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'div'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"never"}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>",alias:"ExpanderTextProps"}}],returns:null},{name:"Group",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...props
}: ExpanderGroupProps`,optional:!1,type:{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'div'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"never"}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>",alias:"ExpanderGroupProps"}}],returns:null}],displayName:"Expander"};o.__docgenInfo={description:"",methods:[],displayName:"Expander.Summary"};s.__docgenInfo={description:"",methods:[],displayName:"Expander.Text"};m.__docgenInfo={description:"",methods:[],displayName:"Expander.Group"};const O={title:"Components/Content Presentation/Expander",component:n,subcomponents:{"Expander.Summary":n.Summary,"Expander.Text":n.Text,"Expander.Group":n.Group},parameters:{docs:{description:{component:`Make a complex topic easier to digest by letting users reveal more detailed information only if they need it.

https://service-manual.nhs.uk/design-system/components/expander`}}}},a={render:r=>e.createElement(n,{...r},e.createElement(n.Summary,null,"Get your medical records"),e.createElement(n.Text,null,e.createElement("p",null,"You can see your GP records by:"),e.createElement("ul",null,e.createElement("li",null,"asking for them at your GP surgery "),e.createElement("li",null,"going online to see them (if you have signed up for"," ",e.createElement(g,{href:"/using-the-nhs/nhs-services/gps/gp-online-services/"},"GP online services"),")"))))},t={render:r=>e.createElement(n.Group,null,e.createElement(n,{...r},e.createElement(n.Summary,null,"How to measure your blood glucose levels"),e.createElement(n.Text,null,e.createElement("p",null,"Testing your blood at home is quick and easy, although it can be uncomfortable. It does get better."),e.createElement("p",null,"You would have been given:"),e.createElement("ul",null,e.createElement("li",null,"a blood glucose metre"),e.createElement("li",null,"small needles called lancets"),e.createElement("li",null,"a plastic pen to hold the lancets"),e.createElement("li",null,"small test strips")))),e.createElement(n,{...r},e.createElement(n.Summary,null,"When to check your blood glucose level"),e.createElement(n.Text,null,e.createElement("p",null,"Try to check your blood:"),e.createElement("ul",null,e.createElement("li",null,"before meals"),e.createElement("li",null,"2 to 3 hours after meals"),e.createElement("li",null,"before, during (take a break) and after exercise")),e.createElement("p",null,"This helps you understand your blood glucose levels and how they’re affected by meals and exercise. It should help you have more stable blood glucose levels."))))};var p,i,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <Expander {...args}>
      <Expander.Summary>Get your medical records</Expander.Summary>
      <Expander.Text>
        <p>You can see your GP records by:</p>
        <ul>
          <li>asking for them at your GP surgery </li>
          <li>
            going online to see them (if you have signed up for{' '}
            <Link href="/using-the-nhs/nhs-services/gps/gp-online-services/">
              GP online services
            </Link>
            )
          </li>
        </ul>
      </Expander.Text>
    </Expander>
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,c,E;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <Expander.Group>
      <Expander {...args}>
        <Expander.Summary>
          How to measure your blood glucose levels
        </Expander.Summary>
        <Expander.Text>
          <p>
            Testing your blood at home is quick and easy, although it can be
            uncomfortable. It does get better.
          </p>
          <p>You would have been given:</p>
          <ul>
            <li>a blood glucose metre</li>
            <li>small needles called lancets</li>
            <li>a plastic pen to hold the lancets</li>
            <li>small test strips</li>
          </ul>
        </Expander.Text>
      </Expander>
      <Expander {...args}>
        <Expander.Summary>
          When to check your blood glucose level
        </Expander.Summary>
        <Expander.Text>
          <p>Try to check your blood:</p>
          <ul>
            <li>before meals</li>
            <li>2 to 3 hours after meals</li>
            <li>before, during (take a break) and after exercise</li>
          </ul>
          <p>
            This helps you understand your blood glucose levels and how they’re
            affected by meals and exercise. It should help you have more stable
            blood glucose levels.
          </p>
        </Expander.Text>
      </Expander>
    </Expander.Group>
}`,...(E=(c=t.parameters)==null?void 0:c.docs)==null?void 0:E.source}}};const C=["SingleExpander","MoreThanOneExpander"];export{t as MoreThanOneExpander,a as SingleExpander,C as __namedExportsOrder,O as default};
