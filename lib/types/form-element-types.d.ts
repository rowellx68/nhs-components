import { ErrorMessageProps } from '../components/form-elements/error-message/ErrorMessage';
import { LabelProps } from '../components/core/label/Label';
import { HTMLProps, ReactNode } from '../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react';
export type FormElementProps = {
    label?: string;
    labelProps?: LabelProps;
    error?: string | boolean;
    errorProps?: ErrorMessageProps;
    hint?: ReactNode;
    hintProps?: HTMLProps<HTMLDivElement>;
    formGroupProps?: HTMLProps<HTMLDivElement>;
    disableErrorLine?: boolean;
    id?: string;
    name?: string;
};
