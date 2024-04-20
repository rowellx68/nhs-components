/// <reference types="react" />
export type HeaderContextValue = {
    orgName?: string;
    orgSplit?: string;
    orgDescriptor?: string;
    serviceName?: string;
    setHasTransactionalLink: (toggle: boolean) => void;
    hasTransactionalLink: boolean;
    transactional: boolean;
};
declare const HeaderContext: import('../../../../../../../node_modules/.pnpm/react@18.2.0/node_modules/react').Context<HeaderContextValue>;
export default HeaderContext;
export declare const useHeaderContext: () => HeaderContextValue;
