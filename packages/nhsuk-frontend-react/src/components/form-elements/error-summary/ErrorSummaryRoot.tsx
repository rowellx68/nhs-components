'use client';

import clsx from 'clsx';
import { ErrorSummary as NhsErrorSummary } from 'nhsuk-frontend';
import React, { useRef, useImperativeHandle, useEffect } from 'react';

import { Factory, factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';

export type ErrorSummaryProps = {
  disableAutoFocus?: boolean;
} & ElementProps<'div'>;

type ErrorSummaryFactory = Factory<{
  props: ErrorSummaryProps;
  ref: HTMLDivElement;
}>;

const ErrorSummary = factory<ErrorSummaryFactory>(
  ({ className, disableAutoFocus, children, ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    const errorSummary = useRef<NhsErrorSummary>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

    useEffect(() => {
      if (!internalRef.current) {
        return;
      }

      if (errorSummary.current) {
        return;
      }

      errorSummary.current = new NhsErrorSummary(internalRef.current);

      return () => {
        internalRef.current?.removeAttribute('data-nhsuk-error-summary-init');
      };
    }, []);

    return (
      <div
        className={clsx('nhsuk-error-summary', className)}
        data-module="nhsuk-error-summary"
        {...(disableAutoFocus !== undefined
          ? { 'data-disable-auto-focus': String(disableAutoFocus) }
          : {})}
        {...props}
        ref={internalRef}
      >
        <div role="alert">{children}</div>
      </div>
    );
  },
);

export { ErrorSummary };
