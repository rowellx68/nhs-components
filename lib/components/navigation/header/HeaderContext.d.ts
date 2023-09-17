/// <reference types="react" />
export type HeaderContextValue = {
    orgName?: string;
    orgSplit?: string;
    orgDescriptor?: string;
    serviceName?: string;
    setHasSearch: (toggle: boolean) => void;
    setHasMenuToggle: (toggle: boolean) => void;
    setHasTransactionalLink: (toggle: boolean) => void;
    toggleMenu: () => void;
    toggleSearch: () => void;
    hasTransactionalLink: boolean;
    hasSearch: boolean;
    hasMenuToggle: boolean;
    menuOpen: boolean;
    searchOpen: boolean;
    transactional: boolean;
};
declare const HeaderContext: import("react").Context<HeaderContextValue>;
export default HeaderContext;
export declare const useHeaderContext: () => HeaderContextValue;
