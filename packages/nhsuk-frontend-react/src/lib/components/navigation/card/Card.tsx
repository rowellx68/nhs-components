import { HTMLProps, createContext, useContext } from 'react'
import clsx from 'clsx'
import { AsElementLink } from '@/types/link-like'
import { AsElementHeadingProps } from '@/types/heading'
import { ChevronRightCircleIcon } from '@/icons'

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
} & Partial<CardContextValue> &
  HTMLProps<HTMLDivElement>

type GroupItemProps = {
  width?: GroupItemWidth
} & HTMLProps<HTMLLIElement>

type HeadingProps = AsElementHeadingProps & HTMLProps<HTMLHeadingElement>

type CardContextValue = {
  withChevron: boolean
  primary: boolean
  secondary: boolean
}

export type GroupItemWidth = 'one-half' | 'one-third' | 'one-quarter'

const CardContext = createContext<CardContextValue>({
  withChevron: false,
  primary: false,
  secondary: false,
})

const Content: React.FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}) => {
  const { primary, secondary, withChevron } = useContext(CardContext)

  return (
    <div
      className={clsx(
        'nhsuk-card__content',
        {
          'nhsuk-card__content--primary': primary,
          'nhsuk-card__content--secondary': secondary && !primary,
        },
        className,
      )}
      {...rest}
    >
      {children}

      {withChevron && primary && <ChevronRightCircleIcon />}
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
  alt,
  ...rest
}) => {
  return <img className={clsx('nhsuk-card__img', className)} alt={alt} {...rest} />
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
const Card: Card = ({
  children,
  className,
  clickable,
  withChevron = false,
  primary = false,
  secondary = false,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        'nhsuk-card',
        {
          'nhsuk-card--clickable': clickable,
          'nhsuk-card--secondary': secondary && !primary,
        },
        className,
      )}
      {...rest}
    >
      <CardContext.Provider value={{ withChevron, primary, secondary }}>
        {children}
      </CardContext.Provider>
    </div>
  )
}

CardContext.displayName = 'CardContext'

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
