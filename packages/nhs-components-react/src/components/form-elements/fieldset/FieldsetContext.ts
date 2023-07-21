import { createContext, useContext } from 'react'

export type FieldsetContextValue = {
  isFieldset: boolean
  passError: (componentId: string, error: boolean) => void
  registerComponent: (componentId: string, deregister?: boolean) => void
}

/**
 * Context to pass the `FieldsetContextValue` to the `Fieldset` and `Fieldset.Legend` components.
 */
const FieldsetContext = createContext<FieldsetContextValue>({
  isFieldset: false,
  passError: () => {},
  registerComponent: () => {},
})

FieldsetContext.displayName = 'FieldsetContext'

/**
 * Hook to get the `FieldsetContext`.
 *
 * @returns {FieldsetContextValue} The FieldsetContext
 */
export const useFieldsetContext = () =>
  useContext<FieldsetContextValue>(FieldsetContext)

export default FieldsetContext
