import{H as $}from"./Hint-0ExilH4f.js";import{L as D}from"./Label-CLTtE-g3.js";import{E as J}from"./ErrorMessage-ByH0T-HL.js";import{r as t,R as s}from"./index-B0WjJBI_.js";import{u as W}from"./use-id-with-prefix-B1wYhCnI.js";import{B as g,c as K}from"./Base-EFgxhl8G.js";import{c as l}from"./clsx-B-dksMZM.js";import{f as Q}from"./factory-DuYveBF_.js";const U=(n,{type:a,data:r})=>{switch(a){case"set_error":return{...n,errored:r.error?n.errored.concat(r.id):n.errored.filter(o=>o!==r.id)};case"register_component":return{...n,registered:r.unregister?n.registered.filter(o=>o!==r.id):n.registered.concat(r.id)}}},R=t.createContext({isFieldset:!1,dispatch:()=>{}});R.displayName="FieldsetContext";const X=()=>t.useContext(R),Y=R.Provider,Z=Q(({className:n,...a},r)=>s.createElement("fieldset",{className:l("nhsuk-fieldset",n),...a,ref:r})),ee=t.memo(Z),y=({disableErrorLine:n,...a})=>{const[r,o]=t.useReducer(U,{registered:[],errored:[]}),u=t.useMemo(()=>({isFieldset:!0,dispatch:o}),[o]),m=r.registered.length>0,e=r.errored.length>0,d=m?{as:"div",className:l(["nhsuk-form-group",{"nhsuk-form-group--error":!n&&e}])}:{as:t.Fragment};return s.createElement(Y,{value:u},s.createElement(g,{...d},s.createElement(ee,{...a})))},T=({variant:n,size:a,as:r,className:o,children:u,...m})=>{const e=n==="page-heading"||a==="l"?r||"h1":t.Fragment,d={as:e,...e!==t.Fragment?{className:n==="page-heading"?"nhsuk-fieldset__heading":void 0}:{}};return s.createElement("legend",{className:l("nhsuk-fieldset__legend",{"nhsuk-fieldset__legend--l":n==="page-heading"&&!a,[`nhsuk-fieldset__legend--${a}`]:a},o),...m},s.createElement(g,{...d},u))};y.displayName="Fieldset";T.displayName="Fieldset.Legend";y.Legend=T;y.__docgenInfo={description:"",methods:[{name:"Legend",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,signature:{properties:[{key:"as",value:{name:"TComponent",required:!1},description:"The component to render as."}]}}]}}],returns:null}],displayName:"Fieldset",props:{disableErrorLine:{required:!1,tsType:{name:"boolean"},description:""}}};T.__docgenInfo={description:"",methods:[],displayName:"Fieldset.Legend",props:{className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"TComponent"},description:"The component to render as."}}};const E=t.forwardRef((n,a)=>{const{render:r,formGroupProps:o={},fieldsetProps:u={},withErrorLine:m,error:e,label:d,hint:c,labelProps:O={},hintProps:b={},errorProps:z={},inputType:f,id:_,withFieldset:L,namePrefix:j,...B}=n,[G]=t.useState(W(j||f)),{isFieldset:N,dispatch:h}=X(),P=Array.isArray(c)?c:[c],M=typeof e=="string"?[e]:typeof e=="object"?Object.values(e):[],i=_||G,C=`${i}--label`,v=P.map(()=>`${W(i)}--hint`),k=`${i}--error-message`;t.useEffect(()=>{if(N)return h({type:"set_error",data:{id:i,error:!!e}}),()=>h({type:"set_error",data:{id:i,error:!1}})},[i,e,N]),t.useEffect(()=>(h({type:"register_component",data:{id:i,unregister:!1}}),()=>h({type:"register_component",data:{id:i,unregister:!0}})),[]);const{className:q,...F}=o,x={"aria-labelledby":C,"aria-describedby":l({[`${v.join(" ")}`]:c,[`${k}`]:e})||void 0},p=f==="checkboxes"||f==="radios"||f==="dateinput"||L,H={as:void 0,id:i,withError:!!e,ref:a,...B,...typeof e=="object"&&f==="dateinput"?{errorMap:e}:{},...p?{}:x},I={as:p?"div":t.Fragment,...p?{className:l("nhsuk-form-group",{"nhsuk-form-group--error":m&&e},q),...F}:{}},A={as:p?y:"div",...p?{...u,...x}:{className:l("nhsuk-form-group",{"nhsuk-form-group--error":m&&e},q),...F}},S={as:p?T:D,id:C,htmlFor:i,...O};return s.createElement(g,{...I},s.createElement(g,{...A},d&&s.createElement(g,{...S,children:d}),c&&P.map((V,w)=>s.createElement($,{key:v[w],id:v[w],...b,className:l(b.className,{"nhsuk-u-margin-bottom-2":w<P.length-1}),children:V})),e&&s.createElement(J,{id:k,...z,children:M.join(" ")}),r(H)))});E.displayName="FormGroup";const me=K(E);E.__docgenInfo={description:"",methods:[],displayName:"FormGroup",props:{name:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactNode"},description:""},hint:{required:!1,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""},error:{required:!1,tsType:{name:"union",raw:"string | Record<string, string>",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"}]},description:""},labelProps:{required:!1,tsType:{name:"intersection",raw:`(
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
      size: Exclude<Size, 'xl'>;
    }
) &
  ElementProps<'label', 'size' | 'as'>`,elements:[{name:"unknown"},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'label'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"union",raw:"'size' | 'as'",elements:[{name:"literal",value:"'size'"},{name:"literal",value:"'as'"}]}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>"}]},description:""},hintProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'div'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"never"}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>"},description:""},errorProps:{required:!1,tsType:{name:"intersection",raw:"ElementProps<'p'> & WithVisuallyHiddenTextProps",elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'p'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"never"}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>"},{name:"signature",type:"object",raw:`{
  /**
   * Visually hidden text for screen readers.
   *
   * @type {string | undefined}
   */
  visuallyHiddenText?: string;
}`,signature:{properties:[{key:"visuallyHiddenText",value:{name:"string",required:!1},description:`Visually hidden text for screen readers.

