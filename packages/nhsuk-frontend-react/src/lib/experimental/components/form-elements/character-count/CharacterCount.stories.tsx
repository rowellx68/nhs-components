import type { Meta, StoryObj } from '@storybook/react'
import CharacterCount from '.'

const meta: Meta<typeof CharacterCount> = {
  component: CharacterCount,
  title: 'Experimental/Components/Form Elements/Character Count',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CharacterCount>

/**
 * The basic usage of the Character Count component.
 */
export const Basic: Story = {
  args: {
    label: 'Example',
    hint: 'This is a hint',
    rows: 5,
    mode: 'character',
    limit: 10,
    countHint: (limit) => `You can enter up to ${limit} characters`,
    countRemaining: (remaining) => `You have ${remaining} characters remaining`,
    countError: (excess) => `You have ${excess} characters too many`,
  },
  render: (args) => <CharacterCount {...args} />,
}

/**
 * The usage of the Character Count component in word count.
 */
export const WordCount: Story = {
  args: {
    label: 'Example',
    hint: 'This is a hint',
    rows: 5,
    mode: 'word',
    limit: 5,
    countHint: (limit) => `You can enter up to ${limit} words`,
    countRemaining: (remaining) => `You have ${remaining} words remaining`,
    countError: (excess) => `You have ${excess} words too many`,
  },
  render: (args) => <CharacterCount {...args} />,
}

/**
 * The usage of the Character Count component with a threshold.
 */
export const Threshold: Story = {
  args: {
    label: 'Example',
    hint: 'This is a hint',
    rows: 5,
    mode: 'character',
    limit: 10,
    threshold: 75,
    countHint: (limit) => `You can enter up to ${limit} characters`,
    countRemaining: (remaining) => `You have ${remaining} characters remaining`,
    countError: (excess) => `You have ${excess} characters too many`,
  },
  render: (args) => <CharacterCount {...args} />,
}

/**
 * The usage of the Character Count component with a threshold.
 */
export const ThresholdWordCount: Story = {
  args: {
    label: 'Example',
    hint: 'This is a hint',
    rows: 5,
    mode: 'word',
    limit: 5,
    threshold: 75,
    countHint: (limit) => `You can enter up to ${limit} words`,
    countRemaining: (remaining) => `You have ${remaining} words remaining`,
    countError: (excess) => `You have ${excess} words too many`,
  },
  render: (args) => <CharacterCount {...args} />,
}
