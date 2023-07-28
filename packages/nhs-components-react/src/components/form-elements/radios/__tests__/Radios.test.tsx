import { render, screen, userEvent } from '@/utils/test-utils'
import { describe, test } from 'vitest'
import Radios from '..'

describe('Radios', () => {
  test('should match the snapshot', () => {
    render(
      <Radios data-testid="radios" label="Label">
        <Radios.Radio value="1">Option 1</Radios.Radio>
        <Radios.Radio value="2">Option 2</Radios.Radio>
      </Radios>,
    )

    expect(screen.getByTestId('radios').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - divider', () => {
    render(
      <Radios data-testid="radios" label="Label">
        <Radios.Radio value="1">Option 1</Radios.Radio>
        <Radios.Divider />
        <Radios.Radio value="2">Option 2</Radios.Radio>
      </Radios>,
    )

    expect(screen.getByTestId('radios').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - hint, error', () => {
    render(
      <Radios data-testid="radios" label="Label" error="Error">
        <Radios.Radio value="1" hint="Hint">
          Option 1
        </Radios.Radio>
        <Radios.Radio value="2">Option 2</Radios.Radio>
      </Radios>,
    )

    expect(screen.getByTestId('radios').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - conditional', () => {
    render(
      <Radios data-testid="radios" label="Label" error="Error">
        <Radios.Radio defaultChecked value="1" hint="Hint" conditional="Yay">
          Option 1
        </Radios.Radio>
        <Radios.Radio value="2">Option 2</Radios.Radio>
      </Radios>,
    )

    expect(screen.getByTestId('radios').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - checked', () => {
    render(
      <Radios data-testid="radios" label="Label" error="Error">
        <Radios.Radio checked value="1" hint="Hint" conditional="Yay">
          Option 1
        </Radios.Radio>
        <Radios.Radio value="2">Option 2</Radios.Radio>
      </Radios>,
    )

    expect(screen.getByTestId('radios').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - clicked', async () => {
    render(
      <Radios data-testid="radios" label="Label" error="Error">
        <Radios.Radio data-testid="option-1" value="1" hint="Hint" conditional="Yay">
          Option 1
        </Radios.Radio>
        <Radios.Radio data-testid="option-2" value="2">Option 2</Radios.Radio>
      </Radios>,
    )

    const event = userEvent.setup()

    await event.click(screen.getByTestId('option-1'))
    await event.click(screen.getByTestId('option-2'))
    await event.click(screen.getByTestId('option-1'))

    expect(screen.getByTestId('radios').parentNode).toMatchSnapshot()
  })
})
