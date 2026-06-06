import { createContext, useContext } from 'react';

export type CheckboxContextValue = {
  disabled?: boolean;
};

const CheckboxContext = createContext<CheckboxContextValue>({});

CheckboxContext.displayName = 'CheckboxContext';

export const useCheckboxContext = () => useContext(CheckboxContext);
export const CheckboxProvider = CheckboxContext.Provider;
