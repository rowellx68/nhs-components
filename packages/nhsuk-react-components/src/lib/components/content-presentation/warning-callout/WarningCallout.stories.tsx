import type { Meta, StoryObj } from '@storybook/react'
import WarningCallout from '.'

const meta: Meta<typeof WarningCallout> = {
  component: WarningCallout,
  title: 'Components/Content Presentation/WarningCallout',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof WarningCallout>

/**
 * The basic usage of the WarningCallout component.
 */
export const Basic: Story = {
  render: (args) => (
    <WarningCallout {...args}>
      <WarningCallout.Label>Important information</WarningCallout.Label>
      <p>
        If you have symptoms of coronavirus (COVID-19), you must self-isolate
        immediately.
      </p>
    </WarningCallout>
  ),
}
