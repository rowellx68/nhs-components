import { render, screen } from '@/utils/test-utils'
import { describe, test, expect } from 'vitest'
import Hint from '..'

describe('Hint', () => {
  test('should match the snapshot', () => {
    render(<Hint data-testid="hint">This is a hint</Hint>)

    expect(screen.getByTestId('hint')).toMatchSnapshot()
  })
})
