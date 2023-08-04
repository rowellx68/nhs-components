import { VisuallyHiddenProps } from '@/types/visually-hidden'
import clsx from 'clsx'
import { HTMLProps } from 'react'

export type ErrorMessageProps = HTMLProps<HTMLSpanElement> &
  Partial<VisuallyHiddenProps>

/**
 * Use an error message when there is a validation error. Explain what went wrong and how to fix it.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/error-message).
 *
 *
 * @param {string} [props.className] - Optional additional className to add to the component.
 * @param {string} [props.visuallyHiddenText] - Visually hidden text for screen readers. Defaults to 'Error'.
 *
 * @example
 * ```tsx
 * <ErrorMessage>Example error message</ErrorMessage>
 * ```
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
  className,
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

ErrorMessage.displayName = 'ErrorMessage'

export default ErrorMessage
