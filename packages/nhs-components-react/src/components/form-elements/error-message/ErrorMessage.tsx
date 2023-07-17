import clsx from 'clsx'
import { HTMLProps } from 'react'

type ErrorMessageProps = {
  visuallyHiddenText?: string
} & HTMLProps<HTMLSpanElement>

/**
 * Use an error message when there is a validation error. Explain what went wrong and how to fix it.
 *
 * See more information regarding this component [here](https://service-manual.nhs.uk/design-system/components/error-message).
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({
  className,
  children,
  visuallyHiddenText = 'Error',
  ...rest
}): JSX.Element => {
  return (
    <span className={clsx('nhsuk-error-message', className)} {...rest}>
      <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}:</span>
      {children}
    </span>
  )
}

export default ErrorMessage
