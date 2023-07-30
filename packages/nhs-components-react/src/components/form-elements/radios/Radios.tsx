import Label from '@/components/core/label/Label'
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
import RadiosContext, {
  RadiosContextValue,
  reducer,
  useRadiosContext,
} from './RadiosContext'
import Hint from '@/components/form-elements/hint'
import FormGroup from '@/components/core/form-group/FormGroup'
import { FormElementProps } from '@/types/form-element-types'
import { generateRandomString } from '@/utils/random'

type Radios = {
  Divider: typeof Divider
  Radio: typeof RadioForwardRef
} & React.FC<RadioContainerProps>

type RadioProps = {
  conditional?: ReactNode
  forceShowConditional?: boolean
  conditionalWrapperProps?: HTMLProps<HTMLDivElement>
} & HTMLProps<HTMLInputElement> &
  Omit<
    FormElementProps,
    'error' | 'errorProps' | 'formGroupProps' | 'disableErrorLine'
  >

type RadioContainerProps = {
  inline?: boolean
  idPrefix?: string
} & HTMLProps<HTMLDivElement> &
  FormElementProps

const Divider: React.FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}): JSX.Element => {
  return (
    <div className={clsx('nhsuk-radios__divider', className)} {...rest}>
      {children}
    </div>
  )
}

const Radio: ForwardRefRenderFunction<HTMLInputElement, RadioProps> = (
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
    type = 'radio',
    ...rest
  },
  ref,
): JSX.Element => {
  const {
    name,
    getRadioId,
    leaseReference,
    releaseReference,
    selectedRadio,
    dispatch,
  } = useRadiosContext()
  const [radioReference] = useState<string>(leaseReference())
  const inputId = id || getRadioId(radioReference)
  const shouldShowConditional =
    selectedRadio === radioReference && checked !== false

  const { className: labelClassName, ...labelRest } = labelProps || {}
  const { className: hintClassName, ...hintRest } = hintProps || {}
  const { className: conditionalClassName, ...conditionalRest } =
    conditionalWrapperProps || {}

  const setSelected = (reference: string): void => {
    dispatch({ type: 'set_selected', data: { refId: reference } })
  }

  useEffect(() => {
    if (defaultChecked) {
      setSelected(radioReference)
    }

    return () => releaseReference(radioReference)
  }, [])

  useEffect(() => {
    if (checked) {
      setSelected(radioReference)
    }
  }, [checked])

  useEffect(() => {
    dispatch({
      type: 'set_conditional',
      data: { refId: radioReference, hasConditional: Boolean(conditional) },
    })

    return () =>
      dispatch({
        type: 'set_conditional',
        data: { refId: radioReference, hasConditional: false },
      })
  }, [conditional])

  return (
    <>
      <div className={clsx('nhsuk-radios__item', className)}>
        <input
          className="nhsuk-radios__input"
          id={inputId}
          name={name}
          type={type}
          checked={checked}
          defaultChecked={defaultChecked}
          ref={ref}
          onChange={(ev) => {
            setSelected(radioReference)
            onChange?.(ev)
          }}
          {...rest}
        />
        {children && (
          <Label
            className={clsx('nhsuk-radios__label', labelClassName)}
            id={`${inputId}--label`}
            htmlFor={inputId}
            {...labelRest}
          >
            {children}
          </Label>
        )}
        {hint && (
          <Hint
            className={clsx('nhsuk-radios__hint', hintClassName)}
            id={`${inputId}--hint`}
            {...hintRest}
          >
            {hint}
          </Hint>
        )}
      </div>
      {conditional && (shouldShowConditional || forceShowConditional) && (
        <div
          className={clsx('nhsuk-radios__conditional', conditionalClassName)}
          id={`${inputId}--conditional`}
          {...conditionalRest}
        >
          {conditional}
        </div>
      )}
    </>
  )
}

/**
 * Radio component that renders a single radio input.
 *
 * @param {RadioProps} props - The props to be passed to the radio input.
 * @param {React.ForwardedRef<HTMLInputElement>} ref - Optional ref to be passed to the radio input.
 *
 * @example
 * ```tsx
 * <Radios.Radio value="yes" hint="some hint">
 *  Yes
 * </Radios.Radio>
 * ```
 */
const RadioForwardRef = forwardRef(Radio)

/**
 * Use radios when you want users to select only 1 option from a list.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/radios).
 *
 * @example
 * ```tsx
 * <Radios label="Do you have any allergies?">
 *  <Radios.Radio value="yes" hint="some hint">
 *   Yes
 *  </Radios.Radio>
 *  <Radios.Radio value="no">No</Radios.Radio>
 * </Radios>
 * ```
 */
const Radios: Radios = ({ children, ...rest }): JSX.Element => {
  let radioIds: Record<string, string> = {}
  let radioReferences: string[] = []
  let radioCount = 0

  const [state, dispatch] = useReducer(reducer, {
    selected: '',
    conditional: [],
  })

  const getRadioId = useCallback((id: string, reference: string) => {
    if (reference in radioIds) {
      return radioIds[reference]
    }

    radioCount += 1
    radioIds[reference] = `${rest.idPrefix || id}-${radioCount}`
    return radioIds[reference]
  }, [])

  const leaseReference = (): string => {
    const reference = generateRandomString()

    if (radioReferences.includes(reference)) {
      return leaseReference()
    }

    radioReferences.push(reference)
    return reference
  }

  const releaseReference = (reference: string): void => {
    radioReferences = radioReferences.filter((ref) => ref !== reference)
  }

  const resetRadios = (): void => {
    radioIds = {}
    radioCount = 0
  }

  return (
    <FormGroup<RadioContainerProps>
      {...rest}
      inputType="radios"
      render={({ id, name, inline, className, ...renderRest }) => {
        resetRadios()

        const radiosContextValue: RadiosContextValue = {
          name,
          getRadioId: (reference) => getRadioId(id, reference),
          selectedRadio: state.selected,
          leaseReference,
          releaseReference,
          dispatch,
        }

        return (
          <div
            className={clsx(
              'nhsuk-radios',
              { 'nhsuk-radios--inline': inline },
              className,
            )}
            id={id}
            {...renderRest}
          >
            <RadiosContext.Provider value={radiosContextValue}>
              {children}
            </RadiosContext.Provider>
          </div>
        )
      }}
    />
  )
}

Divider.displayName = 'Radios.Divider'
RadioForwardRef.displayName = 'Radios.Radio'
Radios.displayName = 'Radios'

Radios.Divider = Divider
Radios.Radio = RadioForwardRef

export default Radios
