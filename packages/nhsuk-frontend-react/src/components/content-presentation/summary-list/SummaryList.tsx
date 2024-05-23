import { Base } from '@/components/core/base/Base';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';
import { Factory, factory } from '@/internal/factory/factory';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps } from '@/types/shared';
import clsx from 'clsx';
import React from 'react';

export type SummaryListProps = ElementProps<'dl'>;

type SummaryListFactory = Factory<{
  props: SummaryListProps;
  ref: HTMLDListElement;
  staticComponents: {
    Row: typeof SummaryListRow;
  };
}>;

const SummaryList = factory<SummaryListFactory>(
  ({ className, ...props }, ref) => {
    return (
      <dl
        className={clsx('nhsuk-summary-list', className)}
        {...props}
        ref={ref}
      />
    );
  },
);

export type SummaryListRowProps = ElementProps<'div'>;

type SummaryListRowFactory = Factory<{
  props: SummaryListRowProps;
  ref: HTMLDivElement;
  staticComponents: {
    Key: typeof SummaryListRowKey;
    Value: typeof SummaryListRowValue;
    Actions: typeof SummaryListRowActions;
    ActionLink: typeof SummaryListRowActionLink;
  };
}>;

const SummaryListRow = factory<SummaryListRowFactory>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={clsx('nhsuk-summary-list__row', className)}
        {...props}
        ref={ref}
      />
    );
  },
);

export type SummaryListRowKeyProps = ElementProps<'dt'>;

const SummaryListRowKey = ({ className, ...props }: SummaryListRowKeyProps) => {
  return (
    <dt className={clsx('nhsuk-summary-list__key', className)} {...props} />
  );
};

export type SummaryListRowValueProps = ElementProps<'dd'>;

const SummaryListRowValue = ({
  className,
  ...props
}: SummaryListRowValueProps) => {
  return (
    <dd className={clsx('nhsuk-summary-list__value', className)} {...props} />
  );
};

export type SummaryListRowActionsProps = ElementProps<'dd'>;

const SummaryListRowActions = ({
  className,
  ...props
}: SummaryListRowActionsProps) => {
  return (
    <dd className={clsx('nhsuk-summary-list__actions', className)} {...props} />
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

const SummaryListRowActionLink =
  polymorphicFactory<SummaryListRowActionLinkFactory>(
    (
      {
        children,
        as: component = 'a',
        visuallyHiddenText,
        ...props
      }: SummaryListRowActionLinkProps & AsElementProps,
      ref,
    ) => {
      return (
        <Base as={component} ref={ref} {...props}>
          {children}
          <VisuallyHidden> {visuallyHiddenText}</VisuallyHidden>
        </Base>
      );
    },
  );

SummaryList.displayName = 'SummaryList';
SummaryListRow.displayName = 'SummaryList.Row';
SummaryListRowKey.displayName = 'SummaryList.Row.Key';
SummaryListRowValue.displayName = 'SummaryList.Row.Value';
SummaryListRowActions.displayName = 'SummaryList.Row.Actions';
SummaryListRowActionLink.displayName = 'SummaryList.Row.ActionLink';

SummaryListRow.Key = SummaryListRowKey;
SummaryListRow.Value = SummaryListRowValue;
SummaryListRow.Actions = SummaryListRowActions;
SummaryListRow.ActionLink = SummaryListRowActionLink;

SummaryList.Row = SummaryListRow;

export {
  SummaryList,
  SummaryListRow,
  SummaryListRowKey,
  SummaryListRowValue,
  SummaryListRowActions,
  SummaryListRowActionLink,
};
