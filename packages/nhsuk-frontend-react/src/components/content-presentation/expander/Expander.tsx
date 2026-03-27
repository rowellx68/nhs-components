import clsx from 'clsx';
import React from 'react';

import {
  DetailsSummary,
  DetailsSummaryProps,
  DetailsText,
  DetailsTextProps,
} from '@/components/content-presentation/details/Details';
import { Factory, factory } from '@/internal/factory/factory';
import { ElementProps } from '@/types/shared';

export type ExpanderProps = ElementProps<'details'>;

type ExpanderFactory = Factory<{
  props: ExpanderProps;
  ref: HTMLDetailsElement;
  staticComponents: {
    Summary: typeof ExpanderSummary;
    Text: typeof ExpanderText;
    Group: typeof ExpanderGroup;
  };
}>;

const Expander = factory<ExpanderFactory>(({ className, ...props }: ExpanderProps, ref) => {
  return (
    <details className={clsx('nhsuk-details nhsuk-expander', className)} {...props} ref={ref} />
  );
});

export type ExpanderSummaryProps = DetailsSummaryProps;

const ExpanderSummary = (props: ExpanderSummaryProps) => {
  return <DetailsSummary {...props} />;
};

export type ExpanderTextProps = DetailsTextProps;

const ExpanderText = (props: ExpanderTextProps) => {
  return <DetailsText {...props} />;
};

export type ExpanderGroupProps = ElementProps<'div'>;

const ExpanderGroup = ({ children, className, ...props }: ExpanderGroupProps) => {
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
