import React from 'react';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';
import { Base, BaseProps } from '@/components/core/base/Base';
import {
  polymorphicFactory,
  PolymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import clsx from 'clsx';
import {
  AsElementProps,
  ElementProps,
  WithVisuallyHiddenTextProps,
} from '@/types/shared';
import { Factory, factory } from '@/internal/factory/factory';

export type BreadcrumbProps = ElementProps<'nav'>;

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
  ({ children, className, ...props }: BreadcrumbProps, ref) => {
    return (
      <nav
        className={clsx('nhsuk-breadcrumb', className)}
        aria-label="Breadcrumb"
        {...props}
        ref={ref}
      >
        <div className="nhsuk-width-container">{children}</div>
      </nav>
    );
  },
);

export type BreadcrumbListProps = ElementProps<'ol', 'type'>;

const BreadcrumbList = ({
  children,
  className,
  ...props
}: BreadcrumbListProps) => {
  return (
    <ol className={clsx('nhsuk-breadcrumb__list', className)} {...props}>
      {children}
    </ol>
  );
};

export type BreadcrumbListItemProps = BaseProps;

type BaseCrumpListItemFactory = PolymorphicFactory<{
  props: BreadcrumbListItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const BreadcrumbListItem = polymorphicFactory<BaseCrumpListItemFactory>(
  (
    {
      className,
      as: component = 'a',
      ...props
    }: BreadcrumbListItemProps & AsElementProps,
    ref,
  ) => {
    return (
      <li className="nhsuk-breadcrumb__item">
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
export type BreadcrumbBackLinkProps = BaseProps & WithVisuallyHiddenTextProps;

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
      visuallyHiddenText = 'Back to &nbsp;',
      as: component = 'a',
      ...props
    }: BreadcrumbBackLinkProps & AsElementProps,
    ref,
  ) => {
    return (
      <p className="nhsuk-breadcrumb__back">
        <Base
          as={component}
          className={clsx('nhsuk-breadcrumb__backlink', className)}
          {...props}
          ref={ref}
        >
          <VisuallyHidden>{visuallyHiddenText}</VisuallyHidden>
          {children}
        </Base>
      </p>
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
