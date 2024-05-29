import{r as t,R as l}from"./index-uCp2LrAq.js";import{f as P}from"./factory-Dl037jXY.js";import{c as d}from"./clsx-B-dksMZM.js";import{B as M}from"./Base-CQ_ipzy_.js";import"./_commonjsHelpers-BosuxZz1.js";const k=t.createContext({responsiveHeadings:[],registerHeadings:()=>{}}),B=t.createContext({head:!1}),I=()=>t.useContext(k),V=k.Provider,S=()=>t.useContext(B),q=B.Provider,e=P(({variant:a,className:n,...o},b)=>{const[r,i]=t.useState([]),c=t.useMemo(()=>({variant:a,responsiveHeadings:r,registerHeadings:i}),[a,r,i]);return l.createElement(V,{value:c},l.createElement("table",{className:d({"nhsuk-table":!a,[`nhsuk-table-${a}`]:a,className:n}),...o,ref:b}))}),y=({className:a,...n})=>l.createElement("caption",{className:d("nhsuk-table__caption",a),...n}),g=({className:a,role:n="rowgroup",...o})=>l.createElement(q,{value:{head:!0}},l.createElement("thead",{className:d("nhsuk-table__head",a),role:n,...o})),E=({className:a,...n})=>l.createElement("tbody",{className:d("nhsuk-table__body",a),...n}),w=({role:a="row",className:n,children:o,...b})=>{const{variant:r,responsiveHeadings:i,registerHeadings:c}=I(),{head:m}=S();t.useEffect(()=>{if(m&&r==="responsive"){const s=[];t.Children.forEach(o,p=>{if(t.isValidElement(p)&&p.type===u){const f=p;s.push(f.props.responsiveHeading||f.props.children||"__MISSING__RESPONSIVE_HEADING__")}}),c(s)}},[o,c,m,r]);let T=o;return!m&&r==="responsive"&&(T=t.Children.map(o,(s,p)=>t.isValidElement(s)&&s.type===u?t.cloneElement(s,{__responsiveHeading:i[p]??""}):s)),l.createElement("tr",{className:d({"nhsuk-table__row":!m,className:n}),role:a,...b},T)},u=({variant:a,role:n,className:o,children:b,responsiveHeading:r,__responsiveHeading:i,...c})=>{const{variant:m}=I(),{head:T}=S(),s=T?{as:"th",scope:"col",role:n||"columnheader",className:o,"data-responsive-heading":r}:{as:"td",role:n||"cell",className:d("nhsuk-table__cell",{"nhsuk-table__cell--numeric":a==="numeric"},o)};return l.createElement(M,{...s,...c},m==="responsive"&&l.createElement("span",{className:"nhsuk-table-responsive__heading"},i),b)};e.displayName="Table";y.displayName="Table.Caption";g.displayName="Table.Head";E.displayName="Table.Body";w.displayName="Table.Row";u.displayName="Table.Cell";e.Caption=y;e.Head=g;e.Body=E;e.Row=w;e.Cell=u;e.__docgenInfo={description:"",methods:[],displayName:"Table"};y.__docgenInfo={description:"",methods:[],displayName:"Table.Caption"};g.__docgenInfo={description:"",methods:[],displayName:"Table.Head",props:{role:{defaultValue:{value:"'rowgroup'",computed:!1},required:!1}}};E.__docgenInfo={description:"",methods:[],displayName:"Table.Body"};w.__docgenInfo={description:"",methods:[],displayName:"Table.Row",props:{variant:{required:!1,tsType:{name:"literal",value:"'head'"},description:"@deprecated Will be removed in a future release. It now automatically detects the variant based on the context. This is now unused within the component."},role:{defaultValue:{value:"'row'",computed:!1},required:!1}}};u.__docgenInfo={description:"",methods:[],displayName:"Table.Cell",props:{variant:{required:!1,tsType:{name:"literal",value:"'numeric'"},description:"The variant of the cell. Defaults to none."},responsiveHeading:{required:!1,tsType:{name:"string"},description:"The heading to display in when the table is in responsive mode and on small screens. If not provided, the children will be used."},__responsiveHeading:{required:!1,tsType:{name:"ReactNode"},description:"For internal use only"}}};const F={title:"Components/Content Presentation/Table",component:e,subcomponents:{"Table.Caption":e.Caption,"Table.Head":e.Head,"Table.Body":e.Body,"Table.Row":e.Row,"Table.Cell":e.Cell},argTypes:{variant:{control:!1,table:{type:{summary:"responsive | undefined"},defaultValue:{summary:"undefined"}}}},parameters:{docs:{description:{component:`Use a table to make it easier for users to compare and scan information.

https://service-manual.nhs.uk/design-system/components/table`}}}},C={render:a=>l.createElement(e,{...a},l.createElement(e.Caption,null,"Skin symptoms and possible causes"),l.createElement(e.Head,null,l.createElement(e.Row,null,l.createElement(e.Cell,null,"Skin symptoms"),l.createElement(e.Cell,null,"Possible cause"))),l.createElement(e.Body,null,l.createElement(e.Row,null,l.createElement(e.Cell,null,"Blisters on lips or around the mouth"),l.createElement(e.Cell,null,"cold sores")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"Itchy, dry, cracked, sore"),l.createElement(e.Cell,null,"eczema")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"Red, scaly patches"),l.createElement(e.Cell,null,"psoriasis"))))},h={render:a=>l.createElement(e,{...a,variant:"responsive"},l.createElement(e.Caption,null,"Ibuprofen tablet dosages for children"),l.createElement(e.Head,null,l.createElement(e.Row,null,l.createElement(e.Cell,{responsiveHeading:"Age"},"Age"),l.createElement(e.Cell,{responsiveHeading:"How much?"},"How much"),l.createElement(e.Cell,{responsiveHeading:"How often?"},"How often"))),l.createElement(e.Body,null,l.createElement(e.Row,null,l.createElement(e.Cell,null,"7 to 9 years"),l.createElement(e.Cell,null,"200mg"),l.createElement(e.Cell,null,"Max 3 times in 24 hours")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"10 to 11 years"),l.createElement(e.Cell,null,"200mg to 300mg"),l.createElement(e.Cell,null,"Max 3 times in 24 hours")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"12 to 17 years"),l.createElement(e.Cell,null,"200mg to 400mg"),l.createElement(e.Cell,null,"Max 3 times in 24 hours"))))};var _,v,H;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(H=(v=C.parameters)==null?void 0:v.docs)==null?void 0:H.source}}};var R,N,x;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(x=(N=h.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};const U=["TwoColumn","ThreeColumn"];export{h as ThreeColumn,C as TwoColumn,U as __namedExportsOrder,F as default};
