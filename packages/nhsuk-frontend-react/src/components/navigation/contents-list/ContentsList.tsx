import { Base } from '@/components/core/base/Base';
import { VisuallyHidden } from '@/components/core/visually-hidden/VisuallyHidden';
import { Factory, factory } from '@/internal/factory/factory';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import {
  AsElementProps,
  ElementProps,
  WithVisuallyHiddenTextProps,
} from '@/types/shared';
import clsx from 'clsx';
import React from 'react';

export type ContentsListProps = {
  role?: 'navigation';
  'aria-label': string;
} & ElementProps<'nav', 'role' | 'aria-label'> &
  WithVisuallyHiddenTextProps;

type ContentsListFactory = Factory<{
  props: ContentsListProps;
  ref: HTMLDivElement;
  staticComponents: {
    Item: typeof ContentsListItem;
  };
}>;

const ContentsList = factory<ContentsListFactory>(
  (
    {
      children,
      className,
      role = 'navigation',
      visuallyHiddenText = 'Contents',
      ...props
    },
    ref,
  ) => {
    return (
      <nav
        className={clsx('nhsuk-contents-list', className)}
        role={role}
        {...props}
        ref={ref}
      >
        <VisuallyHidden as="h2">{visuallyHiddenText}</VisuallyHidden>
        <ol className="nhsuk-contents-list__list">{children}</ol>
      </nav>
    );
  },
);

export type ContentsListItemProps = { active?: boolean } & ElementProps<'a'>;

type ContentsListItemFactory = PolymorphicFactory<{
  props: ContentsListItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const ContentsListItem = polymorphicFactory<ContentsListItemFactory>(
  (
    {
      children,
      className,
      active,
      as: component = 'a',
      ...props
    }: ContentsListItemProps & AsElementProps,
    ref,
  ) => {
    const baseProps = {
      as: !active ? component : 'span',
      className: clsx(
        {
          'nhsuk-contents-list__current': active,
          'nhsuk-contents-list__link': !active,
        },
        className,
      ),
      ...props,
    };

    return (
      <li
        className="nhsuk-contents-list__item"
        aria-current={active ? 'page' : undefined}
      >
        <Base<any> {...baseProps} ref={ref}>
          {children}
        </Base>
      </li>
    );
  },
);

ContentsList.displayName = 'ContentsList';
ContentsListItem.displayName = 'ContentsList.Item';

ContentsList.Item = ContentsListItem;

export { ContentsList, ContentsListItem };
