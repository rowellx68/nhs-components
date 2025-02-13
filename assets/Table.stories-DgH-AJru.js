import{r as t,R as l}from"./index-DCEVbkbO.js";import{f as F}from"./factory-B-vprWl1.js";import{c as d}from"./clsx-B-dksMZM.js";import{B as z}from"./Base-DkqVgamr.js";import{R as D,C as G}from"./Grid-PG6IAAhE.js";import{C as O}from"./Container-DsMVoRsj.js";import"./_commonjsHelpers-CqkleIqs.js";const V=t.createContext({responsiveHeadings:[],firstCellIsHeader:!1,registerHeadings:()=>{}}),M=t.createContext({head:!1}),q=()=>t.useContext(V),W=V.Provider,A=()=>t.useContext(M),U=M.Provider,e=F(({variant:a,className:r,firstCellIsHeader:o=!1,...p},m)=>{const[u,i]=t.useState([]),b=t.useMemo(()=>({variant:a,responsiveHeadings:u,firstCellIsHeader:o,registerHeadings:i}),[a,u,i]);return l.createElement(W,{value:b},l.createElement("table",{className:d({"nhsuk-table":!a,[`nhsuk-table-${a}`]:a},r),...p,ref:m}))}),g=({className:a,...r})=>l.createElement("caption",{className:d("nhsuk-table__caption",a),...r}),y=({className:a,role:r="rowgroup",...o})=>l.createElement(U,{value:{head:!0}},l.createElement("thead",{className:d("nhsuk-table__head",a),role:r,...o})),v=({className:a,...r})=>l.createElement("tbody",{className:d("nhsuk-table__body",a),...r}),R=({role:a="row",className:r,children:o,...p})=>{const{variant:m,responsiveHeadings:u,firstCellIsHeader:i,registerHeadings:b}=q(),{head:C}=A();t.useEffect(()=>{if(C&&m==="responsive"){const n=[];t.Children.forEach(o,s=>{if(t.isValidElement(s)&&s.type===T){const E=s;n.push(E.props.responsiveHeading||E.props.children||"__MISSING__RESPONSIVE_HEADING__")}}),b(n)}},[o,b,C,m]);let c=o;return C||(m==="responsive"&&(c=t.Children.map(o,(n,s)=>t.isValidElement(n)&&n.type===T?t.cloneElement(n,{__responsiveHeading:u[s]??""}):n)),c=t.Children.map(c,(n,s)=>t.isValidElement(n)&&n.type===T?t.cloneElement(n,{__firstCellIsHeader:s===0&&i}):n)),l.createElement("tr",{className:d({"nhsuk-table__row":!C},r)||void 0,role:a,...p},c)},T=({variant:a,role:r,className:o,children:p,responsiveHeading:m,__responsiveHeading:u,__firstCellIsHeader:i,...b})=>{const{variant:C}=q(),{head:c}=A(),n=d({"nhsuk-table__header":i,"nhsuk-table__header--numeric":a==="numeric"},o),s=d("nhsuk-table__cell",{"nhsuk-table__cell--numeric":a==="numeric"},o),E=c||i?{as:"th",scope:i?"row":"col",role:i?r:r||"columnheader",...n&&{className:n}}:{as:"td",role:r,...s&&{className:s}};return l.createElement(z,{...E,...b},C==="responsive"&&!c&&l.createElement("span",{className:"nhsuk-table-responsive__heading","aria-hidden":"true"},m||u," "),p)};e.displayName="Table";g.displayName="Table.Caption";y.displayName="Table.Head";v.displayName="Table.Body";R.displayName="Table.Row";T.displayName="Table.Cell";e.Caption=g;e.Head=y;e.Body=v;e.Row=R;e.Cell=T;e.__docgenInfo={description:"",methods:[],displayName:"Table",props:{firstCellIsHeader:{defaultValue:{value:"false",computed:!1},required:!1}}};g.__docgenInfo={description:"",methods:[],displayName:"Table.Caption"};y.__docgenInfo={description:"",methods:[],displayName:"Table.Head",props:{role:{defaultValue:{value:"'rowgroup'",computed:!1},required:!1}}};v.__docgenInfo={description:"",methods:[],displayName:"Table.Body"};R.__docgenInfo={description:"",methods:[],displayName:"Table.Row",props:{role:{defaultValue:{value:"'row'",computed:!1},required:!1}}};T.__docgenInfo={description:"",methods:[],displayName:"Table.Cell",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'numeric'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'numeric'"}]},description:"The variant of the cell. Defaults to none."},responsiveHeading:{required:!1,tsType:{name:"string"},description:"The heading to display in when the table is in responsive mode and on small screens. If not provided, the children will be used."},__responsiveHeading:{required:!1,tsType:{name:"ReactNode"},description:"For internal use only"},__firstCellIsHeader:{required:!1,tsType:{name:"boolean"},description:"For internal use only"}}};const Y={title:"Components/Content Presentation/Table",component:e,subcomponents:{"Table.Caption":e.Caption,"Table.Head":e.Head,"Table.Body":e.Body,"Table.Row":e.Row,"Table.Cell":e.Cell},argTypes:{variant:{control:!1,table:{type:{summary:"responsive | undefined"},defaultValue:{summary:"undefined"}}}},parameters:{docs:{description:{component:`Use a table to make it easier for users to compare and scan information.

https://service-manual.nhs.uk/design-system/components/table`}}}},h={render:a=>l.createElement(e,{...a},l.createElement(e.Caption,null,"Skin symptoms and possible causes"),l.createElement(e.Head,null,l.createElement(e.Row,null,l.createElement(e.Cell,null,"Skin symptoms"),l.createElement(e.Cell,null,"Possible cause"))),l.createElement(e.Body,null,l.createElement(e.Row,null,l.createElement(e.Cell,null,"Blisters on lips or around the mouth"),l.createElement(e.Cell,null,"cold sores")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"Itchy, dry, cracked, sore"),l.createElement(e.Cell,null,"eczema")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"Red, scaly patches"),l.createElement(e.Cell,null,"psoriasis"))))},w={render:a=>l.createElement(e,{...a,variant:"responsive"},l.createElement(e.Caption,null,"Ibuprofen tablet dosages for children"),l.createElement(e.Head,null,l.createElement(e.Row,null,l.createElement(e.Cell,{responsiveHeading:"Age"},"Age"),l.createElement(e.Cell,{responsiveHeading:"How much?"},"How much"),l.createElement(e.Cell,{responsiveHeading:"How often?"},"How often"))),l.createElement(e.Body,null,l.createElement(e.Row,null,l.createElement(e.Cell,null,"7 to 9 years"),l.createElement(e.Cell,null,"200mg"),l.createElement(e.Cell,null,"Max 3 times in 24 hours")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"10 to 11 years"),l.createElement(e.Cell,null,"200mg to 300mg"),l.createElement(e.Cell,null,"Max 3 times in 24 hours")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"12 to 17 years"),l.createElement(e.Cell,null,"200mg to 400mg"),l.createElement(e.Cell,null,"Max 3 times in 24 hours"))))},f={args:{firstCellIsHeader:!0,variant:"responsive"},render:a=>l.createElement(O,null,l.createElement(D,null,l.createElement(G,{width:"two-thirds"},l.createElement(e,{...a},l.createElement(e.Caption,null,"Prescription prepayment certificate (PPC) charges"),l.createElement(e.Head,null,l.createElement(e.Row,null,l.createElement(e.Cell,null,"Item"),l.createElement(e.Cell,{variant:"numeric"},"Current charge"),l.createElement(e.Cell,{variant:"numeric"},"New charge"))),l.createElement(e.Body,null,l.createElement(e.Row,{role:"none"},l.createElement(e.Cell,null,"3-month"),l.createElement(e.Cell,{variant:"numeric"},"£31.25"),l.createElement(e.Cell,{variant:"numeric"},"£32.05")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"12-month"),l.createElement(e.Cell,{variant:"numeric"},"£111.60"),l.createElement(e.Cell,{variant:"numeric"},"£114.50")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"HRT"),l.createElement(e.Cell,{variant:"numeric"},"£19.30"),l.createElement(e.Cell,{variant:"numeric"},"£19.80")))))))};var H,_,N;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(N=(_=h.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var I,k,B;w.parameters={...w.parameters,docs:{...(I=w.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(B=(k=w.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var x,P,S;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
              <Table.Row role="none">
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
}`,...(S=(P=f.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};const Z=["TwoColumn","ThreeColumn","ThreeColumnWithFirstCellAsHeader"];export{w as ThreeColumn,f as ThreeColumnWithFirstCellAsHeader,h as TwoColumn,Z as __namedExportsOrder,Y as default};
