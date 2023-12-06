import { FormElementProps } from '../../../types/form-element-types';
import { InputWidth } from '../../../types/nhsuk-sizes';
import { HTMLInputTypeAttribute, HTMLProps, ReactNode } from 'react';
type InputProps = {
    width?: InputWidth;
    type?: HTMLInputTypeAttribute;
    prefix?: ReactNode;
    suffix?: ReactNode;
} & Omit<HTMLProps<HTMLInputElement>, 'type'> & FormElementProps;
declare const InputForwardRef: import("react").ForwardRefExoticComponent<Omit<InputProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default InputForwardRef;
