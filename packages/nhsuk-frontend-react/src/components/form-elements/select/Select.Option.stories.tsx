import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta: Meta<typeof Select.Option> = {
  title: 'Components/Form Elements/Select/Select.Option',
  component: Select.Option,
};

export default meta;

type Story = StoryObj<typeof Select.Option>;

export const Default: Story = {
  args: {
    value: 'Label text goes here',
    children: 'Option 1',
  },
  render: (args) => (
    <Select label="Label text goes here">
      <Select.Option {...args} />
      <Select.Option value="option-2">Option 2</Select.Option>
      <Select.Option value="option-3">Option 3</Select.Option>
    </Select>
  ),
};
