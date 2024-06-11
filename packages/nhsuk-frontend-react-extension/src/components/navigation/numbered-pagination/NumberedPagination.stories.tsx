import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NumberedPagination } from './NumberedPagination';

const meta: Meta<typeof NumberedPagination> = {
  title: 'Components/Navigation/Numbered Pagination',
  component: NumberedPagination,
  subcomponents: {
    'NumberedPagination.Next': NumberedPagination.Next,
    'NumberedPagination.Previous': NumberedPagination.Previous,
    'NumberedPagination.List': NumberedPagination.List,
    'NumberedPagination.ListItem': NumberedPagination.ListItem,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof NumberedPagination>;

export const Default: Story = {
  render: (args) => (
    <NumberedPagination {...args}>
      <NumberedPagination.Previous>Previous</NumberedPagination.Previous>
      <NumberedPagination.List>
        <NumberedPagination.ListItem current>1</NumberedPagination.ListItem>
        <NumberedPagination.ListItem>2</NumberedPagination.ListItem>
        <NumberedPagination.ListItem ellipses>3</NumberedPagination.ListItem>
        <NumberedPagination.ListItem>4</NumberedPagination.ListItem>
        <NumberedPagination.ListItem>5</NumberedPagination.ListItem>
      </NumberedPagination.List>
      <NumberedPagination.Next>Next</NumberedPagination.Next>
    </NumberedPagination>
  ),
};
