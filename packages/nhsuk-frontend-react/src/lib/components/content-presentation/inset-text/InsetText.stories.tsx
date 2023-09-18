import type { Meta, StoryObj } from '@storybook/react'
import InsetText from '.'

const meta: Meta<typeof InsetText> = {
  component: InsetText,
  title: 'Components/Content Presentation/InsetText',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof InsetText>

/**
 * The basic usage of the InsetText component.
 */
export const Basic: Story = {
  render: (args) => (
    <InsetText {...args}>
      <p>
        You can report any suspected side effect to the{' '}
        <a href="https://yellowcard.mhra.gov.uk/" title="External website">
          UK safety scheme
        </a>
        .
      </p>
    </InsetText>
  ),
}
