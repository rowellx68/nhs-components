import clsx from 'clsx';
import React from 'react';

import { Base, BaseProps } from '@/components/core/base/Base';
import { PolymorphicFactory, polymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps, HeadingLevel } from '@/types/shared';

import { Tabs as TabsRoot } from './TabsRoot';

export type { TabsProps } from './TabsRoot';

export type TabsTitleProps = BaseProps & AsElementProps<HeadingLevel>;

type TabsTitleFactory = PolymorphicFactory<{
  props: TabsTitleProps;
  defaultComponent: 'h2';
  defaultRef: HTMLHeadingElement;
}>;

const TabsTitle = polymorphicFactory<TabsTitleFactory>(
  ({ className, children, as: component = 'h2', ...props }, ref) => (
    <Base as={component} className={clsx('nhsuk-tabs__title', className)} {...props} ref={ref}>
      {children}
    </Base>
  ),
);

export type TabsListProps = ElementProps<'ul'>;

const TabsList = ({ children, className, ...props }: TabsListProps) => (
  <ul className={clsx('nhsuk-tabs__list', className)} {...props}>
    {children}
  </ul>
);

export type TabsListItemProps = {
  selected?: boolean;
} & BaseProps;

type TabsListItemFactory = PolymorphicFactory<{
  props: TabsListItemProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const TabsListItem = polymorphicFactory<TabsListItemFactory>(
  (
    {
      className,
      children,
      selected,
      as: component = 'a',
      ...props
    }: TabsListItemProps & AsElementProps,
    ref,
  ) => (
    <li
      className={clsx('nhsuk-tabs__list-item', {
        'nhsuk-tabs__list-item--selected': selected,
      })}
    >
      <Base as={component} className={clsx('nhsuk-tabs__tab', className)} {...props} ref={ref}>
        {children}
      </Base>
    </li>
  ),
);

export type TabsPanelProps = { id: string; hidden?: boolean } & ElementProps<'div', 'id'>;

const TabsPanel = ({ children, className, id, hidden, ...props }: TabsPanelProps) => (
  <div
    className={clsx('nhsuk-tabs__panel', { 'nhsuk-tabs__panel--hidden': hidden }, className)}
    id={id}
    {...props}
  >
    {children}
  </div>
);

const Tabs = Object.assign(TabsRoot, {
  Title: TabsTitle,
  List: TabsList,
  ListItem: TabsListItem,
  Panel: TabsPanel,
});

Tabs.displayName = 'Tabs';
TabsTitle.displayName = 'Tabs.Title';
TabsList.displayName = 'Tabs.List';
TabsListItem.displayName = 'Tabs.ListItem';
TabsPanel.displayName = 'Tabs.Panel';

export { Tabs, TabsTitle, TabsList, TabsListItem, TabsPanel };
