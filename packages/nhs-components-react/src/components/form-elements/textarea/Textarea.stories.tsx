import type { Meta, StoryObj } from '@storybook/react'
import Textarea from '.'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Components/Form Elements/Textarea',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Textarea>

/**
 * The basic usage of the Textarea component.
 */
export const Basic: Story = {
  args: {
    id: 'example',
    label: 'Example',
    hint: 'This is a hint',
    rows: 5,
  },
  render: (args) => <Textarea {...args} />,
}

/**
 * The Textarea component with a error modifier.
 */
export const Error: Story = {
  args: {
    id: 'example',
    label: 'Label with error modifier',
    hint: 'This is a hint',
    error: 'This is an error',
  },
  render: (args) => <Textarea {...args} />,
}

/**
 * The Textarea component with a rows modifier.
 */
export const Rows: Story = {
  args: {
    id: 'example',
    label: 'Label with rows modifier',
    hint: 'This is a hint',
    rows: 10,
  },
  render: (args) => <Textarea {...args} />,
}
