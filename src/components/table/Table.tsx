'use client';

import React, {
  Children,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ElementProps } from '@/types/shared';
import { Factory, factory } from '@/internal/factory/factory';
import clsx from 'clsx';
import { Base } from '@/internal/base/Base';
import {
  TableHeadProvider,
  TableProvider,
  useTableContext,
  useTableHeadContext,
} from './Table.context';

export type TableProps = {
  /**
   * The variant of the table. Defaults to a non-responsive table.
   */
  variant?: 'default' | 'responsive';
  /**
   * Whether the first cell in the table is a header cell. Defaults to false.
   * @default false
   */
  firstCellIsHeader?: boolean;
} & ElementProps<'table'>;

type TableFactory = Factory<{
  props: TableProps;
  ref: HTMLTableElement;
  staticComponents: {
    Caption: typeof TableCaption;
    Head: typeof TableHead;
    Body: typeof TableBody;
    Row: typeof TableRow;
    Cell: typeof TableCell;
  };
}>;

const Table = factory<TableFactory>(
  ({ variant, className, firstCellIsHeader = false, ...props }, ref) => {
    const [responsiveHeadings, registerHeadings] = useState<ReactNode[]>([]);

    const value = useMemo(
      () => ({
        variant,
        responsiveHeadings,
        firstCellIsHeader,
        registerHeadings,
      }),
      [variant, responsiveHeadings, registerHeadings],
    );

    return (
      <TableProvider value={value}>
        <table
          className={clsx(
            {
              'nhsuk-table': !variant,
              [`nhsuk-table-${variant}`]: variant,
            },
            className,
          )}
          {...props}
          ref={ref}
        />
      </TableProvider>
    );
  },
);

export type TableCaptionProps = ElementProps<'caption'>;

const TableCaption = ({ className, ...props }: TableCaptionProps) => (
  <caption className={clsx('nhsuk-table__caption', className)} {...props} />
);

export type TableHeadProps = ElementProps<'thead'>;

const TableHead = ({
  className,
  role = 'rowgroup',
  ...props
}: TableHeadProps) => (
  <TableHeadProvider value={{ head: true }}>
    <thead
      className={clsx('nhsuk-table__head', className)}
      role={role}
      {...props}
    />
  </TableHeadProvider>
);

export type TableBodyProps = ElementProps<'tbody'>;

const TableBody = ({ className, ...props }: TableBodyProps) => (
  <tbody className={clsx('nhsuk-table__body', className)} {...props} />
);

export type TableRowProps = ElementProps<'tr'>;

const TableRow = ({
  role = 'row',
  className,
  children,
  ...props
}: TableRowProps) => {
  const {
    variant: tableVariant,
    responsiveHeadings,
    firstCellIsHeader,
    registerHeadings,
  } = useTableContext();

  const { head } = useTableHeadContext();

  useEffect(() => {
    if (head && tableVariant === 'responsive') {
      const _headings: ReactNode[] = [];
      Children.forEach(children, (child) => {
        if (isValidElement(child) && child.type === TableCell) {
          const _child = child as ReactElement<TableCellProps>;

          _headings.push(
            _child.props.responsiveHeading ||
              _child.props.children ||
              '__MISSING__RESPONSIVE_HEADING__',
          );
        }
      });

      registerHeadings(_headings);
    }
  }, [children, registerHeadings, head, tableVariant]);

  let _children = children;

  if (!head) {
    if (tableVariant === 'responsive') {
      _children = Children.map(children, (child, index) => {
        if (isValidElement(child) && child.type === TableCell) {
          return cloneElement(child as ReactElement<TableCellProps>, {
            __responsiveHeading: responsiveHeadings[index] ?? '',
          });
        }
        return child;
      });
    }

    _children = Children.map(_children, (child, index) => {
      if (isValidElement(child) && child.type === TableCell) {
        return cloneElement(child as ReactElement<TableCellProps>, {
          __firstCellIsHeader: index === 0 && firstCellIsHeader,
        });
      }
      return child;
    });
  }

  return (
    <tr
      className={
        clsx(
          {
            'nhsuk-table__row': !head,
          },
          className,
        ) || undefined
      }
      role={role}
      {...props}
    >
      {_children}
    </tr>
  );
};

export type TableCellProps = {
  /**
   * The variant of the cell. Defaults to none.
   */
  variant?: 'default' | 'numeric';
  /**
   * The heading to display in when the table is in responsive mode and on small screens. If not provided, the children will be used.
   */
  responsiveHeading?: string;
  /**
   * For internal use only
   */
  __responsiveHeading?: ReactNode;

  /**
   * For internal use only
   */
  __firstCellIsHeader?: boolean;
} & ElementProps<'td'>;

const TableCell = ({
  variant,
  role,
  className,
  children,
  responsiveHeading,
  __responsiveHeading,
  __firstCellIsHeader,
  ...props
}: TableCellProps) => {
  const { variant: tableVariant } = useTableContext();
  const { head } = useTableHeadContext();

  const headerCellClassNames = clsx(
    {
      'nhsuk-table__header': __firstCellIsHeader,
      'nhsuk-table__header--numeric': variant === 'numeric',
    },
    className,
  );

  const cellClassNames = clsx(
    'nhsuk-table__cell',
    {
      'nhsuk-table__cell--numeric': variant === 'numeric',
    },
    className,
  );

  const baseProps =
    head || __firstCellIsHeader
      ? {
          as: 'th',
          scope: __firstCellIsHeader ? 'row' : 'col',
          role: __firstCellIsHeader ? role : role || 'columnheader',
          ...(headerCellClassNames && { className: headerCellClassNames }),
        }
      : {
          as: 'td',
          role,
          ...(cellClassNames && { className: cellClassNames }),
        };

  return (
    <Base<any> {...baseProps} {...props}>
      {tableVariant === 'responsive' && !head && (
        <span className="nhsuk-table-responsive__heading" aria-hidden="true">
          {responsiveHeading || __responsiveHeading}&nbsp;
        </span>
      )}
      {children}
    </Base>
  );
};

Table.displayName = 'Table';
TableCaption.displayName = 'Table.Caption';
TableHead.displayName = 'Table.Head';
TableBody.displayName = 'Table.Body';
TableRow.displayName = 'Table.Row';
TableCell.displayName = 'Table.Cell';

Table.Caption = TableCaption;
Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;

export { Table, TableCaption, TableHead, TableBody, TableRow, TableCell };
