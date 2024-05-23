import React from 'react';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';
import { Base, BaseProps } from '@/components/core/base/Base';
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
import { Factory, factory } from '@/internal/factory/factory';

export type FooterProps = WithVisuallyHiddenTextProps & ElementProps<'footer'>;

type FooterFactory = Factory<{
  props: FooterProps;
  ref: HTMLDivElement;
  staticComponents: {
    Content: typeof FooterContent;
    List: typeof FooterList;
    ListItem: typeof FooterListItem;
    Copyright: typeof FooterCopyright;
  };
}>;

const Footer = factory<FooterFactory>(
  (
    { children, visuallyHiddenText = 'Support links', ...props }: FooterProps,
    ref,
  ) => {
    return (
      <footer role="contentinfo" {...props} ref={ref}>
        <div className="nhsuk-footer-container">
          <div className="nhsuk-width-container">
            <VisuallyHidden as="h2">{visuallyHiddenText}</VisuallyHidden>
            {children}
          </div>
        </div>
      </footer>
    );
  },
);

export type FooterFooterProps = ElementProps<'div'>;

const FooterContent = ({
  className,
  children,
  ...props
}: FooterFooterProps) => {
  return (
    <div className={clsx('nhsuk-footer', className)} {...props}>
      {children}
    </div>
  );
};

export type FooterListProps = { variant?: 'meta-links' } & ElementProps<'ul'>;

const FooterList = ({
  className,
  children,
  variant,
  ...props
}: FooterListProps) => {
  return (
    <ul
      className={clsx(
        'nhsuk-footer__list',
        { 'nhsuk-footer__meta': variant === 'meta-links' },
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  );
};

export type FooterListItemProps = {
  default?: boolean;
} & BaseProps;

type FooterListItemFactory = PolymorphicFactory<{
  props: FooterListItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const FooterListItem = polymorphicFactory<FooterListItemFactory>(
  (
    {
      className,
      children,
      as: component,
      default: _default,
      ...props
    }: FooterListItemProps & AsElementProps,
    ref,
  ) => {
    return (
      <li
        className={clsx('nhsuk-footer__list-item', {
          'nhsuk-footer-default__list-item': _default,
        })}
      >
        <Base<any>
          as={component || 'a'}
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

const FooterCopyright = ({
  className,
  children,
  ...props
}: FooterCopyrightProps) => {
  return (
    <div>
      <p className={clsx('nhsuk-footer__copyright', className)} {...props}>
        &copy; {children}
      </p>
    </div>
  );
};

Footer.displayName = 'Footer';
FooterContent.displayName = 'Footer.Content';
FooterList.displayName = 'Footer.List';
FooterListItem.displayName = 'Footer.ListItem';
FooterCopyright.displayName = 'Footer.Copyright';

Footer.Content = FooterContent;
Footer.List = FooterList;
Footer.ListItem = FooterListItem;
Footer.Copyright = FooterCopyright;

export { Footer, FooterContent, FooterList, FooterListItem, FooterCopyright };
