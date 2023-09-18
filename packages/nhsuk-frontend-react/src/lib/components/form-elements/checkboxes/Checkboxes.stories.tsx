import type { Meta, StoryObj } from '@storybook/react'
import Checkboxes from '.'

const meta: Meta<typeof Checkboxes> = {
  component: Checkboxes,
  title: 'Components/Form Elements/Checkboxes',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Checkboxes>

/**
 * The basic usage of the Checkboxes component.
 */
export const Basic: Story = {
  args: {
    label: 'This is a label',
    hint: 'This is a hint',
    error: '',
  },
  render: (args) => (
    <Checkboxes {...args}>
      <Checkboxes.Box value="yes" hint="some hint">
        Yes
      </Checkboxes.Box>
      <Checkboxes.Box value="no">No</Checkboxes.Box>
    </Checkboxes>
  ),
}

/**
 * The basic usage of the Checkboxes component with a conditional.
 */
export const WithConditional: Story = {
  render: (args) => (
    <Checkboxes label="Checkboxes with conditional" {...args}>
      <Checkboxes.Box value="yes" conditional="Conditional content">
        Yes
      </Checkboxes.Box>
      <Checkboxes.Box value="no">No</Checkboxes.Box>
    </Checkboxes>
  ),
}
