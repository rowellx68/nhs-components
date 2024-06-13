import React from 'react';
import clsx from 'clsx';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';
import { ElementProps, WithVisuallyHiddenTextProps } from '@/types/shared';

export type ErrorMessageProps = ElementProps<'span'> &
  WithVisuallyHiddenTextProps;

const ErrorMessage = ({
  className,
  children,
  visuallyHiddenText = 'Error: ',
  ...rest
}: ErrorMessageProps) => {
  return (
    <span className={clsx('nhsuk-error-message', className)} {...rest}>
      <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>
      {children}
    </span>
  );
};

ErrorMessage.displayName = 'ErrorMessage';

export { ErrorMessage };
