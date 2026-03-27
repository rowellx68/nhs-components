'use client';

import clsx from 'clsx';
import { ErrorSummary as NhsErrorSummary } from 'nhsuk-frontend';
import React, { useRef, useImperativeHandle, useEffect } from 'react';

import { Base } from '@/components/core/base/Base';
import { Heading, HeadingProps } from '@/components/styles/typography/heading/Heading';
import { List, ListProps } from '@/components/styles/typography/list/List';
import { Factory, factory } from '@/internal/factory/factory';
import { PolymorphicFactory, polymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps } from '@/types/shared';

export type ErrorSummaryProps = {
  disableAutoFocus?: boolean;
} & ElementProps<'div'>;

type ErrorSummaryFactory = Factory<{
  props: ErrorSummaryProps;
  ref: HTMLDivElement;
  staticComponents: {
    Title: typeof ErrorSummaryTitle;
    Body: typeof ErrorSummaryBody;
    List: typeof ErrorSummaryList;
    ListItem: typeof ErrorSummaryListItem;
  };
}>;

const ErrorSummary = factory<ErrorSummaryFactory>(
  ({ className, disableAutoFocus, children, ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

    useEffect(() => {
      if (!internalRef.current) {
        return;
      }

      new NhsErrorSummary(internalRef.current);

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

ErrorSummary.displayName = 'ErrorSummary';
ErrorSummaryTitle.displayName = 'ErrorSummary.Title';
ErrorSummaryBody.displayName = 'ErrorSummary.Body';
ErrorSummaryList.displayName = 'ErrorSummary.List';
ErrorSummaryListItem.displayName = 'ErrorSummary.ListItem';

ErrorSummary.Title = ErrorSummaryTitle;
ErrorSummary.Body = ErrorSummaryBody;
ErrorSummary.List = ErrorSummaryList;
ErrorSummary.ListItem = ErrorSummaryListItem;

export {
  ErrorSummary,
  ErrorSummaryTitle,
  ErrorSummaryBody,
  ErrorSummaryList,
  ErrorSummaryListItem,
};
