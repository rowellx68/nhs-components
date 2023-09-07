import type { Meta, StoryObj } from '@storybook/react'
import Pagination from '.'

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: 'Components/Navigation/Pagination',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Pagination>

/**
 * The basic usage of the Pagination component.
 */
export const Basic: Story = {
  render: (args) => (
    <Pagination {...args}>
      <Pagination.Link previous href="#previous">
        Page 1
      </Pagination.Link>
      <Pagination.Link next href="#next">
        Page 3
      </Pagination.Link>
    </Pagination>
  ),
}
