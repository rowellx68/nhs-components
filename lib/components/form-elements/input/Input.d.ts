import { FormElementProps } from '../../../types/form-element-types';
import { InputWidth } from '../../../types/nhsuk-sizes';
import { HTMLInputTypeAttribute, HTMLProps, ReactNode } from '../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
type InputProps = {
    width?: InputWidth;
    type?: HTMLInputTypeAttribute;
    prefix?: ReactNode;
    suffix?: ReactNode;
} & Omit<HTMLProps<HTMLInputElement>, 'type'> & FormElementProps;
declare const InputForwardRef: import('../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react').ForwardRefExoticComponent<Omit<InputProps, "ref"> & import('../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react').RefAttributes<HTMLInputElement>>;
export default InputForwardRef;
