import clsx from 'clsx';
import React from 'react';

import { Base } from '@/components/core/base/Base';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';
import { Factory, factory } from '@/internal/factory/factory';
import { PolymorphicFactory, polymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps } from '@/types/shared';

export type SummaryListProps = {
  variant?: 'no-border';
} & ElementProps<'dl'>;

type SummaryListFactory = Factory<{
  props: SummaryListProps;
  ref: HTMLDListElement;
  staticComponents: {
    Row: typeof SummaryListRow;
    Key: typeof SummaryListKey;
    Value: typeof SummaryListValue;
    Actions: typeof SummaryListActions;
    ActionLink: typeof SummaryListActionLink;
  };
}>;

const SummaryList = factory<SummaryListFactory>(({ className, variant, ...props }, ref) => {
  return (
    <dl
      className={clsx(
        'nhsuk-summary-list',
        { 'nhsuk-summary-list--no-border': variant === 'no-border' },
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});

export type SummaryListRowProps = ElementProps<'div'> & {
  variant?: 'no-border' | 'no-actions';
};

type SummaryListRowFactory = Factory<{
  props: SummaryListRowProps;
  ref: HTMLDivElement;
}>;

const SummaryListRow = factory<SummaryListRowFactory>(({ className, variant, ...props }, ref) => {
  return (
    <div
      className={clsx(
        'nhsuk-summary-list__row',
        { 'nhsuk-summary-list__row--no-border': variant === 'no-border' },
        { 'nhsuk-summary-list__row--no-actions': variant === 'no-actions' },
        className,
      )}
      {...props}
      ref={ref}
    />
  );
});

export type SummaryListRowKeyProps = ElementProps<'dt'>;

const SummaryListKey = ({ className, ...props }: SummaryListRowKeyProps) => {
  return <dt className={clsx('nhsuk-summary-list__key', className)} {...props} />;
};

export type SummaryListRowValueProps = ElementProps<'dd'>;

const SummaryListValue = ({ className, ...props }: SummaryListRowValueProps) => {
  return <dd className={clsx('nhsuk-summary-list__value', className)} {...props} />;
};

export type SummaryListRowActionsProps = ElementProps<'dd'>;

const SummaryListActions = ({ className, children, ...props }: SummaryListRowActionsProps) => {
  const multiple = React.Children.count(children) > 1;
  return (
    <dd className={clsx('nhsuk-summary-list__actions', className)} {...props}>
      {multiple ? (
        <ul className="nhsuk-summary-list__actions-list">
          {React.Children.map(children, (child) => (
            <li className="nhsuk-summary-list__actions-list-item">{child}</li>
          ))}
        </ul>
      ) : (
        children
      )}
    </dd>
  );
};

export type SummaryListRowActionLinkProps = {
  visuallyHiddenText: string;
} & ElementProps<'a'>;

type SummaryListRowActionLinkFactory = PolymorphicFactory<{
  props: SummaryListRowActionLinkProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const SummaryListActionLink = polymorphicFactory<SummaryListRowActionLinkFactory>(
  (
    {
      children,
      as: component = 'a',
      className,
      visuallyHiddenText,
      ...props
    }: SummaryListRowActionLinkProps & AsElementProps,
    ref,
  ) => {
    return (
      <Base as={component} className={clsx('nhsuk-link', className)} ref={ref} {...props}>
        {children}
        <VisuallyHidden> {visuallyHiddenText}</VisuallyHidden>
      </Base>
    );
  },
);

SummaryList.displayName = 'SummaryList';
SummaryListRow.displayName = 'SummaryList.Row';
SummaryListKey.displayName = 'SummaryList.Key';
SummaryListValue.displayName = 'SummaryList.Value';
SummaryListActions.displayName = 'SummaryList.Actions';
SummaryListActionLink.displayName = 'SummaryList.ActionLink';

SummaryList.Row = SummaryListRow;
SummaryList.Key = SummaryListKey;
SummaryList.Value = SummaryListValue;
SummaryList.Actions = SummaryListActions;
SummaryList.ActionLink = SummaryListActionLink;

export {
  SummaryList,
  SummaryListRow,
  SummaryListKey,
  SummaryListValue,
  SummaryListActions,
  SummaryListActionLink,
};
