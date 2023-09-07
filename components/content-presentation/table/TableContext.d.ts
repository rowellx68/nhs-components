/// <reference types="react" />
type TableContextValue = {
    isResponsive: boolean;
    headings: string[];
    setHeadings: (headings: string[]) => void;
};
export declare const TableContext: import("react").Context<TableContextValue>;
export declare const useTableContext: () => TableContextValue;
type TableSection = 'header' | 'body' | 'none';
export declare const TableSectionContext: import("react").Context<TableSection>;
export declare const useTableSectionContext: () => TableSection;
export {};
