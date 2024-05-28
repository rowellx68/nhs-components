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
import { Base } from '@/components/core/base/Base';
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
  variant?: 'responsive';
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

const Table = factory<TableFactory>(({ variant, className, ...props }, ref) => {
  const [responsiveHeadings, registerHeadings] = useState<ReactNode[]>([]);

  const value = useMemo(
    () => ({ variant, responsiveHeadings, registerHeadings }),
    [variant, responsiveHeadings, registerHeadings],
  );

  return (
    <TableProvider value={value}>
      <table
        className={clsx({
          'nhsuk-table': !variant,
          [`nhsuk-table-${variant}`]: variant,
          className,
        })}
        {...props}
        ref={ref}
      />
    </TableProvider>
  );
});

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

  if (!head && tableVariant === 'responsive') {
    _children = Children.map(children, (child, index) => {
      if (isValidElement(child) && child.type === TableCell) {
        return cloneElement(child as ReactElement<TableCellProps>, {
          __responsiveHeading: responsiveHeadings[index] ?? '',
        });
      }
      return child;
    });
  }

  return (
    <tr
      className={clsx({
        'nhsuk-table__row': !head,
        className,
      })}
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
  variant?: 'numeric';
  /**
   * The heading to display in when the table is in responsive mode and on small screens. If not provided, the children will be used.
   */
  responsiveHeading?: string;
  /**
   * For internal use only
   */
  __responsiveHeading?: ReactNode;
} & ElementProps<'td'>;

const TableCell = ({
  variant,
  role,
  className,
  children,
  responsiveHeading,
  __responsiveHeading,
  ...props
}: TableCellProps) => {
  const { variant: tableVariant } = useTableContext();
  const { head } = useTableHeadContext();

  const baseProps = head
    ? {
        as: 'th',
        scope: 'col',
        role: role || 'columnheader',
        className: className,
        'data-responsive-heading': responsiveHeading,
      }
    : {
        as: 'td',
        role: role || 'cell',
        className: clsx(
          'nhsuk-table__cell',
          { 'nhsuk-table__cell--numeric': variant === 'numeric' },
          className,
        ),
      };

  return (
    <Base<any> {...baseProps} {...props}>
      {tableVariant === 'responsive' && (
        <span className="nhsuk-table-responsive__heading">
          {__responsiveHeading}
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
