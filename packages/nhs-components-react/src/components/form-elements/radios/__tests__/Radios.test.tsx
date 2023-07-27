import { render, screen } from '@/utils/test-utils'
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
})
