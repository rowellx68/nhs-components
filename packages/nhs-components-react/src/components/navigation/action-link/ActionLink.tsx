import { ArrowRightCircleIcon } from '@/icons/arrow-right-circle'
import type { AsElementLink } from '@/types/link-like'
import clsx from 'clsx'

/**
 * Use action links to help users get to the next stage of a journey quickly by signposting the start of a digital service.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/action-link).
 *
 * @param {string} [props.className] - An optional class name to apply to the container.
 * @param {AsElementLink<HTMLAnchorElement>} [props.asElement] - The element to render the link as. Defaults to `a`.
 *
 * @example
 * ```tsx
 * <ActionLink href="https://nhs.uk">Go to the NHS website</ActionLink>
 * ```
 */
const ActionLink: React.FC<AsElementLink<HTMLAnchorElement>> = ({
  children,
  className,
  asElement: Component = 'a',
  ...rest
}): JSX.Element => {
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

ActionLink.displayName = 'ActionLink'

export default ActionLink
