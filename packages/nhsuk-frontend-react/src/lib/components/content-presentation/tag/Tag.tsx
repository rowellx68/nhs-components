import { HTMLProps } from 'react'
import clsx from 'clsx'

export type TagColour =
  | 'white'
  | 'grey'
  | 'green'
  | 'aqua-green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow'

type TagProps = {
  colour?: TagColour
} & Omit<HTMLProps<HTMLSpanElement>, 'color'>

/**
 * Use the tag component when it's possible for something to have more than 1 status and it's useful for the user to know about that status. For example, you can use a tag to show whether an item in a task list has been "completed".
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/tag).
 *
 * @link https://service-manual.nhs.uk/design-system/components/tag
 *
 * @example
 * ```tsx
 * <Tag colour="red">Tag</Tag>
 * ```
 */
const Tag: React.FC<TagProps> = ({
  children,
  className,
  colour = 'grey',
  ...rest
}) => {
  return (
    <strong
      className={clsx('nhsuk-tag', ` nhsuk-tag--${colour}`, className)}
      {...rest}
    >
      {children}
    </strong>
  )
}

Tag.displayName = 'Tag'

export default Tag
