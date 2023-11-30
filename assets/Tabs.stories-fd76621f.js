import{j as e}from"./jsx-runtime-94f6e698.js";import{r as N,R as i}from"./index-8db94870.js";import{c}from"./clsx-1229b3e0.js";import{u as B}from"./use-id-with-prefix-a03533b1.js";import"./_commonjsHelpers-042e6b4d.js";const P=N.createContext({selectedTab:"",setSelectedTab:()=>{}});P.displayName="TabsContext";const R=()=>N.useContext(P),f=({children:a,className:n,role:l="tablist",...r})=>e.jsx("ul",{className:c("nhsuk-tabs__list",n),role:l,...r,children:a}),_=({children:a,className:n,listItemProps:l,id:r,role:d="tab",tabIndex:b=0,_targetId:o,...m})=>{const{className:x,...C}=l||{},{selectedTab:h,setSelectedTab:j}=R(),u=B("tab-item"),t=r||u;return e.jsx("li",{className:c("nhsuk-tabs__list-item",{"nhsuk-tabs__list-item--selected":o===h},x),role:"presentation",...C,children:e.jsx("a",{className:c("nhsuk-tabs__tab",n),"aria-selected":o===h,role:d,tabIndex:b,id:t,href:`#${o}`,"aria-controls":o,...m,onClick:()=>j(o),children:a})})},k=({className:a,children:n,role:l="tabpanel",_targetId:r,...d})=>{const{selectedTab:b}=R();return e.jsx("div",{className:c("nhsuk-tabs__panel",{"nhsuk-tabs__panel--hidden":r!==b},a),id:r,...d,role:l,children:n})},g=({id:a,children:n})=>n,s=({children:a,className:n,title:l,titleProps:r,...d})=>{var u;const{className:b,...o}=r||{},m=i.Children.toArray(a).filter(t=>i.isValidElement(t)&&t.type===g),x=m.flatMap((t,I)=>{const y=i.Children.toArray(t.props.children).find(p=>i.isValidElement(p)&&p.type===_);return i.cloneElement(y,{key:I,_targetId:t.props.id})},[]),C=m.flatMap((t,I)=>{const y=i.Children.toArray(t.props.children).find(p=>i.isValidElement(p)&&p.type===k);return i.cloneElement(y,{key:I,_targetId:t.props.id,"aria-labelledby":t.props.id})},[]),[h,j]=N.useState(((u=m.at(0))==null?void 0:u.props.id)??"");return e.jsx(P.Provider,{value:{selectedTab:h,setSelectedTab:j},children:e.jsxs("div",{className:c("nhsuk-tabs js-enabled",n),...d,children:[e.jsx("h2",{className:c("nhsuk-tabs__title",b),...o,children:l}),e.jsx(f,{children:x}),C]})})};s.List=f;s.Item=_;s.Tab=g;s.Panel=k;s.displayName="Tabs";f.displayName="Tabs.List";_.displayName="Tabs.ListItem";k.displayName="Tabs.Panel";g.displayName="Tabs.Tab";const w={component:s,title:"Experimental/Components/Content Presentation/Tabs",tags:["autodocs"]},T={args:{title:"Contents"},render:a=>e.jsxs(s,{...a,children:[e.jsxs(s.Tab,{id:"item-1",children:[e.jsx(s.Item,{children:"Item 1"}),e.jsx(s.Panel,{children:"Content goes here 1"})]}),e.jsxs(s.Tab,{id:"item-2",children:[e.jsx(s.Item,{children:"Item 2"}),e.jsx(s.Panel,{children:"Content goes here 2"})]})]})};var E,L,S,v,A;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: 'Contents'
  },
  render: args => <Tabs {...args}>
      <Tabs.Tab id='item-1'>
        <Tabs.Item>Item 1</Tabs.Item>
        <Tabs.Panel>
          Content goes here 1
        </Tabs.Panel>
      </Tabs.Tab>
      <Tabs.Tab id='item-2'>
        <Tabs.Item>Item 2</Tabs.Item>
        <Tabs.Panel>
          Content goes here 2
        </Tabs.Panel>
      </Tabs.Tab>
    </Tabs>
}`,...(S=(L=T.parameters)==null?void 0:L.docs)==null?void 0:S.source},description:{story:"The basic usage of the Tabs component.",...(A=(v=T.parameters)==null?void 0:v.docs)==null?void 0:A.description}}};const z=["Basic"];export{T as Basic,z as __namedExportsOrder,w as default};
//# sourceMappingURL=Tabs.stories-fd76621f.js.map
