import { ChevronLeftIcon } from '@/icons/chevron-left'
import type { AsElementLink } from '@/types/link-like'
import clsx from 'clsx'

/**
 * Use back links to help users go back to the previous page in a multi-page transaction
 *
 * See more information regarding this component [here](https://service-manual.nhs.uk/design-system/components/back-link).
 */
const BackLink: React.FC<AsElementLink<HTMLAnchorElement>> = ({
  className,
  children,
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

export default BackLink
