import React from 'react';
import { Base } from '@/components/core/base/Base';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import clsx from 'clsx';
import { ElementProps } from '@/types/shared';

export type ListProps = { variant?: 'ordered' | 'unordered' } & ElementProps<
  'ul',
  'type'
>;

type ListFactory = PolymorphicFactory<{
  props: ListProps;
  defaultComponent: 'ul';
  defaultRef: HTMLElement;
  staticComponents: {
    Item: typeof ListItem;
  };
}>;

const List = polymorphicFactory<ListFactory>(
  ({ className, variant, ...props }, ref) => {
    const component = variant === 'ordered' ? 'ol' : 'ul';

    return (
      <Base<any>
        as={component}
        className={clsx(
          'nhsuk-list',
          {
            'nhsuk-list--bullet': variant === 'unordered',
            'nhsuk-list--number': variant === 'ordered',
          },
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

export type ListItemProps = ElementProps<'li'>;

export const ListItem = ({ ...props }: ListItemProps) => {
  return <li {...props} />;
};

List.displayName = 'List';
ListItem.displayName = 'List.Item';

List.Item = ListItem;

export { List };
