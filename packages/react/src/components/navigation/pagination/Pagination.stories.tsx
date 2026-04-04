import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { Pagination } from './Pagination';

/**
 * Use pagination to allow users to navigate between related pages, for example about a single condition.
 *
 * https://service-manual.nhs.uk/design-system/components/pagination
 */
const meta = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  subcomponents: {
    'Pagination.Previous': Pagination.Previous,
    'Pagination.Next': Pagination.Next,
    'Pagination.List': Pagination.List,
    'Pagination.Item': Pagination.Item,
    'Pagination.Ellipsis': Pagination.Ellipsis,
  } as Record<string, React.ComponentType<any>>,
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Previous href="#" pageTitle="Treatments" />
      <Pagination.Next href="#" pageTitle="Symptoms" />
    </Pagination>
  ),
};

export const WithOnlyNext: Story = {
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Next href="#" pageTitle="Symptoms" />
    </Pagination>
  ),
};

export const WithOnlyPrevious: Story = {
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Previous href="#" pageTitle="Treatments" />
    </Pagination>
  ),
};

export const Numbered: Story = {
  args: {
    numbered: true,
  },
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Previous href="#" numbered />
      <Pagination.List>
        <Pagination.Item page={1} href="#" />
        <Pagination.Item page={2} href="#" current />
        <Pagination.Item page={3} href="#" />
      </Pagination.List>
      <Pagination.Next href="#" numbered />
    </Pagination>
  ),
};
