import type { Meta, StoryObj } from '@storybook/react'
import ErrorMessage from '.'

const meta: Meta<typeof ErrorMessage> = {
  component: ErrorMessage,
  title: 'Components/Form Elements/ErrorMessage',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ErrorMessage>

/**
 * The basic usage of the ErrorMessage component.
 */
export const Basic: Story = {
  args: {
    visuallyHiddenText: 'Error',
    children: 'Example error message',
  },
  render: (args) => <ErrorMessage {...args} />,
}
