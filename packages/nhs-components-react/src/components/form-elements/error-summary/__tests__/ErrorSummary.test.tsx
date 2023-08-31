import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import ErrorSummary from '..'

describe('ErrorSummary', () => {
  test('should match the snapshot', () => {
    render(
      <ErrorSummary data-testid="error-summary">
        <ErrorSummary.Title>Error summary title</ErrorSummary.Title>
        <ErrorSummary.Body>
          <ErrorSummary.List>
            <ErrorSummary.Item href="#example-error-1">
              Link to error with explanation
            </ErrorSummary.Item>
          </ErrorSummary.List>
        </ErrorSummary.Body>
      </ErrorSummary>,
    )

    expect(screen.getByTestId('error-summary')).toMatchSnapshot()
  })
})
