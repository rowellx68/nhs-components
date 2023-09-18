import { HTMLProps } from 'react'
import clsx from 'clsx'
import { VisuallyHiddenProps } from '@/types/visually-hidden'
import { AsElementHeadingProps } from '@/types/heading'

type WarningCallout = {
  Label: typeof Label
} & React.FC<HTMLProps<HTMLDivElement>>

type WarningCalloutLabelProps = AsElementHeadingProps &
  HTMLProps<HTMLHeadingElement> &
  Partial<VisuallyHiddenProps>

/**
 * The label for the `WarningCallout` component.
 *
 * @example
 * ```tsx
 * <WarningCallout.Label>Important</WarningCallout.Label>
 * ```
 */
const Label: React.FC<WarningCalloutLabelProps> = ({
  children,
  className,
  asElement: Component = 'h3',
  visuallyHiddenText = 'Important',
  ...rest
}) => {
  return (
    <Component
      className={clsx('nhsuk-warning-callout__label', className)}
      {...rest}
    >
      <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>
      {children}
    </Component>
  )
}

/**
 * Use a warning callout to help users identify and understand warning content on the page, even if they do not read the whole page.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/warning-callout).
 *
 * @link https://service-manual.nhs.uk/design-system/components/warning-callout
 *
 * @example
 * ```tsx
 * <WarningCallout>
 *  <WarningCallout.Label>Important</WarningCallout.Label>
 *  <p>
 *   If you have symptoms of coronavirus (COVID-19), you must self-isolate
 *  immediately.
 *  </p>
 * </WarningCallout>
 * ```
 */
const WarningCallout: WarningCallout = ({ children, className, ...rest }) => {
  return (
    <div className={clsx('nhsuk-warning-callout', className)} {...rest}>
      {children}
    </div>
  )
}

WarningCallout.displayName = 'WarningCallout'
Label.displayName = 'WarningCallout.Label'

WarningCallout.Label = Label

export default WarningCallout
