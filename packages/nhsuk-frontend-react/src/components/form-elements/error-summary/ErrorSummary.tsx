import clsx from 'clsx';
import React from 'react';

import { Base } from '@/components/core/base/Base';
import { Heading, HeadingProps } from '@/components/styles/typography/heading/Heading';
import { List, ListProps } from '@/components/styles/typography/list/List';
import { PolymorphicFactory, polymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps } from '@/types/shared';

import { ErrorSummary as ErrorSummaryRoot } from './ErrorSummaryRoot';

export type { ErrorSummaryProps } from './ErrorSummaryRoot';

export type ErrorSummaryTitleProps = HeadingProps;

type ErrorSummaryTitleFactory = PolymorphicFactory<{
  props: ErrorSummaryTitleProps;
  defaultComponent: 'h2';
  defaultRef: HTMLHeadingElement;
}>;

const ErrorSummaryTitle = polymorphicFactory<ErrorSummaryTitleFactory>(
  ({ as: component = 'h2', className, ...props }, ref) => {
    return (
      <Heading
        as={component}
        className={clsx('nhsuk-error-summary__title', className)}
        ref={ref}
        {...props}
      />
    );
  },
);

export type ErrorSummaryBodyProps = ElementProps<'div'>;

const ErrorSummaryBody = ({ className, ...props }: ErrorSummaryBodyProps) => {
  return <div className={clsx('nhsuk-error-summary__body', className)} {...props} />;
};

export type ErrorSummaryListProps = ListProps;

const ErrorSummaryList = ({ className, ...props }: ErrorSummaryListProps) => {
  return <List className={clsx('nhsuk-error-summary__list', className)} {...props} />;
};

export type ErrorSummaryListItemProps = ElementProps<'a'>;

type ErrorSummaryListItemFactory = PolymorphicFactory<{
  props: ErrorSummaryListItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const ErrorSummaryListItem = polymorphicFactory<ErrorSummaryListItemFactory>(
  ({ as: component = 'a', ...props }: ErrorSummaryListItemProps & AsElementProps, ref) => {
    return (
      <li>
        <Base as={component} ref={ref} {...props} />
      </li>
    );
  },
);

const ErrorSummary = Object.assign(ErrorSummaryRoot, {
  Title: ErrorSummaryTitle,
  Body: ErrorSummaryBody,
  List: ErrorSummaryList,
  ListItem: ErrorSummaryListItem,
});

ErrorSummary.displayName = 'ErrorSummary';
ErrorSummaryTitle.displayName = 'ErrorSummary.Title';
ErrorSummaryBody.displayName = 'ErrorSummary.Body';
ErrorSummaryList.displayName = 'ErrorSummary.List';
ErrorSummaryListItem.displayName = 'ErrorSummary.ListItem';

export {
  ErrorSummary,
  ErrorSummaryTitle,
  ErrorSummaryBody,
  ErrorSummaryList,
  ErrorSummaryListItem,
};
