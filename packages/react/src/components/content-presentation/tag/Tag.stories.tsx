import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Tag, TagColour } from './Tag';

/**
 * Use the tag component to show the status of something, such as a task in a task list.
 *
 * https://service-manual.nhs.uk/design-system/components/tag
 */
const meta = {
  title: 'Components/Content Presentation/Tag',
  component: Tag,
  argTypes: {
    colour: {
      control: 'select',
      options: [
        undefined,
        'white',
        'grey',
        'green',
        'aqua-green',
        'blue',
        'purple',
        'pink',
        'red',
        'orange',
        'yellow',
      ],
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Active',
  },
  render: (args) => <Tag {...args} />,
};

const COLOUR_LABELS: Array<{ colour?: TagColour; label: string }> = [
  { label: 'Active' },
  { colour: 'white', label: 'In progress' },
  { colour: 'grey', label: 'Inactive' },
  { colour: 'green', label: 'New' },
  { colour: 'aqua-green', label: 'Active' },
  { colour: 'blue', label: 'Pending' },
  { colour: 'purple', label: 'Received' },
  { colour: 'pink', label: 'Sent' },
  { colour: 'red', label: 'Rejected' },
  { colour: 'orange', label: 'Declined' },
  { colour: 'yellow', label: 'Delayed' },
];

export const AllColours: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {COLOUR_LABELS.map(({ colour, label }) => (
        <Tag key={colour ?? 'default'} colour={colour}>
          {label}
        </Tag>
      ))}
    </div>
  ),
};

export const NoBorder: Story = {
  args: {
    noBorder: true,
    children: 'Active',
  },
  render: (args) => <Tag {...args} />,
};
