import clsx from 'clsx'
import { HTMLProps } from 'react'

type DetailsProps = {
  expander?: boolean
} & HTMLProps<HTMLDetailsElement>

type Details = {
  Summary: React.FC<HTMLProps<HTMLDivElement>>
  Text: React.FC<HTMLProps<HTMLDivElement>>
  ExpanderGroup: React.FC<HTMLProps<HTMLDivElement>>
} & React.FC<DetailsProps>

/**
 * A component to display within a Details component.
 *
 * @param {HTMLProps<HTMLDivElement>} props
 * @param {string} [props.className] - An optional class name to add to the component.
 *
 * @example
 * ```tsx
 * <Details.Summary>
 *  How to find your NHS number
 * </Details.Summary>
 * ```
 */
const Summary: React.FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}): JSX.Element => {
  return (
    <summary className={clsx('nhsuk-details__summary', className)} {...rest}>
      <span className="nhsuk-details__summary-text">{children}</span>
    </summary>
  )
}

/**
 * A component to display within a Details component.
 *
 * @param {HTMLProps<HTMLDivElement>} props
 * @param {string} [props.className] - An optional class name to add to the component.
 *
 * @example
 * ```tsx
 * <Details.Text>
 *  You can find your NHS number...
 * </Details.Text>
 */
const Text: React.FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}): JSX.Element => {
  return (
    <div className={clsx('nhsuk-details__text', className)} {...rest}>
      {children}
    </div>
  )
}

/**
 * A container for multiple expanders.
 *
 * @param {HTMLProps<HTMLDivElement>} props
 * @param {string} [props.className] - An optional class name to add to the component.
 *
 * @example
 * ```tsx
 * <Details.ExpanderGroup>
 *  <Details expander>
 *    <Details.Summary>Question 1</Details.Summary>
 *    <Details.Text>Answer 1</Details.Text>
 *  </Details>
 *  <Details expander>
 *    <Details.Summary>Question 2</Details.Summary>
 *    <Details.Text>Answer 2</Details.Text>
 *  </Details>
 * </Details.ExpanderGroup>
 * ```
 */
const ExpanderGroup: React.FC<HTMLProps<HTMLDivElement>> = ({
  className,
  children,
  ...rest
}): JSX.Element => {
  return (
    <div className={clsx('nhsuk-expander-group', className)} {...rest}>
      {children}
    </div>
  )
}

/**
 * Make a page easier to scan by letting users reveal more detailed information only if they need it.
 *
 * For more information on when to use this component, go the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/details).
 *
 * @param {boolean} [props.expander] - If true, the component will be styled as an expander.
 * @param {string} [props.className] - An optional class name to add to the component.
 *
 * @example
 *
 * ```tsx
 * <Details>
 *  <Details.Summary>How to find your NHS number</Details.Summary>
 *  <Details.Text>You can find your NHS number...</Details.Text>
 * </Details>
 * ```
 */
const Details: Details = ({
  children,
  expander,
  className,
  ...rest
}): JSX.Element => {
  return (
    <details
      className={clsx(
        'nhsuk-details',
        { 'nhsuk-expander': expander },
        className,
      )}
      {...rest}
    >
      {children}
    </details>
  )
}

Details.displayName = 'Details'
Summary.displayName = 'Details.Summary'
Text.displayName = 'Details.Text'
ExpanderGroup.displayName = 'Details.ExpanderGroup'

Details.Summary = Summary
Details.Text = Text
Details.ExpanderGroup = ExpanderGroup

export default Details
