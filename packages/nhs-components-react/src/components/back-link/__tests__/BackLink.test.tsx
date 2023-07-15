import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import { Link } from 'react-router-dom'
import BackLink from '..'

describe('BackLink', () => {
  test('should match the snapshot', () => {
    render(
      <BackLink data-testid="action-link" href="/some-url">
        View details
      </BackLink>,
    )
    expect(screen.getAllByTestId('action-link')).toMatchSnapshot()
  })

  test('accepts react-router-dom Link element', () => {
    render(
      <BackLink data-testid="action-link" asElement={Link} to="/some-url">
        View details
      </BackLink>,
    )
    expect(screen.getAllByTestId('action-link')).toMatchSnapshot()
  })
})
