import{r,R as l}from"./index-Cs7sjTYM.js";import{f as W}from"./factory-DehWrhRO.js";import{c as b}from"./clsx-B-dksMZM.js";import{B as z}from"./Base-fHV16vWU.js";import{R as D,C as G}from"./Grid-ByltY6Yt.js";import{C as O}from"./Container-CLMOXAcg.js";import"./_commonjsHelpers-BosuxZz1.js";const q=r.createContext({responsiveHeadings:[],firstCellIsHeader:!1,registerHeadings:()=>{}}),M=r.createContext({head:!1}),A=()=>r.useContext(q),U=q.Provider,F=()=>r.useContext(M),$=M.Provider,e=W(({variant:a,className:n,firstCellIsHeader:i=!1,...m},C)=>{const[c,o]=r.useState([]),p=r.useMemo(()=>({variant:a,responsiveHeadings:c,firstCellIsHeader:i,registerHeadings:o}),[a,c,o]);return l.createElement(U,{value:p},l.createElement("table",{className:b({"nhsuk-table":!a,[`nhsuk-table-${a}`]:a},n),...m,ref:C}))}),g=({className:a,...n})=>l.createElement("caption",{className:b("nhsuk-table__caption",a),...n}),y=({className:a,role:n="rowgroup",...i})=>l.createElement($,{value:{head:!0}},l.createElement("thead",{className:b("nhsuk-table__head",a),role:n,...i})),v=({className:a,...n})=>l.createElement("tbody",{className:b("nhsuk-table__body",a),...n}),R=({role:a="row",variant:n,className:i,children:m,...C})=>{const{variant:c,responsiveHeadings:o,firstCellIsHeader:p,registerHeadings:h}=A(),{head:d}=F();r.useEffect(()=>{if((n==="head"||d)&&c==="responsive"){const t=[];r.Children.forEach(m,s=>{if(r.isValidElement(s)&&s.type===T){const H=s;t.push(H.props.responsiveHeading||H.props.children||"__MISSING__RESPONSIVE_HEADING__")}}),h(t)}},[m,h,d,c]);let u=m;return(n==="default"||!d)&&c==="responsive"&&(u=r.Children.map(m,(t,s)=>r.isValidElement(t)&&t.type===T?r.cloneElement(t,{__responsiveHeading:o[s]??""}):t)),(n==="default"||!d)&&(u=r.Children.map(u,(t,s)=>r.isValidElement(t)&&t.type===T?r.cloneElement(t,{__firstCellIsHeader:s===0&&p}):t)),l.createElement("tr",{className:b({"nhsuk-table__row":n==="default"||!d},i)||void 0,role:a,...C},u)},T=({variant:a,role:n,className:i,children:m,responsiveHeading:C,__responsiveHeading:c,__firstCellIsHeader:o,...p})=>{const{variant:h}=A(),{head:d}=F(),u=b({"nhsuk-table__header":o,"nhsuk-table__header--numeric":a==="numeric"},i),t=b("nhsuk-table__cell",{"nhsuk-table__cell--numeric":a==="numeric"},i),s=d||o?{as:"th",scope:o?"row":"col",role:o?n:n||"columnheader",...u&&{className:u}}:{as:"td",...t&&{className:t}};return l.createElement(z,{...s,...p},h==="responsive"&&!d&&l.createElement("span",{className:"nhsuk-table-responsive__heading","aria-hidden":"true"},C||c," "),m)};e.displayName="Table";g.displayName="Table.Caption";y.displayName="Table.Head";v.displayName="Table.Body";R.displayName="Table.Row";T.displayName="Table.Cell";e.Caption=g;e.Head=y;e.Body=v;e.Row=R;e.Cell=T;e.__docgenInfo={description:"",methods:[],displayName:"Table",props:{firstCellIsHeader:{defaultValue:{value:"false",computed:!1},required:!1}}};g.__docgenInfo={description:"",methods:[],displayName:"Table.Caption"};y.__docgenInfo={description:"",methods:[],displayName:"Table.Head",props:{role:{defaultValue:{value:"'rowgroup'",computed:!1},required:!1}}};v.__docgenInfo={description:"",methods:[],displayName:"Table.Body"};R.__docgenInfo={description:"",methods:[],displayName:"Table.Row",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'head'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'head'"}]},description:"@deprecated Will be removed in a future release. It now automatically detects the variant based on the context. This is now unused within the component."},role:{defaultValue:{value:"'row'",computed:!1},required:!1}}};T.__docgenInfo={description:"",methods:[],displayName:"Table.Cell",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'numeric'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'numeric'"}]},description:"The variant of the cell. Defaults to none."},responsiveHeading:{required:!1,tsType:{name:"string"},description:"The heading to display in when the table is in responsive mode and on small screens. If not provided, the children will be used."},__responsiveHeading:{required:!1,tsType:{name:"ReactNode"},description:"For internal use only"},__firstCellIsHeader:{required:!1,tsType:{name:"boolean"},description:"For internal use only"}}};const Z={title:"Components/Content Presentation/Table",component:e,subcomponents:{"Table.Caption":e.Caption,"Table.Head":e.Head,"Table.Body":e.Body,"Table.Row":e.Row,"Table.Cell":e.Cell},argTypes:{variant:{control:!1,table:{type:{summary:"responsive | undefined"},defaultValue:{summary:"undefined"}}}},parameters:{docs:{description:{component:`Use a table to make it easier for users to compare and scan information.

https://service-manual.nhs.uk/design-system/components/table`}}}},E={render:a=>l.createElement(e,{...a},l.createElement(e.Caption,null,"Skin symptoms and possible causes"),l.createElement(e.Head,null,l.createElement(e.Row,null,l.createElement(e.Cell,null,"Skin symptoms"),l.createElement(e.Cell,null,"Possible cause"))),l.createElement(e.Body,null,l.createElement(e.Row,null,l.createElement(e.Cell,null,"Blisters on lips or around the mouth"),l.createElement(e.Cell,null,"cold sores")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"Itchy, dry, cracked, sore"),l.createElement(e.Cell,null,"eczema")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"Red, scaly patches"),l.createElement(e.Cell,null,"psoriasis"))))},w={render:a=>l.createElement(e,{...a,variant:"responsive"},l.createElement(e.Caption,null,"Ibuprofen tablet dosages for children"),l.createElement(e.Head,null,l.createElement(e.Row,null,l.createElement(e.Cell,{responsiveHeading:"Age"},"Age"),l.createElement(e.Cell,{responsiveHeading:"How much?"},"How much"),l.createElement(e.Cell,{responsiveHeading:"How often?"},"How often"))),l.createElement(e.Body,null,l.createElement(e.Row,null,l.createElement(e.Cell,null,"7 to 9 years"),l.createElement(e.Cell,null,"200mg"),l.createElement(e.Cell,null,"Max 3 times in 24 hours")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"10 to 11 years"),l.createElement(e.Cell,null,"200mg to 300mg"),l.createElement(e.Cell,null,"Max 3 times in 24 hours")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"12 to 17 years"),l.createElement(e.Cell,null,"200mg to 400mg"),l.createElement(e.Cell,null,"Max 3 times in 24 hours"))))},f={args:{firstCellIsHeader:!0,variant:"responsive"},render:a=>l.createElement(O,null,l.createElement(D,null,l.createElement(G,{width:"two-thirds"},l.createElement(e,{...a},l.createElement(e.Caption,null,"Prescription prepayment certificate (PPC) charges"),l.createElement(e.Head,null,l.createElement(e.Row,null,l.createElement(e.Cell,null,"Item"),l.createElement(e.Cell,{variant:"numeric"},"Current charge"),l.createElement(e.Cell,{variant:"numeric"},"New charge"))),l.createElement(e.Body,null,l.createElement(e.Row,null,l.createElement(e.Cell,null,"3-month"),l.createElement(e.Cell,{variant:"numeric"},"£31.25"),l.createElement(e.Cell,{variant:"numeric"},"£32.05")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"12-month"),l.createElement(e.Cell,{variant:"numeric"},"£111.60"),l.createElement(e.Cell,{variant:"numeric"},"£114.50")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"HRT"),l.createElement(e.Cell,{variant:"numeric"},"£19.30"),l.createElement(e.Cell,{variant:"numeric"},"£19.80")))))))};var _,N,I;E.parameters={...E.parameters,docs:{...(_=E.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <Table.Caption>Skin symptoms and possible causes</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Cell>Skin symptoms</Table.Cell>
          <Table.Cell>Possible cause</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Blisters on lips or around the mouth</Table.Cell>
          <Table.Cell>cold sores</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Itchy, dry, cracked, sore</Table.Cell>
          <Table.Cell>eczema</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Red, scaly patches</Table.Cell>
          <Table.Cell>psoriasis</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
}`,...(I=(N=E.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var k,x,B;w.parameters={...w.parameters,docs:{...(k=w.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Table {...args} variant="responsive">
      <Table.Caption>Ibuprofen tablet dosages for children</Table.Caption>
      <Table.Head>
        <Table.Row>
          <Table.Cell responsiveHeading="Age">Age</Table.Cell>
          <Table.Cell responsiveHeading="How much?">How much</Table.Cell>
          <Table.Cell responsiveHeading="How often?">How often</Table.Cell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>7 to 9 years</Table.Cell>
          <Table.Cell>200mg</Table.Cell>
          <Table.Cell>Max 3 times in 24 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>10 to 11 years</Table.Cell>
          <Table.Cell>200mg to 300mg</Table.Cell>
          <Table.Cell>Max 3 times in 24 hours</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>12 to 17 years</Table.Cell>
          <Table.Cell>200mg to 400mg</Table.Cell>
          <Table.Cell>Max 3 times in 24 hours</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
}`,...(B=(x=w.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var P,S,V;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    firstCellIsHeader: true,
    variant: 'responsive'
  },
  render: args => <Container>
      <Row>
        <Column width="two-thirds">
          <Table {...args}>
            <Table.Caption>
              Prescription prepayment certificate (PPC) charges
            </Table.Caption>
            <Table.Head>
              <Table.Row>
                <Table.Cell>Item</Table.Cell>
                <Table.Cell variant="numeric">Current charge</Table.Cell>
                <Table.Cell variant="numeric">New charge</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.Cell>3-month</Table.Cell>
                <Table.Cell variant="numeric">£31.25</Table.Cell>
                <Table.Cell variant="numeric">£32.05</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>12-month</Table.Cell>
                <Table.Cell variant="numeric">£111.60</Table.Cell>
                <Table.Cell variant="numeric">£114.50</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>HRT</Table.Cell>
                <Table.Cell variant="numeric">£19.30</Table.Cell>
                <Table.Cell variant="numeric">£19.80</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Column>
      </Row>
    </Container>
}`,...(V=(S=f.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const ee=["TwoColumn","ThreeColumn","ThreeColumnWithFirstCellAsHeader"];export{w as ThreeColumn,f as ThreeColumnWithFirstCellAsHeader,E as TwoColumn,ee as __namedExportsOrder,Z as default};
