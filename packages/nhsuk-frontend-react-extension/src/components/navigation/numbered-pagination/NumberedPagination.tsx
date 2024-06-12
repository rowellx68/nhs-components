import clsx from 'clsx';
import React from 'react';
import { AsElementProps, ElementProps, Base } from 'nhsuk-frontend-react';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from 'nhsuk-frontend-react/internal/factory/polymorphic-factory';
import {
  Factory,
  factory,
} from 'nhsuk-frontend-react/internal/factory/factory';

export type NumberedPaginationPreviousProps = ElementProps<'a'> &
  AsElementProps;

type NumberedPaginationPreviousFactory = PolymorphicFactory<{
  props: NumberedPaginationPreviousProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const NumberedPaginationPrevious =
  polymorphicFactory<NumberedPaginationPreviousFactory>(
    (
      { className, children, as: component = 'a', ...props },
      ref,
    ): JSX.Element => {
      return (
        <div className="nhsuk-numbered-pagination__prev">
          <Base
            as={component}
            className={clsx(
              'nhsuk-link nhsuk-numbered-pagination__link',
              className,
            )}
            {...props}
            ref={ref}
          >
            <svg
              className="nhsuk-numbered-pagination__icon nhsuk-numbered-pagination__icon--prev"
              xmlns="http://www.w3.org/2000/svg"
              height="13"
              width="15"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 15 13"
            >
              <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
            </svg>
            <span className="nhsuk-numbered-pagination__link-title">
              {children}
            </span>
          </Base>
        </div>
      );
    },
  );

export type NumberedPaginationNextProps = ElementProps<'a'> & AsElementProps;

type NumberedPaginationNextFactory = PolymorphicFactory<{
  props: NumberedPaginationNextProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const NumberedPaginationNext =
  polymorphicFactory<NumberedPaginationNextFactory>(
    ({ className, children, as: component = 'a', ...props }, ref) => {
      return (
        <div className="nhsuk-numbered-pagination__next">
          <Base
            as={component}
            className={clsx(
              'nhsuk-link nhsuk-numbered-pagination__link',
              className,
            )}
            ref={ref}
            {...props}
          >
            <span className="nhsuk-numbered-pagination__link-title">
              {children}
            </span>
            <svg
              className="nhsuk-numbered-pagination__icon nhsuk-numbered-pagination__icon--next"
              xmlns="http://www.w3.org/2000/svg"
              height="13"
              width="15"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 15 13"
            >
              <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z"></path>
            </svg>
          </Base>
        </div>
      );
    },
  );

export type NumberedPaginationListProps = ElementProps<'ul'>;

const NumberedPaginationList = ({
  className,
  ...props
}: NumberedPaginationListProps) => {
  return (
    <ul
      className={clsx('nhsuk-numbered-pagination__list', className)}
      {...props}
    />
  );
};

export type NumberedPaginationListItemProps = (
  | {
      ellipses?: undefined;
      current?: undefined;
    }
  | { ellipses?: undefined; current: boolean }
  | { ellipses: boolean; current?: undefined }
) &
  ElementProps<'a'>;

type NumberedPaginationListItemFactory = PolymorphicFactory<{
  props: NumberedPaginationListItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const NumberedPaginationListItem =
  polymorphicFactory<NumberedPaginationListItemFactory>(
    (
      {
        className,
        children,
        ellipses,
        current,
        as: component = 'a',
        ...props
      }: NumberedPaginationListItemProps & AsElementProps,
      ref,
    ) => {
      return (
        <li
          className={clsx('nhsuk-numbered-pagination__item', {
            'nhsuk-numbered-pagination__item--ellipses': ellipses,
            'nhsuk-numbered-pagination__item--current': current,
          })}
        >
          {ellipses ? (
            '⋯'
          ) : (
            <Base
              as={component}
              className={clsx(
                'nhsuk-link nhsuk-numbered-pagination__link',
                className,
              )}
              {...props}
              aria-label={`Page ${children}`}
              aria-current={current ? 'page' : undefined}
            >
              {children}
            </Base>
          )}
        </li>
      );
    },
  );

export type NumberPaginationProps = ElementProps<'nav'>;

type NumberPaginationFactory = Factory<{
  props: NumberPaginationProps;
  ref: HTMLDivElement;
  staticComponents: {
    Previous: typeof NumberedPaginationPrevious;
    Next: typeof NumberedPaginationNext;
    List: typeof NumberedPaginationList;
    ListItem: typeof NumberedPaginationListItem;
  };
}>;

const NumberedPagination = factory<NumberPaginationFactory>(
  (
    {
      className,
      children,
      role = 'navigation',
      'aria-label': ariaLabel = 'results',
      ...props
    },
    ref,
  ) => {
    return (
      <nav
        className={clsx('nhsuk-numbered-pagination', className)}
        role={role}
        aria-label={ariaLabel}
        {...props}
        ref={ref}
      >
        {children}
      </nav>
    );
  },
);

NumberedPagination.List = NumberedPaginationList;
NumberedPagination.ListItem = NumberedPaginationListItem;
NumberedPagination.Next = NumberedPaginationNext;
NumberedPagination.Previous = NumberedPaginationPrevious;

NumberedPagination.displayName = 'NumberedPagination';
NumberedPaginationList.displayName = 'NumberedPagination.List';
NumberedPaginationListItem.displayName = 'NumberedPagination.ListItem';
NumberedPaginationPrevious.displayName = 'NumberedPagination.Previous';
NumberedPaginationNext.displayName = 'NumberedPagination.Next';

export {
  NumberedPagination,
  NumberedPaginationList,
  NumberedPaginationListItem,
  NumberedPaginationNext,
  NumberedPaginationPrevious,
};
