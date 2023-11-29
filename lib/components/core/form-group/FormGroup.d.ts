import { HTMLProps, ReactNode } from 'react';
import { FormElementProps } from '../../../types/form-element-types';
type ExcludedProps = 'hint' | 'label' | 'labelProps' | 'hintProps' | 'errorProps' | 'inputType' | 'disableErrorLine';
type BaseFormElementRenderProps = {
    error?: string | boolean;
} & HTMLProps<HTMLInputElement | HTMLDivElement | HTMLSelectElement | HTMLTextAreaElement>;
type FormElementRenderProps<T> = Omit<T, ExcludedProps> & {
    id: string;
    name: string;
};
type FormGroupProps<T> = FormElementProps & {
    render: (props: FormElementRenderProps<T>) => ReactNode;
    inputType: 'input' | 'radios' | 'select' | 'checkboxes' | 'dateinput' | 'textarea' | string;
};
declare const FormGroup: {
    <T extends BaseFormElementRenderProps>(props: FormGroupProps<T>): JSX.Element;
    displayName: string;
};
export default FormGroup;
