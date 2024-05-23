import { createContext, useContext } from 'react';

export type HeaderContextValue = {
  serviceName?: string;
  transactional?: boolean;
  organisationName?: string;
  organisationSplit?: string;
  organisationDescriptor?: string;
  white?: boolean;
  whiteNav?: boolean;
};

const HeaderContext = createContext<HeaderContextValue>({});

export const useHeaderContext = () => useContext(HeaderContext);
export const HeaderContextProvider = HeaderContext.Provider;
