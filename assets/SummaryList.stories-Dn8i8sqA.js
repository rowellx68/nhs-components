import{a as e,n as t}from"./chunk-BneVvdWh.js";import{L as n}from"./iframe-opzFqeq4.js";import{n as r,t as i}from"./VisuallyHidden-CztxzemY.js";import{n as a,r as o,t as s}from"./Grid-BuZxpqh7.js";import{n as c,t as l}from"./Card-Fi3pX89M.js";import{n as u,t as d}from"./SummaryList-BlJ9m2V3.js";import{n as f,t as p}from"./Tag-BZm1oEtZ.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;t((()=>{m=e(n(),1),r(),c(),o(),f(),u(),h={title:`Components/Content Presentation/Summary List`,component:d,subcomponents:{"SummaryList.Row":d.Row,"SummaryList.Key":d.Key,"SummaryList.Value":d.Value,"SummaryList.Actions":d.Actions,"SummaryList.ActionLink":d.ActionLink},parameters:{docs:{description:{component:`Use the summary list to summarise information, for example, a user's responses at the end of a form.

https://service-manual.nhs.uk/design-system/components/summary-list`}}}},g={render:e=>m.createElement(d,e,m.createElement(d.Row,null,m.createElement(d.Key,null,`Name`),m.createElement(d.Value,null,`Karen Francis`),m.createElement(d.Actions,null,m.createElement(d.ActionLink,{visuallyHiddenText:`name`,href:`#/change`},`Change`))),m.createElement(d.Row,null,m.createElement(d.Key,null,`Date of birth`),m.createElement(d.Value,null,`15 March 1984`),m.createElement(d.Actions,null,m.createElement(d.ActionLink,{visuallyHiddenText:`date of birth`,href:`#/change`},`Change`))),m.createElement(d.Row,null,m.createElement(d.Key,null,`Contact information`),m.createElement(d.Value,null,`73 Roman Rd`,m.createElement(`br`,null),`Leeds`,m.createElement(`br`,null),`LS2 5ZN`),m.createElement(d.Actions,null,m.createElement(d.ActionLink,{visuallyHiddenText:`contact information`,href:`#/change`},`Change`))),m.createElement(d.Row,null,m.createElement(d.Key,null,`Contact details`),m.createElement(d.Value,null,m.createElement(`p`,null,`07700 900362`),m.createElement(`p`,null,`karen.francis@example.com`)),m.createElement(d.Actions,null,m.createElement(d.ActionLink,{visuallyHiddenText:`contact details`,href:`#/change`},`Change`))))},_={name:`with multiple actions`,render:e=>m.createElement(d,e,m.createElement(d.Row,{variant:`no-actions`},m.createElement(d.Key,null,`Name`),m.createElement(d.Value,null,`Karen Francis`)),m.createElement(d.Row,null,m.createElement(d.Key,null,`Date of birth`),m.createElement(d.Value,null,`15 March 1984`),m.createElement(d.Actions,null,m.createElement(d.ActionLink,{visuallyHiddenText:`date of birth`,href:`#/change`},`Change`))),m.createElement(d.Row,null,m.createElement(d.Key,null,`Contact information`),m.createElement(d.Value,null,`73 Roman Rd`,m.createElement(`br`,null),`Leeds`,m.createElement(`br`,null),`LS2 5ZN`),m.createElement(d.Actions,null,m.createElement(d.ActionLink,{visuallyHiddenText:`contact information`,href:`#/change`},`Change`))),m.createElement(d.Row,null,m.createElement(d.Key,null,`Contact details`),m.createElement(d.Value,null,m.createElement(`p`,null,`07700 900362`),m.createElement(`p`,null,`karen.francis@example.com`)),m.createElement(d.Actions,null,m.createElement(d.ActionLink,{visuallyHiddenText:`new contact details`,href:`#/add`},`Add`),m.createElement(d.ActionLink,{visuallyHiddenText:`contact details`,href:`#/change`},`Change`))),m.createElement(d.Row,null,m.createElement(d.Key,null,`Medicines`),m.createElement(d.Value,null,m.createElement(`p`,null,`Isotretinoin capsules (Roaccutane)`),m.createElement(`p`,null,`Isotretinoin gel (Isotrex)`),m.createElement(`p`,null,`Pepto-Bismol (bismuth subsalicylate)`)),m.createElement(d.Actions,null,m.createElement(d.ActionLink,{visuallyHiddenText:`new medicine`,href:`#/add`},`Add`),m.createElement(d.ActionLink,{visuallyHiddenText:`medicines`,href:`#/change`},`Change`))))},v={name:`without actions`,render:e=>m.createElement(d,e,m.createElement(d.Row,null,m.createElement(d.Key,null,`Name`),m.createElement(d.Value,null,`Karen Francis`)),m.createElement(d.Row,null,m.createElement(d.Key,null,`Date of birth`),m.createElement(d.Value,null,`15 March 1984`)),m.createElement(d.Row,null,m.createElement(d.Key,null,`Contact information`),m.createElement(d.Value,null,`73 Roman Rd`,m.createElement(`br`,null),`Leeds`,m.createElement(`br`,null),`LS2 5ZN`)),m.createElement(d.Row,null,m.createElement(d.Key,null,`Contact details`),m.createElement(d.Value,null,m.createElement(`p`,null,`07700 900362`),m.createElement(`p`,null,`karen.francis@example.com`))))},y={name:`without border`,args:{variant:`no-border`},render:e=>m.createElement(d,e,m.createElement(d.Row,null,m.createElement(d.Key,null,`Name`),m.createElement(d.Value,null,`Karen Francis`)),m.createElement(d.Row,null,m.createElement(d.Key,null,`Date of birth`),m.createElement(d.Value,null,`15 March 1984`)),m.createElement(d.Row,null,m.createElement(d.Key,null,`Contact information`),m.createElement(d.Value,null,`73 Roman Rd`,m.createElement(`br`,null),`Leeds`,m.createElement(`br`,null),`LS2 5ZN`)),m.createElement(d.Row,null,m.createElement(d.Key,null,`Contact details`),m.createElement(d.Value,null,m.createElement(`p`,null,`07700 900362`),m.createElement(`p`,null,`karen.francis@example.com`))))},b={name:`without row border`,render:e=>m.createElement(d,e,m.createElement(d.Row,null,m.createElement(d.Key,null,`Name`),m.createElement(d.Value,null,`Karen Francis`)),m.createElement(d.Row,null,m.createElement(d.Key,null,`Date of birth`),m.createElement(d.Value,null,`15 March 1984`)),m.createElement(d.Row,null,m.createElement(d.Key,null,`Contact information`),m.createElement(d.Value,null,`73 Roman Rd`,m.createElement(`br`,null),`Leeds`,m.createElement(`br`,null),`LS2 5ZN`)),m.createElement(d.Row,{variant:`no-border`},m.createElement(d.Key,null,`Contact details`),m.createElement(d.Value,null,m.createElement(`p`,null,`07700 900362`),m.createElement(`p`,null,`karen.francis@example.com`))))},x={name:`as a card`,render:()=>m.createElement(l,null,m.createElement(l.Content,null,m.createElement(l.Heading,{size:`m`},`Regional Manager`),m.createElement(d,null,m.createElement(d.Row,null,m.createElement(d.Key,null,`Name`),m.createElement(d.Value,null,`Karen Francis`)),m.createElement(d.Row,{variant:`no-border`},m.createElement(d.Key,null,`Date of birth`),m.createElement(d.Value,null,`15 March 1984`)))))},S={name:`as a card (clickable) without actions`,render:()=>m.createElement(l,{clickable:!0},m.createElement(l.Content,null,m.createElement(l.Heading,{size:`m`},m.createElement(l.Link,{href:`#/card-clickable`},`Regional Manager`)),m.createElement(d,null,m.createElement(d.Row,null,m.createElement(d.Key,null,`Name`),m.createElement(d.Value,null,`Karen Francis`)),m.createElement(d.Row,{variant:`no-border`},m.createElement(d.Key,null,`Date of birth`),m.createElement(d.Value,null,`15 March 1984`)))))},C={name:`as a card (feature) with actions`,render:()=>m.createElement(l,{variant:`feature`},m.createElement(l.HeadingContainer,null,m.createElement(l.Heading,{size:`m`},`Regional Manager`),m.createElement(l.Actions,null,m.createElement(`a`,{className:`nhsuk-link`,href:`#/delete`},`Delete`,m.createElement(i,null,` (Regional Manager)`)),m.createElement(`a`,{className:`nhsuk-link`,href:`#/withdraw`},`Withdraw`,m.createElement(i,null,` (Regional Manager)`)))),m.createElement(l.Content,null,m.createElement(d,null,m.createElement(d.Row,null,m.createElement(d.Key,null,`Name`),m.createElement(d.Value,null,`Karen Francis`)),m.createElement(d.Row,{variant:`no-border`},m.createElement(d.Key,null,`Date of birth`),m.createElement(d.Value,null,`15 March 1984`)))))},w={name:`as a card (feature) with custom HTML`,render:()=>m.createElement(l,{variant:`feature`},m.createElement(l.Content,null,m.createElement(l.Heading,{size:`m`},`Your read`),m.createElement(d,null,m.createElement(d.Row,null,m.createElement(d.Key,null,`Opinion`),m.createElement(d.Value,null,m.createElement(`p`,{className:`nhsuk-u-margin-bottom-3`},m.createElement(p,{colour:`red`},`Recall for assessment`))),m.createElement(d.Actions,null,m.createElement(d.ActionLink,{visuallyHiddenText:`opinion (Your read)`,href:`#/change`},`Change`))),m.createElement(d.Row,null,m.createElement(d.Key,null,`Detailed opinion`),m.createElement(d.Value,null,m.createElement(a,null,m.createElement(s,{width:`one-half`},m.createElement(`p`,{className:`nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold`},`Right breast`),m.createElement(`p`,{className:`nhsuk-u-margin-bottom-3`},m.createElement(p,{colour:`red`},`Abnormal`))),m.createElement(s,{width:`one-half`},m.createElement(`p`,{className:`nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold`},`Left breast`),m.createElement(`p`,{className:`nhsuk-u-margin-bottom-3 nhsuk-u-secondary-text-colour`},`Not recorded`)))),m.createElement(d.Actions,null,m.createElement(d.ActionLink,{visuallyHiddenText:`detailed opinion (Your read)`,href:`#/change`},`Change`))),m.createElement(d.Row,{variant:`no-border`},m.createElement(d.Key,null,`Annotations`),m.createElement(d.Value,null,m.createElement(`p`,{className:`nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold`},`Right breast`),m.createElement(`p`,{className:`nhsuk-u-margin-bottom-0`},`Microcalcification outside a mass, Clinical abnormality – Level 2 (benign)`)),m.createElement(d.Actions,null,m.createElement(d.ActionLink,{visuallyHiddenText:`annotations (Your read)`,href:`#/change`},`Change`))))))},T={name:`as a card (secondary) with actions`,render:()=>m.createElement(l,{variant:`secondary`},m.createElement(l.HeadingContainer,null,m.createElement(l.Heading,{size:`m`},`Regional Manager`),m.createElement(l.Actions,null,m.createElement(`a`,{className:`nhsuk-link`,href:`#/delete`},`Delete`,m.createElement(i,null,` (Regional Manager)`)),m.createElement(`a`,{className:`nhsuk-link`,href:`#/withdraw`},`Withdraw`,m.createElement(i,null,` (Regional Manager)`)))),m.createElement(l.Content,null,m.createElement(d,null,m.createElement(d.Row,null,m.createElement(d.Key,null,`Name`),m.createElement(d.Value,null,`Karen Francis`)),m.createElement(d.Row,{variant:`no-border`},m.createElement(d.Key,null,`Date of birth`),m.createElement(d.Value,null,`15 March 1984`)))))},E={name:`as a card (type emergency) with actions`,render:()=>m.createElement(l,{variant:`emergency`},m.createElement(l.HeadingContainer,null,m.createElement(l.Heading,{careCard:!0,visuallyHiddenText:`Immediate action required:`},`Regional Manager`),m.createElement(l.Actions,null,m.createElement(`a`,{className:`nhsuk-link`,href:`#/delete`},`Delete`,m.createElement(i,null,` (Regional Manager)`)),m.createElement(`a`,{className:`nhsuk-link`,href:`#/withdraw`},`Withdraw`,m.createElement(i,null,` (Regional Manager)`)))),m.createElement(l.Content,null,m.createElement(d,null,m.createElement(d.Row,null,m.createElement(d.Key,null,`Name`),m.createElement(d.Value,null,`Karen Francis`)),m.createElement(d.Row,{variant:`no-border`},m.createElement(d.Key,null,`Date of birth`),m.createElement(d.Value,null,`15 March 1984`)))))},D={name:`as a card (type non-urgent) with actions`,render:()=>m.createElement(l,{variant:`non-urgent`},m.createElement(l.HeadingContainer,null,m.createElement(l.Heading,{careCard:!0,visuallyHiddenText:`Non-urgent advice:`},`Regional Manager`),m.createElement(l.Actions,null,m.createElement(`a`,{className:`nhsuk-link`,href:`#/delete`},`Delete`,m.createElement(i,null,` (Regional Manager)`)),m.createElement(`a`,{className:`nhsuk-link`,href:`#/withdraw`},`Withdraw`,m.createElement(i,null,` (Regional Manager)`)))),m.createElement(l.Content,null,m.createElement(d,null,m.createElement(d.Row,null,m.createElement(d.Key,null,`Name`),m.createElement(d.Value,null,`Karen Francis`)),m.createElement(d.Row,{variant:`no-border`},m.createElement(d.Key,null,`Date of birth`),m.createElement(d.Value,null,`15 March 1984`)))))},O={name:`as a card (type urgent) with actions`,render:()=>m.createElement(l,{variant:`urgent`},m.createElement(l.HeadingContainer,null,m.createElement(l.Heading,{careCard:!0,visuallyHiddenText:`Urgent advice:`},`Regional Manager`),m.createElement(l.Actions,null,m.createElement(`a`,{className:`nhsuk-link`,href:`#/delete`},`Delete`,m.createElement(i,null,` (Regional Manager)`)),m.createElement(`a`,{className:`nhsuk-link`,href:`#/withdraw`},`Withdraw`,m.createElement(i,null,` (Regional Manager)`)))),m.createElement(l.Content,null,m.createElement(d,null,m.createElement(d.Row,null,m.createElement(d.Key,null,`Name`),m.createElement(d.Value,null,`Karen Francis`)),m.createElement(d.Row,{variant:`no-border`},m.createElement(d.Key,null,`Date of birth`),m.createElement(d.Value,null,`15 March 1984`)))))},k={name:`as a card with actions`,render:()=>m.createElement(l,null,m.createElement(l.HeadingContainer,null,m.createElement(l.Heading,{size:`m`},`Regional Manager`),m.createElement(l.Actions,null,m.createElement(`a`,{className:`nhsuk-link`,href:`#/delete`},`Delete`,m.createElement(i,null,` (Regional Manager)`)),m.createElement(`a`,{className:`nhsuk-link`,href:`#/withdraw`},`Withdraw`,m.createElement(i,null,` (Regional Manager)`)))),m.createElement(l.Content,null,m.createElement(d,null,m.createElement(d.Row,null,m.createElement(d.Key,null,`Name`),m.createElement(d.Value,null,`Karen Francis`)),m.createElement(d.Row,{variant:`no-border`},m.createElement(d.Key,null,`Date of birth`),m.createElement(d.Value,null,`15 March 1984`)))))},A={name:`as a card with multiple actions`,render:()=>m.createElement(l,null,m.createElement(l.HeadingContainer,null,m.createElement(l.Heading,{size:`l`},`Regional Manager`),m.createElement(l.Actions,null,m.createElement(`a`,{className:`nhsuk-link`,href:`#/delete`},`Delete`,m.createElement(i,null,` (Regional Manager)`)),m.createElement(`a`,{className:`nhsuk-link`,href:`#/withdraw`},`Withdraw`,m.createElement(i,null,` (Regional Manager)`)))),m.createElement(l.Content,null,m.createElement(d,null,m.createElement(d.Row,{variant:`no-actions`},m.createElement(d.Key,null,`Name`),m.createElement(d.Value,null,`Karen Francis`)),m.createElement(d.Row,null,m.createElement(d.Key,null,`Date of birth`),m.createElement(d.Value,null,`15 March 1984`),m.createElement(d.Actions,null,m.createElement(d.ActionLink,{visuallyHiddenText:`date of birth (Regional Manager)`,href:`#/change`},`Change`))),m.createElement(d.Row,null,m.createElement(d.Key,null,`Contact information`),m.createElement(d.Value,null,`73 Roman Rd`,m.createElement(`br`,null),`Leeds`,m.createElement(`br`,null),`LS2 5ZN`),m.createElement(d.Actions,null,m.createElement(d.ActionLink,{visuallyHiddenText:`contact information (Regional Manager)`,href:`#/change`},`Change`))),m.createElement(d.Row,null,m.createElement(d.Key,null,`Contact details`),m.createElement(d.Value,null,m.createElement(`p`,null,`07700 900362`),m.createElement(`p`,null,`karen.francis@example.com`)),m.createElement(d.Actions,null,m.createElement(d.ActionLink,{visuallyHiddenText:`new contact details (Regional Manager)`,href:`#/add`},`Add`),m.createElement(d.ActionLink,{visuallyHiddenText:`contact details (Regional Manager)`,href:`#/change`},`Change`))),m.createElement(d.Row,{variant:`no-border`},m.createElement(d.Key,null,`Medicines`),m.createElement(d.Value,null,m.createElement(`p`,null,`Isotretinoin capsules (Roaccutane)`),m.createElement(`p`,null,`Isotretinoin gel (Isotrex)`),m.createElement(`p`,null,`Pepto-Bismol (bismuth subsalicylate)`)),m.createElement(d.Actions,null,m.createElement(d.ActionLink,{visuallyHiddenText:`new medicine (Regional Manager)`,href:`#/add`},`Add`),m.createElement(d.ActionLink,{visuallyHiddenText:`medicines (Regional Manager)`,href:`#/change`},`Change`))))))},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="name" href="#/change">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="date of birth" href="#/change">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          73 Roman Rd
          <br />
          Leeds
          <br />
          LS2 5ZN
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="contact information" href="#/change">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <p>07700 900362</p>
          <p>karen.francis@example.com</p>
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="contact details" href="#/change">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
    </SummaryList>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: 'with multiple actions',
  render: args => <SummaryList {...args}>
      <SummaryList.Row variant="no-actions">
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="date of birth" href="#/change">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          73 Roman Rd
          <br />
          Leeds
          <br />
          LS2 5ZN
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="contact information" href="#/change">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <p>07700 900362</p>
          <p>karen.francis@example.com</p>
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="new contact details" href="#/add">
            Add
          </SummaryList.ActionLink>
          <SummaryList.ActionLink visuallyHiddenText="contact details" href="#/change">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Medicines</SummaryList.Key>
        <SummaryList.Value>
          <p>Isotretinoin capsules (Roaccutane)</p>
          <p>Isotretinoin gel (Isotrex)</p>
          <p>Pepto-Bismol (bismuth subsalicylate)</p>
        </SummaryList.Value>
        <SummaryList.Actions>
          <SummaryList.ActionLink visuallyHiddenText="new medicine" href="#/add">
            Add
          </SummaryList.ActionLink>
          <SummaryList.ActionLink visuallyHiddenText="medicines" href="#/change">
            Change
          </SummaryList.ActionLink>
        </SummaryList.Actions>
      </SummaryList.Row>
    </SummaryList>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'without actions',
  render: args => <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          73 Roman Rd
          <br />
          Leeds
          <br />
          LS2 5ZN
        </SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <p>07700 900362</p>
          <p>karen.francis@example.com</p>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'without border',
  args: {
    variant: 'no-border'
  },
  render: args => <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          73 Roman Rd
          <br />
          Leeds
          <br />
          LS2 5ZN
        </SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <p>07700 900362</p>
          <p>karen.francis@example.com</p>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'without row border',
  render: args => <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Name</SummaryList.Key>
        <SummaryList.Value>Karen Francis</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Date of birth</SummaryList.Key>
        <SummaryList.Value>15 March 1984</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Contact information</SummaryList.Key>
        <SummaryList.Value>
          73 Roman Rd
          <br />
          Leeds
          <br />
          LS2 5ZN
        </SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row variant="no-border">
        <SummaryList.Key>Contact details</SummaryList.Key>
        <SummaryList.Value>
          <p>07700 900362</p>
          <p>karen.francis@example.com</p>
        </SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'as a card',
  render: () => <Card>
      <Card.Content>
        <Card.Heading size="m">Regional Manager</Card.Heading>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'as a card (clickable) without actions',
  render: () => <Card clickable>
      <Card.Content>
        <Card.Heading size="m">
          <Card.Link href="#/card-clickable">Regional Manager</Card.Link>
        </Card.Heading>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'as a card (feature) with actions',
  render: () => <Card variant="feature">
      <Card.HeadingContainer>
        <Card.Heading size="m">Regional Manager</Card.Heading>
        <Card.Actions>
          <a className="nhsuk-link" href="#/delete">
            Delete
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
          <a className="nhsuk-link" href="#/withdraw">
            Withdraw
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
        </Card.Actions>
      </Card.HeadingContainer>
      <Card.Content>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'as a card (feature) with custom HTML',
  render: () => <Card variant="feature">
      <Card.Content>
        <Card.Heading size="m">Your read</Card.Heading>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Opinion</SummaryList.Key>
            <SummaryList.Value>
              <p className="nhsuk-u-margin-bottom-3">
                <Tag colour="red">Recall for assessment</Tag>
              </p>
            </SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink visuallyHiddenText="opinion (Your read)" href="#/change">
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Detailed opinion</SummaryList.Key>
            <SummaryList.Value>
              <Row>
                <Column width="one-half">
                  <p className="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">Right breast</p>
                  <p className="nhsuk-u-margin-bottom-3">
                    <Tag colour="red">Abnormal</Tag>
                  </p>
                </Column>
                <Column width="one-half">
                  <p className="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">Left breast</p>
                  <p className="nhsuk-u-margin-bottom-3 nhsuk-u-secondary-text-colour">
                    Not recorded
                  </p>
                </Column>
              </Row>
            </SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink visuallyHiddenText="detailed opinion (Your read)" href="#/change">
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Annotations</SummaryList.Key>
            <SummaryList.Value>
              <p className="nhsuk-u-margin-bottom-1 nhsuk-u-font-weight-bold">Right breast</p>
              <p className="nhsuk-u-margin-bottom-0">
                Microcalcification outside a mass, Clinical abnormality – Level 2 (benign)
              </p>
            </SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink visuallyHiddenText="annotations (Your read)" href="#/change">
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'as a card (secondary) with actions',
  render: () => <Card variant="secondary">
      <Card.HeadingContainer>
        <Card.Heading size="m">Regional Manager</Card.Heading>
        <Card.Actions>
          <a className="nhsuk-link" href="#/delete">
            Delete
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
          <a className="nhsuk-link" href="#/withdraw">
            Withdraw
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
        </Card.Actions>
      </Card.HeadingContainer>
      <Card.Content>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'as a card (type emergency) with actions',
  render: () => <Card variant="emergency">
      <Card.HeadingContainer>
        <Card.Heading careCard visuallyHiddenText="Immediate action required:">
          Regional Manager
        </Card.Heading>
        <Card.Actions>
          <a className="nhsuk-link" href="#/delete">
            Delete
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
          <a className="nhsuk-link" href="#/withdraw">
            Withdraw
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
        </Card.Actions>
      </Card.HeadingContainer>
      <Card.Content>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'as a card (type non-urgent) with actions',
  render: () => <Card variant="non-urgent">
      <Card.HeadingContainer>
        <Card.Heading careCard visuallyHiddenText="Non-urgent advice:">
          Regional Manager
        </Card.Heading>
        <Card.Actions>
          <a className="nhsuk-link" href="#/delete">
            Delete
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
          <a className="nhsuk-link" href="#/withdraw">
            Withdraw
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
        </Card.Actions>
      </Card.HeadingContainer>
      <Card.Content>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'as a card (type urgent) with actions',
  render: () => <Card variant="urgent">
      <Card.HeadingContainer>
        <Card.Heading careCard visuallyHiddenText="Urgent advice:">
          Regional Manager
        </Card.Heading>
        <Card.Actions>
          <a className="nhsuk-link" href="#/delete">
            Delete
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
          <a className="nhsuk-link" href="#/withdraw">
            Withdraw
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
        </Card.Actions>
      </Card.HeadingContainer>
      <Card.Content>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'as a card with actions',
  render: () => <Card>
      <Card.HeadingContainer>
        <Card.Heading size="m">Regional Manager</Card.Heading>
        <Card.Actions>
          <a className="nhsuk-link" href="#/delete">
            Delete
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
          <a className="nhsuk-link" href="#/withdraw">
            Withdraw
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
        </Card.Actions>
      </Card.HeadingContainer>
      <Card.Content>
        <SummaryList>
          <SummaryList.Row>
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'as a card with multiple actions',
  render: () => <Card>
      <Card.HeadingContainer>
        <Card.Heading size="l">Regional Manager</Card.Heading>
        <Card.Actions>
          <a className="nhsuk-link" href="#/delete">
            Delete
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
          <a className="nhsuk-link" href="#/withdraw">
            Withdraw
            <VisuallyHidden> (Regional Manager)</VisuallyHidden>
          </a>
        </Card.Actions>
      </Card.HeadingContainer>
      <Card.Content>
        <SummaryList>
          <SummaryList.Row variant="no-actions">
            <SummaryList.Key>Name</SummaryList.Key>
            <SummaryList.Value>Karen Francis</SummaryList.Value>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Date of birth</SummaryList.Key>
            <SummaryList.Value>15 March 1984</SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink visuallyHiddenText="date of birth (Regional Manager)" href="#/change">
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Contact information</SummaryList.Key>
            <SummaryList.Value>
              73 Roman Rd
              <br />
              Leeds
              <br />
              LS2 5ZN
            </SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink visuallyHiddenText="contact information (Regional Manager)" href="#/change">
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
          <SummaryList.Row>
            <SummaryList.Key>Contact details</SummaryList.Key>
            <SummaryList.Value>
              <p>07700 900362</p>
              <p>karen.francis@example.com</p>
            </SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink visuallyHiddenText="new contact details (Regional Manager)" href="#/add">
                Add
              </SummaryList.ActionLink>
              <SummaryList.ActionLink visuallyHiddenText="contact details (Regional Manager)" href="#/change">
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
          <SummaryList.Row variant="no-border">
            <SummaryList.Key>Medicines</SummaryList.Key>
            <SummaryList.Value>
              <p>Isotretinoin capsules (Roaccutane)</p>
              <p>Isotretinoin gel (Isotrex)</p>
              <p>Pepto-Bismol (bismuth subsalicylate)</p>
            </SummaryList.Value>
            <SummaryList.Actions>
              <SummaryList.ActionLink visuallyHiddenText="new medicine (Regional Manager)" href="#/add">
                Add
              </SummaryList.ActionLink>
              <SummaryList.ActionLink visuallyHiddenText="medicines (Regional Manager)" href="#/change">
                Change
              </SummaryList.ActionLink>
            </SummaryList.Actions>
          </SummaryList.Row>
        </SummaryList>
      </Card.Content>
    </Card>
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithMultipleActions`,`WithoutActions`,`WithoutBorder`,`WithoutRowBorder`,`AsACard`,`AsACardClickableWithoutActions`,`AsACardFeatureWithActions`,`AsACardFeatureWithCustomHtml`,`AsACardSecondaryWithActions`,`AsACardTypeEmergencyWithActions`,`AsACardTypeNonUrgentWithActions`,`AsACardTypeUrgentWithActions`,`AsACardWithActions`,`AsACardWithMultipleActions`]}))();export{x as AsACard,S as AsACardClickableWithoutActions,C as AsACardFeatureWithActions,w as AsACardFeatureWithCustomHtml,T as AsACardSecondaryWithActions,E as AsACardTypeEmergencyWithActions,D as AsACardTypeNonUrgentWithActions,O as AsACardTypeUrgentWithActions,k as AsACardWithActions,A as AsACardWithMultipleActions,g as Default,_ as WithMultipleActions,v as WithoutActions,y as WithoutBorder,b as WithoutRowBorder,j as __namedExportsOrder,h as default};