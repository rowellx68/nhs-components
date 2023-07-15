import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import { Link } from 'react-router-dom'
import { ButtonLink } from '..'

describe('ButtonLink', () => {
  test('should match the snapshot', () => {
    render(
      <ButtonLink asElement={Link} to="/some-url" data-testid="button-link">
        Click me
      </ButtonLink>,
    )

    expect(screen.getByTestId('button-link')).toMatchSnapshot()
  })

  test('should match the snapshot - disabled', () => {
    render(
      <ButtonLink
        asElement={Link}
        to="/some-url"
        data-testid="button-link"
        disabled
      >
        Click me
      </ButtonLink>,
    )

    expect(screen.getByTestId('button-link')).toMatchSnapshot()
  })

  test('should match the snapshot - secondary', () => {
    render(
      <ButtonLink
        asElement={Link}
        to="/some-url"
        data-testid="button-link"
        secondary
      >
        Click me
      </ButtonLink>,
    )

    expect(screen.getByTestId('button-link')).toMatchSnapshot()
  })

  test('should match the snapshot - reverse', () => {
    render(
      <ButtonLink
        asElement={Link}
        to="/some-url"
        data-testid="button-link"
        reverse
      >
        Click me
      </ButtonLink>,
    )

    expect(screen.getByTestId('button-link')).toMatchSnapshot()
  })
})
