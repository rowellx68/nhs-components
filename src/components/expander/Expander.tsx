import React from 'react';
import {
  DetailsSummaryProps,
  DetailsTextProps,
  DetailsProps,
  Details,
} from '@/components/details/Details';
import clsx from 'clsx';
import { ElementProps } from '@/types/shared';

export type ExpanderProps = Omit<DetailsProps, 'expander' | 'variant'>;

const Expander = ({ ...props }: ExpanderProps) => {
  return <Details {...props} variant="expander" />;
};

export type ExpanderSummaryProps = DetailsSummaryProps;

const ExpanderSummary = ({ ...props }: ExpanderSummaryProps) => {
  return <Details.Summary {...props} />;
};

export type ExpanderTextProps = DetailsTextProps;

const ExpanderText = ({ ...props }: ExpanderTextProps) => {
  return <Details.Text {...props} />;
};

export type ExpanderGroupProps = ElementProps<'div'>;

const ExpanderGroup = ({
  children,
  className,
  ...props
}: ExpanderGroupProps) => {
  return (
    <div className={clsx('nhsuk-expander-group', className)} {...props}>
      {children}
    </div>
  );
};

Expander.displayName = 'Expander';
ExpanderSummary.displayName = 'Expander.Summary';
ExpanderText.displayName = 'Expander.Text';
ExpanderGroup.displayName = 'Expander.Group';

Expander.Summary = ExpanderSummary;
Expander.Text = ExpanderText;
Expander.Group = ExpanderGroup;

export { Expander, ExpanderSummary, ExpanderText, ExpanderGroup };
