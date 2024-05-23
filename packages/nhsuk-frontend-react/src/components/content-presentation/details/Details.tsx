import React from 'react';
import clsx from 'clsx';
import { ElementProps } from '@/types/shared';
import { Factory, factory } from '@/internal/factory/factory';

export type DetailsProps = {
  expander?: boolean;
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
  ({ expander, className, ...props }: DetailsProps, ref) => {
    return (
      <details
        className={clsx(
          'nhsuk-details',
          { 'nhsuk-expander': expander },
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);

export type DetailsSummaryProps = {
  textContainerProps?: ElementProps<'span'>;
} & ElementProps<'summary'>;

const DetailsSummary = ({
  textContainerProps,
  className,
  children,
  ...props
}: DetailsSummaryProps) => {
  const { className: textContainerClassName, ...restTextContainerProps } =
    textContainerProps || {};
  return (
    <summary className={clsx('nhsuk-details__summary', className)} {...props}>
      <span
        className={clsx('nhsuk-details__summary-text', textContainerClassName)}
        {...restTextContainerProps}
      >
        {children}
      </span>
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
