import{j as e}from"./jsx-runtime-94f6e698.js";import{c as l}from"./clsx-1229b3e0.js";import{r as d}from"./index-8db94870.js";import"./index-2c0bb8f3.js";import"./index-0ae08daa.js";import"./index-cef6b81d.js";import{b as H,c as z,S as f}from"./index-2b495717.js";import{C as S}from"./Container-411280f9.js";const y=d.createContext({setHasSearch:()=>{},setHasMenuToggle:()=>{},toggleMenu:()=>{},toggleSearch:()=>{},setHasTransactionalLink:()=>{},hasTransactionalLink:!1,hasSearch:!1,hasMenuToggle:!1,menuOpen:!1,searchOpen:!1,transactional:!1}),x=()=>d.useContext(y),v=({className:s,height:n="40",width:r="100",...t})=>e.jsxs("svg",{className:l("nhsuk-logo",s),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 16",height:n,width:r,...t,children:[e.jsx("path",{className:"nhsuk-logo__background",fill:"#005eb8",d:"M0 0h40v16H0z"}),e.jsx("path",{className:"nhsuk-logo__text",fill:"#fff",d:"M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"})]});try{v.displayName="NhsLogo",v.__docgenInfo={description:"",displayName:"NhsLogo",props:{}}}catch{}const b=({className:s,asElement:n="a",image:r,...t})=>{const{orgName:a,orgDescriptor:o,orgSplit:c,serviceName:h,hasMenuToggle:g,hasSearch:k,hasTransactionalLink:p}=x(),j=a?`${a} ${c} ${o} homepage`:"NHS homepage",{src:u,className:_,alt:m,...N}=r||{};return e.jsx("div",{className:l("nhsuk-header__logo",{"nhsuk-header__logo--only":!g&&!k&&p}),children:e.jsxs(n,{className:l("nhsuk-header__link",{"nhsuk-header__link--service":!a&&h},s),"aria-label":j,...t,children:[u?e.jsx("img",{className:l("nhsuk-org-logo",_),src:u,alt:m,...N}):e.jsx(v,{}),a&&e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"nhsuk-organisation-name",children:[a,c&&e.jsx("span",{className:"nhsuk-organisation-name-split",children:c})]}),o&&e.jsx("span",{className:"nhsuk-organisation-descriptor",children:o})]}),!p&&h&&e.jsx("span",{className:"nhsuk-header__service-name",children:h})]})})},M=({className:s,asElement:n="a",...r})=>{const{serviceName:t,setHasTransactionalLink:a}=x();return d.useEffect(()=>(a(!0),()=>a(!1)),[]),e.jsx("div",{className:"nhsuk-header__transactional-service-name",children:e.jsx(n,{className:l("nhsuk-header__transactional-service-name--link",s),...r,children:t})})},C=({className:s,onClick:n,...r})=>{const{toggleMenu:t,setHasMenuToggle:a,menuOpen:o}=x(),c=h=>{t(),n==null||n(h)};return d.useEffect(()=>(a(!0),()=>a(!1)),[]),e.jsx("div",{className:"nhsuk-header__menu",children:e.jsx("button",{className:l("nhsuk-header__menu-toggle",s),"aria-label":"Open menu","aria-expanded":o?"true":"false",onClick:c,...r,children:"Menu"})})},T=({children:s,className:n,...r})=>e.jsx(S,{className:l("nhsuk-header__container",n),...r,children:s}),L=({children:s,className:n,id:r="content-header",...t})=>{const{searchOpen:a}=x();return e.jsx("div",{className:l("nhsuk-header__content",{"js-show":a},n),id:r,...t,children:s})},w=({children:s,className:n,open:r,role:t="navigation",containerProps:a={},...o})=>{const{menuOpen:c,toggleMenu:h}=x();return e.jsx("nav",{className:l("nhsuk-header__navigation",{"js-show":r??c},n),"aria-label":"Primary navigation","aria-labelledby":"label-navigation",role:t,...o,children:e.jsxs(S,{...a,children:[e.jsxs("p",{className:"nhsuk-header__navigation-title",children:[e.jsx("span",{id:"label-navigation",children:"Menu"}),e.jsxs("button",{className:"nhsuk-header__navigation-close",id:"close-menu",onClick:h,children:[e.jsx(H,{}),e.jsx("span",{className:"nhsuk-u-visually-hidden",children:"Close menu"})]})]}),e.jsx("ul",{className:"nhsuk-header__navigation-list",children:s})]})})},I=({children:s,className:n,mobileOnly:r,asElement:t="a",...a})=>e.jsx("li",{className:l("nhsuk-header__navigation-item",{"nhsuk-header__navigation-item--for-mobile":r},n),children:e.jsxs(t,{className:"nhsuk-header__navigation-link",...a,children:[s,e.jsx(z,{})]})}),O=({className:s,action:n="/search",method:r="get",id:t="search-field",type:a="search",autoComplete:o="off",placeholder:c="Search",role:h="search",visuallyHiddenText:g="Search",toggleProps:k={},submitProps:p={},closeProps:j={},...u})=>{const{toggleSearch:_,setHasSearch:m,searchOpen:N}=x();return d.useEffect(()=>(m(!0),()=>m(!1)),[]),e.jsxs("div",{className:l("nhsuk-header__search",s),children:[e.jsxs("button",{className:l("nhsuk-header__search-toggle",{"is-active":N}),onClick:_,...k,children:[e.jsx("span",{className:"nhsuk-u-visually-hidden",children:g}),e.jsx(f,{})]}),e.jsx("div",{className:l("nhsuk-header__search-wrap",{"js-show":N}),children:e.jsxs("form",{className:"nhsuk-header__search-form",action:n,method:r,role:h,children:[e.jsx("label",{className:"nhsuk-u-visually-hidden",htmlFor:t,children:g}),e.jsx("input",{className:"nhsuk-search__input",id:t,type:a,placeholder:c,autoComplete:o,...u}),e.jsx("button",{className:"nhsuk-search__submit",type:"submit","aria-label":"Submit search",...p,children:e.jsx(f,{})}),e.jsxs("button",{className:"nhsuk-search__close",type:"button",onClick:_,...j,children:[e.jsx(H,{}),e.jsx("span",{className:"nhsuk-u-visually-hidden",children:"Close search"})]})]})})]})},i=({children:s,className:n,role:r="banner",transactional:t,orgName:a,orgSplit:o,orgDescriptor:c,serviceName:h,white:g,...k})=>{const[p,j]=d.useState(!1),[u,_]=d.useState(!1),[m,N]=d.useState(!1),[E,F]=d.useState(!1),[P,$]=d.useState(!1),R={orgName:a,orgSplit:o,orgDescriptor:c,serviceName:h,transactional:t??!1,hasSearch:E,searchOpen:m,menuOpen:u,hasMenuToggle:p,hasTransactionalLink:P,setHasTransactionalLink:$,setHasMenuToggle:j,setHasSearch:F,toggleMenu:()=>_(!u),toggleSearch:()=>N(!m)};return e.jsx("header",{className:l("nhsuk-header",{"nhsuk-header--transactional":t,"nhsuk-header--organisation":a,"nhsuk-header--white":g},n),role:r,...k,children:e.jsx(y.Provider,{value:R,children:s})})};i.Container=T;i.Logo=b;i.TransactionalLink=M;i.MenuToggle=C;i.Content=L;i.Nav=w;i.NavItem=I;i.Search=O;i.displayName="Header";T.displayName="Header.Container";b.displayName="Header.Logo";M.displayName="Header.TransactionalLink";C.displayName="Header.MenuToggle";L.displayName="Header.Content";w.displayName="Header.Nav";I.displayName="Header.NavItem";O.displayName="Header.Search";try{i.displayName="Header",i.__docgenInfo={description:`Use the header to show users they are on an NHS service and help them get started in finding what they need.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/header).`,displayName:"Header",props:{}}}catch{}export{i as H};
//# sourceMappingURL=Header-c2241eb1.js.map