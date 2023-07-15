import { ChevronLeftIcon } from '@/icons/chevron-left'
import type { AsElementLink } from '@/types/link-like'
import clsx from 'clsx'

const BackLink: React.FC<AsElementLink<HTMLAnchorElement>> = ({
  className,
  children,
  asElement: Component = 'a',
  ...rest
}): JSX.Element => {
  // const Component = asElement ?? 'a' as ElementType

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
