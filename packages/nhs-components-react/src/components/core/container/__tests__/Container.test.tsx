import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import Container from '..'

describe('Container', () => {
  test('should match snapshot', () => {
    render(<Container data-testid="container">What is your name?</Container>)

    expect(screen.getByTestId('container')).toMatchSnapshot()
  })

  test('should match snapshot - fluid', () => {
    render(
      <Container data-testid="container" fluid>
        What is your name?
      </Container>,
    )

    expect(screen.getByTestId('container')).toMatchSnapshot()
  })
})
