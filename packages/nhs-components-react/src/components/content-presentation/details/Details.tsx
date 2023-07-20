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
 * See more information regarding this component [here](https://service-manual.nhs.uk/design-system/components/details).
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

Details.Summary = Summary
Details.Text = Text
Details.ExpanderGroup = ExpanderGroup

export default Details
