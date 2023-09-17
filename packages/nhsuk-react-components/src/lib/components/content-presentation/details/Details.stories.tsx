import type { Meta, StoryObj } from '@storybook/react'
import Details from '.'

const meta: Meta<typeof Details> = {
  component: Details,
  title: 'Components/Content Presentation/Details',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Details>

/**
 * The basic usage of the Details component.
 */
export const Basic: Story = {
  render: (args) => (
    <Details {...args}>
      <Details.Summary>How to find your NHS number</Details.Summary>
      <Details.Text>You can find your NHS number...</Details.Text>
    </Details>
  ),
}

/**
 * The Details component with the expander prop set to true. This will render the component as an expander.
 */
export const Expander: Story = {
  args: {
    expander: true,
  },
  render: (args) => (
    <Details {...args}>
      <Details.Summary>How to find your NHS number</Details.Summary>
      <Details.Text>You can find your NHS number...</Details.Text>
    </Details>
  ),
}

/**
 * A group of Details components with the expander prop set to true and wrapped in an `Details.ExpanderGroup` component.
 */
export const ExpanderGroup: Story = {
  render: (args) => (
    <Details.ExpanderGroup>
      <Details expander {...args}>
        <Details.Summary>How to find your NHS number</Details.Summary>
        <Details.Text>You can find your NHS number...</Details.Text>
      </Details>
      <Details expander>
        <Details.Summary>How to find your NHS number</Details.Summary>
        <Details.Text>You can find your NHS number...</Details.Text>
      </Details>
    </Details.ExpanderGroup>
  ),
}
