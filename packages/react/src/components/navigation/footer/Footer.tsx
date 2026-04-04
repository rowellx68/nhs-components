import clsx from 'clsx';
import React from 'react';

import { Base, BaseProps } from '@/components/core/base/Base';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';
import { Factory, factory } from '@/internal/factory/factory';
import { polymorphicFactory, PolymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { WithVisuallyHiddenTextProps, AsElementProps, ElementProps } from '@/types/shared';

export type FooterProps = ElementProps<'footer'>;

type FooterFactory = Factory<{
  props: FooterProps;
  ref: HTMLElement;
  staticComponents: {
    Meta: typeof FooterMeta;
    Navigation: typeof FooterNavigation;
    NavigationColumn: typeof FooterNavigationColumn;
    List: typeof FooterList;
    ListItem: typeof FooterListItem;
    Copyright: typeof FooterCopyright;
  };
}>;

const Footer = factory<FooterFactory>(({ children, className, ...props }: FooterProps, ref) => {
  return (
    <footer className={clsx('nhsuk-footer', className)} role="contentinfo" {...props} ref={ref}>
      <div className="nhsuk-width-container">{children}</div>
    </footer>
  );
});

export type FooterMetaProps = WithVisuallyHiddenTextProps & ElementProps<'div'>;

const FooterMeta = ({
  className,
  children,
  visuallyHiddenText = 'Support links',
  ...props
}: FooterMetaProps) => (
  <div className={clsx('nhsuk-footer__meta', className)} {...props}>
    {visuallyHiddenText && <VisuallyHidden as="h2">{visuallyHiddenText}</VisuallyHidden>}
    {children}
  </div>
);

export type FooterNavigationProps = ElementProps<'div'>;

const FooterNavigation = ({ className, ...props }: FooterNavigationProps) => (
  <div className={clsx('nhsuk-footer__navigation', 'nhsuk-grid-row', className)} {...props} />
);

export type FooterNavigationColumnProps = ElementProps<'div'>;

const FooterNavigationColumn = ({ className, ...props }: FooterNavigationColumnProps) => (
  <div className={clsx('nhsuk-grid-column-one-quarter', className)} {...props} />
);

export type FooterListProps = ElementProps<'ul'>;

const FooterList = ({ className, ...props }: FooterListProps) => (
  <ul className={clsx('nhsuk-footer__list', className)} {...props} />
);

export type FooterListItemProps = BaseProps;

type FooterListItemFactory = PolymorphicFactory<{
  props: FooterListItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const FooterListItem = polymorphicFactory<FooterListItemFactory>(
  (
    { className, children, as: component = 'a', ...props }: FooterListItemProps & AsElementProps,
    ref,
  ) => {
    return (
      <li className="nhsuk-footer__list-item">
        <Base<any>
          as={component}
          className={clsx('nhsuk-footer__list-item-link', className)}
          {...props}
          ref={ref}
        >
          {children}
        </Base>
      </li>
    );
  },
);

export type FooterCopyrightProps = ElementProps<'p'>;

const FooterCopyright = ({ className, ...props }: FooterCopyrightProps) => (
  <p className={clsx('nhsuk-body-s', className)} {...props} />
);

Footer.displayName = 'Footer';
FooterMeta.displayName = 'Footer.Meta';
FooterNavigation.displayName = 'Footer.Navigation';
FooterNavigationColumn.displayName = 'Footer.NavigationColumn';
FooterList.displayName = 'Footer.List';
FooterListItem.displayName = 'Footer.ListItem';
FooterCopyright.displayName = 'Footer.Copyright';

Footer.Meta = FooterMeta;
Footer.Navigation = FooterNavigation;
Footer.NavigationColumn = FooterNavigationColumn;
Footer.List = FooterList;
Footer.ListItem = FooterListItem;
Footer.Copyright = FooterCopyright;

export {
  Footer,
  FooterMeta,
  FooterNavigation,
  FooterNavigationColumn,
  FooterList,
  FooterListItem,
  FooterCopyright,
};
