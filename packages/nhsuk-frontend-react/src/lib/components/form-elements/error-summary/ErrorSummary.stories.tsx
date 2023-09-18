import type { Meta, StoryObj } from '@storybook/react'
import ErrorSummary from '.'

const meta: Meta<typeof ErrorSummary> = {
  component: ErrorSummary,
  title: 'Components/Form Elements/ErrorSummary',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ErrorSummary>

/**
 * The basic usage of the ErrorSummary component.
 */
export const Basic: Story = {
  render: (args) => (
    <ErrorSummary {...args}>
      <ErrorSummary.Title>Error summary title</ErrorSummary.Title>
      <ErrorSummary.Body>
        <ErrorSummary.List>
          <ErrorSummary.Item href="#example-error-1">
            Example error 1
          </ErrorSummary.Item>
          <ErrorSummary.Item href="#example-error-2">
            Example error 2
          </ErrorSummary.Item>
        </ErrorSummary.List>
      </ErrorSummary.Body>
    </ErrorSummary>
  ),
}
