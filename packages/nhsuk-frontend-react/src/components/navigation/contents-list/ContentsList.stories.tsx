import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContentsList } from './ContentsList';

/**
 * Use contents lists to allow users to navigate between related pages, for example about a single condition.
 *
 * https://service-manual.nhs.uk/design-system/components/contents-list
 */
const meta: Meta<typeof ContentsList> = {
  title: 'Components/Navigation/Contents List',
  component: ContentsList,
  subcomponents: {
    'ContentsList.Item': ContentsList.Item,
  } as Record<string, React.ComponentType<any>>,
  argTypes: {
    visuallyHiddenText: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    role: {
      control: {
        type: 'select',
      },
      options: ['navigation'],
      table: {
        type: {
          summary: '"navigation"',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    visuallyHiddenText: 'Contents',
  },
  render: (args) => (
    <ContentsList {...args} aria-label="Pages in this guide">
      <ContentsList.Item href="#" active>
        What is AMD?
      </ContentsList.Item>
      <ContentsList.Item href="#">Symptoms</ContentsList.Item>
      <ContentsList.Item href="#">Getting diagnosed</ContentsList.Item>
      <ContentsList.Item href="#">Treatment</ContentsList.Item>
      <ContentsList.Item href="#">Living with AMD</ContentsList.Item>
    </ContentsList>
  ),
};
