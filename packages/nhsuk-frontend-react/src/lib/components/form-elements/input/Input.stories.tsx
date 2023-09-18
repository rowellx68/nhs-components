import type { Meta, StoryObj } from '@storybook/react'
import Input from '.'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Form Elements/Input',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Input>

/**
 * The basic usage of the Input component.
 */
export const Basic: Story = {
  args: {
    id: 'example',
    label: 'Example',
    hint: 'This is a hint',
    error: '',
  },
  render: (args) => <Input {...args} />,
}

/**
 * The Input component with a width modifier.
 */
export const Width: Story = {
  args: {
    id: 'example',
    label: 'Label with width modifier',
    hint: 'This is a hint',
    width: '10',
  },
  render: (args) => <Input {...args} />,
}

/**
 * The Input component with an error.
 */
export const Error: Story = {
  args: {
    id: 'example',
    label: 'Label with error',
    hint: 'This is a hint',
    error: 'This is an error',
  },
  render: (args) => <Input {...args} />,
}
