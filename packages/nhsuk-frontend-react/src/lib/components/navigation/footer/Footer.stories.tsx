import type { Meta, StoryObj } from '@storybook/react'
import Footer from '.'

const meta: Meta<typeof Footer> = {
  component: Footer,
  title: 'Components/Navigation/Footer',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Footer>

/**
 * The basic usage of the Footer component.
 */
export const Basic: Story = {
  args: {
    visuallyHiddenText: 'Support links',
  },
  render: (args) => (
    <Footer {...args}>
      <Footer.List>
        <Footer.ListItem href="#accessibility">
          Accessibility statement
        </Footer.ListItem>
        <Footer.ListItem href="#contact-us">Contact us</Footer.ListItem>
      </Footer.List>
      <Footer.Copyright>&copy; Crown copyright</Footer.Copyright>
    </Footer>
  ),
}
