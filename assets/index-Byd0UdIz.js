import{j as a}from"./jsx-runtime-DRTy3Uxn.js";import{c as i}from"./clsx-CH7BE6MN.js";import{r as d,R as u}from"./index-BBkUAzwr.js";const y=d.createContext({isResponsive:!1,headings:[],setHeadings:()=>{}});y.displayName="TableContext";const x=()=>d.useContext(y),f=d.createContext("none");f.displayName="TableSectionContext";const N=()=>d.useContext(f),w=({children:e,className:n,role:l="rowgroup",...o})=>a.jsx("thead",{className:i("nhsuk-table__head",n),role:l,...o,children:a.jsx(f.Provider,{value:"header",children:e})}),k=({children:e,className:n,...l})=>a.jsx("tbody",{className:i("nhsuk-table__body",n),...l,children:a.jsx(f.Provider,{value:"body",children:e})}),g=({children:e,className:n,role:l="row",...o})=>{const s=N(),{isResponsive:r,headings:b,setHeadings:c}=x();d.useEffect(()=>{if(r&&s==="header"){const t=[];u.Children.forEach(e,p=>{var C;u.isValidElement(p)&&p.type===h&&t.push(((C=p.props.children)==null?void 0:C.toString())??"")}),c(t)}},[e,r,s,c]);let T=e;return s==="body"&&r&&(T=u.Children.map(e,(t,p)=>u.isValidElement(t)&&t.type===h?u.cloneElement(t,{_responsiveHeading:b[p]??""}):t)),a.jsx("tr",{className:i({"nhsuk-table__row":s==="body"},n),role:l,...o,children:T})},h=({children:e,className:n,role:l="cell",isNumeric:o=!1,_responsiveHeading:s,...r})=>{const b=N(),{isResponsive:c}=x();return b==="header"?(l="columnheader",a.jsx("th",{className:i("nhsuk-table__header",{"nhsuk-table__header--numeric":o},n),role:l,...r,children:e})):a.jsxs("td",{className:i("nhsuk-table__cell",{"nhsuk-table__cell--numeric":o},n),role:l,...r,children:[c&&s&&a.jsx("span",{className:"nhsuk-table-responsive__heading",children:s}),e]})},m=({children:e,responsive:n=!1,caption:l,captionProps:o,className:s,...r})=>{const[b,c]=d.useState([]),{className:T,...t}=o||{};return a.jsx(y.Provider,{value:{isResponsive:n,headings:b,setHeadings:c},children:a.jsxs("table",{className:i({"nhsuk-table":!n,"nhsuk-table-responsive":n},s),...r,children:[l&&a.jsx("caption",{className:i("nhsuk-table__caption",T),...t,children:l}),e]})})};w.displayName="Table.Head";k.displayName="Table.Body";g.displayName="Table.Row";h.displayName="Table.Cell";m.displayName="Table";m.Row=g;m.Cell=h;m.Head=w;m.Body=k;m.__docgenInfo={description:`Use a table to make it easier for users to compare and scan information.

For more information on when to use this component, got to the [NHS Service Manual website](https://service-manual.nhs.uk/design-system/components/table).

@link https://service-manual.nhs.uk/design-system/components/table

@example
\`\`\`tsx
<Table caption="Ibuprofen tablet dosages for children">
 <Table.Head>
  <Table.Row>
   <Table.Cell>Age</Table.Cell>
   <Table.Cell>How much</Table.Cell>
   <Table.Cell>How often</Table.Cell>
  </Table.Row>
 </Table.Head>
 <Table.Body>
  <Table.Row>
   <Table.Cell>1 to 2 months</Table.Cell>
   <Table.Cell>2.5ml</Table.Cell>
   <Table.Cell>Up to 4 times in 24 hours</Table.Cell>
  </Table.Row>
 </Table.Body>
</Table>
\`\`\``,methods:[{name:"Row",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  role = 'row',
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"Cell",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  role = 'cell',
  isNumeric = false,
  _responsiveHeading,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"Head",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  role = 'rowgroup',
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"Body",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}}],displayName:"Table",props:{responsive:{defaultValue:{value:"false",computed:!1},required:!1}}};m.__docgenInfo={description:`Use a table to make it easier for users to compare and scan information.

For more information on when to use this component, got to the [NHS Service Manual website](https://service-manual.nhs.uk/design-system/components/table).

@link https://service-manual.nhs.uk/design-system/components/table

@example
\`\`\`tsx
<Table caption="Ibuprofen tablet dosages for children">
 <Table.Head>
  <Table.Row>
   <Table.Cell>Age</Table.Cell>
   <Table.Cell>How much</Table.Cell>
   <Table.Cell>How often</Table.Cell>
  </Table.Row>
 </Table.Head>
 <Table.Body>
  <Table.Row>
   <Table.Cell>1 to 2 months</Table.Cell>
   <Table.Cell>2.5ml</Table.Cell>
   <Table.Cell>Up to 4 times in 24 hours</Table.Cell>
  </Table.Row>
 </Table.Body>
</Table>
\`\`\``,methods:[{name:"Row",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  role = 'row',
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"Cell",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  role = 'cell',
  isNumeric = false,
  _responsiveHeading,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"Head",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  role = 'rowgroup',
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"Body",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}}],displayName:"Table",props:{responsive:{defaultValue:{value:"false",computed:!1},required:!1}}};export{m as T};
