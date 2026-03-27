import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Select } from './Select';

/**
 * Use select to let users choose an option from a long list but only use it as a last resort.
 *
 * https://service-manual.nhs.uk/design-system/components/select
 */
const meta = {
  title: 'Components/Form Elements/Select',
  component: Select,
  subcomponents: {
    'Select.Option': Select.Option,
    'Select.Divider': Select.Divider,
  } as Record<string, React.ComponentType<any>>,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Sort by',
  },
  render: (args) => (
    <Select {...args}>
      <Select.Option value="published">Recently published</Select.Option>
      <Select.Option value="updated">Recently updated</Select.Option>
      <Select.Option value="views">Most views</Select.Option>
      <Select.Option value="comments">Most comments</Select.Option>
    </Select>
  ),
};

export const WithHint: Story = {
  args: {
    label: 'Choose location',
    hint: 'This can be different to where you went before',
  },
  render: (args) => (
    <Select {...args}>
      <Select.Option value="choose">Choose location</Select.Option>
      <Select.Option value="eastmidlands">East Midlands</Select.Option>
      <Select.Option value="eastofengland">East of England</Select.Option>
      <Select.Option value="london">London</Select.Option>
      <Select.Option value="northeast">North East</Select.Option>
      <Select.Option value="northwest">North West</Select.Option>
      <Select.Option value="southeast">South East</Select.Option>
      <Select.Option value="southwest">South West</Select.Option>
      <Select.Option value="westmidlands">West Midlands</Select.Option>
      <Select.Option value="yorkshire">Yorkshire and the Humber</Select.Option>
    </Select>
  ),
};

export const WithError: Story = {
  args: {
    label: 'Choose location',
    error: 'Select a location',
  },
  render: (args) => (
    <Select {...args}>
      <Select.Option value="choose">Choose location</Select.Option>
      <Select.Option value="eastmidlands">East Midlands</Select.Option>
      <Select.Option value="eastofengland">East of England</Select.Option>
      <Select.Option value="london">London</Select.Option>
      <Select.Option value="northeast">North East</Select.Option>
      <Select.Option value="northwest">North West</Select.Option>
      <Select.Option value="southeast">South East</Select.Option>
      <Select.Option value="southwest">South West</Select.Option>
      <Select.Option value="westmidlands">West Midlands</Select.Option>
      <Select.Option value="yorkshire">Yorkshire and the Humber</Select.Option>
    </Select>
  ),
};
