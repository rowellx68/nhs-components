import { createContext, useContext } from 'react';

export type DoDontListContextValue = {
  variant: 'do' | 'dont';
};

const DoDontListContext = createContext<DoDontListContextValue>({
  variant: 'do',
});

export const useDoDontListContext = () => useContext(DoDontListContext);
export const DoDontListContextProvider = DoDontListContext.Provider;
