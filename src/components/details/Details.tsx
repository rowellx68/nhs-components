'use client';

import React, { useEffect, useImperativeHandle, useRef } from 'react';
import clsx from 'clsx';
import { ElementProps } from '@/types/shared';
import { Factory, factory } from '@/internal/factory/factory';
import { Details as NhsDetails } from 'nhsuk-frontend';

export type DetailsProps = {
  variant?: 'default' | 'expander';
} & ElementProps<'details'>;

type DetailsFactory = Factory<{
  props: DetailsProps;
  ref: HTMLDetailsElement;
  staticComponents: {
    Summary: typeof DetailsSummary;
    Text: typeof DetailsText;
  };
}>;

const Details = factory<DetailsFactory>(
  ({ variant, className, ...props }: DetailsProps, ref) => {
    const internalRef = useRef<HTMLDetailsElement>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLDetailsElement);

    useEffect(() => {
      if (!internalRef.current) {
        return;
      }

      new NhsDetails(internalRef.current);
    }, [internalRef]);

    return (
      <details
        className={clsx(
          'nhsuk-details',
          { 'nhsuk-expander': variant === 'expander' },
          className,
        )}
        {...props}
        ref={internalRef}
      />
    );
  },
);

export type DetailsSummaryProps = ElementProps<'summary'>;

const DetailsSummary = ({
  className,
  children,
  ...props
}: DetailsSummaryProps) => {
  return (
    <summary className={clsx('nhsuk-details__summary', className)} {...props}>
      <span className="nhsuk-details__summary-text">{children}</span>
    </summary>
  );
};

export type DetailsTextProps = ElementProps<'div'>;

const DetailsText = ({ className, ...props }: DetailsTextProps) => {
  return <div className={clsx('nhsuk-details__text', className)} {...props} />;
};

Details.displayName = 'Details';
DetailsSummary.displayName = 'Details.Summary';
DetailsText.displayName = 'Details.Text';

Details.Summary = DetailsSummary;
Details.Text = DetailsText;

export { Details, DetailsSummary, DetailsText };
