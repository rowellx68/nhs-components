import { ArrowRightCircleIcon } from '@/icons/arrow-right-circle'
import type { AsElementLink } from '@/types/link-like'
import clsx from 'clsx'

const ActionLink: React.FC<AsElementLink<HTMLAnchorElement>> = ({
  className,
  children,
  asElement: Component = 'a',
  ...rest
}): JSX.Element => {
  // const Component = asElement ?? 'a' as ElementType

  return (
    <div className="nhsuk-action-link">
      <Component
        className={clsx('nhsuk-action-link__link', className)}
        {...rest}
      >
        <ArrowRightCircleIcon />
        <span className="nhsuk-action-link__text">{children}</span>
      </Component>
    </div>
  )
}

export default ActionLink
