import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import Main from '..'

describe('Main', () => {
  test('should match snapshot', () => {
    render(<Main data-testid="main">What is your name?</Main>)

    expect(screen.getByTestId('main')).toMatchSnapshot()
  })

  test.each(['s', 'l', undefined] as Array<'s' | 'l' | undefined>)(
    'should match snapshot - size %s',
    (size) => {
      render(
        <Main data-testid="main" size={size}>
          What is your name?
        </Main>,
      )

      expect(screen.getByTestId('main')).toMatchSnapshot()
    },
  )
})
