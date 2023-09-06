import type { Meta, StoryObj } from '@storybook/react'
import Expander from '.'

const meta: Meta<typeof Expander> = {
  component: Expander,
  title: 'Components/Content Presentation/Expander',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Expander>

/**
 * The basic usage of the Expander component.
 */
export const Basic: Story = {
  render: (args) => (
    <Expander {...args}>
      <Expander.Summary>How to find your NHS number</Expander.Summary>
      <Expander.Text>You can find your NHS number...</Expander.Text>
    </Expander>
  ),
}
