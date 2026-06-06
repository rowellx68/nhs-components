import { createContext, useContext } from 'react';

export type RadioContextValue = {
  disabled?: boolean;
};

const RadioContext = createContext<RadioContextValue>({});

RadioContext.displayName = 'RadioContext';

export const useRadioContext = () => useContext(RadioContext);
export const RadioProvider = RadioContext.Provider;
