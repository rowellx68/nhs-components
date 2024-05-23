import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContentsList } from './ContentsList';

/**
 * This is a polymorphic component that renders an anchor element by default. You can change the element type by using the `as` prop.
 */
const meta: Meta<typeof ContentsList.Item> = {
  title: 'Components/Navigation/Contents List/ContentsList.Item',
  component: ContentsList.Item,
  tags: ['polymorphic'],
  argTypes: {
    active: {
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    active: true,
    href: '#',
    children: 'What is AMD?',
  },
  render: (args) => (
    <ContentsList aria-label="Pages in this guide">
      <ContentsList.Item {...args} />
      <ContentsList.Item href="#">Symptoms</ContentsList.Item>
      <ContentsList.Item href="#">Getting diagnosed</ContentsList.Item>
      <ContentsList.Item href="#">Treatment</ContentsList.Item>
      <ContentsList.Item href="#">Living with AMD</ContentsList.Item>
    </ContentsList>
  ),
};
