import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import Label from '..'
import { Size } from '@/types/nhsuk-sizes'

describe('Label', () => {
  test('should match snapshot', () => {
    render(<Label data-testid="label">What is your name?</Label>)

    expect(screen.getByTestId('label')).toMatchSnapshot()
  })

  test('should match snapshot - isPageHeading', () => {
    render(
      <Label data-testid="label" isPageHeading>
        What is your name?
      </Label>,
    )

    expect(screen.getByTestId('label').parentNode).toMatchSnapshot()
  })

  test.each(['s', 'm', 'l', 'xl'] as Size[])(
    'should match snapshot - size %s',
    (size: Size) => {
      render(
        <Label data-testid="label" size={size}>
          What is your name?
        </Label>,
      )

      if (size === 'xl') {
        expect(screen.getByTestId('label').parentElement).toMatchSnapshot()
      } else {
        expect(screen.getByTestId('label')).toMatchSnapshot()
      }
    },
  )
})
