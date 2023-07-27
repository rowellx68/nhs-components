import { createContext, useContext } from 'react'

export type RadiosContextValue = {
  name: string
  selectedRadio: string
  getRadioId: (reference: string) => string
  setConditional: (radioRef: string, hasConditional: boolean) => void
  setSelected: (radioRef: string) => void
  leaseReference: () => string
  releaseReference: (reference: string) => void
}

const RadiosContext = createContext<RadiosContextValue>({
  name: '',
  selectedRadio: '',
  getRadioId: () => '',
  setConditional: () => {},
  setSelected: () => {},
  leaseReference: () => '',
  releaseReference: () => {},
})

RadiosContext.displayName = 'RadiosContext'

export const useRadiosContext = () =>
  useContext<RadiosContextValue>(RadiosContext)

export default RadiosContext
