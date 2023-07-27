import { describe, test } from 'vitest'
import Textarea from '..'
import { render, screen } from '@/utils/test-utils'

describe('Textarea', () => {
  test('should match the snapshot', () => {
    render(<Textarea data-testid="textarea" defaultValue="This is the value" />)

    expect(screen.getByTestId('textarea').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - label, hint, error', () => {
    render(
      <Textarea
        data-testid="textarea"
        label="Label"
        hint="Hint"
        error="Error"
        defaultValue="This is the value"
      />,
    )

    expect(screen.getByTestId('textarea').parentNode).toMatchSnapshot()
  })
})
