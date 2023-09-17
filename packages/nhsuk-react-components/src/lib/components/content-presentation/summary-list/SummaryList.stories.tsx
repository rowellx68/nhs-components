/* eslint-disable jsx-a11y/anchor-is-valid */
import type { Meta, StoryObj } from '@storybook/react'
import SummaryList from '.'

const meta: Meta<typeof SummaryList> = {
  component: SummaryList,
  title: 'Components/Content Presentation/SummaryList',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SummaryList>

/**
 * The basic usage of the SummaryList component.
 */
export const Basic: Story = {
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Label</SummaryList.Key>
        <SummaryList.Value>Value</SummaryList.Value>
        <SummaryList.Actions>
          <a href="#">Change</a>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Label</SummaryList.Key>
        <SummaryList.Value>Value</SummaryList.Value>
        <SummaryList.Actions>
          <a href="#">Change</a>
        </SummaryList.Actions>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Label</SummaryList.Key>
        <SummaryList.Value>Value</SummaryList.Value>
        <SummaryList.Actions>
          <a href="#">Change</a>
        </SummaryList.Actions>
      </SummaryList.Row>
    </SummaryList>
  ),
}

/**
 * The borderless usage of the SummaryList component.
 */
export const Borderless: Story = {
  args: {
    borderless: true,
  },
  render: (args) => (
    <SummaryList {...args}>
      <SummaryList.Row>
        <SummaryList.Key>Label</SummaryList.Key>
        <SummaryList.Value>Value</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Label</SummaryList.Key>
        <SummaryList.Value>Value</SummaryList.Value>
      </SummaryList.Row>
      <SummaryList.Row>
        <SummaryList.Key>Label</SummaryList.Key>
        <SummaryList.Value>Value</SummaryList.Value>
      </SummaryList.Row>
    </SummaryList>
  ),
}
