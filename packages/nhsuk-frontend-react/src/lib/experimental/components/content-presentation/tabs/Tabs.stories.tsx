import type { Meta, StoryObj } from '@storybook/react'
import Tabs from '.'

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: 'Experimental/Components/Content Presentation/Tabs',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Tabs>

/**
 * The basic usage of the Tabs component.
 */
export const Basic: Story = {
  args: {
    title: 'Contents',
  },
  render: (args) => (
    <Tabs {...args}>
      <Tabs.Tab id='item-1'>
        <Tabs.Item>Item 1</Tabs.Item>
        <Tabs.Panel>
          Content goes here 1
        </Tabs.Panel>
      </Tabs.Tab>
      <Tabs.Tab id='item-2'>
        <Tabs.Item>Item 2</Tabs.Item>
        <Tabs.Panel>
          Content goes here 2
        </Tabs.Panel>
      </Tabs.Tab>
    </Tabs>
  ),
}
