import { ReactNode, createContext, useContext } from 'react';

export type TableContextValue = {
  variant?: 'default' | 'responsive';
  firstCellIsHeader: boolean;
  responsiveHeadings: ReactNode[];
  registerHeadings: (heading: ReactNode[]) => void;
};

const TableContext = createContext<TableContextValue>({
  responsiveHeadings: [],
  firstCellIsHeader: false,
  registerHeadings: () => {},
});

export type TableHeadContextValue = {
  head: boolean;
};

const TableHeadContext = createContext<TableHeadContextValue>({
  head: false,
});

export const useTableContext = () => useContext(TableContext);
export const TableProvider = TableContext.Provider;

export const useTableHeadContext = () => useContext(TableHeadContext);
export const TableHeadProvider = TableHeadContext.Provider;
