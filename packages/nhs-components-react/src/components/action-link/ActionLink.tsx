import { ArrowRightCircleIcon } from '@/icons/arrow-right-circle'
import type { AsElementLink } from '@/types/link-like'
import clsx from 'clsx'

/**
 * Use action links to help users get to the next stage of a journey quickly by signposting the start of a digital service.
 *
 * See more information regarding this component [here](https://service-manual.nhs.uk/design-system/components/action-link).
 */
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
