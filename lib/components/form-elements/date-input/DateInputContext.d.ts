import { ChangeEvent } from 'react';
import { DateInputValue, DateInputPart } from './DateInput';
export type DateInputContextValue = {
    id: string;
    name: string;
    error?: string | boolean;
    value?: Partial<DateInputValue>;
    defaultValue?: Partial<DateInputValue>;
    handleChange: (field: DateInputPart, event: ChangeEvent<HTMLInputElement>) => void;
    registerInput: (field: DateInputPart, input: HTMLInputElement | null) => void;
};
export declare const DateInputContext: import("react").Context<DateInputContextValue>;
export declare const useDateInputContext: () => DateInputContextValue;
