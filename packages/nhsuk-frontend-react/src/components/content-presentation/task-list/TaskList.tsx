'use client';

import clsx from 'clsx';
import React from 'react';

import { Base, BaseProps } from '@/components/core/base/Base';
import { Factory, factory } from '@/internal/factory/factory';
import { polymorphicFactory, PolymorphicFactory } from '@/internal/factory/polymorphic-factory';
import { useIdWithPrefix } from '@/internal/hooks/use-id-with-prefix';
import { AsElementProps, ElementProps } from '@/types/shared';

import { TaskListItemContextProvider, useTaskListItemContext } from './TaskList.context';

export type TaskListProps = ElementProps<'ul'>;

type TaskListFactory = Factory<{
  props: TaskListProps;
  ref: HTMLUListElement;
  staticComponents: {
    Item: typeof TaskListItem;
  };
}>;

const TaskList = factory<TaskListFactory>(({ className, ...props }: TaskListProps, ref) => {
  return <ul ref={ref} className={clsx('nhsuk-task-list', className)} {...props} />;
});

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

const TaskListItemNameAndHint = polymorphicFactory<TaskListItemNameAndHintFactory>(
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

    const { className: containerClassName, ...containerRestProps } = containerProps;
    const { className: hintClassName, ...hintRestProps } = hintProps;

    const descriptionId = `${rowId}-hint`;
    const statusId = `${rowId}-status`;

    const Component = variant === 'with-link' ? component : 'div';
    const componentProps =
      variant === 'with-link'
        ? {
            ref,
            ...props,
            'aria-describedby': clsx({ [descriptionId]: hint }, statusId),
          }
        : {};

    return (
      <div
        className={clsx('nhsuk-task-list__name-and-hint', containerClassName)}
        {...containerRestProps}
      >
        <Base
          as={Component}
          className={variant === 'with-link' ? 'nhsuk-link nhsuk-task-list__link' : undefined}
          {...componentProps}
        >
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
  variant?: 'completed' | 'cannot-start-yet';
} & ElementProps<'div'>;

const TaskListItemStatus = ({
  variant,
  className,
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
        { [`nhsuk-task-list__status--${variant}`]: variant },
        className,
      )}
      {...props}
    >
      {children}
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
