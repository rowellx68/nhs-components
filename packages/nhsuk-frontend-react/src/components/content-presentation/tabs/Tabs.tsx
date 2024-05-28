'use client';

import React, { useImperativeHandle, useEffect, useRef } from 'react';
import { Base, BaseProps } from '@/components/core/base/Base';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps, HeadingLevel } from '@/types/shared';
import clsx from 'clsx';
import initTabs from 'nhsuk-frontend/packages/components/tabs/tabs';
import { Factory, factory } from '@/internal/factory/factory';

export type TabsProps = ElementProps<'div'>;

type TabsFactory = Factory<{
  props: TabsProps;
  ref: HTMLDivElement;
  staticComponents: {
    Title: typeof TabsTitle;
    List: typeof TabsList;
    ListItem: typeof TabsListItem;
    Panel: typeof TabsPanel;
  };
}>;

const Tabs = factory<TabsFactory>(
  ({ children, className, ...props }: TabsProps, ref) => {
    const internalRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => internalRef.current as HTMLDivElement);

    useEffect(() => {
      if (!internalRef.current) {
        return;
      }

      const parentNode = internalRef.current?.parentNode;

      if (!parentNode) {
        return;
      }

      setTimeout(() => {
        initTabs({ scope: parentNode });
      }, 0);
    }, []);

    return (
      <div
        className={clsx('nhsuk-tabs', className)}
        data-module="nhsuk-tabs"
        ref={internalRef}
        {...props}
      >
        {children}
      </div>
    );
  },
);

export type TabsTitleProps = BaseProps & AsElementProps<HeadingLevel>;

type TabsTitleFactory = PolymorphicFactory<{
  props: TabsTitleProps;
  defaultComponent: 'h2';
  defaultRef: HTMLHeadingElement;
}>;

const TabsTitle = polymorphicFactory<TabsTitleFactory>(
  ({ className, children, as: component = 'h2', ...props }, ref) => (
    <Base
      as={component}
      className={clsx('nhsuk-tabs__title', className)}
      {...props}
      ref={ref}
    >
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

export type TabsListItemProps = BaseProps;

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
      as: component = 'a',
      ...props
    }: BaseProps & AsElementProps,
    ref,
  ) => (
    <li className="nhsuk-tabs__list-item">
      <Base
        as={component}
        className={clsx('nhsuk-tabs__tab', className)}
        {...props}
        ref={ref}
      >
        {children}
      </Base>
    </li>
  ),
);

export type TabsPanelProps = { id: string } & ElementProps<'div', 'id'>;

const TabsPanel = ({ children, className, id, ...props }: TabsPanelProps) => (
  <div className={clsx('nhsuk-tabs__panel', className)} id={id} {...props}>
    {children}
  </div>
);

Tabs.displayName = 'Tabs';
TabsTitle.displayName = 'Tabs.Title';
TabsList.displayName = 'Tabs.List';
TabsListItem.displayName = 'Tabs.ListItem';
TabsPanel.displayName = 'Tabs.Panel';

Tabs.Title = TabsTitle;
Tabs.List = TabsList;
Tabs.ListItem = TabsListItem;
Tabs.Panel = TabsPanel;

export { Tabs, TabsTitle, TabsList, TabsListItem, TabsPanel };
