import { render, screen } from '@/utils/test-utils'
import { describe } from 'vitest'
import Details from '..'

describe('Details', () => {
  it('should match snapshot', () => {
    render(
      <Details data-testid="details">
        <Details.Summary>Summary text</Details.Summary>
        <Details.Text>Details text</Details.Text>
      </Details>,
    )

    expect(screen.getByTestId('details')).toMatchSnapshot()
  })
})
