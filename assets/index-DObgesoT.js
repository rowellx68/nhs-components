import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{c as m}from"./clsx-CH7BE6MN.js";import{r as l,R as _}from"./index-BBkUAzwr.js";import"./index-BNAbGPPW.js";import"./index-BJZX35FI.js";import"./index-DCz-pOyH.js";import{S as K}from"./index-BWzVQ7MN.js";import{C as T}from"./Container-C71ETtQt.js";const L=l.createContext({setHasTransactionalLink:()=>{},hasTransactionalLink:!1,transactional:!1}),P=()=>l.useContext(L),A=({className:t,height:a="40",width:s="100",...n})=>e.jsxs("svg",{className:m("nhsuk-logo",t),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 16",height:a,width:s,...n,children:[e.jsx("path",{className:"nhsuk-logo__background",fill:"#005eb8",d:"M0 0h40v16H0z"}),e.jsx("path",{className:"nhsuk-logo__text",fill:"#fff",d:"M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"})]});A.__docgenInfo={description:"",methods:[],displayName:"NhsLogo",props:{height:{defaultValue:{value:"'40'",computed:!1},required:!1},width:{defaultValue:{value:"'100'",computed:!1},required:!1}}};T.__docgenInfo={description:"",methods:[],displayName:"Container"};const S=l.createContext({breakpoints:[],setBreakpoints:()=>{},availableWidth:0,setAvailableWidth:()=>{},dropdownHeight:0,setDropdownHeight:()=>{},expanded:!1,setExpanded:()=>{}});S.displayName="HeaderNavContext";const M=()=>l.useContext(S),J=({className:t,asElement:a="a",image:s,...n})=>{const{orgName:r,orgDescriptor:f,orgSplit:i,serviceName:o,hasTransactionalLink:h}=P(),u=r?[r,i,f,"homepage"].filter(H=>!!H).join(" "):"NHS homepage",{src:d,className:v,alt:c,...b}=s||{};return e.jsx("div",{className:m("nhsuk-header__logo",{"nhsuk-header__logo--only":h}),children:e.jsxs(a,{className:m("nhsuk-header__link",{"nhsuk-header__link--service":!r&&o},t),"aria-label":u,...n,children:[d?e.jsx("img",{className:m("nhsuk-org-logo",v),src:d,alt:c,...b}):e.jsx(A,{}),r&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"nhsuk-organisation-name",children:[r,i&&e.jsx("span",{className:"nhsuk-organisation-name-split",children:i})]}),f&&e.jsx("span",{className:"nhsuk-organisation-descriptor",children:f})]}),!h&&o&&e.jsx("span",{className:"nhsuk-header__service-name",children:o})]})})},X=({className:t,asElement:a="a",...s})=>{const{serviceName:n,setHasTransactionalLink:r}=P();return l.useEffect(()=>(r(!0),()=>r(!1)),[]),e.jsx("div",{className:"nhsuk-header__transactional-service-name",children:e.jsx(a,{className:m("nhsuk-header__transactional-service-name--link",t),...s,children:n})})},W=({children:t,className:a,...s})=>e.jsx(T,{className:m("nhsuk-header__container",a),...s,children:t}),B=({children:t,className:a,id:s="content-header",...n})=>e.jsx("div",{className:m("nhsuk-header__content",a),id:s,...n,children:t}),O=(t,a=100)=>{let s;return(...n)=>{clearTimeout(s),s=window.setTimeout(()=>{t.apply(void 0,n)},a)}},R=({children:t,className:a,open:s,role:n="navigation",containerProps:r={},listProps:f={},moreToggleProps:i={visuallyHiddenText:"Browse",label:"More"},...o})=>{const{className:h,...u}=r,{className:d,...v}=f,c=l.useRef(null),[b,H]=l.useState([]),[D,C]=l.useState(0),[F,V]=l.useState(0),[z,U]=l.useState(!1),j=_.Children.toArray(t).filter(p=>_.isValidElement(p)&&p.type===w),G=()=>{var g;const p=Array.from(((g=c.current)==null?void 0:g.querySelectorAll(".nhsuk-header__navigation-item"))??[]);p==null||p.reduce((k,x)=>(k+=x.offsetWidth,H(y=>[...y,k]),k),0)},E=()=>{var k,x,y;const p=((k=c.current)==null?void 0:k.offsetWidth)??0,g=((y=(x=c.current)==null?void 0:x.querySelector(".nhsuk-mobile-menu-container"))==null?void 0:y.offsetWidth)??0;C(p-g)},I=O(()=>{E()});return l.useEffect(()=>(G(),E(),window.addEventListener("resize",I),()=>{window.removeEventListener("resize",I)}),[]),e.jsx("div",{className:m("nhsuk-navigation-container",h),...u,children:e.jsx("nav",{className:m("nhsuk-navigation","js-enabled",a),"aria-label":"Primary navigation",role:n,...o,ref:c,children:e.jsx("ul",{className:m("nhsuk-header__navigation-list",d),...v,children:e.jsxs(S.Provider,{value:{breakpoints:b,setBreakpoints:H,availableWidth:D,setAvailableWidth:C,dropdownHeight:F,setDropdownHeight:V,expanded:z,setExpanded:U},children:[j.map((p,g)=>_.cloneElement(p,{__navIndex:g,__mobileMenu:!1})),e.jsx(Q,{...i,children:j.map((p,g)=>_.cloneElement(p,{__navIndex:g,__mobileMenu:!0}))})]})})})})},w=({children:t,className:a,asElement:s="a",__navIndex:n,__mobileMenu:r,...f})=>{const{breakpoints:i,availableWidth:o}=M(),[h,u]=l.useState(!0);return l.useEffect(()=>{if(!(n===void 0||r===void 0||!o)){if(r){u(i[n]>o);return}u(i[n]<o)}},[i,o,n,r]),h?e.jsx("li",{className:m("nhsuk-header__navigation-item",a),children:e.jsx(s,{className:"nhsuk-header__navigation-link",...f,children:t})}):null},Q=({visible:t,visuallyHiddenText:a,children:s,label:n,className:r,type:f="button",...i})=>{const{availableWidth:o,breakpoints:h,setDropdownHeight:u,expanded:d,setExpanded:v}=M(),c=l.useRef(null);return l.useEffect(()=>{if(c.current&&d){u(c.current.offsetHeight);return}u(0),v(!1)},[c,d,u,v]),o>h[h.length-1]?null:e.jsxs("li",{className:"nhsuk-mobile-menu-container nhsuk-mobile-menu-container--visible",children:[e.jsxs("button",{className:"nhsuk-header__menu-toggle nhsuk-header__navigation-link nhsuk-header__menu-toggle--visible","aria-expanded":d,...i,onClick:()=>v(!d),children:[e.jsx("span",{className:"nhsuk-u-visually-hidden",children:a}),n,e.jsx("svg",{className:"nhsuk-icon nhsuk-icon__chevron-down",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:e.jsx("path",{d:"M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"})})]}),e.jsx("ul",{className:m("nhsuk-header__drop-down",{"nhsuk-header__drop-down--hidden":!d}),ref:c,children:s})]})},q=({className:t,action:a="/search",method:s="get",id:n="search-field",type:r="search",autoComplete:f="off",placeholder:i="Search",role:o="search",visuallyHiddenText:h="Search",toggleProps:u={},submitProps:d={},closeProps:v={},...c})=>e.jsx("div",{className:m("nhsuk-header__search",t),children:e.jsx("div",{className:"nhsuk-header__search-wrap",children:e.jsxs("form",{className:"nhsuk-header__search-form",action:a,method:s,role:o,children:[e.jsx("label",{className:"nhsuk-u-visually-hidden",htmlFor:n,children:h}),e.jsx("input",{className:"nhsuk-search__input",id:n,type:r,placeholder:i,autoComplete:"off",...c}),e.jsxs("button",{className:"nhsuk-search__submit",type:"submit",...d,children:[e.jsx(K,{}),e.jsx("span",{className:"nhsuk-u-visually-hidden",children:"Search"})]})]})})}),N=({children:t,className:a,role:s="banner",transactional:n,orgName:r,orgSplit:f,orgDescriptor:i,serviceName:o,white:h,...u})=>{const[d,v]=l.useState(!1),c={orgName:r,orgSplit:f,orgDescriptor:i,serviceName:o,transactional:n??!1,hasTransactionalLink:d,setHasTransactionalLink:v};return e.jsx("header",{className:m("nhsuk-header",{"nhsuk-header--transactional":n,"nhsuk-header--organisation":r,"nhsuk-header--white":h},a),role:s,...u,children:e.jsx(L.Provider,{value:c,children:t})})};N.Container=W;N.Logo=J;N.TransactionalLink=X;N.Content=B;N.Nav=R;N.NavItem=w;N.Search=q;N.displayName="Header";W.displayName="Header.Container";J.displayName="Header.Logo";X.displayName="Header.TransactionalLink";B.displayName="Header.Content";R.displayName="Header.Nav";w.displayName="Header.NavItem";q.displayName="Header.Search";N.__docgenInfo={description:`Use the header to show users they are on an NHS service and help them get started in finding what they need.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/header).

@link https://service-manual.nhs.uk/design-system/components/header

@example
\`\`\`tsx
<Header orgName="Anytown Anyplace" orgSplit="Anywhere" orgDescriptor="NHS Foundation Trust">
 <Header.Container>
  <Header.Logo href="/" />
  <Header.Content>
   <Header.Search />
  </Header.Content>
 </Header.Container>
 <Header.Nav>
  <Header.NavItem href="/">Home</Header.NavItem>
  <Header.NavItem href="/service-one">Service one</Header.NavItem>
  <Header.NavItem href="/service-two">Service two</Header.NavItem>
 </Header.Nav>
</Header>
\`\`\``,methods:[{name:"Container",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"Logo",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  asElement: Component = 'a',
  image,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"TransactionalLink",docblock:null,modifiers:["static"],params:[{name:"{ className, asElement: Component = 'a', ...rest }",optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"Content",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  id = 'content-header',
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"Nav",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  open,
  role = 'navigation',
  containerProps = {},
  listProps = {},
  moreToggleProps = {
    visuallyHiddenText: 'Browse',
    label: 'More',
  },
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"NavItem",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  asElement: Component = 'a',
  __navIndex,
  __mobileMenu,
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"Search",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  action = '/search',
  method = 'get',
  id = 'search-field',
  type = 'search',
  autoComplete = 'off',
  placeholder = 'Search',
  role = 'search',
  visuallyHiddenText = 'Search',
  toggleProps = {},
  submitProps = {},
  closeProps = {},
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}}],displayName:"Header",props:{role:{defaultValue:{value:"'banner'",computed:!1},required:!1}}};N.__docgenInfo={description:`Use the header to show users they are on an NHS service and help them get started in finding what they need.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/header).

@link https://service-manual.nhs.uk/design-system/components/header

@example
\`\`\`tsx
<Header orgName="Anytown Anyplace" orgSplit="Anywhere" orgDescriptor="NHS Foundation Trust">
 <Header.Container>
  <Header.Logo href="/" />
  <Header.Content>
   <Header.Search />
  </Header.Content>
 </Header.Container>
 <Header.Nav>
  <Header.NavItem href="/">Home</Header.NavItem>
  <Header.NavItem href="/service-one">Service one</Header.NavItem>
  <Header.NavItem href="/service-two">Service two</Header.NavItem>
 </Header.Nav>
</Header>
\`\`\``,methods:[{name:"Container",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"Logo",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  asElement: Component = 'a',
  image,
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"TransactionalLink",docblock:null,modifiers:["static"],params:[{name:"{ className, asElement: Component = 'a', ...rest }",optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"Content",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  id = 'content-header',
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"Nav",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  open,
  role = 'navigation',
  containerProps = {},
  listProps = {},
  moreToggleProps = {
    visuallyHiddenText: 'Browse',
    label: 'More',
  },
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}},{name:"NavItem",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  asElement: Component = 'a',
  __navIndex,
  __mobileMenu,
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"Search",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  action = '/search',
  method = 'get',
  id = 'search-field',
  type = 'search',
  autoComplete = 'off',
  placeholder = 'Search',
  role = 'search',
  visuallyHiddenText = 'Search',
  toggleProps = {},
  submitProps = {},
  closeProps = {},
  ...rest
}`,optional:!1,type:null}],returns:{type:{name:"JSX.Element"}}}],displayName:"Header",props:{role:{defaultValue:{value:"'banner'",computed:!1},required:!1}}};export{N as H};
