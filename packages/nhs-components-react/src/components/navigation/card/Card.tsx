import { HTMLProps } from 'react'
import clsx from 'clsx'
import { AsElementLink } from '@/types/link-like'

type Card = {
  Content: typeof Content
  Description: typeof Description
  Heading: typeof Heading
  Link: typeof Link
  Image: typeof Image
  Group: typeof Group
  GroupItem: typeof GroupItem
} & React.FC<CardProps>

type CardProps = {
  clickable?: boolean
} & HTMLProps<HTMLDivElement>

type GroupItemProps = {
  width?: GroupItemWidth
} & HTMLProps<HTMLLIElement>

type HeadingProps = {
  asElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & HTMLProps<HTMLHeadingElement>

export type GroupItemWidth = 'one-half' | 'one-third' | 'one-quarter'

const Content: React.FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={clsx('nhsuk-card__content', className)} {...rest}>
      {children}
    </div>
  )
}

const Heading: React.FC<HeadingProps> = ({
  children,
  className,
  asElement: Component = 'h2',
  ...rest
}) => {
  return (
    <Component
      className={clsx('nhsuk-card__heading nhsuk-heading-m', className)}
      {...rest}
    >
      {children}
    </Component>
  )
}

const Link: React.FC<AsElementLink<HTMLAnchorElement>> = ({
  children,
  className,
  asElement: Component = 'a',
  ...rest
}) => {
  return (
    <Component className={clsx('nhsuk-card__link', className)} {...rest}>
      {children}
    </Component>
  )
}

const Description: React.FC<HTMLProps<HTMLParagraphElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <p className={clsx('nhsuk-card__description', className)} {...rest}>
      {children}
    </p>
  )
}

const Image: React.FC<HTMLProps<HTMLImageElement>> = ({
  className,
  ...rest
}) => {
  return <img className={clsx('nhsuk-card__img', className)} {...rest} />
}

const Group: React.FC<HTMLProps<HTMLUListElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <ul
      className={clsx('nhsuk-grid-row nhsuk-card-group', className)}
      {...rest}
    >
      {children}
    </ul>
  )
}

const GroupItem: React.FC<GroupItemProps> = ({
  children,
  className,
  width = 'one-half',
  ...rest
}) => {
  return (
    <li
      className={clsx(
        'nhsuk-card-group__item',
        `nhsuk-grid-column-${width}`,
        className,
      )}
      {...rest}
    >
      {children}
    </li>
  )
}

/**
 * Use a card to give users a brief summary of content or a task, often with a link to more detail. You can display a card alongside other cards to group related content or tasks.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/card).
 *
 * @link https://service-manual.nhs.uk/design-system/components/card
 *
 * @example
 * ```tsx
 * <Card>
 *  <Card.Content>
 *   <Card.Heading>
 *    If you need help now, but it’s not an emergency
 *   </Card.Heading>
 *   <Card.Description>
 *    Go to <a href="#site">111.nhs.uk</a> or <a href="#site">call 111</a>
 *   </Card.Description>
 *  </Card.Content>
 * </Card>
 * ```
 */
const Card: Card = ({ children, className, clickable, ...rest }) => {
  return (
    <div
      className={clsx(
        'nhsuk-card',
        { 'nhsuk-card--clickable': clickable },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

Card.Content = Content
Card.Description = Description
Card.Heading = Heading
Card.Link = Link
Card.Image = Image
Card.Group = Group
Card.GroupItem = GroupItem

Card.displayName = 'Card'
Content.displayName = 'Card.Content'
Description.displayName = 'Card.Description'
Heading.displayName = 'Card.Heading'
Link.displayName = 'Card.Link'
Image.displayName = 'Card.Image'
Group.displayName = 'Card.Group'
GroupItem.displayName = 'Card.GroupItem'

export default Card
