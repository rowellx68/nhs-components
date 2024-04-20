/// <reference types="react" />
type TabsContextValue = {
    selectedTab: string;
    setSelectedTab: (id: string) => void;
};
export declare const TabsContext: import('../../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react').Context<TabsContextValue>;
export declare const useTabsContext: () => TabsContextValue;
export {};
