import { describe, test } from 'vitest'
import Textarea from '..'
import { render, screen } from '@/utils/test-utils'

describe('Textarea', () => {
  test('should match the snapshot', () => {
    render(<Textarea data-testid="textarea">This is the value</Textarea>)

    expect(screen.getByTestId('textarea').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - label, hint, error', () => {
    render(
      <Textarea data-testid="textarea" label="Label" hint="Hint" error="Error">
        This is the value
      </Textarea>,
    )

    expect(screen.getByTestId('textarea').parentNode).toMatchSnapshot()
  })
})
