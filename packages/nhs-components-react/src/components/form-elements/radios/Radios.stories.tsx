import type { Meta, StoryObj } from '@storybook/react'
import Radios from '.'

const meta: Meta<typeof Radios> = {
  component: Radios,
  title: 'Components/Form Elements/Radios',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Radios>

/**
 * The basic usage of the Radios component.
 */
export const Basic: Story = {
  args: {
    label: 'This is a label',
    hint: 'This is a hint',
    inline: false,
    error: '',
  },
  render: (args) => (
    <Radios {...args}>
      <Radios.Radio value="yes" hint="some hint">
        Yes
      </Radios.Radio>
      <Radios.Radio value="no">No</Radios.Radio>
    </Radios>
  ),
}

/**
 * The basic usage of the Radios component with a divider.
 */
export const WithDivider: Story = {
  render: (args) => (
    <Radios label="Radios with divider" {...args}>
      <Radios.Radio value="yes">Yes</Radios.Radio>
      <Radios.Radio value="no">No</Radios.Radio>
      <Radios.Divider>or</Radios.Divider>
      <Radios.Radio value="maybe">Maybe</Radios.Radio>
    </Radios>
  ),
}

/**
 * The basic usage of the Radios component with a conditional.
 */
export const WithConditional: Story = {
  render: (args) => (
    <Radios label="Radios with conditional" {...args}>
      <Radios.Radio value="yes" conditional="Conditional content">
        Yes
      </Radios.Radio>
      <Radios.Radio value="no">No</Radios.Radio>
    </Radios>
  ),
}
