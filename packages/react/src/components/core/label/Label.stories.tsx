import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Label } from './Label';

/**
 * Use label to describe a form input.
 *
 * https://service-manual.nhs.uk/design-system/styles/typography#labels-and-legends
 */
const meta = {
  title: 'Components/Core/Label',
  component: Label,
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'l', 'm', 's'],
    },
    variant: {
      control: 'select',
      options: ['page-heading', undefined],
    },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'What is your full name?',
  },
  render: (args) => <Label {...args} />,
};

export const PageHeading: Story = {
  args: {
    children: 'What is your full name?',
    variant: 'page-heading',
    size: 'l',
  },
  render: (args) => <Label {...args} />,
};

export const SizeXL: Story = {
  args: {
    children: 'What is your full name?',
    size: 'xl',
  },
  render: (args) => <Label {...args} />,
};

export const SizeL: Story = {
  args: {
    children: 'What is your full name?',
    size: 'l',
  },
  render: (args) => <Label {...args} />,
};

export const SizeM: Story = {
  args: {
    children: 'What is your full name?',
    size: 'm',
  },
  render: (args) => <Label {...args} />,
};

export const SizeS: Story = {
  args: {
    children: 'What is your full name?',
    size: 's',
  },
  render: (args) => <Label {...args} />,
};
