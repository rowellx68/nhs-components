import clsx from 'clsx'
import { HTMLProps } from 'react'

/**
 * Use a skip link to help keyboard-only users skip to the main content on a page.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/skip-link).
 *
 * @link https://service-manual.nhs.uk/design-system/components/skip-link
 *
 * @example
 * ```tsx
 * <SkipLink href="#maincontent">Skip to main content</SkipLink>
 * ```
 */
const SkipLink: React.FC<HTMLProps<HTMLAnchorElement>> = ({
  children = 'Skip to main content',
  className,
  href = '#maincontent',
  ...rest
}) => {
  return (
    <a className={clsx('nhsuk-skip-link', className)} href={href} {...rest}>
      {children}
    </a>
  )
}

export default SkipLink
