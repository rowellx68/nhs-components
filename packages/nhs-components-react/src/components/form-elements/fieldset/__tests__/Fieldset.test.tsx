import { render, screen } from '@/utils/test-utils'
import { describe, test, expect } from 'vitest'
import Fieldset from '../Fieldset'
import { Size } from '@/types/nhsuk-sizes'
import { useFieldsetContext } from '../FieldsetContext'
import { useEffect } from 'react'

describe('Fieldset', () => {
  test('should match the snapshot', () => {
    render(<Fieldset data-testid="fieldset" />)

    expect(screen.getByTestId('fieldset')).toMatchSnapshot()
  })

  test('should match the snapshot - have registered components', () => {
    const Sample = () => {
      const { register } = useFieldsetContext()

      useEffect(() => {
        register('component')
      }, [])

      return 'sample'
    }

    render(<Fieldset data-testid="fieldset">
      <Sample />
    </Fieldset>)

    expect(screen.getByTestId('fieldset').parentNode).toMatchSnapshot()
  })

  test('should match the snapshot - errored', () => {
    const Sample = () => {
      const { register, setErrored } = useFieldsetContext()

      useEffect(() => {
        register('component')
        setErrored('component')
      }, [])

      return 'sample'
    }

    render(<Fieldset data-testid="fieldset">
      <Sample />
    </Fieldset>)

    expect(screen.getByTestId('fieldset').parentNode).toMatchSnapshot()
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
