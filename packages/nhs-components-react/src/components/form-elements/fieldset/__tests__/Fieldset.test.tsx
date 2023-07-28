import { render, screen } from '@/utils/test-utils'
import { describe, test, expect } from 'vitest'
import Fieldset from '../Fieldset'
import { Size } from '@/types/nhsuk-sizes'
import Input from '../../input'

describe('Fieldset', () => {
  test('should match the snapshot', () => {
    render(<Fieldset data-testid="fieldset" />)

    expect(screen.getByTestId('fieldset')).toMatchSnapshot()
  })

  test('should match the snapshot - registered elements', () => {
    render(
      <Fieldset data-testid="fieldset">
        <Input id="sample-input" />
      </Fieldset>,
    )

    expect(screen.getByTestId('fieldset')).toMatchSnapshot()
  })

  test('should match the snapshot - errored elements', () => {
    render(
      <Fieldset data-testid="fieldset">
        <Input id="sample-input" error="this is an error" />
      </Fieldset>,
    )

    expect(screen.getByTestId('fieldset')).toMatchSnapshot()
  })

  test('should match the snapshot - errored elements disableErrorLine', () => {
    render(
      <Fieldset data-testid="fieldset" disableErrorLine>
        <Input id="sample-input" error="this is an error" />
      </Fieldset>,
    )

    expect(screen.getByTestId('fieldset')).toMatchSnapshot()
  })
})

describe('Fieldset.Legend', () => {
  test('should match the snapshot', () => {
    render(
      <Fieldset.Legend data-testid="fieldset-legend">Legend</Fieldset.Legend>,
    )

    expect(screen.getByTestId('fieldset-legend')).toMatchSnapshot()
  })

  test('should match the snapshot - isPageHeading', () => {
    render(
      <Fieldset.Legend data-testid="fieldset-legend" isPageHeading>
        Legend
      </Fieldset.Legend>,
    )

    expect(screen.getByTestId('fieldset-legend')).toMatchSnapshot()
  })

  test('should match the snapshot - isPageHeading as h2', () => {
    render(
      <Fieldset.Legend
        data-testid="fieldset-legend"
        isPageHeading
        asElement="h2"
      >
        Legend
      </Fieldset.Legend>,
    )

    expect(screen.getByTestId('fieldset-legend')).toMatchSnapshot()
  })

  test.each(['s', 'm', 'l', 'xl'] as Size[])(
    'should match the snapshot - size %s',
    (size: Size) => {
      render(
        <Fieldset.Legend data-testid="fieldset-legend" size={size}>
          Legend
        </Fieldset.Legend>,
      )

      expect(screen.getByTestId('fieldset-legend')).toMatchSnapshot()
    },
  )
})
