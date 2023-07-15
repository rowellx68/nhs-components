import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import { Button } from '..'

describe('Button', () => {
  test('should match the snapshot', () => {
    render(<Button data-testid="button">Click me</Button>)

    expect(screen.getByTestId('button')).toMatchSnapshot()
  })

  test('should match the snapshot - disabled', () => {
    render(
      <Button data-testid="button" disabled>
        Click me
      </Button>,
    )

    expect(screen.getByTestId('button')).toMatchSnapshot()
  })

  test('should match the snapshot - secondary', () => {
    render(
      <Button data-testid="button" secondary>
        Click me
      </Button>,
    )

    expect(screen.getByTestId('button')).toMatchSnapshot()
  })

  test('should match the snapshot - reverse', () => {
    render(
      <Button data-testid="button" reverse>
        Click me
      </Button>,
    )

    expect(screen.getByTestId('button')).toMatchSnapshot()
  })
})
