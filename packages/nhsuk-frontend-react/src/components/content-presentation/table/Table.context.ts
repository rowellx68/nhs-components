import { ReactNode, createContext, useContext } from 'react';

export type TableContextValue = {
  variant?: 'responsive';
  responsiveHeadings: ReactNode[];
  registerHeadings: (heading: ReactNode[]) => void;
};

const TableContext = createContext<TableContextValue>({
  responsiveHeadings: [],
  registerHeadings: () => {},
});

export const useTableContext = () => useContext(TableContext);
export const TableProvider = TableContext.Provider;
