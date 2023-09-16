import type { Meta, StoryObj } from '@storybook/react'
import DateInput from '.'

const meta: Meta<typeof DateInput> = {
  component: DateInput,
  title: 'Components/Form Elements/Date Input',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof DateInput>

/**
 * The basic usage of the Date Input component.
 */
export const Basic: Story = {
  args: {
    label: 'What is your date of birth?',
    hint: 'For example, 31 03 1980',
    error: '',
  },
  render: (args) => <DateInput {...args} />,
}

/**
 * Date Input with separate day, month and year fields.
 */
export const SeparateFields: Story = {
  args: {
    label: 'What is your date of birth?',
    hint: 'For example, 31 03 1980',
  },
  render: (args) => (
    <DateInput {...args}>
      <DateInput.Day />
      <DateInput.Month />
      <DateInput.Year />
    </DateInput>
  ),
}
