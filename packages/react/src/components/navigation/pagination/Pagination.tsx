import clsx from 'clsx';
import React from 'react';

import { Base } from '@/components/core/base/Base';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';
import { ArrowLeftIcon } from '@/icons/arrow-left/ArrowLeft';
import { ArrowRightIcon } from '@/icons/arrow-right/ArrowRight';
import { factory, Factory } from '@/internal/factory/factory';
import { polymorphicFactory, PolymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps } from '@/types/shared';

export type PaginationProps = {
  numbered?: boolean;
} & ElementProps<'nav'>;

type PaginationFactory = Factory<{
  props: PaginationProps;
  ref: HTMLElement;
  staticComponents: {
    Previous: typeof PaginationPrevious;
    Next: typeof PaginationNext;
    List: typeof PaginationList;
    Item: typeof PaginationItem;
    Ellipsis: typeof PaginationEllipsis;
  };
}>;

const Pagination = factory<PaginationFactory>(
  ({ children, className, numbered, ...props }: PaginationProps, ref) => {
    return (
      <nav
        className={clsx('nhsuk-pagination', { 'nhsuk-pagination--numbered': numbered }, className)}
        role="navigation"
        aria-label="Pagination"
        {...props}
        ref={ref}
      >
        {numbered ? children : <ul className="nhsuk-list nhsuk-pagination__list">{children}</ul>}
      </nav>
    );
  },
);

export type PaginationItemProps = {
  title?: string;
  titleSuffix?: string;
  pageTitle?: string;
  numbered?: boolean;
} & ElementProps<'a'>;

type PaginationItemFactory = PolymorphicFactory<{
  props: PaginationItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const PaginationPrevious = polymorphicFactory<PaginationItemFactory>(
  (
    {
      className,
      title = 'Previous',
      titleSuffix = ' page',
      pageTitle,
      numbered,
      as: component = 'a',
      ...props
    }: PaginationItemProps & AsElementProps,
    ref,
  ) => {
    const titleSpan = (
      <span className="nhsuk-pagination__title">
        {title}
        {titleSuffix && <VisuallyHidden>{titleSuffix}</VisuallyHidden>}
      </span>
    );

    if (numbered) {
      return (
        <Base
          as={component}
          className={clsx('nhsuk-pagination__previous', className)}
          rel="prev"
          {...props}
          ref={ref}
        >
          <ArrowLeftIcon />
          {titleSpan}
        </Base>
      );
    }

    return (
      <li className="nhsuk-pagination-item--previous">
        <Base
          as={component}
          className={clsx('nhsuk-pagination__link nhsuk-pagination__link--prev', className)}
          rel="prev"
          {...props}
          ref={ref}
        >
          {titleSpan}
          <VisuallyHidden>:</VisuallyHidden>
          <span className="nhsuk-pagination__page">{pageTitle}</span>
          <ArrowLeftIcon />
        </Base>
      </li>
    );
  },
);

const PaginationNext = polymorphicFactory<PaginationItemFactory>(
  (
    {
      className,
      title = 'Next',
      titleSuffix = ' page',
      pageTitle,
      numbered,
      as: component = 'a',
      ...props
    }: PaginationItemProps & AsElementProps,
    ref,
  ) => {
    const titleSpan = (
      <span className="nhsuk-pagination__title">
        {title}
        {titleSuffix && <VisuallyHidden>{titleSuffix}</VisuallyHidden>}
      </span>
    );

    if (numbered) {
      return (
        <Base
          as={component}
          className={clsx('nhsuk-pagination__next', className)}
          rel="next"
          {...props}
          ref={ref}
        >
          {titleSpan}
          <ArrowRightIcon />
        </Base>
      );
    }

    return (
      <li className="nhsuk-pagination-item--next">
        <Base
          as={component}
          className={clsx('nhsuk-pagination__link nhsuk-pagination__link--next', className)}
          rel="next"
          {...props}
          ref={ref}
        >
          {titleSpan}
          <VisuallyHidden>:</VisuallyHidden>
          <span className="nhsuk-pagination__page">{pageTitle}</span>
          <ArrowRightIcon />
        </Base>
      </li>
    );
  },
);

export type PaginationListProps = ElementProps<'ul'>;

const PaginationList = ({ className, ...props }: PaginationListProps) => (
  <ul className={clsx('nhsuk-pagination__list', className)} {...props} />
);

export type PaginationPageItemProps = {
  page: number;
  current?: boolean;
} & ElementProps<'a'>;

type PaginationPageItemFactory = PolymorphicFactory<{
  props: PaginationPageItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const PaginationItem = polymorphicFactory<PaginationPageItemFactory>(
  (
    {
      page,
      current,
      className,
      as: component = 'a',
      ...props
    }: PaginationPageItemProps & AsElementProps,
    ref,
  ) => (
    <li
      className={clsx('nhsuk-pagination__item', {
        'nhsuk-pagination__item--current': current,
      })}
    >
      <Base
        as={component}
        className={clsx('nhsuk-pagination__link', className)}
        aria-label={`Page ${page}`}
        aria-current={current ? 'page' : undefined}
        {...props}
        ref={ref}
      >
        {page}
      </Base>
    </li>
  ),
);

export type PaginationEllipsisProps = ElementProps<'li'>;

const PaginationEllipsis = ({ className, ...props }: PaginationEllipsisProps) => (
  <li
    className={clsx('nhsuk-pagination__item nhsuk-pagination__item--ellipsis', className)}
    {...props}
  >
    &ctdot;
  </li>
);

Pagination.displayName = 'Pagination';
PaginationPrevious.displayName = 'Pagination.Previous';
PaginationNext.displayName = 'Pagination.Next';
PaginationList.displayName = 'Pagination.List';
PaginationItem.displayName = 'Pagination.Item';
PaginationEllipsis.displayName = 'Pagination.Ellipsis';

Pagination.Previous = PaginationPrevious;
Pagination.Next = PaginationNext;
Pagination.List = PaginationList;
Pagination.Item = PaginationItem;
Pagination.Ellipsis = PaginationEllipsis;

export {
  Pagination,
  PaginationPrevious,
  PaginationNext,
  PaginationList,
  PaginationItem,
  PaginationEllipsis,
};
