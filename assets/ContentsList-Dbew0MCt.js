import{B as p}from"./Base-CnK7ZbQQ.js";import{V as d}from"./VisuallyHidden-gAc-M_QR.js";import{f as u}from"./factory-CTMjB8rz.js";import{p as f}from"./polymorphic-factory-BWZvvV2j.js";import{c as m}from"./clsx-B-dksMZM.js";import{R as t}from"./index-B-o1Wr-g.js";const i=u(({children:s,className:a,role:e="navigation",visuallyHiddenText:n="Contents",...o},r)=>t.createElement("nav",{className:m("nhsuk-contents-list",a),role:e,...o,ref:r},t.createElement(d,{as:"h2"},n),t.createElement("ol",{className:"nhsuk-contents-list__list"},s))),l=f(({children:s,className:a,active:e,as:n="a",...o},r)=>{const c={as:e?"span":n,className:m({"nhsuk-contents-list__current":e,"nhsuk-contents-list__link":!e},a),...o};return t.createElement("li",{className:"nhsuk-contents-list__item","aria-current":e?"page":void 0},t.createElement(p,{...c,ref:r},s))});i.displayName="ContentsList";l.displayName="ContentsList.Item";i.Item=l;i.__docgenInfo={description:"",methods:[],displayName:"ContentsList",props:{role:{defaultValue:{value:"'navigation'",computed:!1},required:!1},visuallyHiddenText:{defaultValue:{value:"'Contents'",computed:!1},required:!1}}};l.__docgenInfo={description:"",methods:[],displayName:"ContentsList.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as.",defaultValue:{value:"'a'",computed:!1}}}};export{i as C};