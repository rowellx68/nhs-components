import { ActionBase } from '@/utils/reducer'
import { createContext, useContext } from 'react'

export type RadiosState = {
  selected: string
  conditional: string[]
}

export type SetConditionalAction = ActionBase<
  'set_conditional',
  { refId: string; hasConditional: boolean }
>
export type SetSelectedAction = ActionBase<'set_selected', { refId: string }>
export type RadiosReducer = (
  state: RadiosState,
  action: SetConditionalAction | SetSelectedAction,
) => RadiosState

export const reducer: RadiosReducer = (state, { type, data }) => {
  switch (type) {
    case 'set_conditional':
      return {
        ...state,
        conditional: data.hasConditional
          ? state.conditional
              .filter(/* istanbul ignore next */ (id) => id !== data.refId)
              .concat(data.refId)
          : state.conditional.concat(data.refId),
      }
    case 'set_selected':
      return {
        ...state,
        selected: data.refId,
      }
  }
}

export type RadiosContextValue = {
  name: string
  selectedRadio: string
  dispatch: React.Dispatch<SetConditionalAction | SetSelectedAction>
  getRadioId: (reference: string) => string
  leaseReference: () => string
  releaseReference: (reference: string) => void
}

const RadiosContext = createContext<RadiosContextValue>({
  name: '',
  selectedRadio: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: /* istanbul ignore next */ () => {},
  getRadioId: /* istanbul ignore next */ () => '',
  leaseReference: /* istanbul ignore next */ () => '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  releaseReference: /* istanbul ignore next */ () => {},
})

RadiosContext.displayName = 'RadiosContext'

export const useRadiosContext = () =>
  useContext<RadiosContextValue>(RadiosContext)

export default RadiosContext
