import { createContext, useContext } from 'react'

export type FieldsetContextValue = {
  isFieldset: boolean
  setErrored: (componentId: string) => void
  resetErrored: (componentId: string) => void
  register: (componentId: string) => void
  unregister: (componentId: string) => void
}

const FieldsetContext = createContext<FieldsetContextValue>({
  isFieldset: false,
  setErrored: () => {},
  resetErrored: () => {},
  register: () => {},
  unregister: () => {},
})

export const useFieldsetContext = () =>
  useContext<FieldsetContextValue>(FieldsetContext)

export default FieldsetContext
