import type { Meta, StoryObj } from '@storybook/react'
import ActionLink from '.'
import { HTMLProps } from 'react'

const meta: Meta<typeof ActionLink> = {
  component: ActionLink,
  title: 'Components/Navigation/ActionLink',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ActionLink>

/**
 * The basic usage of the ActionLink component.
 */
export const Basic: Story = {
  args: {
    children: 'Go to Page 1',
    asElement: 'a',
    href: '#',
    to: '#',
  },
  render: (args) => <ActionLink {...args} />,
}

// eslint-disable-next-line jsx-a11y/anchor-has-content
const Link = (props: HTMLProps<HTMLAnchorElement>) => <a {...props} />

/**
 * ActionLink with asElement prop set to 'Link'.
 */
export const AsLinkElement: Story = {
  args: {
    children: 'Go to Page 1',
    asElement: Link,
    to: '#',
  },
  render: (args) => <ActionLink {...args} />,
}
