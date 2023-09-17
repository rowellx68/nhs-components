import type { Meta, StoryObj } from '@storybook/react'
import Label from '.'

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Components/Core/Label',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Label>

/**
 * The basic usage of the Label component.
 */
export const Basic: Story = {
  args: {
    children: 'Example',
  },
  render: (args) => <Label {...args} />,
}
