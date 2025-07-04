import React from 'react';
import clsx from 'clsx';
import { VisuallyHidden } from '@/components/visually-hidden/VisuallyHidden';
import { ElementProps, WithVisuallyHiddenTextProps } from '@/types/shared';

export type InsetTextProps = WithVisuallyHiddenTextProps & ElementProps<'div'>;

const InsetText = ({
  visuallyHiddenText = 'Information: ',
  className,
  children,
  ...props
}: InsetTextProps) => {
  return (
    <div className={clsx('nhsuk-inset-text', className)} {...props}>
      <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>
      {children}
    </div>
  );
};

InsetText.displayName = 'InsetText';

export { InsetText };
