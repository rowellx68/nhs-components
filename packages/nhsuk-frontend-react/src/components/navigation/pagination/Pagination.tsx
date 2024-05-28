import React from 'react';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';
import { Base } from '@/components/core/base/Base';
import {
  polymorphicFactory,
  PolymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import clsx from 'clsx';
import {
  WithVisuallyHiddenTextProps,
  AsElementProps,
  ElementProps,
} from '@/types/shared';
import { ArrowLeftIcon } from '@/icons/arrow-left/ArrowLeft';
import { ArrowRightIcon } from '@/icons/arrow-right/ArrowRight';
import { factory, Factory } from '@/internal/factory/factory';

export type PaginationProps = ElementProps<'nav'>;

type PaginationFactory = Factory<{
  props: PaginationProps;
  ref: HTMLDivElement;
  staticComponents: {
    Previous: typeof PaginationPrevious;
    Next: typeof PaginationNext;
  };
}>;

const Pagination = factory<PaginationFactory>(
  ({ children, className, ...props }: PaginationProps, ref) => {
    return (
      <nav
        className={clsx('nhsuk-pagination', className)}
        role="navigation"
        aria-label="Pagination"
        {...props}
        ref={ref}
      >
        <ul className="nhsuk-list nhsuk-pagination__list">{children}</ul>
      </nav>
    );
  },
);

export type PaginationItemProps = {
  className?: string;
  title?: string;
  pageTitle: string;
} & WithVisuallyHiddenTextProps;

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
      visuallyHiddenText = ':',
      pageTitle,
      as: component = 'a',
      ...props
    }: PaginationItemProps & AsElementProps,
    ref,
  ) => {
    return (
      <li className="nhsuk-pagination-item--previous">
        <Base
          as={component}
          className={clsx(
            'nhsuk-pagination__link nhsuk-pagination__link--previous',
            className,
          )}
          {...props}
          ref={ref}
        >
          <span className="nhsuk-pagination__title">{title}</span>
          <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>
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
      visuallyHiddenText = ':',
      pageTitle,
      as: component = 'a',
      ...props
    }: PaginationItemProps & AsElementProps,
    ref,
  ) => {
    return (
      <li className="nhsuk-pagination-item--next">
        <Base
          as={component}
          className={clsx(
            'nhsuk-pagination__link nhsuk-pagination__link--next',
            className,
          )}
          {...props}
          ref={ref}
        >
          <span className="nhsuk-pagination__title">{title}</span>
          <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>
          <span className="nhsuk-pagination__page">{pageTitle}</span>
          <ArrowRightIcon />
        </Base>
      </li>
    );
  },
);

Pagination.displayName = 'Pagination';
PaginationPrevious.displayName = 'Pagination.Previous';
PaginationNext.displayName = 'Pagination.Next';

Pagination.Next = PaginationNext;
Pagination.Previous = PaginationPrevious;

export { Pagination, PaginationPrevious, PaginationNext };
