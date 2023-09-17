import { HTMLProps } from 'react'
import clsx from 'clsx'
import { VisuallyHiddenProps } from '@/types/visually-hidden'

type InsetProps = HTMLProps<HTMLDivElement> & Partial<VisuallyHiddenProps>

/**
 * Use inset text to help users identify and understand important content on the page, even if they do not read the whole page.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/inset-text).
 *
 * @link https://service-manual.nhs.uk/design-system/components/inset-text
 *
 * @example
 * ```tsx
 * <InsetText>
 *  <p>
 *  If you have symptoms of coronavirus (COVID-19), you must self-isolate
 *  immediately.
 *  </p>
 * </InsetText>
 * ```
 */
const InsetText: React.FC<InsetProps> = ({
  children,
  className,
  visuallyHiddenText = 'Information: ',
  ...rest
}): JSX.Element => {
  return (
    <div className={clsx('nhsuk-inset-text', className)} {...rest}>
      <span className="nhsuk-u-visually-hidden">{visuallyHiddenText}</span>
      {children}
    </div>
  )
}

InsetText.displayName = 'InsetText'

export default InsetText
