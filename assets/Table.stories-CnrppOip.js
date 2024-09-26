import{r as t,R as l}from"./index-Cs7sjTYM.js";import{f as M}from"./factory-DehWrhRO.js";import{c as m}from"./clsx-B-dksMZM.js";import{B as V}from"./Base-fHV16vWU.js";import"./_commonjsHelpers-BosuxZz1.js";const B=t.createContext({responsiveHeadings:[],registerHeadings:()=>{}}),I=t.createContext({head:!1}),S=()=>t.useContext(B),q=B.Provider,P=()=>t.useContext(I),A=I.Provider,e=M(({variant:a,className:n,...o},s)=>{const[c,r]=t.useState([]),u=t.useMemo(()=>({variant:a,responsiveHeadings:c,registerHeadings:r}),[a,c,r]);return l.createElement(q,{value:u},l.createElement("table",{className:m({"nhsuk-table":!a,[`nhsuk-table-${a}`]:a},n),...o,ref:s}))}),g=({className:a,...n})=>l.createElement("caption",{className:m("nhsuk-table__caption",a),...n}),f=({className:a,role:n="rowgroup",...o})=>l.createElement(A,{value:{head:!0}},l.createElement("thead",{className:m("nhsuk-table__head",a),role:n,...o})),E=({className:a,...n})=>l.createElement("tbody",{className:m("nhsuk-table__body",a),...n}),w=({role:a="row",variant:n,className:o,children:s,...c})=>{const{variant:r,responsiveHeadings:u,registerHeadings:T}=S(),{head:i}=P();t.useEffect(()=>{if((n==="head"||i)&&r==="responsive"){const d=[];t.Children.forEach(s,b=>{if(t.isValidElement(b)&&b.type===p){const _=b;d.push(_.props.responsiveHeading||_.props.children||"__MISSING__RESPONSIVE_HEADING__")}}),T(d)}},[s,T,i,r]);let C=s;return(n==="default"||!i)&&r==="responsive"&&(C=t.Children.map(s,(d,b)=>t.isValidElement(d)&&d.type===p?t.cloneElement(d,{__responsiveHeading:u[b]??""}):d)),l.createElement("tr",{className:m({"nhsuk-table__row":n==="default"||!i},o),role:a,...c},C)},p=({variant:a,role:n,className:o,children:s,responsiveHeading:c,__responsiveHeading:r,...u})=>{const{variant:T}=S(),{head:i}=P(),C=i?{as:"th",scope:"col",role:n||"columnheader",className:o,"data-responsive-heading":c}:{as:"td",role:n||"cell",className:m("nhsuk-table__cell",{"nhsuk-table__cell--numeric":a==="numeric"},o)};return l.createElement(V,{...C,...u},T==="responsive"&&!i&&l.createElement("span",{className:"nhsuk-table-responsive__heading","aria-hidden":"true"},r," "),s)};e.displayName="Table";g.displayName="Table.Caption";f.displayName="Table.Head";E.displayName="Table.Body";w.displayName="Table.Row";p.displayName="Table.Cell";e.Caption=g;e.Head=f;e.Body=E;e.Row=w;e.Cell=p;e.__docgenInfo={description:"",methods:[],displayName:"Table"};g.__docgenInfo={description:"",methods:[],displayName:"Table.Caption"};f.__docgenInfo={description:"",methods:[],displayName:"Table.Head",props:{role:{defaultValue:{value:"'rowgroup'",computed:!1},required:!1}}};E.__docgenInfo={description:"",methods:[],displayName:"Table.Body"};w.__docgenInfo={description:"",methods:[],displayName:"Table.Row",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'head'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'head'"}]},description:"@deprecated Will be removed in a future release. It now automatically detects the variant based on the context. This is now unused within the component."},role:{defaultValue:{value:"'row'",computed:!1},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"Table.Cell",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'numeric'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'numeric'"}]},description:"The variant of the cell. Defaults to none."},responsiveHeading:{required:!1,tsType:{name:"string"},description:"The heading to display in when the table is in responsive mode and on small screens. If not provided, the children will be used."},__responsiveHeading:{required:!1,tsType:{name:"ReactNode"},description:"For internal use only"}}};const U={title:"Components/Content Presentation/Table",component:e,subcomponents:{"Table.Caption":e.Caption,"Table.Head":e.Head,"Table.Body":e.Body,"Table.Row":e.Row,"Table.Cell":e.Cell},argTypes:{variant:{control:!1,table:{type:{summary:"responsive | undefined"},defaultValue:{summary:"undefined"}}}},parameters:{docs:{description:{component:`Use a table to make it easier for users to compare and scan information.

https://service-manual.nhs.uk/design-system/components/table`}}}},h={render:a=>l.createElement(e,{...a},l.createElement(e.Caption,null,"Skin symptoms and possible causes"),l.createElement(e.Head,null,l.createElement(e.Row,null,l.createElement(e.Cell,null,"Skin symptoms"),l.createElement(e.Cell,null,"Possible cause"))),l.createElement(e.Body,null,l.createElement(e.Row,null,l.createElement(e.Cell,null,"Blisters on lips or around the mouth"),l.createElement(e.Cell,null,"cold sores")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"Itchy, dry, cracked, sore"),l.createElement(e.Cell,null,"eczema")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"Red, scaly patches"),l.createElement(e.Cell,null,"psoriasis"))))},y={render:a=>l.createElement(e,{...a,variant:"responsive"},l.createElement(e.Caption,null,"Ibuprofen tablet dosages for children"),l.createElement(e.Head,null,l.createElement(e.Row,null,l.createElement(e.Cell,{responsiveHeading:"Age"},"Age"),l.createElement(e.Cell,{responsiveHeading:"How much?"},"How much"),l.createElement(e.Cell,{responsiveHeading:"How often?"},"How often"))),l.createElement(e.Body,null,l.createElement(e.Row,null,l.createElement(e.Cell,null,"7 to 9 years"),l.createElement(e.Cell,null,"200mg"),l.createElement(e.Cell,null,"Max 3 times in 24 hours")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"10 to 11 years"),l.createElement(e.Cell,null,"200mg to 300mg"),l.createElement(e.Cell,null,"Max 3 times in 24 hours")),l.createElement(e.Row,null,l.createElement(e.Cell,null,"12 to 17 years"),l.createElement(e.Cell,null,"200mg to 400mg"),l.createElement(e.Cell,null,"Max 3 times in 24 hours"))))};var v,H,R;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(R=(H=h.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var N,x,k;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(k=(x=y.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const W=["TwoColumn","ThreeColumn"];export{y as ThreeColumn,h as TwoColumn,W as __namedExportsOrder,U as default};
