import { createContext, useContext } from 'react';

export type ErrorSummaryContextType = {
  labelId: string;
};

export const ErrorSummaryContext = createContext<ErrorSummaryContextType>({
  labelId: '',
});

export const useErrorSummaryContext = () => useContext(ErrorSummaryContext);
export const ErrorSummaryContextProvider = ErrorSummaryContext.Provider;
