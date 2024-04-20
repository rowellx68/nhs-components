import{j as t}from"./jsx-runtime-DRTy3Uxn.js";import{r as d}from"./index-BBkUAzwr.js";import{c as l}from"./clsx-CH7BE6MN.js";import"./index-BNAbGPPW.js";import"./index-BJZX35FI.js";import"./index-DCz-pOyH.js";import{a as g}from"./index-BWzVQ7MN.js";const c=d.createContext({withChevron:!1,primary:!1,secondary:!1}),m=({children:n,className:e,...a})=>{const{primary:s,secondary:o,withChevron:i}=d.useContext(c);return t.jsxs("div",{className:l("nhsuk-card__content",{"nhsuk-card__content--primary":s,"nhsuk-card__content--secondary":o&&!s},e),...a,children:[n,i&&s&&t.jsx(g,{})]})},u=({children:n,className:e,asElement:a="h2",...s})=>t.jsx(a,{className:l("nhsuk-card__heading nhsuk-heading-m",e),...s,children:n}),p=({children:n,className:e,asElement:a="a",...s})=>t.jsx(a,{className:l("nhsuk-card__link",e),...s,children:n}),f=({children:n,className:e,...a})=>t.jsx("p",{className:l("nhsuk-card__description",e),...a,children:n}),h=({className:n,alt:e,...a})=>t.jsx("img",{className:l("nhsuk-card__img",n),alt:e,...a}),C=({children:n,className:e,...a})=>t.jsx("ul",{className:l("nhsuk-grid-row nhsuk-card-group",e),...a,children:n}),k=({children:n,className:e,width:a="one-half",...s})=>t.jsx("li",{className:l("nhsuk-card-group__item",`nhsuk-grid-column-${a}`,e),...s,children:n}),r=({children:n,className:e,clickable:a,withChevron:s=!1,primary:o=!1,secondary:i=!1,...y})=>t.jsx("div",{className:l("nhsuk-card",{"nhsuk-card--clickable":a,"nhsuk-card--secondary":i&&!o},e),...y,children:t.jsx(c.Provider,{value:{withChevron:s,primary:o,secondary:i},children:n})});c.displayName="CardContext";r.Content=m;r.Description=f;r.Heading=u;r.Link=p;r.Image=h;r.Group=C;r.GroupItem=k;r.displayName="Card";m.displayName="Card.Content";f.displayName="Card.Description";u.displayName="Card.Heading";p.displayName="Card.Link";h.displayName="Card.Image";C.displayName="Card.Group";k.displayName="Card.GroupItem";r.__docgenInfo={description:`Use a card to give users a brief summary of content or a task, often with a link to more detail. You can display a card alongside other cards to group related content or tasks.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/card).

@link https://service-manual.nhs.uk/design-system/components/card

@example
\`\`\`tsx
<Card>
 <Card.Content>
  <Card.Heading>
   If you need help now, but it’s not an emergency
  </Card.Heading>
  <Card.Description>
   Go to <a href="#site">111.nhs.uk</a> or <a href="#site">call 111</a>
  </Card.Description>
 </Card.Content>
</Card>
\`\`\``,methods:[{name:"Content",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"Description",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"Heading",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  asElement: Component = 'h2',
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"Link",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  asElement: Component = 'a',
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"Image",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  alt,
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"Group",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"GroupItem",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  width = 'one-half',
  ...rest
}`,optional:!1,type:null}],returns:null}],displayName:"Card",props:{withChevron:{defaultValue:{value:"false",computed:!1},required:!1},primary:{defaultValue:{value:"false",computed:!1},required:!1},secondary:{defaultValue:{value:"false",computed:!1},required:!1}}};r.__docgenInfo={description:`Use a card to give users a brief summary of content or a task, often with a link to more detail. You can display a card alongside other cards to group related content or tasks.

For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/card).

@link https://service-manual.nhs.uk/design-system/components/card

@example
\`\`\`tsx
<Card>
 <Card.Content>
  <Card.Heading>
   If you need help now, but it’s not an emergency
  </Card.Heading>
  <Card.Description>
   Go to <a href="#site">111.nhs.uk</a> or <a href="#site">call 111</a>
  </Card.Description>
 </Card.Content>
</Card>
\`\`\``,methods:[{name:"Content",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"Description",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"Heading",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  asElement: Component = 'h2',
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"Link",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  asElement: Component = 'a',
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"Image",docblock:null,modifiers:["static"],params:[{name:`{
  className,
  alt,
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"Group",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  ...rest
}`,optional:!1,type:null}],returns:null},{name:"GroupItem",docblock:null,modifiers:["static"],params:[{name:`{
  children,
  className,
  width = 'one-half',
  ...rest
}`,optional:!1,type:null}],returns:null}],displayName:"Card",props:{withChevron:{defaultValue:{value:"false",computed:!1},required:!1},primary:{defaultValue:{value:"false",computed:!1},required:!1},secondary:{defaultValue:{value:"false",computed:!1},required:!1}}};export{r as C};
