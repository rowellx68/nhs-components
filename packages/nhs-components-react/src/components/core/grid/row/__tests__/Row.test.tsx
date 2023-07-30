import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import Row from '..'

describe('Row', () => {
  test('should match snapshot', () => {
    render(<Row data-testid="row">What is your name?</Row>)

    expect(screen.getByTestId('row')).toMatchSnapshot()
  })
})
