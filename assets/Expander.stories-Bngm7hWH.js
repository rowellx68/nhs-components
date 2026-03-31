import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-DUBK-3MB.js";import{n as r,t as i}from"./clsx-keIqec4B.js";import{n as a,t as o}from"./factory-CE4OYqv3.js";import{n as s,t as c}from"./Link-LkB_MSCI.js";import{i as l,n as u,r as d}from"./Details-DxuepWio.js";var f,p,m,h,g,_=t((()=>{r(),f=e(n(),1),l(),a(),p=o(({className:e,...t},n)=>f.createElement(`details`,{className:i(`nhsuk-details nhsuk-expander`,e),...t,ref:n})),m=e=>f.createElement(u,e),h=e=>f.createElement(d,e),g=({children:e,className:t,...n})=>f.createElement(`div`,{className:i(`nhsuk-expander-group`,t),...n},e),p.displayName=`Expander`,m.displayName=`Expander.Summary`,h.displayName=`Expander.Text`,g.displayName=`Expander.Group`,p.Summary=m,p.Text=h,p.Group=g})),v,y,b,x,S;t((()=>{v=e(n(),1),s(),_(),y={title:`Components/Content Presentation/Expander`,component:p,subcomponents:{"Expander.Summary":p.Summary,"Expander.Text":p.Text,"Expander.Group":p.Group},parameters:{docs:{description:{component:`Make a complex topic easier to digest by letting users reveal more detailed information only if they need it.

https://service-manual.nhs.uk/design-system/components/expander`}}}},b={render:e=>v.createElement(p,e,v.createElement(p.Summary,null,`Get your medical records`),v.createElement(p.Text,null,v.createElement(`p`,null,`You can see your GP records by:`),v.createElement(`ul`,null,v.createElement(`li`,null,`asking for them at your GP surgery `),v.createElement(`li`,null,`going online to see them (if you have signed up for`,` `,v.createElement(c,{href:`/using-the-nhs/nhs-services/gps/gp-online-services/`},`GP online services`),`)`))))},x={render:e=>v.createElement(p.Group,null,v.createElement(p,e,v.createElement(p.Summary,null,`How to measure your blood glucose levels`),v.createElement(p.Text,null,v.createElement(`p`,null,`Testing your blood at home is quick and easy, although it can be uncomfortable. It does get better.`),v.createElement(`p`,null,`You would have been given:`),v.createElement(`ul`,null,v.createElement(`li`,null,`a blood glucose metre`),v.createElement(`li`,null,`small needles called lancets`),v.createElement(`li`,null,`a plastic pen to hold the lancets`),v.createElement(`li`,null,`small test strips`)))),v.createElement(p,e,v.createElement(p.Summary,null,`When to check your blood glucose level`),v.createElement(p.Text,null,v.createElement(`p`,null,`Try to check your blood:`),v.createElement(`ul`,null,v.createElement(`li`,null,`before meals`),v.createElement(`li`,null,`2 to 3 hours after meals`),v.createElement(`li`,null,`before, during (take a break) and after exercise`)),v.createElement(`p`,null,`This helps you understand your blood glucose levels and how they’re affected by meals and exercise. It should help you have more stable blood glucose levels.`))))},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <Expander.Group>
      <Expander {...args}>
        <Expander.Summary>How to measure your blood glucose levels</Expander.Summary>
        <Expander.Text>
          <p>
            Testing your blood at home is quick and easy, although it can be uncomfortable. It does
            get better.
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
        <Expander.Summary>When to check your blood glucose level</Expander.Summary>
        <Expander.Text>
          <p>Try to check your blood:</p>
          <ul>
            <li>before meals</li>
            <li>2 to 3 hours after meals</li>
            <li>before, during (take a break) and after exercise</li>
          </ul>
          <p>
            This helps you understand your blood glucose levels and how they’re affected by meals
            and exercise. It should help you have more stable blood glucose levels.
          </p>
        </Expander.Text>
      </Expander>
    </Expander.Group>
}`,...x.parameters?.docs?.source}}},S=[`SingleExpander`,`MoreThanOneExpander`]}))();export{x as MoreThanOneExpander,b as SingleExpander,S as __namedExportsOrder,y as default};