import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Form Elements/Button',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

/**
 * The basic usage of the Button component.
 */
export const Basic: Story = {
  args: {
    disabled: false,
    secondary: false,
    reverse: false,
  },
  render: (args) => <Button {...args}>Continue</Button>,
}

/**
 * The Button component with the disabled prop set to true.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <Button {...args}>Continue</Button>,
}

/**
 * The Button component with the secondary prop set to true.
 */
export const Secondary: Story = {
  args: {
    secondary: true,
  },
  render: (args) => <Button {...args}>Continue</Button>,
}

/**
 * The Button component with the reverse prop set to true.
 */
export const Reverse: Story = {
  args: {
    reverse: true,
  },
  render: (args) => <Button {...args}>Continue</Button>,
}
