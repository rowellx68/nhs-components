import React, { HTMLProps, ReactNode } from 'react'
import { AsElementLink } from '@/types/link-like'
import clsx from 'clsx'

type BreadcrumbItem = React.FC<AsElementLink<HTMLAnchorElement>>
type BreadcrumbBackItem = React.FC<AsElementLink<HTMLAnchorElement>>

/**
 * @param {string} [props.className] - An optional class name to apply to the container.
 * @param {AsElementLink<HTMLAnchorElement>} [props.asElement] - The element to render the link as. Defaults to `a`.
 *
 * @example
 * ```tsx
 * <Breadcrumb.Item href="/start">Home</Breadcrumb.Item>
 * ```
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

/**
 *
 * @param {string} [props.className] - An optional class name to apply to the container.
 * @param {AsElementLink<HTMLAnchorElement>} [props.asElement] - The element to render the link as. Defaults to `a`.
 *
 * @example
 * ```tsx
 * <Breadcrumb.Back href="/step-2">Step 2</Breadcrumb.Back>
 * ```
 */
const BackItem: BreadcrumbBackItem = ({
  children,
  className,
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

/**
 * Use breadcrumbs to help users understand where they are in the website.
 *
 * For more information on when to use this component, go the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/breadcrumb).
 *
 * @param {string} [props.className] - An optional class name to apply to the container.
 * @param {string} [props.aria-label] - An optional label for the breadcrumb. Defaults to `Breadcrumb`.
 *
 * @example
 * ```tsx
 * <Breadcrumb>
 *  <Breadcrumb.Item href="/start">Home</Breadcrumb.Item>
 *  <Breadcrumb.Item href="/step-1">Step 1</Breadcrumb.Item>
 *  <Breadcrumb.Item href="/step-2">Step 2</Breadcrumb.Item>
 *  <Breadcrumb.Back href="/step-2">Step 2</Breadcrumb.Back>
 * </Breadcrumb>
 */
const Breadcrumb: Breadcrumb = ({
  children,
  className,
  'aria-label': ariaLabel = 'Breadcrumb',
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
    <nav
      className={clsx('nhsuk-breadcrumb', className)}
      aria-label={ariaLabel}
      {...rest}
    >
      <div className="nhsuk-width-container">
        <ol className="nhsuk-breadcrumb__list">{Items}</ol>
        {Back}
        {Others}
      </div>
    </nav>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
Item.displayName = 'Breadcrumb.Item'
BackItem.displayName = 'Breadcrumb.Back'

Breadcrumb.Back = BackItem
Breadcrumb.Item = Item

export default Breadcrumb
