import { createContext, useContext } from 'react';

export type CheckboxContextValue = {
  withConditionals: boolean;
  setWithConditionals: (value: boolean) => void;
};

const CheckboxContext = createContext<CheckboxContextValue>({
  withConditionals: false,
  setWithConditionals: () => {},
});

export const useCheckboxContext = () => useContext(CheckboxContext);
export const CheckboxProvider = CheckboxContext.Provider;
