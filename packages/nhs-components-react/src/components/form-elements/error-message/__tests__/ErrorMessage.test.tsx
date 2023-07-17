import { render, screen } from '@/utils/test-utils'
import { describe, test, expect } from 'vitest'
import ErrorMessage from '..'

describe('ErrorMessage', () => {
  test('should match the snapshot', () => {
    render(
      <ErrorMessage data-testid="error-message">This is an error</ErrorMessage>,
    )

    expect(screen.getByTestId('error-message')).toMatchSnapshot()
  })

  test('should match the snapshot - visuallyHiddenText', () => {
    render(
      <ErrorMessage data-testid="error-message" visuallyHiddenText="Custom">
        This is an error
      </ErrorMessage>,
    )

    expect(screen.getByTestId('error-message')).toMatchSnapshot()
  })
})
