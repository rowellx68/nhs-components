import type { Meta, StoryObj } from '@storybook/react'
import Tag from '.'

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Components/Content Presentation/Tag',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Tag>

/**
 * The basic usage of the Tag component.
 */
export const Basic: Story = {
  args: {
    colour: 'grey',
  },
  render: (args) => <Tag {...args}>Tag</Tag>,
}
