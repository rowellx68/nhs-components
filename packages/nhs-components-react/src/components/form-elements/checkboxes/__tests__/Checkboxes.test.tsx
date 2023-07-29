import { render, screen, userEvent } from '@/utils/test-utils'
import { describe, test } from 'vitest'
import Checkboxes from '..'

describe('Checkboxes', () => {
  test('should match the snapshot', () => {
    render(
      <Checkboxes data-testid="checkboxes" label="Label">
        <Checkboxes.Box value="1">Option 1</Checkboxes.Box>
        <Checkboxes.Box value="2">Option 2</Checkboxes.Box>
      </Checkboxes>,
    )

    expect(screen.getByTestId('checkboxes').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - hint, error', () => {
    render(
      <Checkboxes data-testid="checkboxes" label="Label" error="Error">
        <Checkboxes.Box value="1" hint="Hint">
          Option 1
        </Checkboxes.Box>
        <Checkboxes.Box value="2">Option 2</Checkboxes.Box>
      </Checkboxes>,
    )

    expect(screen.getByTestId('checkboxes').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - conditional', () => {
    render(
      <Checkboxes data-testid="checkboxes" label="Label" error="Error">
        <Checkboxes.Box defaultChecked value="1" hint="Hint" conditional="Yay">
          Option 1
        </Checkboxes.Box>
        <Checkboxes.Box value="2">Option 2</Checkboxes.Box>
      </Checkboxes>,
    )

    expect(screen.getByTestId('checkboxes').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - checked', () => {
    render(
      <Checkboxes data-testid="checkboxes" label="Label" error="Error">
        <Checkboxes.Box checked value="1" hint="Hint" conditional="Yay">
          Option 1
        </Checkboxes.Box>
        <Checkboxes.Box value="2">Option 2</Checkboxes.Box>
      </Checkboxes>,
    )

    expect(screen.getByTestId('checkboxes').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - clicked', async () => {
    render(
      <Checkboxes data-testid="checkboxes" label="Label" error="Error">
        <Checkboxes.Box value="1" hint="Hint" conditional="Yay">
          Option 1
        </Checkboxes.Box>
        <Checkboxes.Box value="2">Option 2</Checkboxes.Box>
      </Checkboxes>,
    )

    await userEvent.click(screen.getByLabelText('Option 1'))

    expect(screen.getByTestId('checkboxes').parentNode).toMatchSnapshot()
  })
})
