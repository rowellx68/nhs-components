import { ChevronLeftIcon } from '@/icons/chevron-left'
import type { AsElementLink } from '@/types/link-like'
import clsx from 'clsx'

/**
 * Use back links to help users go back to the previous page in a multi-page transaction
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/back-link).
 *
 * @param {string} [props.className] - An optional class name to apply to the container.
 * @param {AsElementLink<HTMLAnchorElement>} [props.asElement] - The element to render the link as. Defaults to `a`.
 *
 * @example
 * ```tsx
 * <BackLink href="/home">Go to back to Home page</BackLink>
 * ```
 */
const BackLink: React.FC<AsElementLink<HTMLAnchorElement>> = ({
  children,
  className,
  asElement: Component = 'a',
  ...rest
}): JSX.Element => {
  return (
    <div className="nhsuk-back-link">
      <Component className={clsx('nhsuk-back-link__link', className)} {...rest}>
        <ChevronLeftIcon />
        {children}
      </Component>
    </div>
  )
}

BackLink.displayName = 'BackLink'

export default BackLink
