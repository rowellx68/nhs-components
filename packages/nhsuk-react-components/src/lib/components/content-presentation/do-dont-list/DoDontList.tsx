import { AsElementHeadingProps } from '@/types/heading'
import { HTMLProps, createContext, useContext } from 'react'
import clsx from 'clsx'
import { CrossIcon, TickIcon } from '@/icons'

export type DoDontListType = 'do' | 'dont'

type DoDontListItemProps = HTMLProps<HTMLLIElement>

type HeadingProps = AsElementHeadingProps & HTMLProps<HTMLHeadingElement>

const Heading: React.FC<HeadingProps> = ({
  children,
  className,
  asElement: Component = 'h3',
  ...rest
}): JSX.Element => {
  return (
    <Component
      className={clsx('nhsuk-do-dont-list__label', className)}
      {...rest}
    >
      {children}
    </Component>
  )
}

const Item: React.FC<DoDontListItemProps> = ({
  children,
  ...rest
}): JSX.Element => {
  const type = useContext(DoDontListContext)

  return (
    <li {...rest}>
      {type === 'do' ? <TickIcon /> : <CrossIcon />}
      {children}
    </li>
  )
}

const DoDontListContext = createContext<DoDontListType>('do')

type DoDontListProps = {
  type?: DoDontListType
  headingProps?: HeadingProps
} & HTMLProps<HTMLDivElement>

type DoDontList = {
  Item: typeof Item
} & React.FC<DoDontListProps>

/**
 * Use Do and Don't lists to help users understand more easily what they should and shouldn't do.
 *
 * For more information on when to use this component, go to the [NHS Service Manuals website](https://service-manual.nhs.uk/design-system/components/do-and-dont-lists).
 *
 * @link https://service-manual.nhs.uk/design-system/components/do-and-dont-lists
 *
 * @example
 * ```tsx
 * <DoDontList type="do">
 *  <DoDontList.Item>Do this</DoDontList.Item>
 *  <DoDontList.Item>Do that</DoDontList.Item>
 * </DoDontList>
 * ```
 */
const DoDontList: DoDontList = ({
  type = 'do',
  className,
  headingProps,
  children,
  ...rest
}) => {
  return (
    <div className={clsx('nhsuk-do-dont-list', className)} {...rest}>
      <Heading {...headingProps}>{type === 'do' ? 'Do' : "Don't"}</Heading>
      {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
      <ul
        className={clsx('nhsuk-list', {
          'nhsuk-list--tick': type === 'do',
          'nhsuk-list--cross': type !== 'do',
        })}
        role="list"
      >
        <DoDontListContext.Provider value={type}>
          {children}
        </DoDontListContext.Provider>
      </ul>
    </div>
  )
}

DoDontListContext.displayName = 'DoDontListContext'
Item.displayName = 'DoDontList.Item'
DoDontList.displayName = 'DoDontList'

DoDontList.Item = Item

export default DoDontList
