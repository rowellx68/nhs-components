import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorSummary } from './ErrorSummary';

/**
 * Include an error summary at the top of a page to summarise any mistakes a user has made.
 *
 * https://service-manual.nhs.uk/design-system/components/error-summary
 */
const meta: Meta<typeof ErrorSummary> = {
  title: 'Components/Form Elements/Error Summary',
  component: ErrorSummary,
  subcomponents: {
    'ErrorSummary.Title': ErrorSummary.Title,
    'ErrorSummary.Body': ErrorSummary.Body,
    'ErrorSummary.List': ErrorSummary.List,
    'ErrorSummary.ListItem': ErrorSummary.ListItem,
  } as Record<string, React.ComponentType<any>>,
};

export default meta;

type Story = StoryObj<typeof ErrorSummary>;

export const Example: Story = {
  args: {
    focusOnPageLoad: true,
  },
  render: (args) => (
    <ErrorSummary {...args}>
      <ErrorSummary.Title>There is a problem</ErrorSummary.Title>
      <ErrorSummary.Body>
        <p>Describe the errors and how to correct them</p>
        <ErrorSummary.List>
          <ErrorSummary.ListItem href="#">
            Date of birth must be in the past
          </ErrorSummary.ListItem>
        </ErrorSummary.List>
      </ErrorSummary.Body>
    </ErrorSummary>
  ),
};
