import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import Input from '../Input'

describe('Input', () => {
  test('should match the snapshot', () => {
    render(<Input data-testid="input" />)

    expect(screen.getByTestId('input').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - label', () => {
    render(<Input data-testid="input" label="First name" />)

    expect(screen.getByTestId('input').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - hint', () => {
    render(
      <Input data-testid="input" hint="Optionally provide your phone number" />,
    )

    expect(screen.getByTestId('input').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - error', () => {
    render(<Input data-testid="input" error="This is an error" />)

    expect(screen.getByTestId('input').parentNode).toMatchSnapshot()
  })
})
