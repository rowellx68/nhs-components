'use client';

import React from 'react';
import {
  DoDontListContextProvider,
  useDoDontListContext,
} from './DoDontList.context';
import clsx from 'clsx';
import { Base, BaseProps } from '@/components/core/base/Base';
import { AsElementProps, ElementProps, HeadingLevel } from '@/types/shared';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { TickIcon } from '@/icons/tick/Tick';
import { CrossIcon } from '@/icons/cross/Cross';
import { Factory, factory } from '@/internal/factory/factory';

export type DoDontListProps = {
  variant: 'do' | 'dont';
} & ElementProps<'div'>;

type DoDontListFactory = Factory<{
  props: DoDontListProps;
  ref: HTMLDivElement;
  staticComponents: {
    Label: typeof DoDontListLabel;
    List: typeof DoDontListList;
    Item: typeof DoDontListItem;
  };
}>;

const DoDontList = factory<DoDontListFactory>(
  ({ variant, className, ...props }: DoDontListProps, ref) => {
    return (
      <DoDontListContextProvider value={{ variant }}>
        <div
          ref={ref}
          className={clsx('nhsuk-do-dont-list', className)}
          {...props}
        />
      </DoDontListContextProvider>
    );
  },
);

export type DoDontListLabelProps = BaseProps & AsElementProps<HeadingLevel>;

type DoDontListLabelFactory = PolymorphicFactory<{
  props: DoDontListLabelProps;
  defaultComponent: 'h2';
  defaultRef: HTMLHeadingElement;
}>;

const DoDontListLabel = polymorphicFactory<DoDontListLabelFactory>(
  (
    { className, as: component = 'h2', ...props }: DoDontListLabelProps,
    ref,
  ) => {
    return (
      <Base
        as={component}
        className={clsx('nhsuk-do-dont-list__label', className)}
        {...props}
        ref={ref}
      />
    );
  },
);

export type DoDontListListProps = ElementProps<'ul'>;

const DoDontListList = ({
  className,
  role = 'list',
  ...props
}: DoDontListListProps) => {
  const { variant } = useDoDontListContext();

  return (
    <ul
      className={clsx(
        'nhsuk-list',
        {
          'nhsuk-list--tick': variant === 'do',
          'nhsuk-list--cross': variant === 'dont',
        },
        className,
      )}
      role={role}
      {...props}
    />
  );
};

export type DoDontListItemProps = ElementProps<'li'>;

const DoDontListItem = ({
  className,
  children,
  ...props
}: DoDontListItemProps) => {
  const { variant } = useDoDontListContext();

  return (
    <li className={className} {...props}>
      {variant === 'do' && <TickIcon />}
      {variant === 'dont' && <CrossIcon />}
      {children}
    </li>
  );
};

DoDontList.displayName = 'DoDontList';
DoDontListLabel.displayName = 'DoDontList.Label';
DoDontListList.displayName = 'DoDontList.List';
DoDontListItem.displayName = 'DoDontList.Item';

DoDontList.Label = DoDontListLabel;
DoDontList.List = DoDontListList;
DoDontList.Item = DoDontListItem;

export { DoDontList, DoDontListLabel, DoDontListList, DoDontListItem };
