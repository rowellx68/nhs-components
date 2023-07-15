import { AsElementLink } from '@/types/link-like'
import clsx from 'clsx'
import { HTMLProps, LiHTMLAttributes } from 'react'

type ContentsListItemProps = {
  current?: boolean
} & AsElementLink<HTMLAnchorElement>

type ContentsListProps = {
  visuallyHiddenText?: string
} & HTMLProps<HTMLDivElement>

type ContentsListItem = React.FC<ContentsListItemProps>

type ContentsList = {
  /**
   * Interchangeable with `<Content.Link />`
   */
  Item: ContentsListItem

  /**
   * Interchangeable with `<Content.Item />`
   */
  Link: ContentsListItem
} & React.FC<ContentsListProps>

const ContentsListItem: ContentsListItem = ({
  className,
  children,
  current,
  asElement: Component = 'a',
  ...rest
}): JSX.Element => {
  let aria: Partial<LiHTMLAttributes<HTMLLIElement>> = {}

  if (current) {
    aria = { 'aria-current': 'page' }
    Component = 'span'
    delete rest.to
    delete rest.href
  }

  return (
    <li className={clsx('nhsuk-contents-list__item', className)} {...aria}>
      <Component
        className={clsx({
          'nhsuk-contents-list__current': current,
          'nhsuk-contents-list__link': !current,
        })}
        {...rest}
      >
        {children}
      </Component>
    </li>
  )
}

/**
 * Use contents lists to allow users to navigate between related pages, for example about a single condition.
 *
 * See more information regarding this component [here](https://service-manual.nhs.uk/design-system/components/contents-list).
 */
const ContentsList: ContentsList = ({
  className,
  children,
  visuallyHiddenText,
  ...rest
}): JSX.Element => {
  return (
    <nav className={clsx('nhsuk-contents-list', className)} {...rest}>
      <h2 className="nhsuk-u-visually-hidden">{visuallyHiddenText}</h2>
      <ul className="nhsuk-contents-list__list">{children}</ul>
    </nav>
  )
}

ContentsList.defaultProps = {
  role: 'navigation',
  visuallyHiddenText: 'Contents',
}

ContentsList.Item = ContentsListItem
ContentsList.Link = ContentsListItem

export default ContentsList
