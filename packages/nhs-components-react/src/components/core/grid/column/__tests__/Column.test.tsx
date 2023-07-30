import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import Column from '..'
import { ColumnWidth } from '../Column'

describe('Column', () => {
  test('should match snapshot', () => {
    render(<Column data-testid="column">What is your name?</Column>)

    expect(screen.getByTestId('column')).toMatchSnapshot()
  })

  test.each([
    'full',
    'one-half',
    'one-third',
    'two-thirds',
    'one-quarter',
    'three-quarters',
  ] as ColumnWidth[])('should match snapshot - width %s', (width) => {
    render(
      <Column data-testid="column" width={width}>
        What is your name?
      </Column>,
    )

    expect(screen.getByTestId('column')).toMatchSnapshot()
  })
})
