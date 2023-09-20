import clsx from 'clsx'
import React, {
  HTMLProps,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import {
  TableContext,
  TableSectionContext,
  useTableContext,
  useTableSectionContext,
} from './TableContext'

type WithInternalProps = {
  _responsiveHeading?: string
}

type TableRowProps = HTMLProps<HTMLTableRowElement>

type TableCellProps = {
  isNumeric?: boolean
} & WithInternalProps &
  HTMLProps<HTMLTableCellElement>

type TableProps = {
  responsive?: boolean
  caption?: ReactNode
  captionProps?: HTMLProps<HTMLTableCaptionElement>
} & HTMLProps<HTMLTableElement>

type Table = {
  Row: typeof TableRow
  Cell: typeof TableCell
  Head: typeof TableHead
  Body: typeof TableBody
} & React.FC<TableProps>

const TableHead: React.FC<HTMLProps<HTMLTableSectionElement>> = ({
  children,
  className,
  role = 'rowgroup',
  ...rest
}): JSX.Element => {
  return (
    <thead
      className={clsx('nhsuk-table__head', className)}
      role={role}
      {...rest}
    >
      <TableSectionContext.Provider value="header">
        {children}
      </TableSectionContext.Provider>
    </thead>
  )
}

const TableBody: React.FC<HTMLProps<HTMLTableSectionElement>> = ({
  children,
  className,
  ...rest
}): JSX.Element => {
  return (
    <tbody className={clsx('nhsuk-table__body', className)} {...rest}>
      <TableSectionContext.Provider value="body">
        {children}
      </TableSectionContext.Provider>
    </tbody>
  )
}

const TableRow: React.FC<TableRowProps> = ({
  children,
  className,
  role = 'row',
  ...rest
}): JSX.Element => {
  const section = useTableSectionContext()
  const { isResponsive, headings, setHeadings } = useTableContext()

  useEffect(() => {
    if (isResponsive && section === 'header') {
      const _headings: string[] = []

      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child) && child.type === TableCell) {
          _headings.push(
            (
              child as ReactElement<PropsWithChildren>
            ).props.children?.toString() ?? '',
          )
        }
      })

      setHeadings(_headings)
    }
  }, [children, isResponsive, section, setHeadings])

  let _children = children

  if (section === 'body' && isResponsive) {
    _children = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child) && child.type === TableCell) {
        return React.cloneElement(child as ReactElement<TableCellProps>, {
          _responsiveHeading: headings[index] ?? '',
        })
      }
      return child
    })
  }

  return (
    <tr
      className={clsx({ 'nhsuk-table__row': section === 'body' }, className)}
      role={role}
      {...rest}
    >
      {_children}
    </tr>
  )
}

const TableCell: React.FC<TableCellProps> = ({
  children,
  className,
  role = 'cell',
  isNumeric = false,
  _responsiveHeading,
  ...rest
}): JSX.Element => {
  const section = useTableSectionContext()
  const { isResponsive } = useTableContext()

  if (section === 'header') {
    role = 'columnheader'
    return (
      <th
        className={clsx(
          'nhsuk-table__header',
          { 'nhsuk-table__header--numeric': isNumeric },
          className,
        )}
        role={role}
        {...rest}
      >
        {children}
      </th>
    )
  }

  return (
    <td
      className={clsx(
        'nhsuk-table__cell',
        { 'nhsuk-table__cell--numeric': isNumeric },
        className,
      )}
      role={role}
      {...rest}
    >
      {isResponsive && _responsiveHeading && (
        <span className="nhsuk-table-responsive__heading">
          {_responsiveHeading}
        </span>
      )}
      {children}
    </td>
  )
}

/**
 * Use a table to make it easier for users to compare and scan information.
 *
 * For more information on when to use this component, got to the [NHS Service Manual website](https://service-manual.nhs.uk/design-system/components/table).
 *
 * @link https://service-manual.nhs.uk/design-system/components/table
 *
 * @example
 * ```tsx
 * <Table caption="Ibuprofen tablet dosages for children">
 *  <Table.Head>
 *   <Table.Row>
 *    <Table.Cell>Age</Table.Cell>
 *    <Table.Cell>How much</Table.Cell>
 *    <Table.Cell>How often</Table.Cell>
 *   </Table.Row>
 *  </Table.Head>
 *  <Table.Body>
 *   <Table.Row>
 *    <Table.Cell>1 to 2 months</Table.Cell>
 *    <Table.Cell>2.5ml</Table.Cell>
 *    <Table.Cell>Up to 4 times in 24 hours</Table.Cell>
 *   </Table.Row>
 *  </Table.Body>
 * </Table>
 * ```
 */
const Table: Table = ({
  children,
  responsive: isResponsive = false,
  caption,
  captionProps,
  className,
  ...rest
}): JSX.Element => {
  const [headings, setHeadings] = useState<string[]>([])

  const { className: captionClassName, ...restCaptionProps } =
    captionProps || {}

  return (
    <TableContext.Provider value={{ isResponsive, headings, setHeadings }}>
      <table
        className={clsx(
          {
            'nhsuk-table': !isResponsive,
            'nhsuk-table-responsive': isResponsive,
          },
          className,
        )}
        {...rest}
      >
        {caption && (
          <caption
            className={clsx('nhsuk-table__caption', captionClassName)}
            {...restCaptionProps}
          >
            {caption}
          </caption>
        )}
        {children}
      </table>
    </TableContext.Provider>
  )
}

TableHead.displayName = 'Table.Head'
TableBody.displayName = 'Table.Body'
TableRow.displayName = 'Table.Row'
TableCell.displayName = 'Table.Cell'
Table.displayName = 'Table'

Table.Row = TableRow
Table.Cell = TableCell
Table.Head = TableHead
Table.Body = TableBody

export default Table
