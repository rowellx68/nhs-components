import type { Meta, StoryObj } from '@storybook/react'
import DateInput, { DateInputChangeEvent, DateInputValue } from '.'
import { useState } from 'react'

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
    labelProps: { size: 'l' },
    hint: 'For example, 15 3 1984',
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
    hint: 'For example, 15 3 1984',
  },
  render: (args) => (
    <DateInput {...args}>
      <DateInput.Day />
      <DateInput.Month />
      <DateInput.Year />
    </DateInput>
  ),
}

const WithOnChangeComponent = (): JSX.Element => {
  const [state, setState] = useState<DateInputValue>()

  return (
    <>
      <p>Value: {state?.day} {state?.month} {state?.year}</p>
      <DateInput value={state} onChange={(ev: DateInputChangeEvent) => setState(ev.target.value)} />
    </>
  )
}

/**
 * Date Input with onChange handler.
 */
export const WithOnChange: Story = {
  render: () => <WithOnChangeComponent />,
}
