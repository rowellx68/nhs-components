import type { Meta, StoryObj } from '@storybook/react'
import Hint from '.'

const meta: Meta<typeof Hint> = {
  component: Hint,
  title: 'Components/Form Elements/Hint',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Hint>

/**
 * The basic usage of the Hint component.
 */
export const Basic: Story = {
  args: {
    children: 'This is a hint',
  },
  render: (args) => <Hint {...args} />,
}
