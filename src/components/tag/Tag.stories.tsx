import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from './Tag';

/**
 * https://service-manual.nhs.uk/design-system/components/tag
 */
const meta: Meta<typeof Tag> = {
  title: 'Components/Content Presentation/Tag',
  component: Tag,
  argTypes: {
    children: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tag',
    className: 'custom-class',
  },
  render: (args) => <Tag {...args} />,
};
