import { FormElementProps } from '../../../types/form-element-types';
import { ChangeEvent, HTMLProps } from 'react';
import { LabelProps } from '../../../components/core/label/Label';
export type DateInputPart = 'day' | 'month' | 'year';
export type DateInputValue = {
    day: string;
    month: string;
    year: string;
};
export type DateInputChangeEvent = ChangeEvent<HTMLInputElement> & {
    target: HTMLInputElement & {
        value: DateInputValue;
    };
    currentTarget: HTMLInputElement & {
        value: DateInputValue;
    };
};
type DateInputProps = {
    autoSelectNext?: boolean;
    value?: Partial<DateInputValue>;
    defaultValue?: Partial<DateInputValue>;
    onChange?: (event: DateInputChangeEvent) => void;
} & Omit<HTMLProps<HTMLDivElement>, 'value' | 'defaultValue' | 'ref'> & FormElementProps;
type DatePartProps = {
    labelProps?: LabelProps;
    part: DateInputPart;
    error?: boolean;
} & Omit<HTMLProps<HTMLDivElement>, 'type'>;
type DateInput = {
    Day: typeof Day;
    Month: typeof Month;
    Year: typeof Year;
} & React.FC<DateInputProps>;
declare const Day: import("react").ForwardRefExoticComponent<Omit<DatePartProps, "ref" | "part"> & import("react").RefAttributes<HTMLInputElement>>;
declare const Month: import("react").ForwardRefExoticComponent<Omit<DatePartProps, "ref" | "part"> & import("react").RefAttributes<HTMLInputElement>>;
declare const Year: import("react").ForwardRefExoticComponent<Omit<DatePartProps, "ref" | "part"> & import("react").RefAttributes<HTMLInputElement>>;
/**
 * Use date input to help users enter a memorable date, like their date of birth.
 *
 * For more information on when to use this component, go to the [HTN Digital service manual](https://service-manual.nhs.uk/design-system/components/date-input).
 *
 * @link https://service-manual.nhs.uk/design-system/components/date-input
 *
 * @example
 * ```tsx
 * <DateInput label="Date of birth" />
 * ```
 */
declare const DateInput: DateInput;
export default DateInput;
