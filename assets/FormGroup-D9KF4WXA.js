import{H as V}from"./Hint-BOkj5kLS.js";import{L as D}from"./Label-CvxOZKJz.js";import{E as J}from"./ErrorMessage-D7s2s_-I.js";import{r as i,R as n}from"./index-Cs7sjTYM.js";import{u as I}from"./use-id-with-prefix-gaKPBBex.js";import{B as f,c as K}from"./Base-fHV16vWU.js";import{c as l}from"./clsx-B-dksMZM.js";import{f as Q}from"./factory-DehWrhRO.js";const U=(r,{type:t,data:s})=>{switch(t){case"set_error":return{...r,errored:s.error?r.errored.concat(s.id):r.errored.filter(o=>o!==s.id)};case"register_component":return{...r,registered:s.unregister?r.registered.filter(o=>o!==s.id):r.registered.concat(s.id)}}},_=i.createContext({isFieldset:!1,dispatch:()=>{}});_.displayName="FieldsetContext";const X=()=>i.useContext(_),Y=_.Provider,Z=Q(({className:r,...t},s)=>n.createElement("fieldset",{className:l("nhsuk-fieldset",r),...t,ref:s})),ee=i.memo(Z),y=({disableErrorLine:r,...t})=>{const[s,o]=i.useReducer(U,{registered:[],errored:[]}),p=i.useMemo(()=>({isFieldset:!0,dispatch:o}),[o]),d=s.registered.length>0,e=s.errored.length>0,m=d?{as:"div",className:l(["nhsuk-form-group",{"nhsuk-form-group--error":!r&&e}])}:{as:n.Fragment};return n.createElement(Y,{value:p},n.createElement(f,{...m},n.createElement(ee,{...t})))},F=({variant:r,size:t,as:s,className:o,children:p,...d})=>{const e=r==="page-heading"||t==="l"?s||"h1":n.Fragment,m={as:e,...e!==n.Fragment?{className:r==="page-heading"?"nhsuk-fieldset__heading":void 0}:{}};return n.createElement("legend",{className:l("nhsuk-fieldset__legend",{"nhsuk-fieldset__legend--l":r==="page-heading"&&!t,[`nhsuk-fieldset__legend--${t}`]:t},o),...d},n.createElement(f,{...m},p))};y.displayName="Fieldset";F.displayName="Fieldset.Legend";y.Legend=F;y.__docgenInfo={description:"",methods:[{name:"Legend",docblock:null,modifiers:["static"],params:[{name:`{
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
      size: Exclude<Size, 'xl'>;
      variant?: undefined;
    }
  | {
      variant: 'page-heading';
      size?: Exclude<Size, 'xl'>;
    }
) &
  ElementProps<'legend', 'size' | 'as'> &
  BaseProps`,elements:[{name:"unknown"},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'legend'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"union",raw:"'size' | 'as'",elements:[{name:"literal",value:"'size'"},{name:"literal",value:"'as'"}]}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>"},{name:"intersection",raw:`{
  className?: string;
} & PropsWithChildren`,elements:[{name:"signature",type:"object",raw:`{
  className?: string;
}`,signature:{properties:[{key:"className",value:{name:"string",required:!1}}]}},{name:"PropsWithChildren"}]}]},{name:"signature",type:"object",raw:`{
  /**
   * The component to render as.
   */
  as?: TComponent;
}`,signature:{properties:[{key:"as",value:{name:"TComponent",required:!1},description:"The component to render as."}]}}]}}],returns:null}],displayName:"Fieldset",props:{disableErrorLine:{required:!1,tsType:{name:"boolean"},description:""}}};F.__docgenInfo={description:"",methods:[],displayName:"Fieldset.Legend",props:{className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as."}}};const N=i.forwardRef((r,t)=>{const{render:s,formGroupProps:o={},fieldsetProps:p={},withErrorLine:d,error:e,label:m,hint:u,labelProps:B={},hintProps:k={},errorProps:R={},inputType:g,id:j,withFieldset:G,namePrefix:W,...z}=r,[$]=i.useState(I(W||g)),{isFieldset:v,dispatch:h}=X(),E=Array.isArray(u)?u:[u],q=typeof e=="string"?[e]:typeof e=="object"?Object.values(e):[],a=j||$,w=`${a}--label`,P=E.map(()=>`${I(a)}--hint`),T=`${a}--error-message`;i.useEffect(()=>{if(v)return h({type:"set_error",data:{id:a,error:!!e}}),()=>h({type:"set_error",data:{id:a,error:!1}})},[a,e,v]),i.useEffect(()=>(h({type:"register_component",data:{id:a,unregister:!1}}),()=>h({type:"register_component",data:{id:a,unregister:!0}})),[]);const{className:C,...x}=o,L={"aria-labelledby":w,"aria-describedby":l({[`${P.join(" ")}`]:u,[`${T}`]:e})||void 0},c=g==="checkboxes"||g==="radios"||g==="dateinput"||G,A={as:void 0,id:a,withError:!!e,ref:t,...z,...typeof e=="object"&&g==="dateinput"?{errorMap:e}:{},...c?{}:L},M={as:c?"div":n.Fragment,...c?{className:l("nhsuk-form-group",{"nhsuk-form-group--error":d&&e},C),...x}:{}},O={as:c?y:"div",...c?{...p,...L}:{className:l("nhsuk-form-group",{"nhsuk-form-group--error":d&&e},C),...x}},S={as:c?F:D,id:w,htmlFor:a,...B};return n.createElement(f,{...M},n.createElement(f,{...O},m&&n.createElement(f,{...S,children:m}),u&&E.map((H,b)=>n.createElement(V,{key:P[b],id:P[b],...k,className:l(k.className,{"nhsuk-u-margin-bottom-2":b<E.length-1}),children:H})),e&&n.createElement(J,{id:T,...R,children:q.join(" ")}),s(A)))});N.displayName="FormGroup";const de=K(N);N.__docgenInfo={description:"",methods:[],displayName:"FormGroup"};export{de as F,y as a};
