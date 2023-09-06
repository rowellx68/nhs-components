import clsx from 'clsx'
import { HTMLProps } from 'react'

type SummaryListProps = {
  borderless?: boolean
} & HTMLProps<HTMLDListElement>

type SummaryList = {
  Row: typeof Row
  Key: typeof Key
  Value: typeof Value
  Actions: typeof Actions
} & React.FC<SummaryListProps>

const Row: React.FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}): JSX.Element => {
  return (
    <div className={clsx('nhsuk-summary-list__row', className)} {...rest}>
      {children}
    </div>
  )
}

const Key: React.FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}): JSX.Element => {
  return (
    <dt className={clsx('nhsuk-summary-list__key', className)} {...rest}>
      {children}
    </dt>
  )
}

const Value: React.FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}): JSX.Element => {
  return (
    <dd className={clsx('nhsuk-summary-list__value', className)} {...rest}>
      {children}
    </dd>
  )
}

const Actions: React.FC<HTMLProps<HTMLDivElement>> = ({
  children,
  className,
  ...rest
}): JSX.Element => {
  return (
    <dd className={clsx('nhsuk-summary-list__actions', className)} {...rest}>
      {children}
    </dd>
  )
}

/**
 * Use the summary list to summarise information, for example, a user’s responses at the end of a form.
 *
 * For more information on when to use this component, go to the [NHS Service Manual website](https://service-manual.nhs.uk/design-system/components/summary-list).
 *
 * @link https://service-manual.nhs.uk/design-system/components/summary-list
 *
 * @example
 *
 * ```tsx
 * <SummaryList>
 *  <SummaryList.Row>
 *   <SummaryList.Key>Name</SummaryList.Key>
 *   <SummaryList.Value>Dr John Smith</SummaryList.Value>
 *   <SummaryList.Actions>
 *    <a href="#">Change<span className="nhsuk-u-visually-hidden"> name</span></a>
 *   </SummaryList.Actions>
 *  </SummaryList.Row>
 * </SummaryList>
 * ```
 */
const SummaryList: SummaryList = ({
  children,
  className,
  borderless,
  ...rest
}): JSX.Element => {
  return (
    <dl
      className={clsx(
        'nhsuk-summary-list',
        { 'nhsuk-summary-list--no-border': borderless },
        className,
      )}
      {...rest}
    >
      {children}
    </dl>
  )
}

SummaryList.displayName = 'SummaryList'
Row.displayName = 'SummaryList.Row'
Key.displayName = 'SummaryList.Key'
Value.displayName = 'SummaryList.Value'
Actions.displayName = 'SummaryList.Actions'

SummaryList.Row = Row
SummaryList.Key = Key
SummaryList.Value = Value
SummaryList.Actions = Actions

export default SummaryList
