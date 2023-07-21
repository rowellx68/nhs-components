import clsx from 'clsx'
import { ElementType, HTMLProps, memo, useState } from 'react'
import FieldsetContext, { FieldsetContextValue } from './FieldsetContext'
import { Size } from '@/types/nhsuk-sizes'

type LegendProps = {
  isPageHeading?: boolean
  asElement?: ElementType
  size?: Size
} & Omit<HTMLProps<HTMLLegendElement>, 'size'>

type Legend = React.FC<LegendProps>

/**
 * Use a legend to provide a heading for a fieldset.
 *
 * @param {string} [props.className] - Optional additional classes to add to the legend.
 * @param {boolean} [props.isPageHeading] - Sets the legend as a page heading.
 * @param {string} [props.size] - Sets the size of the legend. Overrides `isPageHeading`.
 * @param {React.ElementType} [props.asElement] - Sets the element type of the legend. Defaults to `h1` if `isPageHeading` is true.
 *
 * @example
 * ```tsx
 * <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
 * ```
 */
const Legend: Legend = ({
  className,
  children,
  isPageHeading,
  asElement: Component = 'h1',
  size,
  ...rest
}): JSX.Element => {
  return (
    <legend
      className={clsx(
        'nhsuk-legend',
        {
          'nhsuk-fieldset__legend--xl': isPageHeading && !size,
        },
        { [`nhsuk-fieldset__legend--${size}`]: size },
        className,
      )}
      {...rest}
    >
      {isPageHeading ? (
        <Component className="nhsuk-fieldset__heading">{children}</Component>
      ) : (
        children
      )}
    </legend>
  )
}

type FieldsetProps = {
  disableErrorLine?: boolean
} & HTMLProps<HTMLFieldSetElement>

type Fieldset = {
  Legend: Legend
} & React.FC<FieldsetProps>

type FieldsetState = {
  registered: string[]
  errored: string[]
}

const BaseFieldset: React.FC<HTMLProps<HTMLFieldSetElement>> = ({
  className,
  children,
  ...rest
}): JSX.Element => {
  return (
    <fieldset className={clsx('nhsuk-fieldset', className)} {...rest}>
      {children}
    </fieldset>
  )
}

const MemoBaseFieldset = memo(BaseFieldset)

/**
 * Use a fieldset to group related form inputs.
 *
 * For more information on when to use this component, go the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/fieldset).
 *
 * @param {string} [props.className] - Optional additional classes to add to the fieldset.
 * @param {boolean} [props.disableErrorLine] - Disables the error line on the fieldset.
 *
 * @example
 * ```tsx
 * <Fieldset>
 *  <Fieldset.Legend isPageHeading>What is your address?</Fieldset.Legend>
 * </Fieldset>
 * ```
 */
const Fieldset: Fieldset = ({
  className,
  children,
  disableErrorLine,
  ...rest
}): JSX.Element => {
  const [state, setState] = useState<FieldsetState>({
    registered: [],
    errored: [],
  })

  const passError = (componentId: string, error: boolean): void => {
    setState((prevState) => {
      const existingError = prevState.errored.includes(componentId)
      if (existingError && !error) {
        return {
          ...prevState,
          errored: prevState.errored.filter((id) => id !== componentId),
        }
      }
      if (!existingError && error) {
        return { ...prevState, errored: [...prevState.errored, componentId] }
      }
      return prevState
    })
  }

  const registerComponent = (componentId: string, deregister = false): void => {
    setState((prevState) => {
      if (deregister) {
        return {
          ...prevState,
          registered: prevState.registered.filter((id) => id !== componentId),
        }
      }
      if (!prevState.registered.includes(componentId)) {
        return {
          ...prevState,
          registered: [...prevState.registered, componentId],
        }
      }
      return prevState
    })
  }

  const contextValue: FieldsetContextValue = {
    isFieldset: true,
    passError,
    registerComponent,
  }

  const withFormElements = state.registered.length > 0
  const withErrors = state.errored.length > 0

  return (
    <FieldsetContext.Provider value={contextValue}>
      {withFormElements ? (
        <div
          className={clsx('nhsuk-form-group', {
            'nhsuk-form-group--error': disableErrorLine ? false : withErrors,
          })}
        >
          <MemoBaseFieldset className={className} {...rest}>
            {children}
          </MemoBaseFieldset>
        </div>
      ) : (
        <MemoBaseFieldset className={className} {...rest}>
          {children}
        </MemoBaseFieldset>
      )}
    </FieldsetContext.Provider>
  )
}

Fieldset.displayName = 'Fieldset'
Legend.displayName = 'Fieldset.Legend'

Fieldset.Legend = Legend

export default Fieldset
