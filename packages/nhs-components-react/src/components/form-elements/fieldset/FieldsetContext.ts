import { createContext, useContext } from 'react'

export type FieldsetContextValue = {
  isFieldset: boolean
  passError: (componentId: string, error: boolean) => void
  registerComponent: (componentId: string, deregister?: boolean) => void
}

const FieldsetContext = createContext<FieldsetContextValue>({
  isFieldset: false,
  passError: () => {},
  registerComponent: () => {},
})

FieldsetContext.displayName = 'FieldsetContext'

export const useFieldsetContext = () =>
  useContext<FieldsetContextValue>(FieldsetContext)

export default FieldsetContext
