import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import Select from '..'

describe('Select', () => {
  test('should match the snapshot', () => {
    render(
      <Select data-testid="select" label="Choose a country">
        <Select.Option value="england">England</Select.Option>
        <Select.Option value="northern-ireland">Northern Ireland</Select.Option>
        <Select.Option value="scotland">Scotland</Select.Option>
        <Select.Option value="wales">Wales</Select.Option>
        <Select.Option value="channel-islands">Channel Islands</Select.Option>
        <Select.Option value="isle-of-man">Isle of Man</Select.Option>
      </Select>,
    )

    expect(screen.getByTestId('select').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - hint', () => {
    render(
      <Select
        data-testid="select"
        label="Choose a country"
        hint="If you are from the Guernsey or Jersey, please select Channel Islands"
      >
        <Select.Option value="england">England</Select.Option>
        <Select.Option value="northern-ireland">Northern Ireland</Select.Option>
        <Select.Option value="scotland">Scotland</Select.Option>
        <Select.Option value="wales">Wales</Select.Option>
        <Select.Option value="channel-islands">Channel Islands</Select.Option>
        <Select.Option value="isle-of-man">Isle of Man</Select.Option>
      </Select>,
    )

    expect(screen.getByTestId('select').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - error', () => {
    render(
      <Select
        data-testid="select"
        label="Choose a country"
        error="Please choose one"
      >
        <Select.Option value="england">England</Select.Option>
        <Select.Option value="northern-ireland">Northern Ireland</Select.Option>
        <Select.Option value="scotland">Scotland</Select.Option>
        <Select.Option value="wales">Wales</Select.Option>
        <Select.Option value="channel-islands">Channel Islands</Select.Option>
        <Select.Option value="isle-of-man">Isle of Man</Select.Option>
      </Select>,
    )

    expect(screen.getByTestId('select').parentNode).toMatchSnapshot()
  })
})
