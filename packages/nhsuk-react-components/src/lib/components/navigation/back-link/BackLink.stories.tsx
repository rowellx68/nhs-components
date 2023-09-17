import type { Meta, StoryObj } from '@storybook/react'
import BackLink from '.'

const meta: Meta<typeof BackLink> = {
  component: BackLink,
  title: 'Components/Navigation/BackLink',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof BackLink>

/**
 * The basic usage of the BackLink component.
 */
export const Basic: Story = {
  args: {
    children: 'Go to the start of the service',
    href: '#',
    asElement: 'a',
  },
  render: (args) => <BackLink {...args} />,
}
