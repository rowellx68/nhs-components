import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TaskList } from './TaskList';
import { Heading } from '@/components/styles/typography/heading/Heading';

/**
 * https://service-manual.nhs.uk/design-system/components/task-list
 */
const meta: Meta<typeof TaskList> = {
  title: 'Components/Content Presentation/Task List',
  component: TaskList,
  subcomponents: {
    'TaskList.Item': TaskList.Item,
    'TaskList.Item.NameAndHint': TaskList.Item.NameAndHint,
    'TaskList.Item.Status': TaskList.Item.Status,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof TaskList>;

export const Default: Story = {
  render: (args) => (
    <TaskList {...args}>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint href="#">Exercise</TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="completed">
          Completed
        </TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint href="#">
          Personal health
        </TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="completed">
          Completed
        </TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint
          href="#"
          hint="Details of your parents and siblings"
        >
          Family health history
        </TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="in-complete">
          Incomplete
        </TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item variant="with-link">
        <TaskList.Item.NameAndHint href="#">
          Smoking history
        </TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="in-complete">
          Incomplete
        </TaskList.Item.Status>
      </TaskList.Item>
      <TaskList.Item>
        <TaskList.Item.NameAndHint href="#">
          Blood test
        </TaskList.Item.NameAndHint>
        <TaskList.Item.Status variant="cannot-start-yet">
          Cannot start yet
        </TaskList.Item.Status>
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
          <TaskList.Item.NameAndHint href="#">
            Check eligibility
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="completed">
            Completed
          </TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">
            Read declaration
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="in-complete">
            Incomplete
          </TaskList.Item.Status>
        </TaskList.Item>
      </TaskList>

      <Heading size="m" as="h2">
        Prepare application
      </Heading>
      <TaskList {...args}>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">
            Exercise
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="completed">
            Completed
          </TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">
            Personal health
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="completed">
            Completed
          </TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint
            href="#"
            hint="Details of your parents and siblings"
          >
            Family health history
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="in-complete">
            Incomplete
          </TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item variant="with-link">
          <TaskList.Item.NameAndHint href="#">
            Smoking history
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="in-complete">
            Incomplete
          </TaskList.Item.Status>
        </TaskList.Item>
        <TaskList.Item>
          <TaskList.Item.NameAndHint href="#">
            Blood test
          </TaskList.Item.NameAndHint>
          <TaskList.Item.Status variant="cannot-start-yet">
            Cannot start yet
          </TaskList.Item.Status>
        </TaskList.Item>
      </TaskList>
    </div>
  ),
};
