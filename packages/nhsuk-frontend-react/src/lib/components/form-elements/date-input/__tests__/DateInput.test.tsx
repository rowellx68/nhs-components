import { render, screen, userEvent } from '@/utils/test-utils'
import { describe, test, expect, vi } from 'vitest'
import DateInput from '..'
import { DateInputValue } from '../DateInput'

describe('DateInput', () => {
  test('should match the snapshot', () => {
    render(<DateInput data-testid="date-input" label="Label" />)

    expect(screen.getByTestId('date-input')).toMatchSnapshot()
  })

  test('should match the snapshot - hint, error', () => {
    render(
      <DateInput data-testid="date-input" label="Label" error="Error">
        <DateInput.Day />
        <DateInput.Month />
        <DateInput.Year />
      </DateInput>,
    )

    expect(screen.getByTestId('date-input')).toMatchSnapshot()
  })

  test.each([
    { day: '1', month: '1', year: '2000' },
    { month: '1', year: '2000' },
    { day: '1', year: '2000' },
    { day: '1', month: '1' },
    {},
  ] as Partial<DateInputValue>[])(
    'should match the snapshot - value %s',
    (value) => {
      render(<DateInput data-testid="date-input" label="Label" value={value} />)
    },
  )

  test('should match the snapshot - defaultValue', () => {
    render(
      <DateInput
        data-testid="date-input"
        label="Label"
        defaultValue={{ day: '1', month: '1', year: '2000' }}
      />,
    )
  })

  test('should match the snapshot - autoSelectNext', async () => {
    render(
      <DateInput data-testid="date-input" label="Label" autoSelectNext>
        <DateInput.Day data-testid="date-day" />
        <DateInput.Month data-testid="date-month" />
        <DateInput.Year data-testid="date-year" />
      </DateInput>,
    )

    const dayInput = screen.getByTestId('date-day')
    const monthInput = screen.getByTestId('date-month')
    const yearInput = screen.getByTestId('date-year')

    await userEvent.type(dayInput, '10')
    await userEvent.type(monthInput, '10')
    await userEvent.type(yearInput, '2010')

    expect(screen.getByTestId('date-input')).toMatchSnapshot()
  })

  test('should match the snapshot - type value', async () => {
    render(
      <DateInput data-testid="date-input" label="Label">
        <DateInput.Day data-testid="date-day" />
        <DateInput.Month data-testid="date-month" />
        <DateInput.Year data-testid="date-year" />
      </DateInput>,
    )

    const dayInput = screen.getByTestId('date-day')
    const monthInput = screen.getByTestId('date-month')
    const yearInput = screen.getByTestId('date-year')

    await userEvent.type(dayInput, '10')
    await userEvent.type(monthInput, '10')
    await userEvent.type(yearInput, '2010')

    expect(screen.getByTestId('date-input')).toMatchSnapshot()
  })

  test('should match the snapshot - onChange', async () => {
    const onChange = vi.fn()

    render(
      <DateInput data-testid="date-input" label="Label" onChange={onChange}>
        <DateInput.Day data-testid="date-day" />
        <DateInput.Month data-testid="date-month" />
        <DateInput.Year data-testid="date-year" />
      </DateInput>,
    )

    const dayInput = screen.getByTestId('date-day')
    const monthInput = screen.getByTestId('date-month')
    const yearInput = screen.getByTestId('date-year')

    await userEvent.type(dayInput, '10')
    await userEvent.type(monthInput, '10')
    await userEvent.type(yearInput, '2010')

    expect(screen.getByTestId('date-input')).toMatchSnapshot()
    expect(onChange).toHaveBeenCalledTimes(8)
  })
})
