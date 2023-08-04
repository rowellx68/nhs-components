import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import InsetText from '..'

describe('InsetText', () => {
  test('should match snapshot', () => {
    render(<InsetText data-testid="inset">Inset Text</InsetText>)

    expect(screen.getByTestId('inset')).toMatchSnapshot()
  })

  test('should match snapshot - visually hidden', () => {
    render(
      <InsetText data-testid="inset" visuallyHiddenText="Hidden text">
        Inset Text
      </InsetText>,
    )

    expect(screen.getByTestId('inset')).toMatchSnapshot()
  })
})
