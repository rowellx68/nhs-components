import type { Meta, StoryObj } from '@storybook/react'
import Fieldset from '.'

const meta: Meta<typeof Fieldset> = {
  component: Fieldset,
  title: 'Components/Form Elements/Fieldset',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Fieldset>

/**
 * The basic usage of the Fieldset component.
 */
export const Basic: Story = {
  args: {},
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend>Example fieldset</Fieldset.Legend>
      <p>Example content</p>
    </Fieldset>
  ),
}

/**
 * The Fieldset component with a legend as a page heading.
 */
export const PageHeading: Story = {
  args: {},
  render: (args) => (
    <Fieldset {...args}>
      <Fieldset.Legend isPageHeading>Example fieldset</Fieldset.Legend>
      <p>Example content</p>
    </Fieldset>
  ),
}
