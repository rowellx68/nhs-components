import clsx from 'clsx'
import { ElementType, HTMLProps, useState } from 'react'
import FieldsetContext, { FieldsetContextValue } from './FieldsetContext'
import { Size } from '@/types/nhsuk-sizes'

type LegendProps = {
  isPageHeading?: boolean
  asElement?: ElementType
  size?: Size
} & Omit<HTMLProps<HTMLLegendElement>, 'size'>

type Legend = React.FC<LegendProps>

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

/**
 * Use a fieldset to group related form inputs.
 *
 * See more information regarding this component [here](https://service-manual.nhs.uk/design-system/components/fieldset).
 */
const Fieldset: Fieldset = ({
  className,
  children,
  disableErrorLine,
  ...rest
}): JSX.Element => {
  const [registered, setRegistered] = useState<string[]>([])
  const [errored, setErrored] = useState<string[]>([])

  const erroredComponent = (componentId: string, add: boolean) => {
    const hasError = errored.includes(componentId)

    if (add && !hasError) {
      setErrored([...errored, componentId])
    }

    if (!add && hasError) {
      setErrored(errored.filter((id) => id !== componentId))
    }
  }

  const registerComponent = (componentId: string, add: boolean) => {
    const haveRegistered = registered.includes(componentId)
    if (add && !haveRegistered) {
      setRegistered([...registered, componentId])
    }

    if (!add && haveRegistered) {
      setRegistered(registered.filter((id) => id !== componentId))
    }
  }

  const contextValue: FieldsetContextValue = {
    isFieldset: true,
    setErrored: (id) => erroredComponent(id, true),
    resetErrored: (id) => erroredComponent(id, false),
    register: (id) => registerComponent(id, true),
    unregister: (id) => registerComponent(id, false),
  }

  const BaseFieldset = (): JSX.Element => {
    return (
      <fieldset className={clsx('nhsuk-fieldset', className)} {...rest}>
        {children}
      </fieldset>
    )
  }

  return (
    <FieldsetContext.Provider value={contextValue}>
      {registered.length > 0 ? (
        <div
          className={clsx('nhsuk-form-group', {
            'nhsuk-form-group--error': disableErrorLine
              ? false
              : errored.length > 0,
          })}
        >
          <BaseFieldset />
        </div>
      ) : (
        <BaseFieldset />
      )}
    </FieldsetContext.Provider>
  )
}

Fieldset.Legend = Legend

export default Fieldset
