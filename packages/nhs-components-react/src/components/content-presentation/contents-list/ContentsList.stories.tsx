import type { Meta, StoryObj } from '@storybook/react'
import ContentsList from '.'

const meta: Meta<typeof ContentsList> = {
  component: ContentsList,
  title: 'Components/Content Presentation/ContentsList',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ContentsList>

/**
 * The basic usage of the Contents List component.
 */
export const Basic: Story = {
  args: {
    visuallyHiddenText: 'Contents',
  },
  render: (args) => (
    <ContentsList {...args}>
      <ContentsList.Item href="#section-1">Section 1</ContentsList.Item>
      <ContentsList.Item href="#section-2">Section 2</ContentsList.Item>
      <ContentsList.Item href="#section-3">Section 3</ContentsList.Item>
    </ContentsList>
  ),
}

/**
 * The Contents List Item component with the current props set to true.
 */
export const ListItem: Story = {
  render: (args) => (
    <ContentsList {...args}>
      <ContentsList.Item href="#section-1" current>
        Section 1
      </ContentsList.Item>
      <ContentsList.Item href="#section-2">Section 2</ContentsList.Item>
      <ContentsList.Item href="#section-3">Section 3</ContentsList.Item>
    </ContentsList>
  ),
}
