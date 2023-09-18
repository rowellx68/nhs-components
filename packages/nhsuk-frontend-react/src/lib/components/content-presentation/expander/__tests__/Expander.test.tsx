import { render, screen } from '@/utils/test-utils'
import { describe, it, expect } from 'vitest'
import Expander from '..'

describe('Expander', () => {
  it('should match snapshot', () => {
    render(
      <Expander data-testid="expander">
        <Expander.Summary>Summary text</Expander.Summary>
        <Expander.Text>Details text</Expander.Text>
      </Expander>,
    )

    expect(screen.getByTestId('expander')).toMatchSnapshot()
  })
})
