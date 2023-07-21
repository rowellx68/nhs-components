import type { Meta, StoryObj } from '@storybook/react'
import Breadcrumb from '.'

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  title: 'Components/Navigation/Breadcrumb',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Breadcrumb>

/**
 * The basic usage of the Breadcrumb component.
 */
export const Basic: Story = {
  render: (args) => (
    <Breadcrumb {...args}>
      <Breadcrumb.Item href="/start">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/step-1">Step 1</Breadcrumb.Item>
      <Breadcrumb.Item href="/step-2">Step 2</Breadcrumb.Item>
      <Breadcrumb.Back href="/step-2">Step 2</Breadcrumb.Back>
    </Breadcrumb>
  ),
}
