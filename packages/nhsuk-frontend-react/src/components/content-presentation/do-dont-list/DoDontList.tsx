import clsx from 'clsx';
import React from 'react';

import { Base, BaseProps } from '@/components/core/base/Base';
import { CrossIcon } from '@/icons/cross/Cross';
import { TickIcon } from '@/icons/tick/Tick';
import { Factory, factory } from '@/internal/factory/factory';
import { PolymorphicFactory, polymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { AsElementProps, ElementProps, HeadingLevel } from '@/types/shared';

export type DoDontListProps = ElementProps<'div'>;

type DoDontListFactory = Factory<{
  props: DoDontListProps;
  ref: HTMLDivElement;
  staticComponents: {
    Title: typeof DoDontListTitle;
    List: typeof DoDontListList;
    Item: typeof DoDontListItem;
  };
}>;

const DoDontList = factory<DoDontListFactory>(
  ({ className, children, ...props }: DoDontListProps, ref) => {
    return (
      <div ref={ref} className={clsx('nhsuk-card nhsuk-card--feature', className)} {...props}>
        <div className="nhsuk-card__content">{children}</div>
      </div>
    );
  },
);

export type DoDontListTitleProps = BaseProps & AsElementProps<HeadingLevel>;

type DoDontListTitleFactory = PolymorphicFactory<{
  props: DoDontListTitleProps;
  defaultComponent: 'h2';
  defaultRef: HTMLHeadingElement;
}>;

const DoDontListTitle = polymorphicFactory<DoDontListTitleFactory>(
  ({ className, as: component = 'h2', ...props }: DoDontListTitleProps, ref) => {
    return (
      <Base
        as={component}
        className={clsx('nhsuk-card__heading', className)}
        {...props}
        ref={ref}
      />
    );
  },
);

export type DoDontListListProps = {
  variant: 'do' | 'dont';
} & ElementProps<'ul'>;

const DoDontListList = ({ variant, className, role = 'list', ...props }: DoDontListListProps) => {
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

export type DoDontListItemProps = {
  variant: 'do' | 'dont';
} & ElementProps<'li'>;

const DoDontListItem = ({ variant, className, children, ...props }: DoDontListItemProps) => {
  return (
    <li className={className} {...props}>
      {variant === 'do' && <TickIcon />}
      {variant === 'dont' && <CrossIcon />}
      {children}
    </li>
  );
};

DoDontList.displayName = 'DoDontList';
DoDontListTitle.displayName = 'DoDontList.Title';
DoDontListList.displayName = 'DoDontList.List';
DoDontListItem.displayName = 'DoDontList.Item';

DoDontList.Title = DoDontListTitle;
DoDontList.List = DoDontListList;
DoDontList.Item = DoDontListItem;

export { DoDontList, DoDontListTitle, DoDontListList, DoDontListItem };
