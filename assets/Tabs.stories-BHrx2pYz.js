import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{r as _,R as r}from"./index-BBkUAzwr.js";import{c}from"./clsx-CH7BE6MN.js";import{u as q}from"./use-id-with-prefix-Dzx8tZmb.js";const I=_.createContext({selectedTab:"",setSelectedTab:()=>{}});I.displayName="TabsContext";const A=()=>_.useContext(I),B=({children:a,className:t,role:i="tablist",...l})=>e.jsx("ul",{className:c("nhsuk-tabs__list",t),role:i,...l,children:a}),j=({children:a,className:t,listItemProps:i,id:l,role:d="tab",tabIndex:m=0,_targetId:o,...f})=>{const{className:b,...x}=i||{},{selectedTab:T,setSelectedTab:y}=A(),C=q("tab-item"),h=l||C;return e.jsx("li",{className:c("nhsuk-tabs__list-item",{"nhsuk-tabs__list-item--selected":o===T},b),role:"presentation",...x,children:e.jsx("a",{className:c("nhsuk-tabs__tab",t),"aria-selected":o===T,role:d,tabIndex:m,id:h,href:`#${o}`,"aria-controls":o,...f,onClick:()=>{y(o)},children:a})})},k=({className:a,children:t,role:i="tabpanel",_targetId:l,...d})=>{const{selectedTab:m}=A();return e.jsx("div",{className:c("nhsuk-tabs__panel",{"nhsuk-tabs__panel--hidden":l!==m},a),id:l,...d,role:i,children:t})},g=({id:a,children:t})=>t,s=({children:a,className:t,title:i,titleProps:l,listProps:d={},...m})=>{var h;const{className:o,...f}=l||{},b=r.Children.toArray(a).filter(n=>r.isValidElement(n)&&n.type===g),x=b.flatMap((n,P)=>{const N=r.Children.toArray(n.props.children).find(p=>r.isValidElement(p)&&p.type===j);return r.cloneElement(N,{key:P,_targetId:n.props.id})},[]),T=b.flatMap((n,P)=>{const N=r.Children.toArray(n.props.children).find(p=>r.isValidElement(p)&&p.type===k);return r.cloneElement(N,{key:P,_targetId:n.props.id,"aria-labelledby":n.props.id})},[]),[y,C]=_.useState(((h=b.at(0))==null?void 0:h.props.id)??"");return e.jsx(I.Provider,{value:{selectedTab:y,setSelectedTab:C},children:e.jsxs("div",{className:c("nhsuk-tabs js-enabled",t),...m,children:[e.jsx("h2",{className:c("nhsuk-tabs__title",o),...f,children:i}),e.jsx(B,{...d,children:x}),T]})})};s.Title=j;s.Tab=g;s.Panel=k;s.displayName="Tabs";j.displayName="Tabs.Title";k.displayName="Tabs.Panel";g.displayName="Tabs.Tab";s.__docgenInfo={description:"",methods:[{name:"Title",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  listItemProps,
  id,
  role = 'tab',
  tabIndex = 0,
  _targetId,
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"Tab",docblock:null,modifiers:["static"],params:[{name:"{ id, children }",optional:!1,type:null}],returns:null},{name:"Panel",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  children,
  role = 'tabpanel',
  _targetId,
  ...rest
}`,optional:!1,type:null}],returns:null}],displayName:"Tabs",props:{listProps:{defaultValue:{value:"{}",computed:!1},required:!1}}};s.__docgenInfo={description:"",methods:[{name:"Title",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  listItemProps,
  id,
  role = 'tab',
  tabIndex = 0,
  _targetId,
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"Tab",docblock:null,modifiers:["static"],params:[{name:"{ id, children }",optional:!1,type:null}],returns:null},{name:"Panel",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  children,
  role = 'tabpanel',
  _targetId,
  ...rest
}`,optional:!1,type:null}],returns:null}],displayName:"Tabs",props:{listProps:{defaultValue:{value:"{}",computed:!1},required:!1}}};const w={component:s,title:"Experimental/Components/Content Presentation/Tabs",tags:["autodocs"]},u={args:{title:"Contents"},render:a=>e.jsxs(s,{...a,children:[e.jsxs(s.Tab,{id:"item-1",children:[e.jsx(s.Title,{children:"Item 1"}),e.jsx(s.Panel,{children:"Content goes here 1"})]}),e.jsxs(s.Tab,{id:"item-2",children:[e.jsx(s.Title,{children:"Item 2"}),e.jsx(s.Panel,{children:"Content goes here 2"})]})]})};var E,v,S,V,L;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(S=(v=u.parameters)==null?void 0:v.docs)==null?void 0:S.source},description:{story:"The basic usage of the Tabs component.",...(L=(V=u.parameters)==null?void 0:V.docs)==null?void 0:L.description}}};const z=["Basic"];export{u as Basic,z as __namedExportsOrder,w as default};
