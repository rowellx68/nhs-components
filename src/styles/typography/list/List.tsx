import React from 'react';
import { Base } from '@/internal/base/Base';
import {
  PolymorphicFactory,
  polymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import clsx from 'clsx';
import { ElementProps } from '@/types/shared';

export type ListProps = {
  variant?: 'ordered' | 'unordered';
  border?: boolean;
} & ElementProps<'ul', 'type'>;

type ListFactory = PolymorphicFactory<{
  props: ListProps;
  defaultComponent: 'ul';
  defaultRef: HTMLElement;
  staticComponents: {
    Item: typeof ListItem;
  };
}>;

const List = polymorphicFactory<ListFactory>(
  ({ className, variant, border, ...props }, ref) => {
    const component = variant === 'ordered' ? 'ol' : 'ul';

    return (
      <Base<any>
        as={component}
        className={clsx(
          'nhsuk-list',
          {
            'nhsuk-list--bullet': variant === 'unordered',
            'nhsuk-list--number': variant === 'ordered',
            'nhsuk-list--border': border,
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

const ListItem = ({ ...props }: ListItemProps) => {
  return <li {...props} />;
};

List.displayName = 'List';
ListItem.displayName = 'List.Item';

List.Item = ListItem;

export { List, ListItem };
