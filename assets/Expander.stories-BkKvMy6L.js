import{R as e}from"./index-uCp2LrAq.js";import{D as l}from"./Details-CRrkBqfo.js";import{c as h}from"./clsx-B-dksMZM.js";import{L as T}from"./Link-DOemV-Ok.js";import"./_commonjsHelpers-BosuxZz1.js";import"./factory-Dl037jXY.js";import"./Base-CQ_ipzy_.js";import"./polymorphic-factory-C1jPlyAy.js";const n=({...t})=>e.createElement(l,{expander:!0,...t}),o=({...t})=>e.createElement(l.Summary,{...t}),s=({...t})=>e.createElement(l.Text,{...t}),m=({children:t,className:E,...x})=>e.createElement("div",{className:h("nhsuk-expander-group",E),...x},t);n.displayName="Expander";o.displayName="Expander.Summary";s.displayName="Expander.Text";m.displayName="Expander.Group";n.Summary=o;n.Text=s;n.Group=m;n.__docgenInfo={description:"",methods:[{name:"Summary",docblock:null,modifiers:["static"],params:[{name:"{ ...props }: ExpanderSummaryProps",optional:!1,type:{name:"intersection",raw:`{
  textContainerProps?: ElementProps<'span'>;
} & ElementProps<'summary'>`,elements:[{name:"signature",type:"object",raw:`{
  textContainerProps?: ElementProps<'span'>;
}`,signature:{properties:[{key:"textContainerProps",value:{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'span'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"union",raw:"'style' | TPropsToOmit",elements:[{name:"literal",value:"'style'"},{name:"never"}]}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, 'style' | TPropsToOmit>",required:!1}}]}},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'span'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"union",raw:"'style' | TPropsToOmit",elements:[{name:"literal",value:"'style'"},{name:"never"}]}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, 'style' | TPropsToOmit>",required:!1}],alias:"ExpanderSummaryProps"}}],returns:null},{name:"Text",docblock:null,modifiers:["static"],params:[{name:"{ ...props }: ExpanderTextProps",optional:!1,type:{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'div'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"union",raw:"'style' | TPropsToOmit",elements:[{name:"literal",value:"'style'"},{name:"never"}]}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, 'style' | TPropsToOmit>",alias:"ExpanderTextProps"}}],returns:null},{name:"Group",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...props
}: ExpanderGroupProps`,optional:!1,type:{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'div'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"union",raw:"'style' | TPropsToOmit",elements:[{name:"literal",value:"'style'"},{name:"never"}]}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, 'style' | TPropsToOmit>",alias:"ExpanderGroupProps"}}],returns:null}],displayName:"Expander"};o.__docgenInfo={description:"",methods:[],displayName:"Expander.Summary",props:{textContainerProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'span'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"union",raw:"'style' | TPropsToOmit",elements:[{name:"literal",value:"'style'"},{name:"never"}]}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, 'style' | TPropsToOmit>"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"Expander.Text"};m.__docgenInfo={description:"",methods:[],displayName:"Expander.Group"};const C={title:"Components/Content Presentation/Expander",component:n,parameters:{docs:{description:{component:`Make a complex topic easier to digest by letting users reveal more detailed information only if they need it.

https://service-manual.nhs.uk/design-system/components/expander`}}}},r={render:t=>e.createElement(n,{...t},e.createElement(n.Summary,null,"Get your medical records"),e.createElement(n.Text,null,e.createElement("p",null,"You can see your GP records by:"),e.createElement("ul",null,e.createElement("li",null,"asking for them at your GP surgery "),e.createElement("li",null,"going online to see them (if you have signed up for"," ",e.createElement(T,{href:"/using-the-nhs/nhs-services/gps/gp-online-services/"},"GP online services"),")"))))},a={render:t=>e.createElement(n.Group,null,e.createElement(n,{...t},e.createElement(n.Summary,null,"How to measure your blood glucose levels"),e.createElement(n.Text,null,e.createElement("p",null,"Testing your blood at home is quick and easy, although it can be uncomfortable. It does get better."),e.createElement("p",null,"You would have been given:"),e.createElement("ul",null,e.createElement("li",null,"a blood glucose metre"),e.createElement("li",null,"small needles called lancets"),e.createElement("li",null,"a plastic pen to hold the lancets"),e.createElement("li",null,"small test strips")))),e.createElement(n,{...t},e.createElement(n.Summary,null,"When to check your blood glucose level"),e.createElement(n.Text,null,e.createElement("p",null,"Try to check your blood:"),e.createElement("ul",null,e.createElement("li",null,"before meals"),e.createElement("li",null,"2 to 3 hours after meals"),e.createElement("li",null,"before, during (take a break) and after exercise")),e.createElement("p",null,"This helps you understand your blood glucose levels and how they’re affected by meals and exercise. It should help you have more stable blood glucose levels."))))};var p,i,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var d,c,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(c=a.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};const S=["SingleExpander","MoreThanOneExpander"];export{a as MoreThanOneExpander,r as SingleExpander,S as __namedExportsOrder,C as default};
