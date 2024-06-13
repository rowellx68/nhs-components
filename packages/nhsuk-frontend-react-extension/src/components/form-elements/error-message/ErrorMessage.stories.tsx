import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from './ErrorMessage';

/**
 * Use an error message when there is a validation error. Explain what went wrong and how to fix it.
 *
 * https://service-manual.nhs.uk/design-system/components/error-message
 */
const meta: Meta<typeof ErrorMessage> = {
  title: 'Components/Form Elements/Error Message',
  component: ErrorMessage,
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    children: 'Date of birth must be in the pasts',
  },
  render: (args) => <ErrorMessage {...args} />,
};
