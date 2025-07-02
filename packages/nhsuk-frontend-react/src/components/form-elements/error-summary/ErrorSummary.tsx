'use client';

import React, { useRef, useImperativeHandle, useEffect } from 'react';
import { Factory, factory } from '@/internal/factory/factory';
import { useIdWithPrefix } from '@/internal/hooks/use-id-with-prefix';
import { AsElementProps, ElementProps } from '@/types/shared';
import clsx from 'clsx';
import {
  Heading,
  HeadingProps,
} from '@/components/styles/typography/heading/Heading';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import {
  ErrorSummaryContextProvider,
  useErrorSummaryContext,
} from './ErrorSummary.context';
import { List, ListProps } from '@/components/styles/typography/list/List';
import { Base } from '@/components/core/base/Base';
import { initErrorSummary } from 'nhsuk-frontend';

export type ErrorSummaryProps = ElementProps<'div', 'role' | 'tabindex'> & {
  focusOnPageLoad?: boolean;
};

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
  ({ className, focusOnPageLoad = false, ...props }, ref) => {
    useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);
    const internalRef = useRef<HTMLDivElement>(null);

    const labelId = useIdWithPrefix('error-summary');

    useEffect(() => {
      if (!internalRef.current) {
        return;
      }

      const parent = internalRef.current.parentElement;

      if (!parent) {
        return;
      }

      initErrorSummary({ scope: parent, focusOnPageLoad: focusOnPageLoad });
    }, [internalRef]);

    return (
      <ErrorSummaryContextProvider value={{ labelId }}>
        <div
          className={clsx('nhsuk-error-summary', className)}
          role="alert"
          aria-labelledby={labelId}
          tabIndex={-1}
          ref={internalRef}
          {...props}
        />
      </ErrorSummaryContextProvider>
    );
  },
);

export type ErrorSummaryTitleProps = Omit<HeadingProps, 'id'>;

type ErrorSummaryTitleFactory = PolymorphicFactory<{
  props: ErrorSummaryTitleProps;
  defaultComponent: 'h2';
  defaultRef: HTMLHeadingElement;
}>;

const ErrorSummaryTitle = polymorphicFactory<ErrorSummaryTitleFactory>(
  ({ as: component = 'h2', className, ...props }, ref) => {
    const { labelId } = useErrorSummaryContext();
    return (
      <Heading
        as={component}
        className={clsx('nhsuk-error-summary__title', className)}
        ref={ref}
        {...props}
        id={labelId}
      />
    );
  },
);

export type ErrorSummaryBodyProps = ElementProps<'div'>;

const ErrorSummaryBody = ({ className, ...props }: ErrorSummaryBodyProps) => {
  return (
    <div className={clsx('nhsuk-error-summary__body', className)} {...props} />
  );
};

export type ErrorSummaryListProps = Omit<ListProps, 'role'>;

const ErrorSummaryList = ({ className, ...props }: ErrorSummaryListProps) => {
  return (
    <List
      className={clsx('nhsuk-error-summary__list', className)}
      role="list"
      {...props}
    />
  );
};

export type ErrorSummaryListItemProps = ElementProps<'a'>;

type ErrorSummaryListItemFactory = PolymorphicFactory<{
  props: ErrorSummaryListItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const ErrorSummaryListItem = polymorphicFactory<ErrorSummaryListItemFactory>(
  (
    {
      as: component = 'a',
      ...props
    }: ErrorSummaryListItemProps & AsElementProps,
    ref,
  ) => {
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
