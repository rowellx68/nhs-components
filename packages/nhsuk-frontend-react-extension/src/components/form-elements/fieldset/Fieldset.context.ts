import { ActionBase, ReducerBase } from '@/types/reducer';
import { createContext, useContext } from 'react';

export type FieldsetState = {
  registered: string[];
  errored: string[];
};

export type SetErrorAction = ActionBase<
  'set_error',
  { id: string; error: boolean }
>;
export type RegisterComponentAction = ActionBase<
  'register_component',
  { id: string; unregister: boolean }
>;
export type FieldsetReducer = ReducerBase<
  FieldsetState,
  SetErrorAction | RegisterComponentAction
>;

export const reducer: FieldsetReducer = (state, { type, data }) => {
  switch (type) {
    case 'set_error':
      return {
        ...state,
        errored: data.error
          ? state.errored.concat(data.id)
          : state.errored.filter((id) => id !== data.id),
      };
    case 'register_component':
      return {
        ...state,
        registered: data.unregister
          ? state.registered.filter((id) => id !== data.id)
          : state.registered.concat(data.id),
      };
  }
};

export type FieldsetContextValue = {
  isFieldset: boolean;
  dispatch: React.Dispatch<SetErrorAction | RegisterComponentAction>;
};

const FieldsetContext = createContext<FieldsetContextValue>({
  isFieldset: false,
  dispatch: () => {},
});

FieldsetContext.displayName = 'FieldsetContext';

export const useFieldsetContext = () =>
  useContext<FieldsetContextValue>(FieldsetContext);

export const FieldsetProvider = FieldsetContext.Provider;
