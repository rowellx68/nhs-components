import { ChangeEvent, createContext, useContext } from 'react';
import { DateInputPart, DateInputValue } from './DateInput';

export type DateInputContextValue = {
  id: string;
  name: string;
  error?: boolean;
  errorMap?: Record<string, string>;
  value?: Partial<DateInputValue>;
  handleChange: (
    field: DateInputPart,
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
};

const DateInputContext = createContext<DateInputContextValue>({
  id: '',
  name: '',
  handleChange: /* istanbul ignore next */ () => {},
});

DateInputContext.displayName = 'DateInputContext';

export const useDateInputContext = () => useContext(DateInputContext);
export const DateInputProvider = DateInputContext.Provider;
