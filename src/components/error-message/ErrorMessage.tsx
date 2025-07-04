import React from 'react';
import clsx from 'clsx';
import { VisuallyHidden } from '@/components/visually-hidden/VisuallyHidden';
import { ElementProps, WithVisuallyHiddenTextProps } from '@/types/shared';

export type ErrorMessageProps = ElementProps<'p'> & WithVisuallyHiddenTextProps;

const ErrorMessage = ({
  className,
  children,
  visuallyHiddenText = 'Error: ',
  ...rest
}: ErrorMessageProps) => {
  return (
    <p className={clsx('nhsuk-error-message', className)} {...rest}>
      <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>
      {children}
    </p>
  );
};

ErrorMessage.displayName = 'ErrorMessage';

export { ErrorMessage };
