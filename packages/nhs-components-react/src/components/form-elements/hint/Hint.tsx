import clsx from 'clsx'
import { HTMLProps } from 'react'

/**
 * Use hint text to help users understand a question.
 *
 * For more information on when to use this component, go the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/hint-text).
 *
 * @param {string} [props.className] - An optional class name to apply to the container.
 *
 * @example
 * ```tsx
 * <Hint>This is a hint</Hint>
 * ```
 */
const Hint: React.FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}): JSX.Element => {
  return (
    <div className={clsx('nhsuk-hint', className)} {...rest}>
      {children}
    </div>
  )
}

Hint.displayName = 'Hint'

export default Hint
