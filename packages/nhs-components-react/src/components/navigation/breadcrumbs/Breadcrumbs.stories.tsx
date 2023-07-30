import type { Meta, StoryObj } from '@storybook/react'
import Breadcrumbs from '.'

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Components/Navigation/Breadcrumbs',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Breadcrumbs>

/**
 * The basic usage of the Breadcrumb component.
 */
export const Basic: Story = {
  render: (args) => (
    <Breadcrumbs {...args}>
      <Breadcrumbs.Item href="/start">Home</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/step-1">Step 1</Breadcrumbs.Item>
      <Breadcrumbs.Item href="/step-2">Step 2</Breadcrumbs.Item>
      <Breadcrumbs.Back href="/step-2">Step 2</Breadcrumbs.Back>
    </Breadcrumbs>
  ),
}
