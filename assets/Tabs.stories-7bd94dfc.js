import{j as e}from"./jsx-runtime-94f6e698.js";import{r as f,R as i}from"./index-8db94870.js";import{c}from"./clsx-1229b3e0.js";import{u as B}from"./use-id-with-prefix-a03533b1.js";import"./_commonjsHelpers-042e6b4d.js";const _=f.createContext({selectedTab:"",setSelectedTab:()=>{}});_.displayName="TabsContext";const R=()=>f.useContext(_),M=({children:t,className:a,role:l="tablist",...r})=>e.jsx("ul",{className:c("nhsuk-tabs__list",a),role:l,...r,children:t}),k=({children:t,className:a,listItemProps:l,id:r,role:d="tab",tabIndex:b=0,_targetId:o,...x})=>{const{className:m,...C}=l||{},{selectedTab:h,setSelectedTab:j}=R(),P=B("tab-item"),u=r||P;return e.jsx("li",{className:c("nhsuk-tabs__list-item",{"nhsuk-tabs__list-item--selected":o===h},m),role:"presentation",...C,children:e.jsx("a",{className:c("nhsuk-tabs__tab",a),"aria-selected":o===h,role:d,tabIndex:b,id:u,href:`#${o}`,"aria-controls":o,...x,onClick:()=>j(o),children:t})})},g=({className:t,children:a,role:l="tabpanel",_targetId:r,...d})=>{const{selectedTab:b}=R();return e.jsx("div",{className:c("nhsuk-tabs__panel",{"nhsuk-tabs__panel--hidden":r!==b},t),id:r,...d,role:l,children:a})},E=({id:t,children:a})=>a,s=({children:t,className:a,title:l,titleProps:r,listProps:d={},...b})=>{var u;const{className:o,...x}=r||{},m=i.Children.toArray(t).filter(n=>i.isValidElement(n)&&n.type===E),C=m.flatMap((n,y)=>{const N=i.Children.toArray(n.props.children).find(T=>i.isValidElement(T)&&T.type===k);return i.cloneElement(N,{key:y,_targetId:n.props.id})},[]),h=m.flatMap((n,y)=>{const N=i.Children.toArray(n.props.children).find(T=>i.isValidElement(T)&&T.type===g);return i.cloneElement(N,{key:y,_targetId:n.props.id,"aria-labelledby":n.props.id})},[]),[j,P]=f.useState(((u=m.at(0))==null?void 0:u.props.id)??"");return e.jsx(_.Provider,{value:{selectedTab:j,setSelectedTab:P},children:e.jsxs("div",{className:c("nhsuk-tabs js-enabled",a),...b,children:[e.jsx("h2",{className:c("nhsuk-tabs__title",o),...x,children:l}),e.jsx(M,{...d,children:C}),h]})})};s.Title=k;s.Tab=E;s.Panel=g;s.displayName="Tabs";k.displayName="Tabs.Title";g.displayName="Tabs.Panel";E.displayName="Tabs.Tab";const z={component:s,title:"Experimental/Components/Content Presentation/Tabs",tags:["autodocs"]},p={args:{title:"Contents"},render:t=>e.jsxs(s,{...t,children:[e.jsxs(s.Tab,{id:"item-1",children:[e.jsx(s.Title,{children:"Item 1"}),e.jsx(s.Panel,{children:"Content goes here 1"})]}),e.jsxs(s.Tab,{id:"item-2",children:[e.jsx(s.Title,{children:"Item 2"}),e.jsx(s.Panel,{children:"Content goes here 2"})]})]})};var I,S,v,L,A;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: 'Contents'
  },
  render: args => <Tabs {...args}>
      <Tabs.Tab id='item-1'>
        <Tabs.Title>Item 1</Tabs.Title>
        <Tabs.Panel>
          Content goes here 1
        </Tabs.Panel>
      </Tabs.Tab>
      <Tabs.Tab id='item-2'>
        <Tabs.Title>Item 2</Tabs.Title>
        <Tabs.Panel>
          Content goes here 2
        </Tabs.Panel>
      </Tabs.Tab>
    </Tabs>
}`,...(v=(S=p.parameters)==null?void 0:S.docs)==null?void 0:v.source},description:{story:"The basic usage of the Tabs component.",...(A=(L=p.parameters)==null?void 0:L.docs)==null?void 0:A.description}}};const D=["Basic"];export{p as Basic,D as __namedExportsOrder,z as default};
//# sourceMappingURL=Tabs.stories-7bd94dfc.js.map
