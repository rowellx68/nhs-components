import React, { HTMLProps, ReactNode } from 'react'
import { AsElementLink } from '@/types/link-like'
import clsx from 'clsx'

type BreadcrumbItem = React.FC<AsElementLink<HTMLAnchorElement>>
type BreadcrumbBackItem = React.FC<AsElementLink<HTMLAnchorElement>>

/**
 * Use breadcrumbs to help users understand where they are in the website.
 *
 * See more information regarding this component [here](https://service-manual.nhs.uk/design-system/components/breadcrumbs).
 */
const Item: BreadcrumbItem = ({
  className,
  children,
  asElement: Component = 'a',
  ...rest
}): JSX.Element => {
  return (
    <li className="nhsuk-breadcrumb__item">
      <Component
        className={clsx('nhsuk-breadcrumb__link', className)}
        {...rest}
      >
        {children}
      </Component>
    </li>
  )
}

const BackItem: BreadcrumbBackItem = ({
  className,
  children,
  asElement: Component = 'a',
  ...rest
}): JSX.Element => {
  return (
    <p className="nhsuk-breadcrumb__back">
      <Component
        className={clsx('nhsuk-breadcrumb__backlink', className)}
        {...rest}
      >
        <span className="nhsuk-u-visually-hidden">Back to &nbsp;</span>
        {children}
      </Component>
    </p>
  )
}

type Breadcrumb = {
  Item: BreadcrumbItem
  Back: BreadcrumbBackItem
} & React.FC<HTMLProps<HTMLDivElement>>

type Split = {
  Items: ReactNode[]
  Back?: ReactNode
  Others: ReactNode[]
}

const Breadcrumb: Breadcrumb = ({
  children,
  className,
  ...rest
}): JSX.Element => {
  const { Items, Back, Others } = React.Children.toArray(
    children,
  ).reduce<Split>(
    (prev, child) => {
      if (child && typeof child === 'object' && 'type' in child) {
        if (child.type === Item) {
          prev.Items.push(child)
        } else if (child.type === BackItem) {
          prev.Back = child
        } else {
          prev.Others.push(child)
        }
      } else {
        prev.Others.push(child)
      }

      return prev
    },
    { Items: [], Back: undefined, Others: [] },
  )

  return (
    <nav className={clsx('nhsuk-breadcrumb', className)} {...rest}>
      <div className="nhsuk-width-container">
        <ol className="nhsuk-breadcrumb__list">{Items}</ol>
        {Back}
        {Others}
      </div>
    </nav>
  )
}

Breadcrumb.Back = BackItem
Breadcrumb.Item = Item

Breadcrumb.defaultProps = {
  'aria-label': 'Breadcrumb',
}

export default Breadcrumb
