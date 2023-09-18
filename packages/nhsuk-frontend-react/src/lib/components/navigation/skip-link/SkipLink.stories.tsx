import type { Meta, StoryObj } from '@storybook/react'
import SkipLink from '.'

const meta: Meta<typeof SkipLink> = {
  component: SkipLink,
  title: 'Components/Navigation/SkipLink',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SkipLink>

/**
 * The basic usage of the SkipLink component.
 */
export const Basic: Story = {
  args: {
    children: 'Skip to main content',
    href: '#maincontent',
  },
  render: (args) => (
    <div>
      <SkipLink {...args} />
      <p id="maincontent">Main content</p>
    </div>
  ),
}
