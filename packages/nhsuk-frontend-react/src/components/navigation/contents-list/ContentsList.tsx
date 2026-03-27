import clsx from 'clsx';
import React from 'react';

import { Base, BaseProps } from '@/components/core/base/Base';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';
import { Factory, factory } from '@/internal/factory/factory';
import { PolymorphicFactory, polymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps, WithVisuallyHiddenTextProps } from '@/types/shared';

export type ContentsListProps = {
  role?: 'navigation';
  'aria-label': string;
} & ElementProps<'nav', 'role' | 'aria-label'> &
  WithVisuallyHiddenTextProps;

type ContentsListFactory = Factory<{
  props: ContentsListProps;
  ref: HTMLElement;
  staticComponents: {
    List: typeof ContentsListList;
    Item: typeof ContentsListItem;
    Link: typeof ContentsListLink;
  };
}>;

const ContentsList = factory<ContentsListFactory>(
  (
    { children, className, role = 'navigation', visuallyHiddenText = 'Contents', ...props },
    ref,
  ) => {
    return (
      <nav className={clsx('nhsuk-contents-list', className)} role={role} {...props} ref={ref}>
        <VisuallyHidden as="h2">{visuallyHiddenText}</VisuallyHidden>
        <ContentsListList>{children}</ContentsListList>
      </nav>
    );
  },
);

export type ContentsListListProps = ElementProps<'ol'>;

const ContentsListList = ({ className, ...props }: ContentsListListProps) => (
  <ol className={clsx('nhsuk-contents-list__list', className)} {...props} />
);

export type ContentsListItemProps = {
  active?: boolean;
} & ElementProps<'li'>;

const ContentsListItem = ({ active, className, ...props }: ContentsListItemProps) => (
  <li
    className={clsx('nhsuk-contents-list__item', className)}
    aria-current={active ? 'page' : undefined}
    {...props}
  />
);

export type ContentsListLinkProps = {
  active?: boolean;
} & BaseProps &
  AsElementProps<'a'>;

type ContentsListLinkFactory = PolymorphicFactory<{
  props: ContentsListLinkProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const ContentsListLink = polymorphicFactory<ContentsListLinkFactory>(
  (
    {
      children,
      className,
      active,
      as: component = 'a',
      ...props
    }: ContentsListLinkProps & AsElementProps,
    ref,
  ) => (
    <Base
      as={active ? 'span' : component}
      className={clsx(
        {
          'nhsuk-contents-list__current': active,
          'nhsuk-contents-list__link': !active,
        },
        className,
      )}
      {...props}
      ref={ref}
    >
      {children}
    </Base>
  ),
);

ContentsList.displayName = 'ContentsList';
ContentsListList.displayName = 'ContentsList.List';
ContentsListItem.displayName = 'ContentsList.Item';
ContentsListLink.displayName = 'ContentsList.Link';

ContentsList.List = ContentsListList;
ContentsList.Item = ContentsListItem;
ContentsList.Link = ContentsListLink;

export { ContentsList, ContentsListList, ContentsListItem, ContentsListLink };
