import { createContext, useContext } from 'react';

export type CardContextValue = {
  variant?: 'primary' | 'secondary';
};

const CardContext = createContext<CardContextValue>({});

export const useCardContext = () => useContext(CardContext);
export const CardProvider = CardContext.Provider;
