import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

import { ErrorMessage } from './ErrorMessage';

/**
 * Use an error message when there is a validation error. Explain what went wrong and how to fix it.
 *
 * https://service-manual.nhs.uk/design-system/components/error-message
 */
const meta = {
  title: 'Components/Form Elements/Error Message',
  component: ErrorMessage,
} satisfies Meta<typeof ErrorMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Enter your full name',
  },
  render: (args) => <ErrorMessage {...args} />,
};
