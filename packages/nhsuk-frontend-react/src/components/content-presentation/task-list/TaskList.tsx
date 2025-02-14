'use client';

import React from 'react';
import clsx from 'clsx';
import { Base, BaseProps } from '@/components/core/base/Base';
import { AsElementProps, ElementProps } from '@/types/shared';
import { Factory, factory } from '@/internal/factory/factory';
import {
  TaskListItemContextProvider,
  useTaskListItemContext,
} from './TaskList.context';
import { useIdWithPrefix } from '@/internal/hooks/use-id-with-prefix';
import {
  polymorphicFactory,
  PolymorphicFactory,
} from '@/internal/factory/polymorphic-factory';
import { Tag, TagProps } from '@/components/content-presentation/tag/Tag';

export type TaskListProps = ElementProps<'ul'>;

type TaskListFactory = Factory<{
  props: TaskListProps;
  ref: HTMLUListElement;
  staticComponents: {
    Item: typeof TaskListItem;
  };
}>;

const TaskList = factory<TaskListFactory>(
  ({ className, ...props }: TaskListProps, ref) => {
    return (
      <ul ref={ref} className={clsx('nhsuk-task-list', className)} {...props} />
    );
  },
);

export type TaskListItemProps = {
  variant?: 'with-link';
} & ElementProps<'li'>;

type TaskListItemFactory = Factory<{
  props: TaskListItemProps;
  ref: HTMLLIElement;
  staticComponents: {
    NameAndHint: typeof TaskListItemNameAndHint;
    Status: typeof TaskListItemStatus;
  };
}>;

const TaskListItem = factory<TaskListItemFactory>(
  ({ variant, className, ...props }: TaskListItemProps, ref) => {
    const rowId = useIdWithPrefix('task-list-item');

    return (
      <TaskListItemContextProvider value={{ variant, rowId }}>
        <li
          ref={ref}
          className={clsx(
            'nhsuk-task-list__item',
            {
              [`nhsuk-task-list__item--${variant}`]: variant,
            },
            className,
          )}
          {...props}
        />
      </TaskListItemContextProvider>
    );
  },
);

export type TaskListItemNameAndHintProps = {
  hint?: React.ReactNode;
  containerProps?: ElementProps<'div'>;
  hintProps?: ElementProps<'div'>;
} & BaseProps &
  AsElementProps<'a'>;

type TaskListItemNameAndHintFactory = PolymorphicFactory<{
  props: TaskListItemNameAndHintProps;
  defaultComponent: 'a';
  defaultRef: HTMLAnchorElement;
}>;

const TaskListItemNameAndHint =
  polymorphicFactory<TaskListItemNameAndHintFactory>(
    (
      {
        children,
        hint,
        as: component = 'a',
        containerProps = {},
        hintProps = {},
        ...props
      }: TaskListItemNameAndHintProps,
      ref,
    ) => {
      const { variant, rowId } = useTaskListItemContext();

      const { className: containerClassName, ...containerRestProps } =
        containerProps;
      const { className: hintClassName, ...hintRestProps } = hintProps;

      const descriptionId = `${rowId}-hint`;
      const statusId = `${rowId}-status`;

      const Component = variant === 'with-link' ? component : 'div';
      const componentProps =
        variant === 'with-link'
          ? {
              ref,
              ...props,
              'aria-described-by': clsx(statusId, { [descriptionId]: hint }),
            }
          : {};

      return (
        <div
          className={clsx(
            'nhsuk-task-list__item-name-and-hint',
            containerClassName,
          )}
          {...containerRestProps}
        >
          <Base as={Component} {...componentProps}>
            {children}
          </Base>
          {hint && (
            <div
              id={descriptionId}
              className={clsx('nhsuk-task-list__hint', hintClassName)}
              {...hintRestProps}
            >
              {hint}
            </div>
          )}
        </div>
      );
    },
  );

export type TaskListItemStatusProps = {
  variant: 'completed' | 'cannot-start-yet' | 'incomplete';
} & Omit<TagProps, 'variant'>;

const TaskListItemStatus = ({
  variant = 'incomplete',
  children,
  ...props
}: TaskListItemStatusProps) => {
  const { rowId } = useTaskListItemContext();

  const statusId = `${rowId}-status`;

  return (
    <div
      id={statusId}
      className={clsx(
        'nhsuk-task-list__status',
        `nhsuk-task-list__status--${variant}`,
      )}
      {...props}
    >
      {variant === 'incomplete' ? (
        <Tag id={statusId} variant="blue" {...props}>
          {children}
        </Tag>
      ) : (
        children
      )}
    </div>
  );
};

TaskList.Item = TaskListItem;
TaskListItem.NameAndHint = TaskListItemNameAndHint;
TaskListItem.Status = TaskListItemStatus;

TaskList.displayName = 'TaskList';
TaskListItem.displayName = 'TaskList.Item';
TaskListItemNameAndHint.displayName = 'TaskList.Item.NameAndHint';
TaskListItemStatus.displayName = 'TaskList.Item.Status';

export { TaskList, TaskListItem, TaskListItemNameAndHint, TaskListItemStatus };
