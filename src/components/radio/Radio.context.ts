import { createContext, useContext } from 'react';

export type RadioContextValue = {
  withConditionals: boolean;
  setWithConditionals: (value: boolean) => void;
};

const RadioContext = createContext<RadioContextValue>({
  withConditionals: false,
  setWithConditionals: () => {},
});

export const useRadioContext = () => useContext(RadioContext);
export const RadioProvider = RadioContext.Provider;
