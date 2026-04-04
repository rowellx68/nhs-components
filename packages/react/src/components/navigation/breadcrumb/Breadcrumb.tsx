import clsx from 'clsx';
import React from 'react';

import { Base, BaseProps } from '@/components/core/base/Base';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';
import { Factory, factory } from '@/internal/factory/factory';
import { polymorphicFactory, PolymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps, WithVisuallyHiddenTextProps } from '@/types/shared';

export type BreadcrumbProps = ElementProps<'nav'> & {
  variant?: 'reverse';
};

type BreadcrumbFactory = Factory<{
  props: BreadcrumbProps;
  ref: HTMLDivElement;
  staticComponents: {
    List: typeof BreadcrumbList;
    ListItem: typeof BreadcrumbListItem;
    BackLink: typeof BreadcrumbBackLink;
  };
}>;

const Breadcrumb = factory<BreadcrumbFactory>(
  ({ children, className, variant, ...props }: BreadcrumbProps, ref) => {
    return (
      <nav
        className={clsx(
          'nhsuk-breadcrumb',
          { 'nhsuk-breadcrumb--reverse': variant === 'reverse' },
          className,
        )}
        aria-label="Breadcrumb"
        {...props}
        ref={ref}
      >
        {children}
      </nav>
    );
  },
);

export type BreadcrumbListProps = ElementProps<'ol', 'type'>;

const BreadcrumbList = ({ children, className, ...props }: BreadcrumbListProps) => {
  return (
    <ol className={clsx('nhsuk-breadcrumb__list', className)} {...props}>
      {children}
    </ol>
  );
};

export type BreadcrumbListItemProps = BaseProps;

type BaseCrumbListItemFactory = PolymorphicFactory<{
  props: BreadcrumbListItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const BreadcrumbListItem = polymorphicFactory<BaseCrumbListItemFactory>(
  ({ className, as: component = 'a', ...props }: BreadcrumbListItemProps & AsElementProps, ref) => {
    return (
      <li className="nhsuk-breadcrumb__list-item">
        <Base
          as={component}
          className={clsx('nhsuk-breadcrumb__link', className)}
          {...props}
          ref={ref}
        />
      </li>
    );
  },
);
export type BreadcrumbBackLinkProps = BaseProps &
  WithVisuallyHiddenTextProps & {
    variant?: 'reverse';
  };

type BreadcrumbBackLinkFactory = PolymorphicFactory<{
  props: BreadcrumbBackLinkProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const BreadcrumbBackLink = polymorphicFactory<BreadcrumbBackLinkFactory>(
  (
    {
      className,
      children,
      visuallyHiddenText = 'Back to',
      variant,
      as: component = 'a',
      ...props
    }: BreadcrumbBackLinkProps & AsElementProps,
    ref,
  ) => {
    return (
      <Base
        as={component}
        className={clsx(
          'nhsuk-back-link',
          { 'nhsuk-back-link--reverse': variant === 'reverse' },
          className,
        )}
        {...props}
        ref={ref}
      >
        <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>
        {children}
      </Base>
    );
  },
);

Breadcrumb.displayName = 'Breadcrumb';
BreadcrumbList.displayName = 'Breadcrumb.List';
BreadcrumbListItem.displayName = 'Breadcrumb.ListItem';
BreadcrumbBackLink.displayName = 'Breadcrumb.BackLink';

Breadcrumb.List = BreadcrumbList;
Breadcrumb.ListItem = BreadcrumbListItem;
Breadcrumb.BackLink = BreadcrumbBackLink;

export { Breadcrumb, BreadcrumbList, BreadcrumbListItem, BreadcrumbBackLink };
