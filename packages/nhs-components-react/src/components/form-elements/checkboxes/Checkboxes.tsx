import FormGroup from '@/components/miscellaneous/form-group/FormGroup'
import { FormElementProps } from '@/types/form-element-types'
import clsx from 'clsx'
import {
  ForwardRefRenderFunction,
  HTMLProps,
  ReactNode,
  forwardRef,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from 'react'
import CheckboxesContext, {
  CheckboxesContextValue,
  reducer,
  useCheckboxesContext,
} from './CheckboxesContext'
import { generateRandomString } from '@/utils/random'
import Hint from '@/components/form-elements/hint'
import Label from '@/components/miscellaneous/label/Label'

type Checkboxes = {
  Box: typeof BoxForwardRef
} & React.FC<CheckboxContainerProps>

type CheckboxContainerProps = {
  idPrefix?: string
} & HTMLProps<HTMLDivElement> &
  FormElementProps

type CheckboxProps = {
  conditional?: ReactNode
  forceShowConditional?: boolean
  conditionalWrapperProps?: HTMLProps<HTMLDivElement>
} & Omit<HTMLProps<HTMLInputElement>, 'label'> &
  Omit<
    FormElementProps,
    'error' | 'errorProps' | 'formGroupProps' | 'disableErrorLine'
  >

const Box: ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (
  {
    children,
    className,
    id,
    hint,
    hintProps,
    labelProps,
    conditional,
    forceShowConditional,
    conditionalWrapperProps,
    checked,
    defaultChecked,
    onChange,
    type = 'checkbox',
    ...rest
  },
  ref,
): JSX.Element => {
  const { name, getCheckboxId, leaseReference, releaseReference, dispatch } =
    useCheckboxesContext()

  const [checkboxReference] = useState(leaseReference())
  const [showConditional, setShowConditional] = useState<boolean>(
    !!(checked || defaultChecked),
  )
  const inputId = id || getCheckboxId(checkboxReference)

  const { className: labelClassName, ...labelRest } = labelProps || {}
  const { className: hintClassName, ...hintRest } = hintProps || {}
  const { className: conditionalClassName, ...conditionalRest } =
    conditionalWrapperProps || {}

  useEffect(() => {
    return () => releaseReference(checkboxReference)
  }, [])

  useEffect(() => {
    if (checked !== undefined) {
      setShowConditional(checked)
    }
  }, [checked])

  useEffect(() => {
    dispatch({
      type: 'set_conditional',
      data: { refId: checkboxReference, hasConditional: Boolean(conditional) },
    })

    return () =>
      dispatch({
        type: 'set_conditional',
        data: { refId: checkboxReference, hasConditional: false },
      })
  }, [conditional])

  return (
    <>
      <div className={clsx('nhsuk-checkboxes__item', className)}>
        <input
          className="nhsuk-checkboxes__input"
          id={inputId}
          name={name}
          type={type}
          checked={checked}
          defaultChecked={defaultChecked}
          ref={ref}
          onChange={(ev) => {
            if (checked === undefined) {
              setShowConditional(ev.target.checked)
            }

            onChange?.(ev)
          }}
          {...rest}
        />
        {children && (
          <Label
            className={clsx('nhsuk-checkboxes__label', labelClassName)}
            id={`${inputId}--label`}
            htmlFor={inputId}
            {...labelRest}
          >
            {children}
          </Label>
        )}
        {hint && (
          <Hint
            className={clsx('nhsuk-checkboxes__hint', hintClassName)}
            {...hintRest}
          >
            {hint}
          </Hint>
        )}
      </div>
      {conditional && (showConditional || forceShowConditional) && (
        <div
          className={clsx(
            'nhsuk-checkboxes__conditional',
            conditionalClassName,
          )}
          {...conditionalRest}
        >
          {conditional}
        </div>
      )}
    </>
  )
}

/**
 * A checkbox component that can be used within a `Checkboxes` component.
 *
 * @example
 * ```tsx
 * <Checkboxes.Box value="GP Practice">GP Practice</Checkboxes.Box>
 * ```
 */
const BoxForwardRef = forwardRef(Box)

/**
 * Use checkboxes to let users select 1 or more options on a form.
 *
 * For more information on when to use this component, got to the [NHS Digital service manual](https://beta.nhs.uk/service-manual/styles-components-patterns/checkboxes).
 *
 * @example
 * ```tsx
 * <Checkboxes label="Which services?" name="fruit">
 *  <Checkboxes.Box value="GP Practice">GP Practice</Checkboxes.Box>
 *  <Checkboxes.Box value="Dentist">Dentist</Checkboxes.Box>
 * </Checkboxes>
 * ```
 */
const Checkboxes: Checkboxes = ({
  children,
  idPrefix,
  ...rest
}): JSX.Element => {
  let checkboxIds: Record<string, string> = {}
  let checkboxReferences: string[] = []
  let checkboxCount = 0

  const [state, dispatch] = useReducer(reducer, { conditional: [] })

  const getCheckboxId = useCallback((id: string, reference: string) => {
    if (reference in checkboxIds) {
      return checkboxIds[reference]
    }

    checkboxCount += 1
    checkboxIds[reference] = `${idPrefix || id}-${checkboxCount}`
    return checkboxIds[reference]
  }, [])

  const leaseReference = (): string => {
    const reference = generateRandomString()

    if (checkboxReferences.includes(reference)) {
      return leaseReference()
    }

    checkboxReferences.push(reference)
    return reference
  }

  const releaseReference = (reference: string): void => {
    checkboxReferences = checkboxReferences.filter((ref) => ref !== reference)
  }

  const resetCheckboxes = (): void => {
    checkboxIds = {}
    checkboxCount = 0
  }

  return (
    <FormGroup<CheckboxContainerProps>
      {...rest}
      inputType="checkboxes"
      render={({ id, name, className, ...renderProps }) => {
        resetCheckboxes()
        const contextValues: CheckboxesContextValue = {
          name,
          getCheckboxId: (reference) => getCheckboxId(id, reference),
          leaseReference,
          releaseReference,
          dispatch,
        }

        return (
          <div
            className={clsx(
              'nhsuk-checkboxes',
              {
                'nhsuk-checkboxes--conditional': state.conditional.length > 0,
              },
              className,
            )}
            id={id}
            {...renderProps}
          >
            <CheckboxesContext.Provider value={contextValues}>
              {children}
            </CheckboxesContext.Provider>
          </div>
        )
      }}
    />
  )
}

BoxForwardRef.displayName = 'Checkboxes.Box'
Checkboxes.displayName = 'Checkboxes'

Checkboxes.Box = BoxForwardRef

export default Checkboxes
