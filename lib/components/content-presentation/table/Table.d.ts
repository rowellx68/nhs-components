import React, { HTMLProps, ReactNode } from 'react';
type WithInternalProps = {
    _responsiveHeading?: string;
};
type TableRowProps = HTMLProps<HTMLTableRowElement>;
type TableCellProps = {
    isNumeric?: boolean;
} & WithInternalProps & HTMLProps<HTMLTableCellElement>;
type TableProps = {
    responsive?: boolean;
    caption?: ReactNode;
    captionProps?: HTMLProps<HTMLTableCaptionElement>;
} & HTMLProps<HTMLTableElement>;
type Table = {
    Row: typeof TableRow;
    Cell: typeof TableCell;
    Head: typeof TableHead;
    Body: typeof TableBody;
} & React.FC<TableProps>;
declare const TableHead: React.FC<HTMLProps<HTMLTableSectionElement>>;
declare const TableBody: React.FC<HTMLProps<HTMLTableSectionElement>>;
declare const TableRow: React.FC<TableRowProps>;
declare const TableCell: React.FC<TableCellProps>;
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
declare const Table: Table;
export default Table;
