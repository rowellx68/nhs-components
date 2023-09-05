import type { Meta, StoryObj } from '@storybook/react'
import DoDontList from '.'

const meta: Meta<typeof DoDontList> = {
  component: DoDontList,
  title: 'Components/Content Presentation/DoDontList',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DoDontList>

/**
 * The basic usage of the DoDontList component.
 */
export const Basic: Story = {
  args: {
    type: 'do',
  },
  render: (args) => (
    <DoDontList {...args}>
      <DoDontList.Item>Do this</DoDontList.Item>
      <DoDontList.Item>Do that</DoDontList.Item>
    </DoDontList>
  ),
}
