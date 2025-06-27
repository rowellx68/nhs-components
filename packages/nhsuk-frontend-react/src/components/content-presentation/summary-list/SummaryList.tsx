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

export type SummaryListProps = {
  /**
   * The variant of the summary list
   * @default 'default'
   */
  variant?: 'default' | 'no-border';
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

const SummaryList = factory<SummaryListFactory>(
  ({ className, variant, ...props }, ref) => {
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
  },
);

export type SummaryListRowProps = ElementProps<'div'> & {
  variant?: 'default' | 'no-border';
};

type SummaryListRowFactory = Factory<{
  props: SummaryListRowProps;
  ref: HTMLDivElement;
}>;

const SummaryListRow = factory<SummaryListRowFactory>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <div
        className={clsx(
          'nhsuk-summary-list__row',
          { 'nhsuk-summary-list__row--no-border': variant === 'no-border' },
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);

export type SummaryListRowKeyProps = ElementProps<'dt'>;

const SummaryListKey = ({ className, ...props }: SummaryListRowKeyProps) => {
  return (
    <dt className={clsx('nhsuk-summary-list__key', className)} {...props} />
  );
};

export type SummaryListRowValueProps = ElementProps<'dd'>;

const SummaryListValue = ({
  className,
  ...props
}: SummaryListRowValueProps) => {
  return (
    <dd className={clsx('nhsuk-summary-list__value', className)} {...props} />
  );
};

export type SummaryListRowActionsProps = ElementProps<'dd'>;

const SummaryListActions = ({
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

const SummaryListActionLink =
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
