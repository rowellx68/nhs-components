import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Textarea } from './Textarea';

/**
 * Use textarea to let users enter more than 1 line of text.
 *
 * https://service-manual.nhs.uk/design-system/components/textarea
 */
const meta = {
  title: 'Components/Form Elements/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Can you provide more detail?',
    hint: 'Do not include personal information like your name, date of birth or NHS number',
  },
  render: (args) => <Textarea {...args} />,
};

export const WithRows: Story = {
  args: {
    label: 'Can you provide more detail?',
    hint: 'Do not include personal information like your name, date of birth or NHS number',
    rows: 10,
  },
  render: (args) => <Textarea {...args} />,
};

export const WithError: Story = {
  args: {
    label: 'Can you provide more detail?',
    hint: 'Do not include personal information like your name, date of birth or NHS number',
    error: 'You must provide an explanation',
    rows: 5,
  },
  render: (args) => <Textarea {...args} />,
};
