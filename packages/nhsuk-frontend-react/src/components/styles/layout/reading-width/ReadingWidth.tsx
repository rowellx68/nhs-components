import React from 'react';
import clsx from 'clsx';
import { ElementProps } from '@/types/shared';

export type ReadingWidthProps = ElementProps<'div'>;

const ReadingWidth = ({ className, ...props }: ReadingWidthProps) => {
  return (
    <div className={clsx('nhsuk-u-reading-width', className)} {...props} />
  );
};

ReadingWidth.displayName = 'ReadingWidth';

export { ReadingWidth };
