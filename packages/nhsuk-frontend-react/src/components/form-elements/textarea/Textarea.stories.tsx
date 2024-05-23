import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

/**
 * Use textarea to let users enter more than 1 line of text.
 *
 * https://service-manual.nhs.uk/design-system/components/textarea
 */
const meta: Meta<typeof Textarea> = {
  title: 'Components/Form Elements/Textarea',
  component: Textarea,
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Can you provide more detail?',
    hint: 'Do not include personal or financial information, for example, your National Insurance number or credit card details.',
  },
  render: (args) => <Textarea {...args} />,
};

export const WithRows: Story = {
  args: {
    label: 'Can you provide more detail?',
    hint: 'Do not include personal or financial information, for example, your National Insurance number or credit card details.',
    rows: 10,
  },
  render: (args) => <Textarea {...args} />,
};

export const WithError: Story = {
  args: {
    label: `Why can't you provide a National Insurance number?`,
    error: 'You must provide an explanation.',
    rows: 5,
  },
  render: (args) => <Textarea {...args} />,
};
