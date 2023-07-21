import type { Meta, StoryObj } from '@storybook/react'
import { ButtonLink } from '.'

const meta: Meta<typeof ButtonLink> = {
  component: ButtonLink,
  title: 'Components/Form Elements/ButtonLink',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ButtonLink>

/**
 * The basic usage of the ButtonLink component.
 */
export const Basic: Story = {
  args: {
    disabled: false,
    secondary: false,
    reverse: false,
  },
  render: (args) => <ButtonLink {...args}>Continue</ButtonLink>,
}

/**
 * The ButtonLink component with the disabled prop set to true.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <ButtonLink {...args}>Continue</ButtonLink>,
}

/**
 * The ButtonLink component with the secondary prop set to true.
 */
export const Secondary: Story = {
  args: {
    secondary: true,
  },
  render: (args) => <ButtonLink {...args}>Continue</ButtonLink>,
}

/**
 * The ButtonLink component with the reverse prop set to true.
 */
export const Reverse: Story = {
  args: {
    reverse: true,
  },
  render: (args) => <ButtonLink {...args}>Continue</ButtonLink>,
}

