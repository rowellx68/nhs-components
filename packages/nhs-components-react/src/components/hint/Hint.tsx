import clsx from 'clsx'
import { HTMLProps } from 'react'

/**
 * Use hint text to help users understand a question.
 *
 * See more information regarding this component [here](https://service-manual.nhs.uk/design-system/components/hint-text).
 */
const Hint: React.FC<HTMLProps<HTMLDivElement>> = ({
  className,
  children,
  ...rest
}): JSX.Element => {
  return (
    <div className={clsx('nhsuk-hint', className)} {...rest}>
      {children}
    </div>
  )
}

export default Hint
