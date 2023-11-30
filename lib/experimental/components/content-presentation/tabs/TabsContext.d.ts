/// <reference types="react" />
type TabsContextValue = {
    selectedTab: string;
    setSelectedTab: (id: string) => void;
};
export declare const TabsContext: import("react").Context<TabsContextValue>;
export declare const useTabsContext: () => TabsContextValue;
export {};
