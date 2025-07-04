import React from 'react';
import clsx from 'clsx';
import { ColumnWidth, ElementProps } from '@/types/shared';

export type RowProps = ElementProps<'div'>;

const Row = ({ className, ...props }: RowProps) => {
  return <div className={clsx('nhsuk-grid-row', className)} {...props} />;
};

export type ColumnProps = {
  width: ColumnWidth;
} & ElementProps<'div'>;

const Column = ({ className, width, ...props }: ColumnProps) => {
  return (
    <div className={clsx(`nhsuk-grid-column-${width}`, className)} {...props} />
  );
};

Row.displayName = 'Row';
Column.displayName = 'Column';

export { Row, Column };
