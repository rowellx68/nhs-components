import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Tag } from '@/components/content-presentation/tag/Tag';
import { Heading } from '@/components/styles/typography/heading/Heading';

import { TaskList } from './TaskList';

/**
 * Use the task list component to give users a visual overview of a multi-page process broken into tasks.
 *
 * https://service-manual.nhs.uk/design-system/components/task-list
 */
const meta = {
  title: 'Components/Content Presentation/Task List',
  component: TaskList,
  subcomponents: {
    'TaskList.Item': TaskList.Item,
    'TaskList.Item.NameAndHint': TaskList.Item.NameAndHint,
    'TaskList.Item.Status': TaskList.Item.Status,
  } as Record<string, React.ComponentType<any>>,
} satisfies Meta<typeof TaskList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <TaskList {...args}>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint href="#">Exercise</TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="completed">Completed</TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint href="#">Personal health</TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="completed">Completed</TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint href="#" hint="Details of your parents, brothers and sisters">
          Family health history
        </TaskList.Item.NameAndHint>
        <TaskList.Item.Status>
          <Tag colour="blue">Incomplete</Tag>
        </TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint href="#">Smoking history</TaskList.Item.NameAndHint>
        <TaskList.Item.Status>
          <Tag colour="blue">Incomplete</Tag>
        </TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item>
        <TaskList.Item.NameAndHint>Blood test</TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="cannot-start-yet">Cannot start yet</TaskList.Item.Status>
      </TaskList.Item>
    </TaskList>
  ),
};

export const MultipleSections: Story = {
  render: (args) => (
    <div>
      <Heading size="l">Service name</Heading>
      <Heading size="m" as="h2">
        Check before you start
      </Heading>
      <TaskList {...args}>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">Check eligibility</TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="completed">Completed</TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">Read declaration</TaskList.Item.NameAndHint>
          <TaskList.Item.Status>
            <Tag colour="blue">Incomplete</Tag>
          </TaskList.Item.Status>
        </TaskList.Item>
      </TaskList>

      <Heading size="m" as="h2">
        Prepare application
      </Heading>
      <TaskList {...args}>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">Exercise</TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="completed">Completed</TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">Personal health</TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="completed">Completed</TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#" hint="Details of your parents, brothers and sisters">
            Family health history
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status>
            <Tag colour="blue">Incomplete</Tag>
          </TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">Smoking history</TaskList.Item.NameAndHint>
          <TaskList.Item.Status>
            <Tag colour="blue">Incomplete</Tag>
          </TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item>
          <TaskList.Item.NameAndHint>Blood test</TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="cannot-start-yet">Cannot start yet</TaskList.Item.Status>
        </TaskList.Item>
      </TaskList>
    </div>
  ),
};
