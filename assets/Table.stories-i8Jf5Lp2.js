import{r as t,R as e}from"./index-uCp2LrAq.js";import{f as B}from"./factory-Dl037jXY.js";import{c as d}from"./clsx-B-dksMZM.js";import{B as S}from"./Base-CQ_ipzy_.js";import"./_commonjsHelpers-BosuxZz1.js";const I=t.createContext({responsiveHeadings:[],registerHeadings:()=>{}}),x=()=>t.useContext(I),M=I.Provider,l=B(({variant:a,className:n,...s},o)=>{const[m,r]=t.useState([]),c=t.useMemo(()=>({variant:a,responsiveHeadings:m,registerHeadings:r}),[a,m,r]);return e.createElement(M,{value:c},e.createElement("table",{className:d({"nhsuk-table":!a,[`nhsuk-table-${a}`]:a,className:n}),...s,ref:o}))}),g=({className:a,...n})=>e.createElement("caption",{className:d("nhsuk-table__caption",a),...n}),E=({className:a,role:n="rowgroup",...s})=>e.createElement("thead",{className:d("nhsuk-table__head",a),role:n,...s}),y=({className:a,...n})=>e.createElement("tbody",{className:d("nhsuk-table__body",a),...n}),w=({variant:a,role:n="row",className:s,children:o,...m})=>{const{variant:r,responsiveHeadings:c,registerHeadings:u}=x();t.useEffect(()=>{if(a==="head"&&r==="responsive"){const i=[];t.Children.forEach(o,b=>{if(t.isValidElement(b)&&b.type===p){const v=b;i.push(v.props.responsiveHeading||v.props.children||"__MISSING__RESPONSIVE_HEADING__")}}),u(i)}},[o,u,a,r]);let T=o;return r==="responsive"&&a!=="head"&&(T=t.Children.map(o,(i,b)=>t.isValidElement(i)&&i.type===p?t.cloneElement(i,{__responsiveHeading:c[b]??""}):i)),e.createElement("tr",{className:d({"nhsuk-table__row":!a,className:s}),role:n,...m},T)},p=({variant:a,role:n,className:s,children:o,responsiveHeading:m,__responsiveHeading:r,...c})=>{const{variant:u}=x(),T=a==="head"?{as:"th",scope:"col",role:n||"columnheader",className:s,"data-responsive-heading":m}:{as:"td",role:n||"cell",className:d("nhsuk-table__cell",{"nhsuk-table__cell--numeric":a==="numeric"},s)};return e.createElement(S,{...T,...c},u==="responsive"&&e.createElement("span",{className:"nhsuk-table-responsive__heading"},r),o)};l.displayName="Table";g.displayName="Table.Caption";E.displayName="Table.Head";y.displayName="Table.Body";w.displayName="Table.Row";p.displayName="Table.Cell";l.Caption=g;l.Head=E;l.Body=y;l.Row=w;l.Cell=p;l.__docgenInfo={description:"",methods:[],displayName:"Table"};g.__docgenInfo={description:"",methods:[],displayName:"Table.Caption"};E.__docgenInfo={description:"",methods:[],displayName:"Table.Head",props:{role:{defaultValue:{value:"'rowgroup'",computed:!1},required:!1}}};y.__docgenInfo={description:"",methods:[],displayName:"Table.Body"};w.__docgenInfo={description:"",methods:[],displayName:"Table.Row",props:{variant:{required:!1,tsType:{name:"literal",value:"'head'"},description:""},role:{defaultValue:{value:"'row'",computed:!1},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"Table.Cell",props:{variant:{required:!1,tsType:{name:"union",raw:"'head' | 'numeric'",elements:[{name:"literal",value:"'head'"},{name:"literal",value:"'numeric'"}]},description:"The variant of the cell. Defaults to none."},responsiveHeading:{required:!1,tsType:{name:"string"},description:"The heading to display in when the table is in responsive mode and on small screens. If not provided, the children will be used."},__responsiveHeading:{required:!1,tsType:{name:"ReactNode"},description:"For internal use only"}}};const D={title:"Components/Content Presentation/Table",component:l,parameters:{docs:{description:{component:`Use a table to make it easier for users to compare and scan information.

https://service-manual.nhs.uk/design-system/components/table`}}}},C={render:a=>e.createElement(l,{...a},e.createElement(l.Caption,null,"Skin symptoms and possible causes"),e.createElement(l.Head,null,e.createElement(l.Row,{variant:"head"},e.createElement(l.Cell,{variant:"head"},"Skin symptoms"),e.createElement(l.Cell,{variant:"head"},"Possible cause"))),e.createElement(l.Body,null,e.createElement(l.Row,null,e.createElement(l.Cell,null,"Blisters on lips or around the mouth"),e.createElement(l.Cell,null,"cold sores")),e.createElement(l.Row,null,e.createElement(l.Cell,null,"Itchy, dry, cracked, sore"),e.createElement(l.Cell,null,"eczema")),e.createElement(l.Row,null,e.createElement(l.Cell,null,"Red, scaly patches"),e.createElement(l.Cell,null,"psoriasis"))))},h={render:a=>e.createElement(l,{...a,variant:"responsive"},e.createElement(l.Caption,null,"Ibuprofen tablet dosages for children"),e.createElement(l.Head,null,e.createElement(l.Row,{variant:"head"},e.createElement(l.Cell,{variant:"head",responsiveHeading:"Age"},"Age"),e.createElement(l.Cell,{variant:"head",responsiveHeading:"How much?"},"How much"),e.createElement(l.Cell,{variant:"head",responsiveHeading:"How often?"},"How often"))),e.createElement(l.Body,null,e.createElement(l.Row,null,e.createElement(l.Cell,null,"7 to 9 years"),e.createElement(l.Cell,null,"200mg"),e.createElement(l.Cell,null,"Max 3 times in 24 hours")),e.createElement(l.Row,null,e.createElement(l.Cell,null,"10 to 11 years"),e.createElement(l.Cell,null,"200mg to 300mg"),e.createElement(l.Cell,null,"Max 3 times in 24 hours")),e.createElement(l.Row,null,e.createElement(l.Cell,null,"12 to 17 years"),e.createElement(l.Cell,null,"200mg to 400mg"),e.createElement(l.Cell,null,"Max 3 times in 24 hours"))))};var f,_,H;C.parameters={...C.parameters,docs:{...(f=C.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <Table.Caption>Skin symptoms and possible causes</Table.Caption>
      <Table.Head>
        <Table.Row variant="head">
          <Table.Cell variant="head">Skin symptoms</Table.Cell>
          <Table.Cell variant="head">Possible cause</Table.Cell>
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
}`,...(H=(_=C.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var R,N,k;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <Table {...args} variant="responsive">
      <Table.Caption>Ibuprofen tablet dosages for children</Table.Caption>
      <Table.Head>
        <Table.Row variant="head">
          <Table.Cell variant="head" responsiveHeading="Age">
            Age
          </Table.Cell>
          <Table.Cell variant="head" responsiveHeading="How much?">
            How much
          </Table.Cell>
          <Table.Cell variant="head" responsiveHeading="How often?">
            How often
          </Table.Cell>
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
}`,...(k=(N=h.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};const G=["TwoColumn","ThreeColumn"];export{h as ThreeColumn,C as TwoColumn,G as __namedExportsOrder,D as default};
