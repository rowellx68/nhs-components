import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination, PaginationNext, PaginationPrevious } from './Pagination';

/**
 * Use pagination to allow users to navigate between related pages, for example about a single condition.
 *
 * https://service-manual.nhs.uk/design-system/components/pagination
 */
const meta: Meta<typeof Pagination> = {
  title: 'Components/Navigation/Pagination',
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Pagination {...args}>
      <PaginationPrevious pageTitle="Treatments" />
      <PaginationNext pageTitle="Symptoms" />
    </Pagination>
  ),
};
