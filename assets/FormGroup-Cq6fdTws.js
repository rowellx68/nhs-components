import{H}from"./Hint-Cy41Y5xV.js";import{L as V}from"./Label-BVxFGFqs.js";import{E as D}from"./ErrorMessage-P3iC7fh_.js";import{r as i,R as n}from"./index-uCp2LrAq.js";import{u as I}from"./use-id-with-prefix-ctfEntwL.js";import{B as f,c as J}from"./Base-CQ_ipzy_.js";import{c as l}from"./clsx-B-dksMZM.js";import{f as K}from"./factory-Dl037jXY.js";const Q=(r,{type:t,data:s})=>{switch(t){case"set_error":return{...r,errored:s.error?r.errored.concat(s.id):r.errored.filter(o=>o!==s.id)};case"register_component":return{...r,registered:s.unregister?r.registered.filter(o=>o!==s.id):r.registered.concat(s.id)}}},N=i.createContext({isFieldset:!1,dispatch:()=>{}});N.displayName="FieldsetContext";const U=()=>i.useContext(N),X=N.Provider,Y=K(({className:r,...t},s)=>n.createElement("fieldset",{className:l("nhsuk-fieldset",r),...t,ref:s})),Z=i.memo(Y),y=({disableErrorLine:r,...t})=>{const[s,o]=i.useReducer(Q,{registered:[],errored:[]}),p=i.useMemo(()=>({isFieldset:!0,dispatch:o}),[o]),d=s.registered.length>0,e=s.errored.length>0,m=d?{as:"div",className:l(["nhsuk-form-group",{"nhsuk-form-group--error":!r&&e}])}:{as:n.Fragment};return n.createElement(X,{value:p},n.createElement(f,{...m},n.createElement(Z,{...t})))},F=({variant:r,size:t,as:s,className:o,children:p,...d})=>{const e=r==="page-heading"||t==="xl"?s||"h1":n.Fragment,m={as:e,...e!==n.Fragment?{className:r==="page-heading"?"nhsuk-fieldset__heading":void 0}:{}};return n.createElement("legend",{className:l("nhsuk-legend",{"nhsuk-fieldset__legend--xl":r==="page-heading"&&!t,[`nhsuk-fieldset__legend--${t}`]:t},o),...d},n.createElement(f,{...m},p))};y.displayName="Fieldset";F.displayName="Fieldset.Legend";y.Legend=F;y.__docgenInfo={description:"",methods:[{name:"Legend",docblock:null,modifiers:["static"],params:[{name:`{
  variant,
  size,
  as: component,
  className,
  children,
  ...props
}: FieldsetLegendProps & AsElementProps`,optional:!1,type:{name:"intersection",raw:"FieldsetLegendProps & AsElementProps",elements:[{name:"intersection",raw:`(
  | {
      size?: undefined;
      variant?: undefined;
    }
  | {
      size: Size;
      variant?: undefined;
    }
  | {
      variant: 'page-heading';
      size?: Size;
    }
) &
  ElementProps<'legend', 'size' | 'as'> &
  BaseProps`,elements:[{name:"unknown"},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'legend'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"union",raw:"'style' | TPropsToOmit",elements:[{name:"literal",value:"'style'"},{name:"union",raw:"'size' | 'as'",elements:[{name:"literal",value:"'size'"},{name:"literal",value:"'as'"}]}]}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, 'style' | TPropsToOmit>"},{name:"intersection",raw:`{
  className?: string;
} & PropsWithChildren`,elements:[{name:"signature",type:"object",raw:`{
  className?: string;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}},{name:"PropsWithChildren"}]}]},{name:"signature",type:"object",raw:`{
  /**
   * The component to render as.
   */
  as?: TComponent;
}`,signature:{properties:[{key:"as",value:{name:"TComponent",required:!1},description:"The component to render as."}]}}]}}],returns:null}],displayName:"Fieldset",props:{disableErrorLine:{required:!1,tsType:{name:"boolean"},description:""}}};F.__docgenInfo={description:"",methods:[],displayName:"Fieldset.Legend",props:{className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as."}}};const _=i.forwardRef((r,t)=>{const{render:s,formGroupProps:o={},fieldsetProps:p={},disableErrorLine:d,error:e,label:m,hint:u,labelProps:B={},hintProps:k={},errorProps:R={},inputType:g,id:j,withFieldset:G,...W}=r,[z]=i.useState(I(g)),{isFieldset:v,dispatch:h}=U(),P=Array.isArray(u)?u:[u],$=typeof e=="string"?[e]:typeof e=="object"?Object.values(e):[],a=j||z,T=`${a}--label`,E=P.map(()=>`${I(a)}--hint`),w=`${a}--error-message`;i.useEffect(()=>{if(v)return h({type:"set_error",data:{id:a,error:!!e}}),()=>h({type:"set_error",data:{id:a,error:!1}})},[a,e,v]),i.useEffect(()=>(h({type:"register_component",data:{id:a,unregister:!1}}),()=>h({type:"register_component",data:{id:a,unregister:!0}})),[]);const{className:C,...x}=o,L={"aria-labelledby":T,"aria-describedby":l({[`${E.join(" ")}`]:u,[`${w}`]:e})||void 0},c=g==="checkboxes"||g==="radios"||g==="dateinput"||G,q={as:void 0,id:a,withError:!!e,ref:t,...W,...typeof e=="object"&&g==="dateinput"?{errorMap:e}:{},...c?{}:L},A={as:c?"div":n.Fragment,...c?{className:l("nhsuk-form-group",{"nhsuk-form-group--error":!d&&e},C),...x}:{}},M={as:c?y:"div",...c?{...p,...L}:{className:l("nhsuk-form-group",{"nhsuk-form-group--error":!d&&e},C),...x}},O={as:c?F:V,id:T,htmlFor:a,...B};return n.createElement(f,{...A},n.createElement(f,{...M},m&&n.createElement(f,{...O,children:m}),u&&P.map((S,b)=>n.createElement(H,{key:E[b],id:E[b],...k,className:l(k.className,{"nhsuk-u-margin-bottom-2":b<P.length-1}),children:S})),e&&n.createElement(D,{id:w,...R,children:$.join(" ")}),s(q)))});_.displayName="FormGroup";const le=J(_);_.__docgenInfo={description:"",methods:[],displayName:"FormGroup"};export{le as F,y as a};
