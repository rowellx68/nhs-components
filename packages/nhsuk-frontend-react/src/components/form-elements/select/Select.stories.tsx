import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

/**
 * Use select to let users choose an option from a long list but only use it as a last resort.
 *
 * https://service-manual.nhs.uk/design-system/components/select
 */
const meta: Meta<typeof Select> = {
  title: 'Components/Form Elements/Select',
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Label text goes here',
  },
  render: (args) => (
    <Select {...args}>
      <Select.Option value="option-1">Option 1</Select.Option>
      <Select.Option value="option-2">Option 2</Select.Option>
      <Select.Option value="option-3">Option 3</Select.Option>
    </Select>
  ),
};

export const WithHint: Story = {
  args: {
    label: 'Label text goes here',
    hint: 'Hint text goes here',
  },
  render: (args) => (
    <Select {...args}>
      <Select.Option value="option-1">Option 1</Select.Option>
      <Select.Option value="option-2">Option 2</Select.Option>
      <Select.Option value="option-3">Option 3</Select.Option>
    </Select>
  ),
};

export const WithError: Story = {
  args: {
    label: 'Label text goes here',
    error: 'Error message goes here',
  },
  render: (args) => (
    <Select {...args}>
      <Select.Option value="option-1">Option 1</Select.Option>
      <Select.Option value="option-2">Option 2</Select.Option>
      <Select.Option value="option-3">Option 3</Select.Option>
    </Select>
  ),
};
