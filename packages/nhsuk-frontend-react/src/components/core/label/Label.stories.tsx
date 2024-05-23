import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Core/Label',
  component: Label,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['xl', 'l', 'm', 's'],
    },
    children: {
      control: {
        type: 'text',
      },
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['page-heading', undefined],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Label text',
  },
  render: (args) => <Label {...args} />,
};
