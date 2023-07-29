import { FormElementProps } from '../../../types/form-element-types';
import { InputWidth } from '../../../types/nhsuk-sizes';
import { HTMLInputTypeAttribute, HTMLProps } from 'react';
type InputProps = {
    width?: InputWidth;
    type?: HTMLInputTypeAttribute;
} & Omit<HTMLProps<HTMLInputElement>, 'type'> & FormElementProps;
declare const InputForwardRef: import("react").ForwardRefExoticComponent<Omit<InputProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default InputForwardRef;
