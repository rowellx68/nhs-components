import { ActionBase } from '@/utils/reducer'
import { createContext, useContext } from 'react'

export type CheckboxesState = {
  conditional: string[]
}

export type SetConditionalAction = ActionBase<
  'set_conditional',
  { refId: string; hasConditional: boolean }
>

export type CheckboxesReducer = (
  state: CheckboxesState,
  action: SetConditionalAction,
) => CheckboxesState

export const reducer: CheckboxesReducer = (state, { type, data }) => {
  switch (type) {
    case 'set_conditional':
      return {
        ...state,
        conditional: data.hasConditional
          ? state.conditional
              .filter(/* istanbul ignore next */ (id) => id !== data.refId)
              .concat(data.refId)
          : state.conditional.filter((id) => id !== data.refId),
      }
  }
}

export type CheckboxesContextValue = {
  name: string
  dispatch: React.Dispatch<SetConditionalAction>
  getCheckboxId: (reference: string) => string
  leaseReference: () => string
  releaseReference: (reference: string) => void
}

const CheckboxesContext = createContext<CheckboxesContextValue>({
  name: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: /* istanbul ignore next */ () => {},
  getCheckboxId: /* istanbul ignore next */ () => '',
  leaseReference: /* istanbul ignore next */ () => '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  releaseReference: /* istanbul ignore next */ () => {},
})

CheckboxesContext.displayName = 'CheckboxesContext'

export const useCheckboxesContext = () =>
  useContext<CheckboxesContextValue>(CheckboxesContext)

export default CheckboxesContext
