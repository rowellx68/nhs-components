import{R as e}from"./index-B-o1Wr-g.js";import{V as g}from"./VisuallyHidden-gAc-M_QR.js";import{B as h}from"./Base-CnK7ZbQQ.js";import{p as f}from"./polymorphic-factory-BWZvvV2j.js";import{c as s}from"./clsx-B-dksMZM.js";import{f as _}from"./factory-CTMjB8rz.js";const p=({className:a,...n})=>e.createElement("svg",{className:s("nhsuk-icon nhsuk-icon__arrow-left",a),...n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",width:"34",height:"34"},e.createElement("path",{d:"M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z"}));p.displayName="ArrowLeftIcon";p.__docgenInfo={description:"",methods:[],displayName:"ArrowLeftIcon"};const m=({className:a,...n})=>e.createElement("svg",{className:s("nhsuk-icon nhsuk-icon__arrow-right",a),...n,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24","aria-hidden":"true",width:"34",height:"34"},e.createElement("path",{d:"M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"}));m.displayName="ArrowRightIcon";m.__docgenInfo={description:"",methods:[],displayName:"ArrowRightIcon"};const r=_(({children:a,className:n,...t},i)=>e.createElement("nav",{className:s("nhsuk-pagination",n),role:"navigation","aria-label":"Pagination",...t,ref:i},e.createElement("ul",{className:"nhsuk-list nhsuk-pagination__list"},a))),d=f(({className:a,title:n="Previous",visuallyHiddenText:t=":",pageTitle:i,as:o="a",...l},c)=>e.createElement("li",{className:"nhsuk-pagination-item--previous"},e.createElement(h,{as:o,className:s("nhsuk-pagination__link nhsuk-pagination__link--previous",a),...l,ref:c},e.createElement("span",{className:"nhsuk-pagination__title"},n),e.createElement(g,null,t),e.createElement("span",{className:"nhsuk-pagination__page"},i),e.createElement(p,null)))),u=f(({className:a,title:n="Next",visuallyHiddenText:t=":",pageTitle:i,as:o="a",...l},c)=>e.createElement("li",{className:"nhsuk-pagination-item--next"},e.createElement(h,{as:o,className:s("nhsuk-pagination__link nhsuk-pagination__link--next",a),...l,ref:c},e.createElement("span",{className:"nhsuk-pagination__title"},n),e.createElement(g,null,t),e.createElement("span",{className:"nhsuk-pagination__page"},i),e.createElement(m,null))));r.displayName="Pagination";d.displayName="Pagination.Previous";u.displayName="Pagination.Next";r.Next=u;r.Previous=d;r.__docgenInfo={description:"",methods:[],displayName:"Pagination"};d.__docgenInfo={description:"",methods:[],displayName:"Pagination.Previous",props:{className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Previous'",computed:!1}},pageTitle:{required:!0,tsType:{name:"string"},description:""},visuallyHiddenText:{required:!1,tsType:{name:"string"},description:`Visually hidden text for screen readers.

@type {string | undefined}`,defaultValue:{value:"':'",computed:!1}},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"Pagination.Next",props:{className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Next'",computed:!1}},pageTitle:{required:!0,tsType:{name:"string"},description:""},visuallyHiddenText:{required:!1,tsType:{name:"string"},description:`Visually hidden text for screen readers.

@type {string | undefined}`,defaultValue:{value:"':'",computed:!1}},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};export{r as P};