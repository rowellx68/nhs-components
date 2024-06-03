import{r as d,R as e}from"./index-uCp2LrAq.js";import{B as _}from"./Base-CQ_ipzy_.js";import{p as k}from"./polymorphic-factory-C1jPlyAy.js";import{c as s}from"./clsx-B-dksMZM.js";import{f as g}from"./factory-Dl037jXY.js";import{V as B}from"./VisuallyHidden-io1tb15n.js";const S=d.createContext({}),x=()=>d.useContext(S),V=S.Provider,N=({className:n,width:t=34,height:a=34,...i})=>e.createElement("svg",{className:s("nhsuk-icon nhsuk-icon__search",n),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",width:t,height:a,...i},e.createElement("path",{d:"M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"}));N.displayName="SearchIcon";N.__docgenInfo={description:"",methods:[],displayName:"SearchIcon",props:{width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"34",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"34",computed:!1}}}};const y=({className:n})=>e.createElement("svg",{className:s("nhsuk-icon nhsuk-icon__chevron-down",n),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},e.createElement("path",{d:"M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"}));y.displayName="ChevronDownIcon";y.__docgenInfo={description:"",methods:[],displayName:"ChevronDownIcon",props:{width:{required:!1,tsType:{name:"number"},description:""},height:{required:!1,tsType:{name:"number"},description:""}}};let O=class{constructor(){this.menuIsOpen=!1,this.navigation=document.querySelector(".nhsuk-navigation"),this.navigationList=document.querySelector(".nhsuk-header__navigation-list"),this.mobileMenu=document.createElement("ul"),this.mobileMenuToggleButton=document.querySelector(".nhsuk-header__menu-toggle"),this.mobileMenuCloseButton=document.createElement("button"),this.mobileMenuContainer=document.querySelector(".nhsuk-mobile-menu-container"),this.breakpoints=[],this.width=document.body.offsetWidth}init(){!this.navigation||!this.navigationList||!this.mobileMenuToggleButton||!this.mobileMenuContainer||(this.setupMobileMenu(),this.calculateBreakpoints(),this.updateNavigation(),this.doOnOrientationChange(),this.handleResize=this.debounce(()=>{this.calculateBreakpoints(),this.updateNavigation()}),this.mobileMenuToggleButton.addEventListener("click",this.toggleMobileMenu.bind(this)),window.addEventListener("resize",this.handleResize),window.addEventListener("orientationchange",this.doOnOrientationChange()))}debounce(t,a=100){let i;return(...r)=>{clearTimeout(i),i=setTimeout(()=>{t.apply(this,r)},a)}}calculateBreakpoints(){let t=0;for(let a=0;a<this.navigationList.children.length;a++)t+=this.navigationList.children[a].offsetWidth,this.breakpoints[a]=t}setupMobileMenu(){this.mobileMenuContainer.appendChild(this.mobileMenu),this.mobileMenu.classList.add("nhsuk-header__drop-down","nhsuk-header__drop-down--hidden")}closeMobileMenu(){this.menuIsOpen=!1,this.mobileMenu.classList.add("nhsuk-header__drop-down--hidden"),this.navigation.style.marginBottom=0,this.mobileMenuToggleButton.setAttribute("aria-expanded","false"),this.mobileMenuToggleButton.focus(),this.mobileMenuCloseButton.removeEventListener("click",this.closeMobileMenu.bind(this)),document.removeEventListener("keydown",this.handleEscapeKey.bind(this))}handleEscapeKey(t){t.key==="Escape"&&this.closeMobileMenu()}openMobileMenu(){this.menuIsOpen=!0,this.mobileMenu.classList.remove("nhsuk-header__drop-down--hidden");const t=this.mobileMenu.offsetHeight;this.navigation.style.marginBottom=`${t}px`,this.mobileMenuToggleButton.setAttribute("aria-expanded","true"),document.addEventListener("keydown",this.handleEscapeKey.bind(this)),this.mobileMenuCloseButton.addEventListener("click",this.closeMobileMenu.bind(this))}toggleMobileMenu(){this.menuIsOpen?this.closeMobileMenu():this.openMobileMenu()}updateNavigation(){const t=this.navigation.offsetWidth;let a=this.navigationList.children.length;if(t<this.breakpoints[a-1]){if(this.mobileMenuToggleButton.classList.add("nhsuk-header__menu-toggle--visible"),this.mobileMenuContainer.classList.add("nhsuk-mobile-menu-container--visible"),a===2)return;for(;t<this.breakpoints[a-1];)this.mobileMenu.insertBefore(this.navigationList.children[a-2],this.mobileMenu.firstChild),a-=1}else if(t>this.breakpoints[a])for(;t>this.breakpoints[a];)this.navigationList.insertBefore(this.mobileMenu.removeChild(this.mobileMenu.firstChild),this.mobileMenuContainer),a+=1;this.mobileMenu.children.length||(this.mobileMenuToggleButton.classList.remove("nhsuk-header__menu-toggle--visible"),this.mobileMenuContainer.classList.remove("nhsuk-mobile-menu-container--visible")),document.body.offsetWidth!==this.width&&this.menuIsOpen&&this.closeMobileMenu()}doOnOrientationChange(){switch(window.orientation){case 90:setTimeout(()=>{this.calculateBreakpoints(),this.updateNavigation()},200);break}}};const z=()=>{new O().init()},o=g(({children:n,className:t,serviceName:a,transactional:i,organisationName:r,organisationSplit:h,organisationDescriptor:u,variant:l="blue-header-blue-nav",...m},p)=>{const q=d.useMemo(()=>({serviceName:a,transactional:i,organisationName:r,organisationSplit:h,organisationDescriptor:u,white:l.includes("white-header"),whiteNav:l.includes("white-nav")}),[]),v=d.useRef(null);return d.useImperativeHandle(p,()=>v.current),d.useEffect(()=>{v.current&&z()},[v]),e.createElement(V,{value:q},e.createElement("header",{className:s("nhsuk-header",{"nhsuk-header__transactional":i,"nhsuk-header--organisation":r,"nhsuk-header--white":l.includes("white-header"),"nhsuk-header--white-nav":l.includes("white-nav")},t),role:"banner",...m,ref:v},n))}),M=({children:n,className:t,...a})=>e.createElement("div",{className:s("nhsuk-header__container",t),...a},n),w=k(({className:n,as:t="a",variant:a,...i},r)=>{const{transactional:h,serviceName:u,organisationName:l,organisationSplit:m,organisationDescriptor:p}=x();return e.createElement("div",{className:s("nhsuk-header__logo",{"nhsuk-header__logo--only":a})},e.createElement(_,{as:t,className:s("nhsuk-header__link",{"nhsuk-header__transactional--logo":h,"nhsuk-header__link--service":u},n),...i,ref:r},e.createElement("svg",{className:"nhsuk-logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 16",height:"40",width:"100"},e.createElement("path",{className:"nhsuk-logo__background",fill:"#005eb8",d:"M0 0h40v16H0z"}),e.createElement("path",{className:"nhsuk-logo__text",fill:"#fff",d:"M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M37.7 4.4c-.7-.3-1.6-.6-2.9-.6-1.4 0-2.5.2-2.5 1.3 0 1.8 5.1 1.2 5.1 5.1 0 3.6-3.3 4.5-6.4 4.5-1.3 0-2.9-.3-4-.7l.8-2.7c.7.4 2.1.7 3.2.7s2.8-.2 2.8-1.5c0-2.1-5.1-1.3-5.1-5 0-3.4 2.9-4.4 5.8-4.4 1.6 0 3.1.2 4 .6"})),u&&e.createElement("span",{className:"nhsuk-header__service-name"},u),l&&e.createElement("span",{className:"nhsuk-organisation-name"},l,m&&e.createElement(e.Fragment,null," ",e.createElement("span",{className:"nhsuk-organisation-split"},m))),p&&e.createElement("span",{className:"nhsuk-organisation-descriptor"},p)))}),E=k(({className:n,as:t="a",...a},i)=>{const{transactional:r}=x();return r?e.createElement("div",{className:"nhsuk-header__transactional-service-name"},e.createElement(_,{as:t,className:s("nhsuk-header__transactional-service-name--link",n),...a,ref:i})):null}),H=({children:n,className:t,...a})=>e.createElement("div",{className:"nhsuk-navigation-container"},e.createElement("nav",{className:s("nhsuk-navigation",t),role:"navigation","aria-label":"Primary navigation",...a},n)),T=({children:n,className:t,...a})=>e.createElement("ul",{className:s("nhsuk-header__navigation-list",t),...a},n),C=k(({className:n,variant:t,as:a="a",...i},r)=>e.createElement("li",{className:"nhsuk-header__navigation-item"},e.createElement(_,{as:a,className:s("nhsuk-header__navigation-link",{"nhsuk-header__navigation-item--home":t==="home-link"},n),...i,ref:r}))),I=({children:n,className:t,...a})=>e.createElement("div",{className:s("nhsuk-header__content",t),...a},n),c=g(({children:n,className:t,inputProps:a={visuallyHiddenText:"Search the NHS website"},buttonProps:i={visuallyHiddenText:"Search"},...r},h)=>e.createElement("div",{className:"nhsuk-header__search"},e.createElement("div",{className:"nhsuk-header__search-wrap"},e.createElement("form",{className:s("nhsuk-header__search-form",t),role:"search",...r,ref:h},n||e.createElement(e.Fragment,null,e.createElement(f,{...a}),e.createElement(b,{...i})))))),f=g(({visuallyHiddenText:n,className:t,placeholder:a="Search",...i},r)=>e.createElement(e.Fragment,null,e.createElement("label",{className:"nhsuk-u-visually-hidden",htmlFor:"search-field"},n),e.createElement("input",{className:s("nhsuk-search__input",t),id:"search-field",name:"search-field",type:"search",placeholder:a,autoComplete:"off",...i,ref:r}))),b=g(({visuallyHiddenText:n,className:t,...a},i)=>e.createElement("button",{className:s("nhsuk-search__submit",t),...a,type:"submit",ref:i},e.createElement(N,null),e.createElement(B,null,n))),L=({visuallyHiddenText:n="Browse",children:t="More",className:a,...i})=>e.createElement("li",{className:"nhsuk-mobile-menu-container"},e.createElement("button",{className:s("nhsuk-header__menu-toggle nhsuk-header__navigation-link",a),id:"toggle-menu","aria-expanded":"false",...i,type:"button"},e.createElement(B,null,n)," ",t,e.createElement(y,null)));o.displayName="Header";M.displayName="Header.Container";w.displayName="Header.Logo";E.displayName="Header.TransactionLink";H.displayName="Header.Nav";T.displayName="Header.NavList";C.displayName="Header.NavItem";L.displayName="Header.MobileMenu";I.displayName="Header.Content";c.displayName="Header.Search";f.displayName="Header.Search.Input";b.displayName="Header.Search.Button";c.Input=f;c.Button=b;o.Container=M;o.Logo=w;o.TransactionLink=E;o.Nav=H;o.NavList=T;o.NavItem=C;o.MobileMenu=L;o.Content=I;o.Search=c;o.__docgenInfo={description:"",methods:[],displayName:"Header",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'blue-header-blue-nav'
| 'blue-header-white-nave'
| 'white-header-blue-nav'
| 'white-header-white-nav'`,elements:[{name:"literal",value:"'blue-header-blue-nav'"},{name:"literal",value:"'blue-header-white-nave'"},{name:"literal",value:"'white-header-blue-nav'"},{name:"literal",value:"'white-header-white-nav'"}]},description:"",defaultValue:{value:"'blue-header-blue-nav'",computed:!1}}}};M.__docgenInfo={description:"",methods:[],displayName:"Header.Container"};w.__docgenInfo={description:"",methods:[],displayName:"Header.Logo",props:{"aria-label":{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"literal",value:"'logo-only'"},description:"If set, there will be extra space around the logo to account for the lack of a service/oganisation name"},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};E.__docgenInfo={description:"",methods:[],displayName:"Header.TransactionLink",props:{as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};H.__docgenInfo={description:"",methods:[],displayName:"Header.Nav"};T.__docgenInfo={description:"",methods:[],displayName:"Header.NavList"};C.__docgenInfo={description:"",methods:[],displayName:"Header.NavItem",props:{variant:{required:!1,tsType:{name:"literal",value:"'home-link'"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};L.__docgenInfo={description:"",methods:[],displayName:"Header.MobileMenu",props:{visuallyHiddenText:{required:!1,tsType:{name:"string"},description:`Visually hidden text for screen readers.

@type {string | undefined}`,defaultValue:{value:"'Browse'",computed:!1}},children:{defaultValue:{value:"'More'",computed:!1},required:!1}}};I.__docgenInfo={description:"",methods:[],displayName:"Header.Content"};c.__docgenInfo={description:"",methods:[],displayName:"Header.Search",props:{inputProps:{defaultValue:{value:"{ visuallyHiddenText: 'Search the NHS website' }",computed:!1},required:!1},buttonProps:{defaultValue:{value:"{ visuallyHiddenText: 'Search' }",computed:!1},required:!1}}};f.__docgenInfo={description:"",methods:[],displayName:"Header.Search.Input",props:{placeholder:{defaultValue:{value:"'Search'",computed:!1},required:!1}}};b.__docgenInfo={description:"",methods:[],displayName:"Header.Search.Button"};export{o as H};