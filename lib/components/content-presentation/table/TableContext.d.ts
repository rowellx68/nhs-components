/// <reference types="react" />
type TableContextValue = {
    isResponsive: boolean;
    headings: string[];
    setHeadings: (headings: string[]) => void;
};
export declare const TableContext: import('../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react').Context<TableContextValue>;
export declare const useTableContext: () => TableContextValue;
type TableSection = 'header' | 'body' | 'none';
export declare const TableSectionContext: import('../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react').Context<TableSection>;
export declare const useTableSectionContext: () => TableSection;
export {};
