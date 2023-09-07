import { ArrowLeftIcon } from '@/icons/arrow-left'
import { ArrowRightIcon } from '@/icons/arrow-right'
import { AsElementLink } from '@/types/link-like'
import clsx from 'clsx'
import { HTMLProps } from 'react'

type PaginationProps = HTMLProps<HTMLDivElement>

type PaginationLinkProps = {
  previous?: boolean
  next?: boolean
} & AsElementLink<HTMLAnchorElement>

type Pagination = {
  Link: React.FC<PaginationLinkProps>
} & React.FC<PaginationProps>

const Link: React.FC<PaginationLinkProps> = ({
  children,
  className,
  previous,
  next,
  asElement: Component = 'a',
  ...rest
}) => {
  return (
    <li
      className={clsx('nhsuk-pagination-item', {
        'nhsuk-pagination-item--previous': previous,
        'nhsuk-pagination-item--next': next,
      })}
    >
      <Component
        className={clsx(
          'nhsuk-pagination__link',
          {
            'nhsuk-pagination__link--prev': previous,
            'nhsuk-pagination__link--next': next,
          },
          className,
        )}
        {...rest}
      >
        <span className="nhsuk-pagination__title">
          {previous && 'Previous'}
          {next && 'Next'}
        </span>
        <span className="nhsuk-u-visually-hidden">:</span>
        <span className="nhsuk-pagination__page">{children}</span>
        {previous && <ArrowLeftIcon />}
        {next && <ArrowRightIcon />}
      </Component>
    </li>
  )
}

/**
 * Use pagination to allow users to navigate between related pages, for example about a single condition.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/pagination).
 *
 * @link https://service-manual.nhs.uk/design-system/components/pagination
 *
 * @example
 * ```tsx
 * <Pagination>
 *  <Pagination.Link previous href="#previous">
 *   Previous
 *  </Pagination.Link>
 *  <Pagination.Link next href="#next">
 *   Next
 *  </Pagination.Link>
 * </Pagination>
 * ```
 */
const Pagination: Pagination = ({ children, className, ...rest }) => {
  return (
    <nav className={clsx('nhsuk-pagination', className)} {...rest}>
      <ul className="nhsuk-list nhsuk-pagination__list">{children}</ul>
    </nav>
  )
}

Pagination.displayName = 'Pagination'
Link.displayName = 'Pagination.Link'

Pagination.Link = Link

export default Pagination
