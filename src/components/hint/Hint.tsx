import React from 'react';
import clsx from 'clsx';
import { ElementProps } from '@/types/shared';

export type HintProps = ElementProps<'div'>;

const Hint = ({ className, ...rest }: HintProps) => {
  return <div className={clsx('nhsuk-hint', className)} {...rest} />;
};

Hint.displayName = 'Hint';

export { Hint };
