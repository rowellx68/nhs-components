import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './Pagination';

/**
 * Use pagination to allow users to navigate between related pages, for example about a single condition.
 *
 * https://service-manual.nhs.uk/design-system/components/pagination
 */
const meta: Meta<typeof Pagination> = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
  subcomponents: {
    'Pagination.Previous': Pagination.Previous,
    'Pagination.Next': Pagination.Next,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Previous pageTitle="Treatments" />
      <Pagination.Next pageTitle="Symptoms" />
    </Pagination>
  ),
};
