import type { Meta, StoryObj } from '@storybook/react'
import Header from '.'

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Components/Navigation/Header',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof Header>

/**
 * The basic usage of the Header component.
 */
export const Basic: Story = {
  args: {
    orgName: 'Anytown Anyplace',
    orgSplit: 'Anywhere',
    orgDescriptor: 'NHS Foundation Trust',
    white: false,
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Logo />
        <Header.Content>
          <Header.MenuToggle />
        </Header.Content>
      </Header.Container>
      <Header.Nav>
        <Header.NavItem mobileOnly href="#">
          Home
        </Header.NavItem>
        <Header.NavItem href="#">Get involved</Header.NavItem>
        <Header.NavItem href="#">About us</Header.NavItem>
        <Header.NavItem href="#">About us</Header.NavItem>
      </Header.Nav>
    </Header>
  ),
}

/**
 * Usage of header with service name styling.
 */
export const Service: Story = {
  args: {
    serviceName: 'Service name',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Logo />
        <Header.Content>
          <Header.Search />
        </Header.Content>
      </Header.Container>
    </Header>
  ),
}

/**
 * Usage of header with transactional styling.
 */
export const Transactional: Story = {
  args: {
    transactional: true,
    serviceName: 'Service name',
  },
  render: (args) => (
    <Header {...args}>
      <Header.Container>
        <Header.Logo />
        <Header.TransactionalLink />
      </Header.Container>
    </Header>
  ),
}