@type {string | undefined}`}]}}]},description:""},formGroupProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'div'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"never"}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>"},description:""},withErrorLine:{required:!1,tsType:{name:"boolean"},description:""},render:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  props: BaseFormElementProps & {
    ref: ForwardedRef<any>;
    withError: boolean;
    errorMap?: Record<string, string>;
    className?: string;
    children?: ReactNode;
  },
) => ReactNode`,signature:{arguments:[{type:{name:"intersection",raw:`BaseFormElementProps & {
  ref: ForwardedRef<any>;
  withError: boolean;
  errorMap?: Record<string, string>;
  className?: string;
  children?: ReactNode;
}`,elements:[{name:"signature",type:"object",raw:`{
  name?: string;
  id?: string;
  label?: ReactNode;
  hint?: ReactNode | ReactNode[];
  error?: string | Record<string, string>;
  labelProps?: LabelProps;
  hintProps?: HintProps;
  errorProps?: ErrorMessageProps;
  formGroupProps?: ElementProps<'div'>;
  withErrorLine?: boolean;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!1}},{key:"id",value:{name:"string",required:!1}},{key:"label",value:{name:"ReactNode",required:!1}},{key:"hint",value:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}],required:!1}},{key:"error",value:{name:"union",raw:"string | Record<string, string>",elements:[{name:"string"},{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"}],required:!1}},{key:"labelProps",value:{name:"intersection",raw:`(
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
      size: Exclude<Size, 'xl'>;
    }
) &
  ElementProps<'label', 'size' | 'as'>`,elements:[{name:"unknown"},{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'label'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"union",raw:"'size' | 'as'",elements:[{name:"literal",value:"'size'"},{name:"literal",value:"'as'"}]}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>",required:!1}],required:!1}},{key:"hintProps",value:{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'label'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"union",raw:"'size' | 'as'",elements:[{name:"literal",value:"'size'"},{name:"literal",value:"'as'"}]}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>",required:!1}},{key:"errorProps",value:{name:"intersection",raw:"ElementProps<'p'> & WithVisuallyHiddenTextProps",elements:[{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'label'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"union",raw:"'size' | 'as'",elements:[{name:"literal",value:"'size'"},{name:"literal",value:"'as'"}]}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>",required:!1},{name:"signature",type:"object",raw:`{
  /**
   * Visually hidden text for screen readers.
   *
   * @type {string | undefined}
   */
  visuallyHiddenText?: string;
}`,signature:{properties:[{key:"visuallyHiddenText",value:{name:"string",required:!1},description:`Visually hidden text for screen readers.

@type {string | undefined}`}]}}],required:!1}},{key:"formGroupProps",value:{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'label'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"union",raw:"'size' | 'as'",elements:[{name:"literal",value:"'size'"},{name:"literal",value:"'as'"}]}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>",required:!1}},{key:"withErrorLine",value:{name:"boolean",required:!1}}]}},{name:"signature",type:"object",raw:`{
  ref: ForwardedRef<any>;
  withError: boolean;
  errorMap?: Record<string, string>;
  className?: string;
  children?: ReactNode;
}`,signature:{properties:[{key:"ref",value:{name:"ForwardedRef",elements:[{name:"any"}],raw:"ForwardedRef<any>",required:!0}},{key:"withError",value:{name:"boolean",required:!0}},{key:"errorMap",value:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!1}}]}}]},name:"props"}],return:{name:"ReactNode"}}},description:""},inputType:{required:!0,tsType:{name:"union",raw:`| 'input'
| 'radios'
| 'select'
| 'checkboxes'
| 'dateinput'
| 'textarea'
| 'other'`,elements:[{name:"literal",value:"'input'"},{name:"literal",value:"'radios'"},{name:"literal",value:"'select'"},{name:"literal",value:"'checkboxes'"},{name:"literal",value:"'dateinput'"},{name:"literal",value:"'textarea'"},{name:"literal",value:"'other'"}]},description:""},fieldsetProps:{required:!1,tsType:{name:"Omit",elements:[{name:"ComponentPropsWithoutRef",elements:[{name:"literal",value:"'fieldset'"}],raw:"ComponentPropsWithoutRef<TElementType>"},{name:"never"}],raw:"Omit<ComponentPropsWithoutRef<TElementType>, TPropsToOmit>"},description:""},withFieldset:{required:!1,tsType:{name:"boolean"},description:""},namePrefix:{required:!1,tsType:{name:"string"},description:""}}};export{me as F,y as a};
