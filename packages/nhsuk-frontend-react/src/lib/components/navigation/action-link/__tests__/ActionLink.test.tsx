import { render, screen } from '@/utils/test-utils'
import { describe, expect, test } from 'vitest'
import { Link } from 'react-router-dom'
import ActionLink from '..'

describe('ActionLink', () => {
  test('should match the snapshot', () => {
    render(
      <ActionLink data-testid="action-link" href="/some-url">
        View details
      </ActionLink>,
    )
    expect(screen.getAllByTestId('action-link')).toMatchSnapshot()
  })

  test('accepts react-router-dom Link element', () => {
    render(
      <ActionLink data-testid="action-link" asElement={Link} to="/some-url">
        View details
      </ActionLink>,
    )
    expect(screen.getAllByTestId('action-link')).toMatchSnapshot()
  })
})
